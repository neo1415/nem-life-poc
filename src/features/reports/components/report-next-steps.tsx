import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { ReportViewModel } from "../types/report.types";

export function ReportNextSteps({ report }: { report: ReportViewModel }) {
  return (
    <section aria-labelledby="report-next" className="ds-stack">
      <h2 id="report-next">Next steps</h2>
      <Card className="ds-stack">
        <ol className="ds-list">
          {report.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="ds-action-row no-print">
          {report.ctaLinks.map((cta) => (
            <Link key={cta.label} className="button-link secondary" href={cta.href}>
              {cta.label}
            </Link>
          ))}
        </div>
      </Card>
    </section>
  );
}
