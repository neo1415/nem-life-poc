import type { SVGProps } from "react";

export type ProtectionIconName =
  "eye" | "search" | "shield" | "people" | "heart" | "wallet" | "home" | "folder" | "map";

export function ProtectionIcon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: ProtectionIconName }) {
  const paths: Record<ProtectionIconName, React.ReactNode> = {
    eye: (
      <>
        <path d="M2.5 12s3.4-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.4 5.5-9.5 5.5S2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4.5 4.5M7.5 10.5h6M10.5 7.5v6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5.5 5.6v5.2c0 4.5 2.7 7.8 6.5 10.2 3.8-2.4 6.5-5.7 6.5-10.2V5.6L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.5-3.6 2.3-5.5 5.5-5.5s5 1.9 5.5 5.5M16 5.8a2.7 2.7 0 0 1 0 5.2M16.5 13.5c2.4.4 3.7 2.2 4 5" />
      </>
    ),
    heart: (
      <path d="M20.8 8.5c0 5-8.8 10.7-8.8 10.7S3.2 13.5 3.2 8.5A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.3Z" />
    ),
    wallet: (
      <>
        <path d="M4 6.5h14a2 2 0 0 1 2 2v9H4a2 2 0 0 1-2-2v-11a2 2 0 0 0 2 2Z" />
        <path d="M2.5 5A2.5 2.5 0 0 1 5 2.5h11v4M15 11h5v4h-5a2 2 0 0 1 0-4Z" />
      </>
    ),
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5.5 9v11h13V9M9.5 20v-6h5v6" />
      </>
    ),
    folder: (
      <>
        <path d="M3 6.5h6l2-2h10v15H3Z" />
        <path d="m8.5 13 2 2 4.5-4.5" />
      </>
    ),
    map: (
      <>
        <path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2Z" />
        <path d="M9 3v16M15 5v16" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
