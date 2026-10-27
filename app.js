let engine;
let bank = [];
let session = null;
let savedSession = null;
let missedQuestionIds = [];
let storageFailed = false;
let reviewMode = 'missed';
const root = document.getElementById('app');
const announcements = document.getElementById('announcements');
const storageMessage = document.getElementById('storage-message');

document.addEventListener('keydown', event => {
  if (event.defaultPrevented || event.repeat || event.isComposing ||
      event.ctrlKey || event.altKey || event.metaKey) return;
  const card = root.querySelector('.quiz-card');
  if (!card || event.target.closest('button, a, select, textarea, [contenteditable]:not([contenteditable="false"]), input:not([name="answer"])')) return;
  if (/^[1-9]$/.test(event.key)) {
    const input = card.querySelectorAll('input[name="answer"]')[Number(event.key) - 1];
    if (!input || input.disabled) return;
    event.preventDefault();
    input.focus();
    input.click();
  } else if (event.key === 'Enter') {
    const check = card.querySelector('#check-answer');
    if (!check) return;
    event.preventDefault();
    check.click();
  }
});

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function button(text, className, action) {
  const node = el('button', `button ${className}`, text);
  node.type = 'button';
  node.addEventListener('click', action);
  return node;
}

function announce(text) {
  announcements.textContent = text;
}

function focusHeading() {
  root.querySelector('h1, h2')?.focus();
}

function storageWarning() {
  storageFailed = true;
  storageMessage.hidden = false;
  storageMessage.textContent = 'Your browser could not save or access practice progress. You can keep practicing, but progress may not survive a reload.';
}

function persist() {
  try {
    localStorage.setItem(engine.STORAGE_KEY, JSON.stringify(session));
  } catch {
    storageWarning();
  }
}

function persistMissedQuestions() {
  try {
    localStorage.setItem(engine.MISSED_QUESTIONS_KEY, JSON.stringify(missedQuestionIds));
  } catch {
    storageWarning();
  }
}

function removeSaved() {
  try {
    localStorage.removeItem(engine.STORAGE_KEY);
  } catch {
    storageWarning();
  }
  savedSession = null;
}

function score() {
  return engine.scoreSession(session);
}

function showPage(section, focus = true) {
  root.replaceChildren(section);
  root.setAttribute('aria-busy', 'false');
  if (focus) focusHeading();
}

function restart() {
  if (session && session.index < session.questionIds.length &&
      !window.confirm('End this practice session and discard your saved progress?')) return;
  session = null;
  removeSaved();
  renderLanding();
  announce('Ready for a new practice session.');
}

function renderLanding() {
  const card = el('section', 'card hero');
  card.append(el('span', 'eyebrow', 'A LITTLE PRACTICE. A LOT OF PROGRESS.'));
  const heading = el('h1', '', 'Build your Scrum ');
  heading.tabIndex = -1;
  heading.append(el('span', '', 'confidence.'));
  card.append(heading, el('p', 'lead', 'Make space for your next step. Explore PSM I concepts one question at a time, with immediate feedback and notes to help it stick.'));
  const stats = el('div', 'stats');
  for (const [value, label] of [[String(bank.length), 'source questions'], ['Your pace', 'no countdown'], ['Learn as you go', 'answer explanations']]) {
    const stat = el('div', 'stat');
    stat.append(el('strong', '', value), el('span', '', label));
    stats.append(stat);
  }
  card.append(stats);
  if (savedSession) {
    const box = el('section', 'resume-box');
    const result = engine.scoreSession(savedSession);
    box.append(el('h2', '', savedSession.index === savedSession.questionIds.length ? 'Your last practice is ready to review' : 'Pick up where you left off'),
      el('p', '', `${result.answered} of ${result.total} checked · ${result.correct} correct. Your selections and feedback are saved.`));
    const actions = el('div', 'actions-group');
    actions.append(button('Resume practice →', 'button-primary', () => {
      session = savedSession;
      savedSession = null;
      renderSession();
    }), button('Discard saved progress', 'button-secondary', () => {
      if (!window.confirm('Discard your saved practice progress?')) return;
      removeSaved();
      renderLanding();
      announce('Saved progress discarded.');
    }));
    box.append(actions);
    card.append(box);
  }
  const setup = el('form', 'setup');
  setup.append(el('h2', '', 'Choose your practice'), el('p', 'subtle', 'Practice in source order, choose a random subset, complete the six-session journey, or review questions you have missed before.'));
  const fieldset = el('fieldset');
  const legend = el('legend', 'sr-only', 'Practice mode');
  const modes = el('div', 'mode-options');
  const journeySizes = Array.from({length: engine.JOURNEY_SESSION_COUNT}, (_, index) =>
    engine.journeySessionBounds(bank.length, index + 1).end -
    engine.journeySessionBounds(bank.length, index + 1).start);
  const journeySizeRange = Math.min(...journeySizes) === Math.max(...journeySizes)
    ? String(journeySizes[0])
    : `${Math.min(...journeySizes)}–${Math.max(...journeySizes)}`;
  for (const [value, title, description] of [
    ['all', 'The complete collection', `All ${bank.length} questions, in source order.`],
    ['random', 'A fresh mix', 'A random selection for a focused session.'],
    ['journey', 'Six-session journey', `All ${bank.length} questions shuffled into six sessions of ${journeySizeRange}.`],
    ['missed', 'Review missed questions', missedQuestionIds.length
      ? `${missedQuestionIds.length} questions answered incorrectly at least once.`
      : 'Available after your first incorrect answer.'],
  ]) {
    const label = el('label', 'mode-card');
    const input = el('input');
    input.type = 'radio';
    input.name = 'mode';
    input.value = value;
    input.checked = value === 'all';
    input.disabled = value === 'missed' && missedQuestionIds.length === 0;
    const copy = el('span');
    copy.append(el('strong', '', title), el('small', '', description));
    label.append(input, copy);
    modes.append(label);
  }
  fieldset.append(legend, modes);
  const lengthRow = el('div', 'length-row');
  lengthRow.hidden = true;
  const lengthGroup = el('div');
  const lengthLabel = el('label', 'control-label', 'Questions in your session');
  lengthLabel.htmlFor = 'practice-length';
  const lengths = el('select');
  lengths.id = 'practice-length';
  for (const value of [...new Set([10, 20, 40, 80, bank.length].filter(value => value <= bank.length))]) {
    const option = el('option', '', `${value} questions`);
    option.value = String(value);
    lengths.append(option);
  }
  const customOption = el('option', '', 'Custom length');
  customOption.value = 'custom';
  lengths.append(customOption);
  lengthGroup.append(lengthLabel, lengths);
  const customGroup = el('div');
  customGroup.hidden = true;
  const customLabel = el('label', 'control-label', `Choose 1–${bank.length}`);
  customLabel.htmlFor = 'custom-length';
  const custom = el('input');
  custom.id = 'custom-length';
  custom.type = 'number';
  custom.min = '1';
  custom.max = String(bank.length);
  custom.step = '1';
  custom.value = String(Math.min(10, bank.length));
  custom.disabled = true;
  customGroup.append(customLabel, custom);
  lengthRow.append(lengthGroup, customGroup);
  function updateLengthControls() {
    lengthRow.hidden = setup.elements.mode.value !== 'random';
    customGroup.hidden = lengths.value !== 'custom';
    custom.disabled = lengthRow.hidden || customGroup.hidden;
    custom.required = !custom.disabled;
  }
  modes.addEventListener('change', updateLengthControls);
  lengths.addEventListener('change', updateLengthControls);
  const actions = el('div', 'actions');
  const start = el('button', 'button button-primary', 'Start practicing →');
  start.type = 'submit';
  actions.append(start, el('span', 'subtle', 'One question. One step forward.'));
  const error = el('p', 'inline-error');
  error.setAttribute('role', 'alert');
  setup.append(fieldset, lengthRow, actions, error);
  setup.addEventListener('submit', event => {
    event.preventDefault();
    if (savedSession && !window.confirm('Start a new session and replace your saved progress?')) return;
    try {
      const mode = setup.elements.mode.value;
      const length = mode !== 'random' ? bank.length : Number(lengths.value === 'custom' ? custom.value : lengths.value);
      if (!Number.isInteger(length) || length < 1 || length > bank.length) throw new Error(`Choose a whole number from 1 to ${bank.length}.`);
      session = mode === 'missed'
        ? engine.createMissedSession(bank, missedQuestionIds)
        : engine.createSession(bank, mode, length);
      savedSession = null;
      persist();
      renderSession();
      announce('Practice started.');
    } catch (failure) {
      error.textContent = failure.message || 'Could not start this session. Please try again.';
    }
  });
  card.append(setup);
  showPage(card);
}

function renderSession() {
  if (session.index === session.questionIds.length) {
    renderSummary();
    return;
  }
  if (session.mode === 'journey' &&
      engine.isJourneySessionBoundary(session.index, session.questionIds.length)) {
    renderJourneySessionSummary();
    return;
  }
  renderQuestion();
}

function renderJourneySessionSummary() {
  const sessionNumber = Math.ceil(session.index * engine.JOURNEY_SESSION_COUNT / session.questionIds.length);
  const { start, end } = engine.journeySessionBounds(session.questionIds.length, sessionNumber);
  const responses = session.responses.slice(start, end);
  const correct = responses.filter(response => response.correct).length;
  const percent = Math.round(correct / responses.length * 100);
  const card = el('section', 'card');
  const header = el('div', 'summary-header');
  const heading = el('h1', '', `Session ${sessionNumber} complete.`);
  heading.tabIndex = -1;
  header.append(el('span', 'eyebrow', `SESSION ${sessionNumber} OF ${engine.JOURNEY_SESSION_COUNT} COMPLETE`),
    heading, el('p', 'subtle', 'Take a break or continue your random journey when you’re ready.'));
  const ring = el('div', 'score-ring');
  ring.append(el('strong', '', `${percent}%`), el('span', '', 'session score'));
  header.append(ring);
  const stats = el('div', 'summary-stats');
  for (const [value, label] of [[correct, 'correct'], [responses.length - correct, 'missed'], [responses.length, 'questions']]) {
    const stat = el('div');
    stat.append(el('strong', '', String(value)), el('span', '', label));
    stats.append(stat);
  }
  card.append(header, stats);
  const actions = el('div', 'actions');
  const nextSession = engine.journeySessionBounds(session.questionIds.length, sessionNumber + 1);
  actions.append(button(`Continue to session ${sessionNumber + 1} →`, 'button-primary', () => {
    renderQuestion();
    announce(`Session ${sessionNumber + 1} of ${engine.JOURNEY_SESSION_COUNT}. Question 1 of ${nextSession.end - nextSession.start}.`);
  }), button('Back to start', 'button-secondary', () => {
    savedSession = session;
    session = null;
    renderLanding();
  }));
  card.append(actions);
  showPage(card);
}

function answerText(question, ids) {
  return question.options.filter(option => ids.includes(option.id)).map(option => `${option.id}. ${option.text}`).join('\n');
}

function appendIaMadeBadge(container, question) {
  if (question.context.startsWith('[IA MADE]')) container.append(el('span', 'made-tag', 'IA MADE'));
}

function appendQuestionContext(container, question) {
  if (!question.context) return;
  const context = question.context.replace(/^\[IA MADE\]\s*/, '');
  container.append(el('p', 'context', context));
}

function renderQuestion(focus = true) {
  const question = engine.currentQuestion(bank, session);
  if (!question) {
    renderError('The saved session could not find its next question. Reload the bank to recover.');
    return;
  }
  const checked = session.responses.length > session.index;
  const result = score();
  const card = el('section', 'card quiz-card');
  const topline = el('div', 'quiz-topline');
  const journeyProgress = session.mode === 'journey'
    ? engine.journeyProgress(session.index, session.questionIds.length)
    : null;
  const modeLabel = session.mode === 'all' ? 'THE COMPLETE COLLECTION'
    : session.mode === 'missed' ? 'QUESTIONS YOU HAVE MISSED'
      : journeyProgress ? `RANDOM JOURNEY · SESSION ${journeyProgress.sessionNumber} OF ${engine.JOURNEY_SESSION_COUNT}`
        : 'YOUR FRESH MIX';
  topline.append(el('span', 'eyebrow', modeLabel), el('span', 'score-chip', `${result.correct} correct / ${result.answered} checked`));
  const progressLabel = el('div', 'progress-label');
  const questionLabel = journeyProgress
    ? `Question ${journeyProgress.questionNumber} of ${journeyProgress.sessionSize}`
    : `Question ${session.index + 1} of ${result.total}`;
  progressLabel.append(el('span', '', questionLabel), el('span', '', `${result.answered} / ${result.total} checked`));
  const progress = el('progress');
  progress.max = result.total;
  progress.value = result.answered;
  progress.setAttribute('aria-label', 'Checked questions');
  card.append(topline, progressLabel, progress);
  const meta = el('div', 'question-meta');
  meta.append(el('span', 'number-tag', `SOURCE #${question.id}`), el('span', 'topic-tag', question.topic));
  appendIaMadeBadge(meta, question);
  const heading = el('h2', 'question-title', question.prompt);
  heading.tabIndex = -1;
  heading.id = 'question-heading';
  card.setAttribute('aria-labelledby', heading.id);
  card.append(meta, heading);
  appendQuestionContext(card, question);
  if (question.caveat) {
    card.append(el('p', 'caveat', question.caveat));
  }
  const fieldset = el('fieldset', 'answer-fieldset');
  fieldset.append(el('legend', '', question.instruction || 'Choose your answer.'));
  const options = el('div', 'options');
  const response = checked ? session.responses[session.index] : null;
  const selected = response ? response.selected : session.selected;
  for (const [index, option] of question.options.entries()) {
    const label = el('label', 'option');
    const input = el('input');
    input.type = question.type === 'single' || question.type === 'true-false' ? 'radio' : 'checkbox';
    input.name = 'answer';
    input.value = option.id;
    input.checked = selected.includes(option.id);
    input.disabled = checked;
    if (!checked && index < 9) input.setAttribute('aria-keyshortcuts', String(index + 1));
    const copy = el('span', 'option-content');
    copy.append(el('span', 'option-text', option.text));
    label.append(input, el('span', 'option-letter', option.id), copy);
    if (checked) {
      label.classList.add('locked');
      if (question.answers.includes(option.id)) {
        label.classList.add('correct');
        copy.append(el('span', 'answer-badge', selected.includes(option.id) ? 'Correct answer · Your choice' : 'Correct answer · Not selected'));
      } else if (selected.includes(option.id)) {
        label.classList.add('wrong');
        copy.append(el('span', 'answer-badge', 'Incorrect answer · Your choice'));
      }
    }
    input.addEventListener('change', () => {
      try {
        session = engine.selectAnswer(bank, session, option.id, input.checked);
        persist();
        error.textContent = '';
      } catch (failure) {
        error.textContent = failure.message;
      }
    });
    options.append(label);
  }
  fieldset.append(options);
  card.append(fieldset);
  if (!checked) {
    const shortcuts = question.options.slice(0, 9).map((option, index) => `${index + 1} = ${option.id}`).join(', ');
    card.append(el('p', 'subtle', `Keyboard: ${shortcuts}. Press a number to select or toggle an answer, then Enter to check.`));
  }
  const error = el('p', 'inline-error');
  error.setAttribute('role', 'alert');
  card.append(error);
  if (checked) {
    const feedback = el('section', `feedback${response.correct ? '' : ' incorrect'}`);
    feedback.setAttribute('aria-label', 'Answer explanation');
    feedback.append(el('h3', '', response.correct ? '✓ That’s correct.' : 'Not quite — a chance to learn.'),
      el('p', '', `Correct ${question.answers.length === 1 ? 'answer' : 'answers'}:\n${answerText(question, question.answers)}`));
    if (question.note) feedback.append(el('span', 'tip-label', 'Source explanation'), el('p', '', question.note));
    if (question.caveat) feedback.append(el('span', 'tip-label', 'Source caveat'), el('p', '', question.caveat));
    card.append(feedback);
  }
  const actions = el('div', 'actions');
  actions.append(button('Restart practice', 'button-quiet', restart));
  if (checked) {
    actions.append(button(session.index + 1 === session.questionIds.length ? 'See my results →' : 'Next question →', 'button-primary', () => {
      try {
        session = engine.nextQuestion(bank, session);
        persist();
        renderSession();
        if (session.index === session.questionIds.length) {
          announce('Practice complete. Your results are ready.');
        } else if (session.mode === 'journey' &&
            engine.isJourneySessionBoundary(session.index, session.questionIds.length)) {
          const completedSessions = Math.ceil(session.index * engine.JOURNEY_SESSION_COUNT / session.questionIds.length);
          announce(`Session ${completedSessions} of ${engine.JOURNEY_SESSION_COUNT} complete.`);
        } else if (session.mode === 'journey') {
          const progress = engine.journeyProgress(session.index, session.questionIds.length);
          announce(`Session ${progress.sessionNumber} of ${engine.JOURNEY_SESSION_COUNT}. Question ${progress.questionNumber} of ${progress.sessionSize}.`);
        } else {
          announce(`Question ${session.index + 1} of ${session.questionIds.length}.`);
        }
      } catch (failure) {
        error.textContent = failure.message;
      }
    }));
  } else {
    const check = button('Check answer', 'button-primary', () => {
      try {
        session = engine.checkAnswer(bank, session);
        const response = session.responses[session.index];
        if (!response.correct && !missedQuestionIds.includes(response.questionId)) {
          missedQuestionIds = [...missedQuestionIds, response.questionId].sort((a, b) => a - b);
          persistMissedQuestions();
        }
        persist();
        renderQuestion(false);
        const feedback = root.querySelector('.feedback');
        feedback.tabIndex = -1;
        feedback.focus();
        announce(`${session.responses[session.index].correct ? 'Correct.' : 'Incorrect.'} Answer explanation is now available. ${score().correct} correct out of ${score().answered} checked.`);
      } catch (failure) {
        error.textContent = failure.message || 'Please choose an answer before checking.';
      }
    });
    check.id = 'check-answer';
    check.setAttribute('aria-keyshortcuts', 'Enter');
    actions.append(check);
  }
  card.append(actions);
  showPage(card, focus);
}

function renderSummary() {
  const result = score();
  const card = el('section', 'card');
  const header = el('div', 'summary-header');
  const heading = el('h1', '', 'Practice makes progress.');
  heading.tabIndex = -1;
  const isJourney = session.mode === 'journey';
  if (isJourney) heading.textContent = 'Your random journey is complete.';
  header.append(el('span', 'eyebrow', isJourney ? 'ALL SIX SESSIONS COMPLETE' : 'SESSION COMPLETE'), heading,
    el('p', 'subtle', isJourney ? `You’ve completed all ${bank.length} shuffled questions. Reflect on what clicked, and revisit what didn’t.` : 'Take a breath. Reflect on what clicked, and revisit what didn’t.'));
  const ring = el('div', 'score-ring');
  ring.append(el('strong', '', `${result.percent}%`), el('span', '', 'practice score'));
  header.append(ring);
  const stats = el('div', 'summary-stats');
  for (const [value, label] of [[result.correct, 'correct'], [result.answered - result.correct, 'missed'], [result.total, 'questions']]) {
    const stat = el('div');
    stat.append(el('strong', '', String(value)), el('span', '', label));
    stats.append(stat);
  }
  card.append(header, stats, el('p', 'subtle', 'This is a learning score based on the source keys, not a prediction of your official assessment result.'));
  const actions = el('div', 'actions');
  actions.append(button(isJourney ? 'Start a new random journey →' : 'Practice again →', 'button-primary', restart), button('Back to start', 'button-secondary', () => {
    savedSession = session;
    session = null;
    renderLanding();
  }));
  card.append(actions);
  const review = el('section', 'review-section');
  review.append(el('h2', '', 'Reflect & review'));
  const controls = el('div', 'review-controls');
  const reviewList = el('div');
  const missedButton = button(`Missed (${result.answered - result.correct})`, 'button-secondary', () => updateReview('missed'));
  const allButton = button(`All questions (${result.total})`, 'button-secondary', () => updateReview('all'));
  function updateReview(mode) {
    reviewMode = mode;
    missedButton.setAttribute('aria-pressed', String(mode === 'missed'));
    allButton.setAttribute('aria-pressed', String(mode === 'all'));
    reviewList.replaceChildren();
    const responses = session.responses.filter(response => mode === 'all' || !response.correct);
    if (!responses.length) reviewList.append(el('p', 'subtle', 'No missed questions — nicely done. Select “All questions” to revisit the complete session.'));
    for (const response of responses) {
      const question = bank.find(item => item.id === response.questionId);
      const item = el('article', 'review-item');
      const questionMeta = el('p', 'question-meta', `SOURCE #${question.id} · ${question.topic}`);
      appendIaMadeBadge(questionMeta, question);
      item.append(el('span', `review-verdict${response.correct ? '' : ' missed'}`, response.correct ? 'CORRECT' : 'MISSED'),
        questionMeta,
        el('h3', '', question.prompt));
      appendQuestionContext(item, question);
      item.append(el('p', 'subtle', question.instruction));
      const options = el('ul');
      for (const option of question.options) {
        const tags = [];
        if (response.selected.includes(option.id)) tags.push('Your choice');
        if (question.answers.includes(option.id)) tags.push('Correct answer');
        options.append(el('li', '', `${option.id}. ${option.text}${tags.length ? ` — ${tags.join(' · ')}` : ''}`));
      }
      item.append(options, el('p', '', `Your ${response.selected.length === 1 ? 'answer' : 'answers'}:\n${answerText(question, response.selected)}`),
        el('p', '', `Correct ${question.answers.length === 1 ? 'answer' : 'answers'}:\n${answerText(question, question.answers)}`));
      if (question.note) item.append(el('span', 'tip-label', 'Source explanation'), el('p', '', question.note));
      if (question.caveat) item.append(el('p', 'caveat', question.caveat));
      reviewList.append(item);
    }
  }
  controls.append(missedButton, allButton);
  review.append(controls, reviewList);
  card.append(review);
  updateReview(reviewMode);
  showPage(card);
}

function renderError(message) {
  const card = el('section', 'card error-card');
  const heading = el('h1', '', 'Let’s get you back on track.');
  heading.tabIndex = -1;
  card.append(el('span', 'eyebrow', 'QUESTION BANK UNAVAILABLE'), heading,
    el('p', '', message), button('Retry loading', 'button-primary', load));
  showPage(card);
  announce('Question bank could not be loaded.');
}

async function load() {
  root.setAttribute('aria-busy', 'true');
  const loading = el('section', 'card loading-card');
  const heading = el('h1', '', 'Preparing your practice space…');
  heading.tabIndex = -1;
  loading.append(heading, el('p', '', 'Loading and checking the question bank.'), el('div', 'loading-bar'));
  root.replaceChildren(loading);
  try {
    engine = await import('./quiz.js');
    const response = await fetch('./questions.json', {cache: 'no-cache'});
    if (!response.ok) throw new Error(`The question bank could not be loaded (HTTP ${response.status}). Please retry.`);
    const data = await response.json();
    if (Array.isArray(data) && data.length === 0) throw new Error('The question bank is empty. Add questions to questions.json, then retry.');
    engine.validateBank(data);
    bank = data;
    savedSession = null;
    session = null;
    try {
      const missedRaw = localStorage.getItem(engine.MISSED_QUESTIONS_KEY);
      if (missedRaw !== null) {
        missedQuestionIds = engine.restoreMissedQuestionIds(missedRaw, bank);
        if (!missedQuestionIds) {
          localStorage.removeItem(engine.MISSED_QUESTIONS_KEY);
          missedQuestionIds = [];
          announce('Invalid saved missed-question history was discarded.');
        }
      }
      const raw = localStorage.getItem(engine.STORAGE_KEY);
      if (raw) {
        savedSession = engine.restoreSession(raw, bank);
        if (!savedSession) {
          removeSaved();
          announce('An outdated or invalid saved session was discarded. Start a new practice session.');
        }
      }
      const recoverableMisses = savedSession?.responses
        .filter((response) => !response.correct)
        .map((response) => response.questionId) ?? [];
      if (recoverableMisses.some((id) => !missedQuestionIds.includes(id))) {
        missedQuestionIds = [...new Set([...missedQuestionIds, ...recoverableMisses])].sort((a, b) => a - b);
        persistMissedQuestions();
      }
    } catch {
      storageWarning();
    }
    renderLanding();
    if (!storageFailed) storageMessage.hidden = true;
  } catch (failure) {
    renderError(failure.message || 'The question bank is unavailable or invalid. Check the local bank and retry.');
  }
}

load();
