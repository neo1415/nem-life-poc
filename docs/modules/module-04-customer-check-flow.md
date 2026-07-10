# **MODULE 4 PROMPT — Customer Entry, Landing Page, Guided Family Protection Check Flow, Session Handoff, and UX Validation**

You are building the NEM Life+ Proof of Concept.

This is Module 4\.

Your task is to build the customer-facing entry and guided Family Protection Check flow using the design system from Module 2 and the configurable question engine from Module 3\.

This module turns the foundation into a real customer-facing guided experience.

However, this module must stop before scoring, recommendations, lead capture, report generation, and admin dashboard implementation.

The output of this module should allow a user to:

1. Visit a mock NEM entry point.  
2. Click into NEM Life+.  
3. Understand the purpose of the Family Protection Check.  
4. Start the guided check.  
5. Answer configured questions one at a time.  
6. Move forward and backward.  
7. See progress.  
8. See “why we ask” explanations where available.  
9. Validate required answers.  
10. Complete the check.  
11. Arrive at a safe completion handoff page that prepares for Module 5 scoring.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-04-customer-check-flow.md`  
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
* architecture plan  
* route plan  
* state/session plan  
* security considerations  
* privacy considerations  
* UI/UX considerations  
* accessibility considerations  
* testing plan  
* dependency plan  
* expected verification commands

After implementation, you must re-read all the documents above and audit your work against them.

If you find violations, fix them before reporting completion.

Do not claim PASS if any required check was skipped, failed, or was not applicable without explanation.

---

# **1\. Module 4 Objective**

Build the customer entry and guided Family Protection Check flow.

This module must demonstrate the first real customer journey:

NEM Entry → NEM Life+ Landing → Start Check → Guided Questions → Review/Completion Handoff.

The experience must feel:

* guided  
* conversational  
* calm  
* premium  
* trustworthy  
* mobile-first  
* Nigerian-market aware  
* not robotic  
* not scary  
* not like a long bank form  
* not like a generic SaaS wizard

The implementation must reuse:

* Module 2 design system components  
* Module 3 question engine  
* Module 3 question config  
* Module 3 validation and navigation services  
* Module 3 progress calculation  
* Module 3 render adapter

Do not hard-code the question sequence into React pages.

Do not copy/paste question text into screen components.

Do not bypass the question engine.

---

# **2\. Module 4 Non-Goals**

Do not implement:

* score calculation  
* score result page  
* recommendation engine  
* recommended protection plan  
* lead capture  
* email capture  
* phone capture  
* consent capture  
* report generation  
* PDF generation  
* customer dashboard preview  
* admin dashboard  
* admin lead persistence  
* real authentication  
* real database persistence  
* real CRM integration  
* real NEM system integration  
* payment integration  
* BVN/NIN verification  
* document upload  
* AI adviser

You may create a safe completion handoff page that says the next step is score generation, but you must not fake a score.

Do not show a fake Family Protection Score in Module 4\.

Scoring belongs to Module 5\.

---

# **3\. Dependency Policy For Module 4**

Module 4 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 4\.

Use existing stack and components from Modules 1–3.

Do not install:

* form libraries  
* state management libraries  
* animation libraries  
* chart libraries  
* PDF libraries  
* email libraries  
* analytics SDKs  
* AI SDKs  
* auth libraries  
* database libraries  
* onboarding/wizard libraries  
* carousel libraries

If you believe a dependency is absolutely necessary, stop and document:

* why existing tools cannot solve the problem  
* why the dependency is needed now  
* package version  
* license  
* repository  
* maintenance status  
* known vulnerabilities  
* transitive dependency risk  
* install/postinstall scripts  
* bundle impact  
* alternative considered

Then update:

docs/dependency-audit.md

Add a **Module 4 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Required Routes**

Create or update these routes:

src/app/demo/nem-entry/page.tsx  
src/app/(public)/page.tsx  
src/app/protection-check/page.tsx  
src/app/protection-check/start/page.tsx  
src/app/protection-check/complete/page.tsx

If the existing route structure differs because of earlier modules, preserve the existing architecture and document the final route map.

## **Route Purpose**

### **`/demo/nem-entry`**

Mock NEM website/app/campaign entry point.

Shows how NEM Life+ can be linked from NEM’s existing channels.

### **`/`**

NEM Life+ POC landing page.

Explains the value and invites the user to start the check.

### **`/protection-check`**

Main guided check route.

May redirect to `/protection-check/start` or render the guided flow directly.

### **`/protection-check/start`**

Guided question flow.

Uses the question engine.

### **`/protection-check/complete`**

Safe completion handoff page.

Shows:

* check completed  
* answers captured in demo session  
* next step is score generation in Module 5  
* no fake score  
* no lead capture yet

---

# **5\. Mock NEM Entry Page Requirements**

The mock NEM entry page must show how this could appear on:

* NEM website  
* NEM mobile app  
* social media campaign  
* WhatsApp campaign  
* SMS campaign  
* email campaign  
* agent/branch QR link

It must include a NEM-style entry card.

## **Required Card Copy**

Headline:

Check Your Family Protection Score

Supporting copy:

See what protection your family has, what may be missing, and what you can fix with NEM.

CTA:

Check My Score

Trust note:

No BVN, NIN, payment, or document upload required to start.

## **Requirements**

* CTA links to NEM Life+ landing or check start.  
* Page must clearly say this is a demo entry point.  
* It must not claim to be the real NEM website.  
* It must not use fake NEM integration language.  
* It must be responsive.  
* It must use Module 2 components and design tokens.

---

# **6\. NEM Life+ Landing Page Requirements**

The landing page must explain the value before asking questions.

It must not ask for contact details.

It must not ask for BVN/NIN.

It must not ask for payment.

It must not ask for document upload.

## **Required Hero Copy**

Headline:

Is your family protected if life changes tomorrow?

Supporting copy:

Answer a few simple questions and get an estimated Family Protection Score. You will see where your family may be exposed and what you can do next.

Primary CTA:

Start My Free Check

Secondary CTA:

See How It Works

Trust note:

No BVN, NIN, payment, or document upload required to start.

## **Required Benefit Cards**

Card 1:

Know What You Have  
See your current protection picture.

Card 2:

See What Is Missing  
Find possible gaps in life, health, property, and family readiness.

Card 3:

Fix It With NEM  
Get recommended next steps based on your answers.

## **Required “How It Works” Section**

Show three steps:

1. Answer simple questions.  
2. See your estimated protection picture.  
3. Get recommended next steps.

Important wording:

Your score will be an estimate based on your answers. A verified score would require approved customer records and policy information.

## **Requirements**

* Landing page must be mobile-first.  
* Copy must be calm and human.  
* CTA must be obvious.  
* Page must not feel like a generic SaaS page.  
* Page must not overpromise.  
* Page must not imply live NEM data has been checked.  
* Page must link into guided flow.

---

# **7\. Guided Flow Requirements**

The guided flow must use Module 3’s question engine.

It must render the configured questions one at a time.

It must support:

* current question display  
* answer selection/input  
* answer validation  
* next navigation  
* previous navigation  
* skip where allowed  
* “not sure” options where configured  
* “why we ask” text  
* helper text  
* progress tracker  
* section label  
* session state  
* completion state  
* safe reset/restart  
* branch navigation  
* keyboard interaction  
* mobile-first layout

The flow must not hard-code question text.

The flow must not duplicate the question list outside config.

The flow must not implement scoring.

The flow must not implement recommendations.

The flow must not collect leads.

---

# **8\. Question Rendering Requirements**

Use Module 2 UI components and Module 3 render adapter.

Expected component usage may include:

* `MobileStepShell`  
* `QuestionCard`  
* `OptionButton`  
* `ChoiceGrid`  
* `WhyWeAsk`  
* `ProgressTracker`  
* `StepIndicator`  
* `Button`  
* `Field`  
* `FieldError`  
* `Input`  
* `Select`  
* `Checkbox`  
* `Callout`

If components do not exist exactly by those names, use the closest Module 2 equivalents.

Do not create duplicate UI primitives unless necessary.

If a Module 2 component is insufficient, improve it carefully without breaking existing tests.

Document any UI component changes in the completion report.

---

# **9\. State and Session Requirements**

Module 4 needs temporary session handling for the guided flow.

Allowed:

* React state  
* reducer pattern  
* URL-safe step tracking where useful  
* sessionStorage if justified and safely implemented

Preferred:

* keep state simple  
* do not add state management library  
* do not persist prohibited sensitive data  
* do not store contact details because Module 4 does not collect them  
* do not store BVN/NIN/payment/upload data because Module 4 must not collect them

If using `sessionStorage`, follow these rules:

* store only POC-safe answers  
* namespace keys clearly  
* provide reset/clear action  
* handle unavailable storage safely  
* avoid crashes during SSR  
* never treat stored data as trusted  
* revalidate loaded session data

If not using `sessionStorage`, document that answers are held in memory for Module 4\.

---

# **10\. Completion Handoff Requirements**

After the last visible question is answered, route to:

/protection-check/complete

The completion page must show:

Headline:

Your check is complete.

Supporting copy:

You have completed the first step. In the next step, NEM Life+ will use your answers to estimate your Family Protection Score and explain possible gaps.

Important note:

No score has been generated yet in this demo step. Score calculation is handled in the next module.

Actions:

* Review My Answers  
* Start Again  
* Continue to Score Preview

The “Continue to Score Preview” CTA may link to a placeholder route or be disabled with a note if Module 5 has not been implemented.

Do not show a fake score.

Do not show recommendations.

Do not collect contact details.

---

# **11\. Review Answers Requirement**

Create a simple review answers section or page inside the completion flow.

It must show:

* answered questions  
* selected answers  
* skipped/not sure answers  
* section grouping if available  
* edit/back option where practical

It must not show:

* score  
* recommendations  
* lead capture  
* report  
* admin labels

Answer labels must be customer-facing.

Do not expose internal tags or admin labels on the customer review page.

---

# **12\. Routing and Guard Behavior**

If user visits `/protection-check/complete` without a completed session:

Show a safe empty state:

No completed check was found.

Actions:

* Start Family Protection Check  
* Return Home

Do not crash.

Do not expose raw session errors.

If the session config is invalid:

Show:

We could not load the protection check right now. Please try again later.

Log safe technical details only if logging exists.

Do not expose stack traces.

---

# **13\. Copy and Tone Requirements**

All customer-facing copy must be:

* clear  
* calm  
* human  
* emotionally intelligent  
* direct  
* Nigerian-market aware  
* not fear-based  
* not robotic  
* not over-technical

Avoid:

You are unprotected.

Prefer:

Your answers may show areas your family should review.

Avoid:

Your life cover needs attention.

Prefer:

Because people depend on your income, life cover may help provide financial support if something happens to you.

Avoid:

Upload your documents.

Prefer:

No upload is needed for this check.

Avoid:

Enter BVN/NIN to continue.

This must not appear anywhere in Module 4\.

---

# **14\. CTA Rules**

The flow must not make “book a call” the only next step.

For Module 4, allowed CTAs:

* Start My Free Check  
* Continue  
* Back  
* Skip  
* I’m Not Sure  
* Review My Answers  
* Start Again  
* Continue to Score Preview  
* Return Home

Do not include:

* Buy Now  
* Pay Now  
* Book a Call  
* Speak With Advisor  
* Submit Lead  
* Send Report

Those belong to later modules.

---

# **15\. UX Behavior Requirements**

## **15.1 One Question At A Time**

The guided flow must show one main question at a time.

Do not display a long multi-question form.

## **15.2 Progress**

Progress must show:

* current step  
* total estimated steps or section progress  
* accessible progress text

It must account for branching as much as the Module 3 engine supports.

## **15.3 Back Navigation**

User must be able to go back.

If changing an earlier answer affects later branch answers, use Module 3 behavior.

Do not create inconsistent session state.

## **15.4 Skipping**

Optional questions may be skipped.

Required questions must show validation error if skipped.

## **15.5 Not Sure**

If an option includes “I am not sure,” it must be treated as a valid answer where configured.

## **15.6 Why We Ask**

Questions with `whyWeAsk` must show it in a calm, collapsible or secondary explanation area.

It must not overload the screen.

## **15.7 Mobile Feel**

On mobile, options should be large and tappable.

Primary action should be easy to reach.

Text must be readable.

---

# **16\. Accessibility Requirements**

The flow must support practical accessibility.

Requirements:

* semantic headings  
* one clear `h1` or page-level heading  
* question title associated with answer group  
* keyboard navigation  
* visible focus states  
* screen-reader-friendly progress  
* accessible validation errors  
* no color-only meaning  
* buttons have clear labels  
* input fields have labels  
* option groups use fieldset/legend or accessible equivalent  
* reduced-motion respected  
* back/continue controls accessible  
* no focus traps  
* completion page readable without visual context

If using custom option buttons, ensure keyboard users can select them.

---

# **17\. Privacy Requirements**

Module 4 must not collect:

* BVN  
* NIN  
* exact home address  
* bank details  
* payment card details  
* policy numbers  
* uploaded documents  
* uploaded IDs  
* exact salary  
* claim records  
* insurer login credentials  
* contact details for lead capture

The question flow may collect:

* first name  
* state  
* city/LGA  
* broad dependent/family answers  
* broad insurance category answers  
* budget ranges  
* readiness answers  
* external insurance categories

If a question accidentally violates these rules, remove or fix it.

---

# **18\. Error Handling Requirements**

The flow must handle:

* invalid config  
* missing question  
* invalid answer  
* no session found  
* completed session not found  
* storage unavailable if using sessionStorage  
* branch target missing

Customer-facing errors must be safe and simple.

Do not expose raw stack traces.

Do not show internal IDs unless helpful for internal demo only.

Internal demo/debug information should not appear on normal customer pages.

---

# **19\. Performance Requirements**

The flow must be fast.

Requirements:

* avoid heavy client bundles  
* no new animation library  
* no form library  
* no state library  
* no chart library  
* no PDF library  
* no repeated network calls between steps  
* no unnecessary global state  
* lazy-load demo-only heavy sections if needed  
* keep customer pages lightweight  
* avoid hydration-heavy patterns where simple client state works

The guided flow may be a Client Component because it is interactive.

Keep the client component boundary narrow.

---

# **20\. Required Files**

Create or update relevant files.

Suggested files:

src/app/(public)/page.tsx  
src/app/demo/nem-entry/page.tsx  
src/app/protection-check/page.tsx  
src/app/protection-check/start/page.tsx  
src/app/protection-check/complete/page.tsx  
src/features/protection-check/components/protection-check-flow.tsx  
src/features/protection-check/components/protection-check-shell.tsx  
src/features/protection-check/components/question-step.tsx  
src/features/protection-check/components/review-answers.tsx  
src/features/protection-check/components/check-completion-panel.tsx  
src/features/protection-check/services/check-session-store.ts  
src/features/protection-check/services/check-flow-controller.ts  
src/features/protection-check/tests/protection-check-flow.test.tsx  
src/features/protection-check/tests/check-session-store.test.ts  
src/features/protection-check/tests/review-answers.test.tsx  
docs/modules/module-04-customer-check-flow.md

File names may vary, but responsibilities must be clear.

Do not create giant page components.

No source file should exceed 250 lines unless strongly justified.

---

# **21\. Session Store Requirements**

If creating a `check-session-store` service, it must:

* initialize session  
* save answer  
* validate answer before save  
* go to next question  
* go to previous question  
* mark session completed  
* reset session  
* safely load session if using browser storage  
* revalidate loaded session  
* expose customer-safe review data

It must not:

* calculate score  
* generate recommendations  
* create lead  
* send email  
* write to database  
* call external APIs  
* store prohibited data

---

# **22\. Review Answers Data Shape**

The review answers service/component must only expose:

* question customer label/title  
* answer customer label/value  
* skipped/not sure indicator  
* section name  
* edit target if available

It must not expose:

* scoring tags  
* recommendation tags  
* admin labels  
* internal risk tags  
* hidden metadata  
* prohibited data

---

# **23\. Demo Scenario Handling**

If Module 3 created demo scenarios or default configs, Module 4 may use them only as a preview helper.

Do not build full scenario selector here unless already created.

Scenario selector belongs to Module 13\.

The main flow must work from the default question config.

---

# **24\. Documentation Requirements**

Create:

docs/modules/module-04-customer-check-flow.md

It must include:

* purpose  
* scope  
* non-goals  
* route map  
* flow description  
* state/session approach  
* privacy boundaries  
* UX decisions  
* accessibility notes  
* testing requirements  
* acceptance criteria  
* known limitations  
* handoff notes for Module 5

Update `README.md` if needed to mention:

* `/demo/nem-entry`  
* `/protection-check/start`  
* `/protection-check/complete`

---

# **25\. Testing Requirements**

Testing is mandatory.

## **25.1 Component / Integration Tests**

Test that:

* landing page renders CTA  
* mock NEM entry renders CTA  
* check flow renders first question  
* selecting answer updates state  
* next button moves forward  
* back button moves backward  
* required question blocks progress if unanswered  
* optional question can be skipped  
* “not sure” option is accepted where configured  
* why-we-ask text renders when available  
* progress updates  
* completion page appears after final question  
* review answers shows customer-facing labels  
* no score is shown in Module 4  
* no recommendation is shown in Module 4  
* no lead capture form appears in Module 4

## **25.2 Privacy Tests**

Test that:

* prohibited fields are not rendered  
* BVN does not appear  
* NIN does not appear  
* payment does not appear  
* upload does not appear  
* policy number does not appear  
* exact salary does not appear  
* contact lead form does not appear

## **25.3 Accessibility Tests**

Test that:

* question title is accessible  
* option buttons are keyboard selectable  
* progress has text equivalent  
* validation errors are visible  
* form controls have labels  
* focus state is visible  
* completion page has semantic heading  
* review answers can be navigated by keyboard

## **25.4 Routing Tests**

Test that:

* `/demo/nem-entry` loads  
* `/` loads  
* `/protection-check/start` loads  
* `/protection-check/complete` handles missing session safely

## **25.5 Session Tests**

Test that:

* session initializes  
* answer saves  
* invalid answer rejected  
* previous/next navigation works  
* completion state is set  
* reset clears session  
* loaded session is revalidated if storage is used

---

# **26\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If component tests are separate, run them too.

If Playwright is configured, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **27\. Acceptance Criteria**

Module 4 is complete only when:

* mock NEM entry page works  
* landing page works  
* guided check start page works  
* question flow uses Module 3 config/engine  
* question flow uses Module 2 UI components  
* one-question-at-a-time flow works  
* progress tracker works  
* back navigation works  
* required validation works  
* optional/skip/not-sure behavior works  
* why-we-ask text works  
* session state works  
* completion handoff page works  
* review answers works  
* no score is calculated  
* no recommendations are generated  
* no lead capture is implemented  
* no prohibited sensitive data is collected  
* no unnecessary dependency is added  
* customer copy is human and calm  
* accessibility baseline is respected  
* tests are added  
* verification commands pass  
* completion report is produced

---

# **28\. Required Module 4 Completion Report**

After completing Module 4, produce this report:

## **Summary**

Explain what customer entry and guided check flow was created.

## **Files Created**

List every created file.

## **Files Modified**

List every modified file and why.

## **Dependency Audit**

State:

* whether new dependencies were added  
* if yes, list audit details  
* if no, confirm no new dependencies were needed  
* confirm `pnpm audit` result  
* list any deferred packages

## **Route Map**

List routes created/updated:

* `/`  
* `/demo/nem-entry`  
* `/protection-check`  
* `/protection-check/start`  
* `/protection-check/complete`

Explain what each route does.

## **Architecture Compliance**

Confirm:

* Module 3 question engine is used  
* Module 2 components are reused  
* question text is not hard-coded into UI pages  
* domain logic remains outside UI components  
* session store does not calculate score/recommendations  
* no lead/report/admin logic was implemented early  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* no BVN/NIN/payment/upload/exact address/policy number fields appear  
* no contact lead capture appears  
* no prohibited data is stored  
* session data is POC-safe  
* loaded session data is revalidated if storage is used  
* no unsafe HTML rendering introduced  
* no secrets added  
* no fake live NEM integration added

## **UI/UX and Copy Compliance**

Confirm:

* guided conversation style implemented  
* one-question-at-a-time flow implemented  
* progress visible  
* back navigation available  
* why-we-ask supported  
* copy is calm and human  
* no fear-mongering  
* no robotic result language  
* CTA hierarchy appropriate for Module 4  
* no “book a call” roadblock added

## **Accessibility Compliance**

Confirm:

* semantic headings used  
* option groups accessible  
* keyboard navigation considered/tested  
* progress has accessible text  
* validation errors accessible  
* focus states visible  
* reduced motion respected  
* no color-only meaning introduced

## **Coding Standards Compliance**

Confirm:

* strict TypeScript maintained  
* no avoidable `any`  
* components typed  
* session services typed  
* no giant page components  
* file-size rule followed  
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

Also summarize tests added:

* flow tests  
* session tests  
* routing tests  
* privacy tests  
* accessibility tests

## **Performance Review**

Confirm:

* no heavy dependencies added  
* no animation/chart/form/state/PDF library added  
* client component boundary kept narrow  
* no repeated network calls introduced  
* flow remains lightweight  
* demo routes do not bloat core routes unnecessarily

## **Known Issues / Deferred Items**

At minimum, mention:

* score calculation begins in Module 5  
* recommendation engine begins in Module 6  
* result/recommended plan begins in Module 7  
* lead capture begins in Module 8  
* report generation begins in Module 9  
* admin dashboard begins in Module 11  
* persistence/database deferred  
* CRM integration deferred  
* VaultLyne integration deferred

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-04-customer-check-flow.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **29\. Final Instruction**

Module 4 must make the customer guided flow real, but it must stop before scoring and selling.

Do not show a fake score.

Do not generate recommendations.

Do not capture leads.

Do not collect prohibited sensitive data.

Do not hard-code questions into React pages.

Do not add dependencies for convenience.

Build the flow cleanly, test it properly, and prepare it for Module 5\.

