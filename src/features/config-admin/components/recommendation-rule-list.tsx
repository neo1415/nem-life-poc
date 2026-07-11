import type { ConfigDraft } from "../types/config-admin.types";

export function RecommendationRuleList({ draft }: { draft: ConfigDraft }) {
  return (
    <section className="ds-card" aria-labelledby="rule-list-title">
      <p className="ds-eyebrow">Recommendation rules</p>
      <h2 id="rule-list-title">Structured rule preview</h2>
      <ul className="ds-stack">
        {draft.recommendations.rules.map((rule) => (
          <li key={rule.id}>
            <strong>{rule.id}</strong>
            <p>
              {rule.category} · {rule.priority} · {rule.isActive ? "Active" : "Inactive"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
