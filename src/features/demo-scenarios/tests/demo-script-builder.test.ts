import { describe, expect, it } from "vitest";
import { loadDemoScenarios } from "../services/demo-scenario-loader";
import { buildDemoScript } from "../services/demo-script-builder";

describe("demo script builder", () => {
  it("adds proof points and honest deferred notes", () => {
    const script = buildDemoScript(loadDemoScenarios()[0]!);
    expect(script[0]!.proves).toBeTruthy();
    expect(script[0]!.notImplementedYet).toMatch(/crm sync/i);
    expect(JSON.stringify(script)).not.toMatch(/email sent successfully|policy issued/i);
  });
});
