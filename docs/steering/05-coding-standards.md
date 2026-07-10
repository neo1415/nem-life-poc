# Coding Standards

Use strict TypeScript. Avoid `any`; justify unavoidable uses. Prefer discriminated unions, literal unions, schema-inferred types, typed configs, and typed service outputs.

No source file should exceed 250 lines unless strongly justified in the completion report.

Business logic belongs in typed services, not page components. Runtime validation belongs in schemas. Config-driven product behavior belongs in config files that can later move to a database.

Keep changes scoped. Avoid unrelated refactors. Prefer existing patterns. Add abstractions only when they remove real complexity or match established structure.

Do not add dependencies unless audited and documented.
