# Dependencies and Supply Chain

No dependency may be added casually.

Before adding a dependency, document the problem solved, built-in alternatives, maintenance status, popularity/trust, vulnerabilities, transitive dependencies, bundle impact, server/client use, license, tree-shaking, compatibility, and supply-chain risk.

Prefer official framework tools and mature, focused packages. Avoid abandoned packages, unknown packages, excessive transitive dependencies, duplicate functionality, and heavy UI/animation/chart/PDF/state libraries.

Use pnpm, commit the lockfile, prefer frozen installs in CI, run dependency audit, document install scripts, and keep CI permissions least-privilege.
