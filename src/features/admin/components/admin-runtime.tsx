"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import type { Lead } from "@/features/leads/types/lead.types";
import { buildAdminLeadViewModel } from "../services/admin-lead-view-model";
import { filterAdminLeads } from "../services/admin-lead-filters";
import { loadAdminLeads } from "../services/admin-lead-loader";
import { computeAdminLeadMetrics } from "../services/admin-lead-metrics";
import { buildMockDemoLeads } from "../services/mock-admin-leads";
import { buildProductOpportunitySummary } from "../services/product-opportunity-summary";
import type { AdminLead, AdminLeadFilters } from "../types/admin-lead.types";
import { AdminDemoBanner } from "./admin-demo-banner";
import { AdminEmptyState } from "./admin-empty-state";
import { AdminInvalidDataNotice } from "./admin-invalid-data-notice";
import { ExportSimulationPanel } from "./export-simulation-panel";
import { LeadDetailPanel } from "./lead-detail-panel";
import { LeadFilters } from "./lead-filters";
import { LeadList } from "./lead-list";
import { LeadMetricsGrid } from "./lead-metrics-grid";
import { LeadSearch } from "./lead-search";
import { ProductOpportunitySummary } from "./product-opportunity-summary";

type Mode = "overview" | "list" | "detail" | "export" | "demo";

export function AdminRuntime({ mode }: { mode: Mode }) {
  const params = useParams<{ leadId?: string }>();
  const [filters, setFilters] = useState<AdminLeadFilters>({});
  const loaded = useMemo(() => loadLeads(mode), [mode]);
  const leads = loaded.leads;
  const filtered = filterAdminLeads(leads, filters);
  const metrics = computeAdminLeadMetrics(leads);
  const opportunities = buildProductOpportunitySummary(leads);
  const selected = leads.find((lead) => lead.id === params.leadId) ?? leads[0];

  return (
    <main className="ds-page ds-stack">
      <AdminDemoBanner title={mode === "demo" ? "Admin Demo - Not Production CRM" : undefined} />
      <AdminInvalidDataNotice count={loaded.invalidCount} />
      {leads.length === 0 ? <AdminEmptyState /> : null}
      {leads.length > 0 && mode === "export" ? <ExportSimulationPanel leads={leads} /> : null}
      {leads.length > 0 && mode === "detail" && selected ? (
        <LeadDetailPanel lead={selected} />
      ) : null}
      {leads.length > 0 && (mode === "overview" || mode === "demo") ? (
        <>
          <LeadMetricsGrid metrics={metrics} />
          <ProductOpportunitySummary opportunities={opportunities} />
          <LeadList leads={leads.slice(0, 4)} />
        </>
      ) : null}
      {leads.length > 0 && mode === "list" ? (
        <>
          <LeadMetricsGrid metrics={metrics} />
          <LeadSearch filters={filters} onChange={setFilters} />
          <LeadFilters filters={filters} onChange={setFilters} />
          <LeadList leads={filtered} />
        </>
      ) : null}
    </main>
  );
}

function loadLeads(mode: Mode): { leads: AdminLead[]; invalidCount: number } {
  if (mode === "demo") {
    return { leads: mapLeads(buildMockDemoLeads()), invalidCount: 0 };
  }
  if (typeof window === "undefined") return { leads: [], invalidCount: 0 };
  const loaded = loadAdminLeads(window.sessionStorage);
  return { leads: loaded.leads, invalidCount: loaded.invalidCount };
}

function mapLeads(leads: Lead[]) {
  return leads.flatMap((lead) => {
    const view = buildAdminLeadViewModel(lead);
    return view ? [view] : [];
  });
}
