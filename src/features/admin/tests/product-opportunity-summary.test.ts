import { describe, expect, it } from "vitest";
import { buildProductOpportunitySummary } from "../services/product-opportunity-summary";
import { makeAdminLeads } from "./admin-test-utils";

describe("product opportunity summary", () => {
  it("groups opportunities without revenue or eligibility claims", () => {
    const opportunities = buildProductOpportunitySummary(makeAdminLeads());
    const serialized = JSON.stringify(opportunities);

    expect(opportunities.length).toBeGreaterThan(0);
    expect(serialized).not.toContain("revenue");
    expect(serialized).not.toContain("eligible");
  });
});
