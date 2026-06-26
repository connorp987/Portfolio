export type Metric = {
  /** count-up target; when present the value animates from 0 */
  to?: number;
  prefix?: string;
  suffix?: string;
  /** static display when there is no count-up target */
  value?: string;
  label: string;
  note: string;
};

export const metrics: Metric[] = [
  {
    to: 1700,
    suffix: "+",
    label: "Stores running my code",
    note: "CRTV Returns on Android handhelds",
  },
  {
    to: 100,
    suffix: "k+",
    label: "Item catalog, server-side",
    note: "CRTV Admin Portal on AG Grid",
  },
  {
    to: 4,
    suffix: "+ yrs",
    label: "Building at enterprise scale",
    note: "Lowe's · 2022 → present",
  },
  {
    to: 1,
    label: "Key Contributor Award",
    note: "For high-impact delivery",
  },
];
