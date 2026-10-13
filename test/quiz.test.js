import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseQuestions } from '../scripts/build-questions.mjs';
import { EXPECTED_QUESTION_COUNT, JOURNEY_SESSION_COUNT, journeySessionBounds, journeyProgress, isJourneySessionBoundary, validateBank, createSession, currentQuestion, selectAnswer, checkAnswer, nextQuestion, scoreSession, restoreSession } from '../quiz.js';

const markdown = readFileSync(new URL('../PSM_I_EXAM_PRACTICE_QUESTIONS.md', import.meta.url), 'utf8')
  .replace(/\r\n?/g, '\n');
const bank = JSON.parse(readFileSync(new URL('../questions.json', import.meta.url), 'utf8'));
const clone = (value) => structuredClone(value);
const sessionFor = (id) => {
  const session = createSession(bank, 'random', 1);
  session.questionIds = [id];
  return session;
};
function answer(session, ids) {
  for (const id of ids) session = selectAnswer(bank, session, id);
  return checkAnswer(bank, session);
}

test(`all ${EXPECTED_QUESTION_COUNT} questions match their source wording, options, keys, annotations and notes`, () => {
  assert.deepEqual(bank, parseQuestions(markdown));
  assert.equal(validateBank(bank), bank);
  assert.deepEqual(bank.map((question) => question.id), Array.from({ length: EXPECTED_QUESTION_COUNT }, (_, i) => i + 1));
  for (const question of bank) {
    const block = markdown.split(`## Question ${question.id} `)[1].split('\n---')[0];
    const promptLines = block.split('\n').filter((line) => line.startsWith('**') && line.endsWith('**') && !line.startsWith('**['));
    assert.equal(question.prompt, promptLines.map((line) => line.slice(2, -2)).join('\n\n'));
    assert.deepEqual(question.options, block.split('\n').filter((line) => /^[A-Z][.)] /.test(line))
      .map((line) => ({ id: line[0], text: line.slice(3) })));
    assert.deepEqual(question.answers, block.split('**Answer:** ')[1].split('\n')[0].trim().split(/\s+/));
    assert.equal(question.note, block.split('**Key note:** ')[1].split('\n')[0]);
    assert.ok(question.options.every((option) => option.text));
  }
  assert.ok(bank.find((question) => question.id === 32).context.startsWith('[Related'));
  for (const id of [7, 32, 100, 114]) assert.ok(bank.find((question) => question.id === id).caveat);
});

test('validator rejects malformed counts, IDs, options, keys and metadata', () => {
  assert.throws(() => validateBank([]));
  assert.throws(() => validateBank(null));
  for (const mutate of [
    (data) => { data[1].id = 1; },
    (data) => { data[0].id = EXPECTED_QUESTION_COUNT + 1; },
    (data) => { data[0].options[1].id = 'A'; },
    (data) => { data[0].answers = ['Z']; },
    (data) => { data[0].answers = ['A', 'A']; },
    (data) => { data[3].answers = ['A']; },
    (data) => { data[0].prompt = ''; },
    (data) => { data[0].note = null; },
    (data) => { data[0].type = 'unknown'; },
    (data) => { data[0].options[1].text = 'True'; },
  ]) {
    const invalid = clone(bank);
    mutate(invalid);
    assert.throws(() => validateBank(invalid));
  }
});

for (const type of ['single', 'true-false', 'select-two', 'select-three', 'select-all']) {
  test(`${type}: correct exact set, wrong set, required selection and locked feedback`, () => {
    const question = bank.find((item) => item.type === type);
    let session = sessionFor(question.id);
    assert.throws(() => checkAnswer(bank, session));
    assert.throws(() => nextQuestion(bank, session));
    session = answer(session, question.answers.toReversed());
    assert.equal(session.responses[0].correct, true);
    assert.equal(scoreSession(session).correct, 1);
    assert.throws(() => checkAnswer(bank, session));
    assert.throws(() => selectAnswer(bank, session, question.options[0].id));
    assert.equal(currentQuestion(bank, nextQuestion(bank, session)), null);
    const wrong = question.options.find((option) => !question.answers.includes(option.id)).id;
    const selected = [...question.answers];
    selected[0] = wrong;
    assert.equal(answer(sessionFor(question.id), selected).responses[0].correct, false);
    if (type === 'select-two' || type === 'select-three') {
      assert.throws(() => answer(sessionFor(question.id), [question.answers[0]]));
      assert.throws(() => answer(sessionFor(question.id), [...question.answers, wrong]));
    }
  });
}

test('select-all scores the exact key without imposing the key length as selection limit', () => {
  const question = bank.find((item) => item.id === 114);
  assert.equal(question.type, 'select-all');
  assert.deepEqual(question.answers, ['A']);
  assert.equal(answer(sessionFor(114), ['A', 'B']).responses[0].correct, false);
});

test('selection replacement and checkbox deselection do not mutate the previous session', () => {
  let single = sessionFor(1);
  const previous = single;
  single = selectAnswer(bank, single, 'A');
  single = selectAnswer(bank, single, 'B');
  assert.deepEqual(single.selected, ['B']);
  assert.deepEqual(previous.selected, []);
  let multi = sessionFor(4);
  multi = selectAnswer(bank, multi, 'A');
  multi = selectAnswer(bank, multi, 'A');
  assert.deepEqual(multi.selected, ['A']);
  multi = selectAnswer(bank, multi, 'A', false);
  assert.deepEqual(multi.selected, []);
  assert.throws(() => selectAnswer(bank, multi, 'Z'));
});

test('random sessions sample without repeats; all mode is canonical and complete', () => {
  for (const length of [1, 10, 20, 40, 80, EXPECTED_QUESTION_COUNT]) {
    for (let i = 0; i < 30; i++) {
      const session = createSession(bank, 'random', length);
      assert.equal(session.questionIds.length, length);
      assert.equal(new Set(session.questionIds).size, length);
      assert.ok(session.questionIds.every((id) => id >= 1 && id <= EXPECTED_QUESTION_COUNT));
    }
  }
  assert.deepEqual(createSession(bank, 'all', 10).questionIds, bank.map((question) => question.id));
  assert.deepEqual(createSession(bank, 'random', EXPECTED_QUESTION_COUNT, () => 0).questionIds, [...bank.slice(1).map((question) => question.id), 1]);
  for (const length of [0, EXPECTED_QUESTION_COUNT + 1, 1.2, NaN]) assert.throws(() => createSession(bank, 'random', length));
  assert.throws(() => createSession(bank, 'unknown'));
});

test('six-session random journey shuffles the full bank once and restores across sessions', () => {
  let journey = createSession(bank, 'journey', bank.length, () => 0);
  assert.equal(journey.questionIds.length, EXPECTED_QUESTION_COUNT);
  assert.equal(new Set(journey.questionIds).size, EXPECTED_QUESTION_COUNT);
  assert.notDeepEqual(journey.questionIds, bank.map((question) => question.id));
  const sessionSizes = [];
  for (let i = 0; i < JOURNEY_SESSION_COUNT; i++) {
    const sessionNumber = i + 1;
    const { start, end } = journeySessionBounds(EXPECTED_QUESTION_COUNT, sessionNumber);
    sessionSizes.push(end - start);
    assert.equal(journey.questionIds.slice(start, end).length, end - start);
    assert.deepEqual(journeyProgress(start, EXPECTED_QUESTION_COUNT), {
      sessionNumber, questionNumber: 1, sessionSize: end - start,
    });
    if (sessionNumber < JOURNEY_SESSION_COUNT) assert.equal(isJourneySessionBoundary(end, EXPECTED_QUESTION_COUNT), true);
  }
  assert.ok(Math.max(...sessionSizes) - Math.min(...sessionSizes) <= 1);
  assert.throws(() => createSession(bank, 'journey', journeySessionBounds(EXPECTED_QUESTION_COUNT, 1).end));

  while (currentQuestion(bank, journey)) {
    const question = currentQuestion(bank, journey);
    for (const id of question.answers) journey = selectAnswer(bank, journey, id);
    journey = checkAnswer(bank, journey);
    journey = nextQuestion(bank, journey);
    assert.deepEqual(restoreSession(JSON.stringify(journey), bank), journey);
  }
  assert.equal(journey.responses.length, EXPECTED_QUESTION_COUNT);
  assert.deepEqual(journey.responses.map((response) => response.questionId), journey.questionIds);
  assert.deepEqual(scoreSession(journey), { correct: EXPECTED_QUESTION_COUNT, answered: EXPECTED_QUESTION_COUNT, total: EXPECTED_QUESTION_COUNT, percent: 100 });
});

test('score progresses only on checking; completion and every intermediate state restore', () => {
  let session = createSession(bank);
  assert.deepEqual(scoreSession(session), { correct: 0, answered: 0, total: EXPECTED_QUESTION_COUNT, percent: 0 });
  while (currentQuestion(bank, session)) {
    const question = currentQuestion(bank, session);
    for (const id of question.answers) session = selectAnswer(bank, session, id);
    assert.deepEqual(restoreSession(JSON.stringify(session), bank), session);
    assert.equal(scoreSession(session).answered, session.index);
    session = checkAnswer(bank, session);
    assert.deepEqual(restoreSession(JSON.stringify(session), bank), session);
    session = nextQuestion(bank, session);
    assert.deepEqual(restoreSession(JSON.stringify(session), bank), session);
  }
  assert.deepEqual(scoreSession(session), { correct: EXPECTED_QUESTION_COUNT, answered: EXPECTED_QUESTION_COUNT, total: EXPECTED_QUESTION_COUNT, percent: 100 });
  assert.throws(() => nextQuestion(bank, session));
  assert.throws(() => checkAnswer(bank, session));
  let mixed = createSession(bank, 'random', 2);
  mixed.questionIds = [1, 2];
  mixed = nextQuestion(bank, answer(mixed, ['A']));
  mixed = answer(mixed, ['C']);
  assert.deepEqual(scoreSession(mixed), { correct: 1, answered: 2, total: 2, percent: 50 });
});

test('restore safely rejects corrupt, stale and inconsistent storage', () => {
  assert.equal(restoreSession('not JSON', bank), null);
  assert.equal(restoreSession('null', bank), null);
  const session = answer(sessionFor(1), ['B']);
  for (const mutate of [
    (value) => { value.version = 2; },
    (value) => { value.questionIds = [1, 1]; },
    (value) => { value.questionIds = [EXPECTED_QUESTION_COUNT + 1]; },
    (value) => { value.index = -1; },
    (value) => { value.index = 2; },
    (value) => { value.selected = ['A']; },
    (value) => { value.responses[0].correct = false; },
    (value) => { value.responses[0].selected = ['Z']; },
    (value) => { value.responses[0].questionId = 2; },
    (value) => { value.mode = 'all'; },
    (value) => { value.responses = [{}, {}]; },
    (value) => { value.bankSignature = 'old'; },
  ]) {
    const invalid = clone(session);
    mutate(invalid);
    assert.equal(restoreSession(JSON.stringify(invalid), bank), null);
  }
  const changed = clone(bank);
  changed[0].options[0].text += ' changed';
  assert.equal(restoreSession(JSON.stringify(session), changed), null);
});
