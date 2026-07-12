import { CustomerResultPage } from "@/features/protection-check/components/customer-result-page";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import type { ProtectionCheckSession } from "@/features/protection-check/types/session.types";
import { getDemoScenario } from "@/features/demo-scenarios/services/demo-scenario-loader";
import { loadDemoScenarios } from "@/features/demo-scenarios/services/demo-scenario-loader";

export default async function DemoCustomerResultPage({
  searchParams,
}: {
  searchParams: Promise<{ scenario?: string }>;
}) {
  const { scenario: scenarioId } = await searchParams;
  const scenario = (scenarioId && getDemoScenario(scenarioId)) || loadDemoScenarios()[0]!;
  const session: ProtectionCheckSession = {
    id: `demo_${scenario.id}`,
    status: "completed",
    startedAt: "2026-07-11T12:00:00.000Z",
    updatedAt: "2026-07-11T12:10:00.000Z",
    completedAt: "2026-07-11T12:10:00.000Z",
    visitedQuestionIds: scenario.answerSet.map((answer) => answer.questionId),
    answers: Object.fromEntries(scenario.answerSet.map((answer) => [answer.questionId, answer])),
    sourceChannel: scenario.sourceChannel,
    scenarioId: scenario.id,
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
