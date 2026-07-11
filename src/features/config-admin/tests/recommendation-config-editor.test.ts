import { describe, expect, it } from "vitest";
import {
  editRecommendationExplanation,
  editRecommendationProduct,
  toggleRecommendationRule,
} from "../services/recommendation-config-editor";
import { makeConfigDraft } from "./config-test-utils";

describe("recommendation config editor", () => {
  it("edits explanation, active state, and product mapping safely", () => {
    const draft = makeConfigDraft();
    const rule = draft.recommendations.rules[0]!;
    const edited = editRecommendationExplanation(
      draft,
      rule.id,
      "Life cover may help families review support needs.",
    );
    const toggled = toggleRecommendationRule(edited, rule.id);
    const mapped = editRecommendationProduct(toggled, rule.id, "nem_health");
    const changed = mapped.recommendations.rules[0]!;
    expect(changed.isActive).toBe(false);
    expect(changed.category).toBe("nem_health");
    expect(mapped.validation.valid).toBe(true);
  });
});
