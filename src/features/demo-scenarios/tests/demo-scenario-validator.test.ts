import { describe, expect, it } from "vitest";
import { loadDemoScenarios } from "../services/demo-scenario-loader";
import { validateDemoScenario } from "../services/demo-scenario-validator";

describe("demo scenario validator", () => {
  it("accepts bundled scenarios and rejects prohibited claims", () => {
    const scenario = loadDemoScenarios()[0]!;
    expect(validateDemoScenario(scenario).status).toBe("valid");
    expect(
      validateDemoScenario({
        ...scenario,
        demoNotes: ["CRM synced for live NEM data"],
      }).status,
    ).toBe("invalid");
  });
});
