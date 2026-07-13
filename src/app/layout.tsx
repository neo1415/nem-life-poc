import type { Metadata } from "next";
import "./globals.css";
import "./serene-layouts.css";
import "./stitch-fidelity.css";

export const metadata: Metadata = {
  title: "NEM Life+ POC",
  description: "Family protection platform proof of concept",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
