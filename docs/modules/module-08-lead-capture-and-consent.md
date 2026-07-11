# Module 8 - Lead Capture and Consent

## Purpose

Module 8 creates the consent-based lead capture layer for customers who have completed the Family
Protection Check and viewed their estimated result.

## Scope

- Lead capture route at `/protection-check/lead`.
- Lead confirmation route at `/protection-check/lead/confirm`.
- Internal demo lead summary route at `/demo/leads`.
- CTA intent config for result-page follow-up actions.
- Zod validation for lead form input, CTA intent, contact preference, consent, and stored lead
  records.
- Demo `sessionStorage` lead store with duplicate submission handling.
- Lead context builder that revalidates result context from the completed check.
- Customer-safe confirmation view model.
- Lead form, privacy notice, consent checkbox, contact preference selector, intent summary, and
  confirmation panel.

## Non-Goals

Module 8 does not add real CRM integration, real email/SMS/WhatsApp delivery, report generation,
PDF download, customer dashboard preview, admin dashboard, payment, real registration, policy
purchase, underwriting, policy issuance, claims handling, BVN/NIN verification, document upload,
auth, or AI.

## Route Map

- `/protection-check/lead`: validates the selected CTA intent, loads the completed check session,
  rebuilds result context, and renders the lead form.
- `/protection-check/lead/confirm`: loads the latest demo lead from the browser session and shows a
  customer-safe confirmation.
- `/protection-check/result`: CTAs now route supported follow-up actions to lead capture.
- `/demo/leads`: internal session-only demo summary of saved demo leads.

## Lead Capture Philosophy

Lead capture happens after value has been shown. The score, gaps, and recommendations remain
available before contact details are requested. Copy makes clear that follow-up is optional and
demo-only in this POC.

## Consent Model

Consent is visible, required, unchecked by default, and stored with text, timestamp, purpose, contact
channel, and version.

Required copy:

`I agree that NEM may contact me about my Family Protection Report and relevant insurance options.`

## Allowed Fields

The form collects only full name, email, phone, preferred contact method, preferred contact time,
visible consent, and an optional short note.

## Prohibited Fields

The form does not collect BVN, NIN, exact address, bank/card details, policy numbers, uploads,
passwords, exact salary, medical records, claim records, or insurer login details.

## CTA Intent Handling

Supported intents include report, save result, advisor, call later, review, registration, quote,
start protection plan, view recommended plans, and learn more. Intent behavior lives in
`src/features/leads/config/lead-intents.ts`, not in page components.

## Lead Data Model

The stored demo lead contains contact details, consent, source channel, CTA intent, score summary,
top gap IDs, recommended product IDs/categories, budget range, lead priority, admin opportunity tags,
and demo metadata. Customer confirmation excludes internal admin tags and priority.

## Lead Store Approach

Module 8 uses namespaced `sessionStorage` keys:

- `nem-life-plus:demo-leads:v1`
- `nem-life-plus:latest-lead-id:v1`

This is demo-only session storage, not production persistence. It allows the client-side POC to move
from form submission to confirmation without adding a database dependency.

## Privacy Boundaries

Raw answers, raw audit trails, internal scoring rule IDs, and recommendation audit trails are not
stored in the lead record. The lead context builder stores summarized context only.

## Validation Rules

Validation covers full name length, email format, practical phone format, preferred contact method,
preferred contact time, required consent, supported CTA intent, strict unknown field rejection, and
stored lead revalidation.

## Confirmation Behavior

The confirmation page says the request was saved in the demo. It does not claim that an advisor was
assigned, a report was emailed, registration started, or CRM records were created.

## Testing Requirements

Added tests cover validation, consent, prohibited fields, lead context building, demo lead storage,
duplicate handling, customer-safe confirmation view model, lead form behavior, and result CTA
routing.

## Acceptance Criteria

Status: verified.

## Known Limitations

- Demo leads are stored only in the current browser session.
- Real persistence/database integration is deferred.
- Real CRM, email, SMS, WhatsApp, advisor assignment, registration, payment, and report delivery are
  not connected.
- `/demo/leads` is not an admin dashboard.

## Handoff Notes

- Module 9 can use submitted lead context to connect report preview/delivery simulation.
- Module 11 can use the lead model and store abstraction as the starting point for admin views.
- Later persistence should replace the session demo store behind the same service boundary.
