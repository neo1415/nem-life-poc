# **MODULE 15 PROMPT — Testing, QA, E2E Coverage, Performance Review, Accessibility Review, and Final Quality Gates**

You are building the NEM Life+ Proof of Concept.

This is Module 15\.

Your task is to perform the full QA and final quality gate pass across the entire NEM Life+ POC.

This module must verify that everything built from Module 0 through Module 14 works together reliably.

This is not a feature module.

This is not a redesign module.

This is not a scope-expansion module.

This module must focus on:

* test coverage  
* end-to-end journeys  
* route stability  
* error states  
* accessibility  
* performance  
* build quality  
* dependency quality  
* demo stability  
* mobile responsiveness  
* security/privacy regression  
* copy safety regression  
* customer journey QA  
* admin journey QA  
* configuration journey QA  
* report/print QA  
* dashboard QA  
* demo scenario QA  
* final acceptance checklist

The goal is simple:

Make sure the POC is ready to be shown, reviewed, handed over, and improved without embarrassing surprises.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-15-testing-qa-final-quality-gates.md`  
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
* test inventory plan  
* QA matrix plan  
* E2E coverage plan  
* route smoke test plan  
* accessibility review plan  
* performance review plan  
* mobile/responsive review plan  
* security/privacy regression plan  
* demo stability plan  
* final quality gate plan  
* dependency plan  
* expected verification commands

After implementation, you must re-read all the documents above and audit your work against them.

If you find violations, fix them before reporting completion.

Do not claim PASS if any required check was skipped, failed, or was not applicable without explanation.

---

# **1\. Module 15 Objective**

Perform the final testing and QA pass across the NEM Life+ POC.

This module must:

* review existing tests  
* identify missing critical coverage  
* add missing unit tests  
* add missing integration tests  
* add missing component tests  
* add E2E tests if tooling exists  
* add route smoke tests  
* add error-state tests  
* add copy safety tests  
* add privacy regression tests  
* add accessibility regression tests where practical  
* add demo journey tests  
* validate all major flows manually or with automated checks  
* document test coverage  
* document known gaps  
* document final quality gates  
* ensure verification scripts are meaningful  
* ensure final build is stable  
* ensure the POC can be demoed repeatedly

This module should leave the project in a state where a reviewer can run one command or a small set of commands and understand the current quality status.

---

# **2\. Module 15 Non-Goals**

Do not implement:

* new product features  
* new customer flows  
* new admin features  
* new configuration capabilities  
* real authentication  
* real RBAC  
* real database persistence  
* real CRM integration  
* real email/SMS/WhatsApp sending  
* real payment  
* real policy purchase  
* real underwriting  
* real claims workflow  
* real document upload  
* real NEM integration  
* AI adviser  
* analytics integration  
* production monitoring  
* production incident response  
* major UI redesign  
* major architectural rewrite

Only fix issues needed for quality, stability, safety, accessibility, performance, or testability.

Do not refactor large parts of the app just because they could be prettier.

---

# **3\. Dependency Policy For Module 15**

Default rule:

Do not add new dependencies in Module 15\.

Use the existing test stack.

Do not install:

* new test frameworks  
* new E2E frameworks  
* new accessibility testing libraries  
* new performance testing libraries  
* new visual regression services  
* dashboard libraries  
* chart libraries  
* analytics SDKs  
* auth libraries  
* database libraries  
* AI SDKs  
* browser automation tools unless already configured

If Playwright or another E2E tool already exists, use it.

If no E2E tool exists, do not install one without explicit justification. Instead:

* document the missing E2E tooling  
* add route/component/integration tests with existing tools  
* create a manual E2E checklist  
* mark E2E automation as deferred

If a dependency is absolutely necessary, stop and document:

* why existing tools cannot solve the QA need  
* why this dependency is needed now  
* exact package and version  
* license  
* repository  
* maintenance status  
* known vulnerabilities  
* install/postinstall scripts  
* transitive dependency risk  
* runtime/bundle impact  
* alternatives considered  
* final decision

Then update:

docs/dependency-audit.md

Add a **Module 15 Dependency Audit** section.

If no dependencies are added, document that clearly.

---

# **4\. Full Test Inventory**

Create a complete test inventory.

Suggested file:

docs/qa/test-inventory.md

For each test file, document:

* path  
* test type  
* module covered  
* feature covered  
* what it verifies  
* whether it is unit/integration/component/E2E/security/privacy/accessibility  
* current status  
* gaps

Include tests for:

* Module 1 foundation  
* Module 2 design system  
* Module 3 question engine  
* Module 4 customer flow  
* Module 5 scoring engine  
* Module 6 recommendation engine  
* Module 7 result page  
* Module 8 lead capture  
* Module 9 report preview  
* Module 10 dashboard preview  
* Module 11 admin dashboard  
* Module 12 config preview  
* Module 13 demo scenarios  
* Module 14 security/privacy hardening

If a module has no meaningful tests, add them or document why and create a manual QA item.

---

# **5\. QA Matrix Requirement**

Create a QA matrix.

Suggested file:

docs/qa/qa-matrix.md

The matrix must include:

* feature area  
* route/page  
* unit tests  
* integration tests  
* component tests  
* E2E tests  
* accessibility review  
* mobile review  
* security/privacy review  
* performance review  
* manual QA status  
* known gaps  
* final status

Feature areas:

* public landing and NEM entry  
* Family Protection Check  
* question engine  
* scoring engine  
* recommendation engine  
* result page  
* lead capture and consent  
* report preview and print/save  
* email simulation  
* customer dashboard preview  
* admin lead dashboard  
* admin lead detail  
* admin export simulation  
* admin config preview  
* demo scenarios  
* executive demo mode  
* reset demo data  
* security/privacy guardrails  
* error states  
* storage/reset behavior

Statuses:

* PASS  
* PASS WITH NOTES  
* FAIL  
* NOT TESTED  
* DEFERRED

Do not mark PASS if not actually tested.

---

# **6\. Route Smoke Test Requirement**

Create or update route smoke tests.

Every major route must be tested for:

* renders without crashing  
* safe missing-context state  
* safe invalid-context state where applicable  
* demo/admin warning where applicable  
* no forbidden copy  
* no prohibited data fields

Routes to cover include:

/   
/demo/nem-entry  
/protection-check/start  
/protection-check/complete  
/protection-check/result  
/protection-check/lead  
/protection-check/lead/confirm  
/protection-check/report  
/protection-check/report/preview  
/protection-check/report/email-preview  
/protection-check/report/confirm  
/protection-check/dashboard-preview  
/dashboard-preview  
/admin  
/admin/leads  
/admin/leads/\[leadId\]  
/admin/leads/export  
/admin/config  
/admin/config/questions  
/admin/config/scoring  
/admin/config/recommendations  
/admin/config/products  
/admin/config/ctas  
/admin/config/preview  
/admin/config/export  
/demo  
/demo/executive  
/demo/scenarios  
/demo/scenarios/\[scenarioId\]  
/demo/scenarios/compare  
/demo/reset  
/demo/admin  
/demo/config  
/demo/reports  
/demo/customer-dashboard  
/demo/customer-result  
/demo/recommendations  
/demo/scoring

If some routes do not exist in the actual app, update the route list based on the real route inventory and document the difference.

---

# **7\. Critical E2E Journey Coverage**

If E2E tooling exists, add E2E tests for these flows.

If E2E tooling does not exist, create a manual checklist and document E2E automation as deferred.

## **7.1 Happy Path Customer Journey**

Flow:

1. Visit NEM entry page.  
2. Start Family Protection Check.  
3. Answer check questions.  
4. Complete check.  
5. View result.  
6. See score.  
7. See recommendations.  
8. Click lead CTA.  
9. Submit lead with consent.  
10. View confirmation.  
11. View report preview.  
12. Print/save button visible.  
13. View dashboard preview.

Expected:

* no crash  
* no blocked navigation  
* no fake payment  
* no fake email sent claim  
* no prohibited fields  
* disclaimers visible

## **7.2 Missing Session Journey**

Flow:

1. Visit result page without session.  
2. Visit report preview without session.  
3. Visit dashboard preview without session.  
4. Visit lead page without result context.

Expected:

* safe empty/error states  
* start-check CTA available  
* no fake data  
* no stack traces

## **7.3 Lead Consent Journey**

Flow:

1. Visit result page.  
2. Click Ask Advisor.  
3. Submit lead form without consent.  
4. See consent error.  
5. Accept consent.  
6. Submit valid lead.  
7. View confirmation.

Expected:

* consent unchecked by default  
* consent required  
* no hidden consent  
* no fake advisor assignment

## **7.4 Admin Demo Journey**

Flow:

1. Visit admin overview.  
2. See demo admin warning.  
3. Visit lead list.  
4. Filter leads.  
5. Search leads.  
6. Open lead detail.  
7. Change demo status.  
8. Add demo follow-up note.  
9. View export simulation.

Expected:

* admin warning visible  
* no production CRM claim  
* contact masked by default  
* export safe  
* no fake staff assignment

## **7.5 Config Demo Journey**

Flow:

1. Visit config overview.  
2. See config demo warning.  
3. Edit scoring weight to invalid total.  
4. See validation error.  
5. Try unsafe copy.  
6. See copy safety warning.  
7. Reset to default.  
8. Preview valid config.  
9. Export demo config.

Expected:

* no live publishing claim  
* unsafe config blocked  
* no arbitrary code execution  
* no prohibited data config accepted

## **7.6 Executive Demo Journey**

Flow:

1. Visit executive demo.  
2. Select business owner persona.  
3. Jump to result.  
4. View report.  
5. View dashboard.  
6. View admin lead.  
7. Reset demo data.

Expected:

* fictional data labels visible  
* outputs generated from scenario  
* reset works  
* no live integration claim

---

# **8\. Unit Test Coverage Targets**

Review and strengthen unit tests for:

## **Question Engine**

* validation  
* branching  
* progress calculation  
* skipped/unknown answers  
* unsafe answer payloads

## **Scoring Engine**

* profile normalization  
* area scoring  
* score bands  
* gap detection  
* confidence  
* audit trail  
* invalid input

## **Recommendation Engine**

* product mapping  
* CTA selection  
* lead priority  
* budget-aware logic  
* deduplication  
* unsafe copy avoidance

## **Lead Capture**

* validation  
* consent  
* CTA intent  
* lead context builder  
* lead store  
* duplicate submission  
* prohibited fields

## **Report**

* report builder  
* report view model  
* email preview  
* masking  
* CTA links  
* print disclaimers

## **Dashboard**

* five-engine mapper  
* monthly guidance  
* timeline  
* dashboard view model  
* future verified placeholders

## **Admin**

* admin lead loader  
* filters/search  
* metrics  
* status workflow  
* export simulation  
* follow-up notes

## **Config**

* config validation  
* copy safety  
* question edits  
* scoring edits  
* CTA edits  
* export/import  
* unsafe config rejection

## **Demo**

* scenario validation  
* output builder  
* seed/reset  
* metrics  
* route builder  
* comparison

## **Security/Privacy**

* prohibited data regression  
* copy safety regression  
* storage namespace  
* export safety  
* view model safety  
* error states

---

# **9\. Component Test Coverage Targets**

Add or improve component tests for:

* public entry cards  
* check flow shell  
* question renderer  
* progress indicator  
* result score section  
* gap cards  
* recommendation cards  
* lead capture form  
* consent checkbox  
* report preview sections  
* print/save button  
* dashboard five-engine cards  
* timeline  
* admin lead list  
* admin lead detail  
* admin filters  
* config validation panel  
* scenario selector  
* demo reset panel  
* empty/error states

Tests should verify:

* content renders  
* required labels exist  
* actions are available  
* disabled/loading states work  
* error messages appear  
* no prohibited fields render  
* accessibility basics are present

---

# **10\. Error State QA**

Every major route must have safe error/empty states.

Test:

* missing session  
* invalid session  
* invalid lead ID  
* invalid report context  
* invalid dashboard context  
* invalid scenario ID  
* invalid config draft  
* storage unavailable  
* malformed JSON import  
* invalid CTA intent  
* invalid source channel  
* unsupported status transition  
* missing demo data

Expected behavior:

* no crash  
* no stack trace  
* no raw JSON on normal pages  
* clear user-facing message  
* safe action to recover  
* no fake data

Create:

docs/qa/error-state-qa.md

---

# **11\. Accessibility Review**

Create an accessibility review.

Suggested file:

docs/qa/accessibility-review.md

Review:

* semantic headings  
* form labels  
* error text associations  
* keyboard navigation  
* focus states  
* color-only meaning  
* score text equivalents  
* badge/status text  
* timeline text labels  
* modal/callout accessibility  
* print/save button accessibility  
* config editor accessibility  
* admin table/list accessibility  
* demo persona card accessibility  
* mobile touch targets  
* reduced motion

Add tests where practical.

Manual checks must be documented.

Do not claim WCAG compliance unless properly audited.

Use:

* “accessibility review completed”  
* “basic accessibility checks passed”  
* “known limitations documented”

Do not use:

* “fully WCAG compliant”

unless a formal audit was done.

---

# **12\. Performance Review**

Create a performance review.

Suggested file:

docs/qa/performance-review.md

Review:

* Next.js build output  
* route bundle sizes if available  
* unnecessary client components  
* unnecessary dependencies  
* heavy imports  
* repeated scoring/recommendation computation  
* large raw JSON rendering  
* route loading behavior  
* report rendering  
* admin list filtering  
* config preview validation  
* demo scenario output generation

Run:

pnpm build

Use build output to document:

* routes generated  
* routes with large bundles if any  
* warnings  
* performance concerns  
* fixes applied  
* deferred performance items

Do not add bundle analyzer dependency unless already present.

Performance fixes should be practical:

* move logic out of Client Components  
* avoid rendering debug JSON by default  
* reduce unnecessary props  
* lazy-load demo/debug sections if already supported  
* avoid recalculating expensive outputs unnecessarily

---

# **13\. Mobile and Responsive QA**

Create:

docs/qa/responsive-review.md

Review key screens on mobile/tablet/desktop layouts:

* landing  
* check flow  
* result  
* lead capture  
* report preview  
* dashboard preview  
* admin lead list  
* admin lead detail  
* config editor  
* executive demo  
* scenario selector

Check:

* no horizontal overflow  
* readable spacing  
* buttons tap-friendly  
* forms usable  
* cards stack correctly  
* admin tables degrade to cards if needed  
* report remains readable  
* print button not awkward  
* config editor not impossible on small screens

Document issues fixed or deferred.

---

# **14\. Print and Report QA**

Create:

docs/qa/report-print-qa.md

Review:

* report preview sections  
* print/save button  
* print CSS  
* disclaimers in print  
* links visible/useful in print  
* no navigation clutter in print  
* no hidden critical content  
* email preview simulation  
* no fake sent claim  
* masked contacts  
* no prohibited data

If automated print testing is not practical, document manual QA steps.

---

# **15\. Demo Stability QA**

Create:

docs/qa/demo-stability-qa.md

Test and document:

* demo home loads  
* executive demo loads  
* each persona loads  
* scenario detail works  
* comparison works  
* jump to result works  
* report preview works  
* dashboard preview works  
* admin lead view works  
* config preview works  
* reset works  
* demo data remains fictional  
* demo labels visible  
* no live integration claims

The demo should be repeatable.

If reset fails or is confusing, fix it.

---

# **16\. Security and Privacy Regression QA**

Use Module 14 outputs.

Create or update:

docs/qa/security-privacy-regression.md

Verify:

* prohibited data tests pass  
* copy safety tests pass  
* admin/demo boundary tests pass  
* export safety tests pass  
* config safety tests pass  
* view model safety tests pass  
* storage namespace tests pass  
* security headers tests pass if applicable  
* consent tests pass  
* route inventory tests pass

Do not weaken Module 14 safeguards.

---

# **17\. Copy and Content QA**

Create:

docs/qa/copy-content-qa.md

Review copy across:

* landing  
* check flow  
* result  
* lead capture  
* report  
* dashboard  
* admin  
* config  
* demo  
* errors  
* empty states  
* disclaimers

Check for:

* robotic labels  
* fear-mongering  
* fake certainty  
* fake live integration  
* unclear CTA labels  
* missing demo labels  
* missing disclaimers  
* confusing “future” wording  
* “book a call only” dead end  
* overclaiming  
* sales pressure before value

Fix copy issues.

---

# **18\. Final Verification Script Review**

Review package scripts.

Ensure `pnpm verify` or equivalent runs meaningful checks.

Suggested minimum:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit

If E2E exists, decide whether it belongs in default verify or separate verify:e2e.

Do not create fake scripts that echo success.

Do not silence errors.

Do not use `|| true`.

Do not bypass lint/type errors.

Document:

docs/qa/verification-commands.md

Include:

* command  
* purpose  
* expected result  
* whether required for final PASS  
* what to do if it fails

---

# **19\. Final Quality Gate Checklist**

Create:

docs/qa/final-quality-gate.md

Checklist must include:

## **Build Quality**

* typecheck passes  
* lint passes  
* format check passes  
* unit tests pass  
* build passes  
* audit reviewed  
* verify passes

## **Customer Journey**

* landing works  
* check flow works  
* result works  
* recommendations work  
* lead capture works  
* report works  
* dashboard preview works

## **Admin Journey**

* admin overview works  
* lead list works  
* lead detail works  
* filters/search work  
* status workflow works  
* export simulation works

## **Config Journey**

* config overview works  
* question config works  
* scoring config works  
* recommendation config works  
* product mapping works  
* CTA config works  
* validation works  
* preview/export works

## **Demo Journey**

* executive demo works  
* personas work  
* comparison works  
* reset works  
* mock data labels visible

## **Security/Privacy**

* no prohibited data  
* no fake integration claims  
* consent works  
* admin/demo warnings visible  
* exports safe  
* reports safe  
* config safe

## **Accessibility**

* keyboard basics work  
* forms labeled  
* statuses text-labeled  
* errors readable  
* no color-only meaning

## **Performance**

* build output reviewed  
* no heavy debug output  
* no obvious route bloat  
* no unnecessary dependencies

Statuses:

* PASS  
* PASS WITH NOTES  
* FAIL  
* DEFERRED

Do not mark PASS unless actually verified.

---

# **20\. Required QA Documentation**

Create or update:

docs/modules/module-15-testing-qa-final-quality-gates.md  
docs/qa/README.md  
docs/qa/test-inventory.md  
docs/qa/qa-matrix.md  
docs/qa/error-state-qa.md  
docs/qa/accessibility-review.md  
docs/qa/performance-review.md  
docs/qa/responsive-review.md  
docs/qa/report-print-qa.md  
docs/qa/demo-stability-qa.md  
docs/qa/security-privacy-regression.md  
docs/qa/copy-content-qa.md  
docs/qa/verification-commands.md  
docs/qa/final-quality-gate.md

Documentation must be honest.

Do not claim full coverage if coverage is partial.

Do not claim formal accessibility compliance if only basic checks were performed.

Do not claim production readiness.

---

# **21\. Required Code Areas To Review**

Review:

src/app/  
src/components/  
src/features/protection-check/  
src/features/scoring/  
src/features/recommendations/  
src/features/leads/  
src/features/reports/  
src/features/customer-dashboard/  
src/features/admin/  
src/features/config-admin/  
src/features/demo-scenarios/  
src/features/security/  
src/lib/  
src/test/  
package.json  
README.md  
docs/

Only change code when needed to fix:

* test failures  
* broken routes  
* unsafe behavior  
* accessibility problems  
* performance problems  
* privacy/security regressions  
* demo instability  
* documentation mismatch

Avoid broad refactors.

---

# **22\. Required Test Files**

Create or update relevant tests.

Suggested files:

src/features/qa/tests/route-smoke.test.tsx  
src/features/qa/tests/customer-journey.integration.test.tsx  
src/features/qa/tests/admin-journey.integration.test.tsx  
src/features/qa/tests/config-journey.integration.test.tsx  
src/features/qa/tests/demo-journey.integration.test.tsx  
src/features/qa/tests/error-states.test.tsx  
src/features/qa/tests/accessibility-basics.test.tsx  
src/features/qa/tests/copy-content-regression.test.ts  
src/features/qa/tests/performance-guardrails.test.ts  
src/features/qa/tests/final-quality-gate.test.ts

If E2E tooling exists, create:

e2e/customer-happy-path.spec.ts  
e2e/missing-session.spec.ts  
e2e/lead-consent.spec.ts  
e2e/admin-demo.spec.ts  
e2e/config-demo.spec.ts  
e2e/executive-demo.spec.ts

If E2E tooling does not exist, do not create fake E2E tests.

Create manual E2E checklist instead.

---

# **23\. Manual QA Checklist**

Create:

docs/qa/manual-e2e-checklist.md

Checklist must cover:

## **Customer Happy Path**

* entry  
* check  
* result  
* lead  
* report  
* dashboard

## **Customer Error Path**

* missing session  
* invalid context  
* unsupported CTA  
* missing consent

## **Admin Path**

* overview  
* leads  
* filters  
* detail  
* status  
* notes  
* export

## **Config Path**

* invalid scoring  
* unsafe copy  
* unsafe CTA  
* reset  
* preview  
* export

## **Demo Path**

* executive demo  
* each persona  
* comparison  
* reset

## **Cross-Cutting**

* mobile  
* keyboard  
* disclaimers  
* demo labels  
* privacy warnings  
* no fake claims

Each checklist item should allow:

* PASS  
* PASS WITH NOTES  
* FAIL  
* NOT RUN

---

# **24\. Accessibility Basic Test Expectations**

Automated tests should check:

* key forms have labels  
* buttons have names  
* links have names  
* headings exist  
* status badges include text  
* score has text equivalent  
* validation errors render  
* consent checkbox is accessible  
* admin filters are labeled  
* config editor fields are labeled

Manual QA should check:

* keyboard navigation  
* focus visibility  
* reduced motion  
* mobile touch targets  
* contrast concerns  
* screen reader obviousness where practical

Do not overclaim.

---

# **25\. Performance Guardrail Expectations**

Tests or manual review should check:

* no debug JSON rendered by default on customer routes  
* no massive fixture object rendered in page  
* no unnecessary client component wrappers  
* no new heavy dependencies  
* no obvious repeated recalculation in render loops  
* admin filtering works for demo data without lag  
* config preview works for demo data without lag  
* report page loads without heavy libraries

Document any deferred performance work.

---

# **26\. Final Demo Acceptance Flow**

At the end of Module 15, the following demo should work:

1. Open `/demo/executive`.  
2. Select Business Owner persona.  
3. Start or jump to result.  
4. See estimated score and recommendations.  
5. Submit lead with consent or view seeded lead.  
6. View report preview.  
7. View customer dashboard preview.  
8. View admin lead detail.  
9. View admin metrics.  
10. View config preview.  
11. Reset demo data.  
12. Repeat without broken state.

This should be the primary executive demo confidence check.

---

# **27\. Known Gaps Policy**

If something cannot be fixed in Module 15, document it clearly.

Do not hide it.

Use:

* issue  
* impact  
* affected route/module  
* current workaround  
* recommended future fix  
* priority

Create or update:

docs/qa/known-quality-gaps.md

Gaps that must be documented if present:

* no E2E automation  
* no formal accessibility audit  
* no real production auth/RBAC  
* no production database  
* no live integration tests  
* no formal performance budget  
* no visual regression testing  
* no production monitoring  
* no browser matrix testing  
* no formal legal/compliance review

---

# **28\. Acceptance Criteria**

Module 15 is complete only when:

* test inventory exists  
* QA matrix exists  
* route smoke tests exist  
* critical unit tests reviewed/filled  
* critical component tests reviewed/filled  
* E2E tests added if tooling exists  
* manual E2E checklist created if E2E tooling does not exist  
* customer journey tested  
* lead consent journey tested  
* report journey tested  
* dashboard journey tested  
* admin journey tested  
* config journey tested  
* executive demo journey tested  
* missing/invalid context states tested  
* accessibility review completed  
* responsive review completed  
* performance review completed  
* report/print QA completed  
* demo stability QA completed  
* security/privacy regression QA completed  
* copy/content QA completed  
* verification command documentation exists  
* final quality gate checklist exists  
* known quality gaps documented  
* no fake PASS statuses used  
* all required verification commands run  
* all required checks pass or failures are fixed/documented honestly  
* completion report produced

---

# **29\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If E2E exists:

pnpm test:e2e

If additional scripts exist, run them:

pnpm test  
pnpm test:component  
pnpm test:integration  
pnpm verify:security  
pnpm verify:qa

Only run scripts that exist or add meaningful scripts.

Do not create fake scripts.

If any command fails, fix it.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **30\. Required Module 15 Completion Report**

After completing Module 15, produce this report:

## **Summary**

Explain what testing, QA, accessibility, performance, and quality gate work was completed.

## **Files Created**

List every created file.

## **Files Modified**

List every modified file and why.

## **Dependency Audit**

State:

* whether new dependencies were added  
* if yes, list audit details  
* if no, confirm no new dependencies were needed  
* whether test tooling already existed  
* whether E2E tooling existed  
* whether E2E automation was added or deferred  
* `pnpm audit` result

## **Test Inventory Summary**

Summarize:

* total test areas reviewed  
* unit tests added/updated  
* integration tests added/updated  
* component tests added/updated  
* E2E tests added or deferred  
* manual QA checklist created  
* modules with strongest coverage  
* modules with remaining gaps

## **QA Matrix Summary**

Summarize status for:

* customer journey  
* lead capture  
* report  
* dashboard  
* admin  
* config  
* demo  
* security/privacy  
* accessibility  
* performance  
* error states

## **Customer Journey QA**

Confirm:

* entry works  
* check works  
* result works  
* recommendations work  
* lead capture works  
* consent works  
* report works  
* dashboard preview works  
* missing/invalid states work

## **Admin Journey QA**

Confirm:

* admin warning visible  
* lead list works  
* filters/search work  
* lead detail works  
* status workflow works  
* notes simulation works  
* export simulation works  
* no fake CRM/auth/staff assignment claim

## **Config Journey QA**

Confirm:

* config warning visible  
* question editor works  
* scoring validation works  
* recommendation/product/CTA validation works  
* unsafe copy blocked  
* preview works  
* export simulation works  
* no live publish claim

## **Demo Journey QA**

Confirm:

* executive demo works  
* scenarios work  
* comparison works  
* reset works  
* demo labels visible  
* no real data or fake integration claims

## **Accessibility Review**

Summarize:

* automated checks added  
* manual checks performed  
* issues fixed  
* remaining accessibility gaps  
* do not claim full WCAG compliance unless formally audited

## **Performance Review**

Summarize:

* build output reviewed  
* route/bundle concerns  
* client component concerns  
* heavy dependency concerns  
* fixes applied  
* deferred performance work

## **Security and Privacy Regression**

Confirm:

* prohibited data tests pass  
* copy safety tests pass  
* view model safety tests pass  
* export safety tests pass  
* config safety tests pass  
* storage namespace tests pass  
* admin/demo boundary tests pass  
* consent tests pass

## **Verification Results**

List commands run and results:

* `pnpm typecheck`  
* `pnpm lint`  
* `pnpm format:check`  
* `pnpm test:unit`  
* `pnpm build`  
* `pnpm audit`  
* `pnpm verify`  
* `pnpm test:e2e` if run  
* any additional test scripts

For each skipped command, explain why.

## **Known Quality Gaps**

List remaining gaps with:

* impact  
* priority  
* workaround  
* recommended future fix

## **Architecture Compliance**

Confirm:

* no new product features added  
* no broad unnecessary refactor  
* QA logic is separated from product logic where needed  
* tests are meaningful  
* scripts do not fake success  
* docs reflect actual status  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* no prohibited data introduced  
* no fake production security claims  
* no fake live integration claims  
* no fake payment/policy/claims/email/CRM claims  
* no secrets added  
* no unsafe HTML introduced  
* Module 14 guardrails preserved

## **Final Quality Gate**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is only allowed if all required checks pass and no critical unresolved gaps remain.

PASS WITH NOTES is appropriate if checks pass but non-critical gaps are documented.

FAIL is required if critical checks fail, required commands fail, or the demo is unstable.

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-15-testing-qa-final-quality-gates.md`  
* all relevant `docs/steering/` files

---

# **31\. Final Instruction**

Module 15 must test and stabilize the POC.

Do not build new features.

Do not expand scope.

Do not fake quality.

Do not create fake passing scripts.

Do not hide failures.

Do not claim full accessibility, security, or production readiness unless actually proven.

Make the POC stable, test-covered, demo-ready, and honest.

Run the checks.

Fix what fails.

Document what remains.

Prepare the project for Module 16\.

