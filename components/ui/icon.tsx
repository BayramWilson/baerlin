type IconName =
  | "phone"
  | "truck"
  | "tool"
  | "map"
  | "clock"
  | "check"
  | "shield"
  | "mail"
  | "menu"
  | "x";

const paths: Record<IconName, string> = {
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8.09 9.64a16 16 0 0 0 6.27 6.27l1.2-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92Z",
  truck:
    "M14 18V6a2 2 0 0 0-2-2H3v14h2m9 0h-4m4 0h2m0 0h3m-3 0a2 2 0 1 0 4 0m-15 0a2 2 0 1 0 4 0m11-5h-4V8h2.5L22 12v6h-2",
  tool:
    "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.9 2.9-3-3 2.9-2.9Z",
  map:
    "m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Zm0 0V3m6 18V6",
  clock:
    "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-14v5l3 2",
  check: "M20 6 9 17l-5-5",
  shield:
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3.5-10.5 2.5 2.5 4.5-5",
  mail:
    "M4 4h16v16H4V4Zm0 4 8 5 8-5",
  menu: "M4 6h16M4 12h16M4 18h16",
  x: "M18 6 6 18M6 6l12 12",
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d={paths[name]} />
    </svg>
  );
}
