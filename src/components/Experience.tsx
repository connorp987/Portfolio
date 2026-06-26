import { experience } from "../data/experience";
import { SectionHeader } from "./ui";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <SectionHeader
          code="// 02 · Work"
          title="Shipping at the scale of a national retailer"
          lead="Four years building enterprise systems that have to work on day one and the thousandth day — across stores, devices, and security boundaries."
        />

        <ol className={styles.rail}>
          {experience.map((role) => (
            <li className={`${styles.entry} reveal`} key={`${role.company}-${role.period}`}>
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.node} />
              </div>

              <div className={styles.card}>
                <div className={styles.meta}>
                  <span className={styles.tag}>{role.tag}</span>
                  <span className={styles.period}>{role.period}</span>
                </div>
                <h3 className={styles.role}>{role.title}</h3>
                <p className={styles.company}>
                  {role.company} <span className={styles.dot}>·</span>{" "}
                  <span className={styles.loc}>{role.location}</span>
                </p>
                <ul className={styles.points}>
                  {role.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
