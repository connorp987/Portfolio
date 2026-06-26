import { site } from "../data/site";
import { ButtonLink, Eyebrow } from "./ui";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={`${styles.inner} reveal`}>
        <Eyebrow>// 05 · Contact</Eyebrow>
        <h2 className={styles.title}>
          Got something that needs to
          <br />
          <span className={styles.mark}>work at scale?</span>
        </h2>
        <p className={styles.lead}>
          I'm open to senior and staff full-stack roles, and always up for
          talking shop about shipping software to the edge. The fastest way to
          reach me is below.
        </p>

        <div className={styles.actions}>
          <ButtonLink variant="solid" href={site.links.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </ButtonLink>
          <ButtonLink variant="ghost" href={site.links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </ButtonLink>
          <ButtonLink variant="ghost" href={site.links.resume} target="_blank" rel="noreferrer">
            Download résumé ↓
          </ButtonLink>
        </div>

        <p className={styles.prompt}>
          <span className={styles.caret}>$</span> mailto{" "}
          <a className={styles.mail} href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
