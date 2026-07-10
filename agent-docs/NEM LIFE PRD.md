# **NEM Life+ Proof of Concept — Full Product Requirements Document**

## **Version**

Version: 1.0  
Prepared for: NEM Life+ POC Build  
Prepared by: Ademola Daniel  
Primary stack: Next.js, React, TypeScript  
Product type: Proof of Concept that can become MVP foundation

---

# **1\. Executive Summary**

NEM Life+ is a family protection and revenue-growth platform for NEM Life and the NEM Group.

The proof of concept will demonstrate how a customer can enter from a NEM-owned channel, complete a guided Family Protection Check, receive an estimated Family Protection Score, understand their protection gaps, see recommended NEM products, and either start registration, view plans, request a quote, receive a report, or speak with a NEM advisor.

The POC will also demonstrate how NEM staff can view captured leads, understand each customer’s gaps, see recommended products, prioritize follow-up, and identify life, health, asset, general insurance, and business protection opportunities.

The POC will not connect to NEM’s real databases.

The POC will not issue real policies.

The POC will not collect BVN, NIN, payment information, uploaded documents, or exact policy numbers.

The POC will use demo data, configurable rules, simulated product links, report previews, and a lightweight admin dashboard to show how the full platform will work.

The goal is to help NEM executives see the business value clearly:

* better life insurance leads  
* easier customer education  
* stronger premium continuity  
* better cross-selling  
* better customer data  
* cleaner beneficiary readiness  
* better claims readiness  
* a practical path to Customer 360  
* a practical path to CRM/core system integration later  
* a practical path to VaultLyne later

This POC must be built like a real product foundation, not like a disposable demo.

---

# **2\. Product Thesis**

## **2.1 Customer Thesis**

People do not wake up wanting to buy life insurance.

They want to make sure their family will be okay if something happens.

NEM Life+ helps customers answer:

* Is my family protected?  
* What insurance do I already have?  
* What protection is missing?  
* Are my dependents covered?  
* Are my beneficiaries or next of kin ready?  
* What is my monthly premium doing?  
* What would happen if I stop paying?  
* What should I fix next?

## **2.2 Business Thesis**

NEM already has trust, customers, products, agents, branches, digital channels, and subsidiaries.

NEM Life+ helps NEM turn those existing strengths into:

* qualified life insurance leads  
* cross-sell opportunities  
* better customer engagement  
* better customer data  
* stronger premium continuity  
* better retention  
* better claims readiness  
* a more compelling NEM Life launch

## **2.3 Technical Thesis**

The POC should prove the value without requiring deep integration.

The technical path is:

1. Static/demo configuration.  
2. Family Protection Check.  
3. Rules-based score and recommendations.  
4. Lead capture.  
5. Report generation/preview.  
6. Admin lead dashboard.  
7. Export/API-ready data model.  
8. Later upload-based Customer 360\.  
9. Later CRM/core integration.  
10. Later VaultLyne.

---

# **3\. Product Goals**

## **3.1 Primary Goal**

Build a working proof of concept that demonstrates the full NEM Life+ customer and admin value loop:

Entry → Guided Check → Score → Explanation → Recommendations → CTA → Report → Lead → Admin Follow-Up.

## **3.2 Business Goals**

The POC must demonstrate how NEM can:

* convert protection curiosity into qualified leads  
* identify customers who may need life cover  
* identify health cross-sell opportunities  
* identify property/business/general insurance opportunities  
* identify beneficiary readiness gaps  
* identify premium-continuity opportunities  
* route leads to staff or agents  
* create a future path for CRM integration  
* create a future path for Customer 360 and VaultLyne

## **3.3 Customer Goals**

The POC must help a customer:

* understand what family protection means  
* answer simple questions without feeling interrogated  
* receive a clear estimated score  
* understand the score in human language  
* see practical next steps  
* understand that the result is an estimate  
* choose whether to continue, register, view plans, receive report, or speak to an advisor

## **3.4 Technical Goals**

The POC must be:

* secure by default  
* modular  
* testable  
* maintainable  
* configuration-driven  
* accessible  
* mobile-first  
* reusable for MVP  
* easy to extend  
* strict TypeScript  
* built with strong engineering standards  
* protected against unnecessary dependency risk

---

# **4\. Non-Goals For POC v1**

The first POC must not include:

* real NEM database integration  
* real CRM integration  
* real policy issuance  
* real payment processing  
* real BVN verification  
* real NIN verification  
* real document upload  
* real underwriting  
* real claims processing  
* real WhatsApp/SMS integration  
* real AI financial advisor  
* real agent assignment to NEM staff accounts  
* full authentication for public users  
* full enterprise RBAC  
* full VaultLyne connector  
* full Customer 360 from live systems

The POC may simulate these future capabilities where useful, but must label them clearly as demo/future functionality.

---

# **5\. Target Users**

## **5.1 Public Customer / Prospect**

A customer who arrives from:

* NEM website  
* existing NEM app  
* social media post  
* WhatsApp campaign  
* SMS campaign  
* email campaign  
* agent link  
* branch QR code  
* corporate HR link

Their goal:

* check family protection gaps  
* understand what cover may be missing  
* see recommended next steps  
* receive a report  
* start registration or view plans

## **5.2 Existing NEM Customer**

A customer who may already have:

* motor insurance  
* home protection  
* business protection  
* NEM Health  
* other general insurance relationship

Their goal:

* understand how existing NEM products fit into family protection  
* see gaps in life, health, property, or beneficiary readiness  
* continue toward relevant NEM products

## **5.3 Business Owner / Professional**

A customer who may need:

* life cover  
* health cover  
* business protection  
* professional indemnity  
* fire/burglary protection  
* goods/equipment protection  
* staff protection

Their goal:

* understand personal and business protection gaps

POC v1 should include business-owner signals, but not build a full corporate/business flow yet.

## **5.4 Corporate HR / Employer**

Future user type.

May need:

* group life  
* staff health cover  
* employee beneficiary readiness  
* employee protection reports  
* staff upload dashboard

Not part of POC v1 except as future teaser or demo placeholder.

## **5.5 NEM Staff / Agent / Admin**

NEM internal users who need to:

* view leads  
* understand score/gaps  
* see recommended products  
* assign or follow up  
* update lead status  
* export leads  
* review admin dashboard metrics

## **5.6 NEM Executive / Decision Maker**

The POC must help executives understand:

* what the customer sees  
* what NEM staff sees  
* how leads are captured  
* how recommendations are generated  
* how cross-sell opportunities are identified  
* how this can start without live integration  
* how it can become enterprise-ready later

---

# **6\. Core Product Experience**

## **6.1 Main User Journey**

The main POC journey is:

1. Customer sees NEM Life+ entry card.  
2. Customer opens landing page.  
3. Customer starts Family Protection Check.  
4. Customer answers guided questions.  
5. System calculates estimated Family Protection Score.  
6. System explains gaps in human language.  
7. System recommends NEM product categories.  
8. Customer sees a recommended protection plan.  
9. Customer can view plans, start registration, send report, save result, or ask an advisor.  
10. Customer submits lead details.  
11. System creates a lead.  
12. System generates a report preview.  
13. Admin dashboard shows the new lead, gaps, recommendations, and priority.

## **6.2 Experience Principles**

The experience must feel:

* guided  
* conversational  
* simple  
* respectful  
* calm  
* trustworthy  
* useful  
* action-oriented

It must not feel:

* robotic  
* clinical  
* manipulative  
* scary  
* too long  
* like a bank form  
* like a hospital result  
* like a generic SaaS wizard  
* like a random AI-generated landing page

---

# **7\. Information Architecture**

## **7.1 Public Routes**

Recommended public routes:

* `/`  
  * mock landing page or POC home  
* `/protection-check`  
  * guided Family Protection Check  
* `/protection-check/result`  
  * score result and recommendations  
* `/report/:id`  
  * report preview or generated report page  
* `/dashboard-preview/:id`  
  * customer dashboard preview  
* `/plans`  
  * simulated recommended plans page  
* `/register`  
  * simulated registration start page  
* `/demo/nem-entry`  
  * mock NEM website entry point  
* `/demo/scenarios`  
  * demo personas and scenario selector

## **7.2 Admin Routes**

Recommended admin routes:

* `/admin`  
  * admin overview  
* `/admin/leads`  
  * lead list  
* `/admin/leads/:id`  
  * lead details  
* `/admin/questions`  
  * question configuration preview  
* `/admin/rules`  
  * recommendation rules preview  
* `/admin/products`  
  * product mapping preview  
* `/admin/reports`  
  * report configuration preview  
* `/admin/settings`  
  * demo settings

For POC v1, admin configuration may be read-only or editable depending on implementation time.

Architecture must still support future editing.

---

# **8\. Functional Requirements**

## **8.1 Mock NEM Entry Point**

### **Purpose**

Show how NEM Life+ can be linked from existing NEM channels.

### **Requirements**

The POC must include a mock NEM entry page or entry card showing:

* NEM-style brand treatment  
* card linking to Family Protection Check  
* short customer-facing copy  
* clear CTA

### **Required Copy**

Headline:

Check Your Family Protection Score

Supporting copy:

See what protection your family has, what may be missing, and what you can fix with NEM.

CTA:

Check My Score

Trust note:

No BVN, NIN, payment, or document upload required to start.

### **Acceptance Criteria**

* User can click CTA and enter Family Protection Check.  
* Card works on desktop and mobile.  
* The experience clearly shows this can sit on NEM’s website/app/campaign channels.

---

## **8.2 Landing Page**

### **Purpose**

Explain the value before asking questions.

### **Requirements**

Landing page must include:

* hero section  
* short explanation  
* three benefit cards  
* trust note  
* primary CTA  
* secondary “how it works” section  
* mobile-first layout  
* NEM-style burgundy, gold, and white theme

### **Required Hero Copy**

Headline:

Is your family protected if life changes tomorrow?

Supporting copy:

Answer a few simple questions and get an estimated Family Protection Score. You will see where your family may be exposed and what you can do next.

Primary CTA:

Start My Free Check

### **Benefit Cards**

Card 1:

Know What You Have  
See your current protection picture.

Card 2:

See What Is Missing  
Find possible gaps in life, health, property, and family readiness.

Card 3:

Fix It With NEM  
Get recommended next steps based on your answers.

### **Acceptance Criteria**

* CTA starts the check.  
* Page is readable on mobile.  
* Page does not ask for contact details immediately.  
* Page reassures the user that sensitive details are not needed to start.

---

## **8.3 Guided Family Protection Check**

### **Purpose**

Collect enough information to estimate family protection gaps without causing distrust or form fatigue.

### **UX Requirements**

* One primary question per screen.  
* Large tappable options.  
* Progress indicator.  
* Back navigation.  
* Smooth transitions.  
* “Why we ask” text where helpful.  
* Skip/Not sure options where appropriate.  
* No sensitive data requested.  
* No exact salary requested.  
* No BVN/NIN requested.  
* No document upload requested.  
* No payment requested.

### **Core Questions**

The question engine must support at least the following configured questions.

---

### **Q1: Soft Personalization**

Question:

What should we call you?

Input:

* first name

Microcopy:

We will use this to personalize your result.

Rules:

* optional  
* if skipped, use neutral copy

---

### **Q2: Protection Intent**

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

---

### **Q3: Financial Dependents**

Question:

Do people currently depend on your income or support?

Options:

* Yes  
* No  
* Sometimes  
* I am not sure

Follow-up:

How many people depend on you financially?

Options:

* 0  
* 1  
* 2–3  
* 4–5  
* More than 5

---

### **Q4: Location**

Question:

Where do you currently live or operate from?

Fields:

* state  
* city/LGA

Follow-up:

Do you live, work, or own property in an area affected by any of these?

Options:

* Flooding  
* Fire risk  
* Theft or burglary concerns  
* Business disruption  
* I am not sure  
* None of these

Rules:

* do not ask exact address  
* location is used for general recommendation context only

---

### **Q5: Existing Life Cover**

Question:

Do you currently have life insurance?

Options:

* Yes, with NEM  
* Yes, with another insurer  
* Yes, through my employer  
* No  
* I am not sure

Follow-up if yes:

About how much cover do you have?

Options:

* Less than ₦1m  
* ₦1m–₦5m  
* ₦5m–₦10m  
* ₦10m–₦25m  
* Above ₦25m  
* I am not sure  
* I prefer not to say

---

### **Q6: Monthly Protection Comfort**

Question:

How much can you comfortably set aside monthly for family protection?

Options:

* Below ₦5,000  
* ₦5,000–₦10,000  
* ₦10,000–₦25,000  
* ₦25,000–₦50,000  
* Above ₦50,000  
* I need guidance

Microcopy:

This is not a payment request. It only helps estimate what kind of plan may fit your budget.

---

### **Q7: Health Protection**

Question:

Does your family currently have health cover?

Options:

* Yes, everyone is covered  
* Only I am covered  
* Some family members are covered  
* No  
* I am not sure

Follow-up:

Who may still need cover?

Options:

* Spouse  
* Children  
* Parents  
* Domestic staff  
* Business employees  
* No one for now

---

### **Q8: Property and Business Protection**

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

Follow-up:

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

---

### **Q9: Professional / Business Risk**

Question:

Do people or clients depend on your professional service, advice, or business operations?

Options:

* Yes, I run a business  
* Yes, I provide professional services  
* Yes, I employ staff  
* No  
* I am not sure

Purpose:

* identify business protection  
* identify professional indemnity opportunity  
* identify employer/staff protection opportunity

---

### **Q10: Beneficiary Readiness**

Question:

If something happens, are your beneficiaries or next of kin up to date?

Options:

* Yes  
* No  
* I am not sure  
* I have never set this up

Microcopy:

You do not need to enter beneficiary details here. This only helps check your readiness.

---

### **Q11: Document Readiness**

Question:

Do you know where your important family documents are kept?

Options:

* Yes, organized  
* Some are organized  
* Not really  
* I need help with this

Microcopy:

No upload is needed for this check.

---

### **Q12: Existing Insurance Elsewhere**

Question:

Do you currently have insurance with another company?

Options:

* Yes  
* No  
* I am not sure  
* I prefer not to say

Follow-up:

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

Rules:

* do not ask policy number  
* do not ask exact premium  
* do not ask login details  
* do not ask for document upload

---

## **8.4 Question Engine**

### **Purpose**

Questions must be configurable, not hard-coded across multiple UI components.

### **Requirements**

Each question config must support:

* ID  
* title  
* helper text  
* why-we-ask text  
* answer type  
* options  
* required/optional state  
* branching rules  
* scoring tags  
* recommendation tags  
* validation rules  
* sensitivity level  
* display conditions  
* admin label  
* customer-facing label  
* analytics event key

### **Acceptance Criteria**

* Quiz renders from configuration.  
* Adding a question does not require rewriting the quiz engine.  
* Changing option labels does not require changing scoring logic directly.  
* Branching can be extended.  
* Tests cover question rendering and branching.

---

## **8.5 Progress Indicator**

### **Purpose**

Make the guided flow feel interactive and safe without overwhelming the user.

### **Requirements**

* Show progress through steps.  
* Use friendly section labels where appropriate.  
* Must not make the user feel trapped in a long process.  
* Must work on mobile.  
* Must be accessible to screen readers.  
* Must respect reduced-motion preference.

### **Possible Section Labels**

* About You  
* Family  
* Current Cover  
* Property & Business  
* Readiness  
* Result

### **Acceptance Criteria**

* User knows they are moving forward.  
* User can go back.  
* Progress updates smoothly.  
* Accessibility label communicates progress.

---

## **8.6 Score Calculation**

### **Purpose**

Generate a clear estimated Family Protection Score from user answers.

### **Requirements**

The POC must use a deterministic, rules-based score.

The score must be explainable.

The score must be marked as estimated.

The scoring engine must not live inside UI components.

### **Suggested Score Areas**

Total: 100 points.

* Life cover: 25  
* Health protection: 15  
* Dependents covered: 10  
* Premium continuity / payment readiness: 10  
* Beneficiary readiness: 15  
* Document readiness: 10  
* Property/business protection: 10  
* Emergency/wealth planning: 5

### **Score Bands**

* 80–100: Strong protection base  
* 60–79: Good start, review recommended  
* 40–59: Several important gaps  
* 0–39: Major protection gaps

### **Required Score Disclaimer**

This score is an estimate based on your answers. A verified score would require approved customer records and policy information.

### **Acceptance Criteria**

* Same answers always produce same score.  
* Score breakdown is visible.  
* Score can be tested independently.  
* Score can be explained in plain language.  
* Score bands are configurable.

---

## **8.7 Result Reveal Page**

### **Purpose**

Show the customer their estimated score and explain it in a human way.

### **Requirements**

Result page must include:

* score ring or score card  
* overall explanation  
* gap explanation cards  
* recommended next action  
* disclaimer  
* CTA hierarchy

### **Required Example Headline**

Your estimated Family Protection Score is 48/100

### **Required Explanation Style**

Avoid:

Life cover needs attention.

Prefer:

Because people depend on your income, life cover may help provide financial support if something happens to you.

### **Required Gap Cards**

At minimum, support:

* Life Cover  
* Health Protection  
* Beneficiary Readiness  
* Property and Business Protection  
* Document Readiness  
* Premium Continuity  
* Wealth / Emergency Planning

### **CTA Hierarchy**

Primary:

* View My Recommended Protection Plan

Secondary:

* Send My Report to My Email

Support:

* Ask a NEM Advisor

### **Acceptance Criteria**

* Result can be understood without presenter explanation.  
* Copy is not robotic.  
* Gaps are tied to practical meaning.  
* Customer is not scared or manipulated.  
* Clear action follows the result.

---

## **8.8 Recommended Protection Plan**

### **Purpose**

Translate score and gaps into product-oriented action.

### **Requirements**

The page must show:

* suggested monthly protection range  
* recommended product categories  
* explanation for each recommendation  
* product CTAs  
* advisor CTA  
* estimated disclaimer

### **Product Categories**

* Life Cover  
* NEM Health  
* NEM Asset / Savings / Wealth Planning  
* Motor / General Insurance  
* Home / Fire / Burglary  
* Business Protection  
* Professional Indemnity  
* Beneficiary / Claims Readiness

### **Example Recommendation Card**

Title:

Life Cover

Reason:

You told us people depend on your income, but you do not currently have confirmed life cover.

Explanation:

A basic life plan can help provide financial support for your family if something happens to you.

CTA:

View Life Cover Options

### **Acceptance Criteria**

* Recommendations are generated by rules.  
* Each recommendation has customer explanation.  
* Each recommendation has admin label.  
* Each recommendation has CTA.  
* Recommendation logic is testable.  
* Product links can be configured.

---

## **8.9 Budget Allocation Preview**

### **Purpose**

Help the customer see how a monthly budget could support multiple protection needs.

### **Requirements**

The UI must include:

* suggested monthly range  
* slider or selectable budget tiers  
* breakdown by recommended categories  
* clear disclaimer  
* CTA to view plans or start registration

### **Example Budget Tiers**

* ₦5,000  
* ₦10,000  
* ₦25,000  
* ₦50,000+

### **Required Disclaimer**

The final breakdown must follow NEM’s approved products, pricing, eligibility, and underwriting rules.

### **Acceptance Criteria**

* Budget preview updates based on selected range.  
* It does not promise final premium.  
* It does not claim guaranteed approval.  
* It helps the customer understand affordability.

---

## **8.10 Lead Capture**

### **Purpose**

Capture the customer after value has been shown.

### **Requirements**

Lead capture must happen after:

* score has been shown  
* gaps have been explained  
* recommendations have been shown or teased

Fields:

* full name  
* email  
* phone number  
* preferred contact method  
* consent checkbox

Consent copy:

I agree that NEM may contact me about my Family Protection Report and relevant insurance options.

Optional fields:

* preferred time to contact  
* customer type  
* campaign source

### **Acceptance Criteria**

* Form validates email and phone.  
* Consent is required before lead submission.  
* No hidden consent.  
* Error messages are clear.  
* Lead is created in demo store.  
* Lead appears in admin dashboard.

---

## **8.11 Report Preview / PDF Report**

### **Purpose**

Give the customer a useful takeaway and show NEM how the product can continue the sales journey.

### **Requirements**

The report must include:

* NEM Life+ branding  
* customer name  
* estimated score  
* score explanation  
* key gaps  
* recommended products  
* suggested monthly protection range  
* next steps  
* CTA links  
* disclaimer  
* NEM contact placeholder

### **Report CTAs**

* View Life Cover Options  
* View NEM Health Options  
* Start Registration  
* Speak With a NEM Advisor  
* Continue to NEM Life+

### **Acceptance Criteria**

* Report can be previewed.  
* Report can be downloaded or simulated as a PDF.  
* Report includes clickable links where supported.  
* Report uses estimated language.  
* Report does not include false guarantees.

---

## **8.12 Customer Dashboard Preview**

### **Purpose**

Show what the future signed-in NEM Life+ dashboard could look like.

### **Requirements**

Dashboard preview must include:

* Family Protection Score  
* life cover gap  
* health protection gap  
* property/business gap  
* beneficiary readiness  
* document readiness  
* recommended next steps  
* suggested monthly protection range  
* product cards  
* report CTA  
* registration CTA

### **Required Explanation Style**

Each dashboard section must explain meaning, not only show labels.

Example:

You indicated that people depend on you, but no confirmed life cover was found from your answers.

### **Acceptance Criteria**

* Dashboard preview feels like a real product.  
* It does not pretend to have verified NEM records.  
* It separates estimated/demo data from future verified data.  
* It visually connects the five engines.

---

## **8.13 Admin Lead Dashboard**

### **Purpose**

Show the internal business engine behind NEM Life+.

### **Requirements**

Admin dashboard must show:

* total checks completed  
* leads captured  
* high-priority leads  
* life opportunities  
* health opportunities  
* general insurance opportunities  
* business/professional opportunities  
* average score  
* follow-up status  
* conversion status

Lead list must show:

* name  
* score  
* lead priority  
* customer segment  
* main gaps  
* recommended products  
* source channel  
* status  
* assigned officer placeholder

Lead detail must show:

* customer answers  
* score breakdown  
* identified gaps  
* recommendation explanations  
* product opportunity tags  
* budget range  
* preferred contact method  
* consent status  
* source channel  
* notes  
* status history

### **Lead Statuses**

* New  
* Reviewed  
* Contacted  
* Interested  
* Started Registration  
* Converted  
* Not Ready  
* Closed

### **Acceptance Criteria**

* New lead appears after customer submits lead form.  
* Admin can view lead details.  
* Admin can change status.  
* Admin can see recommendations.  
* Admin can export demo leads or simulate export.  
* Admin dashboard is not publicly accessible in production-ready mode.

---

## **8.14 Admin Configuration Preview**

### **Purpose**

Show that the system is configurable and not hard-coded.

### **Requirements**

Admin must include at least read-only preview pages for:

* questions  
* answer options  
* scoring weights  
* score bands  
* recommendation rules  
* product mappings  
* CTA labels  
* report sections

Editable configuration may be deferred if time is limited, but architecture must support it.

### **Acceptance Criteria**

* Config is centralized.  
* Config can be reviewed.  
* No major question/recommendation copy is scattered across UI components.  
* Future database-backed config is possible.

---

# **9\. Recommendation Engine Requirements**

## **9.1 Purpose**

The recommendation engine converts answers and score gaps into product recommendations, customer explanations, admin tags, and CTAs.

## **9.2 Architecture Requirements**

The engine must be a domain module.

It must separate:

* raw answers  
* normalized customer profile  
* score calculation  
* gap detection  
* recommendation rule evaluation  
* product mapping  
* CTA selection  
* customer explanation generation  
* admin priority generation

## **9.3 Rule Configuration**

Each rule should support:

* rule ID  
* name  
* description  
* conditions  
* score impact  
* gaps created  
* recommendations created  
* admin tags  
* lead priority impact  
* customer explanation  
* CTA  
* product mapping  
* disclaimer requirement

## **9.4 Required Example Rules**

### **Rule: Dependents \+ No Life Cover**

Condition:

* dependents \> 0  
* no confirmed life cover

Recommendation:

* life cover  
* beneficiary readiness

Customer explanation:

Because people depend on your income, life cover may help provide financial support if something happens to you.

Admin tag:

* high-priority life lead

---

### **Rule: Children \+ No Health Cover**

Condition:

* has children  
* children not covered

Recommendation:

* NEM Health family plan

Customer explanation:

You mentioned that some family members may not have health cover. This could create out-of-pocket pressure during emergencies.

Admin tag:

* health cross-sell

---

### **Rule: Business Owner \+ No Business Protection**

Condition:

* owns business or business assets  
* no business protection declared

Recommendation:

* business protection  
* fire/burglary cover  
* goods/equipment protection

Customer explanation:

Your business may be part of how your family survives. Protecting it can also be part of protecting your family.

Admin tag:

* business protection opportunity

---

### **Rule: Professional Services**

Condition:

* provides professional service or advice

Recommendation:

* professional indemnity  
* business protection  
* life cover

Customer explanation:

If people rely on your professional advice or service, professional indemnity may help protect you from certain claims related to your work.

Admin tag:

* professional indemnity opportunity

---

### **Rule: Beneficiary Not Updated**

Condition:

* beneficiary status is no, not sure, or never set up

Recommendation:

* beneficiary review  
* claims readiness checklist

Customer explanation:

If beneficiary records are outdated, your family may face confusion during claims. Reviewing this now can help avoid problems later.

Admin tag:

* claims readiness gap

---

### **Rule: Low Budget**

Condition:

* budget below ₦5,000

Recommendation:

* starter protection conversation  
* report  
* advisor support

Customer explanation:

You can still start with a simple protection review. NEM can help you understand what may fit your budget.

Admin tag:

* budget-sensitive lead

---

### **Rule: Mid Budget**

Condition:

* budget ₦10,000–₦25,000

Recommendation:

* basic life plan  
* health review  
* beneficiary readiness

Customer explanation:

Your selected monthly range may support a starting family protection plan, depending on approved product options.

Admin tag:

* strong retail lead

---

### **Rule: High Budget**

Condition:

* budget above ₦50,000

Recommendation:

* full family protection review  
* higher life cover  
* health plan  
* asset/investment planning  
* property/business cover

Customer explanation:

Your selected budget may support a wider family protection plan across life, health, savings, and property protection.

Admin tag:

* high-value lead

---

## **9.5 Acceptance Criteria**

* Recommendation engine has unit tests.  
* Rules are not embedded in UI.  
* Rules can be added without rewriting screens.  
* Each recommendation has customer explanation and admin label.  
* Engine supports multiple recommendations per user.  
* Engine supports priority scoring.  
* Engine supports product links.  
* Engine supports future admin editing.

---

# **10\. Data Requirements**

## **10.1 POC Data Collected**

POC may collect:

* first name or full name  
* email  
* phone number  
* preferred contact method  
* state  
* city/LGA  
* family/dependent ranges  
* protection intent  
* self-declared insurance status  
* budget range  
* health coverage status  
* property/business protection status  
* beneficiary readiness status  
* document readiness status  
* consent status  
* source channel

## **10.2 POC Data Not Collected**

POC must not collect:

* BVN  
* NIN  
* exact home address  
* policy numbers  
* insurer login credentials  
* uploaded policy documents  
* uploaded ID documents  
* uploaded certificates  
* bank account details  
* card details  
* exact salary  
* claim documents  
* medical records

## **10.3 Future Data Types**

Future MVP/enterprise version may support:

* customer records  
* policy records  
* claims records  
* payment records  
* health plan records  
* asset/investment records  
* beneficiary records  
* document vault records  
* CRM opportunity records  
* core system records  
* VaultLyne integration metadata

## **10.4 Data Model Principles**

Separate:

* raw answers  
* normalized profile  
* scored result  
* recommendations  
* lead  
* report  
* admin view model  
* audit event

Never treat raw input as trusted domain data.

---

# **11\. Core Domain Models**

## **11.1 ProtectionCheckSession**

Fields:

* id  
* startedAt  
* completedAt  
* sourceChannel  
* currentStep  
* answers  
* status

Statuses:

* started  
* in\_progress  
* completed  
* abandoned

## **11.2 Question**

Fields:

* id  
* title  
* helperText  
* whyWeAsk  
* type  
* options  
* required  
* branching  
* scoringTags  
* recommendationTags  
* sensitivityLevel  
* validationRules  
* displayOrder

## **11.3 Answer**

Fields:

* questionId  
* value  
* label  
* tags  
* answeredAt

## **11.4 ProtectionProfile**

Fields:

* intent  
* dependents  
* location  
* lifeCoverStatus  
* lifeCoverRange  
* budgetRange  
* healthCoverStatus  
* propertyNeeds  
* businessNeeds  
* beneficiaryReadiness  
* documentReadiness  
* externalInsuranceStatus

## **11.5 ScoreBreakdown**

Fields:

* totalScore  
* band  
* areas  
* gaps  
* explanation  
* disclaimer

## **11.6 Gap**

Fields:

* id  
* type  
* severity  
* customerTitle  
* customerExplanation  
* adminLabel  
* relatedAnswers

## **11.7 Recommendation**

Fields:

* id  
* productCategory  
* title  
* reason  
* explanation  
* CTA  
* priority  
* adminTag  
* productLink  
* disclaimer

## **11.8 Lead**

Fields:

* id  
* name  
* email  
* phone  
* preferredContactMethod  
* consent  
* sourceChannel  
* score  
* gaps  
* recommendations  
* priority  
* status  
* assignedTo  
* createdAt  
* updatedAt

## **11.9 Report**

Fields:

* id  
* leadId  
* score  
* summary  
* gaps  
* recommendations  
* nextSteps  
* generatedAt

## **11.10 AuditEvent**

Fields:

* id  
* eventType  
* actorType  
* actorId  
* targetType  
* targetId  
* metadata  
* createdAt

---

# **12\. Security Requirements**

## **12.1 Security Baseline**

The POC must be secure by default.

The agent must consider:

* input validation  
* output encoding  
* authorization  
* session management  
* server/client boundary  
* sensitive data minimization  
* dependency risk  
* API abuse  
* secure error handling  
* audit logging  
* privacy and consent

## **12.2 Input Validation**

All external input must be validated with runtime schemas.

Validate:

* quiz answers  
* lead forms  
* admin status updates  
* report requests  
* config files  
* product mappings  
* rule configs

Validation must include:

* required fields  
* allowed values  
* length limits  
* enum validation  
* phone/email format  
* numeric ranges  
* array limits  
* object shape validation

## **12.3 Server/Client Boundary**

Use Server Components by default.

Use Client Components only for:

* quiz interactivity  
* local UI state  
* animations  
* dashboard interactions  
* modals/drawers  
* client-side charts

Never expose secrets in Client Components.

Never import server-only logic into Client Components.

## **12.4 Admin Protection**

Admin routes must be protected before production-style demo.

At minimum:

* no admin data should be mixed into public result page payloads  
* admin routes should be separated  
* future auth must enforce server-side authorization  
* client-side hiding is not security

## **12.5 API / Server Action Security**

Every server action or route handler must have:

* schema validation  
* safe errors  
* no raw stack traces  
* no sensitive data in response  
* authorization where needed  
* rate-limit consideration for public submissions  
* audit event where appropriate

## **12.6 XSS Prevention**

* Do not render untrusted HTML.  
* Avoid `dangerouslySetInnerHTML`.  
* Treat admin-configured copy as untrusted unless safely rendered.  
* Report generation must use safe templates.  
* Never allow arbitrary HTML in report sections.

## **12.7 Privacy Requirements**

The app must use data minimization.

Every collected field must have a purpose.

Sensitive fields must be deferred.

Consent must be visible.

The score must be described as estimated.

External insurance must be captured only through categories/ranges.

## **12.8 Audit Logging**

Audit events should be created for:

* lead created  
* lead viewed  
* lead status changed  
* recommendation generated  
* report generated  
* config viewed/changed  
* admin login/logout if auth exists

---

# **13\. UX Requirements**

## **13.1 UX Principles**

The POC must follow:

* guided conversation  
* progressive disclosure  
* one primary task per screen  
* simple language  
* early value before lead capture  
* no sensitive data upfront  
* clear CTAs  
* non-manipulative persuasion  
* mobile-first design

## **13.2 Copy Rules**

Use:

* warm language  
* direct explanations  
* practical next steps  
* Nigerian-market clarity  
* plain English

Avoid:

* robotic labels  
* fear-based copy  
* insurance jargon  
* overpromising  
* excessive paragraphs  
* dark patterns

## **13.3 CTA Rules**

Primary CTA should be action-oriented:

* Start My Protection Plan  
* View Recommended Plans  
* Start Registration  
* Get This Cover  
* Continue to NEM Life

Secondary CTA:

* Send My Report  
* Save My Result  
* Download Report

Support CTA:

* Speak With a NEM Advisor  
* Ask a Question  
* Call Me Later

Do not make “book a call” the only path.

## **13.4 Animation Rules**

Use animation to guide attention.

Allowed:

* question transitions  
* progress updates  
* score count-up  
* card reveal  
* dashboard reveal  
* CTA emphasis

Avoid:

* heavy parallax  
* noisy transitions  
* childish confetti  
* fear-based flashing  
* slow animations

Respect reduced-motion settings.

---

# **14\. UI Requirements**

## **14.1 Brand Direction**

Use:

* burgundy  
* gold  
* white  
* soft neutrals  
* green for covered  
* amber for review  
* red only for serious warnings

The UI must feel:

* premium  
* warm  
* trustworthy  
* Nigerian financial-services appropriate  
* modern  
* human  
* not generic AI SaaS

## **14.2 Core Components**

Required reusable components:

* `QuestionCard`  
* `OptionButton`  
* `ProgressTracker`  
* `WhyWeAsk`  
* `ScoreRing`  
* `ScoreBreakdownCard`  
* `GapExplanationCard`  
* `RecommendationCard`  
* `BudgetAllocationPreview`  
* `LeadCaptureForm`  
* `ReportPreview`  
* `CustomerDashboardPreview`  
* `AdminMetricCard`  
* `LeadCard`  
* `LeadDetailDrawer`  
* `StatusBadge`  
* `SourceChannelBadge`  
* `ProductOpportunityTag`

## **14.3 Layout Rules**

Customer:

* mobile-first  
* single-column question screens  
* large touch targets  
* readable typography  
* sticky primary CTA where useful

Admin:

* desktop-first  
* responsive  
* metrics at top  
* filters/search  
* lead list \+ detail drawer  
* clear status badges

---

# **15\. Accessibility Requirements**

The POC must target practical WCAG 2.2 AA behavior.

Required:

* semantic HTML  
* keyboard navigation  
* visible focus states  
* proper form labels  
* accessible radio/button groups  
* screen-reader-friendly progress  
* no color-only status  
* accessible error messages  
* accessible modals/drawers  
* reduced motion support  
* sufficient contrast  
* logical heading hierarchy  
* mobile touch targets  
* readable font sizes

Acceptance criteria:

* Complete quiz using keyboard.  
* Read result using screen reader semantics.  
* Understand score without relying only on color.  
* Navigate admin lead drawer accessibly.  
* Form errors are announced clearly.

---

# **16\. Performance Requirements**

The POC must feel fast.

Requirements:

* minimize client JavaScript  
* default to Server Components  
* lazy-load admin-heavy components  
* avoid heavy chart libraries unless justified  
* avoid unnecessary animation libraries  
* optimize images/icons  
* avoid expensive calculations in render  
* use memoization only when useful  
* keep quiz transitions instant  
* avoid repeated network calls between every question unless needed

Performance targets:

* landing page feels instant on normal mobile network  
* quiz transition below noticeable delay  
* result generation quick  
* admin dashboard handles hundreds of demo leads  
* no massive bundle for simple screens

---

# **17\. Engineering Requirements**

## **17.1 Stack**

Default stack:

* Next.js App Router  
* React  
* TypeScript  
* Tailwind CSS  
* shadcn/ui or Radix primitives where useful  
* Zod for runtime validation  
* pnpm  
* Vitest  
* React Testing Library  
* Playwright  
* ESLint  
* Prettier or Biome  
* local JSON/demo store or lightweight DB depending on build path

## **17.2 Code Quality**

Code must be:

* modular  
* typed  
* reusable  
* testable  
* readable  
* component-based  
* domain-driven  
* config-driven where appropriate

No source file should exceed 250 lines unless strongly justified.

Split large files into:

* components  
* hooks  
* schemas  
* services  
* tests  
* utilities  
* config  
* domain modules

## **17.3 Architecture Rules**

Separate:

* UI components  
* feature components  
* domain logic  
* validation schemas  
* data services  
* report templates  
* config  
* tests

Recommendation logic must not live inside UI components.

Question logic must not be scattered across screens.

Report logic must not be embedded in result page.

Admin logic must not be mixed with public quiz logic.

## **17.4 Dependency Rules**

Before adding dependency, agent must justify:

* why needed  
* whether framework already solves it  
* maintenance status  
* security status  
* bundle impact  
* license  
* transitive dependency risk  
* server/client usage  
* alternatives considered

Avoid random packages.

Prefer official, mature, small, actively maintained libraries.

## **17.5 TypeScript Rules**

Use strict TypeScript.

Required:

* no avoidable `any`  
* discriminated unions for question types  
* literal unions for fixed values  
* schema-inferred types where appropriate  
* typed API responses  
* typed config  
* typed domain models  
* no unsafe type assertions unless documented

---

# **18\. Suggested Folder Structure**

src/  
  app/  
    (public)/  
      page.tsx  
      protection-check/  
      result/  
      report/  
      dashboard-preview/  
    admin/  
      leads/  
      questions/  
      rules/  
      products/  
      reports/  
    demo/  
      nem-entry/  
      scenarios/  
  components/  
    ui/  
    layout/  
    marketing/  
    quiz/  
    score/  
    recommendations/  
    dashboard/  
    admin/  
    report/  
  features/  
    protection-check/  
      components/  
      config/  
      schemas/  
      services/  
      tests/  
    recommendations/  
      engine/  
      rules/  
      schemas/  
      tests/  
    scoring/  
      engine/  
      config/  
      tests/  
    leads/  
      components/  
      schemas/  
      services/  
      tests/  
    reports/  
      templates/  
      services/  
      tests/  
    admin/  
      components/  
      services/  
      tests/  
  lib/  
    validation/  
    formatting/  
    security/  
    logger/  
    constants/  
  server/  
    actions/  
    services/  
    repositories/  
  types/  
  test/  
    fixtures/  
    factories/  
    utils/

---

# **19\. Testing Requirements**

## **19.1 Unit Tests**

Required for:

* scoring engine  
* recommendation engine  
* question branching  
* validation schemas  
* budget allocation logic  
* lead priority logic  
* formatter functions  
* config parsing

## **19.2 Component Tests**

Required for:

* QuestionCard  
* OptionButton  
* ProgressTracker  
* ScoreRing  
* GapExplanationCard  
* RecommendationCard  
* LeadCaptureForm  
* LeadCard  
* LeadDetailDrawer  
* BudgetAllocationPreview

## **19.3 Integration Tests**

Required for:

* quiz completion  
* result generation  
* lead creation  
* report generation  
* admin lead status update  
* config loading  
* recommendation generation

## **19.4 E2E Tests**

Required for:

* full customer journey  
* mobile customer journey  
* lead capture  
* report preview  
* admin lead view  
* admin status update  
* scenario selector

## **19.5 Accessibility Tests**

Required for:

* keyboard quiz completion  
* visible focus  
* form labels  
* error messages  
* modal/drawer accessibility  
* color-independent score status  
* reduced motion behavior

## **19.6 Security Tests**

Required for:

* invalid inputs rejected  
* oversized payloads rejected  
* unsafe fields ignored  
* admin routes protected  
* malformed recommendation config rejected  
* no sensitive fields returned unnecessarily  
* no public admin data leakage

---

# **20\. Required Scripts**

Project should support:

pnpm install  
pnpm dev  
pnpm build  
pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test  
pnpm test:unit  
pnpm test:component  
pnpm test:e2e  
pnpm test:a11y  
pnpm audit  
pnpm verify

`pnpm verify` should run:

* typecheck  
* lint  
* format check  
* unit tests  
* component tests  
* build

E2E can be separate if slow but must run before milestone acceptance.

---

# **21\. CI/CD Requirements**

CI should run:

* frozen lockfile install  
* typecheck  
* lint  
* format check  
* tests  
* build  
* dependency audit  
* secret scan where available

CI security:

* least privilege permissions  
* avoid unnecessary third-party actions  
* pin actions where feasible  
* do not expose secrets to untrusted PRs  
* separate build and deploy  
* no deployment from failing checks

---

# **22\. Analytics and Tracking Requirements**

The POC should track demo events locally or through a lightweight analytics abstraction.

Events:

* landing viewed  
* check started  
* question answered  
* check completed  
* result viewed  
* recommendation viewed  
* lead form started  
* lead submitted  
* report generated  
* CTA clicked  
* admin lead viewed  
* lead status changed

Each event should include:

* event name  
* timestamp  
* session ID  
* source channel  
* relevant metadata  
* no unnecessary personal data

Analytics must be abstracted so it can later connect to a real analytics platform.

---

# **23\. Report and Email Simulation**

## **23.1 Report**

Must support:

* on-screen preview  
* downloadable or printable version if feasible  
* branded layout  
* CTA links  
* estimated disclaimer

## **23.2 Email Simulation**

POC may show:

* mock email preview  
* “report sent” confirmation  
* sample email content

Do not require real email sending in POC v1 unless explicitly approved.

---

# **24\. Admin Dashboard Requirements**

## **24.1 Metrics**

Show:

* checks completed  
* leads captured  
* high-priority leads  
* life opportunities  
* health opportunities  
* general insurance opportunities  
* business/professional opportunities  
* average score  
* conversion status

## **24.2 Lead List**

Features:

* search  
* filter by priority  
* filter by product opportunity  
* filter by status  
* filter by source  
* sort by newest  
* sort by score  
* export demo leads

## **24.3 Lead Detail**

Show:

* customer info  
* answers  
* score  
* gaps  
* recommendations  
* budget range  
* source  
* consent  
* preferred contact method  
* notes  
* status  
* admin action buttons

## **24.4 Admin Actions**

POC admin can:

* view lead  
* update status  
* add note  
* assign placeholder officer  
* export lead  
* mark as converted  
* mark as not ready

---

# **25\. Demo Scenarios**

The POC must include at least three preset demo scenarios.

## **25.1 Existing Motor Customer**

Profile:

* married  
* 2 children  
* has car insurance  
* no life cover  
* no family health cover  
* unsure about beneficiaries  
* has property concern

Expected output:

* score: 45–55  
* recommendations: life cover, NEM Health family plan, home/burglary protection  
* admin priority: high

## **25.2 Corporate Employee**

Profile:

* has group life  
* has dependents  
* no personal top-up life cover  
* health cover partial  
* beneficiaries not reviewed

Expected output:

* score: 55–65  
* recommendations: top-up life cover, beneficiary review, family health add-on  
* admin priority: medium/high

## **25.3 Business Owner**

Profile:

* spouse and children  
* business owner  
* no life cover  
* no business protection  
* no emergency planning

Expected output:

* score: 35–45  
* recommendations: life cover, business/fire/burglary cover, health plan, asset planning  
* admin priority: very high

## **25.4 Professional Services Customer**

Profile:

* provides professional services  
* has clients  
* no professional indemnity  
* no business protection  
* has dependents

Expected output:

* recommendations: professional indemnity, life cover, business protection  
* admin priority: high

---

# **26\. Future Integration Requirements**

## **26.1 CRM Integration**

Future system should support:

* push lead to NEM CRM  
* update lead status  
* sync assigned officer  
* send recommendation data  
* send source channel  
* send consent status  
* create opportunity record

POC should be export/API-ready.

## **26.2 Core System Integration**

Future system may support:

* customer profile lookup  
* policy lookup  
* premium status  
* claims history  
* product eligibility  
* policy purchase status

## **26.3 Upload-Based Customer 360**

Future upload module should support:

* customer CSV  
* policy CSV  
* claims CSV  
* payment CSV  
* health plan CSV  
* beneficiary CSV

## **26.4 VaultLyne Integration**

Future VaultLyne integration should support:

* approved system connections  
* approved data scopes  
* access logs  
* audit trails  
* read-only views  
* controlled write workflows where approved  
* admin approval

---

# **27\. AI Requirements**

AI is not required for POC v1.

POC v1 should use templated explanations.

Future AI may:

* explain scores  
* summarize gaps  
* draft report language  
* help admins understand messy data  
* extract fields from documents  
* suggest column mappings  
* help answer product questions

AI must not:

* approve claims  
* make underwriting decisions  
* merge customer records automatically  
* calculate final premium outside approved rules  
* see BVN/NIN unnecessarily  
* expose sensitive data  
* replace regulated insurance advice

Core rule:

The system calculates. AI explains.

---

# **28\. Compliance and Legal-Safety Requirements**

The POC must avoid false claims.

Do not say:

* policy is guaranteed  
* premium is final  
* claim will be paid  
* customer is fully protected  
* score is verified  
* NEM records have been checked  
* NEM database has been connected

Use:

* may  
* estimated  
* based on your answers  
* recommended for review  
* subject to NEM’s approved products and rules

Required disclaimers:

* score is estimated  
* final product eligibility depends on NEM rules  
* premium examples are illustrative  
* customer should review options with NEM  
* no sensitive data is required to start

---

# **29\. Build Modules**

## **Module 0: Steering, Doctrine, and Agent Rules**

Purpose:

Create all steering documents and enforce agent workflow.

Deliverables:

* security steering  
* UX steering  
* coding standards  
* testing standards  
* agent workflow  
* reporting format  
* architecture doctrine  
* dependency policy  
* performance policy  
* accessibility policy

## **Module 1: Project Foundation**

Purpose:

Set up Next.js project foundation.

Deliverables:

* Next.js App Router setup  
* TypeScript strict mode  
* Tailwind setup  
* design tokens  
* lint/format tooling  
* test setup  
* folder structure  
* CI scripts  
* verification command

## **Module 2: Design System and Base UI**

Purpose:

Build reusable UI foundation.

Deliverables:

* layout components  
* buttons  
* cards  
* form controls  
* badges  
* modals/drawers  
* score ring  
* progress indicator  
* status tags  
* responsive shells

## **Module 3: Question Engine**

Purpose:

Build config-driven quiz engine.

Deliverables:

* question model  
* option model  
* validation schemas  
* branching support  
* quiz state  
* question renderer  
* progress tracking  
* tests

## **Module 4: Family Protection Check Flow**

Purpose:

Build customer guided flow.

Deliverables:

* landing page  
* entry card  
* guided quiz screens  
* transitions  
* why-we-ask text  
* back navigation  
* mobile-first behavior

## **Module 5: Scoring Engine**

Purpose:

Build deterministic score calculation.

Deliverables:

* scoring config  
* score calculator  
* gap detection  
* score bands  
* explanations  
* unit tests

## **Module 6: Recommendation Engine**

Purpose:

Build product recommendation logic.

Deliverables:

* rule config  
* product mappings  
* CTA mappings  
* customer explanations  
* admin tags  
* lead priority logic  
* tests

## **Module 7: Result and Recommended Plan**

Purpose:

Show score and recommendations.

Deliverables:

* result reveal  
* gap cards  
* recommended protection plan  
* budget allocation preview  
* CTA hierarchy  
* report CTA

## **Module 8: Lead Capture and Lead Store**

Purpose:

Capture user contact and consent.

Deliverables:

* lead form  
* validation  
* consent handling  
* lead persistence  
* lead schema  
* lead creation tests

## **Module 9: Report Preview / PDF**

Purpose:

Generate branded report.

Deliverables:

* report template  
* report preview page  
* printable/downloadable format  
* CTA links  
* disclaimers

## **Module 10: Customer Dashboard Preview**

Purpose:

Show future NEM Life+ customer dashboard.

Deliverables:

* dashboard preview  
* five-engine summary  
* protection gaps  
* recommended next steps  
* estimated status labels

## **Module 11: Admin Dashboard**

Purpose:

Show NEM business engine.

Deliverables:

* admin overview  
* lead list  
* lead detail drawer/page  
* filters  
* status updates  
* notes  
* export demo leads

## **Module 12: Admin Configuration Preview**

Purpose:

Show configurable engine.

Deliverables:

* questions preview  
* scoring config preview  
* rules preview  
* product mapping preview  
* report section preview

## **Module 13: Demo Scenarios**

Purpose:

Make executive demo easy.

Deliverables:

* persona selector  
* pre-filled scenarios  
* scenario comparison  
* reset demo  
* explain scenario output

## **Module 14: Security, Privacy, and Audit Layer**

Purpose:

Strengthen secure handling.

Deliverables:

* validation hardening  
* safe errors  
* audit events  
* public/admin route separation  
* abuse controls where appropriate  
* no sensitive data leakage

## **Module 15: Testing and Quality Gates**

Purpose:

Ensure product quality.

Deliverables:

* unit tests  
* component tests  
* integration tests  
* E2E tests  
* accessibility checks  
* verify script  
* module completion checklist

## **Module 16: Documentation and Handoff**

Purpose:

Make project maintainable.

Deliverables:

* README  
* architecture notes  
* setup guide  
* test guide  
* configuration guide  
* demo guide  
* limitations  
* future roadmap

---

# **30\. Acceptance Criteria For Full POC**

The POC is complete when:

* customer can enter from mock NEM card  
* landing page works  
* guided check works  
* score is calculated  
* score is explained humanly  
* recommendations are generated  
* CTA hierarchy is present  
* lead capture works  
* report preview works  
* customer dashboard preview works  
* admin dashboard works  
* lead appears in admin  
* lead status can change  
* config is centralized  
* recommendation engine is tested  
* scoring engine is tested  
* public/admin boundaries are clear  
* no prohibited sensitive data is collected  
* app is responsive  
* app meets accessibility baseline  
* app builds successfully  
* typecheck passes  
* lint passes  
* tests pass  
* documentation exists  
* known limitations are documented

---

# **31\. Agent Workflow Requirements**

Every coding agent must:

1. Read Module 0 steering documents.  
2. Read this full PRD.  
3. Read current module PRD.  
4. Produce implementation plan.  
5. Identify affected files.  
6. Identify security considerations.  
7. Identify UX considerations.  
8. Identify tests to add or update.  
9. Implement.  
10. Run checks.  
11. Re-read steering docs.  
12. Produce completion report.

Completion report must include:

* summary  
* files changed  
* architecture notes  
* security checks  
* UI/UX checks  
* tests run  
* results  
* known issues  
* final status

Final status must be:

* PASS  
* PASS WITH NOTES  
* FAIL

The agent must not claim PASS if required checks were skipped.

---

# **32\. Definition of Done**

A feature is done when:

* it meets PRD requirements  
* it follows steering rules  
* it is secure by default  
* it has validation  
* it is accessible  
* it is responsive  
* it is tested  
* it is typed strictly  
* it does not add unjustified dependencies  
* it does not collect unnecessary data  
* it does not leak server-only data  
* it does not break the build  
* it has a completion report

A module is done when:

* all module acceptance criteria are met  
* tests pass  
* docs are updated  
* module limitations are documented  
* steering compliance is confirmed

---

# **33\. Key Risks and Mitigations**

## **Risk 1: Product feels like a generic quiz**

Mitigation:

Make result actionable, include recommended plan, show admin lead value.

## **Risk 2: Customer distrusts data collection**

Mitigation:

No sensitive data upfront, explain why each question is asked, show value before lead capture.

## **Risk 3: Executives think it is “just another app”**

Mitigation:

Admin dashboard, lead priority, cross-sell tags, Customer 360 preview, integration roadmap.

## **Risk 4: Agent produces messy code**

Mitigation:

Module 0 steering docs, file-size limits, domain separation, tests, reporting.

## **Risk 5: Recommendation logic becomes hard-coded**

Mitigation:

Config-driven question, scoring, and recommendation engines.

## **Risk 6: Security becomes an afterthought**

Mitigation:

Security baked into PRD, validation, route protection, privacy limits, audit events.

## **Risk 7: POC overclaims**

Mitigation:

Use estimated language, demo labels, no fake integrations, no fake final premiums.

---

# **34\. Final Product Statement**

The NEM Life+ POC is a guided family protection and lead intelligence experience.

For customers, it shows:

What protection do I have, what is missing, and what should I do next?

For NEM, it shows:

Which customers are ready for life, health, asset, general insurance, or business protection follow-up?

The proof of concept must make the opportunity visible without requiring live NEM integration.

It should be simple enough to demo, strong enough to persuade executives, and well-engineered enough to become the foundation for the real MVP.

