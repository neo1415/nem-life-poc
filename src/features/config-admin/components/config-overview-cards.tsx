import type { ConfigOverview } from "../types/config-admin.types";

export function ConfigOverviewCards({ overview }: { overview: ConfigOverview }) {
  const cards = [
    ["Source", overview.sourceLabel],
    ["Draft status", overview.draftStatus],
    ["Active questions", overview.activeQuestions],
    ["Inactive questions", overview.inactiveQuestions],
    ["Scoring total", `${overview.scoringTotal}/100`],
    ["Recommendation rules", overview.recommendationRuleCount],
    ["Product categories", overview.productCategoryCount],
    ["CTA intents", overview.ctaIntentCount],
    ["Validation issues", overview.validationIssueCount],
  ];
  return (
    <section className="ds-grid" aria-label="Configuration overview metrics">
      {cards.map(([label, value]) => (
        <article className="ds-card" key={label}>
          <p className="ds-eyebrow">{label}</p>
          <strong>{value}</strong>
        </article>
      ))}
    </section>
  );
}
