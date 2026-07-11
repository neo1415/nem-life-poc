# Next Run Handoff

## Read First

1. `AGENTS.md`
2. `docs/PRD.md`
3. `docs/build/RUN_STATE.md`
4. `docs/build/MODULE_STATUS.md`
5. `docs/build/CURRENT_PASS_REPORT.md`
6. All relevant `docs/steering/*`
7. `docs/modules/module-05-scoring-engine.md`

## Continue Module

Start Module 6: Recommendation Engine.

## Already Complete

- Module 0 verified.
- Module 1 verified.
- Module 2 verified.
- Module 3 verified.
- Module 4 verified.
- Baseline through Module 5 commits are pushed to GitHub remote `origin`.
- `/demo/ui` previews the reusable component system.
- `/demo/question-engine` previews the configurable question engine.
- `/protection-check/start` runs the guided customer flow.
- `/protection-check/complete` shows the safe completion handoff and answer review.
- `/demo/scoring` previews deterministic scoring output using mock answer sets.

## Failed

No current failing required checks.

## Do Not Redo

- Do not rebuild Module 0, Module 1, or Module 2 unless a regression is discovered.
- Do not put recommendation, lead, report, or admin business logic into Module 5.
- Do not add form, state-machine, analytics, or AI dependencies without auditing them first.

## Commands To Run

- `corepack pnpm install`
- `corepack pnpm typecheck`
- `corepack pnpm lint`
- `corepack pnpm format:check`
- `corepack pnpm test:unit`
- `corepack pnpm build`
- `corepack pnpm audit`
- `corepack pnpm verify`
- `corepack pnpm test:e2e`

## Risks To Watch

- Module 5 must consume completed answers without moving scoring into Module 4 UI components.
- Do not show recommendations or lead capture before their assigned modules.
- Do not collect contact details before the PRD-approved lead-capture point.
- Do not introduce prohibited POC data fields.
- Keep demo copy clearly labeled as demo or estimated where applicable.
