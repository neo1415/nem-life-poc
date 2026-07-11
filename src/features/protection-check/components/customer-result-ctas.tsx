"use client";

import { useState } from "react";
import Link from "next/link";
import { Callout } from "@/components/ui/callout";
import type { CustomerCta } from "../types/customer-result.types";

export function CustomerResultCtas({
  primary,
  secondary,
  support,
}: {
  primary: CustomerCta[];
  secondary: CustomerCta[];
  support: CustomerCta[];
}) {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <section aria-labelledby="next-steps-title" className="ds-stack">
      <header className="ds-section-header">
        <p className="ds-eyebrow">Next steps</p>
        <h2 id="next-steps-title">Choose how you may want to continue.</h2>
        <p>These actions are demo placeholders until their later modules are connected.</p>
      </header>
      <CtaRow ctas={primary} onSelect={setMessage} variant="primary" />
      <CtaRow ctas={secondary} onSelect={setMessage} variant="outline" />
      <CtaRow ctas={support} onSelect={setMessage} variant="support" />
      {message ? (
        <Callout title="Demo action" role="status" aria-live="polite">
          {message}
        </Callout>
      ) : null}
    </section>
  );
}

function CtaRow({
  ctas,
  variant,
  onSelect,
}: {
  ctas: CustomerCta[];
  variant: "primary" | "outline" | "support";
  onSelect: (message: string) => void;
}) {
  if (ctas.length === 0) return null;
  return (
    <div className="ds-action-row">
      {ctas.slice(0, 4).map((cta) => (
        <CtaButton cta={cta} key={cta.id} onSelect={onSelect} variant={variant} />
      ))}
    </div>
  );
}

function CtaButton({
  cta,
  variant,
  onSelect,
}: {
  cta: CustomerCta;
  variant: "primary" | "outline" | "support";
  onSelect: (message: string) => void;
}) {
  const className = `ds-button ds-button--${variant} ds-button--md`;
  if (cta.href) {
    return (
      <Link className={className} href={cta.href}>
        <span>{cta.label}</span>
      </Link>
    );
  }
  return (
    <button className={className} onClick={() => onSelect(cta.placeholder)}>
      <span>{cta.label}</span>
    </button>
  );
}
