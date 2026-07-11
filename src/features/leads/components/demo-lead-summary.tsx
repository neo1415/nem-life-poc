import { Card } from "@/components/ui/card";
import type { Lead } from "../types/lead.types";
import { contactMethodLabel } from "../services/lead-view-model";

export function DemoLeadSummary({ lead }: { lead: Lead }) {
  return (
    <Card className="ds-stack">
      <h2>View Demo Lead Summary</h2>
      <dl className="ds-data-list">
        <div>
          <dt>Name</dt>
          <dd>{lead.fullName}</dd>
        </div>
        <div>
          <dt>Contact preference</dt>
          <dd>{contactMethodLabel(lead.preferredContactMethod)}</dd>
        </div>
        <div>
          <dt>Intent</dt>
          <dd>{lead.ctaIntent.replaceAll("_", " ")}</dd>
        </div>
        <div>
          <dt>Estimated score</dt>
          <dd>
            {lead.scoreSummary.score}/{lead.scoreSummary.maxScore} -{" "}
            {lead.scoreSummary.scoreBandLabel}
          </dd>
        </div>
        <div>
          <dt>Recommended categories</dt>
          <dd>{lead.recommendedProductCategories.slice(0, 4).join(", ")}</dd>
        </div>
      </dl>
    </Card>
  );
}
