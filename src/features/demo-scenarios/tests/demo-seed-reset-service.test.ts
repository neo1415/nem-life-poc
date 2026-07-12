import { describe, expect, it } from "vitest";
import { loadDemoScenarios } from "../services/demo-scenario-loader";
import { seedDemoScenario } from "../services/demo-seed-service";
import { resetNemLifeDemoData } from "../services/demo-reset-service";

describe("demo seed and reset service", () => {
  it("seeds selected scenario and reset clears only demo keys", () => {
    const storage = window.sessionStorage;
    storage.clear();
    const seeded = seedDemoScenario(loadDemoScenarios()[0]!, storage);
    expect(seeded.status).toBe("success");
    storage.setItem("unrelated", "keep");
    const reset = resetNemLifeDemoData(storage);
    expect(reset.status).toBe("success");
    expect(storage.getItem("unrelated")).toBe("keep");
  });
});
