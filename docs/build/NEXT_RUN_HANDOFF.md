# Next Run Handoff

## Read First

1. `AGENTS.md`
2. `docs/PRD.md`
3. `docs/build/RUN_STATE.md`
4. `docs/build/MODULE_STATUS.md`
5. `docs/build/CURRENT_PASS_REPORT.md`
6. All relevant `docs/steering/*`
7. `docs/modules/module-08-lead-capture-and-consent.md`

## Continue Module

Start Module 9: Report Preview / PDF.

## Already Complete

- Module 0 verified.
- Module 1 verified.
- Module 2 verified.
- Module 3 verified.
- Module 4 verified.
- Baseline through Module 8 commits are pushed to GitHub remote `origin`.
- `/demo/ui` previews the reusable component system.
- `/demo/question-engine` previews the configurable question engine.
- `/protection-check/start` runs the guided customer flow.
- `/protection-check/complete` shows the safe completion handoff and answer review.
- `/demo/scoring` previews deterministic scoring output using mock answer sets.
- `/demo/recommendations` previews deterministic recommendation output using mock answer sets.
- `/protection-check/result` renders the customer-safe estimated result from a completed session.
- `/demo/customer-result` previews the customer result using mock answer sets.
- `/protection-check/lead` captures demo lead/contact details after result value is shown.
- `/protection-check/lead/confirm` confirms demo lead submission.
- `/demo/leads` previews browser-session demo leads.

## Failed

No current failing required checks.

## Do Not Redo

- Do not rebuild Module 0, Module 1, or Module 2 unless a regression is discovered.
- Do not put customer dashboard, real payment, or admin dashboard logic into Module 9.
- Do not collect prohibited POC data in lead capture.
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

- Module 9 may use lead/result context but must not send real emails or connect live systems.
- Report delivery must be clearly demo/simulated unless real integration is explicitly approved.
- Do not introduce prohibited POC data fields.
- Keep demo copy clearly labeled as demo or estimated where applicable.
