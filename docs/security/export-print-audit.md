# Export and Print Surface Audit

Surfaces:

- Report print/save: customer preview, includes disclaimers, no internal audit trail.
- Report email preview: simulation only, no sending claim.
- Admin lead export simulation: masked contacts, demo label, no raw answers, no full contact fields.
- Config export simulation: no customer PII and blocked if config validation fails.

Hardening:

- `safeAdminExportFields` allowlists admin export columns.
- Export cells pass `assertSafeExportText`.
- Reports keep customer-facing disclaimers.

Deferred:

- Real export authorization, download controls, DLP, and audit logs are production work.
