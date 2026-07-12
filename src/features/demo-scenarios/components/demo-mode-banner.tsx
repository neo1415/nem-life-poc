import { demoModeWarning } from "@/lib/security/demo-boundary";

export function DemoModeBanner() {
  return (
    <section className="ds-callout ds-callout--warning" aria-label="Demo data warning">
      <p className="ds-callout__title">{demoModeWarning}</p>
      <p>
        All personas and records are fictional and are not connected to CRM, email, payment,
        underwriting, policies, or claims.
      </p>
    </section>
  );
}
