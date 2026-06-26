import { projects } from "../data/projects";
import { SectionHeader, Tag } from "./ui";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <SectionHeader
          code="// 04 · Projects"
          title="Things I build when no one's assigning the ticket"
          lead="Side projects where I own the whole thing — design, frontend, backend, and ship: a daily geography game and a real-time Scripture app for couples."
        />

        <div className={styles.grid}>
          {projects.map((p) => {
            const primary = p.href ?? p.repo;
            return (
            <article className={`${styles.card} reveal`} key={p.index}>
              <div className={styles.top}>
                <span className={styles.index}>{p.index}</span>
                <span className={`${styles.status} ${styles[`s_${p.status}`] ?? ""}`}>
                  <span className={styles.statusDot} aria-hidden="true" />
                  {p.status}
                </span>
              </div>

              <h3 className={styles.title}>
                {primary ? (
                  <a
                    className={styles.cardLink}
                    href={primary}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} — open project`}
                  >
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className={styles.blurb}>{p.blurb}</p>

              <div className={styles.stack}>
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>

              <div className={styles.links}>
                {p.repo ? (
                  <a className={styles.link} href={p.repo} target="_blank" rel="noreferrer">
                    Source ↗
                  </a>
                ) : null}
                {p.href ? (
                  <a className={styles.link} href={p.href} target="_blank" rel="noreferrer">
                    Live ↗
                  </a>
                ) : null}
              </div>

              <span className={styles.edge} aria-hidden="true" />
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
