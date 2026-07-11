export function ConfigResetPanel() {
  return (
    <section className="ds-card" aria-labelledby="reset-title">
      <p className="ds-eyebrow">Reset</p>
      <h2 id="reset-title">Reset to default code config</h2>
      <button className="ds-button" type="button">
        Reset demo draft
      </button>
      <p>This clears only demo browser storage in a future interactive version.</p>
    </section>
  );
}
