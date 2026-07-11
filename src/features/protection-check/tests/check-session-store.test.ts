import { describe, expect, it } from "vitest";
import { defaultQuestionCatalog } from "../config/questions";
import { createSession } from "../services/question-engine";
import {
  clearCheckSession,
  loadCheckSession,
  saveCheckSession,
} from "../services/check-session-store";

describe("check session store", () => {
  it("saves, loads, validates, and clears a POC-safe session", () => {
    const session = createSession(defaultQuestionCatalog, { id: "store-test" });

    expect(saveCheckSession(session, window.sessionStorage)).toBe(true);
    expect(loadCheckSession(window.sessionStorage)).toMatchObject({
      status: "success",
      session: { id: "store-test" },
    });

    clearCheckSession(window.sessionStorage);
    expect(loadCheckSession(window.sessionStorage)).toEqual({ status: "not_found" });
  });

  it("rejects invalid stored session JSON", () => {
    window.sessionStorage.setItem("nem-life-plus:protection-check-session:v1", "{bad");

    expect(loadCheckSession(window.sessionStorage)).toEqual({ status: "invalid" });
  });
});
