export type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  /** Short code shown on the timeline rail */
  tag: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Lowe's Home Improvement",
    title: "Full-Stack Software Engineer",
    location: "Charlotte, NC · Remote",
    period: "May 2022 — Present",
    tag: "LOWES",
    highlights: [
      "Own end-to-end delivery of the Buyback module in Lowe's Returns Mobile app — React/Ionic on Android handhelds across 1,700+ stores — spanning picking and quantity flows, item/vendor detail screens, and Vendor Pickup, RTV, and Hazmat dispositions.",
      "Re-architected the buyback data model around a unique buyback ID at the BFF layer, so buybacks automatically reopen when on-hand counts change from returns or cycle recounts — closing a standing data-integrity gap.",
      "Built the CRTV Admin Portal in React, TypeScript, and AG Grid on a server-side data model — paginated infinite scroll over a 100k+ item catalog with server-side filtering/sorting, per-user column persistence, and API timeout handling — giving operations teams secure configuration control at scale.",
      "Delivered Vendor Directed Return Authorization flows end to end, and integrated Returns Mobile with the new Out-for-Repair service — including the unrepairable-unit safety-concern workflow.",
      "Built liquidation pallet management and shipment flows (UPC-scan assignment, create/start shipment, load-to-truck) for disaster recovery, plus Sales-floor and Receiving-floor Damages workflows across sellable, non-sellable, hazmat, and markdown paths.",
      "Led the V3 rewrite onto Ionic/React/Vite and drove platform upgrades — React Query v5, JDK 21 / Micronaut 4 on the BFF, multi-tenant request routing, and ongoing Snyk remediation — improving performance, security posture, and maintainability.",
      "Authored a Firebase scripting layer to manage feature flags and configuration across 1,700+ stores; recognized with the Lowe's Key Contributor Award.",
    ],
  },
  {
    company: "Appalachian State University",
    title: "Student Full-Stack Developer",
    location: "Boone, NC",
    period: "2019 — 2021 · Summers",
    tag: "APPSTATE",
    highlights: [
      "Built full-stack educational tools, including a Slideshow application on React with a PHP/PostgreSQL backend, improving learning engagement and content delivery.",
      "Maintained and administered university databases via Canopy CMS, ensuring reliable storage, retrieval, and data integrity for production applications.",
    ],
  },
  {
    company: "Electric Power Research Institute",
    title: "Software Developer Intern",
    location: "Charlotte, NC",
    period: "2018 — 2019",
    tag: "EPRI",
    highlights: [
      "Contributed to a major overhaul of epri.com, migrating the frontend from Angular to React for better performance and maintainability.",
      "Integrated OAuth 2.0 and OpenID Connect with Auth0 and Ping Identity alongside security teams — directly applicable to secure, DoD-grade software requirements.",
      "Built API layers in Node.js (Express) integrating Cosmos DB and SQL databases for robust data management and frontend hydration.",
    ],
  },
];

export const education = {
  degree: "B.S. in Computer Science",
  school: "Appalachian State University",
  location: "Boone, NC",
  date: "May 2022",
};
