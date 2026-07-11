import type { buildConfigExport } from "../services/config-exporter";

type ExportResult = ReturnType<typeof buildConfigExport>;

export function ConfigExportPanel({ result }: { result: ExportResult }) {
  return (
    <section className="ds-card" aria-labelledby="export-title">
      <p className="ds-eyebrow">Export simulation</p>
      <h2 id="export-title">
        Export simulation - this file has not been published to live NEM systems.
      </h2>
      {result.status === "success" ? (
        <textarea
          className="ds-input"
          aria-label="Config export JSON preview"
          value={result.json}
          readOnly
        />
      ) : (
        <p>{result.message}</p>
      )}
    </section>
  );
}
