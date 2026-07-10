# **MODULE 3 PROMPT — Configurable Question Engine, Branching Logic, Validation, and Guided Flow Foundation**

You are building the NEM Life+ Proof of Concept.

This is Module 3\.

Your task is to build the configurable question engine foundation that will power the Family Protection Check.

Do not build the full customer-facing Family Protection Check journey yet.

Do not build the scoring engine yet.

Do not build the recommendation engine yet.

Do not build lead capture yet.

Do not build the result page yet.

Do not build the admin dashboard yet.

This module is about creating the question model, answer model, validation model, branching model, session model, and reusable engine services that later modules will use.

The output of this module should make it possible for future modules to render a guided, conversational, one-question-at-a-time flow without hard-coding questions into UI components.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-03-question-engine.md`  
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

# **1\. Module 3 Objective**

Create a configurable question engine for the NEM Life+ Family Protection Check.

The engine must support:

* question configuration  
* answer option configuration  
* one-question-at-a-time guided flow  
* branching logic  
* answer validation  
* progress calculation  
* session state modeling  
* safe answer normalization  
* privacy/sensitivity tagging  
* scoring tags for later modules  
* recommendation tags for later modules  
* analytics keys for later modules  
* “why we ask” text  
* helper text  
* optional/required questions  
* skip/not-sure options  
* future admin editing  
* future database-backed configuration

The engine must not be tied to a single UI screen.

The engine must not hard-code the Family Protection Check directly into React components.

The engine must be usable by:

* future customer quiz flow  
* future admin question configuration preview  
* future scoring engine  
* future recommendation engine  
* future report engine  
* future analytics/event tracking  
* future A/B testing or campaign-specific question variations

---

# **2\. Module 3 Non-Goals**

Do not implement:

* full customer-facing Family Protection Check route  
* final landing page journey  
* score calculation  
* recommendation generation  
* lead capture  
* email capture  
* report generation  
* PDF generation  
* customer dashboard preview  
* admin lead dashboard  
* database persistence  
* admin question editor  
* real analytics integration  
* real AI question generation  
* payment integration  
* BVN/NIN verification  
* document upload

You may create a simple internal demo page or test harness to preview the question engine, but it must be clearly labeled as an internal engine demo, not the finished product.

---

# **3\. Dependency Policy For Module 3**

Module 3 should not need new runtime dependencies if Module 1 already installed Zod and Module 2 already installed UI utilities.

Default rule:

Do not add new dependencies in Module 3\.

If you believe a dependency is absolutely necessary, stop and document:

* why it is needed  
* why existing tools cannot solve it  
* whether it can be implemented safely in-house  
* maintenance status  
* security status  
* license  
* bundle impact  
* alternatives considered

Then update:

docs/dependency-audit.md

Add a **Module 3 Dependency Audit** section.

Run registry checks before installation.

No form library should be added in Module 3\.

Do not install:

* React Hook Form  
* Formik  
* XState  
* Zustand  
* Redux  
* Jotai  
* date libraries  
* animation libraries  
* chart libraries  
* PDF libraries  
* AI SDKs  
* analytics SDKs

The question engine should be implemented using TypeScript, React state where needed, and existing validation tools.

---

# **4\. UX Doctrine For The Question Engine**

The question engine must support a guided conversation.

The experience should feel like:

NEM is calmly helping the customer understand their protection picture.

The experience must not feel like:

* a bank KYC form  
* a hospital lab result  
* a scary death calculator  
* a generic SaaS wizard  
* a dark-pattern funnel  
* an interrogation  
* a long insurance proposal form

The engine must support:

* one primary question per screen  
* helper text  
* “why we ask” explanation  
* optional “not sure” answers  
* branching  
* skip logic  
* progress indicator  
* back navigation  
* safe answer editing  
* mobile-first flow  
* accessibility-friendly field structures

Sensitive or trust-heavy questions must come later.

The first questions must be easy and low-risk.

The engine must support progressive disclosure.

---

# **5\. Question Order Doctrine**

The default Family Protection Check should follow this order unless later modules revise it:

1. Soft personalization  
2. Protection intent  
3. Financial dependents  
4. Location  
5. Existing life cover  
6. Monthly protection comfort  
7. Health protection  
8. Property and business protection  
9. Professional/business risk  
10. Beneficiary readiness  
11. Document readiness  
12. Existing insurance elsewhere

The engine must support this order through configuration, not hard-coded component sequencing.

---

# **6\. Question Model Requirements**

Create a strongly typed `Question` model.

A question must support:

* `id`  
* `version`  
* `section`  
* `title`  
* `shortTitle`  
* `description`  
* `helperText`  
* `whyWeAsk`  
* `type`  
* `required`  
* `options`  
* `validation`  
* `branching`  
* `scoringTags`  
* `recommendationTags`  
* `privacyLevel`  
* `sensitivity`  
* `analyticsKey`  
* `adminLabel`  
* `customerLabel`  
* `displayOrder`  
* `isActive`  
* `dependsOn`  
* `metadata`

Question types must support at minimum:

* single choice  
* multi choice  
* text  
* email  
* phone  
* number  
* range select  
* select/dropdown  
* location select  
* grouped choice  
* confirmation/consent style question

Do not implement actual consent capture in this module unless needed for schema modeling only.

Consent and lead capture belong to Module 8\.

---

# **7\. Question Option Model Requirements**

Create a strongly typed `QuestionOption` model.

Each option must support:

* `id`  
* `label`  
* `shortLabel`  
* `description`  
* `value`  
* `tags`  
* `scoringTags`  
* `recommendationTags`  
* `riskTags`  
* `followUpQuestionIds`  
* `displayOrder`  
* `isActive`  
* `adminLabel`  
* `metadata`

Option labels must be customer-facing and human.

Admin labels may be more operational.

Example:

Customer label:

Yes, through my employer

Admin label:

GROUP\_LIFE\_DECLARED

---

# **8\. Answer Model Requirements**

Create a strongly typed `Answer` model.

An answer must support:

* `questionId`  
* `value`  
* `selectedOptionIds`  
* `textValue`  
* `normalizedValue`  
* `answeredAt`  
* `skipped`  
* `notSure`  
* `source`  
* `validationStatus`  
* `metadata`

Raw user input must not be treated as trusted domain data.

Answer flow:

raw answer  
→ schema validation  
→ normalized answer  
→ session update  
→ downstream profile/scoring/recommendation later

---

# **9\. Session Model Requirements**

Create a strongly typed `ProtectionCheckSession` model.

It must support:

* `id`  
* `status`  
* `startedAt`  
* `updatedAt`  
* `completedAt`  
* `currentQuestionId`  
* `visitedQuestionIds`  
* `answers`  
* `sourceChannel`  
* `scenarioId`  
* `metadata`

Statuses:

* `not_started`  
* `in_progress`  
* `completed`  
* `abandoned`

The session model must support future persistence but should not require database persistence in Module 3\.

For Module 3, in-memory/client-side/demo state is acceptable if documented.

---

# **10\. Privacy and Sensitivity Model**

Every question must have a privacy/sensitivity classification.

Use a clear model such as:

* `low`  
* `moderate`  
* `high`  
* `prohibited_in_poc`

Rules:

* BVN must be prohibited in POC.  
* NIN must be prohibited in POC.  
* exact address must be prohibited in POC.  
* payment details must be prohibited in POC.  
* uploaded documents must be prohibited in POC.  
* exact external policy number must be prohibited in POC.  
* exact salary must be prohibited in POC.  
* insurance category/range answers may be allowed.  
* state/city/LGA may be allowed.  
* budget ranges may be allowed.  
* family/dependent ranges may be allowed.

The engine must make it possible to reject or flag prohibited questions.

Add tests proving prohibited POC question types are rejected by config validation.

---

# **11\. Branching Logic Requirements**

Create a branching model that supports:

* show question if answer equals value  
* show question if answer includes option  
* show question if answer does not equal value  
* show question if any condition matches  
* show question if all conditions match  
* skip question if condition matches  
* follow-up question IDs from selected options  
* default next question  
* terminal/end state

Branching must be deterministic.

Branching must be testable.

Branching must not create infinite loops.

The engine must detect obvious circular branching.

If a circular branch exists, config validation must fail.

Example:

If user selects:

Yes, I run a business

Then future flow may show business-specific follow-up.

But Module 3 should only support the mechanism.

Full business flow may come later.

---

# **12\. Validation Requirements**

Use runtime validation.

TypeScript types are not enough.

Create schemas for:

* question config  
* option config  
* answer payload  
* session state  
* branching rules  
* question list config  
* privacy level  
* question type  
* option value  
* source channel  
* analytics key where useful

Validation must catch:

* missing question IDs  
* duplicate question IDs  
* duplicate option IDs within a question  
* invalid question type  
* invalid required field shape  
* invalid branching references  
* branch references to unknown question IDs  
* circular branching  
* prohibited privacy level for POC  
* empty customer-facing labels  
* missing “why we ask” text for moderate/high-sensitivity questions  
* missing “not sure” option where required by question policy  
* overlong labels/helpers  
* invalid display order

Do not allow invalid config to silently pass.

---

# **13\. Config File Requirements**

Create the main question configuration in a centralized location.

Suggested path:

src/features/protection-check/config/questions.ts

Also create supporting config/types as needed.

The default Family Protection Check config should include the core question catalog from the PRD, but it should not yet power the final customer flow.

At minimum, define config for:

1. Soft personalization  
2. Protection intent  
3. Financial dependents  
4. Location  
5. Existing life cover  
6. Monthly protection comfort  
7. Health protection  
8. Property and business protection  
9. Professional/business risk  
10. Beneficiary readiness  
11. Document readiness  
12. Existing insurance elsewhere

Each question must include:

* customer-facing title  
* helper text where useful  
* why-we-ask text where useful  
* answer type  
* options where applicable  
* privacy level  
* scoring tags  
* recommendation tags  
* display order  
* analytics key

Do not put config inside React components.

---

# **14\. Required Question Catalog**

Create the initial config with these questions.

## **Q1: Soft Personalization**

ID:

soft\_personalization

Question:

What should we call you?

Input:

* first name

Helper text:

We will use this to personalize your result.

Rules:

* optional  
* low sensitivity  
* skippable  
* no scoring impact

---

## **Q2: Protection Intent**

ID:

protection\_intent

Question:

Who are you mainly trying to protect?

Options:

* My spouse  
* My children  
* My parents  
* My business  
* Myself  
* I am not sure yet

Why we ask:

This helps us understand what kind of protection matters most to you.

Tags:

* family\_intent  
* dependency\_signal  
* protection\_goal

---

## **Q3: Financial Dependents**

ID:

financial\_dependents

Question:

Do people currently depend on your income or support?

Options:

* Yes  
* No  
* Sometimes  
* I am not sure

Why we ask:

This helps estimate how important life cover, health protection, and emergency planning may be for your family.

Follow-up mechanism:

Must support later follow-up to dependent count.

---

## **Q4: Dependent Count**

ID:

dependent\_count

Question:

How many people depend on you financially?

Options:

* 0  
* 1  
* 2–3  
* 4–5  
* More than 5

Display condition:

Show when financial dependents answer is yes, sometimes, or not sure.

---

## **Q5: Location**

ID:

location

Question:

Where do you currently live or operate from?

Fields:

* state  
* city/LGA

Why we ask:

Location can affect the type of protection that may be relevant, especially for health access, property, business, flooding, and travel-related risks.

Rules:

* do not ask exact address  
* moderate sensitivity  
* state and city/LGA only

---

## **Q6: Location Risk Context**

ID:

location\_risk\_context

Question:

Do you live, work, or own property in an area affected by any of these?

Options:

* Flooding  
* Fire risk  
* Theft or burglary concerns  
* Business disruption  
* I am not sure  
* None of these

Rules:

* multi-choice allowed  
* no exact address  
* no crime accusation language  
* wording must remain sensitive and non-stigmatizing

---

## **Q7: Existing Life Cover**

ID:

existing\_life\_cover

Question:

Do you currently have life insurance?

Options:

* Yes, with NEM  
* Yes, with another insurer  
* Yes, through my employer  
* No  
* I am not sure

Why we ask:

This helps estimate whether your family may already have some financial protection.

---

## **Q8: Life Cover Range**

ID:

life\_cover\_range

Question:

About how much cover do you have?

Options:

* Less than ₦1m  
* ₦1m–₦5m  
* ₦5m–₦10m  
* ₦10m–₦25m  
* Above ₦25m  
* I am not sure  
* I prefer not to say

Display condition:

Show if existing life cover is yes with NEM, yes with another insurer, or yes through employer.

Rules:

* ranges only  
* no policy number  
* no document upload

---

## **Q9: Monthly Protection Comfort**

ID:

monthly\_protection\_comfort

Question:

How much can you comfortably set aside monthly for family protection?

Options:

* Below ₦5,000  
* ₦5,000–₦10,000  
* ₦10,000–₦25,000  
* ₦25,000–₦50,000  
* Above ₦50,000  
* I need guidance

Helper text:

This is not a payment request. It only helps estimate what kind of plan may fit your budget.

Rules:

* budget ranges only  
* no exact salary  
* no payment request

---

## **Q10: Health Protection**

ID:

health\_protection

Question:

Does your family currently have health cover?

Options:

* Yes, everyone is covered  
* Only I am covered  
* Some family members are covered  
* No  
* I am not sure

Why we ask:

Health protection can reduce the pressure of hospital bills during emergencies.

---

## **Q11: Health Cover Gaps**

ID:

health\_cover\_gaps

Question:

Who may still need cover?

Options:

* Spouse  
* Children  
* Parents  
* Domestic staff  
* Business employees  
* No one for now

Display condition:

Show when health protection is not “Yes, everyone is covered.”

Rules:

* multi-choice allowed

---

## **Q12: Property and Business Needs**

ID:

property\_business\_needs

Question:

Which of these do you currently need to protect?

Options:

* Car  
* Home  
* Business/shop/office  
* Equipment  
* Goods/stock  
* Travel  
* Valuable items  
* None for now

Rules:

* multi-choice allowed

---

## **Q13: Existing Property and Business Insurance**

ID:

existing\_property\_business\_insurance

Question:

Which of these already have insurance?

Options:

* Car  
* Home  
* Business/shop/office  
* Equipment  
* Goods/stock  
* Travel  
* Valuable items  
* None  
* I am not sure

Display condition:

Show if customer selected any property/business need except none.

Rules:

* multi-choice allowed

---

## **Q14: Professional / Business Risk**

ID:

professional\_business\_risk

Question:

Do people or clients depend on your professional service, advice, or business operations?

Options:

* Yes, I run a business  
* Yes, I provide professional services  
* Yes, I employ staff  
* No  
* I am not sure

Why we ask:

This helps identify whether business protection, professional indemnity, or staff-related protection may be relevant.

Rules:

* no legal advice  
* no final product eligibility claims

---

## **Q15: Beneficiary Readiness**

ID:

beneficiary\_readiness

Question:

If something happens, are your beneficiaries or next of kin up to date?

Options:

* Yes  
* No  
* I am not sure  
* I have never set this up

Helper text:

You do not need to enter beneficiary details here. This only helps check your readiness.

Rules:

* do not collect beneficiary details in POC v1

---

## **Q16: Document Readiness**

ID:

document\_readiness

Question:

Do you know where your important family documents are kept?

Options:

* Yes, organized  
* Some are organized  
* Not really  
* I need help with this

Helper text:

No upload is needed for this check.

Rules:

* no document upload  
* no document numbers  
* no document images

---

## **Q17: External Insurance Elsewhere**

ID:

external\_insurance\_elsewhere

Question:

Do you currently have insurance with another company?

Options:

* Yes  
* No  
* I am not sure  
* I prefer not to say

Rules:

* do not ask for insurer login  
* do not ask for policy number  
* do not ask for documents

---

## **Q18: External Insurance Categories**

ID:

external\_insurance\_categories

Question:

Which type of cover do you already have elsewhere?

Options:

* Life  
* Health  
* Motor  
* Home  
* Fire  
* Business  
* Travel  
* Professional indemnity  
* Other  
* I prefer not to say

Display condition:

Show if external insurance elsewhere is yes.

Rules:

* categories only  
* no exact policy number  
* no uploaded documents

---

# **15\. Engine Services Required**

Create domain services that are pure and testable.

Suggested files:

src/features/protection-check/services/question-engine.ts  
src/features/protection-check/services/question-navigation.ts  
src/features/protection-check/services/answer-normalization.ts  
src/features/protection-check/services/question-config-validation.ts  
src/features/protection-check/services/progress-calculation.ts

The names may vary, but responsibilities must be separated.

## **15.1 Question Engine**

Must support:

* get active questions  
* get question by ID  
* validate question config  
* validate answer  
* normalize answer  
* update session  
* determine next question  
* determine previous question  
* compute progress  
* determine whether session is complete

## **15.2 Navigation Service**

Must support:

* next question lookup  
* previous question lookup  
* branching evaluation  
* skip logic  
* visited history  
* terminal state detection  
* circular branch detection

## **15.3 Answer Normalization**

Must convert raw answers into safe normalized answers.

Examples:

* trim text  
* normalize phone-like strings only when applicable later  
* normalize option IDs  
* remove unknown option IDs  
* enforce max length  
* preserve “not sure”  
* preserve skipped status

Do not collect phone/email in this module unless only modeling future question types.

Lead capture belongs to Module 8\.

## **15.4 Progress Calculation**

Progress must account for branching.

Do not assume all questions are always shown.

At minimum, support:

* current step number  
* estimated total visible steps  
* percent complete  
* current section label  
* completed question count

Progress must not be misleading if branch changes visible questions.

---

# **16\. Renderer Adapter Requirements**

Create a lightweight adapter that maps a `Question` config into props expected by Module 2 UI components.

Suggested path:

src/features/protection-check/services/question-render-adapter.ts

Purpose:

* convert question config into display props  
* keep UI components dumb  
* keep domain config separate  
* prevent React components from understanding all question engine internals

This adapter must not include score logic or recommendation logic.

---

# **17\. Internal Demo Page Requirement**

Create an internal demo page:

src/app/demo/question-engine/page.tsx

Purpose:

* show the question engine using Module 2 components  
* allow stepping through configured questions  
* show current answer state  
* show progress  
* show next/previous behavior  
* show validation error examples  
* show branch behavior

Rules:

* this page is internal demo only  
* do not present it as finished Family Protection Check  
* do not include lead capture  
* do not include scoring  
* do not include recommendations  
* do not include report generation  
* clearly label it:

Question Engine Demo — Not Final Customer Flow

This demo page may use client components for interactivity, but domain logic must stay in services.

---

# **18\. Required File Structure**

Create or update files under:

src/features/protection-check/  
  config/  
  schemas/  
  services/  
  types/  
  tests/  
src/app/demo/question-engine/  
docs/modules/module-03-question-engine.md

Suggested files:

src/features/protection-check/config/questions.ts  
src/features/protection-check/config/question-sections.ts  
src/features/protection-check/schemas/question.schema.ts  
src/features/protection-check/schemas/answer.schema.ts  
src/features/protection-check/schemas/session.schema.ts  
src/features/protection-check/schemas/branching.schema.ts  
src/features/protection-check/types/question.types.ts  
src/features/protection-check/types/answer.types.ts  
src/features/protection-check/types/session.types.ts  
src/features/protection-check/services/question-engine.ts  
src/features/protection-check/services/question-navigation.ts  
src/features/protection-check/services/answer-normalization.ts  
src/features/protection-check/services/question-config-validation.ts  
src/features/protection-check/services/progress-calculation.ts  
src/features/protection-check/services/question-render-adapter.ts  
src/features/protection-check/tests/question-config.test.ts  
src/features/protection-check/tests/question-navigation.test.ts  
src/features/protection-check/tests/answer-validation.test.ts  
src/features/protection-check/tests/progress-calculation.test.ts  
src/app/demo/question-engine/page.tsx  
docs/modules/module-03-question-engine.md

File names may vary, but responsibilities must remain clear.

No source file should exceed 250 lines unless strongly justified.

---

# **19\. Data Safety Requirements**

The engine must prevent prohibited POC data collection.

Add safeguards so a question config that tries to collect prohibited fields fails validation.

Prohibited in POC v1:

* BVN  
* NIN  
* exact address  
* uploaded certificates  
* uploaded ID documents  
* payment card details  
* bank details  
* exact salary  
* exact claim records  
* insurer login credentials  
* exact external policy numbers  
* uploaded policy documents

Allowed in POC v1:

* first name  
* state  
* city/LGA  
* family/dependent ranges  
* insurance category answers  
* budget ranges  
* self-declared protection status  
* beneficiary readiness status  
* document readiness status without uploads  
* preferred broad protection goals

Lead contact fields are allowed later in Module 8, not in Module 3\.

---

# **20\. Copy and Content Rules**

Question copy must be:

* human  
* calm  
* direct  
* clear  
* Nigerian-market aware  
* not fear-based  
* not over-technical  
* not manipulative  
* not childish

Avoid:

If you die, will your family suffer?

Prefer:

If life changes unexpectedly, would your family have enough support?

Avoid:

Enter your salary.

Prefer:

How much can you comfortably set aside monthly for family protection?

Avoid:

Upload your documents.

Prefer:

Do you know where your important family documents are kept?

The question engine must make it easy to update copy later.

Do not scatter copy across components.

---

# **21\. Accessibility Requirements**

The engine and demo must support accessible UI behavior.

The demo page must:

* use Module 2 accessible components  
* provide labels  
* show validation errors clearly  
* support keyboard interaction  
* show progress in text  
* not rely only on color  
* support back navigation  
* avoid trapping focus  
* respect reduced-motion preferences through existing CSS

Question config must support accessible labels and descriptions.

---

# **22\. Analytics Preparation**

Do not integrate real analytics in Module 3\.

But question config must include analytics keys.

The engine should make it possible to emit future events such as:

* question viewed  
* question answered  
* question skipped  
* validation error shown  
* branch followed  
* session completed

Do not send events in Module 3 unless there is already a local analytics abstraction from earlier modules.

---

# **23\. Error Handling Requirements**

Question engine functions must return safe, typed results.

Avoid throwing random strings.

Use clear result patterns where appropriate.

Possible result states:

* success  
* validation\_error  
* config\_error  
* branch\_error  
* not\_found  
* completed

Demo page must show safe user-facing errors.

Do not expose stack traces.

---

# **24\. Testing Requirements**

Testing is mandatory.

## **24.1 Config Validation Tests**

Test that:

* valid config passes  
* duplicate question IDs fail  
* duplicate option IDs fail  
* missing title fails  
* missing option label fails  
* invalid question type fails  
* invalid branch target fails  
* circular branching fails  
* prohibited POC data question fails  
* moderate/high sensitivity question without “why we ask” fails  
* overlong labels/helper text fail if limits are implemented

## **24.2 Navigation Tests**

Test that:

* first question resolves correctly  
* next question resolves correctly  
* previous question resolves correctly  
* branch condition shows correct follow-up  
* skipped question is not shown  
* terminal state is reached correctly  
* visited history is preserved  
* changing an earlier answer can invalidate later branch answers if implemented

## **24.3 Answer Validation Tests**

Test that:

* valid single choice passes  
* invalid option ID fails  
* valid multi choice passes  
* empty required answer fails  
* optional skipped answer passes  
* overlong text fails  
* unknown fields are rejected or stripped intentionally  
* raw answer is normalized safely

## **24.4 Progress Tests**

Test that:

* progress starts at correct value  
* progress updates after answer  
* progress accounts for branch visibility  
* progress reaches completion  
* section labels are correct

## **24.5 Demo Page Tests**

If component/integration testing is available, test that:

* demo page renders  
* first question appears  
* selecting an option advances or enables next  
* back navigation works  
* validation error appears when required answer is missing  
* progress text updates

Do not create brittle tests that depend on internal implementation details.

---

# **25\. Documentation Requirements**

Create:

docs/modules/module-03-question-engine.md

It must include:

* purpose  
* scope  
* non-goals  
* architecture decisions  
* question model  
* option model  
* answer model  
* session model  
* branching model  
* privacy/sensitivity model  
* validation rules  
* default question catalog  
* demo page instructions  
* testing requirements  
* acceptance criteria  
* known limitations  
* handoff notes for Module 4

Also update `README.md` if needed to mention the new demo route:

/demo/question-engine

---

# **26\. Acceptance Criteria**

Module 3 is complete only when:

* question model exists  
* option model exists  
* answer model exists  
* session model exists  
* branching model exists  
* validation schemas exist  
* default question catalog exists  
* config validation exists  
* prohibited POC data safeguards exist  
* branching/navigation service exists  
* answer normalization exists  
* progress calculation exists  
* render adapter exists  
* internal question engine demo page exists  
* tests exist for config validation  
* tests exist for navigation  
* tests exist for answer validation  
* tests exist for progress calculation  
* no score calculation is implemented  
* no recommendation generation is implemented  
* no lead capture is implemented  
* no real contact collection is implemented  
* no prohibited sensitive data is collected  
* no unnecessary dependency is added  
* all required checks pass  
* completion report is produced

---

# **27\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If component tests are separate, run them too.

If Playwright is configured and the demo page can be tested, run:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **28\. Required Module 3 Completion Report**

After completing Module 3, produce this report:

## **Summary**

Explain what question engine foundation was created.

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

## **Architecture Compliance**

Confirm:

* question engine is separate from UI  
* config is centralized  
* domain logic is outside React components  
* renderer adapter keeps UI dumb  
* branching is deterministic  
* no scoring/recommendation/lead logic was implemented early  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* prohibited POC data collection is blocked  
* no BVN/NIN/exact address/payment/upload fields were added  
* answer validation exists  
* config validation exists  
* raw input is normalized before domain use  
* no unsafe HTML rendering introduced  
* no secrets added  
* no fake live NEM integration added

## **UI/UX and Copy Compliance**

Confirm:

* one-question-at-a-time pattern supported  
* guided conversation style supported  
* “why we ask” supported  
* “not sure” and skip behavior supported where appropriate  
* sensitive questions are delayed/configurable  
* customer copy is human and calm  
* no fear-mongering introduced  
* no robotic result language introduced

## **Accessibility Compliance**

Confirm:

* demo page uses accessible components  
* progress has text equivalent  
* question labels and descriptions are supported  
* keyboard interaction considered  
* validation errors are visible and understandable  
* no color-only meaning introduced

## **Coding Standards Compliance**

Confirm:

* strict TypeScript maintained  
* no avoidable `any`  
* domain types are explicit  
* schemas are used for runtime validation  
* file-size rule followed  
* no giant utilities introduced  
* no business logic buried in UI components  
* no unnecessary abstraction added

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

* config validation tests  
* navigation tests  
* answer validation tests  
* progress tests  
* demo page tests if added

## **Performance Review**

Confirm:

* no heavy dependencies added  
* no animation/chart/form/state library added  
* engine functions are lightweight  
* no unnecessary network calls introduced  
* demo page does not bloat production customer routes

## **Known Issues / Deferred Items**

At minimum, mention:

* full customer Family Protection Check flow begins in Module 4  
* scoring engine begins in Module 5  
* recommendation engine begins in Module 6  
* lead capture begins in Module 8  
* report generation begins in Module 9  
* admin question editor is deferred  
* persistence/database is deferred  
* analytics integration is deferred

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-03-question-engine.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **29\. Final Instruction**

Module 3 must create the configurable question engine foundation.

Do not build the full customer journey.

Do not build scoring.

Do not build recommendations.

Do not collect leads.

Do not collect prohibited sensitive data.

Do not hard-code questions inside React components.

Do not add a form/state machine library unless there is an exceptional documented reason.

Build the engine cleanly, test it properly, and make it ready for Module 4\.

