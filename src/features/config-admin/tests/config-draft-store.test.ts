import { describe, expect, it } from "vitest";
import { loadConfigDraft, resetConfigDraft, saveConfigDraft } from "../services/config-draft-store";
import { makeConfigDraft } from "./config-test-utils";

describe("config draft store", () => {
  it("falls back safely and saves demo drafts", () => {
    expect(loadConfigDraft(undefined).source).toBe("default_code_config");
    const store = new Map<string, string>();
    const storage = {
      length: 0,
      clear: () => store.clear(),
      getItem: (key: string) => store.get(key) ?? null,
      key: (index: number) => [...store.keys()][index] ?? null,
      setItem: (key: string, value: string) => void store.set(key, value),
      removeItem: (key: string) => void store.delete(key),
    };
    expect(saveConfigDraft(storage, makeConfigDraft()).status).toBe("saved");
    expect(loadConfigDraft(storage).source).toBe("demo_admin_draft");
    expect(resetConfigDraft(storage).source).toBe("reset_default");
  });
});
