# **MODULE 6 PROMPT — Recommendation Engine, Product Mapping, CTA Mapping, Admin Tags, and Lead Priority Logic**

You are building the NEM Life+ Proof of Concept.

This is Module 6\.

Your task is to build the deterministic recommendation engine for the NEM Life+ POC.

The recommendation engine must take the validated answers, normalized protection profile, score breakdown, and detected gaps from earlier modules, then generate customer-facing recommendations, product category mappings, CTA mappings, admin opportunity tags, and lead-priority signals.

Do not build the final customer result page yet.

Do not build lead capture yet.

Do not build report generation yet.

Do not build the customer dashboard preview yet.

Do not build the admin dashboard yet.

This module creates the recommendation domain layer that later modules will use.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-06-recommendation-engine.md`  
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
* recommendation model plan  
* product mapping plan  
* CTA mapping plan  
* lead priority plan  
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

# **1\. Module 6 Objective**

Create the NEM Life+ recommendation engine.

The engine must:

* consume validated answers from Module 3  
* consume normalized protection profile from Module 5  
* consume score breakdown from Module 5  
* consume detected gaps from Module 5  
* map gaps to product categories  
* map profile signals to product opportunities  
* generate customer-facing recommendations  
* generate CTA mappings  
* generate admin opportunity tags  
* generate lead-priority signals  
* produce recommendation reasoning  
* remain deterministic  
* remain config-driven  
* remain testable  
* avoid fake final premiums  
* avoid fake approval claims  
* avoid live NEM integration claims  
* avoid regulated advice  
* avoid AI-generated uncontrolled recommendations

The output of this module should make it possible for Module 7 to render:

* recommended protection plan  
* product category cards  
* CTA hierarchy  
* budget-aware suggestions  
* support CTA  
* safe disclaimers

Module 6 must not build Module 7’s result UI yet.

---

# **2\. Module 6 Non-Goals**

Do not implement:

* final result page  
* recommended plan page UI  
* lead capture  
* email capture  
* phone capture  
* consent capture  
* report generation  
* PDF generation  
* customer dashboard preview  
* admin dashboard  
* admin lead persistence  
* real product purchase  
* real registration form  
* real payment  
* real pricing engine  
* real underwriting  
* real policy issuance  
* real claims guidance workflow  
* real CRM integration  
* real NEM core system integration  
* real NEM Health integration  
* real NEM Asset integration  
* real VaultLyne integration  
* AI adviser  
* final premium calculation

You may create an internal recommendation demo page using mock answer sets and score outputs.

The demo page must be clearly labeled as internal/demo only.

---

# **3\. Dependency Policy For Module 6**

Module 6 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 6\.

Use existing TypeScript, Zod, and testing infrastructure.

Do not install:

* rules-engine libraries  
* AI SDKs  
* analytics SDKs  
* chart libraries  
* PDF libraries  
* state management libraries  
* form libraries  
* database libraries  
* auth libraries  
* payment libraries  
* CRM SDKs  
* pricing libraries

The recommendation engine must be plain TypeScript domain logic.

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

Add a **Module 6 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Recommendation Philosophy**

The recommendation engine must help the customer understand the next sensible action.

It must not manipulate.

It must not overpromise.

It must not pretend the customer has been approved.

It must not pretend NEM records have been checked.

It must not present final premiums.

It must not force the user into “book a call” as the only path.

It must convert score gaps into practical next steps.

The engine should support this customer journey:

You answered these questions.  
Your score suggests these gaps.  
These gaps relate to these protection areas.  
Here are the next steps you may review with NEM.

The business journey is:

This customer has these gaps.  
These gaps map to these product opportunities.  
This is the likely follow-up priority.  
This is the right CTA path.  
This is what NEM staff should understand later.

---

# **5\. Required Disclaimer Doctrine**

Every recommendation output must support disclaimers.

Required generic recommendation disclaimer:

These recommendations are based on your answers and are for guidance only. Final eligibility, pricing, and cover depend on NEM’s approved products, underwriting rules, and policy terms.

Use this whenever recommendations are shown to customers.

Never output language implying:

* product approval is guaranteed  
* premium is final  
* customer has purchased anything  
* customer is fully protected  
* NEM has verified real records  
* claims will definitely be paid  
* NEM has already issued a policy

Forbidden customer-facing phrases:

* “Guaranteed approval”  
* “Final premium”  
* “Your policy is ready”  
* “You are fully protected”  
* “NEM has verified your records”  
* “This will be paid”  
* “Buy now or your family is at risk”  
* “You must buy this”

---

# **6\. Product Category Model**

Create a product category model.

The recommendation engine must support these product categories at minimum:

## **Life Cover**

Used for:

* dependents  
* no life cover  
* unclear life cover  
* employer group life only  
* low life cover range  
* spouse/children/parents protection intent

Possible customer language:

Life cover may help provide financial support for your family if something happens to you.

## **NEM Health**

Used for:

* no health cover  
* partial family health cover  
* children/spouse/parents without cover  
* business employees without health cover

Possible customer language:

Health protection can reduce the pressure of hospital bills during unexpected illness or emergencies.

## **NEM Asset / Wealth Planning**

Used for:

* emergency/wealth planning gap  
* monthly protection comfort  
* family future planning  
* education/savings context

Possible customer language:

Protection can also include savings, emergency planning, and preparing for future family needs.

Do not give investment advice.

## **Motor / General Insurance**

Used for:

* car selected  
* existing motor cover unclear  
* renewal opportunity  
* external motor cover elsewhere

Possible customer language:

Motor cover helps protect against losses connected to your vehicle, subject to policy terms.

## **Home / Fire / Burglary**

Used for:

* home selected  
* fire risk selected  
* theft/burglary concern selected  
* location risk context selected  
* home not insured

Possible customer language:

Home, fire, or burglary protection may help reduce exposure to losses affecting your home or property.

Do not make factual claims about the user’s location.

## **Business Protection**

Used for:

* business/shop/office selected  
* equipment selected  
* goods/stock selected  
* business disruption selected  
* business owner selected

Possible customer language:

Your business may be part of how your family stays financially stable. Protecting it can also be part of protecting your family.

## **Professional Indemnity**

Used for:

* professional services selected  
* clients depend on advice/service

Possible customer language:

If people rely on your professional advice or service, professional indemnity may help protect you from certain claims related to your work.

Do not give legal advice.

## **Beneficiary / Claims Readiness**

Used for:

* beneficiary not updated  
* beneficiary unclear  
* never set up  
* document readiness weak

Possible customer language:

Reviewing beneficiary and next-of-kin information can reduce confusion if a claim ever needs to be made.

Do not collect beneficiary details in this module.

## **Family Document Readiness**

Used for:

* documents not organized  
* needs help  
* partial readiness

Possible customer language:

Important documents are easier to manage before an emergency. You can start with a checklist before any upload or verification is needed.

Do not request upload in this module.

---

# **7\. CTA Model**

Create a CTA model.

Recommendations must support multiple CTA levels.

## **Primary CTA Types**

Use when customer appears ready to act:

* `view_options`  
* `start_registration`  
* `get_quote`  
* `continue_to_nem_life`  
* `start_protection_plan`

Customer labels:

* View Recommended Plans  
* Start Registration  
* Get a Quote  
* Continue to NEM Life  
* Start My Protection Plan

## **Secondary CTA Types**

Use when customer may need more review:

* `send_report`  
* `save_result`  
* `compare_options`  
* `learn_more`

Customer labels:

* Send My Report  
* Save My Result  
* Compare Options  
* Learn More

## **Support CTA Types**

Use when confidence is low or customer needs guidance:

* `ask_advisor`  
* `call_me_later`  
* `explain_this`  
* `request_review`

Customer labels:

* Ask a NEM Advisor  
* Call Me Later  
* Explain This to Me  
* Request a Review

## **CTA Rules**

Do not make “book a call” the only path.

Do not include “Pay Now” in Module 6\.

Do not include real purchase CTAs that imply actual payment.

Do not include real external links unless they are configured as placeholder/demo links.

Do not hard-code product URLs in recommendation functions.

Product links must come from config.

---

# **8\. Recommended Product Model**

Create a strongly typed `RecommendedProduct` model.

Fields should include:

* `id`  
* `category`  
* `title`  
* `shortDescription`  
* `customerExplanation`  
* `reason`  
* `relatedGapIds`  
* `relatedScoreAreaIds`  
* `priority`  
* `cta`  
* `secondaryCtas`  
* `supportCtas`  
* `adminTags`  
* `disclaimer`  
* `productLink`  
* `isDemoLink`  
* `metadata`

Priority values:

* `low`  
* `medium`  
* `high`  
* `urgent_review`

Use `urgent_review` carefully.

Do not use fear-based language.

---

# **9\. Recommendation Model**

Create a strongly typed `RecommendationResult` model.

Fields should include:

* `id`  
* `profileSummary`  
* `recommendedProducts`  
* `primaryRecommendationIds`  
* `supportingRecommendationIds`  
* `ctaGroups`  
* `adminOpportunityTags`  
* `leadPriority`  
* `reasoningSummary`  
* `customerSummary`  
* `disclaimer`  
* `auditTrail`

The result must include enough data for:

* Module 7 customer recommended plan page  
* Module 8 lead capture  
* Module 9 report  
* Module 10 customer dashboard  
* Module 11 admin dashboard

---

# **10\. Admin Opportunity Tags**

Create admin tags that are safe and useful.

Examples:

* `LIFE_COVER_OPPORTUNITY`  
* `HEALTH_CROSS_SELL`  
* `FAMILY_HEALTH_GAP`  
* `BUSINESS_PROTECTION_OPPORTUNITY`  
* `PROFESSIONAL_INDEMNITY_OPPORTUNITY`  
* `PROPERTY_PROTECTION_OPPORTUNITY`  
* `BENEFICIARY_READINESS_GAP`  
* `DOCUMENT_READINESS_GAP`  
* `BUDGET_GUIDANCE_NEEDED`  
* `HIGH_VALUE_LEAD`  
* `BUDGET_SENSITIVE_LEAD`  
* `EXISTING_NEM_CUSTOMER_SIGNAL`  
* `EXTERNAL_INSURANCE_SIGNAL`  
* `EMPLOYER_GROUP_LIFE_SIGNAL`

Admin tags must not be shown directly to customers unless mapped to human copy.

---

# **11\. Lead Priority Logic**

Create lead priority logic.

Lead priority output should be available for future modules, but Module 6 must not create leads.

Priority values:

* `low`  
* `medium`  
* `high`  
* `very_high`

Factors that increase priority:

* dependents \+ no life cover  
* spouse/children \+ no life cover  
* business owner \+ no business protection  
* professional service \+ no professional indemnity  
* no health cover for family/dependents  
* high monthly protection comfort  
* multiple high/moderate gaps  
* property/business exposure  
* beneficiary readiness gap  
* existing NEM signal  
* ready-to-act CTA signal

Factors that reduce or moderate priority:

* many unknown answers  
* low budget and no clear intent  
* no dependents and no business/property exposure  
* user selected “prefer not to say” across many key questions

Lead priority must be deterministic.

Lead priority must include reasoning.

Do not call it “sales score” in customer-facing output.

---

# **12\. Budget-Aware Recommendation Logic**

The recommendation engine must consider monthly protection comfort.

Budget ranges from question engine:

* Below ₦5,000  
* ₦5,000–₦10,000  
* ₦10,000–₦25,000  
* ₦25,000–₦50,000  
* Above ₦50,000  
* I need guidance

Rules:

## **Below ₦5,000**

Tone:

* starter  
* guidance  
* do not overwhelm

Possible output:

You can still start with a simple protection review. NEM can help you understand what may fit your budget.

CTA tendency:

* learn more  
* ask advisor  
* request review

## **₦5,000–₦10,000**

Tone:

* starter protection  
* basic review

Possible output:

Your selected range may support a starting protection conversation, depending on approved product options.

CTA tendency:

* view options  
* get quote

## **₦10,000–₦25,000**

Tone:

* practical family protection

Possible output:

Your selected range may support a starting family protection plan, depending on approved product options.

CTA tendency:

* view recommended plans  
* start registration  
* get quote

## **₦25,000–₦50,000**

Tone:

* stronger protection review

Possible output:

Your selected range may allow a wider review across life, health, and property protection.

CTA tendency:

* view recommended plans  
* start protection plan  
* request review

## **Above ₦50,000**

Tone:

* full family protection review

Possible output:

Your selected budget may support a wider family protection review across life, health, savings, and property protection, subject to NEM’s approved products and rules.

CTA tendency:

* start registration  
* request review  
* get quote

## **I Need Guidance**

Tone:

* supportive

Possible output:

That is fine. The next step can be a simple review to understand what level of protection may fit your budget.

CTA tendency:

* explain this  
* ask advisor  
* send report

Do not promise exact products for exact budgets.

Do not calculate final premiums.

---

# **13\. Rule Configuration Requirements**

Create centralized recommendation config.

Suggested files:

src/features/recommendations/config/product-categories.ts  
src/features/recommendations/config/recommendation-rules.ts  
src/features/recommendations/config/cta-rules.ts  
src/features/recommendations/config/lead-priority-rules.ts  
src/features/recommendations/config/recommendation-copy.ts

Config must support:

* product categories  
* product links  
* product copy  
* gap-to-product mappings  
* score-area-to-product mappings  
* profile-signal-to-product mappings  
* CTA selection  
* budget handling  
* lead priority logic  
* admin opportunity tags  
* recommendation disclaimers

For POC v1, config can be TypeScript.

It must be structured so it can later move into admin/database config.

Do not scatter recommendation rules across UI components.

---

# **14\. Required Services**

Create pure, testable services.

Suggested files:

src/features/recommendations/services/product-mapper.ts  
src/features/recommendations/services/cta-selector.ts  
src/features/recommendations/services/lead-priority-calculator.ts  
src/features/recommendations/services/recommendation-reasoning.ts  
src/features/recommendations/services/recommendation-orchestrator.ts

Responsibilities:

## **Product Mapper**

Maps gaps/profile/score areas to product categories.

Must not generate UI.

## **CTA Selector**

Selects CTA hierarchy based on:

* recommendation type  
* budget range  
* confidence  
* lead priority  
* readiness signal

Must not hard-code product URLs.

## **Lead Priority Calculator**

Calculates lead priority for future admin/lead modules.

Must include reasoning.

Must not create or save leads.

## **Recommendation Reasoning**

Generates calm explanations.

Must not fear-monger.

Must not overpromise.

## **Recommendation Orchestrator**

Calls all services and returns `RecommendationResult`.

Must remain deterministic.

---

# **15\. Required Schemas and Types**

Create schemas and types.

Suggested files:

src/features/recommendations/types/recommendation.types.ts  
src/features/recommendations/schemas/recommendation.schema.ts  
src/features/recommendations/schemas/product-category.schema.ts  
src/features/recommendations/schemas/recommendation-config.schema.ts

Use runtime validation where appropriate.

Avoid `any`.

Use discriminated unions where useful.

---

# **16\. Required Recommendation Rules**

Implement deterministic rules for these scenarios.

## **Rule 1: Dependents \+ No Life Cover**

Input signals:

* dependents exist  
* no confirmed life cover

Output:

* product category: Life Cover  
* priority: high  
* admin tag: `LIFE_COVER_OPPORTUNITY`  
* possible secondary: Beneficiary / Claims Readiness

Customer explanation:

Because people depend on your income, life cover may help provide financial support if something happens to you.

---

## **Rule 2: Employer Group Life Only**

Input signals:

* life cover through employer  
* dependents exist

Output:

* product category: Life Cover  
* priority: medium/high  
* admin tag: `EMPLOYER_GROUP_LIFE_SIGNAL`

Customer explanation:

Life cover through work may be useful, but it may not cover every family need or continue if your employment changes.

---

## **Rule 3: Low or Unclear Life Cover**

Input signals:

* life cover exists  
* range is low or unknown  
* dependents exist

Output:

* product category: Life Cover  
* priority: medium/high  
* admin tag: `LIFE_COVER_REVIEW`

Customer explanation:

Your answers suggest it may be useful to review whether your current cover is enough for your family’s needs.

---

## **Rule 4: Family Health Gap**

Input signals:

* no health cover  
* partial health cover  
* spouse/children/parents uncovered

Output:

* product category: NEM Health  
* priority: medium/high  
* admin tag: `HEALTH_CROSS_SELL`

Customer explanation:

You mentioned that some family members may not have health cover. This could create out-of-pocket pressure during emergencies.

---

## **Rule 5: Children Health Gap**

Input signals:

* children selected as dependents/protection intent  
* children may not have health cover

Output:

* product category: NEM Health  
* priority: high  
* admin tag: `FAMILY_HEALTH_GAP`

Customer explanation:

Children can need medical care without warning. Reviewing health protection for them may reduce pressure during emergencies.

---

## **Rule 6: Business Owner Without Business Protection**

Input signals:

* runs business  
* business/shop/office/equipment/goods selected  
* no matching business protection declared

Output:

* product category: Business Protection  
* priority: high  
* admin tag: `BUSINESS_PROTECTION_OPPORTUNITY`

Customer explanation:

Your business may be part of how your family stays financially stable. Protecting it can also be part of protecting your family.

---

## **Rule 7: Professional Service Risk**

Input signals:

* provides professional services  
* clients depend on advice/service

Output:

* product category: Professional Indemnity  
* priority: medium/high  
* admin tag: `PROFESSIONAL_INDEMNITY_OPPORTUNITY`

Customer explanation:

If people rely on your professional advice or service, professional indemnity may help protect you from certain claims related to your work.

Do not give legal advice.

---

## **Rule 8: Home / Fire / Burglary Context**

Input signals:

* home selected  
* fire risk selected  
* theft/burglary concern selected  
* location risk context selected  
* home/property protection unclear

Output:

* product category: Home / Fire / Burglary  
* priority: medium  
* admin tag: `PROPERTY_PROTECTION_OPPORTUNITY`

Customer explanation:

Home, fire, or burglary protection may help reduce exposure to losses affecting your home or property.

Do not say the user lives in a dangerous place.

---

## **Rule 9: Motor / General Insurance Signal**

Input signals:

* car selected  
* car not declared as insured  
* external motor insurance signal

Output:

* product category: Motor / General Insurance  
* priority: medium  
* admin tag: `MOTOR_OR_GENERAL_OPPORTUNITY`

Customer explanation:

Motor cover helps protect against losses connected to your vehicle, subject to policy terms.

---

## **Rule 10: Beneficiary Readiness Gap**

Input signals:

* beneficiary not updated  
* beneficiary unknown  
* beneficiary never set up

Output:

* product category: Beneficiary / Claims Readiness  
* priority: medium/high  
* admin tag: `BENEFICIARY_READINESS_GAP`

Customer explanation:

Reviewing beneficiary and next-of-kin information can reduce confusion if a claim ever needs to be made.

Do not request beneficiary details.

---

## **Rule 11: Document Readiness Gap**

Input signals:

* documents not organized  
* needs help  
* partial readiness

Output:

* product category: Family Document Readiness  
* priority: medium  
* admin tag: `DOCUMENT_READINESS_GAP`

Customer explanation:

Important documents are easier to manage before an emergency. You can start with a checklist before any upload or verification is needed.

Do not request uploads.

---

## **Rule 12: Emergency / Wealth Planning Gap**

Input signals:

* dependents  
* budget selected  
* emergency/wealth score area low  
* document readiness weak  
* protection intent includes children/parents/spouse

Output:

* product category: NEM Asset / Wealth Planning  
* priority: low/medium  
* admin tag: `WEALTH_PLANNING_REVIEW`

Customer explanation:

Protection can also include savings, emergency planning, and preparing for future family needs.

Do not give investment advice.

---

## **Rule 13: Low Budget Guidance**

Input signals:

* budget below ₦5,000  
* multiple gaps

Output:

* support CTA  
* priority may remain medium if protection need is strong  
* admin tag: `BUDGET_SENSITIVE_LEAD`

Customer explanation:

You can still start with a simple protection review. NEM can help you understand what may fit your budget.

---

## **Rule 14: High Budget / High-Value Review**

Input signals:

* budget above ₦50,000  
* multiple protection needs  
* dependents or business/property exposure

Output:

* multiple product categories  
* higher lead priority  
* admin tag: `HIGH_VALUE_LEAD`

Customer explanation:

Your selected budget may support a wider family protection review across life, health, savings, and property protection, subject to NEM’s approved products and rules.

---

## **Rule 15: Many Unknown Answers**

Input signals:

* many “I am not sure” answers  
* many skipped answers

Output:

* support CTA  
* lower confidence  
* admin tag: `GUIDANCE_NEEDED`

Customer explanation:

Some of your answers were marked as “not sure.” That is okay. A simple review can help clarify what protection you already have and what may still be missing.

---

# **17\. Recommendation Ordering**

Recommendations must be ordered by:

1. severity of related gap  
2. relevance to dependents/family protection  
3. customer budget readiness  
4. confidence  
5. product category priority  
6. admin opportunity value

Default ordering:

1. Life Cover  
2. Health Protection  
3. Business / Property Protection  
4. Beneficiary / Claims Readiness  
5. Document Readiness  
6. Wealth / Emergency Planning

But actual ordering should be based on the user profile.

Do not always show all products.

Only show relevant recommendations.

---

# **18\. Recommendation Deduplication**

If multiple rules produce the same product category, deduplicate.

Example:

* dependents \+ no life cover  
* low life cover score  
* spouse/children protection intent

These should not produce three separate Life Cover cards.

They should produce one stronger Life Cover recommendation with multiple reasons/evidence.

Deduplication must preserve reasoning.

---

# **19\. Recommendation Confidence**

Recommendation output should include confidence if practical.

Possible values:

* `low`  
* `medium`  
* `high`

Factors:

* clear answer signals → higher confidence  
* many unknown answers → lower confidence  
* profile/gap alignment → higher confidence  
* missing optional answers → lower confidence

Customer copy should not overstate low-confidence recommendations.

Example:

Based on your answers, this may be worth reviewing.

---

# **20\. Product Link Configuration**

Product links must be config-driven.

For POC v1, links may be placeholders.

Each product category should support:

* `label`  
* `href`  
* `isDemoLink`  
* `openBehavior`  
* `notes`

Do not hard-code external URLs in services.

Do not create real purchase/payment links in Module 6\.

Module 7 may render demo CTAs using these configured links.

---

# **21\. Internal Recommendation Demo Page**

Create an internal demo page:

src/app/demo/recommendations/page.tsx

Purpose:

* load mock answer sets from fixtures  
* run Module 5 scoring engine  
* run Module 6 recommendation engine  
* show RecommendationResult  
* show product category outputs  
* show CTA mappings  
* show admin opportunity tags  
* show lead priority  
* show reasoning/audit trail

Rules:

* label clearly:

Recommendation Engine Demo — Not Final Customer Result Page

* do not collect leads  
* do not show real purchase/payment  
* do not claim live NEM verification  
* do not show final premium  
* do not use real customer data  
* do not create admin dashboard

This demo page may use Module 2 recommendation/admin/status components, but must remain internal/demo.

---

# **22\. Module 5 Integration Requirement**

Module 6 must integrate cleanly with Module 5 outputs.

Input to recommendation orchestrator should include:

* `ProtectionProfile`  
* `ScoreBreakdown`  
* `Gap[]`  
* optional answer/session metadata

Do not recalculate score in recommendation engine.

Do not duplicate Module 5 gap logic unless extending it through mapped rules.

Do not mutate Module 5 output.

Recommendation engine must treat scoring output as input.

---

# **23\. Error Handling Requirements**

Recommendation functions must return safe typed results.

Avoid throwing random strings.

Possible result states:

* success  
* validation\_error  
* config\_error  
* recommendation\_error

If config is invalid, fail loudly in tests and safely in UI.

Internal demo may show safe debug information.

Customer-facing copy must not expose internal rule IDs.

---

# **24\. Privacy Requirements**

Module 6 must not collect new personal data.

Recommendation engine must not require:

* BVN  
* NIN  
* exact address  
* payment details  
* bank details  
* uploaded documents  
* exact policy numbers  
* insurer login credentials  
* exact salary  
* medical records  
* claim records

Inputs are only:

* validated answers  
* normalized profile  
* score output  
* gap output  
* demo metadata

Output must not expose hidden internal metadata to customer-facing UI unless later mapped safely.

---

# **25\. AI Rules**

Do not use AI in Module 6\.

All recommendations must be deterministic templates and rules.

The rule remains:

The system calculates. AI explains.

But in POC v1, even explanation should be templated.

Do not call an AI API.

Do not add AI SDKs.

Do not generate uncontrolled insurance advice.

---

# **26\. Testing Requirements**

Testing is mandatory.

## **26.1 Product Mapper Tests**

Test that:

* no life cover \+ dependents maps to Life Cover  
* employer group life maps to Life Cover review  
* family health gap maps to NEM Health  
* business owner gap maps to Business Protection  
* professional service maps to Professional Indemnity  
* property risk maps to Home / Fire / Burglary  
* car/motor signal maps to Motor / General Insurance  
* beneficiary gap maps to Beneficiary / Claims Readiness  
* document gap maps to Family Document Readiness  
* wealth/emergency gap maps to NEM Asset / Wealth Planning

## **26.2 CTA Selector Tests**

Test that:

* high intent maps to view/start CTAs  
* low budget maps to guidance/support CTA  
* high budget maps to stronger review/start CTAs  
* many unknown answers map to support CTA  
* no recommendation has only “book a call”  
* no payment CTA is produced in Module 6  
* no fake purchase CTA is produced

## **26.3 Lead Priority Tests**

Test that:

* dependents \+ no life cover produces high or very high priority  
* business owner \+ no business protection increases priority  
* professional service risk increases priority  
* high budget \+ multiple gaps increases priority  
* low budget does not automatically eliminate priority  
* many unknown answers lower confidence or adjust priority  
* no dependents/no gaps produces lower priority

## **26.4 Deduplication Tests**

Test that:

* multiple life-cover signals produce one Life Cover recommendation  
* multiple health signals produce one NEM Health recommendation  
* reasoning is preserved after deduplication  
* priority is upgraded when multiple supporting reasons exist

## **26.5 Explanation Tests**

Test that recommendation explanations:

* are human and calm  
* include no fear-mongering  
* include no fake approval language  
* include no final premium language  
* include no fake NEM verification  
* include no payment claims  
* include required disclaimer support

Forbidden phrases:

* “Guaranteed approval”  
* “Final premium”  
* “Your policy is ready”  
* “You are fully protected”  
* “NEM has verified your records”  
* “Buy now or your family is at risk”  
* “You must buy this”

## **26.6 Orchestrator Tests**

Test that:

* valid profile \+ score returns RecommendationResult  
* recommendation result includes products  
* recommendation result includes CTA groups  
* recommendation result includes admin tags  
* recommendation result includes lead priority  
* recommendation result includes reasoning  
* recommendation result includes disclaimer  
* same input returns same output  
* invalid config fails safely

## **26.7 Fixture Tests**

Use Module 5 mock personas.

Expected broad results:

### **Existing Motor Customer**

Expected:

* Life Cover  
* NEM Health  
* Home / Fire / Burglary or Motor/General depending answers  
* Beneficiary / Claims Readiness  
* priority high

### **Corporate Employee**

Expected:

* Life Cover review/top-up  
* NEM Health if dependents not covered  
* Beneficiary / Claims Readiness  
* priority medium/high

### **Business Owner**

Expected:

* Life Cover  
* NEM Health  
* Business Protection  
* Beneficiary / Claims Readiness  
* Document Readiness  
* priority very high or high

### **Better Protected Customer**

Expected:

* fewer recommendations  
* lower urgency  
* may include review/maintenance CTAs  
* priority low/medium

---

# **27\. Documentation Requirements**

Create:

docs/modules/module-06-recommendation-engine.md

It must include:

* purpose  
* scope  
* non-goals  
* recommendation philosophy  
* product category model  
* CTA model  
* admin opportunity tags  
* lead priority model  
* budget-aware logic  
* rule configuration  
* deduplication strategy  
* confidence model  
* disclaimer rules  
* demo page instructions  
* tests added  
* acceptance criteria  
* known limitations  
* handoff notes for Module 7 and Module 8

Update `README.md` if needed to mention:

/demo/recommendations

---

# **28\. Required File Structure**

Create or update files under:

src/features/recommendations/  
  config/  
  schemas/  
  services/  
  types/  
  tests/  
src/app/demo/recommendations/  
docs/modules/

Suggested files:

src/features/recommendations/config/product-categories.ts  
src/features/recommendations/config/recommendation-rules.ts  
src/features/recommendations/config/cta-rules.ts  
src/features/recommendations/config/lead-priority-rules.ts  
src/features/recommendations/config/recommendation-copy.ts  
src/features/recommendations/types/recommendation.types.ts  
src/features/recommendations/schemas/recommendation.schema.ts  
src/features/recommendations/schemas/product-category.schema.ts  
src/features/recommendations/schemas/recommendation-config.schema.ts  
src/features/recommendations/services/product-mapper.ts  
src/features/recommendations/services/cta-selector.ts  
src/features/recommendations/services/lead-priority-calculator.ts  
src/features/recommendations/services/recommendation-reasoning.ts  
src/features/recommendations/services/recommendation-deduplication.ts  
src/features/recommendations/services/recommendation-orchestrator.ts  
src/features/recommendations/tests/product-mapper.test.ts  
src/features/recommendations/tests/cta-selector.test.ts  
src/features/recommendations/tests/lead-priority-calculator.test.ts  
src/features/recommendations/tests/recommendation-deduplication.test.ts  
src/features/recommendations/tests/recommendation-reasoning.test.ts  
src/features/recommendations/tests/recommendation-orchestrator.test.ts  
src/app/demo/recommendations/page.tsx  
docs/modules/module-06-recommendation-engine.md

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **29\. Acceptance Criteria**

Module 6 is complete only when:

* product category model exists  
* recommendation model exists  
* CTA model exists  
* admin tag model exists  
* lead priority model exists  
* recommendation config exists  
* product mapping rules exist  
* CTA selection rules exist  
* lead priority logic exists  
* budget-aware logic exists  
* deduplication exists  
* recommendation reasoning exists  
* recommendation orchestrator exists  
* disclaimer support exists  
* internal recommendation demo page exists  
* Module 5 output integrates cleanly  
* no lead capture is implemented  
* no report generation is implemented  
* no admin dashboard is implemented  
* no real product purchase is implemented  
* no fake premium/final approval is produced  
* no AI is used  
* no prohibited sensitive data is collected  
* no unnecessary dependency is added  
* tests cover product mapping  
* tests cover CTA selection  
* tests cover lead priority  
* tests cover deduplication  
* tests cover explanations  
* tests cover orchestrator  
* all required checks pass  
* completion report is produced

---

# **30\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If component/integration tests are separate, run them too.

If Playwright is configured and recommendation demo is testable, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **31\. Required Module 6 Completion Report**

After completing Module 6, produce this report:

## **Summary**

Explain what recommendation engine foundation was created.

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

## **Recommendation Model Summary**

Summarize:

* product categories  
* recommendation model  
* CTA model  
* admin tags  
* lead priority model  
* budget-aware logic  
* deduplication  
* confidence if implemented  
* disclaimer handling

## **Architecture Compliance**

Confirm:

* recommendation engine is separate from UI  
* recommendation config is centralized  
* Module 5 output is consumed, not duplicated  
* recommendation logic is not hard-coded into pages/components  
* domain services are separated  
* no lead/report/admin logic implemented early  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* no new personal data is collected  
* no prohibited POC data is used  
* no BVN/NIN/exact address/payment/upload/policy-number handling added  
* no fake live NEM integration added  
* no unsafe HTML rendering introduced  
* no secrets added  
* recommendations do not overclaim  
* recommendations include disclaimer support

## **UI/UX and Copy Compliance**

Confirm:

* explanations are human and calm  
* no fear-mongering  
* no robotic labels  
* no “book a call only” path  
* no buy/pay/final purchase CTA introduced  
* no final premium claims  
* no guaranteed approval claims  
* budget-sensitive copy is respectful  
* unknown answers handled supportively

## **Accessibility Compliance**

Confirm:

* internal recommendation demo uses accessible components  
* product/category status has text labels  
* priority does not rely on color only  
* no inaccessible custom interaction added

## **Coding Standards Compliance**

Confirm:

* strict TypeScript maintained  
* no avoidable `any`  
* schemas used where appropriate  
* services are pure/testable  
* file-size rule followed  
* no giant utility function introduced  
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

* product mapper tests  
* CTA selector tests  
* lead priority tests  
* deduplication tests  
* explanation tests  
* orchestrator tests  
* fixture/persona tests

## **Performance Review**

Confirm:

* no heavy dependencies added  
* no AI/network/database calls added  
* recommendation engine is deterministic and lightweight  
* no animation/chart/form/state/PDF library added  
* engine can run quickly after scoring

## **Known Issues / Deferred Items**

At minimum, mention:

* customer result page begins in Module 7  
* lead capture begins in Module 8  
* report generation begins in Module 9  
* customer dashboard preview begins in Module 10  
* admin dashboard begins in Module 11  
* product links are demo/config placeholders until NEM confirms real URLs  
* final product/pricing rules require NEM validation  
* no live NEM integration yet  
* no AI recommendation yet

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-06-recommendation-engine.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **32\. Final Instruction**

Module 6 must build the recommendation engine only.

Do not build final result UI.

Do not build lead capture.

Do not build report generation.

Do not build admin dashboard.

Do not build real purchase or payment flows.

Do not use AI.

Do not fake NEM verification.

Do not overclaim.

Do not calculate final premiums.

The engine should map gaps to relevant NEM product categories, choose safe CTAs, produce customer-friendly reasoning, generate admin opportunity tags, and calculate future lead priority.

Build it cleanly, test it properly, and prepare it for Module 7\.

---

# Implementation Record

## Purpose

Module 6 adds the deterministic NEM Life+ recommendation domain layer. It consumes Module 5 `ProtectionProfile` and `ScoreBreakdown` outputs, maps score gaps and profile signals to product categories, chooses safe CTA groups, generates admin opportunity tags, calculates future lead priority, and returns typed recommendation reasoning.

## Scope Delivered

- Created `src/features/recommendations` with typed config, schemas, services, and tests.
- Added product category, recommended product, CTA, admin tag, lead priority, audit, and recommendation result models.
- Added centralized product category copy, demo links, CTA labels, rule metadata, lead priority thresholds, and disclaimer text.
- Added product mapper, deduplication, CTA selector, lead priority calculator, reasoning, and orchestrator services.
- Added `/demo/recommendations` as an internal recommendation demo, clearly labeled as not the final customer result page.
- Reused Module 5 mock answer fixtures and scoring output for recommendation tests and demo output.

## Product Categories

- Life Cover
- NEM Health
- NEM Asset / Wealth Planning
- Motor / General Insurance
- Home / Fire / Burglary
- Business Protection
- Professional Indemnity
- Beneficiary / Claims Readiness
- Family Document Readiness

## Pipeline

Module 5 profile and score breakdown -> product signal mapping -> deduplication -> lead priority calculation -> CTA selection -> recommendation reasoning -> output validation -> typed `RecommendationResult`.

## Privacy and Safety

The recommendation engine collects no new personal data. It uses validated answers already normalized by Module 5, score gaps, broad categories, budget ranges, and demo metadata only. It does not use BVN, NIN, exact address, payment details, policy numbers, uploads, salary, medical records, or real NEM records. Output includes the required guidance-only recommendation disclaimer.

## Non-Goals Preserved

Module 6 does not implement the final result page, recommended plan UI, lead capture, report generation, customer dashboard, admin dashboard, real product purchase, real pricing, payment, underwriting, policy issuance, CRM integration, live NEM integration, or AI recommendations.

## Demo Page

`/demo/recommendations` shows mock answer-set recommendation output, product categories, CTA mappings, admin opportunity tags, lead priority, and audit trail for internal review only. It is not the final customer result page.

## Tests Added

- Product mapper tests
- CTA selector tests
- Lead priority tests
- Deduplication tests
- Recommendation copy safety tests
- Orchestrator tests
- Demo fixture/persona tests

## Known Limitations

- Product links are demo/config placeholders until NEM confirms real URLs.
- Final product and pricing rules require NEM validation.
- Customer result page begins in Module 7.
- Lead capture begins in Module 8.
- Report generation begins in Module 9.
- Customer dashboard preview begins in Module 10.
- Admin dashboard begins in Module 11.
- No live NEM integration or AI recommendation is included.

## Handoff Notes

Module 7 can render `RecommendationResult.recommendedProducts`, `ctaGroups`, `customerSummary`, and `disclaimer` beside the Module 5 score result. Module 8 can use `leadPriority` and `adminOpportunityTags` after consent and lead capture are implemented, without creating leads inside the recommendation engine.
