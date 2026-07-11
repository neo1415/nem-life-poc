import { Card } from "@/components/ui/card";
import type { ReportViewModel } from "../types/report.types";

export function ReportKeyFindings({ report }: { report: ReportViewModel }) {
  return (
    <section aria-labelledby="report-gaps" className="ds-stack">
      <h2 id="report-gaps">Key areas to review</h2>
      <div className="ds-grid">
        {report.keyGaps.map((gap) => (
          <Card key={`${gap.title}-${gap.relatedArea}`} className="ds-stack">
            <span className="ds-badge ds-badge--warning">{gap.severityLabel}</span>
            <h3>{gap.title}</h3>
            <p>{gap.explanation}</p>
            <p className="ds-muted">
              Area: {gap.relatedArea}. Confidence: {gap.confidenceLabel}.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
