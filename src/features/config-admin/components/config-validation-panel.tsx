import type { ConfigValidationResult } from "../types/config-admin.types";

export function ConfigValidationPanel({ validation }: { validation: ConfigValidationResult }) {
  const issues = [...validation.errors, ...validation.warnings];
  return (
    <section className="ds-card" aria-labelledby="config-validation-title">
      <p className="ds-eyebrow">Validation</p>
      <h2 id="config-validation-title">
        {validation.valid ? "Valid draft" : "Issues need review"}
      </h2>
      {issues.length === 0 ? <p>No blocking validation issues were found.</p> : null}
      <ul className="ds-stack">
        {issues.slice(0, 8).map((issue) => (
          <li key={`${issue.id}-${issue.path}`}>
            <strong>{issue.section}:</strong> {issue.message}
            <br />
            <span>{issue.suggestedFix}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
