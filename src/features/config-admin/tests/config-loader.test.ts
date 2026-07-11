import { describe, expect, it } from "vitest";
import { loadDefaultConfigDraft } from "../services/config-loader";

describe("config loader", () => {
  it("loads default config with no customer PII", () => {
    const draft = loadDefaultConfigDraft();
    expect(draft.source).toBe("default_code_config");
    expect(draft.questions.length).toBeGreaterThan(0);
    expect(JSON.stringify(draft)).not.toContain("maskedEmail");
  });
});
