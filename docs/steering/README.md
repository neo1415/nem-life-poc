# Steering System

These steering files are binding. They are not suggestions.

Future agents must read `AGENTS.md`, `docs/PRD.md`, the current module PRD under `docs/modules/`, this README, and every steering file relevant to the work before coding. After coding, agents must re-read the same documents, self-audit, run required checks, and report honestly.

If a module conflicts with steering, stop and report the conflict. If a feature request conflicts with security or privacy, security and privacy win unless an explicit reviewed exception is documented.

Update steering documents only when the PRD or accepted project direction changes. Do not weaken a rule to make a feature easier.

## Files

- `00-agent-workflow.md`: task workflow, reports, red flags.
- `01-product-doctrine.md`: product scope, thesis, CTA and estimated-language rules.
- `02-security-and-privacy.md`: prohibited data, validation, auth, secrets, consent.
- `03-architecture-and-boundaries.md`: folder structure, domain boundaries, server/client separation.
- `04-ui-ux-and-copy.md`: customer tone, Nigerian-market-aware copy, interaction style.
- `05-coding-standards.md`: TypeScript, file size, component and service discipline.
- `06-testing-and-quality.md`: required test strategy and verification expectations.
- `07-performance.md`: bundle, runtime, and responsiveness rules.
- `08-dependencies-and-supply-chain.md`: dependency approval and audit policy.
- `09-data-models-and-configuration.md`: domain models and config-driven engines.
- `10-ai-guardrails.md`: deterministic POC behavior and future AI limits.
- `11-reporting-and-definition-of-done.md`: completion report and done criteria.
- `12-accessibility.md`: practical WCAG 2.2 AA expectations.
- `13-error-handling-logging-and-audit.md`: safe errors, logging, audit events.
- `99-known-limitations-and-assumptions.md`: current assumptions and deferred risks.
