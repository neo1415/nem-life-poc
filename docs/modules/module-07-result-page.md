# **MODULE 7 PROMPT — Customer Result Page, Score Reveal, Gap Cards, Recommended Protection Plan, CTA Hierarchy, and Budget Preview**

You are building the NEM Life+ Proof of Concept.

This is Module 7\.

Your task is to build the customer-facing result experience for the Family Protection Check.

This module must take the completed check session from Module 4, run the Module 5 scoring engine, run the Module 6 recommendation engine, and render a polished customer result page.

The customer should now be able to see:

* their estimated Family Protection Score  
* score band  
* human explanation of the score  
* score area breakdown  
* protection gap cards  
* recommended protection plan  
* relevant product category cards  
* CTA hierarchy  
* budget-aware preview  
* clear disclaimers  
* safe next-step placeholders

This module is where the POC starts to feel persuasive and business-ready.

However, this module must not collect leads, generate PDF reports, send emails, create real registrations, process payment, issue policies, or connect to NEM systems.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-07-customer-result-and-plan.md`  
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
* scoring integration plan  
* recommendation integration plan  
* CTA rendering plan  
* budget preview plan  
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

# **1\. Module 7 Objective**

Build the customer result page and recommended protection plan experience.

The page must help the customer understand:

* what their estimated score means  
* which areas may need review  
* why those gaps matter  
* which protection categories may be relevant  
* what next steps they can take  
* what is still only an estimate  
* what has not yet been verified  
* that no payment, BVN, NIN, or upload is required at this stage

The experience must feel:

* helpful  
* clear  
* calm  
* action-oriented  
* trustworthy  
* NEM-branded  
* human  
* mobile-first  
* not manipulative  
* not robotic  
* not scary  
* not over-technical

The page should start selling the idea, but not through pressure.

It should make the next step feel obvious.

---

# **2\. Module 7 Non-Goals**

Do not implement:

* lead capture  
* email capture  
* phone capture  
* consent capture  
* report generation  
* PDF download  
* real email sending  
* customer dashboard preview  
* admin dashboard  
* admin lead persistence  
* real registration form  
* real product purchase  
* payment processing  
* final premium calculation  
* underwriting decision  
* policy issuance  
* claims processing  
* BVN/NIN verification  
* document upload  
* real CRM integration  
* real NEM core integration  
* real NEM Health integration  
* real NEM Asset integration  
* real VaultLyne integration  
* AI adviser  
* live chat  
* WhatsApp/SMS integration

You may render safe CTA placeholders for later modules.

Example:

* “Send My Report” may show “Report delivery starts in Module 9.”  
* “Start Registration” may show “Registration handoff is a future module.”  
* “Ask a NEM Advisor” may show “Advisor handoff starts in Module 8 or later.”

Do not create fake working flows.

---

# **3\. Dependency Policy For Module 7**

Module 7 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 7\.

Use:

* existing Module 2 UI components  
* existing Module 3 question/session services  
* existing Module 5 scoring engine  
* existing Module 6 recommendation engine  
* existing test tools

Do not install:

* chart libraries  
* animation libraries  
* PDF libraries  
* email libraries  
* form libraries  
* state management libraries  
* analytics SDKs  
* AI SDKs  
* payment SDKs  
* auth libraries  
* database libraries  
* carousel libraries  
* confetti libraries

The score ring, breakdown, cards, and budget preview should use existing components and simple CSS/SVG.

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
* alternatives considered

Then update:

docs/dependency-audit.md

Add a **Module 7 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Required Routes**

Create or update:

src/app/protection-check/result/page.tsx  
src/app/protection-check/complete/page.tsx

Optional internal demo route if useful:

src/app/demo/customer-result/page.tsx

## **`/protection-check/result`**

Customer-facing result page.

It must:

* load completed session safely  
* validate/revalidate session data  
* run scoring engine  
* run recommendation engine  
* render score and recommendations  
* show no lead capture form  
* show no real payment/purchase/registration form  
* show no fake live NEM verification  
* handle missing session safely

## **`/protection-check/complete`**

Update this route so it can lead to result page after Module 7\.

It may show:

* “View My Estimated Score”  
* “Review My Answers”  
* “Start Again”

It must still not show lead capture.

## **`/demo/customer-result`**

Optional demo page.

If created, it must:

* use mock answer sets  
* show different result outcomes  
* be clearly labeled as demo  
* not claim to be real customer result  
* not collect data

---

# **5\. Result Page Information Architecture**

The result page must be organized in clear sections.

Recommended order:

1. Result header  
2. Score reveal  
3. Score meaning  
4. Key gaps summary  
5. Score breakdown by area  
6. Recommended protection plan  
7. Budget-aware preview  
8. CTA section  
9. Disclaimer  
10. Review answers / start again secondary actions

This page must avoid overwhelming the user.

The first view should make the score understandable immediately.

---

# **6\. Result Header Requirements**

The result header should include:

Headline:

Your estimated Family Protection Score is ready.

Supporting copy:

Based on your answers, NEM Life+ has estimated your family protection picture and highlighted areas you may want to review.

Required disclaimer nearby:

This score is an estimate based on your answers. A verified score would require approved customer records and policy information.

Do not say:

* “NEM has verified your records”  
* “Your policy is ready”  
* “Your final score”  
* “You are approved”

---

# **7\. Score Reveal Requirements**

Show:

* score number  
* max score  
* score band  
* confidence if available  
* short explanation  
* accessible text equivalent

Example:

48 / 100  
Several Important Gaps

Human explanation example:

Your answers suggest there may be several important gaps in your family protection picture. This does not mean your family has no protection. It means there are areas worth reviewing.

Rules:

* no shame  
* no fear-mongering  
* no robotic labels  
* no color-only meaning  
* no fake verification language  
* no sales CTA inside the score itself

Use Module 2 `ScoreRing` or equivalent.

Use Module 5 score band explanation.

---

# **8\. Score Breakdown Requirements**

Show score areas from Module 5\.

Areas:

* Life Cover  
* Health Protection  
* Dependents Covered  
* Premium Continuity / Payment Readiness  
* Beneficiary Readiness  
* Document Readiness  
* Property / Business Protection  
* Emergency / Wealth Planning

Each area card must include:

* area label  
* earned points  
* max points  
* status text  
* short customer explanation  
* optional evidence note  
* no internal rule IDs  
* no admin tags

Status labels:

* Strong  
* Partial  
* Gap  
* Unknown  
* Not Applicable

Do not rely only on color.

---

# **9\. Key Gaps Summary Requirements**

Show the most important gaps first.

Gap cards must include:

* customer title  
* calm explanation  
* severity label  
* confidence label if available  
* related area  
* no product purchase pressure  
* no internal rule IDs

Severity labels:

* Low  
* Moderate  
* High  
* Review Carefully

Avoid using “critical” customer-facing language unless absolutely necessary.

Example gap card copy:

Title:

Life cover may need review

Explanation:

Because people depend on your income, life cover may help provide financial support if something happens to you.

Do not say:

Your family will suffer if you die.

---

# **10\. Recommended Protection Plan Requirements**

Use Module 6 recommendation output.

Show a section:

Headline:

Recommended protection plan

Supporting copy:

Based on your answers, these are the areas you may want to review first.

Each recommendation card must include:

* product category  
* title  
* why it is recommended  
* human explanation  
* priority label  
* CTA  
* secondary CTA if available  
* disclaimer if needed

Product categories may include:

* Life Cover  
* NEM Health  
* NEM Asset / Wealth Planning  
* Motor / General Insurance  
* Home / Fire / Burglary  
* Business Protection  
* Professional Indemnity  
* Beneficiary / Claims Readiness  
* Family Document Readiness

Do not show irrelevant product categories.

Do not show every product by default.

Use Module 6 ordering and deduplication.

---

# **11\. Recommendation Copy Rules**

Customer-facing recommendation copy must be human and helpful.

Good:

You told us people depend on your income, but no confirmed life cover was found from your answers. A life cover review may help you understand what level of family support may be appropriate.

Bad:

Life cover needs attention.

Good:

You mentioned that some family members may not have health cover. Reviewing family health protection may reduce pressure from hospital bills during emergencies.

Bad:

Health protection partial gap.

Good:

Your business may be part of how your family stays financially stable. Business protection may help reduce avoidable exposure.

Bad:

Business risk detected.

Do not use salesy panic language.

---

# **12\. CTA Hierarchy Requirements**

Use Module 6 CTA mapping.

The page must support:

## **Primary CTAs**

* View Recommended Plans  
* Start My Protection Plan  
* Start Registration  
* Get a Quote  
* Continue to NEM Life

## **Secondary CTAs**

* Send My Report  
* Save My Result  
* Compare Options  
* Learn More

## **Support CTAs**

* Ask a NEM Advisor  
* Call Me Later  
* Explain This to Me  
* Request a Review

But in Module 7:

* do not implement lead capture  
* do not implement report sending  
* do not implement real registration  
* do not implement payment  
* do not implement external purchase

CTA behavior options:

1. Open a safe placeholder modal.  
2. Route to a placeholder page.  
3. Show a disabled/future-module state.  
4. Use demo links marked as demo.

Every CTA must be honest.

Example placeholder:

This action will be connected in a later module. For now, this demo shows where the customer would continue.

Do not silently send users nowhere.

Do not use broken links.

Do not use fake live links.

Do not use “Pay Now.”

---

# **13\. Budget-Aware Preview Requirements**

Show a budget-aware preview using Module 6 budget logic.

Section headline:

See how your monthly protection budget could guide your next steps.

If budget selected, show:

* selected budget range  
* what type of review it may support  
* relevant recommended categories  
* caution that final pricing depends on NEM rules

If budget unknown or guidance selected, show:

That is fine. NEM can help you review what level of protection may fit your budget.

Required disclaimer:

This is not a final premium or policy quote. Final pricing and eligibility depend on NEM’s approved products, underwriting rules, and policy terms.

Do not calculate exact final premiums.

Do not promise that ₦X buys Y policy.

Do not fake NEM pricing.

Do not use exact premium allocation unless clearly illustrative and config-driven.

---

# **14\. Disclaimers Required**

The page must include:

## **Score Disclaimer**

This score is an estimate based on your answers. A verified score would require approved customer records and policy information.

## **Recommendation Disclaimer**

These recommendations are based on your answers and are for guidance only. Final eligibility, pricing, and cover depend on NEM’s approved products, underwriting rules, and policy terms.

## **Demo Disclaimer**

If running in POC/demo mode:

This proof of concept does not connect to live NEM systems or issue policies.

Disclaimers should be visible but not overwhelming.

Do not bury them in tiny unreadable text.

---

# **15\. Review Answers Requirement**

Provide a secondary action:

Review My Answers

This may:

* show a review section  
* route back to completion/review page  
* open a panel/modal

The review must only show:

* customer-facing question labels  
* customer-facing answer labels  
* skipped/not sure indicators  
* section grouping

It must not show:

* scoring tags  
* recommendation tags  
* admin labels  
* internal rule IDs  
* hidden metadata  
* prohibited data

---

# **16\. Start Again Requirement**

Provide:

Start Again

This must:

* clear current demo session  
* return to `/protection-check/start`  
* not leave stale result state  
* not crash if no session exists

If using sessionStorage, clear only the NEM Life+ POC session namespace.

Do not clear unrelated storage.

---

# **17\. Missing Session Behavior**

If the user visits `/protection-check/result` without a completed session:

Show a safe empty state:

Headline:

No completed check was found.

Supporting copy:

Start the Family Protection Check to see an estimated result.

Actions:

* Start Family Protection Check  
* Return Home

Do not crash.

Do not show fake data unless clearly on a demo page.

Do not expose internal errors.

---

# **18\. Invalid Session Behavior**

If session data exists but fails validation:

Show a safe error state:

Headline:

We could not load this result.

Supporting copy:

Please start the check again so your result can be calculated safely.

Actions:

* Start Again  
* Return Home

Do not expose stack traces.

Do not show raw JSON.

Do not continue with unsafe data.

---

# **19\. Result Generation Flow**

The page should follow this safe pipeline:

load completed session  
→ validate/revalidate session  
→ extract validated answers  
→ normalize to ProtectionProfile  
→ run scoring engine  
→ run recommendation engine  
→ map output to customer-safe view model  
→ render result page

Create a customer-safe view model.

Do not pass raw score audit trail directly into customer UI.

Do not pass admin tags directly into customer UI.

Do not expose internal rule IDs.

---

# **20\. Customer Result View Model**

Create a customer-facing result view model.

Fields may include:

* `score`  
* `maxScore`  
* `scoreBandLabel`  
* `scoreExplanation`  
* `confidenceLabel`  
* `areaBreakdown`  
* `keyGaps`  
* `recommendedProducts`  
* `budgetPreview`  
* `primaryCtas`  
* `secondaryCtas`  
* `supportCtas`  
* `disclaimers`  
* `reviewAnswers`  
* `demoMode`

The view model must exclude:

* raw answers  
* admin tags  
* internal rule IDs  
* raw audit trail  
* scoring internals  
* recommendation internals  
* hidden metadata

---

# **21\. Internal Debug Rules**

If you create debug output for demos, keep it only under `/demo`.

Normal customer result page must not show:

* raw JSON  
* internal rule IDs  
* admin tags  
* scoring audit trail  
* recommendation audit trail  
* developer-only metadata

Internal demo page may show debug data if clearly labeled and using mock data.

---

# **22\. UI Requirements**

Use Module 2 components.

Expected components may include:

* `PageShell`  
* `PublicShell`  
* `ScoreRing`  
* `ScoreBandBadge`  
* `ScoreBreakdownCard`  
* `GapExplanationCard`  
* `RecommendationCard`  
* `BudgetAllocationPreview`  
* `CTAGroup`  
* `Callout`  
* `DisclaimerNote`  
* `Button`  
* `Card`  
* `Badge`  
* `ReviewAnswers`  
* `EmptyState`

If components need enhancement, update them carefully and test.

Do not create duplicate components if Module 2 already provides one.

Do not put scoring/recommendation logic inside UI components.

---

# **23\. Visual and Interaction Requirements**

The result page must feel like a guided explanation.

Suggested interaction pattern:

1. Score appears first.  
2. Short explanation appears.  
3. Key gap cards appear.  
4. Recommendations appear.  
5. Budget preview appears.  
6. CTAs appear.

Motion:

* use existing CSS transitions only  
* no animation library  
* no confetti  
* no fear-based flashing  
* no noisy effects  
* respect reduced motion

The score reveal may have a simple count-up only if it can be implemented accessibly without new dependency.

If count-up risks complexity, skip it.

---

# **24\. Accessibility Requirements**

The result page must be accessible.

Required:

* semantic headings  
* score has text equivalent  
* score status not color-only  
* gap severity not color-only  
* recommendation priority not color-only  
* CTAs have clear labels  
* placeholder CTA states are announced clearly  
* disclaimers are readable  
* focus management works for any modal/panel  
* keyboard navigation works  
* review answers is navigable  
* reduced motion respected  
* no tiny unreadable disclaimer text

If a modal is used for placeholder CTA, it must be accessible.

If accessible modal primitives are not available, use an inline callout instead of a modal.

---

# **25\. Privacy Requirements**

Module 7 must not collect new personal data.

Do not add:

* name capture  
* email capture  
* phone capture  
* consent capture  
* BVN/NIN  
* exact address  
* payment details  
* uploaded documents  
* policy numbers  
* salary  
* medical records  
* claim records  
* insurer login details

Module 7 can display customer-safe answer labels from the completed check.

Do not display hidden metadata.

Do not expose admin tags.

Do not expose raw audit trail.

---

# **26\. Security Requirements**

The result page must:

* revalidate session data before scoring  
* reject invalid session data safely  
* avoid unsafe HTML rendering  
* avoid raw error exposure  
* avoid exposing secrets  
* avoid fake live integrations  
* avoid client-side trust of unsafe data  
* avoid passing internal metadata into customer UI  
* keep server/client boundaries intentional

If scoring/recommendations are run client-side for POC, document why and ensure no sensitive config/secrets are exposed.

Preferred future-ready pattern:

* scoring/recommendation domain logic remains pure and can later run server-side

---

# **27\. Performance Requirements**

The result page must be lightweight.

Requirements:

* no heavy chart library  
* no animation library  
* no PDF library  
* no email SDK  
* no AI SDK  
* no payment SDK  
* no repeated expensive calculations  
* no unnecessary network calls  
* avoid rendering large debug data on customer route  
* memoize only if needed  
* keep customer-safe view model small

---

# **28\. Required Files**

Create or update relevant files.

Suggested files:

src/app/protection-check/result/page.tsx  
src/app/demo/customer-result/page.tsx  
src/features/protection-check/components/result-page-shell.tsx  
src/features/protection-check/components/customer-result-header.tsx  
src/features/protection-check/components/customer-score-section.tsx  
src/features/protection-check/components/customer-score-breakdown.tsx  
src/features/protection-check/components/customer-gap-summary.tsx  
src/features/protection-check/components/customer-recommended-plan.tsx  
src/features/protection-check/components/customer-budget-preview.tsx  
src/features/protection-check/components/customer-result-ctas.tsx  
src/features/protection-check/components/customer-result-disclaimers.tsx  
src/features/protection-check/services/customer-result-view-model.ts  
src/features/protection-check/services/result-session-loader.ts  
src/features/protection-check/tests/customer-result-view-model.test.ts  
src/features/protection-check/tests/result-session-loader.test.ts  
src/features/protection-check/tests/customer-result-page.test.tsx  
docs/modules/module-07-customer-result-and-plan.md

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **29\. Testing Requirements**

Testing is mandatory.

## **29.1 View Model Tests**

Test that:

* valid completed session produces customer-safe result view model  
* score is included  
* band is included  
* area breakdown is included  
* key gaps are included  
* recommendations are included  
* budget preview is included  
* disclaimers are included  
* raw audit trail is excluded  
* admin tags are excluded  
* internal rule IDs are excluded  
* raw answers are not exposed directly

## **29.2 Result Page Tests**

Test that:

* missing session shows empty state  
* invalid session shows safe error state  
* completed session shows result  
* score is displayed with text equivalent  
* score band explanation appears  
* key gaps appear  
* recommendations appear  
* budget preview appears  
* disclaimers appear  
* review answers action exists  
* start again action exists  
* no lead capture form appears  
* no email/phone fields appear  
* no payment CTA appears  
* no fake final premium appears

## **29.3 CTA Tests**

Test that:

* primary CTAs render from recommendation output  
* secondary CTAs render from recommendation output  
* support CTAs render from recommendation output  
* placeholder CTA behavior is honest  
* no broken links  
* no “Pay Now”  
* no fake purchase  
* no “book a call only” path  
* no CTA silently does nothing

## **29.4 Copy Safety Tests**

Test that customer-facing result output does not include forbidden phrases:

* “Guaranteed approval”  
* “Final premium”  
* “Your policy is ready”  
* “You are fully protected”  
* “NEM has verified your records”  
* “Buy now or your family is at risk”  
* “You must buy this”  
* “Your family will suffer”  
* “You are unprotected”

## **29.5 Privacy Tests**

Test that result page does not render:

* BVN  
* NIN  
* exact address  
* payment  
* card  
* bank details  
* policy number  
* upload  
* document upload  
* salary  
* medical record  
* claim record  
* insurer login

## **29.6 Accessibility Tests**

Test that:

* score has accessible label/text  
* gap severity has text label  
* recommendation priority has text label  
* CTA buttons are keyboard reachable  
* placeholder modal/callout is accessible  
* headings are logical  
* disclaimers are readable  
* no color-only meaning

## **29.7 Integration Tests**

Test the pipeline:

completed session  
→ scoring engine  
→ recommendation engine  
→ customer-safe view model  
→ result UI

Also test:

* start again clears session  
* review answers shows customer-safe labels  
* result page handles storage/session errors safely

---

# **30\. Documentation Requirements**

Create:

docs/modules/module-07-customer-result-and-plan.md

It must include:

* purpose  
* scope  
* non-goals  
* route map  
* result page structure  
* scoring integration  
* recommendation integration  
* customer-safe view model  
* CTA handling  
* budget preview handling  
* disclaimers  
* privacy boundaries  
* accessibility notes  
* testing requirements  
* acceptance criteria  
* known limitations  
* handoff notes for Module 8 and Module 9

Update `README.md` if needed to mention:

/protection-check/result  
/demo/customer-result

---

# **31\. Acceptance Criteria**

Module 7 is complete only when:

* customer result route exists  
* completed session can produce result  
* scoring engine is integrated  
* recommendation engine is integrated  
* customer-safe view model exists  
* score reveal works  
* score band explanation works  
* score breakdown works  
* gap cards work  
* recommended plan section works  
* budget preview works  
* CTA hierarchy works honestly  
* disclaimers are visible  
* missing session state works  
* invalid session state works  
* review answers action exists  
* start again action works  
* no lead capture is implemented  
* no report generation is implemented  
* no customer dashboard preview is implemented  
* no admin dashboard is implemented  
* no real payment/purchase/registration is implemented  
* no prohibited sensitive data is collected  
* no fake NEM verification is shown  
* no final premium or guaranteed approval is shown  
* no unnecessary dependency is added  
* tests cover result view model  
* tests cover result UI  
* tests cover CTAs  
* tests cover copy safety  
* tests cover privacy  
* tests cover accessibility  
* all required checks pass  
* completion report is produced

---

# **32\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If component/integration tests are separate, run them too.

If Playwright is configured and result page is testable, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **33\. Required Module 7 Completion Report**

After completing Module 7, produce this report:

## **Summary**

Explain what customer result and recommended protection plan experience was created.

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

* `/protection-check/result`  
* `/protection-check/complete`  
* `/demo/customer-result` if created

Explain what each route does.

## **Result Experience Summary**

Summarize:

* score reveal  
* score band  
* score breakdown  
* gap cards  
* recommended plan  
* budget preview  
* CTA hierarchy  
* disclaimers  
* review/start-again actions

## **Architecture Compliance**

Confirm:

* Module 5 scoring engine is used  
* Module 6 recommendation engine is used  
* customer-safe view model exists  
* raw audit trail is not exposed  
* admin tags are not exposed  
* scoring/recommendation logic is not inside UI components  
* domain services remain separated  
* no lead/report/admin logic implemented early  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* session data is revalidated  
* invalid/missing session handled safely  
* no new personal data collected  
* no BVN/NIN/exact address/payment/upload/policy-number fields added  
* no lead capture added  
* no unsafe HTML rendering introduced  
* no secrets added  
* no fake live NEM integration added  
* no final premium claims  
* no guaranteed approval claims

## **UI/UX and Copy Compliance**

Confirm:

* score explained humanly  
* gaps explained calmly  
* recommendations are helpful, not manipulative  
* CTA hierarchy is clear  
* no “book a call only” roadblock  
* no fear-mongering  
* no robotic labels  
* disclaimers visible  
* budget preview is honest  
* demo/future actions are clearly labeled

## **Accessibility Compliance**

Confirm:

* semantic headings used  
* score has text equivalent  
* gap severity has text label  
* recommendation priority has text label  
* CTAs keyboard accessible  
* placeholder modal/callout accessible  
* disclaimers readable  
* no color-only meaning  
* reduced motion respected

## **Coding Standards Compliance**

Confirm:

* strict TypeScript maintained  
* no avoidable `any`  
* view model typed  
* components typed  
* services pure/testable  
* file-size rule followed  
* no giant page component  
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

* view model tests  
* result page tests  
* CTA tests  
* copy safety tests  
* privacy tests  
* accessibility tests  
* integration pipeline tests

## **Performance Review**

Confirm:

* no heavy dependencies added  
* no animation/chart/PDF/email/payment/AI library added  
* result page remains lightweight  
* no unnecessary network calls introduced  
* no debug data rendered on customer route  
* customer-safe view model is small

## **Known Issues / Deferred Items**

At minimum, mention:

* lead capture begins in Module 8  
* report generation begins in Module 9  
* customer dashboard preview begins in Module 10  
* admin dashboard begins in Module 11  
* real registration/purchase/payment is deferred  
* product links are demo placeholders until NEM confirms real URLs  
* final product/pricing rules require NEM validation  
* no live NEM integration yet  
* no CRM integration yet  
* no AI explanation yet

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-07-customer-result-and-plan.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **34\. Final Instruction**

Module 7 must build the customer result and recommended plan experience.

Use the scoring engine.

Use the recommendation engine.

Render the result clearly.

Make the customer understand the score, the gaps, and the next step.

Do not collect leads.

Do not generate reports.

Do not create payment or purchase flows.

Do not fake NEM verification.

Do not show final premiums.

Do not overclaim.

Do not use fear.

Do not add dependencies for convenience.

Build the result experience cleanly, test it properly, and prepare it for Module 8\.

