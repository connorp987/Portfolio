/**
 * Global site config — name, role, links, and the headline copy.
 * Edit URLs here; "#" placeholders are safe to ship but should be replaced.
 */
export const site = {
  name: "Connor Kennelly Plunkett",
  shortName: "Connor Plunkett",
  monogram: "CP",
  role: "Full-Stack Software Engineer",
  location: "Charlotte, NC",
  status: "Open to staff & senior full-stack roles",
  email: "connor.plunkett@gmail.com",

  links: {
    github: "https://github.com/connorp987",
    linkedin: "https://www.linkedin.com/", // TODO: replace with your LinkedIn URL
    resume: "/Connor_Plunkett.pdf",
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
