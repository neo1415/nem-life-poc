# Module 9 - Report Preview and Email Simulation

## Purpose

Module 9 creates the NEM Life+ Family Protection Report layer. It turns a completed Family Protection Check, estimated score, key gaps, recommendations, budget context, CTA intent, and optional demo lead context into a customer-safe report preview.

## Scope

- Report data model, runtime schema, builder, and report-safe view model.
- Report preview, report landing, email preview, confirmation, and demo report routes.
- Print or Save as PDF browser behavior using `window.print()` and CSS print styles.
- Simulated email preview only.
- Masked contact display when lead context exists.

## Non-Goals

No live email, SMS, WhatsApp, CRM sync, real PDF server generation, document upload, customer dashboard, admin dashboard, registration, payment, underwriting, or policy issuance was added.

## Route Map

- `/protection-check/report`: loads the safe report context or shows the empty/invalid state.
- `/protection-check/report/preview`: renders the main customer-safe report preview.
- `/protection-check/report/email-preview`: renders a simulated email preview and states no email was sent.
- `/protection-check/report/confirm`: confirms the demo report preview is ready.
- `/protection-check/lead/confirm`: links send-report leads to report and email previews.
- `/demo/reports`: renders fixture-only demo report data.

## Report Philosophy

The report is a calm education and conversion asset. It explains the estimated score, key areas to review, recommended protection areas, and practical next steps without fear language, final premium claims, or fake policy language.

## Report Data Model

`FamilyProtectionReport` includes ID, timestamps, version, demo mode, customer, score, score band, confidence, score areas, key gaps, recommendations, budget preview, CTA links, next steps, lead intent, source channel, disclaimers, and metadata.

The customer submodel only allows display name, first name, preferred contact method, masked email, and masked phone.

## Report-Safe View Model

The report view model validates the report shape and adds display labels. It excludes raw answers, audit trails, admin opportunity tags, internal rule IDs, raw lead priority, hidden metadata, and full contact details.

## Report Sections

The preview contains the report header, score summary, key findings, score breakdown, recommended next steps, budget guidance, next steps, visible disclaimers, and footer.

## Print and Save Behavior

The report uses the native browser print dialog. The UI label is `Print or Save as PDF`, and helper copy explains that the browser can print or save as PDF. No runtime PDF dependency was added.

## Email Simulation Behavior

The email preview includes a recipient label, subject, greeting, short body, report link, and required demo note. It never sends email and never claims delivery.

## CTA Link Handling

CTA links are internal, honest, and demo-aware. Demo/future links are labeled as demo follow-up links and avoid payment or fake purchase destinations.

## Privacy Boundaries

Module 9 collects no new personal data. It may display the customer name and masked contact details already captured in Module 8. It does not display BVN, NIN, exact address, bank/card details, policy numbers, uploads, passwords, salary, medical records, claim records, or insurer credentials.

## Masking Rules

Emails are masked as `ad***@example.com`. Phones are reduced to a prefix, mask, and final four digits. Invalid or very short contact values are omitted.

## Accessibility Notes

The report uses semantic headings, readable disclaimers, accessible links/buttons, text statuses for score and gaps, and print styles that preserve report context without interactive-only controls.

## Testing Requirements

Module 9 includes tests for the report builder, report-safe view model, email preview builder, contact masking, CTA builder, page rendering, privacy/copy safety, and accessibility basics.

## Acceptance Criteria

The report model, builder, view model, preview route, print/save button, email preview, confirmation route, missing/invalid states, disclaimers, CTAs, masking, tests, and docs are implemented. No live email, CRM, PDF service, admin dashboard, customer dashboard, payment, or prohibited sensitive collection was added.

## Known Limitations

- Real email/SMS/WhatsApp delivery is deferred.
- Real PDF server generation is deferred.
- Real CRM integration is deferred.
- Customer dashboard preview begins in Module 10.
- Admin dashboard begins in Module 11.
- Report copy and product links need final NEM legal/compliance confirmation.

## Handoff Notes

Module 10 can reuse the report-safe model for customer dashboard preview. Module 11 can reuse the report ID and lead context without exposing customer report internals in admin surfaces.
