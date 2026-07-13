import Link from "next/link";
import { ProtectionCheckFlow } from "@/features/protection-check/components/protection-check-flow";

export default function ProtectionCheckStartPage() {
  return (
    <main className="ds-page ds-page--guided">
      <header className="ds-topbar ds-check-header" aria-label="Family Protection Check">
        <Link className="ds-brand" href="/">
          NEM Life+
        </Link>
        <p className="ds-check-header__note">
          Safe to start. No BVN, NIN, payment, exact address, policy number, contact lead form, or
          document upload is required.
        </p>
        <Link className="button-link secondary" href="/">
          Save &amp; Exit
        </Link>
      </header>
      <ProtectionCheckFlow />
    </main>
  );
}
