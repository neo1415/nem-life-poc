import { DemoModeBanner } from "@/features/demo-scenarios/components/demo-mode-banner";
import { DemoResetPanel } from "@/features/demo-scenarios/components/demo-reset-panel";

export default function DemoResetPage() {
  return (
    <main className="ds-page ds-stack">
      <header className="ds-page__header">
        <p className="ds-eyebrow">Demo reset</p>
        <h1>Reset NEM Life+ demo data.</h1>
        <p>Clear only browser-stored POC demo data. This does not touch live systems.</p>
      </header>
      <DemoModeBanner />
      <DemoResetPanel />
    </main>
  );
}
