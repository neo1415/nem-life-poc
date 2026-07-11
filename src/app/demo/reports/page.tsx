import { ReportPageShell } from "@/features/reports/components/report-page-shell";
import { ReportPreview } from "@/features/reports/components/report-preview";
import { buildDemoReportViewModel } from "@/features/reports/services/demo-report-fixture";

export default function DemoReportsPage() {
  const report = buildDemoReportViewModel();
  return (
    <ReportPageShell>
      <ReportPreview report={report} />
    </ReportPageShell>
  );
}
