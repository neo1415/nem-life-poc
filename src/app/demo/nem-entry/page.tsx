import Link from "next/link";

export default function NemEntryPage() {
  return (
    <main className="page-shell">
      <section className="surface" aria-labelledby="entry-title">
        <p>Demo NEM channel entry</p>
        <h1 id="entry-title">Check Your Family Protection Score</h1>
        <p>
          See what protection your family has, what may be missing, and what you can fix with NEM.
        </p>
        <p>No BVN, NIN, payment, or document upload required to start.</p>
        <Link className="button-link" href="/protection-check">
          Check My Score
        </Link>
        <p>
          This is a placeholder entry card for Module 1 only. The real guided check is implemented
          in a later module.
        </p>
      </section>
    </main>
  );
}
