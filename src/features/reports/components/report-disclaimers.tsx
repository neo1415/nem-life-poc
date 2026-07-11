import { Card } from "@/components/ui/card";
import type { ReportViewModel } from "../types/report.types";

export function ReportDisclaimers({ report }: { report: ReportViewModel }) {
  return (
    <section aria-labelledby="report-disclaimers" className="ds-stack">
      <h2 id="report-disclaimers">Important notes</h2>
      <Card className="ds-stack">
        {report.disclaimers.map((disclaimer) => (
          <p className="ds-disclaimer" key={disclaimer}>
            {disclaimer}
          </p>
        ))}
      </Card>
    </section>
  );
}
