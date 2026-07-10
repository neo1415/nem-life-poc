# Next Run Handoff

## Read First

1. `AGENTS.md`
2. `docs/PRD.md`
3. `docs/build/RUN_STATE.md`
4. `docs/build/MODULE_STATUS.md`
5. `docs/build/CURRENT_PASS_REPORT.md`
6. All relevant `docs/steering/*`
7. `docs/modules/module-02-design-system.md`

## Continue Module

Start Module 2: Design System and Base UI.

## Already Complete

- Module 0 verified.
- Module 1 verified.
- Canonical docs and build-control files exist.
- Next.js foundation, strict TypeScript, Tailwind tokens, lint/format/test/build/audit/verify/E2E tooling exist.

## Failed

No current failing required checks.

## Do Not Redo

- Do not move source docs back out of `docs/`. `agent-docs` remains the original attachment-derived source, but `docs/` is now canonical.
- Do not rebuild Module 0 or Module 1 unless a regression is discovered.
- Do not remove the `postcss` override until Next depends on a patched PostCSS version.
- Do not replace `corepack pnpm` in `verify` unless the environment reliably exposes bare `pnpm`.

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

- Do not expose `.env` secrets.
- Do not implement product modules early.
- Do not claim PASS if verification is skipped or fails.
- Module 2 may consider UI helper dependencies, but every addition must be audited first.
- Keep product logic out of UI components.
