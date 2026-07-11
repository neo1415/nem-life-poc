import { Card } from "@/components/ui/card";
import type { ReportViewModel } from "../types/report.types";

export function ReportScoreBreakdown({ report }: { report: ReportViewModel }) {
  return (
    <section aria-labelledby="report-breakdown" className="ds-stack">
      <h2 id="report-breakdown">Score breakdown</h2>
      <div className="ds-grid">
        {report.scoreAreas.map((area) => (
          <Card key={area.label} className="ds-stack">
            <div className="ds-action-row">
              <h3>{area.label}</h3>
              <span className="ds-badge ds-badge--neutral">{area.statusLabel}</span>
            </div>
            <p>
              {area.earnedPoints}/{area.maxPoints} points
            </p>
            <p className="ds-muted">{area.explanation}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
