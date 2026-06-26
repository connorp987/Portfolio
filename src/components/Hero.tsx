import { site } from "../data/site";
import { DeploymentField } from "./DeploymentField";
import { ButtonLink } from "./ui";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <DeploymentField />
      <div className={styles.fade} aria-hidden="true" />

      <div className={styles.content}>
        <div className={`${styles.status} ${styles.in1}`}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.statusText}>
            Online · {site.location} · Open to roles
          </span>
        </div>

        <p className={`${styles.kicker} ${styles.in2}`}>{site.name}</p>

        <h1 className={`${styles.headline} ${styles.in3}`}>
          Full-stack software,
          <br />
          built to <span className={styles.mark}>ship at scale.</span>
        </h1>

        <p className={`${styles.lead} ${styles.in4}`}>
          I'm a full-stack engineer at Lowe's, building the Returns Mobile app
          that runs on handhelds across <strong>1,700+ stores</strong> — from
          React/Ionic UIs down through the <strong>BFF services</strong> and
          data integrations behind them.
        </p>

        <div className={`${styles.actions} ${styles.in5}`}>
          <ButtonLink variant="solid" href="#work">
            View the work
          </ButtonLink>
          <ButtonLink
            variant="ghost"
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </ButtonLink>
        </div>

        <div className={`${styles.spec} ${styles.in6}`}>
          <span>React</span>
          <i aria-hidden="true">/</i>
          <span>Ionic</span>
          <i aria-hidden="true">/</i>
          <span>TypeScript</span>
          <i aria-hidden="true">/</i>
          <span>Node.js</span>
          <i aria-hidden="true">/</i>
          <span>Firebase</span>
        </div>
      </div>

      <a className={styles.scroll} href="#work" aria-label="Scroll to work">
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
