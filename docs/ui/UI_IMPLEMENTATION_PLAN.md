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
- Use the approved Serene Assurance 24px radius for primary onboarding/result cards and tighter 8px-12px radii for operational/admin elements.
- Keep the large-radius exception scoped to customer journey surfaces where the approved design system explicitly requires it.

## Phase 3: Customer Entry And Guided Assessment

Status: complete for this pass.

- Replace card-first landing hero with a first-viewport branded guidance hero.
- Improve assessment layout, progressive rail, question card density, option grid, and desktop fit.
- Keep one-question flow and existing engine.

## Phase 4: Result, Lead, Report, Dashboard, Admin

Status: complete through screen-level components and route-specific layouts.

- Rebuild result as a score-first protection picture with strong/gap panels and a persistent protection map.
- Rebuild recommendations as prioritized plan rows with a sticky, estimate-safe budget panel.
- Rebuild lead capture as a calm two-column follow-up flow while preserving visible consent and validation.
- Rebuild reports as a polished, print-safe protection document.
- Rebuild the customer dashboard as an ecosystem status view with a persistent map and explicit preview boundary.
- Rebuild admin lead surfaces as a dense operational workspace with navigation and compact lead rows.

## Phase 5: Verification

Status: complete for this pass.

- Run focused unit/component tests for touched areas.
- Run typecheck/build/audit where practical.
- Start local dev server.
- Capture viewport metrics for changed routes, especially `/protection-check/start` at 1440x900, 1366x768, 1280x720, and mobile.
- Capture screenshots for changed routes.
- Re-read governing docs and produce compliance report.
- Preserve natural scrolling as a fallback; verify that essential assessment controls remain visible at the required desktop viewports.

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
