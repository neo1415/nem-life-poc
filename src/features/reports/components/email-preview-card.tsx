import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { EmailPreview } from "../types/report.types";

export function EmailPreviewCard({ preview }: { preview: EmailPreview }) {
  return (
    <Card className="ds-stack">
      <p className="ds-eyebrow">Email preview only</p>
      <h1>{preview.subject}</h1>
      <dl className="ds-data-list">
        <div>
          <dt>To</dt>
          <dd>{preview.recipientLabel}</dd>
        </div>
        <div>
          <dt>Subject</dt>
          <dd>{preview.subject}</dd>
        </div>
      </dl>
      <article className="surface ds-stack" aria-label="Simulated email body">
        <p>{preview.greeting}</p>
        <p>{preview.body}</p>
        <Link className="button-link" href={preview.reportCta.href}>
          {preview.reportCta.label}
        </Link>
      </article>
      <p className="ds-disclaimer">{preview.demoNote}</p>
    </Card>
  );
}
