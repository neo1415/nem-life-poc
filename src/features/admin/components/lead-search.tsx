import type { AdminLeadFilters } from "../types/admin-lead.types";

export function LeadSearch({
  filters,
  onChange,
}: {
  filters: AdminLeadFilters;
  onChange: (filters: AdminLeadFilters) => void;
}) {
  return (
    <label className="ds-field">
      <span className="ds-label">Search demo leads</span>
      <input
        className="ds-input"
        value={filters.search ?? ""}
        onChange={(event) => onChange({ ...filters, search: event.target.value })}
        placeholder="Name, masked contact, category, source, or intent"
      />
    </label>
  );
}
