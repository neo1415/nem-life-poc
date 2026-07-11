import type { ConfigPreviewResult } from "../types/config-admin.types";

export function ConfigPreviewPanel({ previews }: { previews: ConfigPreviewResult[] }) {
  return (
    <section className="ds-card" aria-labelledby="preview-title">
      <p className="ds-eyebrow">Preview runner</p>
      <h2 id="preview-title">Demo persona impact</h2>
      <ul className="ds-stack">
        {previews.map((preview) => (
          <li key={preview.label}>
            <strong>
              {preview.label}: {preview.score}/100
            </strong>
            <p>
              {preview.scoreBand} · priority {preview.leadPriority}
            </p>
            <p>{preview.recommendations.join(", ")}</p>
            <span>{preview.demoLabel}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
