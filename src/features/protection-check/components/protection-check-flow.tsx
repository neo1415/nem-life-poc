"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChoiceGrid, OptionButton } from "@/components/quiz/option-button";
import { ProgressTracker } from "@/components/quiz/progress-tracker";
import { QuestionCard } from "@/components/quiz/question-card";
import { defaultQuestionCatalog } from "../config/questions";
import { saveCheckSession } from "../services/check-session-store";
import {
  answerCurrentQuestion,
  createSession,
  getEngineState,
  moveToPreviousQuestion,
  validateQuestionCatalog,
} from "../services/question-engine";
import { toQuestionRenderModel } from "../services/question-render-adapter";
import type { RawAnswerPayload } from "../types/answer.types";
import type { Question } from "../types/question.types";

export function ProtectionCheckFlow() {
  const router = useRouter();
  const config = validateQuestionCatalog(defaultQuestionCatalog);
  const [session, setSession] = useState(() =>
    createSession(defaultQuestionCatalog, { id: `check-${Date.now()}`, sourceChannel: "demo" }),
  );
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const [textValue, setTextValue] = useState("");
  const [error, setError] = useState<string>();
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const state = useMemo(() => getEngineState(defaultQuestionCatalog, session), [session]);

  if (config.status !== "success") {
    return (
      <QuestionError message="We could not load the protection check right now. Please try again later." />
    );
  }

  if (!state.currentQuestion) {
    return (
      <QuestionError message="We could not find the next question. Please restart the check." />
    );
  }

  const model = toQuestionRenderModel(state.currentQuestion);

  function resetDraft() {
    setSelectedOptionIds([]);
    setTextValue("");
    setError(undefined);
  }

  function submitAnswer(skipped = false) {
    if (!state.currentQuestion) return;
    const payload = buildPayload(state.currentQuestion, selectedOptionIds, textValue, skipped);
    const result = answerCurrentQuestion(defaultQuestionCatalog, session, payload);

    if (result.status !== "success") {
      setError(result.message);
      return;
    }

    saveCheckSession(result.session, window.sessionStorage);
    if (result.session.status === "completed") {
      router.push("/protection-check/complete");
      return;
    }

    setDirection("forward");
    setSession(result.session);
    resetDraft();
  }

  function goBack() {
    const result = moveToPreviousQuestion(defaultQuestionCatalog, session);
    if (result.status === "success") {
      setDirection("back");
      setSession(result.session);
      resetDraft();
    }
  }

  function chooseOption(optionId: string) {
    const multi =
      state.currentQuestion?.type === "multi_choice" ||
      state.currentQuestion?.type === "grouped_choice";
    setSelectedOptionIds((ids) =>
      multi ? toggleOption(ids, optionId) : ids.includes(optionId) ? [] : [optionId],
    );
    setError(undefined);
  }

  return (
    <section className="ds-guided-check" aria-label="Family Protection Check guided flow">
      <div className="ds-guided-check__orb ds-guided-check__orb--gold" aria-hidden="true" />
      <div className="ds-guided-check__orb ds-guided-check__orb--burgundy" aria-hidden="true" />
      <aside className="ds-guided-check__rail" aria-label="Journey guide">
        <p className="ds-eyebrow">Guided check</p>
        <h2>One calm step at a time.</h2>
        <p>
          We only ask what helps estimate your protection picture. Your answers stay in this demo
          session until you choose a follow-up step.
        </p>
        <ProgressTracker
          currentStep={state.progress.currentStep}
          totalSteps={state.progress.totalSteps}
          sectionLabel={state.progress.currentSectionLabel}
        />
      </aside>
      <div
        key={state.currentQuestion.id}
        className={`ds-question-stage ds-question-stage--${direction}`}
      >
        <QuestionCard
          title={model.title}
          description={model.description}
          helperText={model.helperText}
          whyWeAsk={model.whyWeAsk}
          stepLabel={`Step ${state.progress.currentStep} of ${state.progress.totalSteps}`}
          actions={
            <>
              <Button
                variant="outline"
                onClick={goBack}
                disabled={state.progress.currentStep === 1}
              >
                Back
              </Button>
              {state.currentQuestion.skippable ? (
                <Button variant="ghost" onClick={() => submitAnswer(true)}>
                  Skip
                </Button>
              ) : null}
              <Button onClick={() => submitAnswer()}>Continue</Button>
            </>
          }
        >
          <div role="group" aria-labelledby="question-title">
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
              <Field
                htmlFor={model.id}
                label={model.required ? "Your answer" : "Your answer, optional"}
                helperText="Use first name or state and city/LGA only where requested."
                error={error}
                required={model.required}
              >
                <Input
                  id={model.id}
                  value={textValue}
                  onChange={(event) => {
                    setTextValue(event.target.value);
                    setError(undefined);
                  }}
                />
              </Field>
            )}
          </div>
          {error && model.options.length > 0 ? <FieldError>{error}</FieldError> : null}
        </QuestionCard>
      </div>
    </section>
  );
}

function buildPayload(
  question: Question,
  selectedOptionIds: string[],
  textValue: string,
  skipped: boolean,
): RawAnswerPayload {
  return {
    questionId: question.id,
    selectedOptionIds,
    textValue,
    skipped,
    source: "customer",
  };
}

function toggleOption(optionIds: string[], optionId: string) {
  return optionIds.includes(optionId)
    ? optionIds.filter((id) => id !== optionId)
    : [...optionIds, optionId];
}

function QuestionError({ message }: { message: string }) {
  return (
    <div className="ds-card ds-stack" role="alert">
      <h2>Protection check unavailable</h2>
      <p>{message}</p>
    </div>
  );
}
