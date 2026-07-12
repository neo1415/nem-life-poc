"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { resetNemLifeDemoData } from "../services/demo-reset-service";

export function DemoResetPanel() {
  const [message, setMessage] = useState("Demo data has not been reset in this browser session.");
  return (
    <section className="ds-card ds-stack" aria-labelledby="reset-title">
      <h2 id="reset-title">Reset demo data</h2>
      <p className="ds-muted">
        Clears only NEM Life+ demo session, lead, scenario, and config draft keys from this browser.
      </p>
      <Button
        variant="danger"
        onClick={() => {
          const result = resetNemLifeDemoData(window.sessionStorage);
          setMessage(
            result.status === "success"
              ? `Reset complete. Cleared ${result.clearedKeys.length} demo key(s).`
              : "Demo storage is unavailable.",
          );
        }}
      >
        Reset Demo Data
      </Button>
      <p role="status">{message}</p>
    </section>
  );
}
