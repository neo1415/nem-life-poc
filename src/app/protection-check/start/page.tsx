import Link from "next/link";
import { Callout } from "@/components/ui/callout";
import { ProtectionCheckFlow } from "@/features/protection-check/components/protection-check-flow";

export default function ProtectionCheckStartPage() {
  return (
    <main className="ds-page ds-page--guided">
      <header className="ds-page__header ds-check-header">
        <p className="ds-eyebrow">Family Protection Check</p>
        <h1>Let us build your family protection picture.</h1>
        <p>
          Move through a calm guided check, see an estimated score, and understand which protection
          gaps may deserve a closer review.
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
