import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { AdminLead } from "../types/admin-lead.types";
import { FollowUpNotesPanel } from "./follow-up-notes-panel";
import { LeadStatusWorkflow } from "./lead-status-workflow";

export function LeadDetailPanel({ lead }: { lead: AdminLead }) {
  return (
    <div className="ds-stack">
      <Card className="ds-stack">
        <h1>{lead.customerName}</h1>
        <dl className="ds-data-list">
          <div>
            <dt>Masked email</dt>
            <dd>{lead.maskedEmail ?? "Not shown"}</dd>
          </div>
          <div>
            <dt>Masked phone</dt>
            <dd>{lead.maskedPhone ?? "Not shown"}</dd>
          </div>
          <div>
            <dt>Consent</dt>
            <dd>
              {lead.consentStatus} at {lead.consentTimestamp}
            </dd>
          </div>
          <div>
            <dt>Score</dt>
            <dd>
              {lead.score}/100 - {lead.scoreBand}
            </dd>
          </div>
          <div>
            <dt>Priority</dt>
            <dd>{lead.priorityReason}</dd>
          </div>
        </dl>
      </Card>
      <Card className="ds-stack">
        <h2>Gaps and recommendations</h2>
        <p>Top gaps: {lead.topGaps.join(", ")}.</p>
        <p>Recommended categories: {lead.recommendedProductCategories.join(", ")}.</p>
        <p>Admin opportunity tags: {lead.adminOpportunityTags.join(", ")}.</p>
        <p>Budget range: {lead.budgetRange}.</p>
      </Card>
      <LeadStatusWorkflow lead={lead} />
      <FollowUpNotesPanel lead={lead} />
      <Card className="ds-stack">
        <h2>Demo links</h2>
        <div className="ds-action-row">
          <Link className="button-link secondary" href="/protection-check/report/preview">
            View Customer Report
          </Link>
          <Link className="button-link secondary" href="/protection-check/result">
            View Result
          </Link>
          <Link className="button-link secondary" href="/protection-check/dashboard-preview">
            View Dashboard Preview
          </Link>
        </div>
        <p className="ds-muted">
          Staff assignment can be connected after authentication and CRM integration are approved.
        </p>
      </Card>
    </div>
  );
}
