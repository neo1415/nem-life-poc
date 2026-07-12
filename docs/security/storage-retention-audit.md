# Storage and Retention Audit

Storage locations:

- `nem-life-plus:protection-check-session:v1`: session answers and status, `moderate`, session storage, schema-validated on load.
- `nem-life-plus:demo-leads:v1`: demo leads, `sensitive`, session storage, lead schema validated on save/load.
- `nem-life-plus:latest-lead-id:v1`: latest demo lead pointer, `sensitive`, session storage.
- `nem-life-plus:demo-scenarios:v1`: seeded demo scenario IDs, `public_demo`, session storage.
- `nem-life.config-admin.demo-draft`: config draft, `internal_only`, local demo storage.

Hardening:

- Storage keys are namespaced.
- Reset uses `removeNemLifeStorageKeys` and preserves unrelated browser storage.
- Stored sessions/leads are revalidated on load.
- No secrets are stored.

Retention:

- POC browser storage persists until reset or browser clearing.
- Production needs formal retention and deletion rules.
