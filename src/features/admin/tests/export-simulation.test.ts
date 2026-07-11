import { describe, expect, it } from "vitest";
import { buildSafeCsv, buildSafeExportRows } from "../services/export-simulation";
import { makeAdminLeads } from "./admin-test-utils";

describe("export simulation", () => {
  it("exports only safe masked demo fields", () => {
    const leads = makeAdminLeads();
    const rows = buildSafeExportRows(leads);
    const csv = buildSafeCsv(leads);

    expect(rows[0]?.maskedEmail).toContain("***");
    expect(csv).toContain("Export simulation");
    expect(csv).not.toContain("ada@example.com");
    expect(csv).not.toContain("rawAnswers");
    expect(csv).not.toContain("CRM synced");
  });
});
