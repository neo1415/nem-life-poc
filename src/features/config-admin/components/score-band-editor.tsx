import type { ConfigDraft } from "../types/config-admin.types";

export function ScoreBandEditor({ draft }: { draft: ConfigDraft }) {
  return (
    <section className="ds-card" aria-labelledby="band-title">
      <p className="ds-eyebrow">Score bands</p>
      <h2 id="band-title">Coverage from 0 to 100</h2>
      <ul>
        {draft.scoring.scoreBands.map((band) => (
          <li key={band.id}>
            {band.min}-{band.max}: {band.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
