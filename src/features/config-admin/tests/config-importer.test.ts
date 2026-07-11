import { describe, expect, it } from "vitest";
import { importConfigDraft } from "../services/config-importer";
import { makeConfigDraft } from "./config-test-utils";

describe("config importer", () => {
  it("imports valid demo JSON without publishing", () => {
    const result = importConfigDraft(JSON.stringify(makeConfigDraft()));
    expect(result.status).toBe("success");
    if (result.status === "success") expect(result.draft.source).toBe("imported_demo_json");
  });

  it("rejects invalid JSON and function-like content", () => {
    expect(importConfigDraft("{bad").status).toBe("error");
    expect(importConfigDraft('{"x":"function() {}"}').status).toBe("error");
  });
});
