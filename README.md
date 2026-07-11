# NEM Life+ POC

NEM Life+ is a proof of concept for a guided family protection and lead intelligence experience for NEM Life and the NEM Group.

This repository is being built module by module from `docs/PRD.md`, `docs/modules/*`, `docs/steering/*`, and `docs/build/*`.

Before starting any implementation module, read `AGENTS.md`, `docs/PRD.md`, the current module PRD, and all relevant files in `docs/steering/`.

## Scope

The final POC will demonstrate a mock NEM entry point, guided Family Protection Check, estimated score, recommendations, lead capture, report preview, customer dashboard preview, admin lead dashboard, demo scenarios, and future integration paths.

## Non-Goals

The POC must not pretend to provide live NEM integration, CRM sync, real email/SMS/WhatsApp sending, real policy issuance, payment, underwriting, claims processing, BVN/NIN verification, document upload, or production-secure admin access.

## Requirements

- Node `24`
- pnpm `11.7.0`

## Setup

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm test:unit
pnpm build
pnpm audit
pnpm verify
```

E2E is available separately:

```bash
pnpm test:e2e
```

## Current Routes

- `/`: Module 1 public foundation placeholder.
- `/demo/nem-entry`: mock NEM entry placeholder.
- `/demo/ui`: internal Module 2 design-system preview.
- `/demo/question-engine`: internal Module 3 question-engine demo, not the final customer flow.
- `/protection-check`: redirects to the guided check start route.
- `/protection-check/start`: Module 4 guided Family Protection Check flow.
- `/protection-check/complete`: Module 4 safe completion handoff and answer review.
- `/admin`: admin placeholder with no real data or claimed auth.

## Folder Overview

- `src/app`: Next.js App Router routes.
- `src/components`: future reusable UI components.
- `src/features`: future domain modules.
- `src/lib`: shared validation, formatting, security, logger, constants.
- `src/server`: future server actions, services, repositories.
- `src/test`: test setup, fixtures, factories, utilities, E2E tests.

Some folders are introduced with `.gitkeep` files so the intended architecture is visible before later modules add code.

## Security and Privacy

Do not commit `.env`. Do not expose private environment variables through `NEXT_PUBLIC_*`. Do not collect prohibited POC data listed in `docs/steering/02-security-and-privacy.md`.

## Dependency Audit

All dependencies must be audited in `docs/dependency-audit.md` before installation or upgrade. No dependency may be added casually.

## Known Limitations

The customer check flow is available, but scoring starts in Module 5, recommendations in Module 6, lead capture in Module 8, reports in Module 9, and admin dashboard in Module 11.
