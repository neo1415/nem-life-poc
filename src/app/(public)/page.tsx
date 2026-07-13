import Link from "next/link";

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
    <main className="ds-landing">
      <header className="ds-topbar" aria-label="NEM Life+">
        <Link className="ds-brand" href="/">
          NEM Life+
        </Link>
        <Link className="button-link secondary" href="/demo/nem-entry">
          Demo Entry
        </Link>
      </header>

      <section className="ds-landing-hero" aria-labelledby="home-title">
        <div className="ds-landing-hero__content">
          <p className="ds-eyebrow">Serene assurance</p>
          <h1 id="home-title">Is your family protected if life changes tomorrow?</h1>
          <p className="ds-lede">
            Answer a few simple questions and get an estimated Family Protection Score. You will see
            where your family may be exposed and what you can do next.
          </p>
          <div className="ds-action-row ds-landing-actions">
            <Link className="button-link" href="/protection-check/start">
              Start My Free Check
            </Link>
            <a className="button-link secondary" href="#how-it-works">
              See How It Works
            </a>
          </div>
          <p className="ds-trust-note">
            No BVN, NIN, payment, or document upload required to start.
          </p>
        </div>
      </section>

      <section className="ds-landing-benefits" aria-label="NEM Life+ benefits">
        {benefits.map((benefit) => (
          <article className="ds-benefit-card" key={benefit.title}>
            <h2>{benefit.title}</h2>
            <p className="ds-muted">{benefit.copy}</p>
          </article>
        ))}
      </section>

      <section id="how-it-works" className="ds-how-section" aria-labelledby="how-title">
        <div className="ds-section-header">
          <p className="ds-eyebrow">Three simple steps</p>
          <h2 id="how-title">How It Works</h2>
          <p>
            Your score will be an estimate based on your answers. A verified score would require
            approved customer records and policy information.
          </p>
        </div>
        <div className="ds-how-steps">
          {[
            "Answer simple questions.",
            "See your estimated protection picture.",
            "Get recommended next steps.",
          ].map((step, index) => (
            <article className="ds-how-step" key={step}>
              <span className="ds-step-node">{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
