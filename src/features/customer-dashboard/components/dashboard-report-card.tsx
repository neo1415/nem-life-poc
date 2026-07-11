import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function DashboardReportCard({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  const report = dashboard.reportSummary;
  return (
    <Card className="ds-stack">
      <p className="ds-eyebrow">Report access</p>
      <h2>
        {report.status === "available"
          ? "Report preview available"
          : "Report preview not generated yet"}
      </h2>
      <p className="ds-muted">
        {report.status === "available"
          ? "You can view, print, or save your report preview."
          : "Generate a report preview from your completed result."}
      </p>
      <div className="ds-action-row">
        <Link className="button-link" href={report.primaryCta.href}>
          {report.primaryCta.label}
        </Link>
        {report.secondaryCtas.map((cta) => (
          <Link className="button-link secondary" href={cta.href} key={cta.label}>
            {cta.label}
          </Link>
        ))}
      </div>
    </Card>
  );
}
