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
- `/demo/leads`: internal Module 8 session-only demo lead summary.
- `/demo/reports`: internal Module 9 fixture-only report preview.
- `/demo/customer-dashboard`: internal Module 10 customer dashboard demo. Not a real customer account.
- `/dashboard-preview`: redirects to the customer dashboard preview.
- `/protection-check`: redirects to the guided check start route.
- `/protection-check/start`: Module 4 guided Family Protection Check flow.
- `/protection-check/complete`: safe completion handoff, answer review, and result-page entry.
- `/protection-check/result`: Module 7 customer result page with estimated score, recommendations, budget preview, and honest CTA placeholders.
- `/protection-check/lead`: Module 8 consent-based lead capture after result value is shown.
- `/protection-check/lead/confirm`: Module 8 demo lead confirmation page with Module 9 report links for send-report intent.
- `/protection-check/report`: Module 9 report landing with safe empty/invalid states.
- `/protection-check/report/preview`: Module 9 customer-safe report preview with print/save behavior.
- `/protection-check/report/email-preview`: Module 9 simulated email preview. No email is sent.
- `/protection-check/report/confirm`: Module 9 simulated report confirmation.
- `/protection-check/dashboard-preview`: Module 10 customer dashboard preview using completed check context.
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

The customer check flow, internal scoring demo, recommendation demo, customer result page, consent-based demo lead capture, report preview/email simulation, and customer dashboard preview are available. Admin dashboard starts in Module 11.
