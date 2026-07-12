import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DemoScenariosPage from "@/app/demo/scenarios/page";
import { demoScenarios } from "../fixtures/demo-scenarios";

describe("demo privacy", () => {
  it("does not expose prohibited data in fixtures or selector page", () => {
    const { container } = render(<DemoScenariosPage />);
    const text = `${JSON.stringify(demoScenarios)} ${container.textContent}`;
    expect(text).not.toMatch(/\bbvn\b|\bnin\b|policy number|claim id|card details|bank details/i);
    expect(text).not.toMatch(/@gmail\.com|@yahoo\.com|\+2348012345678/i);
  });
});
