# Scrum Practice · PSM I

A dependency-free, unofficial PSM I practice quiz. All **133 questions** are
included: the original 114-question bank, nine archive additions, and ten
original IA-made questions selected to broaden coverage, with answer keys and
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
npm run build  # regenerate questions.json and validate all 133 entries
npm test       # source integrity, answer formats, scoring, sampling, persistence
```

## Practice

Choose all questions in source order, a random subset without repeats, or a
random journey through the full bank. The journey shuffles all 133 questions
once and divides them into six balanced sessions of 22–23 questions, with no
repeats.
Single-choice and true/false use radio buttons; multi-select uses checkboxes.
Select the requested number, then **Check Answer** to see the correct choices and
the original key note. Scoring requires the exact keyed set, with no partial credit.
**Next Question** advances after checking. The final review includes missed
questions and can show all answers.

Progress, selections, and checked answers are stored locally in your browser.
Refresh and resume the session from the start screen; journey progress and its
shuffled order are saved across all six sessions. Invalid or outdated saved
sessions are discarded; unavailable browser storage does not prevent practice.
There is no account, backend, analytics, or external resource request.

## Provenance and source caveats

`PSM_I_EXAM_PRACTICE_QUESTIONS.md` is the canonical source for all 133 entries.
It retains the original 114 questions, adds nine items selected from the
personal 2021–2023 question archives, and includes ten original questions
marked **IA MADE** with a visible badge for reading and discussion rather than
memorization.
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