# UI Implementation Rules

These rules are binding for every task involving UI, frontend behaviour, reports, PDFs, customer screens, assessment screens, dashboards, or administrative interfaces.

## Required Reading

Before making UI changes, read:

1. `AGENTS.md`.
2. `docs/PRD.md`.
3. The applicable module PRD or implementation record.
4. All applicable `docs/steering/` files.
5. Security, architecture, coding, testing, accessibility, performance, and reporting requirements.
6. `docs/ui/UI_REFERENCE_MANIFEST.md`, `docs/ui/UI_SCREEN_INVENTORY.md`, `docs/ui/UI_IMPLEMENTATION_PLAN.md`, and `docs/ui/UI_DECISIONS.md` when present.
7. All available UI reference files under `docs/ui-references/`.
8. All available Stitch visual redesign files under `docs/stitch_nem_life_visual_redesign/`.

If the expected reference folder is missing, stop long enough to report the missing folder and record the condition in `docs/ui/UI_REFERENCE_MANIFEST.md`. Do not silently invent reference fidelity.

## Reference Use

Files in `docs/ui-references/` and `docs/stitch_nem_life_visual_redesign/` are visual and interaction references, not production-ready source code.

Do not:

- paste supplied standalone HTML directly into the application;
- import prototype Tailwind CDN setup;
- import duplicate prototype font or icon stylesheets;
- preserve prototype-only JavaScript;
- replace real application data, validation, routing, or services with mock prototype content;
- weaken security, privacy, RBAC, validation, storage, audit, or view-model boundaries.

Reimplement the approved direction using the repository's existing framework, components, routing, validation, state management, authentication/RBAC posture, APIs, types, and design-token conventions.

## Business Logic And Security

Preserve all business logic, access control, security boundaries, validation, auditing, and existing functional behaviour.

If a visual reference conflicts with a steering requirement, security requirement, module PRD, or implemented business rule, the project requirement wins. Record the decision in `docs/ui/UI_DECISIONS.md`.

## Phase Review

After each UI implementation phase:

1. Update the UI manifest, screen inventory, implementation plan, and decisions log.
2. Re-read the applicable steering documents and UI rules.
3. Inspect the running application.
4. Correct violations before reporting completion.

Context compaction or task resumption does not remove these obligations.

## Visual Verification

Do not report a UI screen complete merely because it compiles. Inspect the real route in a browser and collect viewport evidence for changed assessment screens, especially 1440x900, 1366x768, and 1280x720.

Assessment desktop screens must show essential question content, progress, validation, Back, Continue, and Save/Exit where applicable without page-level vertical scrolling, clipping, horizontal overflow, browser zoom, or inaccessible internal scroll areas.
