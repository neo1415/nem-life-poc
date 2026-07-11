import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function LeadFollowUpCard({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  const lead = dashboard.leadFollowUpSummary;
  return (
    <Card className="ds-stack">
      <p className="ds-eyebrow">Follow-up</p>
      <h2>
        {lead.status === "saved_demo" ? "Follow-up request saved" : "No follow-up requested yet"}
      </h2>
      <p>{lead.copy}</p>
      {lead.preferredContactMethod ? (
        <p className="ds-muted">
          Preferred contact method: {lead.preferredContactMethod.replace(/_/g, " ")}.
        </p>
      ) : null}
      <p className="ds-muted">
        Consent captured: {lead.consentCaptured ? "Yes, in this demo" : "No follow-up consent yet"}.
      </p>
      <div className="ds-action-row">
        {lead.ctas.map((cta) => (
          <Link className="button-link secondary" href={cta.href} key={cta.label}>
            {cta.label}
          </Link>
        ))}
      </div>
    </Card>
  );
}
