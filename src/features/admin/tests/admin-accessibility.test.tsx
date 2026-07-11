import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LeadFilters } from "../components/lead-filters";
import { LeadList } from "../components/lead-list";
import { LeadSearch } from "../components/lead-search";
import { LeadStatusWorkflow } from "../components/lead-status-workflow";
import { makeAdminLead, makeAdminLeads } from "./admin-test-utils";

describe("admin accessibility basics", () => {
  it("labels filters, search, statuses, actions, and workflow buttons", () => {
    render(
      <div>
        <LeadSearch filters={{}} onChange={() => undefined} />
        <LeadFilters filters={{}} onChange={() => undefined} />
        <LeadList leads={makeAdminLeads()} />
        <LeadStatusWorkflow lead={makeAdminLead()} />
      </div>,
    );

    expect(screen.getByLabelText("Search demo leads")).toBeInTheDocument();
    expect(screen.getByLabelText("Priority")).toBeInTheDocument();
    expect(screen.getByLabelText("Status")).toBeInTheDocument();
    expect(screen.getAllByText(/priority/i).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "View Lead Detail" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });
});
