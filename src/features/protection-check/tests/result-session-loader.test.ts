import { describe, expect, it } from "vitest";
import { saveCheckSession } from "../services/check-session-store";
import { loadCustomerResult } from "../services/result-session-loader";
import { makeCompletedSession } from "./customer-result-test-utils";

describe("result session loader", () => {
  it("handles missing storage safely", () => {
    expect(loadCustomerResult(undefined)).toEqual({ status: "missing" });
  });

  it("rejects invalid stored session data safely", () => {
    window.sessionStorage.setItem("nem-life-plus:protection-check-session:v1", "{bad json");

    const result = loadCustomerResult(window.sessionStorage);

    expect(result.status).toBe("invalid");
  });

  it("loads a completed session through scoring and recommendations", () => {
    saveCheckSession(makeCompletedSession(), window.sessionStorage);

    const result = loadCustomerResult(window.sessionStorage);

    expect(result.status).toBe("success");
    if (result.status !== "success") return;
    expect(result.result.recommendedProducts.length).toBeGreaterThan(0);
  });
});
