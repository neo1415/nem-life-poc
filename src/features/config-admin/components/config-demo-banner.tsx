export function ConfigDemoBanner({
  title = "Configuration demo - changes are for preview only and are not published to live NEM systems.",
}) {
  return (
    <section className="ds-card ds-card--warning" aria-label="Configuration demo boundary">
      <p className="ds-eyebrow">Preview only</p>
      <h1>{title}</h1>
      <p>This is not a production-secure admin console. No live NEM settings are changed.</p>
    </section>
  );
}
