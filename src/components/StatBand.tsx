import { metrics, type Metric } from "../data/metrics";
import { useCountUp } from "../hooks/useCountUp";
import styles from "./StatBand.module.css";

function StatValue({ metric }: { metric: Metric }) {
  const { ref, value } = useCountUp<HTMLSpanElement>(metric.to ?? 0);
  if (metric.to == null) {
    return (
      <span className={styles.value}>
        {metric.prefix}
        {metric.value}
      </span>
    );
  }
  const shown = Math.round(value).toLocaleString("en-US");
  return (
    <span className={styles.value} ref={ref}>
      {metric.prefix}
      {shown}
      {metric.suffix}
    </span>
  );
}

export function StatBand() {
  return (
    <section className={styles.band} aria-label="Impact at a glance">
      <div className={styles.grid}>
        {metrics.map((m) => (
          <div className={`${styles.cell} reveal`} key={m.label}>
            <StatValue metric={m} />
            <span className={styles.label}>{m.label}</span>
            <span className={styles.note}>{m.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
