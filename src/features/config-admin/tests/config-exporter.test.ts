import { describe, expect, it } from "vitest";
import { buildConfigExport } from "../services/config-exporter";
import { validateConfigDraft } from "../services/config-validator";
import { makeConfigDraft } from "./config-test-utils";

describe("config exporter", () => {
  it("exports safe demo JSON and excludes PII", () => {
    const result = buildConfigExport(makeConfigDraft());
    expect(result.status).toBe("success");
    if (result.status === "success") {
      expect(result.json).toContain("not published to live NEM systems");
      expect(result.json).not.toContain("customerName");
      expect(result.json).not.toContain("secret");
    }
  });

  it("blocks invalid exports", () => {
    const draft = makeConfigDraft();
    const invalid = { ...draft, validation: validateConfigDraft({ ...draft, questions: [] }) };
    expect(buildConfigExport(invalid).status).toBe("blocked");
  });
});
