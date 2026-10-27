# Scrum Practice · PSM I

A dependency-free, unofficial PSM I practice quiz. All **197 questions** are
included: the original 114-question bank, eleven archive additions, ten
original IA-made questions, 43 questions from the May 2022 PSM I source, and
19 questions from the September 2017 PSM I screenshots, with answer keys and
explanatory notes.

## Run locally

Requires Node.js 20+. There are no packages to install.

```sh
npm start
```

Open **http://127.0.0.1:8000**. The server binds to `127.0.0.1:8000` by
default. Set `PORT` to use a different port. Use HTTP rather than opening
`index.html` directly (the question bank is fetched).
The site can also be hosted on any static web server.

```sh
npm run build  # regenerate questions.json and validate all 197 entries
npm test       # source integrity, answer formats, scoring, sampling, persistence
```

## Practice

Choose all questions in source order, a random subset without repeats, a
random journey through the full bank, or a review of questions answered
incorrectly at least once. The missed-question option unlocks after the first
incorrect answer. The journey shuffles all 197 questions once and divides them
into six balanced sessions of 32–33 questions, with no repeats.
Single-choice and true/false use radio buttons; multi-select uses checkboxes.
Select the requested number, then **Check Answer** to see the correct choices and
the original key note. Scoring requires the exact keyed set, with no partial credit.
During a question, number keys **1–9** select the corresponding answers in display
order (**1 = A**, **2 = B**, **3 = C**, etc.). For multi-select questions, pressing
the same number again deselects that answer. Press **Enter** to check using the
same selection requirements as the button. Checked answers stay locked; press
**Enter again** to advance to the next question (or see your results after the
last question). Holding Enter does not advance through questions. Shortcuts do not override
focused buttons, links, or text-entry controls.
**Next Question** advances after checking. The final review includes missed
questions and can show all answers.

Progress, selections, and checked answers are stored locally in your browser.
Refresh and resume the session from the start screen; journey progress and its
shuffled order are saved across all six sessions. Missed-question history is
saved separately and keeps a question in the review set even after a later
correct answer. On first use, misses in a currently saved session are recovered;
older sessions that were already replaced cannot be reconstructed. Invalid or
outdated saved sessions are discarded; unavailable browser storage does not
prevent practice.
There is no account, backend, analytics, or external resource request.

## Provenance and source caveats

`PSM_I_EXAM_PRACTICE_QUESTIONS.md` is the canonical source for all 197 entries.
It retains the original 114 questions, eleven items selected from the personal
2021–2023 question archives, ten original questions marked **IA MADE** with a
visible badge for reading and discussion rather than memorization, 43
questions from the May 2022 PSM I source, and 19 questions from the 2017
screenshots in `20170919 - PSM1 - Q-R - 100 pour 100/`. The 2017 entries keep
their source wording and note historical terminology or guidance in their key
notes.
`scripts/build-questions.mjs` deterministically generates `questions.json`.
The build validates counts, IDs, option IDs, answer keys, and format cardinality.
Topics are presentation labels inferred from prompt text; tips are the bank's
existing key notes, not new rationales. For broader study, see
[Scrum Guide study resource](SCRUM_GUIDE_2020_KEY_POINTS_EN.md).

- **Q7:** The current canonical prompt/options are complete. Management is not
  a formal Scrum accountability; treat this as a supportive-practice question.
- **Q32:** The current canonical prompt/options are complete. Its related-question
  annotation is preserved separately, not mistakenly parsed as the prompt.
  Scope renegotiation is interpreted in the context of the Sprint Goal.
- **Q100:** The bank itself notes that none of its options fully lists the
  Scrum Master's services. The supplied key is retained.
- **Q114:** “Select all that apply” has only **A** in the supplied key, even
  though Developers may have the other listed specialties. The UI visibly flags
  this ambiguity, retains checkboxes, and scores the supplied key unchanged.

All entries remain in coverage and scoring, including flagged entries. Source
caveats are visible before checking without exposing keyed answers; full notes
appear only afterward. This is a study aid, not an official exam or an
authoritative replacement for the Scrum Guide. Because this is a client-only
site, keys are accessible in the source/data to someone deliberately inspecting
them, but are not rendered in the quiz before checking.