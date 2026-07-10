import Link from "next/link";

export default function ProtectionCheckPlaceholderPage() {
  return (
    <main className="page-shell">
      <section className="surface" aria-labelledby="check-title">
        <p>Future module placeholder</p>
        <h1 id="check-title">Family Protection Check</h1>
        <p>
          The guided Family Protection Check starts in a later module. This placeholder exists so
          Module 1 can verify routing without pretending the quiz is ready.
        </p>
        <Link className="button-link secondary" href="/">
          Return home
        </Link>
      </section>
    </main>
  );
}
