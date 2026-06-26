import { site } from "../data/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.bracket}>[</span>
          <span>{site.monogram}</span>
          <span className={styles.bracket}>]</span>
          <span className={styles.name}>{site.shortName}</span>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.links.resume} target="_blank" rel="noreferrer">
            Résumé
          </a>
        </nav>

        <p className={styles.meta}>
          © {year} · {site.location} · Built with React + Vite
        </p>
      </div>
    </footer>
  );
}
