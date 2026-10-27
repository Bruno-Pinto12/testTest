export const STORAGE_KEY = 'psm-practice-session-v1';
export const MISSED_QUESTIONS_KEY = 'psm-practice-missed-questions-v1';
export const EXPECTED_QUESTION_COUNT = 197;
export const JOURNEY_SESSION_COUNT = 6;

export function journeySessionBounds(questionCount, sessionNumber) {
  return {
    start: Math.floor((sessionNumber - 1) * questionCount / JOURNEY_SESSION_COUNT),
    end: Math.floor(sessionNumber * questionCount / JOURNEY_SESSION_COUNT),
  };
}

export function journeyProgress(questionIndex, questionCount) {
  const sessionNumber = Math.ceil((questionIndex + 1) * JOURNEY_SESSION_COUNT / questionCount);
  const { start, end } = journeySessionBounds(questionCount, sessionNumber);
  return { sessionNumber, questionNumber: questionIndex - start + 1, sessionSize: end - start };
}

export function isJourneySessionBoundary(questionIndex, questionCount) {
  if (questionIndex <= 0 || questionIndex >= questionCount) return false;
  const completedSessions = Math.ceil(questionIndex * JOURNEY_SESSION_COUNT / questionCount);
  return journeySessionBounds(questionCount, completedSessions).end === questionIndex;
}
const types = new Set(['single', 'true-false', 'select-two', 'select-three', 'select-all']);
const counts = { single: 1, 'true-false': 1, 'select-two': 2, 'select-three': 3 };

export function validateBank(bank) {
  if (!Array.isArray(bank) || bank.length !== EXPECTED_QUESTION_COUNT) {
    throw new Error(`Expected all ${EXPECTED_QUESTION_COUNT} source questions.`);
  }
  const ids = new Set();
  for (const question of bank) {
    if (!question || !Number.isInteger(question.id) || question.id < 1 ||
        question.id > EXPECTED_QUESTION_COUNT || ids.has(question.id)) {
      throw new Error(`Question IDs must be unique and cover 1–${EXPECTED_QUESTION_COUNT}.`);
    }
    ids.add(question.id);
    for (const field of ['prompt', 'note', 'topic']) {
      if (typeof question[field] !== 'string' || !question[field].trim()) throw new Error(`Q${question.id}: missing ${field}.`);
    }
    if (typeof question.context !== 'string' || typeof question.instruction !== 'string' ||
        !(question.caveat === null || typeof question.caveat === 'string') || !types.has(question.type)) {
      throw new Error(`Q${question.id}: invalid metadata or answer type.`);
    }
    if (!Array.isArray(question.options) || question.options.length < 2) throw new Error(`Q${question.id}: missing options.`);
    const options = new Set();
    for (const option of question.options) {
      if (!option || !/^[A-Z]$/.test(option.id) || options.has(option.id) || typeof option.text !== 'string' || !option.text.trim()) {
        throw new Error(`Q${question.id}: invalid or duplicate option.`);
      }
      options.add(option.id);
    }
    if (!Array.isArray(question.answers) || !question.answers.length ||
        new Set(question.answers).size !== question.answers.length ||
        question.answers.some((answer) => !options.has(answer)) ||
        (counts[question.type] && question.answers.length !== counts[question.type])) {
      throw new Error(`Q${question.id}: invalid answer key.`);
    }
    if (question.type === 'true-false' && (question.options.length !== 2 ||
        !question.options.every((option) => /^(True|False)$/.test(option.text)) ||
        new Set(question.options.map((option) => option.text)).size !== 2)) {
      throw new Error(`Q${question.id}: invalid true/false options.`);
    }
  }
  return bank;
}

// Include the complete bank so edited prompts/options/keys cannot restore stale sessions.
function signature(bank) {
  return JSON.stringify(bank);
}

export function createSession(bank, mode = 'all', length = bank.length, random = Math.random) {
  if (!['all', 'random', 'journey'].includes(mode)) throw new Error('Choose a valid practice mode.');
  if (!Number.isInteger(length) || length < 1 || length > bank.length) throw new Error('Invalid quiz length.');
  if (mode === 'journey' && length !== bank.length) throw new Error('The random journey must include the complete question bank.');
  const questionIds = bank.map((question) => question.id).sort((a, b) => a - b);
  if (mode !== 'all') {
    for (let i = questionIds.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [questionIds[i], questionIds[j]] = [questionIds[j], questionIds[i]];
    }
  }
  return { version: 1, bankSignature: signature(bank), mode, questionIds: mode === 'random' ? questionIds.slice(0, length) : questionIds, index: 0, selected: [], responses: [] };
}

export function createMissedSession(bank, missedQuestionIds) {
  if (!Array.isArray(missedQuestionIds) ||
      missedQuestionIds.some((id) => !Number.isInteger(id) || !bank.some((question) => question.id === id))) {
    throw new Error('Missed-question history is invalid.');
  }
  const missed = new Set(missedQuestionIds);
  const questionIds = bank.map((question) => question.id).filter((id) => missed.has(id));
  if (!questionIds.length) throw new Error('You have not missed any questions yet.');
  return { version: 1, bankSignature: signature(bank), mode: 'missed', questionIds, index: 0, selected: [], responses: [] };
}

export function restoreMissedQuestionIds(raw, bank) {
  try {
    const ids = JSON.parse(raw);
    if (!Array.isArray(ids) || ids.some((id) => !Number.isInteger(id) || id < 1)) return null;
    const availableIds = new Set(bank.map((question) => question.id));
    return [...new Set(ids)].filter((id) => availableIds.has(id)).sort((a, b) => a - b);
  } catch {
    return null;
  }
}

export function currentQuestion(bank, session) {
  return bank.find((question) => question.id === session.questionIds[session.index]) ?? null;
}

function editableQuestion(bank, session) {
  const question = currentQuestion(bank, session);
  if (!question || session.responses.length > session.index) throw new Error('This question has already been checked or the quiz is complete.');
  return question;
}

export function selectAnswer(bank, session, optionId, checked = true) {
  const question = editableQuestion(bank, session);
  if (!question.options.some((option) => option.id === optionId)) throw new Error('Unknown option.');
  const multiple = question.type.startsWith('select-');
  const selected = multiple
    ? [...new Set(checked ? [...session.selected, optionId] : session.selected.filter((id) => id !== optionId))]
    : checked ? [optionId] : [];
  return { ...session, selected };
}

function validSelection(question, selected) {
  return Array.isArray(selected) && selected.length > 0 &&
    new Set(selected).size === selected.length &&
    selected.every((id) => question.options.some((option) => option.id === id)) &&
    (!counts[question.type] || selected.length === counts[question.type]);
}

function matchesKey(question, selected) {
  return selected.length === question.answers.length && question.answers.every((answer) => selected.includes(answer));
}

export function checkAnswer(bank, session) {
  const question = editableQuestion(bank, session);
  if (!validSelection(question, session.selected)) {
    throw new Error(counts[question.type] ? `Select exactly ${counts[question.type]} answer${counts[question.type] === 1 ? '' : 's'}.` : 'Select at least one answer.');
  }
  return { ...session, responses: [...session.responses, { questionId: question.id, selected: [...session.selected], correct: matchesKey(question, session.selected) }] };
}

export function nextQuestion(bank, session) {
  if (!currentQuestion(bank, session) || session.responses.length !== session.index + 1) throw new Error('Check your answer before continuing.');
  return { ...session, index: session.index + 1, selected: [] };
}

export function scoreSession(session) {
  const correct = session.responses.filter((response) => response.correct).length;
  const answered = session.responses.length;
  return { correct, answered, total: session.questionIds.length, percent: answered ? Math.round(correct / answered * 100) : 0 };
}

export function restoreSession(raw, bank) {
  try {
    const session = JSON.parse(raw);
    if (!session || session.version !== 1 || session.bankSignature !== signature(bank) ||
        !['all', 'random', 'journey', 'missed'].includes(session.mode) || !Array.isArray(session.questionIds) ||
        session.questionIds.length < 1 || session.questionIds.length > bank.length ||
        new Set(session.questionIds).size !== session.questionIds.length ||
        session.questionIds.some((id) => !bank.some((question) => question.id === id)) ||
        (session.mode === 'all' && (session.questionIds.length !== bank.length ||
          session.questionIds.some((id, i) => id !== i + 1))) ||
        (session.mode === 'journey' && session.questionIds.length !== bank.length) ||
        !Number.isInteger(session.index) || session.index < 0 || session.index > session.questionIds.length ||
        !Array.isArray(session.responses) || session.responses.length > session.questionIds.length ||
        ![session.index, session.index + 1].includes(session.responses.length) ||
        !Array.isArray(session.selected) || new Set(session.selected).size !== session.selected.length) return null;
    for (const [index, response] of session.responses.entries()) {
      const question = bank.find((item) => item.id === session.questionIds[index]);
      if (!response || response.questionId !== question.id || !validSelection(question, response.selected) ||
          response.correct !== matchesKey(question, response.selected)) return null;
    }
    const question = currentQuestion(bank, session);
    if (!question) return session.selected.length === 0 && session.responses.length === session.questionIds.length ? session : null;
    if (session.selected.some((id) => !question.options.some((option) => option.id === id)) ||
        (!question.type.startsWith('select-') && session.selected.length > 1)) return null;
    if (session.responses.length > session.index) {
      const submitted = session.responses[session.index].selected;
      if (session.selected.length !== submitted.length || !submitted.every((id) => session.selected.includes(id))) return null;
    }
    return session;
  } catch {
    return null;
  }
}
