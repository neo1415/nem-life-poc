# UI Refactor Plan

## Objective

Align the complete NEM Life+ interface with Figma page `7:4` while retaining the existing Next.js architecture, typed domain engines, validated session model, scoring, recommendations, consent, reporting, admin safety boundaries, and test contracts.

## Audit Findings

- The question, scoring, recommendation, lead, report, dashboard, admin, and configuration domains are already separated and tested.
- The assessment is genuinely config-driven and already supports branching and answer pruning.
- Current UI uses the right palette but diverges materially from Figma in scale, page composition, question-type treatment, sidebar density, landing headline measure, and result hierarchy.
- Stored sessions are written after answers but are not resumed when the assessment route mounts.
- Current category presentation is inferred from question IDs; it needs an explicit business-purpose mapping.
- Result pages append answer review and secondary actions directly beneath the primary insight experience, weakening the Figma hierarchy.
- Dashboard, reports, and admin routes have working domain models that should be restyled rather than replaced.

## Implementation Phases

1. Shared foundation: complete.
2. Assessment engine and presentation: complete.
3. Customer journey surfaces: complete.
4. Operational and report surfaces: complete.
5. Browser, PDF, unit, E2E, build, audit, and compliance verification: complete.

## Completion Evidence

- Assessment viewport assertions pass at 1440x900, 1366x768, and 1280x720 with no page-level overflow.
- Mobile smoke passes at 390x844 with reachable controls and no horizontal overflow.
- The full config-driven assessment completes through every visible step.
- Resume, Save & Exit, Back restoration, and truthful category-state component tests pass.
- Landing, assessment, result, dashboard, report, and admin routes were inspected in the running application.
- A real A4 report PDF was generated, rendered with Poppler, and visually corrected until all six pages were readable without clipping or overlap.

## Expected Runtime Files

- `src/app/(public)/page.tsx`
- `src/app/protection-check/start/page.tsx`
- `src/app/stitch-fidelity.css`
- shared quiz and protection-map components
- protection-check result and recommendation components
- customer dashboard shell and engine cards
- report and admin presentation classes where required
- focused tests for resume, progress, category state, and customer hierarchy

## Security And Architecture

- No schema, API, auth/RBAC, scoring, recommendation, lead-consent, or storage namespace changes for visual convenience.
- No unsafe HTML, external profile images, prohibited data, real-integration claims, or new dependencies.
- Figma sample premiums and customer data remain illustrative only; runtime output continues to use validated, estimate-safe domain view models.
- Client boundaries remain limited to interactive flows and existing runtime components.
