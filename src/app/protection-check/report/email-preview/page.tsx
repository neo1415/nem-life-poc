import { ReportPageShell } from "@/features/reports/components/report-page-shell";
import { ReportRuntimePage } from "@/features/reports/components/report-runtime-page";

export default function ProtectionCheckReportEmailPreviewPage() {
  return (
    <ReportPageShell>
      <ReportRuntimePage mode="email" />
    </ReportPageShell>
  );
}
