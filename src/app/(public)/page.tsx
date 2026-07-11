import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Callout } from "@/components/ui/callout";
import { SectionHeader } from "@/components/ui/callout";

const benefits = [
  {
    title: "Know What You Have",
    copy: "See your current protection picture.",
  },
  {
    title: "See What Is Missing",
    copy: "Find possible gaps in life, health, property, and family readiness.",
  },
  {
    title: "Fix It With NEM",
    copy: "Get recommended next steps based on your answers.",
  },
];

export default function HomePage() {
  return (
    <main className="ds-page">
      <section className="ds-card ds-card--elevated ds-stack" aria-labelledby="home-title">
        <p className="ds-eyebrow">NEM Life+</p>
        <h1 id="home-title">Is your family protected if life changes tomorrow?</h1>
        <p className="ds-lede">
          Answer a few simple questions and get an estimated Family Protection Score. You will see
          where your family may be exposed and what you can do next.
        </p>
        <Callout title="Private to start" tone="info">
          No BVN, NIN, payment, or document upload required to start.
        </Callout>
        <div className="ds-action-row">
          <Link className="button-link" href="/protection-check/start">
            Start My Free Check
          </Link>
          <a className="button-link secondary" href="#how-it-works">
            See How It Works
          </a>
        </div>
      </section>

      <section className="ds-grid" aria-label="NEM Life+ benefits">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <h2>{benefit.title}</h2>
            <p className="ds-muted">{benefit.copy}</p>
          </Card>
        ))}
      </section>

      <section id="how-it-works" className="ds-stack" aria-labelledby="how-title">
        <SectionHeader title="How It Works" eyebrow="Three simple steps">
          Your score will be an estimate based on your answers. A verified score would require
          approved customer records and policy information.
        </SectionHeader>
        <div className="ds-grid">
          {[
            "Answer simple questions.",
            "See your estimated protection picture.",
            "Get recommended next steps.",
          ].map((step, index) => (
            <Card key={step} tone="muted">
              <p className="ds-eyebrow">Step {index + 1}</p>
              <h3>{step}</h3>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
