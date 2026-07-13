# UI Implementation Plan

## Pass Objective

Redesign the NEM Life+ POC UI and UX using the existing Next.js App Router, React components, typed services, validation, session stores, routes, RBAC/demo boundaries, and design-token conventions.

## Non-Negotiables

- Do not paste standalone HTML into the app.
- Do not add a UI framework, animation library, chart library, PDF library, or state library.
- Preserve business logic, validation, scoring, recommendations, lead consent, admin demo warnings, route safety, storage namespaces, and view-model sanitization.
- Do not weaken Module 14 security/privacy guardrails.
- Do not claim Module 15 QA completion as part of this redesign.

## Phase 1: Documentation And Reference Control

Status: complete.

- Create UI reference manifest.
- Create screen inventory.
- Create implementation plan.
- Create decision log.
- Record Stitch references and map each to app surfaces.

## Phase 2: Shared Visual System

Status: complete for this pass.

- Extend global tokens for warmer premium gradients, status surfaces, glass/material depth, and motion timing.
- Tune page shells, cards, buttons, badges, fields, tables, report shell, dashboard/admin shells.
- Keep radius at 8px or less unless existing component requires otherwise.
- Use the Stitch references' rounded/glass intent within this repository's stricter existing 8px radius rule unless a component already uses a larger radius and the exception is recorded.

## Phase 3: Customer Entry And Guided Assessment

Status: complete for this pass.

- Replace card-first landing hero with a first-viewport branded guidance hero.
- Improve assessment layout, progressive rail, question card density, option grid, and desktop fit.
- Keep one-question flow and existing engine.

## Phase 4: Result, Lead, Report, Dashboard, Admin

Status: complete for this pass through shared design-system primitives; deeper per-screen redesign can build on this baseline.

- Improve result information hierarchy and CTA clarity.
- Improve lead capture spacing and privacy notice visibility.
- Improve print/report readability.
- Improve customer dashboard scanability.
- Improve admin/config operational density without marketing-style hero sections.

## Phase 5: Verification

Status: complete for this pass.

- Run focused unit/component tests for touched areas.
- Run typecheck/build/audit where practical.
- Start local dev server.
- Capture viewport metrics for changed routes, especially `/protection-check/start` at 1440x900, 1366x768, 1280x720, and mobile.
- Capture screenshots for changed routes.
- Re-read governing docs and produce compliance report.

## Initial Affected Files

- `docs/ui/*`
- `AGENTS.md`
- `docs/steering/README.md`
- `docs/steering/14-ui-implementation-rules.md`
- `src/app/globals.css`
- `src/app/(public)/page.tsx`
- Possible customer/admin/report component class usage if CSS-only improvements are insufficient.

## Dependency Plan

No new dependencies.
