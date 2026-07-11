import Link from "next/link";
import { Callout } from "@/components/ui/callout";
import { ProtectionCheckFlow } from "@/features/protection-check/components/protection-check-flow";

export default function ProtectionCheckStartPage() {
  return (
    <main className="ds-page">
      <header className="ds-page__header">
        <p className="ds-eyebrow">Family Protection Check</p>
        <h1>Answer one simple question at a time.</h1>
        <p>
          Your answers help build a protection picture for the next module. No score,
          recommendation, or lead capture happens on this step.
        </p>
        <Callout title="Safe to start" tone="info">
          No BVN, NIN, payment, exact address, policy number, contact lead form, or document upload
          is required.
        </Callout>
        <Link className="button-link secondary" href="/">
          Return Home
        </Link>
      </header>
      <ProtectionCheckFlow />
    </main>
  );
}
