import type { ReviewAnswerItem } from "../services/review-answers";
import { Card } from "@/components/ui/card";

type ReviewAnswersProps = {
  items: Omit<ReviewAnswerItem, "questionId">[];
};

export function ReviewAnswers({ items }: ReviewAnswersProps) {
  if (items.length === 0) {
    return (
      <Card tone="muted">
        <h2>No answers to review yet.</h2>
        <p className="ds-muted">Start the Family Protection Check to see your answers here.</p>
      </Card>
    );
  }

  return (
    <section className="ds-stack" aria-labelledby="review-title">
      <h2 id="review-title">Review My Answers</h2>
      <div className="ds-stack">
        {items.map((item) => (
          <Card key={`${item.section}-${item.question}`}>
            <p className="ds-eyebrow">{item.section}</p>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
            {item.notSure ? <p className="ds-muted">Marked as not sure.</p> : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
