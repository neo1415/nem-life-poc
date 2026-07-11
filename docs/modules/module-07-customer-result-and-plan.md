# Module 7 - Customer Result and Recommended Plan

## Purpose

Module 7 builds the customer-facing result experience for a completed Family Protection Check.
It takes the Module 4 completed session, revalidates it, runs the Module 5 scoring engine, runs
the Module 6 recommendation engine, and renders a customer-safe result page.

## Scope

- Result route at `/protection-check/result`.
- Updated completion handoff at `/protection-check/complete`.
- Demo result route at `/demo/customer-result`.
- Customer-safe view model for score, areas, gaps, recommendations, CTAs, budget preview,
  disclaimers, and review answers.
- Missing and invalid session states.
- Honest placeholder CTA behavior.
- Tests for view model, session loading, result UI, CTAs, privacy, copy safety, and integration.

## Non-Goals

Module 7 does not add lead capture, email/phone capture, consent capture, report generation, PDF
download, customer dashboard preview, admin dashboard, persistence, payment, registration,
underwriting, policy issuance, claims handling, live NEM integration, CRM integration, or AI.

## Route Map

- `/protection-check/result`: loads the namespaced browser session, validates it, calculates the
  estimated score, generates recommendations, and renders the customer result.
- `/protection-check/complete`: now links completed sessions to "View My Estimated Score" while
  still allowing answer review and restart.
- `/demo/customer-result`: renders a clearly labeled demo result from existing fixture data.

## Result Page Structure

1. Result header with estimated-result disclaimer.
2. Score reveal with accessible score text, band, explanation, and confidence.
3. Key gap summary.
4. Score breakdown by area.
5. Recommended protection plan.
6. Budget-aware preview.
7. CTA hierarchy with inline placeholder callouts.
8. Required disclaimers.
9. Customer-safe answer review and Start Again action.

## Scoring Integration

The result view model calls `calculateFamilyProtectionScore(session.answers)`. Scoring remains in
the Module 5 domain service and is not recalculated inside UI components.

## Recommendation Integration

The result view model calls `generateRecommendations({ profile, breakdown })` after successful
scoring. Module 6 ordering, deduplication, CTA mapping, confidence, and priority labels are reused.

## Customer-Safe View Model

`src/features/protection-check/services/customer-result-view-model.ts` maps domain output to a
customer-facing model. It excludes raw answers, selected option IDs, internal question IDs, raw score
audit trail, recommendation audit trail, admin tags, rule IDs, and hidden metadata.

## CTA Handling

CTA labels come from Module 6. Module 7 renders them as buttons that show an accessible inline
placeholder message explaining that the action will be connected in a later module. No CTA performs
lead capture, purchase, payment, report sending, or fake live registration.

## Budget Preview

The budget preview displays the selected budget range or a guidance-needed state, shows relevant
recommended categories, and states that pricing and eligibility depend on approved NEM rules and
policy terms. It does not calculate exact premiums.

## Disclaimers

The result includes visible score, recommendation, and demo disclaimers:

- The score is estimated from answers.
- Recommendations are guidance only.
- The POC does not connect to live NEM systems or issue policies.

## Privacy Boundaries

Module 7 collects no new personal data. It does not add BVN, NIN, exact address, payment, upload,
policy-number, salary, medical-record, claim-record, email, phone, or consent fields. Customer answer
review uses customer-facing question and answer labels only.

## Accessibility Notes

The page uses semantic headings, accessible score text from `ScoreRing`, visible status labels for
score areas, gap severity, and recommendation priority, readable disclaimers, normal keyboard buttons
for CTAs, and an `aria-live` placeholder callout. Reduced-motion behavior remains covered by global
CSS.

## Testing Requirements

Added tests cover:

- Customer result view model generation.
- Sanitization of audit trail, admin tags, rule IDs, internal question IDs, and raw answers.
- Copy safety and no "Pay Now".
- Missing and invalid session behavior.
- Completed session rendering.
- Result page score, gaps, recommendations, budget preview, disclaimers, review action, and start
  again action.
- CTA placeholder behavior.
- Session namespace clearing without clearing unrelated storage.

## Acceptance Criteria

Status: verified.

## Known Limitations

- Result generation currently runs client-side from `sessionStorage` for the POC because there is no
  Module 8 persistence layer yet. The scoring and recommendation services are pure and can later move
  server-side.
- Product links and CTAs are demo placeholders until NEM confirms real URLs and approved flows.
- Final pricing, eligibility, policy terms, and registration require NEM validation.
- No live NEM records, CRM, VaultLyne, payment, report, dashboard, or AI integration exists.

## Handoff Notes

- Module 8 should add lead capture after the customer has seen value and must include explicit
  consent.
- Module 9 should add report preview/PDF behavior without retrofitting report logic into the result
  page.
- Module 10 should build the customer dashboard preview separately.
- Module 11 should build admin views separately and must not reuse customer-only route assumptions.
