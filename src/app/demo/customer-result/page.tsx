import { CustomerResultPage } from "@/features/protection-check/components/customer-result-page";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import type { ProtectionCheckSession } from "@/features/protection-check/types/session.types";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

export default function DemoCustomerResultPage() {
  const fixture = protectionCheckAnswerSets[0]!;
  const session: ProtectionCheckSession = {
    id: `demo_${fixture.id}`,
    status: "completed",
    startedAt: "2026-07-11T12:00:00.000Z",
    updatedAt: "2026-07-11T12:10:00.000Z",
    completedAt: "2026-07-11T12:10:00.000Z",
    visitedQuestionIds: fixture.answers.map((answer) => answer.questionId),
    answers: Object.fromEntries(fixture.answers.map((answer) => [answer.questionId, answer])),
    sourceChannel: "demo",
    scenarioId: fixture.id,
  };
  const result = buildCustomerResultViewModel(session);

  return (
    <main className="ds-page">
      {result.status === "success" ? (
        <CustomerResultPage demoResult={result.result} />
      ) : (
        <section className="ds-card">
          <h1>Demo result could not be prepared.</h1>
          <p className="ds-muted">The demo fixture did not pass result validation.</p>
        </section>
      )}
    </main>
  );
}
