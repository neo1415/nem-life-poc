import { Card } from "@/components/ui/card";
import type { ReportViewModel } from "../types/report.types";

export function ReportBudgetGuidance({ report }: { report: ReportViewModel }) {
  return (
    <section aria-labelledby="report-budget" className="ds-stack">
      <h2 id="report-budget">Budget guidance</h2>
      <Card className="ds-stack">
        <p>
          Selected range: <strong>{report.budgetPreview.selectedBudgetLabel}</strong>
        </p>
        <p>{report.budgetPreview.guidance}</p>
        <p className="ds-disclaimer">{report.budgetPreview.disclaimer}</p>
      </Card>
    </section>
  );
}
