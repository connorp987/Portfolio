# Connor Plunkett — Portfolio

A profile + résumé + side-project site. Vite · React · TypeScript, with a
hand-built design system (no UI library).

**Design direction — "Operations Console":** an instrument-panel aesthetic that
mirrors the admin portals and config-at-scale systems Connor builds, elevated to
be beautiful. The hero's signature element is a live **deployment-footprint**
field — ~1,700 nodes standing in for the store fleet, with amber pulses sweeping
across like rollouts. One bold color (scanner-LED amber `#FFB000`); everything
else quiet ink and slate. Type: **Archivo** (display) · **IBM Plex Sans** (body)
· **IBM Plex Mono** (readouts).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Edit your content (all in `src/data/`)

| File             | What it holds                                                        |
| ---------------- | ------------------------------------------------------------------- |
| `site.ts`        | Name, role, location, and **links** (GitHub / LinkedIn / résumé).   |
| `projects.ts`    | **Side projects** — currently editable placeholders. Swap these.    |
| `experience.ts`  | Work history + education (pulled from your résumé).                  |
| `skills.ts`      | Skill groups for the capabilities matrix.                           |
| `metrics.ts`     | The animated stat band under the hero.                              |

### First things to replace

1. **`src/data/site.ts`** → set `links.github` and `links.linkedin` (both are
   `"#"`-style placeholders right now).
2. **`src/data/projects.ts`** → replace the three placeholder projects with real
   ones (`title`, `blurb`, `stack`, `status`, `repo`, `href`).
3. The résumé download serves **`public/Connor_Plunkett.pdf`** — drop a new PDF
   there with the same name to update it.

## Design tokens

All color, type, and spacing live as CSS variables in
`src/styles/tokens.css`. Components are scoped with CSS Modules
(`*.module.css`), so changing a token cascades everywhere without specificity
fights.

## Accessibility / quality floor

Responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected
(the node field renders static, entrance/scroll animations disable), semantic
landmarks, and a skip link.
