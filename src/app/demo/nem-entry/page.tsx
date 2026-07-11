import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Callout } from "@/components/ui/callout";

const channels = [
  "NEM website",
  "NEM mobile app",
  "social media campaign",
  "WhatsApp campaign",
  "SMS campaign",
  "email campaign",
  "agent or branch QR link",
];

export default function NemEntryPage() {
  return (
    <main className="ds-page">
      <header className="ds-page__header">
        <p className="ds-eyebrow">Demo NEM channel entry</p>
        <h1>Mock NEM entry point</h1>
        <p>
          This demo shows how NEM Life+ could be linked from existing NEM-owned channels. It is not
          the real NEM website or app.
        </p>
      </header>

      <div className="ds-two-column">
        <Card tone="elevated" className="ds-stack">
          <p className="ds-eyebrow">NEM Life+</p>
          <h2>Check Your Family Protection Score</h2>
          <p>
            See what protection your family has, what may be missing, and what you can fix with NEM.
          </p>
          <Callout title="Trust note" tone="info">
            No BVN, NIN, payment, or document upload required to start.
          </Callout>
          <Link className="button-link" href="/">
            Check My Score
          </Link>
        </Card>

        <Card className="ds-stack">
          <h2>Possible entry channels</h2>
          <ul className="ds-list">
            {channels.map((channel) => (
              <li key={channel}>{channel}</li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
}
