# Figma Screen Map

## Source

- File: `NEM Life+ UI Reconstruction`
- File key: `PJzAIVmZosWtf8MF1yWCWj`
- Editable screens page: `7:4` - `10 — Editable Screens`
- Design-system page: `0:1` - `00 — Foundations`
- Design-system frame: `7:27` - `NEM Life+ Foundations` (1440x980)
- Local export audited: `NEM Life+ UI Reconstruction.fig`, exported 2026-07-13.

## Editable Desktop Frames

| Node     | Exact frame name                         |      Size | App surface                          | Major sections and controls                                                                                                                                              |
| -------- | ---------------------------------------- | --------: | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `9:2`    | `Recommended Protection Plan — Editable` | 1265x1600 | Result recommendation section        | Compact top bar, score pill, centered title, prioritized recommendation cards, why-recommended panels, budget guidance rail, CTAs, legal footer.                         |
| `11:2`   | `Existing Life Cover — Editable`         | 1483x1600 | Life-cover questions                 | Top bar, segmented progress, focused assessment card, four choice tiles, conditional cover amount treatment, Back/Continue, protection sidebar.                          |
| `12:39`  | `Family Health Cover — Editable`         | 1600x1555 | Health questions                     | Top bar, framed assessment surface, step badge, centered category heading, cover-status choices, family-member choices, Back/Continue, protection sidebar, legal footer. |
| `13:2`   | `Family Readiness — Editable`            | 1728x1350 | Readiness questions                  | Top bar, safe-to-start callout, category heading, two readiness decision cards, Back/Continue, stateful protection sidebar, footer.                                      |
| `14:2`   | `Financial Dependents — Editable`        | 1600x1280 | Dependents questions                 | Top bar, category progress, centered stage title, split decision/counter card, Back/Continue, coverage-strength sidebar.                                                 |
| `31:2`   | `06 — Geographic Context`                | 1440x1024 | Location and location-risk questions | Top bar, segmented progress, large geographic card, state/city controls, risk choices, none option, Property-active sidebar.                                             |
| `31:64`  | `07 — Monthly Protection Budget`         | 1440x1024 | Monthly budget question              | Top bar, step dots, focused budget card, four range choices, why-we-ask panel, guidance action, Continue, Wealth-active sidebar.                                         |
| `31:134` | `08 — NEM Life+ Landing Page`            | 1440x1180 | `/`                                  | Compact top bar, centered two-line hero, primary CTA, trust note, three benefit cards, How It Works pathway, legal/security footer.                                      |
| `31:179` | `09 — Customer Dashboard`                | 1440x1024 | Customer dashboard preview           | Top bar, welcome copy, ecosystem status heading, preview badge, three status cards, compact protection sidebar, legal/security footer.                                   |
| `31:242` | `10 — Protection Score Result`           | 1440x1024 | Protection score result              | Top bar, score ring, interpretation, strong/gap panels, recommended-plan CTA, Family-active sidebar, legal/security footer.                                              |

## Foundations

- Display headings: Manrope, semibold/bold.
- Body and controls: Plus Jakarta Sans, regular/semibold.
- Background `#FFF8F7`; surface `#FFFFFF`; soft surface `#FFF0F0`; muted surface `#FBE2E2`.
- Text `#251819`; muted text `#584141`.
- Primary burgundy `#570013`; strong primary `#800020`; soft primary `#FFDADA`.
- Gold `#735C00`; soft gold `#FED65B`; border `#E0BFBF`; success `#2E8B67`; disabled `#A9A7A7`.
- Customer cards use white or soft-pink surfaces, thin warm borders, restrained shadows, and 16-24px corner radii.
- Primary buttons use solid burgundy, white text, 52-58px height, and compact 8-12px radii.
- Secondary buttons use transparent/white surfaces with burgundy borders.
- Assessment sidebars use a pale pink surface, an active tinted row, a gold/burgundy edge rail, category icons, and optional progress/status copy.
- Spacing follows an 8px rhythm with 24-64px major gaps and compact 16-24px internal control spacing.

## Inference Rules

- Single choice: extend the Existing Life Cover or Monthly Protection Budget choice pattern.
- Multi choice: extend Geographic Context or Family Health Cover member choices.
- Text/select/location: extend Geographic Context fields.
- Numeric/range follow-up: extend Financial Dependents or Existing Life Cover.
- Readiness decisions: extend Family Readiness.
- Screens without bespoke Figma frames must reuse the same shell, typography, tokens, button hierarchy, icons, sidebar, and feedback states.
