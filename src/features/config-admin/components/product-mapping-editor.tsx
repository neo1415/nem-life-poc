import type { ConfigDraft } from "../types/config-admin.types";

export function ProductMappingEditor({ draft }: { draft: ConfigDraft }) {
  return (
    <section className="ds-card" aria-labelledby="product-title">
      <p className="ds-eyebrow">Product mappings</p>
      <h2 id="product-title">Demo product categories</h2>
      <ul className="ds-stack">
        {Object.entries(draft.products).map(([id, product]) => (
          <li key={id}>
            <strong>{product.label}</strong>
            <p>{product.shortDescription}</p>
            <p>
              {product.href} · {product.isDemoLink ? "Demo link" : "Review required"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
