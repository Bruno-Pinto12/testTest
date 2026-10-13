import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { validateBank } from '../quiz.js';

const root = new URL('../', import.meta.url);
const source = readFileSync(new URL('PSM_I_EXAM_PRACTICE_QUESTIONS.md', root), 'utf8');

export function parseQuestions(markdown) {
  return [...markdown.matchAll(/^## Question (\d+)[^\n]*\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map((match) => {
    const id = Number(match[1]);
    const body = match[2].split(/^---\s*$/m)[0];
    const bold = [...body.matchAll(/^\*\*(.+)\*\*$/gm)].map((line) => line[1]);
    const prompt = bold.filter((text) => !text.startsWith('[')).join('\n\n');
    const context = bold.filter((text) => text.startsWith('[')).join('\n\n');
    const instruction = body.match(/^\*\((.+)\)\*$/m)?.[1] ?? '';
    const options = [...body.matchAll(/^([A-Z])[.)] (.+)$/gm)]
      .map((option) => ({ id: option[1], text: option[2] }));
    const key = body.match(/^\*\*Answer:\*\* (.+)$/m)?.[1];
    const note = body.match(/^\*\*Key note:\*\* (.+)$/m)?.[1] ?? '';
    let type = 'single';
    if (/all that apply/i.test(instruction)) type = 'select-all';
    else if (/two/i.test(instruction)) type = 'select-two';
    else if (/three/i.test(instruction)) type = 'select-three';
    else if (options.length === 2 && options.every((option) => /^(True|False)$/.test(option.text))) type = 'true-false';

    const topics = [
      ['Definition of Done', /definition of done|quality|technical debt/i],
      ['Scrum events', /daily scrum|sprint review|retrospective|sprint planning|timebox/i],
      ['Backlogs & goals', /backlog|sprint goal|product goal/i],
      ['Scrum accountabilities', /product owner|scrum master|developer|management|scrum team/i],
      ['Empiricism & values', /pillar|empiric|value|transparen/i],
    ];
    const caveats = {
      7: 'Source caveat: management is not a formal Scrum accountability. This question describes supportive practices; scoring follows the supplied bank.',
      32: 'Source caveat: this canonical entry has a complete prompt and a related-question annotation, both preserved here. Interpret scope adjustment in the context of the Sprint Goal; scoring follows the supplied bank.',
      100: 'Source caveat: the listed options do not fully represent the Scrum Guide. Scoring follows the supplied bank; inspect the key note after checking.',
      114: 'Source ambiguity: the selection instruction and supplied key may not align. This entry is retained unchanged and scored against the supplied bank, not treated as authoritative Scrum guidance.',
    };
    return {
      id, prompt, context, instruction, type, options,
      answers: key?.trim().split(/\s+/) ?? [],
      note, topic: topics.find(([, pattern]) => pattern.test(prompt))?.[0] ?? 'Scrum foundations',
      caveat: caveats[id] ?? null,
    };
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const bank = validateBank(parseQuestions(source));
  writeFileSync(new URL('questions.json', root), `${JSON.stringify(bank, null, 2)}\n`);
  console.log(`Validated and generated ${bank.length} canonical questions.`);
}
