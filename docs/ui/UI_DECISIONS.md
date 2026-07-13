# UI Decisions

## 2026-07-13: Stitch References Located After Interruption

Decision: use `docs/stitch_nem_life_visual_redesign/` as the primary visual reference source for this redesign pass.

Reason: the user added the folder to `docs/` after the earlier missing-reference search.

Correction: the prior missing-reference plan has been superseded. The manifest now maps the real Stitch folders and their associated routes.

## 2026-07-13: Add UI Rules To Steering

Decision: add `docs/steering/14-ui-implementation-rules.md` and link it from `AGENTS.md` and `docs/steering/README.md`.

Reason: the user explicitly asked for the UI implementation rules to live in project steering rather than only in chat context.

## 2026-07-13: No New Animation Dependency

Decision: use CSS transitions/keyframes only.

Reason: steering and module rules repeatedly forbid casual animation dependencies; the requested guidance animation can be implemented with CSS slide/fade/track motion and reduced-motion support.

## 2026-07-13: Assessment Fit Over Decorative Density

Decision: prioritize viewport-fit, stable controls, and one-question clarity over large decorative panels.

Reason: the user specifically objected to scrolling and wanted onboarding-like guided motion.

## 2026-07-13: Preserve Domain Boundaries

Decision: redesign through global tokens, existing design-system classes, and small page/component markup changes only where needed.

Reason: scoring, recommendations, lead capture, report generation, admin view models, and security utilities are already separated and tested. UI work must not move business logic into React display components.

## 2026-07-13: Module 15 Not Claimed

Decision: this redesign pass is not Module 15 completion.

Reason: Module 15 explicitly excludes major UI redesign and is a QA-quality-gate module. This pass will run verification for changed UI but will not mark Module 15 complete.

## 2026-07-13: Rounded Reference Cards Adapted To Repo Radius

Decision: approximate the Stitch glass-card direction with the repo's existing 8px radius tokens.

Reason: frontend steering requires cards at 8px radius or less unless the existing design system requires otherwise. The Stitch files use larger prototype radii, but those are visual references rather than production source.

## 2026-07-13: Protection Rings Without Standalone Decorative Blobs

Decision: use subtle repeating radial ring backgrounds and warm glass surfaces, not separate floating orb elements.

Reason: the Stitch visual system calls for protection rings, while frontend guidance forbids discrete decorative orbs/bokeh blobs. Ring patterns preserve the onboarding identity without creating distracting or nonfunctional objects.

## 2026-07-13: One Real Question Per Assessment Step

Decision: keep the existing question engine rendering one configured question at a time.

Reason: several Stitch assessment screens combine related questions, but the current engine includes branching, validation, and session persistence around individual configured questions. Combining them during a UI pass would risk logic and validation regressions.
