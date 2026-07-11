import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CustomerDashboardShell } from "../components/customer-dashboard-shell";
import { makeDashboardView } from "./dashboard-test-utils";

describe("customer dashboard accessibility basics", () => {
  it("uses semantic headings, text statuses, and accessible CTAs", () => {
    render(
      <CustomerDashboardShell
        dashboard={makeDashboardView({ withLead: true, withReport: true })}
      />,
    );

    expect(screen.getAllByRole("heading").length).toBeGreaterThan(10);
    expect(screen.getAllByText(/Status:/i).length).toBeGreaterThan(3);
    expect(screen.getAllByText(/Gap found|Review|Strong/).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "Request a Review" })).toHaveAttribute(
      "href",
      "/protection-check/lead?intent=request_review",
    );
    expect(screen.getByText(/This dashboard preview does not connect/i)).toBeInTheDocument();
  });
});
