# Lightweight Threat Model

Assets:

- Customer contact details, consent records, raw answers, scores, gaps, recommendations, leads, reports, dashboard snapshots, admin tags, config drafts, and demo data.

Actors:

- Normal customer, curious customer, malicious external user, demo presenter, future admin, future NEM staff, developer, accidental misconfiguration, and future integration services.

Trust boundaries:

- Browser/client, route/page layer, browser storage, domain services, config system, admin/demo pages, export/print surfaces, future API/server boundary, and future CRM/NEM integration boundary.

Main risks and current controls:

- Data leakage: masked admin/export fields and customer-safe view models.
- Unsafe copy: central forbidden claim list and config validator.
- Route exposure: route inventory and demo/admin warnings.
- Client-side trust: all stored data revalidated before use.
- Unsafe config: config validation blocks prohibited questions, unsafe CTA routes, and missing disclaimers.
- Demo mistaken for real data: required demo labels and docs.
- Supply chain: direct dependency audit, `pnpm audit`, pinned package manager.

Future controls:

- Production auth/RBAC, server-side authorization, rate limiting, audited server storage, formal logging, monitoring, secrets manager, penetration testing, and legal/compliance review.
