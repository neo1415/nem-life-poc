# **MODULE 12 PROMPT — Admin Configuration Preview, Question Editor, Scoring Weights, Recommendation Rules, CTA Copy, and Product Mapping Editor**

You are building the NEM Life+ Proof of Concept.

This is Module 12\.

Your task is to build the admin configuration preview for the NEM Life+ POC.

This module must show how NEM could later control and adjust the Family Protection Check experience without requiring developers to hard-code every question, scoring weight, recommendation rule, CTA label, product mapping, and explanation.

The module must demonstrate configurable control over:

* question catalog  
* answer options  
* helper text  
* “why we ask” text  
* question ordering  
* question active/inactive state  
* privacy/sensitivity classification  
* scoring weights  
* score bands  
* gap rules  
* recommendation mappings  
* product category mappings  
* CTA labels  
* CTA intent behavior  
* lead priority rules  
* report/disclaimer copy preview  
* dashboard engine labels  
* safe preview/testing of config changes

However, this module must not pretend to be a production admin configuration system.

It must not publish real live rules to NEM systems.

It must not implement real RBAC.

It must not implement real database persistence unless already approved.

It must not allow unsafe/prohibited data collection.

It must not let bad configuration bypass validation.

This module creates a safe admin configuration preview that future production modules can harden with authentication, RBAC, approvals, versioning, audit logs, and database-backed configuration.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-12-admin-configuration-preview.md`  
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
* admin demo boundary plan  
* configuration model plan  
* validation plan  
* draft/reset/export plan  
* preview plan  
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

# **1\. Module 12 Objective**

Build the admin configuration preview for NEM Life+.

The module must show that the POC is configurable and enterprise-ready in structure.

It must support:

* configuration overview  
* question configuration preview  
* question editor draft  
* answer option editor draft  
* scoring weight editor draft  
* score band editor draft  
* recommendation rule editor draft  
* product mapping editor draft  
* CTA copy/intent editor draft  
* lead priority rule preview  
* report/disclaimer copy preview  
* validation panel  
* preview/test panel  
* reset to default  
* export configuration simulation  
* import/paste JSON simulation if safe and validated  
* demo-only warning  
* future approval workflow note

The point is not to create a perfect no-code builder.

The point is to prove that the system is not hard-coded, and that NEM can later control the key business logic safely.

---

# **2\. Module 12 Non-Goals**

Do not implement:

* real production admin configuration  
* real live publishing  
* real production RBAC  
* real approval workflow  
* real database-backed config persistence unless explicitly approved  
* real NEM system integration  
* real CRM integration  
* real staff roles  
* real audit log persistence  
* real legal/compliance approval routing  
* AI-generated questions  
* AI-generated rules  
* uncontrolled dynamic code execution  
* user-written JavaScript rules  
* arbitrary formula execution  
* unsafe config import  
* live product pricing editor  
* final premium calculation  
* underwriting rule editor  
* claims rule editor  
* payment rule editor  
* document upload configuration  
* BVN/NIN collection configuration  
* exact address collection configuration

You may simulate:

* draft saving  
* validation  
* previewing  
* reset to defaults  
* export  
* future publish request  
* future approval workflow

But simulation must be clearly labeled.

---

# **3\. Dependency Policy For Module 12**

Module 12 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 12\.

Use:

* existing Next.js foundation  
* existing Module 2 admin/UI components  
* existing Module 3 question config/schemas  
* existing Module 5 scoring config/schemas  
* existing Module 6 recommendation config/schemas  
* existing Module 8 lead intent config  
* existing Module 11 admin layout/components  
* existing Zod validation  
* existing test tools  
* native JSON handling  
* simple form controls

Do not install:

* form builder libraries  
* JSON editor libraries  
* code editor libraries  
* rules engine libraries  
* state management libraries  
* table libraries  
* chart libraries  
* database libraries  
* auth libraries  
* analytics SDKs  
* AI SDKs  
* workflow engines  
* drag-and-drop libraries  
* Monaco editor  
* payment SDKs

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

Add a **Module 12 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Admin Configuration Demo Boundary**

This module is admin-facing and configuration-related.

That means the demo boundary must be very clear.

Every config admin page must show:

Configuration demo — changes are for preview only and are not published to live NEM systems.

If auth/RBAC has not been built, also show:

This is not a production-secure admin console.

Do not pretend:

* real production settings are being changed  
* NEM has approved the configuration  
* legal/compliance has approved the configuration  
* live customer flow has been updated  
* CRM has been updated  
* staff roles have been applied  
* audit logs are production-grade

The admin configuration preview can save local/demo drafts only.

If using browser/session storage, label it as demo storage.

---

# **5\. Required Routes**

Create or update:

src/app/admin/config/page.tsx  
src/app/admin/config/questions/page.tsx  
src/app/admin/config/scoring/page.tsx  
src/app/admin/config/recommendations/page.tsx  
src/app/admin/config/products/page.tsx  
src/app/admin/config/ctas/page.tsx  
src/app/admin/config/preview/page.tsx  
src/app/admin/config/export/page.tsx  
src/app/demo/config/page.tsx

Route behavior:

## **`/admin/config`**

Configuration overview.

Shows config health, sections, validation status, and demo boundary.

## **`/admin/config/questions`**

Question catalog and question editor preview.

## **`/admin/config/scoring`**

Scoring weights and score band editor preview.

## **`/admin/config/recommendations`**

Recommendation rule and lead priority editor preview.

## **`/admin/config/products`**

Product category and mapping editor preview.

## **`/admin/config/ctas`**

CTA label, CTA intent, and CTA routing editor preview.

## **`/admin/config/preview`**

Preview how draft config would affect the customer journey, score, recommendations, and report.

## **`/admin/config/export`**

Export simulation for current draft config.

## **`/demo/config`**

Internal demo route with sample config states.

Must be labeled:

Configuration Demo — Not Production Settings

---

# **6\. Configuration Overview Requirements**

The overview page must show:

* current config source  
* draft status  
* validation status  
* number of active questions  
* number of inactive questions  
* scoring total points  
* number of recommendation rules  
* number of product categories  
* number of CTA intents  
* last modified timestamp if available  
* demo storage status  
* validation issues count  
* links to each config section

It must also show:

* what is configurable now  
* what is not configurable yet  
* what requires future approval workflow

Do not show fake production publish status.

Allowed status:

* Default config  
* Demo draft  
* Valid draft  
* Invalid draft  
* Preview only  
* Not published

Forbidden status:

* Live in production  
* Published to NEM  
* Approved by Compliance

unless actually implemented.

---

# **7\. Config Draft Model**

Create a strongly typed `ConfigDraft` model.

Fields should include:

* `id`  
* `createdAt`  
* `updatedAt`  
* `version`  
* `status`  
* `source`  
* `questions`  
* `scoring`  
* `recommendations`  
* `products`  
* `ctas`  
* `leadPriority`  
* `reportCopy`  
* `dashboardCopy`  
* `validation`  
* `metadata`

Statuses:

* `default`  
* `draft`  
* `valid`  
* `invalid`  
* `preview_only`  
* `exported_demo`

Sources:

* `default_code_config`  
* `demo_admin_draft`  
* `imported_demo_json`  
* `reset_default`

Do not create `published_live` unless real publishing exists.

---

# **8\. Config Validation Model**

Create a `ConfigValidationResult`.

Fields:

* `valid`  
* `errors`  
* `warnings`  
* `securityIssues`  
* `privacyIssues`  
* `accessibilityIssues`  
* `copyIssues`  
* `scoringIssues`  
* `recommendationIssues`  
* `questionIssues`  
* `ctaIssues`

Each issue should include:

* `id`  
* `severity`  
* `section`  
* `message`  
* `path`  
* `suggestedFix`  
* `blocking`

Severity:

* `info`  
* `warning`  
* `error`  
* `critical`

Blocking issues must prevent preview/export.

---

# **9\. Question Configuration Editor Requirements**

The question editor preview must support:

* viewing all configured questions  
* active/inactive status  
* display order  
* section  
* question type  
* customer title  
* helper text  
* “why we ask” text  
* answer options  
* privacy level  
* sensitivity  
* required/skippable status  
* scoring tags  
* recommendation tags  
* analytics key  
* branching references  
* validation state

Allowed edits in demo:

* title  
* helper text  
* why-we-ask text  
* option labels/descriptions  
* active/inactive toggle  
* display order  
* required flag where safe  
* not-sure option toggle where safe  
* customer-facing copy

Restricted edits:

* question ID should not be casually editable  
* analytics key should be read-only or carefully editable  
* scoring/recommendation tags should be advanced-only  
* branching should be preview-only unless safe editor exists

Forbidden question configuration:

* BVN  
* NIN  
* exact address  
* payment details  
* bank/card details  
* policy numbers  
* uploaded documents  
* passwords  
* exact salary  
* medical records  
* claim records  
* insurer login credentials

If admin tries to create such a question, validation must block it.

---

# **10\. Question Editor UI Requirements**

Question editor must include:

* question list  
* selected question detail  
* edit fields  
* option editor  
* validation panel  
* preview card showing how customer would see the question  
* reset question to default  
* save draft button  
* discard draft button

Do not overbuild drag-and-drop.

For ordering, use simple numeric order fields or up/down buttons.

No drag-and-drop dependency.

---

# **11\. Scoring Configuration Editor Requirements**

The scoring editor preview must support:

* viewing score areas  
* editing area labels  
* editing max points  
* editing explanation copy  
* viewing total score  
* validating that total equals 100  
* editing score bands  
* validating score band coverage  
* previewing score output using mock personas

Default score areas:

* Life Cover  
* Health Protection  
* Dependents Covered  
* Premium Continuity / Payment Readiness  
* Beneficiary Readiness  
* Document Readiness  
* Property / Business Protection  
* Emergency / Wealth Planning

Validation must catch:

* total score not equal 100  
* negative weights  
* zero weights where not allowed  
* duplicate area IDs  
* missing score bands  
* overlapping score bands  
* score band gaps  
* score bands outside 0–100  
* score band labels empty  
* fear-based copy  
* fake verification copy

Do not allow scoring config to imply final underwriting or guaranteed approval.

---

# **12\. Recommendation Rule Editor Requirements**

The recommendation editor preview must support:

* viewing recommendation rules  
* viewing rule conditions  
* viewing mapped product categories  
* viewing priority  
* viewing CTA behavior  
* viewing admin tags  
* editing customer explanation copy  
* toggling rule active/inactive  
* previewing rules against mock personas  
* validation panel

Allowed demo edits:

* customer explanation  
* active/inactive  
* priority  
* product category mapping  
* CTA mapping  
* admin tag selection from approved list

Restricted edits:

* raw condition logic should be structured, not arbitrary JavaScript  
* no custom code  
* no unsafe formula execution  
* no AI-generated uncontrolled rules

Validation must catch:

* missing product mapping  
* invalid product category  
* invalid CTA intent  
* invalid admin tag  
* fear-based recommendation copy  
* guaranteed approval claims  
* final premium claims  
* fake NEM verification claims  
* payment/purchase claims where unsupported

---

# **13\. Product Mapping Editor Requirements**

The product mapping editor preview must support:

* product category list  
* product category labels  
* short descriptions  
* customer explanations  
* related gaps  
* related score areas  
* CTA defaults  
* demo product links  
* active/inactive state

Product categories:

* Life Cover  
* NEM Health  
* NEM Asset / Wealth Planning  
* Motor / General Insurance  
* Home / Fire / Burglary  
* Business Protection  
* Professional Indemnity  
* Beneficiary / Claims Readiness  
* Family Document Readiness

Validation must catch:

* empty product label  
* empty customer explanation  
* broken internal demo link  
* unsupported CTA  
* final premium claims  
* guaranteed approval claims  
* legal/financial advice overreach  
* fake live product purchase link

Do not create real product purchase links.

Do not create payment links.

---

# **14\. CTA Configuration Editor Requirements**

The CTA editor preview must support:

* CTA intent list  
* customer label  
* helper text  
* route/href  
* demo/future flag  
* primary/secondary/support level  
* allowed contexts  
* confirmation copy  
* disabled/future placeholder state

CTA intents may include:

* `send_report`  
* `save_result`  
* `ask_advisor`  
* `call_me_later`  
* `request_review`  
* `start_registration`  
* `get_quote`  
* `start_protection_plan`  
* `view_recommended_plans`  
* `learn_more`  
* `view_dashboard_preview`  
* `print_save_report`

Validation must catch:

* broken internal route  
* unsupported intent  
* missing label  
* fake payment CTA  
* fake email sent claim  
* fake advisor assigned claim  
* fake CRM sync claim  
* “book a call” as only path  
* manipulative copy  
* unsupported external URL

Do not add “Pay Now” in Module 12\.

---

# **15\. Lead Priority Rule Preview Requirements**

The lead priority preview must show how lead priority is calculated from:

* score band  
* top gaps  
* dependents  
* budget range  
* product opportunity count  
* CTA intent  
* source channel  
* unknown answer count

It must allow safe preview of:

* weighting explanation  
* priority thresholds  
* mock persona outputs

It must not become a real AI lead scoring system.

It must not claim conversion probability.

It must not claim guaranteed sales.

Allowed labels:

* Low  
* Medium  
* High  
* Very High

Forbidden labels:

* Guaranteed buyer  
* Will convert  
* Approved lead  
* Revenue certain

---

# **16\. Report and Disclaimer Copy Preview**

Allow preview/edit of safe report copy sections:

* score disclaimer  
* recommendation disclaimer  
* demo disclaimer  
* no-upload disclaimer  
* privacy notice  
* consent statement  
* email preview note  
* admin demo warning

Validation must block copy that removes essential disclaimers.

At minimum, the required concepts must remain:

* score is estimated  
* verified score requires approved records  
* recommendations are guidance only  
* final eligibility/pricing/cover depend on NEM rules  
* POC does not connect to live NEM systems  
* no BVN/NIN/payment/upload required for preview stages  
* consent is required for follow-up

Do not let admin remove all disclaimers in demo draft.

---

# **17\. Preview/Test Panel Requirements**

The preview page must let admin test draft config against mock personas.

Mock personas from previous modules:

* Existing Motor Customer  
* Corporate Employee  
* Business Owner  
* Better Protected Customer

The preview must show:

* question flow impact  
* score impact  
* score band impact  
* gap impact  
* recommendation impact  
* CTA impact  
* lead priority impact  
* report copy impact  
* validation issues

If config is invalid, preview must be blocked or clearly marked unsafe.

Do not generate fake production output.

Label:

Preview based on demo configuration, not live production settings.

---

# **18\. Config Export Simulation Requirements**

Build export simulation.

Export may include:

* JSON preview  
* local JSON download if implemented without dependency  
* copy-to-clipboard if already supported  
* checksum/hash if easy without dependency, optional

Export must include:

* config version  
* generated timestamp  
* demo/export label  
* validation result  
* questions  
* scoring  
* recommendations  
* products  
* CTAs  
* disclaimers

Export must exclude:

* real customer data  
* lead data  
* PII  
* secrets  
* audit logs  
* hidden metadata not needed

Export page must say:

Export simulation — this file has not been published to live NEM systems.

Do not claim production publishing.

---

# **19\. Config Import/Paste Simulation**

Optional but useful.

If implemented, it must:

* accept JSON text  
* parse safely  
* validate schema  
* reject invalid structure  
* reject prohibited data config  
* show validation issues  
* not execute code  
* not support JavaScript functions  
* not support arbitrary formulas  
* not support external URLs unless validated  
* not automatically publish

If unsafe or too much, defer import.

Do not install JSON editor dependency.

Use textarea.

---

# **20\. Config Store Requirements**

Create demo config store abstraction.

Suggested file:

src/features/config-admin/services/config-draft-store.ts

Storage options:

## **Option A: In-memory demo store**

Preferred if enough.

## **Option B: sessionStorage/localStorage demo store**

Allowed only if justified.

Rules:

* namespace keys clearly  
* store config only, no customer PII  
* validate loaded config  
* provide clear/reset action  
* document demo-only  
* do not store secrets  
* do not treat loaded config as trusted

Do not add database dependency.

Do not build production config persistence in Module 12\.

---

# **21\. Config Safety Rules**

The config system must block:

* prohibited data collection  
* fake verification claims  
* fake premium claims  
* fake payment claims  
* guaranteed approval claims  
* fear-based customer copy  
* broken CTA routes  
* score total not equal 100  
* score bands not covering 0–100  
* recommendation rules without product mapping  
* unsupported product categories  
* unsupported CTA intents  
* duplicate question IDs  
* invalid branch references  
* circular question branching  
* missing required disclaimers  
* hidden consent  
* pre-checked consent  
* “book a call” as the only next step

---

# **22\. Copy Safety Validator**

Create a copy safety validator.

It should scan configurable customer-facing copy for forbidden or risky phrases.

Forbidden/risky phrases include:

* “Guaranteed approval”  
* “Final premium”  
* “Your policy is ready”  
* “You are fully protected”  
* “NEM has verified your records”  
* “Email sent successfully”  
* “Advisor assigned”  
* “CRM synced”  
* “Buy now or your family is at risk”  
* “You must buy this”  
* “Your family will suffer”  
* “You are unprotected”  
* “Payment overdue”  
* “Premium due” unless clearly future/verified  
* “Policy issued”  
* “Claim processed”

The validator must produce warnings/errors with suggested fixes.

Do not rely only on copy validator for safety.

It is an additional guardrail.

---

# **23\. Admin Config View Model**

Create admin-safe config view models.

They must:

* show editable fields  
* show validation states  
* show warnings/errors  
* show preview output  
* exclude secrets  
* exclude customer PII  
* exclude raw unsafe imported data  
* label demo-only state

Suggested service:

src/features/config-admin/services/config-admin-view-model.ts

---

# **24\. Configuration Pipeline**

Use this safe pipeline:

load default config  
→ load demo draft if available  
→ validate config  
→ build admin config view model  
→ allow safe edits  
→ validate draft  
→ preview draft against mock personas  
→ export simulation if valid

Do not let UI render unvalidated imported config.

Do not let invalid config silently power customer routes.

For Module 12, draft config may remain confined to admin preview/demo routes.

Do not replace production/default config globally unless explicitly designed and documented as demo-only.

---

# **25\. UI Requirements**

Use Module 2 and Module 11 admin components.

Expected components may include:

* `AdminShell`  
* `AdminDemoBanner`  
* `AdminMetricCard`  
* `AdminActionBar`  
* `AdminTableShell`  
* `FilterPill`  
* `Card`  
* `Button`  
* `Input`  
* `Textarea`  
* `Select`  
* `Checkbox`  
* `Callout`  
* `Badge`  
* `StatusBadge`  
* `EmptyState`

Create config-specific components:

* `ConfigDemoBanner`  
* `ConfigOverviewCards`  
* `ConfigValidationPanel`  
* `QuestionConfigList`  
* `QuestionConfigEditor`  
* `OptionConfigEditor`  
* `ScoringWeightsEditor`  
* `ScoreBandEditor`  
* `RecommendationRuleList`  
* `RecommendationRuleEditor`  
* `ProductMappingEditor`  
* `CtaConfigEditor`  
* `DisclaimerCopyEditor`  
* `ConfigPreviewPanel`  
* `PersonaPreviewSelector`  
* `ConfigExportPanel`  
* `ConfigImportPanel`  
* `ConfigResetPanel`

No component should exceed 250 lines.

Do not put validation/business logic directly inside page components.

---

# **26\. Layout Requirements**

Configuration admin must be clear and structured.

Suggested overview layout:

1. Demo config warning  
2. Config health cards  
3. Validation summary  
4. Config section cards  
5. Recent draft info  
6. Preview/export actions  
7. Future production workflow note

Suggested section layout:

1. Demo config warning  
2. Section explanation  
3. List/sidebar  
4. Editor panel  
5. Validation panel  
6. Preview panel  
7. Save draft/reset actions

Avoid creating a confusing mega-form.

Use progressive sections.

---

# **27\. Security and Privacy Requirements**

Module 12 is high-risk because config can change product behavior.

Requirements:

* validate all config before preview/export  
* never execute config as code  
* never support arbitrary JavaScript rules  
* never support uncontrolled formulas  
* never allow prohibited data questions  
* never allow hidden/prechecked consent  
* never allow required disclaimers to be removed  
* never allow fake verification/payment/approval claims  
* never store secrets  
* never store customer PII in config drafts  
* never expose stack traces  
* never render raw imported JSON unsafely  
* never use `dangerouslySetInnerHTML`  
* clearly label demo-only admin config  
* do not claim production security

If admin pages are public in the POC, they must be clearly marked demo-only.

---

# **28\. Accessibility Requirements**

Configuration admin must be accessible.

Required:

* semantic headings  
* form fields labeled  
* validation errors connected to fields  
* warnings readable  
* tab order logical  
* keyboard accessible controls  
* no color-only validation state  
* buttons have clear labels  
* editor sections have headings  
* preview panels labeled  
* import/export controls accessible  
* reset action requires clear confirmation or warning  
* status badges have text labels

Do not make admin config depend on color alone.

---

# **29\. Performance Requirements**

Configuration admin must be lightweight.

Requirements:

* no code editor dependency  
* no JSON editor dependency  
* no drag-and-drop dependency  
* no chart library  
* no heavy table library  
* no AI SDK  
* no database dependency  
* no auth dependency  
* no unnecessary network calls  
* validate config efficiently  
* avoid rendering huge raw JSON by default  
* keep client components narrow

For large config previews, paginate or collapse sections if needed.

---

# **30\. Audit Event Preparation**

If audit/log helper exists, prepare or emit safe internal events:

* `config_admin_viewed`  
* `config_draft_saved_demo`  
* `config_validation_failed`  
* `config_preview_run`  
* `config_export_simulated`  
* `config_reset_to_default`  
* `config_import_failed`  
* `config_import_previewed`

Do not add analytics SDK.

Do not send external events.

Do not log customer PII.

---

# **31\. Required Services**

Create pure/testable services.

Suggested services:

src/features/config-admin/services/config-loader.ts  
src/features/config-admin/services/config-draft-store.ts  
src/features/config-admin/services/config-validator.ts  
src/features/config-admin/services/copy-safety-validator.ts  
src/features/config-admin/services/question-config-editor.ts  
src/features/config-admin/services/scoring-config-editor.ts  
src/features/config-admin/services/recommendation-config-editor.ts  
src/features/config-admin/services/product-mapping-editor.ts  
src/features/config-admin/services/cta-config-editor.ts  
src/features/config-admin/services/config-preview-runner.ts  
src/features/config-admin/services/config-exporter.ts  
src/features/config-admin/services/config-importer.ts  
src/features/config-admin/services/config-admin-view-model.ts

Responsibilities:

## **Config Loader**

Loads default config and draft config.

## **Config Draft Store**

Stores demo drafts safely.

## **Config Validator**

Validates full configuration.

## **Copy Safety Validator**

Flags unsafe customer-facing copy.

## **Question Config Editor**

Applies safe question edits to draft.

## **Scoring Config Editor**

Applies safe scoring edits to draft.

## **Recommendation Config Editor**

Applies safe recommendation edits to draft.

## **Product Mapping Editor**

Applies safe product mapping edits to draft.

## **CTA Config Editor**

Applies safe CTA edits to draft.

## **Config Preview Runner**

Runs draft config against mock personas.

## **Config Exporter**

Builds safe export JSON.

## **Config Importer**

Parses and validates demo import JSON if implemented.

## **Config Admin View Model**

Builds safe admin-facing view models.

---

# **32\. Required Schemas and Types**

Create schemas/types.

Suggested files:

src/features/config-admin/types/config-admin.types.ts  
src/features/config-admin/schemas/config-draft.schema.ts  
src/features/config-admin/schemas/config-validation.schema.ts  
src/features/config-admin/schemas/config-import.schema.ts  
src/features/config-admin/schemas/config-export.schema.ts

Reuse existing schemas from:

* Module 3 question engine  
* Module 5 scoring engine  
* Module 6 recommendation engine  
* Module 8 lead intents

Do not duplicate schemas unnecessarily.

Avoid `any`.

Use explicit domain types.

---

# **33\. Required Components**

Create or update components.

Suggested components:

src/features/config-admin/components/config-demo-banner.tsx  
src/features/config-admin/components/config-overview-cards.tsx  
src/features/config-admin/components/config-validation-panel.tsx  
src/features/config-admin/components/question-config-list.tsx  
src/features/config-admin/components/question-config-editor.tsx  
src/features/config-admin/components/option-config-editor.tsx  
src/features/config-admin/components/scoring-weights-editor.tsx  
src/features/config-admin/components/score-band-editor.tsx  
src/features/config-admin/components/recommendation-rule-list.tsx  
src/features/config-admin/components/recommendation-rule-editor.tsx  
src/features/config-admin/components/product-mapping-editor.tsx  
src/features/config-admin/components/cta-config-editor.tsx  
src/features/config-admin/components/disclaimer-copy-editor.tsx  
src/features/config-admin/components/config-preview-panel.tsx  
src/features/config-admin/components/persona-preview-selector.tsx  
src/features/config-admin/components/config-export-panel.tsx  
src/features/config-admin/components/config-import-panel.tsx  
src/features/config-admin/components/config-reset-panel.tsx

Use existing admin UI components wherever possible.

No component should exceed 250 lines unless strongly justified.

---

# **34\. Required Files**

Create or update relevant files.

Suggested files:

src/app/admin/config/page.tsx  
src/app/admin/config/questions/page.tsx  
src/app/admin/config/scoring/page.tsx  
src/app/admin/config/recommendations/page.tsx  
src/app/admin/config/products/page.tsx  
src/app/admin/config/ctas/page.tsx  
src/app/admin/config/preview/page.tsx  
src/app/admin/config/export/page.tsx  
src/app/demo/config/page.tsx  
src/features/config-admin/types/config-admin.types.ts  
src/features/config-admin/schemas/config-draft.schema.ts  
src/features/config-admin/schemas/config-validation.schema.ts  
src/features/config-admin/schemas/config-import.schema.ts  
src/features/config-admin/schemas/config-export.schema.ts  
src/features/config-admin/services/config-loader.ts  
src/features/config-admin/services/config-draft-store.ts  
src/features/config-admin/services/config-validator.ts  
src/features/config-admin/services/copy-safety-validator.ts  
src/features/config-admin/services/question-config-editor.ts  
src/features/config-admin/services/scoring-config-editor.ts  
src/features/config-admin/services/recommendation-config-editor.ts  
src/features/config-admin/services/product-mapping-editor.ts  
src/features/config-admin/services/cta-config-editor.ts  
src/features/config-admin/services/config-preview-runner.ts  
src/features/config-admin/services/config-exporter.ts  
src/features/config-admin/services/config-importer.ts  
src/features/config-admin/services/config-admin-view-model.ts  
src/features/config-admin/components/config-demo-banner.tsx  
src/features/config-admin/components/config-overview-cards.tsx  
src/features/config-admin/components/config-validation-panel.tsx  
src/features/config-admin/components/question-config-list.tsx  
src/features/config-admin/components/question-config-editor.tsx  
src/features/config-admin/components/option-config-editor.tsx  
src/features/config-admin/components/scoring-weights-editor.tsx  
src/features/config-admin/components/score-band-editor.tsx  
src/features/config-admin/components/recommendation-rule-list.tsx  
src/features/config-admin/components/recommendation-rule-editor.tsx  
src/features/config-admin/components/product-mapping-editor.tsx  
src/features/config-admin/components/cta-config-editor.tsx  
src/features/config-admin/components/disclaimer-copy-editor.tsx  
src/features/config-admin/components/config-preview-panel.tsx  
src/features/config-admin/components/persona-preview-selector.tsx  
src/features/config-admin/components/config-export-panel.tsx  
src/features/config-admin/components/config-import-panel.tsx  
src/features/config-admin/components/config-reset-panel.tsx  
src/features/config-admin/tests/config-loader.test.ts  
src/features/config-admin/tests/config-draft-store.test.ts  
src/features/config-admin/tests/config-validator.test.ts  
src/features/config-admin/tests/copy-safety-validator.test.ts  
src/features/config-admin/tests/question-config-editor.test.ts  
src/features/config-admin/tests/scoring-config-editor.test.ts  
src/features/config-admin/tests/recommendation-config-editor.test.ts  
src/features/config-admin/tests/product-mapping-editor.test.ts  
src/features/config-admin/tests/cta-config-editor.test.ts  
src/features/config-admin/tests/config-preview-runner.test.ts  
src/features/config-admin/tests/config-exporter.test.ts  
src/features/config-admin/tests/config-importer.test.ts  
src/features/config-admin/tests/config-admin-view-model.test.ts  
src/features/config-admin/tests/config-admin-pages.test.tsx  
src/features/config-admin/tests/config-admin-privacy.test.tsx  
src/features/config-admin/tests/config-admin-accessibility.test.tsx  
docs/modules/module-12-admin-configuration-preview.md

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **35\. Testing Requirements**

Testing is mandatory.

## **35.1 Config Loader Tests**

Test that:

* default config loads  
* demo draft loads if present  
* invalid draft is rejected  
* missing draft falls back safely  
* config source is labeled correctly  
* no customer PII is loaded into config

## **35.2 Config Validator Tests**

Test that validator catches:

* duplicate question IDs  
* duplicate option IDs  
* invalid branch references  
* circular branching  
* prohibited data questions  
* missing why-we-ask for sensitive questions  
* score total not equal 100  
* negative score weights  
* invalid score bands  
* overlapping score bands  
* missing required disclaimers  
* invalid product mappings  
* invalid CTA intents  
* broken CTA routes  
* hidden consent  
* pre-checked consent  
* “book a call” as the only CTA path  
* fake verification/payment/approval claims

## **35.3 Copy Safety Validator Tests**

Test that validator flags:

* guaranteed approval language  
* final premium language  
* fake NEM verification  
* fake email sent claim  
* fake advisor assigned claim  
* fake CRM sync claim  
* fear-based language  
* must-buy language  
* fully protected language  
* policy issued language  
* claim processed language

Also test that acceptable calm copy passes.

## **35.4 Question Editor Tests**

Test that:

* safe title edit applies  
* helper text edit applies  
* why-we-ask edit applies  
* option label edit applies  
* active/inactive toggle applies  
* display order edit applies  
* prohibited question creation fails  
* removing essential sensitivity explanation fails  
* invalid branch edit fails  
* duplicate question ID fails

## **35.5 Scoring Editor Tests**

Test that:

* safe weight edit applies  
* total 100 validation works  
* invalid total fails  
* negative weight fails  
* score band edit applies  
* overlapping bands fail  
* band gaps fail  
* fear-based score copy fails

## **35.6 Recommendation Editor Tests**

Test that:

* customer explanation edit applies  
* rule active/inactive toggle applies  
* product category mapping applies  
* invalid product category fails  
* invalid CTA mapping fails  
* guaranteed approval copy fails  
* final premium copy fails  
* payment/purchase claim fails

## **35.7 Product Mapping Editor Tests**

Test that:

* product label edit applies  
* product explanation edit applies  
* CTA default edit applies  
* invalid product link fails  
* payment link fails  
* final premium claim fails  
* legal/financial overreach is flagged

## **35.8 CTA Editor Tests**

Test that:

* CTA label edit applies  
* CTA helper text edit applies  
* demo/future flag applies  
* broken route fails  
* payment CTA fails  
* fake email sent claim fails  
* fake advisor assigned claim fails  
* unsupported intent fails  
* “book a call only” path fails

## **35.9 Preview Runner Tests**

Test that:

* valid draft runs against mock personas  
* invalid draft blocks preview  
* score impact appears  
* recommendation impact appears  
* CTA impact appears  
* lead priority impact appears  
* report copy impact appears  
* preview is labeled demo-only

## **35.10 Export Tests**

Test that:

* valid config exports  
* invalid config blocks export  
* export includes validation result  
* export includes demo label  
* export excludes PII  
* export excludes secrets  
* export does not claim live publishing

## **35.11 Import Tests**

If import is implemented, test that:

* valid JSON imports as draft  
* invalid JSON fails safely  
* JavaScript/function-like content is rejected  
* prohibited config fails  
* missing sections fail or default safely  
* imported config is not automatically published

## **35.12 Page Tests**

Test that:

* config overview renders  
* questions config page renders  
* scoring config page renders  
* recommendations config page renders  
* products config page renders  
* CTA config page renders  
* preview page renders  
* export page renders  
* demo warning appears on all config admin pages  
* validation panel appears  
* unsafe draft shows errors  
* reset action exists  
* export action exists

## **35.13 Privacy Tests**

Config admin pages/export must not include:

* real customer PII  
* BVN  
* NIN  
* exact address  
* card details  
* bank details  
* policy number  
* document upload requirement  
* password  
* salary  
* medical record  
* claim record  
* insurer login  
* secrets

## **35.14 Accessibility Tests**

Test that:

* fields have labels  
* validation errors are connected  
* warnings are readable  
* editor controls keyboard accessible  
* status badges include text  
* preview panels labeled  
* reset/export/import controls accessible  
* no color-only validation state  
* tab order is logical

---

# **36\. Documentation Requirements**

Create:

docs/modules/module-12-admin-configuration-preview.md

It must include:

* purpose  
* scope  
* non-goals  
* route map  
* admin demo boundary  
* configuration model  
* validation model  
* question editor behavior  
* scoring editor behavior  
* recommendation editor behavior  
* product mapping editor behavior  
* CTA editor behavior  
* preview runner behavior  
* export/import simulation  
* config safety rules  
* privacy boundaries  
* accessibility notes  
* testing requirements  
* acceptance criteria  
* known limitations  
* handoff notes for Module 13 and Module 14

Update `README.md` if needed to mention:

/admin/config  
/admin/config/questions  
/admin/config/scoring  
/admin/config/recommendations  
/admin/config/products  
/admin/config/ctas  
/admin/config/preview  
/admin/config/export  
/demo/config

---

# **37\. Acceptance Criteria**

Module 12 is complete only when:

* config overview route exists  
* question config route exists  
* scoring config route exists  
* recommendation config route exists  
* product mapping config route exists  
* CTA config route exists  
* config preview route exists  
* config export route exists  
* demo config route exists  
* demo config warning appears  
* config draft model exists  
* config validation model exists  
* config validator exists  
* copy safety validator exists  
* question editor preview exists  
* scoring editor preview exists  
* recommendation editor preview exists  
* product mapping editor preview exists  
* CTA editor preview exists  
* disclaimer copy preview exists  
* config preview runner exists  
* export simulation exists  
* reset to default exists  
* prohibited data config is blocked  
* unsafe copy is flagged  
* score weights are validated  
* score bands are validated  
* required disclaimers cannot be fully removed  
* no live publishing is claimed  
* no real RBAC/auth is faked  
* no customer PII is stored in config  
* no arbitrary code execution exists  
* no unnecessary dependency is added  
* tests cover config validation  
* tests cover copy safety  
* tests cover editors  
* tests cover preview  
* tests cover export/import if implemented  
* tests cover privacy  
* tests cover accessibility  
* all required checks pass  
* completion report is produced

---

# **38\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If component/integration tests are separate, run them too.

If Playwright is configured and config admin routes are testable, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **39\. Required Module 12 Completion Report**

After completing Module 12, produce this report:

## **Summary**

Explain what admin configuration preview was created.

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
* list deferred packages, especially form-builder/JSON-editor/code-editor/rules-engine/database/auth libraries

## **Route Map**

List routes created/updated:

* `/admin/config`  
* `/admin/config/questions`  
* `/admin/config/scoring`  
* `/admin/config/recommendations`  
* `/admin/config/products`  
* `/admin/config/ctas`  
* `/admin/config/preview`  
* `/admin/config/export`  
* `/demo/config`

Explain what each route does.

## **Configuration Preview Summary**

Summarize:

* config overview  
* question editor  
* scoring editor  
* recommendation rule editor  
* product mapping editor  
* CTA editor  
* disclaimer copy editor  
* validation panel  
* preview runner  
* export/import simulation  
* reset to default  
* demo admin boundary

## **Architecture Compliance**

Confirm:

* config logic is separate from UI  
* validators are reusable  
* editors use safe structured updates  
* no arbitrary code execution exists  
* draft config does not replace production config globally  
* no live publishing implemented  
* no real auth/RBAC/database integration faked  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* prohibited data questions are blocked  
* customer PII is not stored in config  
* secrets are not stored in config  
* imported config is validated before use  
* unsafe copy is flagged  
* required disclaimers cannot be fully removed  
* hidden/prechecked consent is blocked  
* fake verification/payment/approval claims are blocked  
* no unsafe HTML rendering introduced  
* no stack traces exposed  
* no production security is falsely claimed

## **UI/UX and Copy Compliance**

Confirm:

* admin demo boundary is visible  
* config sections are understandable  
* validation issues are actionable  
* preview output is clearly demo-only  
* no confusing mega-form  
* no fake “published live” claim  
* no fake “approved by compliance” claim  
* no fake “NEM systems updated” claim

## **Accessibility Compliance**

Confirm:

* form labels connected  
* validation errors connected  
* warnings readable  
* controls keyboard accessible  
* status badges include text  
* preview panels labeled  
* no color-only validation state  
* reset/export/import controls accessible

## **Coding Standards Compliance**

Confirm:

* strict TypeScript maintained  
* no avoidable `any`  
* schemas reused where appropriate  
* components typed  
* services pure/testable where possible  
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

* config loader tests  
* config validator tests  
* copy safety validator tests  
* question editor tests  
* scoring editor tests  
* recommendation editor tests  
* product mapping editor tests  
* CTA editor tests  
* preview runner tests  
* export/import tests  
* page tests  
* privacy tests  
* accessibility tests

## **Performance Review**

Confirm:

* no form-builder dependency added  
* no JSON/code editor dependency added  
* no rules-engine dependency added  
* no auth/database dependency added  
* no AI SDK added  
* no heavy table/chart library added  
* config validation remains lightweight  
* no huge raw JSON rendered by default  
* client components kept narrow

## **Known Issues / Deferred Items**

At minimum, mention:

* demo scenarios begin in Module 13  
* security/privacy hardening continues in Module 14  
* production auth/RBAC is deferred  
* production database-backed config is deferred  
* approval workflow is deferred  
* production audit logs are deferred  
* live publishing is deferred  
* NEM legal/compliance approval is deferred  
* real product/pricing validation is deferred

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-12-admin-configuration-preview.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **40\. Final Instruction**

Module 12 must build the admin configuration preview only.

Show that questions, scoring, recommendations, products, CTAs, and copy can be controlled safely.

Do not build production config publishing.

Do not fake auth/RBAC.

Do not allow unsafe config.

Do not allow prohibited data collection.

Do not execute arbitrary code.

Do not add dependencies for convenience.

Do not store customer PII in config.

Make the config preview useful, safe, demo-ready, and ready for future production hardening.

Build it cleanly, test it properly, and prepare it for Module 13\.

