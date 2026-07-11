import { describe, expect, it } from "vitest";
import { runConfigPreview } from "../services/config-preview-runner";
import { validateConfigDraft } from "../services/config-validator";
import { makeConfigDraft } from "./config-test-utils";

describe("config preview runner", () => {
  it("runs valid drafts against mock personas", () => {
    const previews = runConfigPreview(makeConfigDraft());
    expect(previews.length).toBeGreaterThan(2);
    expect(previews[0]?.demoLabel).toContain("demo configuration");
  });

  it("blocks invalid drafts", () => {
    const draft = makeConfigDraft();
    const invalid = { ...draft, validation: validateConfigDraft({ ...draft, questions: [] }) };
    expect(runConfigPreview(invalid)).toHaveLength(0);
  });
});
