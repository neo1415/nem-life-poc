"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChoiceGrid, OptionButton } from "@/components/quiz/option-button";
import { ProgressTracker } from "@/components/quiz/progress-tracker";
import { QuestionCard } from "@/components/quiz/question-card";
import { defaultQuestionCatalog } from "@/features/protection-check/config/questions";
import {
  answerCurrentQuestion,
  createSession,
  getEngineState,
  moveToPreviousQuestion,
} from "@/features/protection-check/services/question-engine";
import { toQuestionRenderModel } from "@/features/protection-check/services/question-render-adapter";
import type { RawAnswerPayload } from "@/features/protection-check/types/answer.types";

export default function QuestionEngineDemoPage() {
  const [session, setSession] = useState(() =>
    createSession(defaultQuestionCatalog, { id: "demo-session" }),
  );
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const [textValue, setTextValue] = useState("");
  const [error, setError] = useState<string>();
  const state = useMemo(() => getEngineState(defaultQuestionCatalog, session), [session]);
  const current = state.currentQuestion;
  const model = current ? toQuestionRenderModel(current) : undefined;

  function submitAnswer() {
    if (!current) return;
    const payload: RawAnswerPayload = {
      questionId: current.id,
      selectedOptionIds,
      textValue,
      source: "demo",
    };
    const result = answerCurrentQuestion(defaultQuestionCatalog, session, payload);
    if (result.status !== "success") {
      setError(result.message);
      return;
    }
    setError(undefined);
    setSelectedOptionIds([]);
    setTextValue("");
    setSession(result.session);
  }

  function goBack() {
    const result = moveToPreviousQuestion(defaultQuestionCatalog, session);
    if (result.status === "success") {
      setError(undefined);
      setSelectedOptionIds([]);
      setTextValue("");
      setSession(result.session);
    }
  }

  function chooseOption(optionId: string) {
    if (!current) return;
    if (current.type === "multi_choice" || current.type === "grouped_choice") {
      setSelectedOptionIds((ids) =>
        ids.includes(optionId) ? ids.filter((id) => id !== optionId) : [...ids, optionId],
      );
      return;
    }
    setSelectedOptionIds([optionId]);
  }

  return (
    <PageShell
      eyebrow="Internal demo"
      title="Question Engine Demo - Not Final Customer Flow"
      description="A lightweight harness for testing configured questions, branching, validation, progress, and answer state."
    >
      <div className="ds-two-column">
        <section>
          {model && current ? (
            <QuestionCard
              title={model.title}
              description={model.description}
              helperText={model.helperText}
              whyWeAsk={model.whyWeAsk}
              progress={
                <ProgressTracker
                  currentStep={state.progress.currentStep}
                  totalSteps={state.progress.totalSteps}
                  sectionLabel={state.progress.currentSectionLabel}
                />
              }
              actions={
                <>
                  <Button
                    variant="outline"
                    onClick={goBack}
                    disabled={state.progress.currentStep === 1}
                  >
                    Back
                  </Button>
                  <Button onClick={submitAnswer}>Continue</Button>
                </>
              }
            >
              {model.options.length > 0 ? (
                <ChoiceGrid>
                  {model.options.map((option) => (
                    <OptionButton
                      key={option.id}
                      label={option.label}
                      description={option.description}
                      selected={selectedOptionIds.includes(option.id)}
                      onClick={() => chooseOption(option.id)}
                    />
                  ))}
                </ChoiceGrid>
              ) : (
                <Input
                  aria-label={model.title}
                  value={textValue}
                  onChange={(event) => setTextValue(event.target.value)}
                  placeholder={
                    current.type === "location_select"
                      ? "State and city/LGA only"
                      : "Optional answer"
                  }
                />
              )}
              {error ? (
                <p className="ds-field-error" role="alert">
                  {error}
                </p>
              ) : null}
            </QuestionCard>
          ) : (
            <Card className="ds-stack">
              <h2>Engine complete</h2>
              <p className="ds-muted">
                The demo session reached the end of the visible configured questions.
              </p>
            </Card>
          )}
        </section>
        <Card className="ds-stack" aria-label="Current demo state">
          <h2>Current Answer State</h2>
          <p className="ds-muted">
            Visible steps: {state.progress.totalSteps}. Completed answers:{" "}
            {state.progress.completedQuestionCount}.
          </p>
          <pre className="ds-code-block">{JSON.stringify(session.answers, null, 2)}</pre>
        </Card>
      </div>
    </PageShell>
  );
}
