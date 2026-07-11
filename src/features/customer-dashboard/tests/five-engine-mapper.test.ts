import { describe, expect, it } from "vitest";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import { makeCompletedSession } from "@/features/protection-check/tests/customer-result-test-utils";
import { mapFiveEngines } from "../services/five-engine-mapper";

describe("five engine mapper", () => {
  it("maps customer-safe result data into five engines", () => {
    const result = buildCustomerResultViewModel(makeCompletedSession("business_owner"));
    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    const engines = mapFiveEngines(result.result);

    expect(engines.map((engine) => engine.id)).toEqual([
      "life",
      "health",
      "wealth",
      "protection",
      "legacy",
    ]);
    expect(engines.find((engine) => engine.id === "life")?.relatedGaps.length).toBeGreaterThan(0);
    expect(engines.find((engine) => engine.id === "health")?.customerExplanation).toContain(
      "hospital-bill pressure",
    );
    expect(JSON.stringify(engines)).not.toContain("admin");
  });
});
