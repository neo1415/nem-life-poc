import type { DemoComparisonRow } from "../types/demo-scenario.types";

export function buildDemoMetrics(rows: DemoComparisonRow[]) {
  const totalScore = rows.reduce((sum, row) => sum + row.score, 0);
  return {
    totalPersonas: rows.length,
    highPriorityCount: rows.filter((row) => row.leadPriority === "high").length,
    veryHighPriorityCount: rows.filter((row) => row.leadPriority === "very_high").length,
    averageEstimatedScore: rows.length ? Math.round(totalScore / rows.length) : 0,
    productOpportunities: countBy(rows.flatMap((row) => row.recommendations)),
    sourceChannelMix: countBy(rows.map((row) => row.sourceChannel)),
    ctaIntentMix: countBy(rows.map((row) => row.ctaIntent)),
    demoOnlyLabel: "Demo metrics - fictional persona data only.",
  };
}

function countBy(items: string[]) {
  return items.reduce<Record<string, number>>((counts, item) => {
    counts[item] = (counts[item] ?? 0) + 1;
    return counts;
  }, {});
}
