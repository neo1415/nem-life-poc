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
- `/demo/scoring`: internal Module 5 scoring-engine demo, not the final customer result page.
- `/demo/recommendations`: internal Module 6 recommendation-engine demo, not the final customer result page.
- `/demo/customer-result`: internal Module 7 customer-result demo using mock answer sets.
- `/protection-check`: redirects to the guided check start route.
- `/protection-check/start`: Module 4 guided Family Protection Check flow.
- `/protection-check/complete`: safe completion handoff, answer review, and result-page entry.
- `/protection-check/result`: Module 7 customer result page with estimated score, recommendations, budget preview, and honest CTA placeholders.
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

The customer check flow, internal scoring demo, recommendation demo, and customer result page are available, but lead capture starts in Module 8, reports in Module 9, customer dashboard preview in Module 10, and admin dashboard in Module 11.
