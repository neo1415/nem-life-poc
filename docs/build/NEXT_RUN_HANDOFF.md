# Next Run Handoff

## Read First

1. `AGENTS.md`
2. `docs/PRD.md`
3. `docs/build/RUN_STATE.md`
4. `docs/build/MODULE_STATUS.md`
5. `docs/build/CURRENT_PASS_REPORT.md`
6. All relevant `docs/steering/*`
7. `docs/modules/module-04-customer-check-flow.md`

## Continue Module

Start Module 4: Customer Check Flow.

## Already Complete

- Module 0 verified.
- Module 1 verified.
- Module 2 verified.
- Module 3 verified.
- Baseline and Module 2 commits are pushed to GitHub remote `origin`.
- `/demo/ui` previews the reusable component system.
- `/demo/question-engine` previews the configurable question engine.

## Failed

No current failing required checks.

## Do Not Redo

- Do not rebuild Module 0, Module 1, or Module 2 unless a regression is discovered.
- Do not put scoring, recommendation, lead, report, or admin business logic into Module 3.
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

- Module 4 must consume the engine without duplicating question config in React components.
- Do not collect contact details before the PRD-approved lead-capture point.
- Do not introduce prohibited POC data fields.
- Keep demo copy clearly labeled as demo or estimated where applicable.
