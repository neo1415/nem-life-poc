import Link from "next/link";
import type { DemoScenarioId } from "../types/demo-scenario.types";
import { buildDemoRoutes } from "../services/demo-route-builder";

export function DemoRouteLinks({ scenarioId }: { scenarioId: DemoScenarioId }) {
  const routes = buildDemoRoutes(scenarioId);
  return (
    <div className="ds-action-row" aria-label="Demo journey links">
      <Link className="button-link" href={routes.detail}>
        View Story
      </Link>
      <Link className="button-link secondary" href={routes.result}>
        Jump to Result
      </Link>
      <Link className="button-link secondary" href={routes.report}>
        View Report
      </Link>
      <Link className="button-link secondary" href={routes.dashboard}>
        View Dashboard
      </Link>
    </div>
  );
}
