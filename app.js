let engine;
let bank = [];
let session = null;
let savedSession = null;
let storageFailed = false;
let reviewMode = 'missed';
const root = document.getElementById('app');
const announcements = document.getElementById('announcements');
const storageMessage = document.getElementById('storage-message');

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
  setup.append(el('h2', '', 'Choose your practice'), el('p', 'subtle', 'Practice in source order, choose a random subset, or complete the whole bank across six random sessions.'));
  const fieldset = el('fieldset');
  const legend = el('legend', 'sr-only', 'Practice mode');
  const modes = el('div', 'mode-options');
  for (const [value, title, description] of [
    ['all', 'The complete collection', `All ${bank.length} questions, in source order.`],
    ['random', 'A fresh mix', 'A random selection for a focused session.'],
    ['journey', 'Six-session journey', `All ${bank.length} questions shuffled into six sessions of ${engine.JOURNEY_SESSION_SIZE}.`],
  ]) {
    const label = el('label', 'mode-card');
    const input = el('input');
    input.type = 'radio';
    input.name = 'mode';
    input.value = value;
    input.checked = value === 'all';
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
      session = engine.createSession(bank, mode, length);
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
  if (session.mode === 'journey' && session.index > 0 &&
      session.index % engine.JOURNEY_SESSION_SIZE === 0) {
    renderJourneySessionSummary();
    return;
  }
  renderQuestion();
}

function renderJourneySessionSummary() {
  const sessionNumber = session.index / engine.JOURNEY_SESSION_SIZE;
  const responses = session.responses.slice(session.index - engine.JOURNEY_SESSION_SIZE, session.index);
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
  actions.append(button(`Continue to session ${sessionNumber + 1} →`, 'button-primary', () => {
    renderQuestion();
    announce(`Session ${sessionNumber + 1} of ${engine.JOURNEY_SESSION_COUNT}. Question 1 of ${engine.JOURNEY_SESSION_SIZE}.`);
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
  const modeLabel = session.mode === 'all' ? 'THE COMPLETE COLLECTION'
    : session.mode === 'journey' ? `RANDOM JOURNEY · SESSION ${Math.floor(session.index / engine.JOURNEY_SESSION_SIZE) + 1} OF ${engine.JOURNEY_SESSION_COUNT}`
      : 'YOUR FRESH MIX';
  topline.append(el('span', 'eyebrow', modeLabel), el('span', 'score-chip', `${result.correct} correct / ${result.answered} checked`));
  const progressLabel = el('div', 'progress-label');
  const questionLabel = session.mode === 'journey'
    ? `Question ${session.index % engine.JOURNEY_SESSION_SIZE + 1} of ${engine.JOURNEY_SESSION_SIZE}`
    : `Question ${session.index + 1} of ${result.total}`;
  progressLabel.append(el('span', '', questionLabel), el('span', '', `${result.answered} / ${result.total} checked`));
  const progress = el('progress');
  progress.max = result.total;
  progress.value = result.answered;
  progress.setAttribute('aria-label', 'Checked questions');
  card.append(topline, progressLabel, progress);
  const meta = el('div', 'question-meta');
  meta.append(el('span', 'number-tag', `SOURCE #${question.id}`), el('span', 'topic-tag', question.topic));
  const heading = el('h2', 'question-title', question.prompt);
  heading.tabIndex = -1;
  heading.id = 'question-heading';
  card.setAttribute('aria-labelledby', heading.id);
  card.append(meta, heading);
  if (question.context) card.append(el('p', 'context', question.context));
  if (question.caveat) {
    card.append(el('p', 'caveat', question.caveat));
  }
  const fieldset = el('fieldset', 'answer-fieldset');
  fieldset.append(el('legend', '', question.instruction || 'Choose your answer.'));
  const options = el('div', 'options');
  const response = checked ? session.responses[session.index] : null;
  const selected = response ? response.selected : session.selected;
  for (const option of question.options) {
    const label = el('label', 'option');
    const input = el('input');
    input.type = question.type === 'single' || question.type === 'true-false' ? 'radio' : 'checkbox';
    input.name = 'answer';
    input.value = option.id;
    input.checked = selected.includes(option.id);
    input.disabled = checked;
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
        } else if (session.mode === 'journey' && session.index % engine.JOURNEY_SESSION_SIZE === 0) {
          announce(`Session ${session.index / engine.JOURNEY_SESSION_SIZE} of ${engine.JOURNEY_SESSION_COUNT} complete.`);
        } else if (session.mode === 'journey') {
          announce(`Session ${Math.floor(session.index / engine.JOURNEY_SESSION_SIZE) + 1} of ${engine.JOURNEY_SESSION_COUNT}. Question ${session.index % engine.JOURNEY_SESSION_SIZE + 1} of ${engine.JOURNEY_SESSION_SIZE}.`);
        } else {
          announce(`Question ${session.index + 1} of ${session.questionIds.length}.`);
        }
      } catch (failure) {
        error.textContent = failure.message;
      }
    }));
  } else {
    actions.append(button('Check answer', 'button-primary', () => {
      try {
        session = engine.checkAnswer(bank, session);
        persist();
        renderQuestion(false);
        const feedback = root.querySelector('.feedback');
        feedback.tabIndex = -1;
        feedback.focus();
        announce(`${session.responses[session.index].correct ? 'Correct.' : 'Incorrect.'} Answer explanation is now available. ${score().correct} correct out of ${score().answered} checked.`);
      } catch (failure) {
        error.textContent = failure.message || 'Please choose an answer before checking.';
      }
    }));
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
    el('p', 'subtle', isJourney ? 'You’ve completed all 114 shuffled questions. Reflect on what clicked, and revisit what didn’t.' : 'Take a breath. Reflect on what clicked, and revisit what didn’t.'));
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
      item.append(el('span', `review-verdict${response.correct ? '' : ' missed'}`, response.correct ? 'CORRECT' : 'MISSED'),
        el('p', 'question-meta', `SOURCE #${question.id} · ${question.topic}`),
        el('h3', '', question.prompt));
      if (question.context) item.append(el('p', 'context', question.context));
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
      const raw = localStorage.getItem(engine.STORAGE_KEY);
      if (raw) {
        savedSession = engine.restoreSession(raw, bank);
        if (!savedSession) {
          removeSaved();
          announce('An outdated or invalid saved session was discarded. Start a new practice session.');
        }
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
