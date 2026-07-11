import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CustomerDashboardShell } from "../components/customer-dashboard-shell";
import { DashboardEmptyState } from "../components/dashboard-empty-state";
import { DashboardInvalidState } from "../components/dashboard-invalid-state";
import { makeDashboardView } from "./dashboard-test-utils";

describe("customer dashboard page components", () => {
  it("renders the dashboard preview sections", () => {
    render(
      <CustomerDashboardShell
        dashboard={makeDashboardView({ withLead: true, withReport: true })}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Your NEM Life+ dashboard preview" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Saved result" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /five areas/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Monthly protection guidance" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Protection timeline" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Future verified dashboard" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "View My Report" }).length).toBeGreaterThan(0);
  });

  it("renders safe missing and invalid states", () => {
    const { rerender } = render(<DashboardEmptyState />);
    expect(screen.getByText("No saved protection result found.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Demo Dashboard" })).toHaveAttribute(
      "href",
      "/demo/customer-dashboard",
    );

    rerender(<DashboardInvalidState />);
    expect(
      screen.getByText("We could not load this dashboard preview safely."),
    ).toBeInTheDocument();
    expect(screen.queryByText(/stack trace|raw json/i)).not.toBeInTheDocument();
  });

  it("renders the demo dashboard label", () => {
    render(
      <CustomerDashboardShell
        dashboard={makeDashboardView({ withLead: true })}
        demoTitle="Customer Dashboard Demo - Not a Real Customer Account"
      />,
    );

    expect(
      screen.getByRole("heading", {
        name: "Customer Dashboard Demo - Not a Real Customer Account",
      }),
    ).toBeInTheDocument();
  });
});
