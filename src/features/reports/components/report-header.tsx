import { Card } from "@/components/ui/card";
import type { ReportViewModel } from "../types/report.types";

export function ReportHeader({ report }: { report: ReportViewModel }) {
  return (
    <header className="ds-report-header ds-stack">
      <div className="ds-action-row">
        <p className="ds-eyebrow">NEM Life+</p>
        <span className="ds-badge ds-badge--brand">{report.demoModeLabel ?? "Report preview"}</span>
      </div>
      <h1>Family Protection Report</h1>
      <p className="ds-lede">{report.summary}</p>
      <Card tone="muted">
        <dl className="ds-data-list">
          <div>
            <dt>Report date</dt>
            <dd>{report.generatedDateLabel}</dd>
          </div>
          <div>
            <dt>Customer</dt>
            <dd>{report.customer.displayName ?? "Family Protection Check customer"}</dd>
          </div>
          {report.customer.maskedEmail || report.customer.maskedPhone ? (
            <div>
              <dt>Contact shown on report</dt>
              <dd>{report.customer.maskedEmail ?? report.customer.maskedPhone}</dd>
            </div>
          ) : null}
        </dl>
      </Card>
    </header>
  );
}
