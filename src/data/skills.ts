export type SkillGroup = {
  /** Mono register code shown beside the group title */
  code: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    code: "LANG",
    label: "Languages",
    items: ["TypeScript", "JavaScript", "C++", "Java", "Kotlin", "Python"],
  },
  {
    code: "FE",
    label: "Frontend",
    items: ["React", "Ionic", "Next.js", "TanStack Start", "Vue", "Nuxt", "Tailwind CSS"],
  },
  {
    code: "BE",
    label: "Backend & APIs",
    items: ["Node.js", "Fastify", "Express", "Micronaut", "BFF architecture", "REST APIs", "PHP"],
  },
  {
    code: "DATA",
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Cosmos DB", "SQL", "Firestore"],
  },
  {
    code: "OPS",
    label: "Cloud & DevOps",
    items: ["Firebase", "Jenkins CI/CD", "Proxmox"],
  },
  {
    code: "SEC",
    label: "Security & Auth",
    items: ["OAuth 2.0", "OpenID Connect", "Auth0", "Ping Identity", "Snyk"],
  },
  {
    code: "QA",
    label: "Testing & QA",
    items: ["Cypress", "Playwright", "React Testing Library"],
  },
  {
    code: "AI",
    label: "AI & Tooling",
    items: ["Claude Code", "Windsurf", "Cursor", "Agentic workflows", "Agile / SCRUM"],
  },
];
