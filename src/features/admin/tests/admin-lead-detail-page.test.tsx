import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LeadDetailPanel } from "../components/lead-detail-panel";
import { makeAdminLead } from "./admin-test-utils";

describe("admin lead detail", () => {
  it("renders lead detail, status workflow, notes, and demo links", () => {
    render(<LeadDetailPanel lead={makeAdminLead()} />);

    expect(screen.getByRole("heading", { name: "Ada Nwosu" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Status workflow" })).toBeInTheDocument();
    expect(screen.getByLabelText("Demo follow-up note")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Customer Report" })).toBeInTheDocument();
    expect(screen.getByText(/Staff assignment can be connected/i)).toBeInTheDocument();
  });
});
