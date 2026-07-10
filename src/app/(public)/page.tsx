import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="surface" aria-labelledby="home-title">
        <p>NEM Life+ POC foundation</p>
        <h1 id="home-title">Family protection, built carefully from the ground up.</h1>
        <p>
          This foundation prepares the NEM Life+ proof of concept for future modules: guided checks,
          estimated scores, recommendations, lead capture, reports, and admin previews.
        </p>
        <p>
          No BVN, NIN, payment, document upload, or live NEM integration is implemented in this
          foundation module.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <Link className="button-link" href="/demo/nem-entry">
            View mock NEM entry
          </Link>
          <Link className="button-link secondary" href="/protection-check">
            Future Family Protection Check
          </Link>
        </div>
      </section>
    </main>
  );
}
