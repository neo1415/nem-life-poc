"use client";

import { Button } from "@/components/ui/button";

export function PrintSaveButton() {
  return (
    <Button
      className="no-print"
      onClick={() => {
        if (typeof window !== "undefined" && "print" in window) window.print();
      }}
    >
      Print or Save as PDF
    </Button>
  );
}
