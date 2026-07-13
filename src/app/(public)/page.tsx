import Link from "next/link";
import { ProtectionIcon, type ProtectionIconName } from "@/components/ui/protection-icon";

const benefits = [
  {
    icon: "eye" as ProtectionIconName,
    title: "Know What You Have",
    copy: "Map your existing protections securely and see your current standing in clear terms.",
  },
  {
    icon: "search" as ProtectionIconName,
    title: "See What Is Missing",
    copy: "Identify possible gaps in your safety net without confusing jargon or pressure.",
  },
  {
    icon: "shield" as ProtectionIconName,
    title: "Fix It With NEM",
    copy: "Explore tailored next steps that can strengthen what matters most.",
  },
];

export default function HomePage() {
  return (
    <main className="ds-landing">
      <header className="ds-topbar" aria-label="NEM Life+">
        <Link className="ds-brand" href="/">
          NEM Life+
        </Link>
        <Link className="ds-topbar__link" href="/">
          Save &amp; Exit
        </Link>
      </header>

      <section className="ds-landing-hero" aria-labelledby="home-title">
        <div className="ds-landing-hero__content">
          <h1 id="home-title">Is your family protected if life changes tomorrow?</h1>
          <p className="ds-lede">
            A calm, guided journey to understand your current safety net and secure what matters
            most. No pressure, just clarity.
          </p>
          <div className="ds-action-row ds-landing-actions">
            <Link className="button-link" href="/protection-check/start">
              Start My Free Check
            </Link>
          </div>
          <p className="ds-trust-note">
            No BVN, NIN, payment, or document upload required to start.
          </p>
        </div>
      </section>

      <section className="ds-landing-benefits" aria-label="NEM Life+ benefits">
        {benefits.map((benefit) => (
          <article className="ds-benefit-card" key={benefit.title}>
            <span className="ds-benefit-card__icon">
              <ProtectionIcon name={benefit.icon} />
            </span>
            <h2>{benefit.title}</h2>
            <p>{benefit.copy}</p>
          </article>
        ))}
      </section>

      <section id="how-it-works" className="ds-how-section" aria-labelledby="how-title">
        <div className="ds-section-header">
          <h2 id="how-title">How It Works</h2>
        </div>
        <div className="ds-how-steps">
          {[
            [
              "Answer Simple Questions",
              "Tell us about your life stage in a secure, conversational format.",
            ],
            [
              "Review Your Map",
              "Get a visual snapshot of your current coverage and possible risks.",
            ],
            [
              "Secure Your Future",
              "Choose practical next steps to strengthen your safety net when you are ready.",
            ],
          ].map(([title, copy], index) => (
            <article className="ds-how-step" key={title}>
              <span className="ds-step-node">{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <footer className="ds-landing-footer">
        <p>Secure &amp; Encrypted. No BVN/NIN required to start.</p>
        <nav aria-label="Legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#security">Data Security</a>
          <a href="#terms">Terms</a>
        </nav>
      </footer>
    </main>
  );
}
