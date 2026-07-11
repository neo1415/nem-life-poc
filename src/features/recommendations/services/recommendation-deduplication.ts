import type { ProductSignal } from "./product-mapper";

const priorityRank = { low: 1, medium: 2, high: 3, urgent_review: 4 } as const;
const confidenceRank = { low: 1, medium: 2, high: 3 } as const;

export function dedupeProductSignals(signals: ProductSignal[]): ProductSignal[] {
  const byCategory = new Map<ProductSignal["category"], ProductSignal>();

  signals.forEach((signal) => {
    const current = byCategory.get(signal.category);
    if (!current) {
      byCategory.set(signal.category, signal);
      return;
    }

    byCategory.set(signal.category, {
      ...current,
      priority: higherPriority(current.priority, signal.priority),
      confidence: higherConfidence(current.confidence, signal.confidence),
      reason: `${current.reason} ${signal.reason}`,
      relatedGapIds: unique([...current.relatedGapIds, ...signal.relatedGapIds]),
      adminTags: unique([...current.adminTags, ...signal.adminTags]),
      scoreAreaIds: unique([...current.scoreAreaIds, ...signal.scoreAreaIds]),
    });
  });

  return [...byCategory.values()];
}

function higherPriority(a: ProductSignal["priority"], b: ProductSignal["priority"]) {
  return priorityRank[b] > priorityRank[a] ? b : a;
}

function higherConfidence(a: ProductSignal["confidence"], b: ProductSignal["confidence"]) {
  return confidenceRank[b] > confidenceRank[a] ? b : a;
}

function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}
