export default function AdminPage() {
  return (
    <main className="page-shell">
      <section className="surface" aria-labelledby="admin-title">
        <p>Admin placeholder</p>
        <h1 id="admin-title">NEM Life+ admin area</h1>
        <p>
          The real admin dashboard belongs to a later module. Before real lead data exists here,
          admin routes must be protected server-side and must not rely on client-only hiding.
        </p>
        <p>This page does not implement authentication and does not expose real customer data.</p>
      </section>
    </main>
  );
}
