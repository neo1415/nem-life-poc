import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { AdminLead } from "../types/admin-lead.types";
import { statusLabel } from "../services/lead-status-workflow";

export function LeadList({ leads }: { leads: AdminLead[] }) {
  return (
    <section aria-labelledby="lead-list-title" className="ds-stack">
      <h2 id="lead-list-title">Lead list</h2>
      <div className="ds-admin-lead-table" role="list">
        {leads.map((lead) => (
          <Card className="ds-admin-lead-row" key={lead.id} role="listitem">
            <div className="ds-card__topline">
              <h3>{lead.customerName}</h3>
              <span className="ds-badge ds-badge--warning">
                {lead.leadPriority.replace("_", " ")} priority
              </span>
            </div>
            <dl className="ds-data-list">
              <div>
                <dt>Masked contact</dt>
                <dd>{lead.maskedEmail ?? lead.maskedPhone ?? "Not shown"}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{statusLabel(lead.status)}</dd>
              </div>
              <div>
                <dt>Score</dt>
                <dd>
                  {lead.score}/100 - {lead.scoreBand}
                </dd>
              </div>
              <div>
                <dt>CTA intent</dt>
                <dd>{lead.ctaIntent.replace(/_/g, " ")}</dd>
              </div>
            </dl>
            <p className="ds-admin-lead-row__summary">
              {lead.topGaps.join(", ") || "No gaps listed"}
            </p>
            <Link className="button-link" href={`/admin/leads/${lead.id}`}>
              View Lead Detail
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
