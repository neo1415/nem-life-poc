# UI Reference Manifest

## Reference Root

Primary visual reference folder: `docs/stitch_nem_life_visual_redesign/`

Compatibility reference folder: `docs/ui-references/` is not present. The binding UI steering rules now require reading either `docs/ui-references/` or the available Stitch folder.

## Reference Classification

| Reference Folder                        | Classification | Associated App Surface                                      | Useful Files              | Notes                                                                                                                                                                                                 |
| --------------------------------------- | -------------- | ----------------------------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serene_assurance`                      | APPROVED       | Global visual system                                        | `DESIGN.md`               | Defines Human-Centric OS aesthetic, warm surface palette, burgundy/gold hierarchy, glassmorphism, protection rings, typography, segmented progress, cards, inputs, chips.                             |
| `nem_life_landing_page_redesign`        | APPROVED       | `/` landing page                                            | `screen.png`, `code.html` | Use screenshot for visual intent. Reimplement with existing app components and routes.                                                                                                                |
| `nem_life_protection_assessment_flow`   | APPROVED       | `/protection-check/start` assessment shell                  | `code.html`               | Desktop top bar, right protection map rail, glass action card, progress concept. HTML contains remote assets and prototype-only Tailwind; do not paste.                                               |
| `assessment_financial_dependents`       | PARTIAL        | Financial dependents and dependent count questions          | `screen.png`, `code.html` | Shows two tightly related tasks on one screen, but repo question engine currently separates these as conditional steps. Preserve real question sequence unless viewport and logic allow an exception. |
| `assessment_existing_life_cover`        | PARTIAL        | Existing life cover and cover range                         | `screen.png`, `code.html` | Visual intent useful; combined question/range is a possible future exception but current configured flow should remain one primary question unless logic is safely combined.                          |
| `assessment_family_health_cover`        | PARTIAL        | Health cover and who-needs-cover questions                  | `screen.png`, `code.html` | Shows multi-section health screen. Apply visual grammar to separate current configured questions.                                                                                                     |
| `assessment_monthly_protection_comfort` | APPROVED       | Monthly protection comfort question                         | `screen.png`, `code.html` | Large focused card, option rows, why-we-ask callout, bottom controls.                                                                                                                                 |
| `assessment_location_risk_context`      | APPROVED       | Location risk context question                              | `screen.png`, `code.html` | Use for multi-choice risk selection styling.                                                                                                                                                          |
| `assessment_family_readiness`           | APPROVED       | Beneficiary/document/family readiness questions             | `screen.png`, `code.html` | Use for calm family readiness treatment.                                                                                                                                                              |
| `protection_score_result_redesign`      | APPROVED       | `/protection-check/result` score section                    | `screen.png`, `code.html` | Use score ring, strong/gap panels, side rail visual grammar; preserve estimated and safe copy from domain output.                                                                                     |
| `recommended_protection_plan_redesign`  | APPROVED       | Result recommendations and budget preview                   | `screen.png`, `code.html` | Use prioritized recommendation card + sticky budget guidance style; do not show fake exact premium promises.                                                                                          |
| `customer_dashboard_redesign`           | APPROVED       | `/protection-check/dashboard-preview`, `/dashboard-preview` | `screen.png`, `code.html` | Use ecosystem cards and preview/future verified labels; preserve no fake live data.                                                                                                                   |

## Shared Visual Vocabulary To Implement

- Warm off-white base.
- Fixed or compact top identity bar.
- Burgundy primary actions.
- Gold used for progress, score, and positive milestones.
- Glass cards with low-opacity borders and soft ambient depth.
- Protection rings/background gradients.
- Right-side protection map rail on wide assessment/result/dashboard screens.
- Segmented progress path rather than a thin generic bar.
- Large, calm onboarding-style headings.
- Selection cards with icons/status affordances and clear selected state.
- Bottom Back/Continue action row for assessment.
- Reports and admin screens use the same palette but stay readable and operational.

## Prototype Constraints

The HTML references include Tailwind CDN configuration, remote fonts, Material Symbols, remote placeholder images, and static mock copy/data. These are reference material only.

Implementation must use existing app code, components, routing, validation, schemas, engines, session storage rules, security utilities, and design tokens.

## Missing Or Inferred Screens

No direct visual references were provided for:

- lead capture and confirmation;
- report preview/email simulation;
- admin lead dashboard and config preview;
- demo scenario pages;
- error/empty/invalid states.

These screens should inherit the Serene Assurance visual vocabulary while preserving their existing functional and security requirements.
