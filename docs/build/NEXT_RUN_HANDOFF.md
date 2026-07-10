# Next Run Handoff

## Read First

1. `AGENTS.md`
2. `docs/PRD.md`
3. `docs/build/RUN_STATE.md`
4. `docs/build/MODULE_STATUS.md`
5. `docs/build/CURRENT_PASS_REPORT.md`
6. All relevant `docs/steering/*`
7. `docs/modules/module-03-question-engine.md`

## Continue Module

Start Module 3: Configurable Question Engine.

## Already Complete

- Module 0 verified.
- Module 1 verified.
- Module 2 verified.
- Baseline and Module 2 commits are pushed to GitHub remote `origin`.
- `/demo/ui` previews the reusable component system.

## Failed

No current failing required checks.

## Do Not Redo

- Do not rebuild Module 0, Module 1, or Module 2 unless a regression is discovered.
- Do not put question, scoring, recommendation, lead, report, or admin business logic inside Module 2 UI components.
- Do not add deferred UI dependencies without auditing them first.

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

- Module 3 must keep question config and navigation logic out of UI components.
- Do not collect contact details in Module 3.
- Do not introduce prohibited POC data fields.
- Keep demo copy clearly labeled as demo or estimated where applicable.
