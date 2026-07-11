import type { Question } from "@/features/protection-check/types/question.types";

export function OptionConfigEditor({ question }: { question: Question }) {
  return (
    <section className="ds-card" aria-labelledby="option-editor-title">
      <p className="ds-eyebrow">Option editor preview</p>
      <h2 id="option-editor-title">Answer options</h2>
      <ul>
        {(question.options ?? []).slice(0, 6).map((option) => (
          <li key={option.id}>
            <label>
              Option label
              <input className="ds-input" value={option.label} readOnly />
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
