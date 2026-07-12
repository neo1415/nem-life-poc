import { ReportPageShell } from "@/features/reports/components/report-page-shell";
import { ReportPreview } from "@/features/reports/components/report-preview";
import { buildDemoReportViewModel } from "@/features/reports/services/demo-report-fixture";

export default async function DemoReportsPage({
  searchParams,
}: {
  searchParams: Promise<{ scenario?: string }>;
}) {
  const { scenario } = await searchParams;
  const report = buildDemoReportViewModel(scenario);
  return (
    <ReportPageShell>
      <ReportPreview report={report} />
    </ReportPageShell>
  );
}
