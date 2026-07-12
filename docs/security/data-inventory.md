# Data Inventory

Privacy levels used: `public_demo`, `low`, `moderate`, `sensitive`, `internal_only`, `admin_only_demo`, `prohibited_in_poc`.

Collected directly:

- First/full name: `sensitive`, lead form, stored in browser demo storage, displayed masked or purpose-limited.
- Email and phone: `sensitive`, lead form, stored in browser demo storage, masked in admin/export views.
- Preferred contact method/time: `sensitive`, lead form, stored with lead.
- Consent and timestamp: `sensitive`, required before lead save.
- Broad answers, state, city/LGA, budget range, dependents range: `moderate`, stored in session storage only.

Derived:

- Score, score band, score confidence, gaps, recommendations: `moderate`.
- Lead priority and admin tags: `admin_only_demo`.
- Report data and dashboard snapshot: `moderate`, preview only.

Demo/internal:

- Demo personas: `public_demo`, fictional only.
- Config drafts: `internal_only`, browser demo storage.
- Follow-up notes: `admin_only_demo`, local demo behavior only.
- Export data: `admin_only_demo`, masked and demo-labeled.

Prohibited in POC:

- BVN, NIN, exact address, bank details, card details, policy numbers, uploaded documents, uploaded IDs, passwords, exact salary, medical records, claim records, insurer login credentials, real beneficiary names, real claim IDs, and fake payment/policy/claim records that look real.

Retention:

- Browser storage persists until reset or browser clearing.
- Demo reset clears only NEM Life+ namespaced demo keys.
- No server persistence is implemented.
