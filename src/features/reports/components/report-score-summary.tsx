import { Card } from "@/components/ui/card";
import type { ReportViewModel } from "../types/report.types";

export function ReportScoreSummary({ report }: { report: ReportViewModel }) {
  return (
    <section aria-labelledby="report-score" className="ds-stack">
      <h2 id="report-score">Estimated score summary</h2>
      <Card tone="accent" className="ds-stack">
        <p className="ds-metric">
          {report.score.score}/{report.score.maxScore}
        </p>
        <p>
          <strong>{report.scoreBand}</strong> - {report.score.explanation}
        </p>
        <p className="ds-muted">Confidence: {report.score.confidenceExplanation}</p>
        <p className="ds-disclaimer">{report.disclaimers[0]}</p>
      </Card>
    </section>
  );
}
