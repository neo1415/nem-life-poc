# **MODULE 2 PROMPT — Design System, Base UI Components, Layout Shells, Motion Rules, and UI Quality Gate**

You are building the NEM Life+ Proof of Concept.

This is Module 2\.

Your task is to build the reusable design system and base UI component layer that every future customer, report, quiz, dashboard, and admin module will use.

Do not build product features yet.

Do not build the Family Protection Check flow yet.

Do not build the scoring engine yet.

Do not build the recommendation engine yet.

Do not build lead capture yet.

Do not build the admin lead dashboard yet.

This module is about creating a strong, reusable, accessible, NEM-branded UI foundation.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-02-design-system.md`  
* `docs/steering/README.md`  
* `docs/steering/00-agent-workflow.md`  
* `docs/steering/01-product-doctrine.md`  
* `docs/steering/02-security-and-privacy.md`  
* `docs/steering/03-architecture-and-boundaries.md`  
* `docs/steering/04-ui-ux-and-copy.md`  
* `docs/steering/05-coding-standards.md`  
* `docs/steering/06-testing-and-quality.md`  
* `docs/steering/07-performance.md`  
* `docs/steering/08-dependencies-and-supply-chain.md`  
* `docs/steering/09-data-models-and-configuration.md`  
* `docs/steering/10-ai-guardrails.md`  
* `docs/steering/11-reporting-and-definition-of-done.md`  
* `docs/steering/12-accessibility.md`  
* `docs/steering/13-error-handling-logging-and-audit.md`

You must not start implementation until you have produced:

* implementation plan  
* affected files/modules  
* security considerations  
* UI/UX considerations  
* accessibility considerations  
* testing plan  
* dependency plan  
* expected verification commands

After implementation, you must re-read all the documents above and audit your work against them.

If you find violations, fix them before reporting completion.

Do not claim PASS if any required check was skipped, failed, or was not applicable without explanation.

---

# **1\. Module 2 Objective**

Create the NEM Life+ design system and reusable UI component foundation.

The design system must support:

* mobile-first customer journey  
* guided conversational quiz screens  
* score and gap explanation screens  
* recommendation cards  
* budget allocation previews  
* report previews  
* customer dashboard previews  
* admin dashboard screens  
* CRM-like lead views  
* executive demo pages  
* future PWA/mobile-friendly experience

This module must produce components that future modules can reuse without rewriting core UI patterns.

The UI must feel:

* premium  
* warm  
* trustworthy  
* Nigerian financial-services appropriate  
* modern  
* human  
* calm  
* accessible  
* not generic AI SaaS  
* not cartoonish  
* not over-animated

---

# **2\. Module 2 Non-Goals**

Do not implement:

* actual Family Protection Check logic  
* actual quiz state machine  
* actual question config  
* actual scoring engine  
* actual recommendation engine  
* actual lead capture  
* actual report generation  
* actual customer dashboard data  
* actual admin dashboard data  
* real authentication  
* real database persistence  
* real AI assistant  
* real CRM integration  
* real payment integration  
* real document upload

You may create UI demo pages using static mock data only.

Any demo content must be clearly labeled as UI preview/demo content.

---

# **3\. Required Dependency Audit**

Before installing any new dependency, audit it.

You must update:

docs/dependency-audit.md

Add a **Module 2 Dependency Audit** section.

For every new package considered, include:

* package name  
* selected version  
* dependency or devDependency  
* reason considered  
* reason approved/rejected/deferred  
* runtime or tooling  
* license  
* repository  
* maintenance status  
* known vulnerabilities  
* transitive dependency concern  
* install/postinstall scripts  
* bundle impact  
* whether it is required in Module 2  
* final decision

No UI dependency may be added casually.

---

# **4\. Required Registry Audit Commands**

Run `pnpm view` before installing any package.

Only run checks for packages actually considered.

Potential packages to audit include:

pnpm view @radix-ui/react-slot version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view @radix-ui/react-dialog version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view @radix-ui/react-label version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view @radix-ui/react-progress version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view @radix-ui/react-checkbox version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view @radix-ui/react-select version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view @radix-ui/react-tabs version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view class-variance-authority version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view clsx version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view tailwind-merge version license repository dependencies peerDependencies engines dist-tags time scripts  
pnpm view lucide-react version license repository dependencies peerDependencies engines dist-tags time scripts

If you do not install a considered package, document why it was deferred or rejected.

Run:

pnpm audit

If available, run:

pnpm licenses list  
pnpm outdated

If unavailable, document why.

---

# **5\. Dependency Decision Rules For Module 2**

## **5.1 Allowed If Audited and Needed**

The following may be approved if genuinely needed:

* `@radix-ui/react-slot`  
* `class-variance-authority`  
* `clsx`  
* `tailwind-merge`  
* exact Radix primitive packages required for accessibility  
* `lucide-react` only if icon usage is needed now

## **5.2 Prefer Native HTML Where Possible**

Before installing a Radix primitive, consider whether accessible native HTML is enough.

Use native elements where possible:

* `button`  
* `input`  
* `textarea`  
* `select`  
* `fieldset`  
* `legend`  
* `label`  
* `details`  
* `summary`  
* semantic headings  
* semantic tables

Do not install Radix just to avoid writing simple accessible markup.

## **5.3 Do Not Install In Module 2**

Do not install:

* animation libraries  
* chart libraries  
* PDF libraries  
* state management libraries  
* form libraries  
* date libraries  
* analytics libraries  
* email libraries  
* auth libraries  
* database libraries  
* AI SDKs  
* full UI frameworks  
* carousel libraries  
* tooltip libraries unless absolutely required  
* command palette libraries  
* drag-and-drop libraries

If any of these are requested by generated code, reject or defer them.

## **5.4 shadcn/ui Rule**

You may use shadcn/ui style patterns because they copy component source into the repository and allow auditing/customization.

But do not blindly install a large set of shadcn components.

In Module 2, only create the primitives needed for future modules.

Do not add components that are not needed yet.

---

# **6\. Design Doctrine**

The NEM Life+ UI must support the product thesis:

People do not wake up wanting to buy life insurance. They want to make sure their family will be okay if something happens.

The UI should guide customers calmly from:

Concern → Understanding → Score → Explanation → Recommended next step.

The design must not feel like:

* a scary death calculator  
* a banking compliance form  
* a hospital lab result  
* a generic SaaS dashboard  
* an AI-generated landing page  
* a cartoonish gamified app  
* a dark-pattern funnel

The design must feel like:

* NEM is guiding the customer  
* the user is safe  
* the process is simple  
* the result is useful  
* the next step is obvious  
* the customer remains in control

---

# **7\. Visual Identity Requirements**

Use NEM-aligned colors:

* burgundy  
* gold  
* white  
* soft neutrals  
* green for covered/protected  
* amber for review/gap  
* red only for serious warnings

Do not scatter raw hex values across components.

Use semantic design tokens.

Required token categories:

brand  
background  
surface  
surface-muted  
surface-raised  
text  
text-muted  
border  
focus  
success  
warning  
danger  
info  
gold-accent  
burgundy-accent

Required semantic uses:

* primary CTA: burgundy or gold depending contrast  
* secondary CTA: neutral/outline  
* support CTA: calm low-emphasis style  
* success/covered: green with text label  
* review/gap: amber with text label  
* serious warning: red with restraint  
* focus state: strong visible outline

---

# **8\. Typography Requirements**

Set typography rules that are readable and executive-demo friendly.

Requirements:

* clear heading scale  
* readable body text  
* mobile-friendly line heights  
* no tiny legal text  
* no overly decorative fonts  
* no inconsistent font weights  
* strong contrast for primary content  
* muted text only where still readable

Recommended type roles:

* display  
* page title  
* section title  
* card title  
* body  
* body-muted  
* caption  
* label  
* button  
* metric  
* status

Do not overfit typography to one screen.

Make it reusable.

---

# **9\. Layout and Spacing Requirements**

Create layout primitives for:

* page container  
* section container  
* stack  
* cluster/inline layout  
* two-column responsive layout  
* card grid  
* dashboard grid  
* form layout  
* admin shell layout  
* report layout

Spacing must be consistent.

Do not use random margins everywhere.

Use reusable spacing conventions.

The customer flow must be mobile-first.

The admin shell must be desktop-friendly but responsive.

---

# **10\. Required UI Components**

Create reusable components in appropriate folders.

No component should contain product-specific business logic.

No component should assume NEM live integration.

No component should hard-code scoring/recommendation rules.

Each component must have typed props and accessible markup.

## **10.1 Foundation Components**

Create:

* `Button`  
* `Card`  
* `Badge`  
* `Input`  
* `Textarea`  
* `Select` or native select wrapper  
* `Checkbox`  
* `RadioGroup` or accessible option group  
* `Field`  
* `FieldError`  
* `Label`  
* `Callout`  
* `Divider`  
* `Skeleton`  
* `EmptyState`  
* `SectionHeader`  
* `PageShell`  
* `PublicShell`  
* `AdminShell`

## **10.2 Guided Flow Components**

Create:

* `QuestionCard`  
* `OptionButton`  
* `WhyWeAsk`  
* `ProgressTracker`  
* `StepIndicator`  
* `ChoiceGrid`  
* `MobileStepShell`

These are visual/UI components only.

They must not implement the real question engine.

## **10.3 Score and Result Components**

Create:

* `ScoreRing`  
* `ScoreBandBadge`  
* `ScoreBreakdownCard`  
* `GapExplanationCard`  
* `NextStepCard`  
* `DisclaimerNote`

Use static props only.

Do not implement scoring logic.

## **10.4 Recommendation Components**

Create:

* `RecommendationCard`  
* `ProductOpportunityTag`  
* `CTAGroup`  
* `BudgetRangeCard`  
* `BudgetAllocationPreview`  
* `ProductCategoryCard`

Use static props only.

Do not implement recommendation logic.

## **10.5 Dashboard Components**

Create:

* `DashboardMetricCard`  
* `DashboardSection`  
* `StatusBadge`  
* `InsightCard`  
* `TimelineStep`  
* `DataPreviewCard`

Use mock/static props only.

## **10.6 Admin Components**

Create:

* `LeadCard`  
* `LeadPriorityBadge`  
* `LeadStatusBadge`  
* `LeadDetailPanel` or `LeadDetailDrawer`  
* `AdminMetricCard`  
* `FilterPill`  
* `AdminTableShell`  
* `AdminActionBar`

These must not implement real admin data access.

## **10.7 Report Components**

Create:

* `ReportPageShell`  
* `ReportHeader`  
* `ReportSection`  
* `ReportScoreSummary`  
* `ReportCTA`  
* `ReportDisclaimer`

These must not generate PDF yet.

PDF/report generation belongs to a later module.

---

# **11\. Component API Rules**

Each component must:

* have explicit TypeScript props  
* avoid `any`  
* use semantic HTML where possible  
* support `className` extension where appropriate  
* avoid business logic  
* avoid hidden network calls  
* avoid hidden global state  
* be reusable outside its first use case  
* not exceed 250 lines  
* be split when it becomes too large  
* include accessible names/labels where relevant  
* support disabled/loading states where relevant  
* handle empty or missing optional props gracefully

Use composition over giant prop objects when appropriate.

---

# **12\. Button Requirements**

The Button component must support variants:

* primary  
* secondary  
* outline  
* ghost  
* danger  
* support

Sizes:

* sm  
* md  
* lg  
* icon

States:

* default  
* hover  
* focus-visible  
* disabled  
* loading if implemented

Rules:

* primary CTA must be visually clear  
* focus state must be visible  
* disabled state must not rely only on color  
* button text must remain readable  
* icon-only button must require accessible label

Do not create button styles by random class duplication across the app.

---

# **13\. Card Requirements**

Cards must support:

* default  
* elevated  
* muted  
* accent  
* warning  
* success  
* danger  
* interactive

Rules:

* interactive cards must be keyboard accessible  
* status cards must include text status, not color only  
* card spacing must be consistent  
* do not put hidden business logic inside cards

---

# **14\. Form Component Requirements**

Form primitives must support:

* label  
* helper text  
* error message  
* required indicator  
* disabled state  
* validation state  
* accessible `aria-describedby`  
* proper field grouping

Do not build actual lead capture form in Module 2\.

Create reusable field primitives only.

---

# **15\. Question UI Requirements**

Question UI must support future guided conversation.

`QuestionCard` must support:

* title  
* description/helper text  
* why-we-ask content  
* children/options area  
* optional back/next slot  
* progress slot  
* mobile layout

`OptionButton` must support:

* label  
* description  
* selected state  
* disabled state  
* icon slot  
* keyboard accessible behavior  
* large touch target

Do not hard-code actual questions.

Do not hard-code product-specific logic.

---

# **16\. Progress UI Requirements**

`ProgressTracker` must support:

* current step  
* total steps  
* optional section label  
* accessible progress text  
* mobile-friendly display  
* reduced-motion support

It must not imply a fake number of steps unless provided by props.

---

# **17\. Score UI Requirements**

`ScoreRing` must support:

* score number  
* max score  
* label  
* status text  
* accessible text equivalent  
* no color-only meaning

Score status labels may include:

* Strong  
* Good Start  
* Review Recommended  
* Important Gaps  
* Major Gaps

Do not implement the scoring algorithm in Module 2\.

---

# **18\. Recommendation UI Requirements**

`RecommendationCard` must support:

* product category  
* title  
* reason  
* explanation  
* priority  
* CTA label  
* CTA href or action slot  
* disclaimer slot  
* admin tag optional

Customer-facing explanations must be human and calm.

No robotic labels.

No fear-mongering.

Example acceptable copy in demo component:

Because people depend on your income, life cover may help provide financial support if something happens to you.

---

# **19\. Admin UI Requirements**

Admin UI components must look CRM-like but not pretend to replace NEM’s CRM.

Admin components must support:

* lead priority  
* status  
* product opportunity tags  
* source channel  
* assigned officer placeholder  
* score preview  
* action menu placeholder  
* detail drawer/panel

Do not implement real lead persistence or status updates in Module 2\.

Module 11 will build the actual admin dashboard.

---

# **20\. Report UI Requirements**

Report components must be print-friendly and branded.

They should support:

* customer name  
* estimated score  
* key gaps  
* recommended products  
* next steps  
* disclaimer  
* CTA links

Do not implement PDF generation yet.

Report module comes later.

---

# **21\. Motion Requirements**

Do not install animation libraries.

Use CSS transitions only.

Create motion utility classes or tokens for:

* soft fade  
* slide-up reveal  
* card hover lift  
* progress transition  
* score reveal placeholder

Respect reduced-motion preferences.

If `prefers-reduced-motion: reduce`, motion must be disabled or minimized.

Motion must guide attention, not decorate.

---

# **22\. Accessibility Requirements**

All components must follow practical WCAG 2.2 AA expectations.

Required:

* keyboard navigation  
* visible focus states  
* semantic HTML  
* proper labels  
* no color-only meaning  
* accessible error messages  
* accessible modals/drawers if created  
* screen-reader-friendly progress  
* sufficient contrast  
* reduced motion support  
* large mobile touch targets

Any interactive custom component must be tested for keyboard interaction.

If a component cannot be made accessible without a primitive dependency, audit and use the exact dependency needed.

---

# **23\. Responsive Requirements**

Customer UI components must be mobile-first.

Admin UI components must be desktop-friendly and responsive.

Breakpoints must be consistent.

No component should break at:

* 320px mobile width  
* common Android widths  
* tablet widths  
* desktop widths

Demo UI page must show components in mobile and desktop contexts where useful.

---

# **24\. Required Demo / UI Preview Page**

Create a UI preview page:

src/app/demo/ui/page.tsx

This page must display the design system components using static mock content.

It must include sections for:

* buttons  
* badges  
* form fields  
* question card  
* progress tracker  
* score ring  
* gap card  
* recommendation card  
* budget preview  
* dashboard metric card  
* lead card  
* report section  
* callouts/disclaimers  
* admin components

This page is for internal demo only.

It must not claim to be the finished product.

It must be accessible and responsive.

---

# **25\. Required Documentation**

Create:

docs/design-system.md  
docs/modules/module-02-design-system.md

## **`docs/design-system.md`**

Must include:

* design philosophy  
* brand color tokens  
* typography roles  
* spacing rules  
* component list  
* CTA hierarchy  
* status language  
* accessibility rules  
* motion rules  
* implementation notes  
* what belongs in Module 2 vs later modules  
* how future modules should use components

## **`docs/modules/module-02-design-system.md`**

Must include:

* purpose  
* scope  
* non-goals  
* deliverables  
* dependency decisions  
* component inventory  
* acceptance criteria  
* verification commands  
* known limitations  
* handoff notes for Module 3

---

# **26\. Required File Structure**

Create or update relevant files under:

src/components/ui/  
src/components/layout/  
src/components/marketing/  
src/components/quiz/  
src/components/score/  
src/components/recommendations/  
src/components/dashboard/  
src/components/admin/  
src/components/report/  
src/app/demo/ui/  
docs/design-system.md  
docs/modules/module-02-design-system.md

Keep components grouped by purpose.

Do not dump everything into `src/components/ui`.

Suggested split:

src/components/ui/button.tsx  
src/components/ui/card.tsx  
src/components/ui/badge.tsx  
src/components/ui/input.tsx  
src/components/ui/field.tsx  
src/components/ui/callout.tsx  
src/components/layout/page-shell.tsx  
src/components/layout/public-shell.tsx  
src/components/layout/admin-shell.tsx  
src/components/quiz/question-card.tsx  
src/components/quiz/option-button.tsx  
src/components/quiz/progress-tracker.tsx  
src/components/score/score-ring.tsx  
src/components/score/score-breakdown-card.tsx  
src/components/recommendations/recommendation-card.tsx  
src/components/recommendations/budget-allocation-preview.tsx  
src/components/dashboard/dashboard-metric-card.tsx  
src/components/admin/lead-card.tsx  
src/components/admin/lead-detail-panel.tsx  
src/components/report/report-section.tsx  
src/app/demo/ui/page.tsx

File names may vary, but module boundaries must remain clear.

---

# **27\. Testing Requirements**

Add tests for core UI behavior where reasonable in Module 2\.

Required test types:

## **Unit / Component Tests**

Test at least:

* Button renders variants and disabled state  
* OptionButton selected state  
* ProgressTracker accessible progress text  
* ScoreRing accessible score text  
* RecommendationCard renders CTA and explanation  
* Field shows label/helper/error relationships  
* LeadCard renders status and priority  
* ReportSection renders disclaimer safely

## **Accessibility-Focused Tests**

Check:

* icon-only buttons require accessible label  
* form fields connect label/helper/error  
* status badges include text labels  
* progress tracker has accessible text  
* score ring does not rely on color only

Do not write brittle tests that only check implementation details.

---

# **28\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If component tests use the same Vitest setup, `pnpm test:unit` may cover them.

If separate command exists, run it.

If Playwright was configured in Module 1 and UI preview is ready, optionally run:

pnpm test:e2e

If any command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if required checks failed or were skipped.

---

# **29\. Acceptance Criteria**

Module 2 is complete only when:

* design system documentation exists  
* reusable UI components exist  
* UI preview page exists  
* NEM Life+ visual direction is implemented  
* brand tokens are used consistently  
* components are typed  
* components are accessible  
* components are reusable  
* components do not contain product business logic  
* components do not hard-code scoring or recommendation rules  
* components do not exceed file-size discipline  
* no unnecessary dependency was added  
* every new dependency was audited  
* no animation/chart/PDF/state library was added  
* tests exist for key UI components  
* `pnpm verify` passes  
* final completion report is produced

---

# **30\. Required Module 2 Completion Report**

After completing Module 2, produce this report:

## **Summary**

Explain what design system foundation was created.

## **Files Created**

List every created file.

## **Files Modified**

List every modified file and why.

## **Dependency Audit**

List:

* packages considered  
* packages installed  
* versions selected  
* why each was approved  
* packages rejected/deferred  
* audit commands run  
* vulnerabilities found, if any  
* install scripts found, if any  
* bundle/runtime concerns

## **Component Inventory**

List all created components grouped by category:

* foundation  
* layout  
* guided flow  
* score/result  
* recommendation  
* dashboard  
* admin  
* report

## **Architecture Compliance**

Confirm:

* components are reusable  
* business logic is not inside UI  
* question/scoring/recommendation logic is not hard-coded  
* folders match architecture boundaries  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* no prohibited sensitive data collected  
* no secret added  
* no raw HTML rendering introduced  
* no unsafe dependency added  
* no fake live integration introduced  
* customer-facing demo copy uses estimated/demo-safe language

## **UI/UX and Copy Compliance**

Confirm:

* guided conversation style supported  
* CTA hierarchy supported  
* no robotic result language  
* no fear-mongering  
* no dark patterns  
* NEM Life+ tone preserved  
* mobile-first customer components created  
* admin-friendly components created

## **Accessibility Compliance**

Confirm:

* semantic markup used  
* keyboard behavior considered  
* focus states visible  
* labels/helpers/errors connected  
* no color-only meaning  
* reduced motion respected  
* accessible status labels used

## **Coding Standards Compliance**

Confirm:

* strict TypeScript maintained  
* no avoidable `any`  
* component props typed  
* file-size rule followed  
* reusable components created  
* no unnecessary abstraction  
* no unrelated refactors

## **Testing and Verification**

List commands run and results:

* `pnpm typecheck`  
* `pnpm lint`  
* `pnpm format:check`  
* `pnpm test:unit`  
* `pnpm build`  
* `pnpm audit`  
* `pnpm verify`  
* `pnpm test:e2e` if run

## **Performance Review**

Confirm:

* no heavy animation library  
* no chart library  
* no PDF library  
* no state-management library  
* no unnecessary client-heavy components  
* components are lightweight  
* UI preview does not bloat product routes

## **Known Issues / Deferred Items**

At minimum, mention:

* real Family Protection Check starts in Module 4  
* question engine starts in Module 3  
* scoring starts in Module 5  
* recommendation engine starts in Module 6  
* report generation starts in Module 9  
* admin dashboard starts in Module 11  
* full visual polish may continue as product screens are implemented

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-02-design-system.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **31\. Final Instruction**

Module 2 must create a reusable design system, not product logic.

Build components that future modules can trust.

Do not make pretty but fragile components.

Do not add dependencies for convenience.

Do not create generic AI-looking UI.

Do not bury product rules inside components.

Do not claim PASS unless the design system is reusable, accessible, tested, documented, and compliant with steering.

---

# Module 2 Implementation Record

## Purpose

Create reusable NEM Life+ UI primitives, layout shells, guided-flow components, score/result components, recommendation cards, dashboard/admin/report previews, and an internal UI preview route.

## Scope

Module 2 owns presentational components only. It does not implement the real Family Protection Check, question engine, scoring engine, recommendation engine, lead capture, report generation, admin dashboard data access, authentication, database persistence, or live integrations.

## Deliverables

- Foundation components under `src/components/ui/`
- Layout shells under `src/components/layout/`
- Guided-flow components under `src/components/quiz/`
- Score/result components under `src/components/score/`
- Recommendation components under `src/components/recommendations/`
- Dashboard components under `src/components/dashboard/`
- Admin preview components under `src/components/admin/`
- Report preview components under `src/components/report/`
- Internal UI preview page at `/demo/ui`
- Design-system documentation at `docs/design-system.md`
- Component tests for key behavior and accessibility contracts

## Dependency Decisions

No new dependencies were installed. Native HTML controls, CSS tokens, and a local `classNames` helper are sufficient for this pass. Deferred packages are documented in `docs/dependency-audit.md`.

## Acceptance Criteria

Module 2 is complete when reusable components, UI preview, documentation, dependency audit, tests, and verification all pass without product logic or unsafe data collection.

## Known Limitations

- Full visual polish may continue as product screens are implemented.
- Real Family Protection Check starts in Module 4.
- Question engine starts in Module 3.
- Scoring starts in Module 5.
- Recommendation engine starts in Module 6.
- Report generation starts in Module 9.
- Admin dashboard starts in Module 11.

## Handoff Notes For Module 3

Use the guided-flow components as display components only. Keep question models, branching, validation, and navigation inside `src/features/protection-check/` services and schemas.
