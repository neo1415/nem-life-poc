import Link from "next/link";
import { Callout } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import type { Lead } from "../types/lead.types";
import { buildLeadConfirmationViewModel } from "../services/lead-view-model";
import { DemoLeadSummary } from "./demo-lead-summary";

export function LeadConfirmationPanel({ lead }: { lead: Lead }) {
  const view = buildLeadConfirmationViewModel(lead);
  return (
    <div className="ds-stack">
      <Card tone="success" className="ds-stack">
        <p className="ds-eyebrow">Demo lead saved</p>
        <h1>Your details have been saved for follow-up.</h1>
        <p>
          Thanks, {view.customerFirstName}. {view.confirmationMessage}
        </p>
        <Callout title="Demo note" tone="warning">
          {view.demoNote}
        </Callout>
        <p className="ds-muted">
          Preferred contact: {view.contactMethodLabel}. Next step: {view.nextStepCopy}
        </p>
        <div className="ds-action-row">
          {lead.ctaIntent === "send_report" ? (
            <>
              <Link className="button-link" href="/protection-check/report/preview">
                View Report
              </Link>
              <Link className="button-link secondary" href="/protection-check/report/email-preview">
                Preview Email
              </Link>
            </>
          ) : null}
          <Link className="button-link" href="/protection-check/result">
            Return to My Result
          </Link>
          <Link className="button-link secondary" href="/protection-check/start">
            Start Again
          </Link>
          <Link className="button-link secondary" href="/demo/leads">
            View Demo Lead Summary
          </Link>
        </div>
      </Card>
      <DemoLeadSummary lead={lead} />
    </div>
  );
}
