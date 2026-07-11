import { Card } from "@/components/ui/card";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function SavedResultCard({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  return (
    <section aria-labelledby="saved-result-title" className="ds-stack">
      <div className="ds-card__topline">
        <h2 id="saved-result-title">Saved result</h2>
        <span className="ds-badge ds-badge--brand">Estimated</span>
      </div>
      <Card tone="accent" className="ds-stack">
        <p className="ds-metric">
          {dashboard.savedResult.score}/{dashboard.savedResult.maxScore}
        </p>
        <p>
          <strong>{dashboard.savedResult.scoreBand}</strong> -{" "}
          {dashboard.savedResult.scoreExplanation}
        </p>
        <dl className="ds-data-list">
          <div>
            <dt>Review status</dt>
            <dd>{dashboard.savedResult.reviewStatus}</dd>
          </div>
          <div>
            <dt>Confidence</dt>
            <dd>{dashboard.savedResult.confidence}</dd>
          </div>
        </dl>
        <p className="ds-disclaimer">{dashboard.savedResult.disclaimer}</p>
      </Card>
    </section>
  );
}
