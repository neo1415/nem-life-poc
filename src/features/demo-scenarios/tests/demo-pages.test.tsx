import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DemoHomePage from "@/app/demo/page";
import ExecutiveDemoPage from "@/app/demo/executive/page";
import DemoScenariosPage from "@/app/demo/scenarios/page";
import ScenarioComparePage from "@/app/demo/scenarios/compare/page";
import DemoResetPage from "@/app/demo/reset/page";
import ScenarioDetailPage from "@/app/demo/scenarios/[scenarioId]/page";

describe("demo scenario pages", () => {
  it("renders demo home, executive, selector, compare, and reset pages", () => {
    render(<DemoHomePage />);
    expect(screen.getByRole("heading", { name: /choose a guided/i })).toBeInTheDocument();
    cleanup();
    render(<ExecutiveDemoPage />);
    expect(screen.getByRole("heading", { name: /NEM Life\+ Executive Demo/i })).toBeInTheDocument();
    cleanup();
    render(<DemoScenariosPage />);
    expect(screen.getByText(/Tunde Adebayo/i)).toBeInTheDocument();
    cleanup();
    render(<ScenarioComparePage />);
    expect(screen.getByRole("table")).toBeInTheDocument();
    cleanup();
    render(<DemoResetPage />);
    expect(screen.getByRole("button", { name: /reset demo data/i })).toBeInTheDocument();
  });

  it("renders valid and invalid scenario detail states", async () => {
    render(await ScenarioDetailPage({ params: Promise.resolve({ scenarioId: "business_owner" }) }));
    expect(screen.getByRole("heading", { name: /Chinedu Eze/i })).toBeInTheDocument();
    cleanup();
    render(await ScenarioDetailPage({ params: Promise.resolve({ scenarioId: "bad" }) }));
    expect(screen.getByRole("heading", { name: /not found/i })).toBeInTheDocument();
  });
});
