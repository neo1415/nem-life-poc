import { Card } from "@/components/ui/card";
import type { LeadIntentConfig } from "../config/lead-intents";
import type { LeadResultContext } from "../types/lead.types";

export function LeadIntentSummary({
  intent,
  context,
}: {
  intent: LeadIntentConfig;
  context: LeadResultContext;
}) {
  return (
    <Card tone="muted" className="ds-stack">
      <p className="ds-eyebrow">Result context</p>
      <h2>{intent.title}</h2>
      <p>{intent.helperText}</p>
      <dl className="ds-data-list">
        <div>
          <dt>Estimated score</dt>
          <dd>
            {context.scoreSummary.score}/{context.scoreSummary.maxScore} -{" "}
            {context.scoreSummary.scoreBandLabel}
          </dd>
        </div>
        <div>
          <dt>Budget range</dt>
          <dd>{context.budgetRange}</dd>
        </div>
        <div>
          <dt>Recommended areas</dt>
          <dd>{context.recommendedProductCategories.slice(0, 3).join(", ")}</dd>
        </div>
      </dl>
    </Card>
  );
}
