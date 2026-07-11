import { describe, expect, it } from "vitest";
import { selectCtas } from "../services/cta-selector";
import { fixtureInput } from "./test-utils";

describe("selectCtas", () => {
  it("selects action CTAs for higher readiness without payment language", () => {
    const { profile } = fixtureInput("better_protected_customer");
    const ctas = selectCtas(
      "life_cover",
      { ...profile, monthlyProtectionComfort: "above_50000" },
      "high",
      "high",
    );

    expect(["start_registration", "get_quote"]).toContain(ctas.cta.type);
    expect(
      [ctas.cta, ...ctas.secondaryCtas, ...ctas.supportCtas].map((cta) => cta.label),
    ).not.toContain("Pay Now");
  });

  it("uses support CTAs for low confidence or guidance needs", () => {
    const { profile } = fixtureInput("business_owner");
    const ctas = selectCtas("business_protection", profile, "low", "medium");

    expect(ctas.cta.type).toBe("learn_more");
    expect(ctas.supportCtas.map((cta) => cta.type)).toContain("ask_advisor");
    expect(ctas.supportCtas.length).toBeGreaterThan(0);
  });
});
