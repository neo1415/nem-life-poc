import type { Question } from "@/features/protection-check/types/question.types";

export function QuestionConfigList({ questions }: { questions: Question[] }) {
  return (
    <section className="ds-card" aria-labelledby="question-list-title">
      <p className="ds-eyebrow">Question catalog</p>
      <h2 id="question-list-title">Questions and privacy classification</h2>
      <ul className="ds-stack">
        {questions.slice(0, 10).map((question) => (
          <li key={question.id}>
            <strong>
              {question.displayOrder}. {question.title}
            </strong>
            <p>
              {question.section} · {question.type} · {question.privacyLevel} ·{" "}
              {question.isActive ? "Active" : "Inactive"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
