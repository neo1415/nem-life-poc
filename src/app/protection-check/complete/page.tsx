import { CheckCompletionPanel } from "@/features/protection-check/components/check-completion-panel";

export default function ProtectionCheckCompletePage() {
  return (
    <main className="ds-page">
      <header className="ds-page__header">
        <p className="ds-eyebrow">Family Protection Check</p>
        <h1>Your check is complete.</h1>
        <p>
          This page is a safe handoff into the scoring module. It does not show a score,
          recommendations, or lead capture.
        </p>
      </header>
      <CheckCompletionPanel />
    </main>
  );
}
