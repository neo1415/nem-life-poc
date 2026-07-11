import { CheckCompletionPanel } from "@/features/protection-check/components/check-completion-panel";

export default function ProtectionCheckCompletePage() {
  return (
    <main className="ds-page">
      <header className="ds-page__header">
        <p className="ds-eyebrow">Family Protection Check</p>
        <h1>Your check is complete.</h1>
        <p>
          This page is a safe handoff into your estimated result. It still does not collect leads,
          request payment, or connect to live NEM systems.
        </p>
      </header>
      <CheckCompletionPanel />
    </main>
  );
}
