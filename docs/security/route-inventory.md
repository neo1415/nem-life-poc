# Route Inventory

Source of truth for automated checks: `src/lib/security/route-inventory.ts`.

Summary:

- Public routes: `/`, `/protection-check`, `/demo/nem-entry`, `/demo/ui`, `/demo/question-engine`, `/demo/scoring`, `/demo/recommendations`.
- Customer routes: `/protection-check/start`, `/protection-check/complete`, `/protection-check/result`, `/protection-check/lead`, `/protection-check/lead/confirm`, `/protection-check/report`, `/protection-check/report/preview`, `/protection-check/report/email-preview`, `/protection-check/report/confirm`, `/protection-check/dashboard-preview`, `/dashboard-preview`.
- Admin demo routes: `/admin`, `/admin/leads`, `/admin/leads/[leadId]`, `/admin/leads/export`.
- Config demo routes: `/admin/config`, `/admin/config/questions`, `/admin/config/scoring`, `/admin/config/recommendations`, `/admin/config/products`, `/admin/config/ctas`, `/admin/config/preview`, `/admin/config/export`.
- Demo routes: `/demo`, `/demo/executive`, `/demo/scenarios`, `/demo/scenarios/[scenarioId]`, `/demo/scenarios/compare`, `/demo/reset`, `/demo/admin`, `/demo/config`, `/demo/reports`, `/demo/customer-dashboard`, `/demo/customer-result`, `/demo/leads`.

Highest risk routes:

- Admin and config routes because they show internal-style data without production auth.
- Export and report routes because they produce reusable output.
- Lead routes because they collect contact details and consent.

Guardrails:

- Admin/config routes are demo-only and require future auth/RBAC before production.
- Customer routes revalidate stored context on load.
- Export routes use masked fields and demo labels.
- Scenario routes validate scenario IDs.
