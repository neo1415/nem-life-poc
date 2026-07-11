"use client";

import { useState } from "react";
import type { AdminLead, AdminLeadStatus } from "../types/admin-lead.types";
import {
  allowedNextStatuses,
  canTransitionLeadStatus,
  statusLabel,
} from "../services/lead-status-workflow";

export function LeadStatusWorkflow({ lead }: { lead: AdminLead }) {
  const [status, setStatus] = useState<AdminLeadStatus>(lead.status);
  const next = allowedNextStatuses(status);
  return (
    <section aria-labelledby="status-workflow-title" className="ds-stack">
      <h2 id="status-workflow-title">Status workflow</h2>
      <p>Current status: {statusLabel(status)}.</p>
      <p className="ds-muted">Status changes are local demo actions and do not update CRM.</p>
      <div className="ds-action-row">
        {next.map((item) => (
          <button
            className="ds-button ds-button--outline ds-button--md"
            key={item}
            onClick={() => {
              if (canTransitionLeadStatus(status, item)) setStatus(item);
            }}
          >
            <span>{statusLabel(item)}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
