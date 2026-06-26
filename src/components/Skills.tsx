import { skillGroups } from "../data/skills";
import { SectionHeader, Tag } from "./ui";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className={styles.section} id="stack">
      <div className={styles.inner}>
        <SectionHeader
          code="// 03 · Stack"
          title="The toolkit, grouped by job"
          lead="Deep in the React/TypeScript ecosystem, comfortable across the backend, security, and the AI tooling that speeds it all up."
        />

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div className={`${styles.group} reveal`} key={group.code}>
              <div className={styles.groupHead}>
                <span className={styles.code}>{group.code}</span>
                <span className={styles.label}>{group.label}</span>
              </div>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
