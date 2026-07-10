# Build Manifest

## Project Purpose

NEM Life+ is a proof of concept for a guided family protection and lead intelligence experience. It demonstrates entry, guided check, estimated score, recommendations, lead capture, report preview, customer dashboard preview, admin lead dashboard, and future integration paths without pretending to connect to live NEM systems.

## Source of Truth

- `AGENTS.md`
- `docs/PRD.md`
- `docs/steering/*`
- `docs/modules/*`
- `docs/build/*`

## Module List

0. Steering, Doctrine, Agent Rules
1. Project Foundation, Tooling, Dependency Audit
2. Design System and Base UI
3. Question Engine
4. Customer Entry and Guided Check Flow
5. Scoring Engine
6. Recommendation Engine
7. Customer Result Page
8. Lead Capture and Consent
9. Report Preview and Email Simulation
10. Customer Dashboard Preview
11. Admin Lead Dashboard
12. Admin Configuration Preview
13. Demo Scenarios and Executive Demo Mode
14. Security, Privacy, Abuse-Case Hardening
15. Testing, QA, Final Quality Gates
16. Final Documentation and Handoff

## Required Steering Docs

All files under `docs/steering/` are binding. Relevant files must be re-read before and after implementation.

## Required Verification Commands

Run scripts that exist in `package.json`, especially:

- `pnpm typecheck`
- `pnpm lint`
- `pnpm format:check`
- `pnpm test:unit`
- `pnpm build`
- `pnpm audit`
- `pnpm verify`

Do not invent success for missing scripts. Add meaningful scripts when a module requires them.

## Definition of Done

A module is done only when its acceptance criteria are met, steering compliance is confirmed, required checks pass or failures are honestly documented, and build-control files are updated.

## Non-Negotiable Safety Rules

Do not build fake live NEM integration, CRM sync, email/SMS/WhatsApp sending, advisor assignment, payment, policy purchase, underwriting, claims processing, document upload, BVN/NIN verification, or production-secure admin access. Clearly label demo, simulated, future-state, or estimated behavior.

Do not collect prohibited sensitive data listed in `docs/steering/02-security-and-privacy.md`.
