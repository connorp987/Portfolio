/**
 * SIDE PROJECTS.
 * `status` renders as a small mono badge: LIVE | BETA | WIP (others fall back
 * to a neutral style). `repo` is optional — cards without one show only "Live".
 */
export type Project = {
  index: string;
  title: string;
  blurb: string;
  stack: string[];
  status: "LIVE" | "BETA" | "WIP" | string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    index: "P-01",
    title: "Locodle",
    blurb:
      "A daily geography guessing game — pin famous landmarks and locations worldwide in six tries on an interactive map. Ships as both a web app and a Discord Activity, with a cron-driven daily challenge.",
    stack: ["React", "Vite", "Leaflet", "Fastify", "PostgreSQL", "Discord SDK"],
    status: "LIVE",
    href: "https://locodle.com",
    repo: "https://github.com/connorp987/locodle",
  },
  {
    index: "P-02",
    title: "Verse With Me",
    blurb:
      "A shared Bible-reading space for couples — read, highlight, and reflect on Scripture together in real time, from anywhere. Live partner cursors, shared notes, and guided study plans. On the web now; iOS via Capacitor.",
    stack: ["Nuxt", "Vue", "Capacitor", "iOS", "Web"],
    status: "BETA",
    href: "https://versewithme.com",
  },
];
