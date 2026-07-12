import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { adminDemoWarning } from "@/lib/security/demo-boundary";
import { AdminDemoBanner } from "../components/admin-demo-banner";
import { AdminEmptyState } from "../components/admin-empty-state";
import { ExportSimulationPanel } from "../components/export-simulation-panel";
import { LeadList } from "../components/lead-list";
import { LeadMetricsGrid } from "../components/lead-metrics-grid";
import { ProductOpportunitySummary } from "../components/product-opportunity-summary";
import { computeAdminLeadMetrics } from "../services/admin-lead-metrics";
import { buildProductOpportunitySummary } from "../services/product-opportunity-summary";
import { makeAdminLeads } from "./admin-test-utils";

describe("admin lead dashboard components", () => {
  it("renders overview pieces and demo warning", () => {
    const leads = makeAdminLeads();
    render(
      <div>
        <AdminDemoBanner />
        <LeadMetricsGrid metrics={computeAdminLeadMetrics(leads)} />
        <ProductOpportunitySummary opportunities={buildProductOpportunitySummary(leads)} />
        <LeadList leads={leads} />
      </div>,
    );

    expect(screen.getByText(adminDemoWarning)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Lead metrics" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Lead list" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "View Lead Detail" }).length).toBeGreaterThan(0);
  });

  it("renders empty and export states", () => {
    const { rerender } = render(<AdminEmptyState />);
    expect(screen.getByText("No demo leads yet.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Mock Admin Demo" })).toHaveAttribute(
      "href",
      "/demo/admin",
    );

    rerender(<ExportSimulationPanel leads={makeAdminLeads()} />);
    expect(screen.getByLabelText("CSV export preview")).toHaveTextContent("Export simulation");
  });
});
