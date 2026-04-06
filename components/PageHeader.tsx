import Link from "next/link";
import styles from "@/styles/site.module.css";

type PageHeaderProps = {
  breadcrumb: string;
  eyebrow: string;
  title: string;
};

export function PageHeader({ breadcrumb, eyebrow, title }: PageHeaderProps) {
  return (
    <header className={styles.pageHeader}>
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep} aria-hidden>
            /
          </span>
          <span className={styles.breadcrumbCurrent} aria-current="page">
            {breadcrumb}
          </span>
        </nav>
        <span className={styles.sectionLabel}>{eyebrow}</span>
        <h1 className={styles.pageTitle}>{title}</h1>
      </div>
    </header>
  );
}
