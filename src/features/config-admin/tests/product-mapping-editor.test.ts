import { describe, expect, it } from "vitest";
import {
  editProductExplanation,
  editProductHref,
  editProductLabel,
} from "../services/product-mapping-editor";
import { makeConfigDraft } from "./config-test-utils";

describe("product mapping editor", () => {
  it("applies safe edits and blocks unsafe links", () => {
    const draft = makeConfigDraft();
    const edited = editProductLabel(draft, "life_cover", "Life Cover Review");
    expect(edited.products.life_cover.label).toBe("Life Cover Review");
    expect(
      editProductExplanation(edited, "life_cover", "Review support options.").validation.valid,
    ).toBe(true);
    const unsafe = editProductHref(edited, "life_cover", "https://pay.example.com");
    expect(unsafe.validation.errors.some((issue) => issue.id === "product_href")).toBe(true);
  });
});
