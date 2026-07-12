import type { DemoScenarioId } from "../types/demo-scenario.types";
import { isDemoScenarioId } from "./demo-scenario-loader";

export function buildDemoRoutes(id: DemoScenarioId) {
  const encoded = encodeURIComponent(id);
  return {
    start: `/protection-check/start?scenario=${encoded}`,
    detail: `/demo/scenarios/${encoded}`,
    result: `/demo/customer-result?scenario=${encoded}`,
    report: `/demo/reports?scenario=${encoded}`,
    dashboard: `/demo/customer-dashboard?scenario=${encoded}`,
    admin: "/admin/leads",
    compare: "/demo/scenarios/compare",
  };
}

export function safeScenarioPath(id: string, path: keyof ReturnType<typeof buildDemoRoutes>) {
  return isDemoScenarioId(id) ? buildDemoRoutes(id)[path] : undefined;
}
