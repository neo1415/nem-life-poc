# **MODULE 5 PROMPT — Scoring Engine, Gap Detection, Score Bands, Explanation Layer, and Score Audit Trail**

You are building the NEM Life+ Proof of Concept.

This is Module 5\.

Your task is to build the deterministic scoring engine for the Family Protection Check.

The scoring engine must take validated answers from the Module 3 question engine and Module 4 guided flow, normalize them into a protection profile, calculate an estimated Family Protection Score, detect protection gaps, assign score bands, generate human-readable explanations, and produce an audit trail showing how the score was calculated.

Do not build the recommendation engine yet.

Do not build product recommendations yet.

Do not build the full result/recommended plan page yet.

Do not build lead capture yet.

Do not build report generation yet.

Do not build the admin dashboard yet.

This module creates the scoring and gap-detection domain layer that later modules will use.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-05-scoring-engine.md`  
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
* scoring model plan  
* gap-detection plan  
* explanation plan  
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

# **1\. Module 5 Objective**

Create the NEM Life+ scoring engine.

The engine must:

* consume validated answers  
* normalize answers into a protection profile  
* calculate an estimated Family Protection Score  
* calculate area scores  
* detect gaps  
* assign gap severity  
* assign score band  
* generate human explanations  
* produce a score audit trail  
* remain deterministic and testable  
* remain config-driven  
* avoid product recommendation generation  
* avoid sales CTAs  
* avoid false certainty  
* avoid regulated advice  
* avoid fake NEM verification claims

The output should make it possible for Module 7 to show:

* estimated score  
* score band  
* score breakdown  
* gap cards  
* calm explanations  
* estimated disclaimer

Module 5 must not build Module 7’s result page yet.

---

# **2\. Module 5 Non-Goals**

Do not implement:

* product recommendation engine  
* recommended protection plan  
* sales CTAs  
* lead capture  
* email capture  
* phone capture  
* consent capture  
* PDF report generation  
* customer dashboard preview  
* admin dashboard  
* admin lead persistence  
* real authentication  
* real database persistence  
* CRM integration  
* NEM system integration  
* payment integration  
* BVN/NIN verification  
* document upload  
* AI adviser  
* final premium calculation  
* underwriting decisioning  
* policy issuance  
* claims decisioning

You may create an internal scoring demo page or extend the Module 4 completion handoff to show that scoring will be available, but do not build the final customer result page.

---

# **3\. Dependency Policy For Module 5**

Module 5 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 5\.

Use existing TypeScript, Zod, test tooling, and app foundation.

Do not install:

* scoring libraries  
* rules engines  
* AI SDKs  
* analytics SDKs  
* chart libraries  
* PDF libraries  
* state management libraries  
* form libraries  
* date libraries  
* database libraries  
* auth libraries

The scoring engine must be plain TypeScript domain logic.

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

Add a **Module 5 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Scoring Philosophy**

The score is not a final actuarial score.

The score is not an underwriting decision.

The score is not a policy approval.

The score is not a verified NEM customer record.

The score is an estimate based on customer answers.

The score must help the customer understand:

* whether their family may have protection gaps  
* which areas need review  
* why those areas matter  
* what kind of readiness may be missing

The score must help NEM later understand:

* which users may need life cover  
* which users may need health protection  
* which users may have property/business exposure  
* which users may have beneficiary or claims-readiness gaps  
* which users may need premium-continuity support  
* which users may be strong future leads

However, Module 5 must not generate product recommendations or lead priority.

That belongs to Module 6\.

---

# **5\. Required Disclaimer Doctrine**

Every scoring output must include or support this disclaimer:

This score is an estimate based on your answers. A verified score would require approved customer records and policy information.

The scoring engine output must include a `disclaimer` field.

Never output language implying:

* NEM records have been checked  
* the score is verified  
* the customer is approved  
* the customer is fully protected  
* the customer will receive a policy  
* the premium is final  
* a claim will be paid  
* a product is guaranteed

---

# **6\. Score Structure**

The Family Protection Score must be out of 100\.

Use these default areas:

Life Cover: 25 points  
Health Protection: 15 points  
Dependents Covered: 10 points  
Premium Continuity / Payment Readiness: 10 points  
Beneficiary Readiness: 15 points  
Document Readiness: 10 points  
Property / Business Protection: 10 points  
Emergency / Wealth Planning: 5 points  
Total: 100 points

The scoring engine must be config-driven so weights can later be changed.

Do not hard-code weights inside calculation functions.

Use a scoring config file.

Suggested path:

src/features/scoring/config/scoring-config.ts

---

# **7\. Score Bands**

Create configurable score bands.

Default bands:

## **Strong Protection Base**

Range:

80–100

Customer meaning:

Your answers suggest you may already have a strong protection base. It may still be useful to review beneficiary details, premium continuity, and any recent family or business changes.

## **Good Start, Review Recommended**

Range:

60–79

Customer meaning:

Your answers suggest you have started building protection, but some areas may still need review.

## **Several Important Gaps**

Range:

40–59

Customer meaning:

Your answers suggest there may be several important gaps in your family protection picture.

## **Major Protection Gaps**

Range:

0–39

Customer meaning:

Your answers suggest your family may have major protection gaps that should be reviewed carefully.

Rules:

* score bands must be configurable  
* score band output must include label, range, tone, and customer explanation  
* do not use shame-based language  
* do not use fear-based language  
* do not say the customer is “unsafe” or “doomed”

---

# **8\. Required Domain Models**

Create or update the following domain models.

## **8.1 ProtectionProfile**

This is the normalized profile derived from answers.

Fields should include:

* `hasDependents`  
* `dependentCountRange`  
* `protectionIntent`  
* `state`  
* `cityOrLga`  
* `locationRiskContext`  
* `lifeCoverStatus`  
* `lifeCoverRange`  
* `monthlyProtectionComfort`  
* `healthProtectionStatus`  
* `healthCoverGaps`  
* `propertyBusinessNeeds`  
* `existingPropertyBusinessInsurance`  
* `professionalBusinessRisk`  
* `beneficiaryReadiness`  
* `documentReadiness`  
* `externalInsuranceStatus`  
* `externalInsuranceCategories`  
* `unknowns`  
* `skipped`  
* `metadata`

Do not include prohibited POC data.

## **8.2 ScoreArea**

Fields:

* `id`  
* `label`  
* `maxPoints`  
* `earnedPoints`  
* `status`  
* `customerExplanation`  
* `auditNotes`

Statuses:

* `strong`  
* `partial`  
* `gap`  
* `unknown`  
* `not_applicable`

## **8.3 Gap**

Fields:

* `id`  
* `areaId`  
* `severity`  
* `customerTitle`  
* `customerExplanation`  
* `evidence`  
* `relatedQuestionIds`  
* `confidence`

Severity:

* `low`  
* `moderate`  
* `high`  
* `critical`

Do not overuse `critical`.

Use calm, useful language.

## **8.4 ScoreBand**

Fields:

* `id`  
* `label`  
* `min`  
* `max`  
* `tone`  
* `customerExplanation`

## **8.5 ScoreBreakdown**

Fields:

* `totalScore`  
* `maxScore`  
* `percentage`  
* `band`  
* `areas`  
* `gaps`  
* `summary`  
* `disclaimer`  
* `auditTrail`

## **8.6 ScoreAuditEvent**

Fields:

* `areaId`  
* `ruleId`  
* `pointsPossible`  
* `pointsAwarded`  
* `reason`  
* `relatedAnswerIds`  
* `confidence`

The audit trail is important for debugging and future admin transparency.

---

# **9\. Required Scoring Pipeline**

Implement a clear pipeline:

validated answers  
→ normalize to ProtectionProfile  
→ calculate area scores  
→ detect gaps  
→ assign score band  
→ generate summary explanation  
→ produce audit trail  
→ return ScoreBreakdown

Each step must be separated.

Do not write one giant `calculateScore()` function that does everything.

Required service responsibilities:

## **Profile Normalizer**

Input:

* validated answers

Output:

* `ProtectionProfile`

Purpose:

* convert question answers into domain-friendly structure  
* preserve unknown/skipped states  
* avoid trusting raw input  
* avoid prohibited data

## **Area Scorer**

Input:

* `ProtectionProfile`  
* scoring config

Output:

* score area results

Purpose:

* calculate points per area  
* produce audit notes  
* avoid recommendations

## **Gap Detector**

Input:

* `ProtectionProfile`  
* score area results

Output:

* gaps

Purpose:

* identify what may need review  
* create customer explanations  
* create evidence  
* assign severity

## **Band Resolver**

Input:

* total score  
* score band config

Output:

* score band

Purpose:

* match score to configured band  
* generate band explanation

## **Summary Generator**

Input:

* score areas  
* gaps  
* score band

Output:

* human summary

Purpose:

* explain result in calm language  
* avoid fear-mongering  
* avoid product recommendation

## **Score Orchestrator**

Input:

* validated answers

Output:

* `ScoreBreakdown`

Purpose:

* call the pipeline in order  
* return final score output  
* remain deterministic

---

# **10\. Scoring Rules By Area**

## **10.1 Life Cover — 25 Points**

Signals:

* existing life cover status  
* life cover range  
* dependents  
* employer group life  
* external life cover  
* uncertainty

Suggested scoring:

* confirmed personal life cover with reasonable range: high points  
* employer group life only: partial points  
* life cover exists but amount unknown: partial/unknown points  
* no life cover \+ dependents: low points  
* no life cover \+ no dependents: partial/not-applicable handling  
* not sure: unknown/partial points

Do not punish uncertainty harshly.

Gap examples:

* `life_cover_missing`  
* `life_cover_unclear`  
* `life_cover_may_be_low`  
* `employer_cover_only`

Customer explanation examples:

Because people depend on your income, life cover may help provide financial support if something happens to you.

You mentioned life cover through work. That may be useful, but it may not cover every family need or continue if your employment changes.

---

## **10.2 Health Protection — 15 Points**

Signals:

* health protection status  
* who still needs cover  
* dependents  
* parents/spouse/children  
* business employees

Suggested scoring:

* everyone covered: full/high points  
* only customer covered: partial points  
* some family covered: partial points  
* no health cover: low points  
* not sure: unknown/partial points

Gap examples:

* `family_health_gap`  
* `children_health_gap`  
* `spouse_health_gap`  
* `parents_health_gap`  
* `employee_health_gap`  
* `health_cover_unclear`

Customer explanation examples:

You mentioned that some family members may not have health cover. This could create out-of-pocket pressure during emergencies.

Health protection can reduce the pressure of hospital bills during unexpected illness or emergencies.

---

## **10.3 Dependents Covered — 10 Points**

Signals:

* whether people depend on the customer  
* dependent count range  
* protection intent  
* life cover status  
* health cover status

Suggested scoring:

* no dependents: not-applicable or partial-safe handling  
* dependents \+ life/health cover present: higher points  
* dependents \+ no life/health cover: lower points  
* dependents unclear: unknown/partial points

Gap examples:

* `dependents_need_review`  
* `dependent_count_unclear`  
* `dependents_without_clear_cover`

Customer explanation examples:

Since people may depend on your income or support, it is useful to review whether they would still have financial and health support if life changes unexpectedly.

---

## **10.4 Premium Continuity / Payment Readiness — 10 Points**

Signals:

* monthly protection comfort  
* whether budget selected  
* whether customer needs guidance  
* existing cover uncertainty

This is not payment processing.

This is readiness to sustain protection.

Suggested scoring:

* budget range selected: some points  
* budget seems aligned to multiple gaps: more points  
* needs guidance: partial points  
* no answer/skipped: unknown/low points

Gap examples:

* `premium_plan_not_clear`  
* `budget_guidance_needed`  
* `protection_budget_unclear`

Customer explanation examples:

A protection plan is easier to maintain when the monthly amount fits your normal budget.

Your answers suggest it may help to review what level of cover can fit comfortably into your monthly budget.

Do not say the user can definitely buy a plan at a selected amount.

---

## **10.5 Beneficiary Readiness — 15 Points**

Signals:

* beneficiary readiness answer  
* not sure  
* never set up

Suggested scoring:

* up to date: full/high points  
* no: low points  
* not sure: low/unknown points  
* never set up: low points

Gap examples:

* `beneficiary_not_updated`  
* `beneficiary_unclear`  
* `beneficiary_never_set`

Customer explanation examples:

If beneficiary or next-of-kin records are unclear, your family may face confusion during claims. Reviewing this now can help avoid problems later.

Do not request beneficiary details in Module 5\.

---

## **10.6 Document Readiness — 10 Points**

Signals:

* document readiness answer

Suggested scoring:

* organized: full/high points  
* some organized: partial points  
* not really: low points  
* needs help: low points

Gap examples:

* `documents_not_organized`  
* `document_readiness_partial`  
* `document_help_needed`

Customer explanation examples:

Important documents are easier to manage before an emergency. You can start with a checklist before any upload or verification is needed.

Do not request document upload.

---

## **10.7 Property / Business Protection — 10 Points**

Signals:

* property/business needs  
* existing property/business insurance  
* professional/business risk  
* location risk context

Suggested scoring:

* selected assets are insured: higher points  
* needs exist but not insured: lower points  
* business/professional exposure without cover: lower points  
* no assets/business needs: not-applicable or neutral handling  
* unknown: partial/unknown points

Gap examples:

* `property_protection_gap`  
* `business_protection_gap`  
* `professional_risk_gap`  
* `location_risk_review_needed`  
* `asset_cover_unclear`

Customer explanation examples:

Your business or property may be part of how your family stays financially stable. Reviewing protection for these assets can reduce avoidable exposure.

You selected location-related concerns. This may make it useful to review property, business, or travel-related protection.

Do not make location-based crime or flood claims as fact.

Use:

may

and

review

---

## **10.8 Emergency / Wealth Planning — 5 Points**

Signals:

* monthly protection comfort  
* document readiness  
* dependents  
* protection intent  
* external insurance uncertainty

This area is intentionally small in POC v1.

Suggested scoring:

* has budget comfort \+ organized documents: higher points  
* needs guidance \+ dependents: partial/low points  
* skipped/unknown: unknown/partial points

Gap examples:

* `emergency_planning_gap`  
* `wealth_planning_review_needed`  
* `family_readiness_gap`

Customer explanation examples:

Protection is not only about insurance. It can also include savings, emergency planning, and keeping important family information organized.

Do not create investment advice.

Do not recommend NEM Asset yet.

Recommendations come in Module 6\.

---

# **11\. Gap Detection Rules**

Gap detection must be deterministic.

A gap should include:

* title  
* explanation  
* severity  
* evidence  
* related question IDs  
* confidence

Gap detection must not generate product recommendations.

Acceptable:

Your answers suggest your beneficiary information may need review.

Not acceptable in Module 5:

Buy NEM Life Plan now.

That belongs to Module 6 and Module 7\.

---

# **12\. Explanation Layer Requirements**

The explanation layer must turn score data into human language.

It must be deterministic templates, not AI.

The language must be:

* calm  
* clear  
* human  
* respectful  
* Nigerian-market aware  
* not fear-based  
* not over-technical  
* not robotic  
* not manipulative

Avoid:

Life cover needs attention.

Prefer:

Because people depend on your income, life cover may help provide financial support if something happens to you.

Avoid:

You failed the protection check.

Prefer:

Your answers suggest there are areas worth reviewing.

Avoid:

Your family is exposed.

Prefer:

Your answers may show areas where your family needs stronger protection.

The explanation layer must support:

* area explanations  
* gap explanations  
* score band explanations  
* overall summary  
* disclaimer

---

# **13\. Unknown and Skipped Answer Handling**

Do not treat “I am not sure” as a failure.

Treat it as uncertainty.

The score should reflect uncertainty but not shame the user.

Rules:

* unknown answers may reduce confidence  
* skipped required answers should not happen if Module 4 validation works  
* skipped optional answers should be tracked  
* score output should include confidence indicators where useful  
* gaps can be marked as `confidence: low | medium | high`

Example:

You selected “I am not sure” for life insurance. That means the system cannot confirm whether your family has financial protection in that area.

---

# **14\. Score Confidence**

Add score confidence if practical.

Confidence should reflect answer completeness and certainty.

Possible values:

* `low`  
* `medium`  
* `high`

Factors:

* many “not sure” answers → lower confidence  
* many skipped answers → lower confidence  
* clear answers across core areas → higher confidence

Confidence explanation:

This estimate has medium confidence because some answers were marked as “not sure.”

Do not overbuild confidence if time is limited, but the output model should allow it.

---

# **15\. Audit Trail Requirements**

Every score area must produce audit details.

Audit trail should answer:

* what rule ran?  
* what answers influenced it?  
* how many points were possible?  
* how many points were awarded?  
* why?  
* what confidence was assigned?

This audit trail is for internal/debug/admin transparency.

Customer result pages should not expose raw audit details unless later designed.

Do not expose internal rule IDs on customer-facing pages.

---

# **16\. Config Requirements**

Create centralized config for:

* score areas  
* area weights  
* score bands  
* point rules  
* gap rules  
* explanation templates  
* confidence rules

Suggested files:

src/features/scoring/config/scoring-config.ts  
src/features/scoring/config/score-bands.ts  
src/features/scoring/config/gap-rules.ts  
src/features/scoring/config/explanation-templates.ts

Config may be TypeScript in POC v1.

It must be structured so it can later move into admin/database config.

Do not scatter scoring constants across services.

---

# **17\. Required Services**

Create pure, testable services.

Suggested files:

src/features/scoring/services/profile-normalizer.ts  
src/features/scoring/services/area-scorer.ts  
src/features/scoring/services/gap-detector.ts  
src/features/scoring/services/band-resolver.ts  
src/features/scoring/services/summary-generator.ts  
src/features/scoring/services/score-confidence.ts  
src/features/scoring/services/score-orchestrator.ts

Responsibilities must remain separated.

No service file should become a giant all-in-one scoring file.

---

# **18\. Required Schemas and Types**

Create schemas and types.

Suggested files:

src/features/scoring/types/scoring.types.ts  
src/features/scoring/schemas/protection-profile.schema.ts  
src/features/scoring/schemas/score-breakdown.schema.ts  
src/features/scoring/schemas/scoring-config.schema.ts

Use Zod for runtime validation where appropriate.

Types must be explicit.

Avoid `any`.

Use inferred types from schemas where helpful.

---

# **19\. Internal Scoring Demo Page**

Create an internal demo page:

src/app/demo/scoring/page.tsx

Purpose:

* load a few mock answer sets  
* run the scoring engine  
* show score output  
* show area scores  
* show gaps  
* show band  
* show summary  
* show confidence if implemented  
* show audit trail in an internal/debug section

Rules:

* label clearly:

Scoring Engine Demo — Not Final Customer Result Page

* do not show sales CTAs  
* do not show product recommendations  
* do not capture leads  
* do not imply live NEM verification  
* do not use real customer data  
* use mock/demo answer sets only

The page may use Module 2 score/gap UI components, but must remain an internal demo.

---

# **20\. Module 4 Integration Requirement**

If Module 4 completion handoff exists, you may add a safe link from `/protection-check/complete` to the internal scoring demo or a placeholder.

However:

* do not show score on completion page unless Module 7 is ready  
* do not create final customer result page yet  
* do not create product recommendations  
* do not collect leads

A safe link could say:

Continue to score engine demo

Only if clearly marked as demo/internal.

---

# **21\. Example Mock Answer Sets**

Create test fixtures for at least four personas.

Suggested path:

src/test/fixtures/protection-check-answer-sets.ts

## **Persona 1: Existing Motor Customer**

Profile:

* married or protecting spouse/children  
* 2–3 dependents  
* has car insurance  
* no life cover  
* no family health cover  
* beneficiary not sure  
* document readiness partial  
* property concern

Expected:

* score roughly 40–59  
* gaps in life cover, health protection, beneficiary readiness, property/home/business review  
* band: Several Important Gaps

## **Persona 2: Corporate Employee**

Profile:

* has employer group life  
* dependents  
* health cover partial  
* beneficiary not reviewed  
* budget range selected

Expected:

* score roughly 55–70  
* gaps in personal life cover/top-up review, beneficiary readiness, dependent health  
* band: Good Start or Several Important Gaps depending weights

## **Persona 3: Business Owner**

Profile:

* spouse/children  
* business owner  
* no life cover  
* no business protection  
* no health cover  
* document readiness weak

Expected:

* score roughly 30–45  
* gaps in life, health, business protection, document readiness, beneficiary readiness  
* band: Major Protection Gaps or Several Important Gaps depending weights

## **Persona 4: Better Protected Customer**

Profile:

* life cover exists  
* family health cover exists  
* beneficiary updated  
* documents organized  
* budget range selected  
* property/business needs covered or not applicable

Expected:

* score roughly 75–90  
* band: Good Start or Strong Protection Base  
* fewer gaps

Exact scores must follow config and tests.

---

# **22\. Required Tests**

Testing is mandatory.

## **22.1 Profile Normalization Tests**

Test that:

* answers convert to expected protection profile  
* unknown answers are preserved  
* skipped answers are preserved  
* prohibited data is not included  
* external insurance categories are handled as categories only  
* location uses state/city/LGA only  
* budget uses ranges only

## **22.2 Area Scoring Tests**

Test each score area:

* life cover  
* health protection  
* dependents covered  
* premium continuity  
* beneficiary readiness  
* document readiness  
* property/business protection  
* emergency/wealth planning

Each area must have tests for:

* strong case  
* partial case  
* gap case  
* unknown case  
* not applicable case where relevant

## **22.3 Gap Detection Tests**

Test that gaps are detected for:

* no life cover with dependents  
* unclear life cover  
* employer group life only  
* family health gap  
* children/spouse/parents health gap  
* business owner without business protection  
* professional service risk  
* beneficiary not updated  
* document readiness weak  
* location risk review needed  
* budget guidance needed

## **22.4 Score Band Tests**

Test that:

* 0–39 resolves correctly  
* 40–59 resolves correctly  
* 60–79 resolves correctly  
* 80–100 resolves correctly  
* boundary values work  
* invalid scores fail safely

## **22.5 Explanation Tests**

Test that explanations:

* include human language  
* include estimated disclaimer  
* do not include prohibited phrases  
* do not include fake NEM verification  
* do not include product-buy CTAs  
* do not include fear-mongering language

Forbidden phrases in customer-facing explanation output:

* “You are unprotected”  
* “Your family will suffer”  
* “Guaranteed”  
* “Approved”  
* “Final premium”  
* “NEM has verified”  
* “Your policy is ready”  
* “Buy now”

## **22.6 Orchestrator Tests**

Test that:

* valid answer set returns ScoreBreakdown  
* total score is between 0 and 100  
* area points do not exceed max points  
* gaps are included  
* band is included  
* summary is included  
* disclaimer is included  
* audit trail is included  
* same input returns same output  
* invalid answer input fails safely

## **22.7 Demo Fixture Tests**

Test the four mock personas produce reasonable expected bands and gaps.

Do not make tests too brittle around exact scores unless config intentionally requires exact numbers.

---

# **23\. Error Handling Requirements**

Scoring functions must return safe typed results.

Avoid throwing random strings.

Possible result states:

* success  
* validation\_error  
* config\_error  
* scoring\_error

If config is invalid, fail loudly in tests and safely in UI.

Customer-facing output must never show stack traces.

Internal scoring demo may show safe debug information, but no secrets or prohibited data.

---

# **24\. Performance Requirements**

The scoring engine must be lightweight.

Requirements:

* no network calls  
* no async unless needed  
* no large dependencies  
* no AI calls  
* no database calls  
* no repeated expensive computation  
* no global mutable scoring state  
* pure deterministic functions where possible  
* efficient enough to run instantly after check completion

The scoring engine should be safe to run server-side later.

It may also be safe to run client-side if it does not include sensitive config, but architecture should allow server-side scoring later.

---

# **25\. Privacy Requirements**

Module 5 must not introduce collection of prohibited data.

The scoring engine must ignore or reject prohibited fields.

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

Allowed scoring inputs:

* answer IDs  
* option IDs  
* state/city/LGA  
* broad family/dependent ranges  
* broad insurance category answers  
* budget ranges  
* readiness answers  
* external insurance categories

No scoring output should expose hidden internal sensitive metadata to customer-facing UI.

---

# **26\. Documentation Requirements**

Create:

docs/modules/module-05-scoring-engine.md

It must include:

* purpose  
* scope  
* non-goals  
* scoring philosophy  
* scoring areas  
* score weights  
* score bands  
* profile normalization  
* gap detection rules  
* explanation rules  
* confidence rules if implemented  
* audit trail behavior  
* demo page instructions  
* tests added  
* acceptance criteria  
* known limitations  
* handoff notes for Module 6 and Module 7

Update `README.md` if needed to mention:

/demo/scoring

---

# **27\. Required File Structure**

Create or update files under:

src/features/scoring/  
  config/  
  schemas/  
  services/  
  types/  
  tests/  
src/app/demo/scoring/  
src/test/fixtures/  
docs/modules/

Suggested files:

src/features/scoring/config/scoring-config.ts  
src/features/scoring/config/score-bands.ts  
src/features/scoring/config/gap-rules.ts  
src/features/scoring/config/explanation-templates.ts  
src/features/scoring/types/scoring.types.ts  
src/features/scoring/schemas/protection-profile.schema.ts  
src/features/scoring/schemas/score-breakdown.schema.ts  
src/features/scoring/schemas/scoring-config.schema.ts  
src/features/scoring/services/profile-normalizer.ts  
src/features/scoring/services/area-scorer.ts  
src/features/scoring/services/gap-detector.ts  
src/features/scoring/services/band-resolver.ts  
src/features/scoring/services/summary-generator.ts  
src/features/scoring/services/score-confidence.ts  
src/features/scoring/services/score-orchestrator.ts  
src/features/scoring/tests/profile-normalizer.test.ts  
src/features/scoring/tests/area-scorer.test.ts  
src/features/scoring/tests/gap-detector.test.ts  
src/features/scoring/tests/band-resolver.test.ts  
src/features/scoring/tests/summary-generator.test.ts  
src/features/scoring/tests/score-orchestrator.test.ts  
src/test/fixtures/protection-check-answer-sets.ts  
src/app/demo/scoring/page.tsx  
docs/modules/module-05-scoring-engine.md

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **28\. Acceptance Criteria**

Module 5 is complete only when:

* ProtectionProfile normalization exists  
* scoring config exists  
* score areas exist  
* score bands exist  
* area scoring exists  
* gap detection exists  
* explanation layer exists  
* score orchestrator exists  
* audit trail exists  
* disclaimer is included  
* score output is deterministic  
* score output is estimated, not verified  
* internal scoring demo page exists  
* mock answer fixtures exist  
* tests cover profile normalization  
* tests cover area scoring  
* tests cover gap detection  
* tests cover score bands  
* tests cover explanations  
* tests cover orchestrator  
* no recommendations are generated  
* no lead capture is implemented  
* no report generation is implemented  
* no admin dashboard is implemented  
* no prohibited sensitive data is collected or scored  
* no new unnecessary dependency is added  
* all required checks pass  
* completion report is produced

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

If component/integration tests are separate, run them too.

If Playwright is configured and scoring demo is testable, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **30\. Required Module 5 Completion Report**

After completing Module 5, produce this report:

## **Summary**

Explain what scoring engine foundation was created.

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

## **Scoring Model Summary**

Summarize:

* score areas  
* weights  
* score bands  
* profile normalization  
* gap detection  
* explanation generation  
* confidence if implemented  
* audit trail behavior

## **Architecture Compliance**

Confirm:

* scoring engine is separate from UI  
* scoring config is centralized  
* scoring logic is not hard-coded into pages/components  
* Module 3 answers are normalized before scoring  
* domain services are separated  
* no recommendation/lead/report/admin logic implemented early  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* no prohibited POC data is collected  
* scoring rejects or ignores prohibited fields  
* no BVN/NIN/exact address/payment/upload/policy-number handling added  
* score output is estimated, not verified  
* no fake live NEM integration added  
* no unsafe HTML rendering introduced  
* no secrets added  
* customer explanations do not overclaim

## **UI/UX and Copy Compliance**

Confirm:

* explanations are human and calm  
* no fear-mongering  
* no robotic labels  
* disclaimer included  
* no buy/pay/book-call CTA introduced  
* unknown answers handled respectfully  
* score bands use respectful language

## **Accessibility Compliance**

Confirm:

* internal scoring demo uses accessible components  
* score status has text labels  
* gap severity does not rely on color only  
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

* profile normalization tests  
* area scoring tests  
* gap detection tests  
* band resolver tests  
* explanation tests  
* orchestrator tests  
* fixture/persona tests

## **Performance Review**

Confirm:

* no heavy dependencies added  
* no AI/network/database calls added  
* scoring engine is deterministic and lightweight  
* no animation/chart/form/state/PDF library added  
* scoring can run quickly after check completion

## **Known Issues / Deferred Items**

At minimum, mention:

* recommendation engine begins in Module 6  
* customer result page begins in Module 7  
* lead capture begins in Module 8  
* report generation begins in Module 9  
* customer dashboard preview begins in Module 10  
* admin dashboard begins in Module 11  
* final scoring weights may need NEM product/business validation  
* scoring is estimated and demo-based until NEM data is available  
* persistence/database is deferred  
* AI explanation is deferred

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-05-scoring-engine.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **31\. Final Instruction**

Module 5 must build the scoring engine only.

Do not build recommendations.

Do not build sales CTAs.

Do not build lead capture.

Do not build report generation.

Do not build admin dashboard.

Do not collect prohibited sensitive data.

Do not use AI.

Do not fake NEM verification.

Do not overclaim.

The system calculates an estimated score from answers, detects gaps, explains them calmly, and produces an audit trail.

Build it cleanly, test it properly, and prepare it for Module 6 and Module 7\.

---

# Implementation Record

## Purpose

Module 5 adds the deterministic NEM Life+ scoring domain layer. It consumes validated Module 3/4 answers, normalizes them into a `ProtectionProfile`, calculates an estimated Family Protection Score, detects review gaps, assigns a score band, generates calm explanations, calculates confidence, and returns an audit trail.

## Scope Delivered

- Created `src/features/scoring` with typed config, schemas, services, and tests.
- Added centralized score area weights totaling 100 points.
- Added configurable score bands for major gaps, several gaps, good start, and strong base.
- Added deterministic gap copy and explanation templates with no sales CTAs.
- Added `calculateFamilyProtectionScore` orchestration with typed success/error results.
- Added four mock answer fixtures for the required personas.
- Added `/demo/scoring` as an internal scoring demo, clearly labeled as not the final customer result page.
- Added a safe link from `/protection-check/complete` to the internal scoring demo.

## Scoring Areas

- Life Cover: 25 points
- Health Protection: 15 points
- Dependents Covered: 10 points
- Premium Continuity: 10 points
- Beneficiary Readiness: 15 points
- Document Readiness: 10 points
- Property and Business Protection: 10 points
- Emergency and Wealth Planning: 5 points

## Pipeline

Validated answers -> profile normalization -> area scoring -> gap detection -> score band resolution -> confidence calculation -> summary generation -> audit trail -> validated score breakdown.

## Privacy and Safety

The scorer uses answer IDs, option IDs, state/city/LGA, broad ranges, broad insurance categories, and readiness answers only. It does not collect BVN, NIN, exact address, payment details, policy numbers, uploads, salary, medical records, or real NEM records. Output includes the required estimated-score disclaimer.

## Non-Goals Preserved

Module 5 does not implement product recommendations, sales CTAs, lead capture, report generation, customer dashboard, admin dashboard, database persistence, AI explanations, underwriting, pricing, payment, policy issuance, or fake NEM verification.

## Demo Page

`/demo/scoring` shows mock answer-set score output, area scores, gaps, band, summary, confidence, and audit trail for internal review only. It is not the final customer result page.

## Tests Added

- Profile normalization tests
- Area scoring tests
- Gap detection tests
- Score band tests
- Explanation safety tests
- Orchestrator tests
- Demo fixture/persona tests

## Known Limitations

- Scoring weights are demo defaults and need NEM product/business validation before real use.
- Recommendations begin in Module 6.
- Customer result page begins in Module 7.
- Lead capture begins in Module 8.
- Report generation begins in Module 9.
- Customer dashboard preview begins in Module 10.
- Admin dashboard begins in Module 11.
- Persistence, live NEM records, and AI explanations remain deferred.

## Handoff Notes

Module 6 can use `ScoreBreakdown.gaps`, `ScoreBreakdown.areas`, `ProtectionProfile`, and `auditTrail` to produce recommendation rules without moving recommendation logic into the scoring layer. Module 7 can render customer-facing score output while hiding raw audit IDs unless explicitly designed for internal/admin use.
