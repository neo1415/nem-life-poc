import type { Answer } from "../types/answer.types";
import type { ProtectionCheckSession } from "../types/session.types";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

export function makeCompletedSession(
  fixtureId = "existing_motor_customer",
): ProtectionCheckSession {
  const fixture =
    protectionCheckAnswerSets.find((item) => item.id === fixtureId) ??
    protectionCheckAnswerSets[0]!;
  return {
    id: `test_${fixture.id}`,
    status: "completed",
    startedAt: "2026-07-11T12:00:00.000Z",
    updatedAt: "2026-07-11T12:10:00.000Z",
    completedAt: "2026-07-11T12:10:00.000Z",
    visitedQuestionIds: fixture.answers.map((answer) => answer.questionId),
    answers: Object.fromEntries(fixture.answers.map((answer) => [answer.questionId, answer])),
    sourceChannel: "demo",
    scenarioId: fixture.id,
  };
}

export function answersArray(session: ProtectionCheckSession): Answer[] {
  return Object.values(session.answers);
}
