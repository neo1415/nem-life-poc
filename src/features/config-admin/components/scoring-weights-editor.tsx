import type { ConfigDraft } from "../types/config-admin.types";

export function ScoringWeightsEditor({ draft }: { draft: ConfigDraft }) {
  return (
    <section className="ds-card" aria-labelledby="scoring-title">
      <p className="ds-eyebrow">Scoring weights</p>
      <h2 id="scoring-title">Total must remain 100</h2>
      {draft.scoring.areas.map((area) => (
        <label key={area.id}>
          {area.label}
          <input className="ds-input" type="number" value={area.maxPoints} readOnly />
        </label>
      ))}
    </section>
  );
}
