import type { ProductCategoryId } from "@/features/recommendations/types/recommendation.types";
import type { ConfigDraft } from "../types/config-admin.types";
import { validateConfigDraft } from "./config-validator";

export function editProductLabel(draft: ConfigDraft, category: ProductCategoryId, label: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    products: {
      ...draft.products,
      [category]: { ...draft.products[category], label },
    },
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editProductExplanation(
  draft: ConfigDraft,
  category: ProductCategoryId,
  customerExplanation: string,
) {
  const next = {
    ...draft,
    status: "draft" as const,
    products: {
      ...draft.products,
      [category]: { ...draft.products[category], customerExplanation },
    },
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editProductHref(draft: ConfigDraft, category: ProductCategoryId, href: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    products: {
      ...draft.products,
      [category]: { ...draft.products[category], href },
    },
  };
  return { ...next, validation: validateConfigDraft(next) };
}
