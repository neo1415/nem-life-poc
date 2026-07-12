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
- `/demo/admin`: internal Module 11 admin demo with obviously fake mock leads. Not a production CRM.
- `/demo/config`: internal Module 12 configuration demo. Not production settings.
- `/demo`: Module 13 demo hub for executive/scenario routes.
- `/demo/executive`: Module 13 boardroom-friendly executive demo mode.
- `/demo/scenarios`: Module 13 fictional persona selector.
- `/demo/scenarios/[scenarioId]`: Module 13 scenario detail and presenter script.
- `/demo/scenarios/compare`: Module 13 persona comparison with demo-only metrics.
- `/demo/reset`: Module 13 browser demo-data reset.
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
- `/admin`: Module 11 demo admin overview using validated session demo leads. Not production-secure.
- `/admin/leads`: Module 11 demo admin lead list with local filters, search, metrics, and status controls.
- `/admin/leads/[leadId]`: Module 11 demo lead detail view with masked contact data, consent, status workflow, and local notes.
- `/admin/leads/export`: Module 11 export simulation preview. No file is sent to NEM systems.
- `/admin/config`: Module 12 configuration overview with validation status and preview-only boundary.
- `/admin/config/questions`: Module 12 question catalog and safe question editor preview.
- `/admin/config/scoring`: Module 12 scoring weights and score-band editor preview.
- `/admin/config/recommendations`: Module 12 recommendation rule and lead-priority preview.
- `/admin/config/products`: Module 12 product category mapping preview.
- `/admin/config/ctas`: Module 12 CTA and disclaimer copy preview.
- `/admin/config/preview`: Module 12 draft config preview against mock personas.
- `/admin/config/export`: Module 12 JSON export/import simulation. Nothing is published.

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

The customer check flow, internal scoring demo, recommendation demo, customer result page, consent-based demo lead capture, report preview/email simulation, customer dashboard preview, demo admin lead dashboard, admin configuration preview, and executive demo scenarios are available. Security/privacy hardening continues in Module 14.
