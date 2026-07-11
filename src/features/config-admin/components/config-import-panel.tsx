export function ConfigImportPanel() {
  return (
    <section className="ds-card" aria-labelledby="import-title">
      <p className="ds-eyebrow">Import simulation</p>
      <h2 id="import-title">Paste JSON preview</h2>
      <label>
        Demo JSON only
        <textarea className="ds-input" placeholder="Paste validated demo config JSON" readOnly />
      </label>
      <p>Imports are parsed as JSON only, validated, and never automatically published.</p>
    </section>
  );
}
