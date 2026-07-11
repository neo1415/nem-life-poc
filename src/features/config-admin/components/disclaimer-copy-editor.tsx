import type { ConfigDraft } from "../types/config-admin.types";

export function DisclaimerCopyEditor({ draft }: { draft: ConfigDraft }) {
  return (
    <section className="ds-card" aria-labelledby="copy-title">
      <p className="ds-eyebrow">Disclaimer copy</p>
      <h2 id="copy-title">Required concepts cannot be removed</h2>
      {Object.entries(draft.reportCopy).map(([key, value]) => (
        <label key={key}>
          {key}
          <textarea className="ds-input" value={value} readOnly />
        </label>
      ))}
    </section>
  );
}
