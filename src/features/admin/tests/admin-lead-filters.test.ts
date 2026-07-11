import { describe, expect, it } from "vitest";
import { filterAdminLeads } from "../services/admin-lead-filters";
import { makeAdminLeads } from "./admin-test-utils";

describe("admin lead filters", () => {
  it("filters by priority and searches safe fields", () => {
    const leads = makeAdminLeads();

    expect(filterAdminLeads(leads, { priority: "very_high" })).toHaveLength(1);
    expect(filterAdminLeads(leads, { search: "ad***" })).toHaveLength(1);
    expect(filterAdminLeads(leads, { ctaIntent: "ask_advisor" })).toHaveLength(2);
  });
});
