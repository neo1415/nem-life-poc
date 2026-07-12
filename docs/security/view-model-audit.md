# View Model Audit

Customer view models:

- Result view excludes scoring and recommendation audit trails.
- Lead confirmation excludes admin tags and lead priority.
- Report view excludes admin-only opportunity tags and raw audit trails.
- Dashboard preview labels future verified data clearly.

Admin view models:

- Admin leads mask email and phone by default.
- Lead priority and admin tags remain admin-demo-only.

Test coverage:

- `customer-view-model-safety.test.ts`
- Existing admin/report/privacy tests.
