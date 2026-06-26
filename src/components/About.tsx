import { education } from "../data/experience";
import { Eyebrow } from "./ui";
import styles from "./About.module.css";

const spec: { k: string; v: string }[] = [
  { k: "Location", v: "Charlotte, NC · Remote" },
  { k: "Focus", v: "Full-stack · Enterprise scale" },
  { k: "Current", v: "Full-Stack SWE @ Lowe's" },
  { k: "Education", v: `${education.degree}, App State '22` },
  { k: "Award", v: "Lowe's Key Contributor" },
  { k: "Status", v: "Open to senior / staff roles" },
];

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={`${styles.prose} reveal`}>
          <Eyebrow>// 01 · Profile</Eyebrow>
          <p className={styles.lead}>
            I like the problems that only get interesting at scale.
          </p>
          <p className={styles.body}>
            The hard part of enterprise software isn't the first screen — it's
            the thousandth store: the edge case on a handheld with a flaky
            connection, the config change that has to roll out cleanly to 1,700
            locations without a single bad night for a store manager.
          </p>
          <p className={styles.body}>
            At Lowe's I own the Buyback module of our Returns Mobile app and
            built the CRTV Admin Portal behind it — along with the BFF
            re-architecture that keeps buyback data honest across returns and
            recounts. I care about the parts users never see: clean data models,
            observable rollouts, and code the next engineer can actually
            maintain.
          </p>
          <p className={styles.body}>
            Lately I build with agentic workflows — Claude Code, Windsurf,
            Cursor — to move faster without trading away quality. Off the clock,
            you'll find me breaking things on purpose across a Proxmox homelab.
          </p>
        </div>

        <aside className={`${styles.spec} reveal`} aria-label="Profile spec sheet">
          <div className={styles.specHead}>
            <span className={styles.specDot} aria-hidden="true" />
            <span>spec_sheet.cfg</span>
          </div>
          <dl className={styles.specList}>
            {spec.map((row) => (
              <div className={styles.specRow} key={row.k}>
                <dt>{row.k}</dt>
                <dd>{row.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
