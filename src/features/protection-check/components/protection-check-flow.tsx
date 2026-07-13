"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressTracker } from "@/components/quiz/progress-tracker";
import { QuestionCard } from "@/components/quiz/question-card";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/field";
import { defaultQuestionCatalog } from "../config/questions";
import { loadCheckSession, saveCheckSession } from "../services/check-session-store";
import {
  answerCurrentQuestion,
  createSession,
  getEngineState,
  moveToPreviousQuestion,
  validateQuestionCatalog,
} from "../services/question-engine";
import { getVisibleQuestions } from "../services/question-navigation";
import { toQuestionRenderModel } from "../services/question-render-adapter";
import {
  areaIndexForQuestion,
  presentationForQuestion,
  presentationMetadata,
} from "./assessment-presentation";
import { AssessmentHeader } from "./assessment-header";
import { buildAnswerPayload, locationFromAnswer, toggleAnswerOption } from "./assessment-draft";
import { ProtectionMapRail, protectionAreas } from "./protection-map-rail";
import { QuestionAnswerControl } from "./question-answer-control";

export function ProtectionCheckFlow() {
  const router = useRouter();
  const config = validateQuestionCatalog(defaultQuestionCatalog);
  const [session, setSession] = useState(() =>
    createSession(defaultQuestionCatalog, { id: `check-${Date.now()}`, sourceChannel: "demo" }),
  );
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const [textValue, setTextValue] = useState("");
  const [locationState, setLocationState] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [error, setError] = useState<string>();
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const state = useMemo(() => getEngineState(defaultQuestionCatalog, session), [session]);
  const restoreDraft = useCallback((nextSession: typeof session) => {
    const nextState = getEngineState(defaultQuestionCatalog, nextSession);
    const questionId = nextState.currentQuestion?.id;
    const answer = questionId ? nextSession.answers[questionId] : undefined;
    const location = locationFromAnswer(answer?.value);
    setSelectedOptionIds(answer?.selectedOptionIds ?? []);
    setTextValue(answer?.textValue ?? "");
    setLocationState(location.state);
    setLocationCity(location.city);
    setError(undefined);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = loadCheckSession(window.sessionStorage);
      if (stored.status === "success" && stored.session.status === "in_progress") {
        setSession(stored.session);
        restoreDraft(stored.session);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [restoreDraft]);

  if (config.status !== "success") {
    return <QuestionError message="We could not load the protection check right now." />;
  }
  if (!state.currentQuestion) {
    return (
      <QuestionError message="We could not find the next question. Please restart the check." />
    );
  }

  const model = toQuestionRenderModel(state.currentQuestion);
  const presentation = presentationForQuestion(state.currentQuestion.id);
  const presentationMeta = presentationMetadata[presentation];
  const activeAreaIndex = areaIndexForQuestion(state.currentQuestion.id);
  const activeArea = protectionAreas[activeAreaIndex] ?? state.progress.currentSectionLabel;
  const visibleQuestions = getVisibleQuestions(defaultQuestionCatalog, session.answers);
  const completedAreaIndexes = protectionAreas
    .map((_, areaIndex) => areaIndex)
    .filter((areaIndex) => {
      const questions = visibleQuestions.filter(
        (question) => areaIndexForQuestion(question.id) === areaIndex,
      );
      return (
        areaIndex !== activeAreaIndex &&
        questions.length > 0 &&
        questions.every((question) => Boolean(session.answers[question.id]))
      );
    });

  function submitAnswer(skipped = false) {
    if (!state.currentQuestion) return;
    const payload = buildAnswerPayload(
      state.currentQuestion,
      selectedOptionIds,
      textValue,
      locationState,
      locationCity,
      skipped,
    );
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
    restoreDraft(result.session);
  }

  function goBack() {
    const result = moveToPreviousQuestion(defaultQuestionCatalog, session);
    if (result.status === "success") {
      setDirection("back");
      setSession(result.session);
      restoreDraft(result.session);
    }
  }

  function saveAndExit() {
    saveCheckSession(session, window.sessionStorage);
    router.push("/");
  }

  function chooseOption(optionId: string) {
    const multi =
      state.currentQuestion?.type === "multi_choice" ||
      state.currentQuestion?.type === "grouped_choice";
    setSelectedOptionIds((ids) =>
      multi ? toggleAnswerOption(ids, optionId) : ids.includes(optionId) ? [] : [optionId],
    );
    setError(undefined);
  }

  const displayName = session.answers.soft_personalization?.textValue;

  return (
    <>
      <AssessmentHeader displayName={displayName} onSaveExit={saveAndExit} />
      <section className="ds-guided-check" aria-label="Family Protection Check guided flow">
        <div
          key={state.currentQuestion.id}
          className={`ds-question-stage ds-question-stage--${direction}`}
        >
          <QuestionCard
            questionId={model.id}
            progress={
              <ProgressTracker
                currentStep={state.progress.currentStep}
                totalSteps={state.progress.totalSteps}
                sectionLabel={activeArea}
                visualStep={activeAreaIndex + 1}
                visualTotal={protectionAreas.length}
              />
            }
            title={model.title}
            description={model.description}
            helperText={model.helperText}
            presentation={presentation}
            stageTitle={presentationMeta.stageTitle}
            stageDescription={presentationMeta.stageDescription}
            icon={presentationMeta.icon}
            sectionLabel={activeArea}
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
            <div
              className="ds-question-card__answers"
              role="group"
              aria-labelledby="question-title"
            >
              <QuestionAnswerControl
                model={model}
                selectedOptionIds={selectedOptionIds}
                textValue={textValue}
                locationState={locationState}
                locationCity={locationCity}
                optionIcon={presentationMeta.optionIcon}
                presentation={presentation}
                onChoose={chooseOption}
                onTextChange={(value) => {
                  setTextValue(value);
                  setError(undefined);
                }}
                onLocationChange={(field, value) => {
                  if (field === "state") setLocationState(value);
                  else setLocationCity(value);
                  setError(undefined);
                }}
              />
            </div>
            {error ? <FieldError>{error}</FieldError> : null}
          </QuestionCard>
        </div>
        <ProtectionMapRail
          activeIndex={activeAreaIndex}
          completedAreaIndexes={completedAreaIndexes}
          currentStep={state.progress.currentStep}
          totalSteps={state.progress.totalSteps}
        />
      </section>
    </>
  );
}

function QuestionError({ message }: { message: string }) {
  return (
    <div className="ds-card ds-stack" role="alert">
      <h2>Protection check unavailable</h2>
      <p>{message}</p>
    </div>
  );
}
