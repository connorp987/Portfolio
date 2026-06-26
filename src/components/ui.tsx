import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./ui.module.css";

/* ---- Eyebrow: mono register label, e.g. "// 02 · WORK" ---- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className={styles.eyebrow}>{children}</span>;
}

/* ---- Section header: eyebrow + title + optional lead ---- */
export function SectionHeader({
  code,
  title,
  lead,
}: {
  code: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <header className={`${styles.header} reveal`}>
      <Eyebrow>{code}</Eyebrow>
      <h2 className={styles.title}>{title}</h2>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </header>
  );
}

/* ---- Tag / chip ---- */
export function Tag({ children }: { children: ReactNode }) {
  return <span className={styles.tag}>{children}</span>;
}

/* ---- Button (anchor) with two variants ---- */
type BtnProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "ghost";
  children: ReactNode;
};

export function ButtonLink({ variant = "ghost", children, className = "", ...rest }: BtnProps) {
  return (
    <a className={`${styles.btn} ${styles[variant]} ${className}`} {...rest}>
      <span className={styles.btnLabel}>{children}</span>
    </a>
  );
}
