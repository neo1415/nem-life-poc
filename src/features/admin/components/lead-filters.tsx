import type { AdminLeadFilters } from "../types/admin-lead.types";

export function LeadFilters({
  filters,
  onChange,
}: {
  filters: AdminLeadFilters;
  onChange: (filters: AdminLeadFilters) => void;
}) {
  return (
    <section aria-label="Lead filters" className="ds-action-row">
      <label className="ds-field">
        <span className="ds-label">Priority</span>
        <select
          className="ds-input"
          value={filters.priority ?? "all"}
          onChange={(event) =>
            onChange({ ...filters, priority: event.target.value as AdminLeadFilters["priority"] })
          }
        >
          <option value="all">All priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="very_high">Very high</option>
        </select>
      </label>
      <label className="ds-field">
        <span className="ds-label">Status</span>
        <select
          className="ds-input"
          value={filters.status ?? "all"}
          onChange={(event) =>
            onChange({ ...filters, status: event.target.value as AdminLeadFilters["status"] })
          }
        >
          <option value="all">All statuses</option>
          <option value="new">New</option>
          <option value="reviewed">Reviewed</option>
          <option value="contact_pending">Contact pending</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="converted_demo">Converted demo</option>
        </select>
      </label>
    </section>
  );
}
