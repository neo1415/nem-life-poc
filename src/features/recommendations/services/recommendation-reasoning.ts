import { budgetCopy } from "../config/recommendation-copy";
import type { RecommendedProduct } from "../types/recommendation.types";

export function buildCustomerSummary(products: RecommendedProduct[], budgetRange?: string): string {
  const budgetText = budgetCopy[budgetRange ?? "need_guidance"] ?? budgetCopy.need_guidance;
  if (products.length === 0) {
    return `${budgetText} Your answers show fewer immediate recommendation signals, but a periodic protection review can still be useful.`;
  }

  const topLabels = products
    .slice(0, 3)
    .map((product) => product.title.toLowerCase())
    .join(", ");
  return `${budgetText} Based on your answers, the first areas worth reviewing are ${topLabels}.`;
}

export function buildReasoningSummary(products: RecommendedProduct[]): string {
  if (products.length === 0) {
    return "No high-priority product category mapping was produced from the current gaps.";
  }

  return products.map((product) => `${product.title}: ${product.reason}`).join(" ");
}
