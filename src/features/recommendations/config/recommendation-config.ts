import { productCategories } from "./product-categories";
import { recommendationDisclaimer } from "./recommendation-copy";

export const recommendationConfig = {
  disclaimer: recommendationDisclaimer,
  productCategories,
} as const;
