import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScoreRing } from "@/components/score/score-ring";
import { calculateFamilyProtectionScore } from "@/features/scoring/services/score-orchestrator";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

export default function ScoringDemoPage() {
  const results = protectionCheckAnswerSets.map((fixture) => ({
    fixture,
    result: calculateFamilyProtectionScore(fixture.answers),
  }));

  return (
    <main className="ds-page-shell">
      <section className="ds-section ds-section--hero">
        <div className="ds-stack ds-stack--lg">
          <Badge tone="warning">Internal demo</Badge>
          <div className="ds-stack">
            <p className="ds-eyebrow">Scoring Engine Demo - Not Final Customer Result Page</p>
            <h1>Estimated score calculation preview</h1>
            <p className="ds-lede">
              This page uses mock answer sets only. It shows deterministic scoring output, gaps,
              bands, confidence, and audit events for implementation review.
            </p>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-grid ds-grid--two">
          {results.map(({ fixture, result }) => (
            <Card key={fixture.id} tone="elevated" className="ds-stack ds-stack--lg">
              <div className="ds-stack">
                <Badge tone="brand">{fixture.label}</Badge>
                <h2>{fixture.description}</h2>
              </div>

              {result.status === "success" ? (
                <>
                  <ScoreRing
                    score={result.breakdown.totalScore}
                    label="Estimated Family Protection Score"
                    status={result.breakdown.band.label}
                    tone={result.breakdown.band.tone}
                  />
                  <p>{result.breakdown.summary}</p>
                  <p className="ds-small">{result.breakdown.disclaimer}</p>
                  <div className="ds-stack">
                    <h3>Area scores</h3>
                    <ul className="ds-list">
                      {result.breakdown.areas.map((area) => (
                        <li key={area.id}>
                          <strong>{area.label}</strong>: {area.earnedPoints}/{area.maxPoints} -{" "}
                          {area.status.replace("_", " ")}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ds-stack">
                    <h3>Detected gaps</h3>
                    <ul className="ds-list">
                      {result.breakdown.gaps.map((gap) => (
                        <li key={gap.id}>
                          <strong>{gap.customerTitle}</strong>: {gap.severity}, {gap.confidence}{" "}
                          confidence
                        </li>
                      ))}
                    </ul>
                  </div>
                  <details>
                    <summary>Audit trail</summary>
                    <ul className="ds-list">
                      {result.breakdown.auditTrail.map((event) => (
                        <li key={`${fixture.id}-${event.ruleId}`}>
                          {event.ruleId}: {event.pointsAwarded}/{event.pointsPossible}.{" "}
                          {event.reason}
                        </li>
                      ))}
                    </ul>
                  </details>
                </>
              ) : (
                <p role="alert">{result.message}</p>
              )}
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
