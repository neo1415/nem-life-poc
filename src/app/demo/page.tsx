import Link from "next/link";
import { DemoModeBanner } from "@/features/demo-scenarios/components/demo-mode-banner";

const demoRoutes = [
  ["Executive Demo", "/demo/executive"],
  ["Scenario Selector", "/demo/scenarios"],
  ["Compare Personas", "/demo/scenarios/compare"],
  ["Admin Demo", "/demo/admin"],
  ["Config Demo", "/demo/config"],
  ["Reset Demo Data", "/demo/reset"],
] as const;

export default function DemoHomePage() {
  return (
    <main className="ds-page ds-stack">
      <header className="ds-page__header">
        <p className="ds-eyebrow">NEM Life+ demo</p>
        <h1>Choose a guided proof-of-concept path.</h1>
        <p>
          Use this hub to present fictional customer journeys, compare personas, reset demo data,
          and open admin/config previews.
        </p>
      </header>
      <DemoModeBanner />
      <section className="ds-grid" aria-label="Demo routes">
        {demoRoutes.map(([label, href]) => (
          <Link className="ds-card ds-card--interactive" href={href} key={href}>
            <h2>{label}</h2>
            <p className="ds-muted">Open {label.toLowerCase()}.</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
