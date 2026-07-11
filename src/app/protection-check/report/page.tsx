import { ReportPageShell } from "@/features/reports/components/report-page-shell";
import { ReportRuntimePage } from "@/features/reports/components/report-runtime-page";

export default function ProtectionCheckReportPage() {
  return (
    <ReportPageShell>
      <ReportRuntimePage mode="landing" />
    </ReportPageShell>
  );
}
