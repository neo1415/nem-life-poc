# UI Screen Inventory

## Customer Screens

| Route                                                          | Purpose                              | UI Risk                                                                                                   | Redesign Notes                                                                                                                                                                                          |
| -------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                                            | Landing page                         | Hero previously card-first; above-fold value can feel static.                                             | Implemented from `nem_life_landing_page_redesign`: guided first viewport, compact top bar, trust note, benefit cards, and step pathway.                                                                 |
| `/demo/nem-entry`                                              | Mock NEM entry                       | Must stay demo-labeled.                                                                                   | Keep compact channel-entry framing and NEM trust note.                                                                                                                                                  |
| `/protection-check/start`                                      | Guided Family Protection Check       | Highest fit risk; must avoid page-level desktop scroll at 1440x900, 1366x768, 1280x720 for assessment UI. | Implemented from assessment Stitch references: compact Save/Exit top bar, centered animated question card, segmented progress, and right protection map rail while preserving one-question engine flow. |
| `/protection-check/complete`                                   | Completion handoff and answer review | Must not show fake score if session incomplete.                                                           | Keep safe handoff; ensure answer review is readable.                                                                                                                                                    |
| `/protection-check/result`                                     | Score, gaps, recommendations         | Must avoid overclaiming and preserve customer-safe view model.                                            | Implemented score-first composition, strong/gap panels, prioritized plan rows, estimate-safe budget guidance, and persistent protection map without fake premium claims.                                |
| `/protection-check/lead`                                       | Lead capture and consent             | Consent must stay visible and unchecked by default.                                                       | Improve form clarity only; preserve validation.                                                                                                                                                         |
| `/protection-check/lead/confirm`                               | Lead confirmation                    | Must not claim real email/CRM/advisor action.                                                             | Keep demo/future messaging visible.                                                                                                                                                                     |
| `/protection-check/report/*`                                   | Report, email preview, confirm       | Must be print-safe and disclaimer-visible.                                                                | Implemented a composed report document with a branded summary hero, structured body, visible disclaimers, and print-safe overrides without adding a PDF dependency.                                     |
| `/protection-check/dashboard-preview` and `/dashboard-preview` | Customer dashboard preview           | Must distinguish estimated vs future verified data.                                                       | Implemented welcome framing, ecosystem status cards, restrained preview labeling, actions rail, and future-verified boundaries from the approved dashboard reference.                                   |

## Admin And Configuration Screens

| Route Group                | Purpose                             | UI Risk                                                   | Redesign Notes                                                                                                                                 |
| -------------------------- | ----------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `/admin`, `/admin/leads/*` | Demo lead dashboard, detail, export | Must remain demo-only and mask contact data.              | Implemented a burgundy operational rail, compact metrics, and scannable lead rows while preserving demo-only warnings and masked contact data. |
| `/admin/config/*`          | Configuration preview               | Must not claim live publish or production admin security. | Improve editor density and validation readability.                                                                                             |

## Demo Screens

| Route Group                                                                                                                                                                        | Purpose                         | UI Risk                                             | Redesign Notes                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| `/demo`, `/demo/executive`, `/demo/scenarios/*`, `/demo/reset`                                                                                                                     | Executive demo, personas, reset | Must use fictional data and avoid fake live claims. | Keep boardroom-friendly, story-driven navigation.     |
| `/demo/customer-result`, `/demo/reports`, `/demo/customer-dashboard`, `/demo/admin`, `/demo/config`, `/demo/recommendations`, `/demo/scoring`, `/demo/question-engine`, `/demo/ui` | Internal demos                  | Must remain clearly labeled demo/internal.          | Apply shared visual polish through tokens/components. |

## Assessment Question Policy

- Default: one primary question per page.
- Current implementation renders one configured question at a time.
- Follow-up questions are separate configured steps where branching applies.
- Any multi-field question must remain allowed only when fields are tightly coupled and fit within the required desktop viewports.

## Required Viewports For Assessment Verification

- 1440x900
- 1366x768
- 1280x720
- Mobile smoke: 390x844

Assessment route success criteria:

- No horizontal overflow.
- Essential question, options, progress, and Back/Continue controls visible.
- No page-level vertical scrolling on the three desktop viewports.
- Reduced motion preference respected.
