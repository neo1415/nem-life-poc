import type { ReportViewModel } from "../types/report.types";

export function ReportFooter({ report }: { report: ReportViewModel }) {
  return (
    <footer className="ds-report-footer">
      <p>NEM Life+ POC</p>
      <p>Generated {report.generatedDateLabel}</p>
      <p className="ds-muted">Demo report preview. No live NEM system has received this report.</p>
    </footer>
  );
}
