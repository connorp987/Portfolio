import { useEffect, useState } from "react";
import { site } from "../data/site";
import styles from "./Nav.module.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.bar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label={`${site.shortName} — home`}>
          <span className={styles.bracket}>[</span>
          <span className={styles.mono}>{site.monogram}</span>
          <span className={styles.bracket}>]</span>
          <span className={styles.brandName}>{site.shortName}</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
          <a
            href={site.links.resume}
            className={styles.resume}
            target="_blank"
            rel="noreferrer"
          >
            Résumé ↗
          </a>
        </nav>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.barIcon} ${open ? styles.barIconOpen : ""}`} />
        </button>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        {site.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.drawerLink}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={site.links.resume}
          className={styles.drawerLink}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Résumé ↗
        </a>
      </div>
    </header>
  );
}
