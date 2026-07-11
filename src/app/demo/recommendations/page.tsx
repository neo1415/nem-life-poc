import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { calculateFamilyProtectionScore } from "@/features/scoring/services/score-orchestrator";
import { generateRecommendations } from "@/features/recommendations/services/recommendation-orchestrator";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

export default function RecommendationDemoPage() {
  const results = protectionCheckAnswerSets.map((fixture) => {
    const score = calculateFamilyProtectionScore(fixture.answers);
    const recommendation =
      score.status === "success"
        ? generateRecommendations({
            profile: score.profile,
            breakdown: score.breakdown,
            id: fixture.id,
          })
        : score;

    return { fixture, score, recommendation };
  });

  return (
    <main className="ds-page-shell">
      <section className="ds-section ds-section--hero">
        <div className="ds-stack ds-stack--lg">
          <Badge tone="warning">Internal demo</Badge>
          <div className="ds-stack">
            <p className="ds-eyebrow">
              Recommendation Engine Demo - Not Final Customer Result Page
            </p>
            <h1>Recommendation mapping preview</h1>
            <p className="ds-lede">
              This page uses mock answers, Module 5 scoring output, and Module 6 deterministic rules
              to preview product categories, CTA mapping, admin tags, and lead-priority signals.
            </p>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-grid ds-grid--two">
          {results.map(({ fixture, score, recommendation }) => (
            <Card key={fixture.id} tone="elevated" className="ds-stack ds-stack--lg">
              <div className="ds-stack">
                <Badge tone="brand">{fixture.label}</Badge>
                <h2>{fixture.description}</h2>
              </div>

              {score.status === "success" && recommendation.status === "success" ? (
                <>
                  <p>
                    Estimated score: <strong>{score.breakdown.totalScore}/100</strong> -{" "}
                    {score.breakdown.band.label}
                  </p>
                  <p>{recommendation.recommendation.customerSummary}</p>
                  <p className="ds-small">{recommendation.recommendation.disclaimer}</p>

                  <div className="ds-stack">
                    <h3>Recommended categories</h3>
                    <ul className="ds-list">
                      {recommendation.recommendation.recommendedProducts.map((product) => (
                        <li key={product.id}>
                          <strong>{product.title}</strong>: {product.priority} priority,{" "}
                          {product.confidence} confidence. CTA: {product.cta.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="ds-stack">
                    <h3>Admin signals</h3>
                    <p>
                      Lead priority:{" "}
                      <strong>{recommendation.recommendation.leadPriority.level}</strong>
                    </p>
                    <ul className="ds-list">
                      {recommendation.recommendation.adminOpportunityTags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>

                  <details>
                    <summary>Recommendation audit trail</summary>
                    <ul className="ds-list">
                      {recommendation.recommendation.auditTrail.map((event) => (
                        <li key={`${fixture.id}-${event.ruleId}`}>
                          {event.ruleId}: {event.category}. {event.reason}
                        </li>
                      ))}
                    </ul>
                  </details>
                </>
              ) : (
                <p role="alert">Recommendation demo could not generate this scenario safely.</p>
              )}
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
