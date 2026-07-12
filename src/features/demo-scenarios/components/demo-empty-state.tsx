export function DemoEmptyState({ message }: { message: string }) {
  return (
    <section className="ds-empty" role="status">
      <h1>Demo scenario not found</h1>
      <p>{message}</p>
    </section>
  );
}
