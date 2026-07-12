import { describe, expect, it } from "vitest";
import { buildSafeCsv, buildSafeExportRows } from "@/features/admin/services/export-simulation";
import { makeAdminLeads } from "@/features/admin/tests/admin-test-utils";
import { safeAdminExportFields } from "@/lib/security/export-safety";

describe("export safety", () => {
  it("exports only approved demo-safe fields", () => {
    const [row] = buildSafeExportRows(makeAdminLeads());
    expect(Object.keys(row ?? {})).toEqual([...safeAdminExportFields]);
  });

  it("masks contact and does not include raw contact values", () => {
    const csv = buildSafeCsv(makeAdminLeads());
    expect(csv).toContain("Export simulation");
    expect(csv).toContain("ad***@example.com");
    expect(csv).not.toContain("ada@example.com");
    expect(csv).not.toContain("+2348012345678");
  });
});
