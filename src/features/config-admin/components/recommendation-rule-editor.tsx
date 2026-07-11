import type { ConfigDraft } from "../types/config-admin.types";

export function RecommendationRuleEditor({ draft }: { draft: ConfigDraft }) {
  const rule = draft.recommendations.rules[0];
  return (
    <section className="ds-card" aria-labelledby="rule-editor-title">
      <p className="ds-eyebrow">Rule editor preview</p>
      <h2 id="rule-editor-title">No custom code or formulas</h2>
      <label>
        Customer explanation
        <textarea className="ds-input" value={rule?.customerExplanation ?? ""} readOnly />
      </label>
      <p>Conditions remain structured and cannot run JavaScript.</p>
    </section>
  );
}
