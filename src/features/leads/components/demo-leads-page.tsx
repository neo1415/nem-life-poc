"use client";

import { useEffect, useState } from "react";
import { EmptyState } from "@/components/ui/callout";
import { clearDemoLeads, listDemoLeads } from "../services/lead-store";
import type { Lead } from "../types/lead.types";
import { DemoLeadSummary } from "./demo-lead-summary";

export function DemoLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLeads(listDemoLeads(window.sessionStorage)), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="ds-stack">
      <header className="ds-page__header">
        <p className="ds-eyebrow">Internal demo</p>
        <h1>Demo leads</h1>
        <p>This page reads only the demo leads saved in this browser session.</p>
      </header>
      <button
        className="ds-button ds-button--outline ds-button--md"
        onClick={() => {
          clearDemoLeads(window.sessionStorage);
          setLeads([]);
        }}
      >
        <span>Clear Demo Leads</span>
      </button>
      {leads.length === 0 ? (
        <EmptyState title="No demo leads saved yet." />
      ) : (
        <div className="ds-stack">
          {leads.map((lead) => (
            <DemoLeadSummary key={lead.id} lead={lead} />
          ))}
        </div>
      )}
    </div>
  );
}
