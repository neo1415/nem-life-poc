import { describe, expect, it } from "vitest";
import { buildDemoRoutes, safeScenarioPath } from "../services/demo-route-builder";

describe("demo route builder", () => {
  it("builds encoded scenario routes and rejects invalid IDs", () => {
    const routes = buildDemoRoutes("business_owner");
    expect(routes.result).toBe("/demo/customer-result?scenario=business_owner");
    expect(routes.report).toContain("scenario=business_owner");
    expect(safeScenarioPath("bad/id", "result")).toBeUndefined();
  });
});
