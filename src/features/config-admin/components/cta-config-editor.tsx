import type { ConfigDraft } from "../types/config-admin.types";

export function CtaConfigEditor({ draft }: { draft: ConfigDraft }) {
  return (
    <section className="ds-card" aria-labelledby="cta-title">
      <p className="ds-eyebrow">CTA config</p>
      <h2 id="cta-title">Intent labels and safe routes</h2>
      <ul className="ds-stack">
        {draft.ctas.slice(0, 10).map((cta) => (
          <li key={cta.intent}>
            <label>
              {cta.intent}
              <input className="ds-input" value={cta.label} readOnly />
            </label>
            <p>
              {cta.href} · {cta.level} · {cta.isDemoLink ? "Demo" : "Needs review"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
