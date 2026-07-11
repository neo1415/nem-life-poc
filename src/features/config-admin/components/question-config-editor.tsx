import type { Question } from "@/features/protection-check/types/question.types";

export function QuestionConfigEditor({ question }: { question: Question }) {
  return (
    <section className="ds-card" aria-labelledby="question-editor-title">
      <p className="ds-eyebrow">Question editor preview</p>
      <h2 id="question-editor-title">Safe structured edits</h2>
      <label>
        Customer title
        <input className="ds-input" value={question.title} readOnly />
      </label>
      <label>
        Why we ask
        <textarea
          className="ds-input"
          value={question.whyWeAsk ?? "Add why-we-ask text"}
          readOnly
        />
      </label>
      <p>Question ID and analytics key stay controlled in this preview.</p>
    </section>
  );
}
