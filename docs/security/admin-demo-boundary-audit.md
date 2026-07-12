# Admin and Demo Boundary Audit

Required warnings:

- Admin: `Demo admin view - not a production CRM. Do not use with real customer data.`
- Config: `Configuration demo - changes are for preview only and are not published to live NEM systems.`
- Demo: `Demo mode - fictional data only, not connected to live NEM systems.`

Controls:

- Warnings are centralized in `src/lib/security/demo-boundary.ts`.
- Rendering is covered by `admin-demo-boundary.test.tsx`.
- Admin/config routes are inventoried as requiring future auth/RBAC.

Known limitation:

- The POC intentionally does not implement production authentication or RBAC. Admin routes must not be used with real customer data.
