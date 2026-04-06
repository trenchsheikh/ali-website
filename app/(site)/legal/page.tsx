import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Legal Information | Shariff Sufi Foundation",
  description:
    "Shariff Sufi Foundation is a Charitable Incorporated Organisation (CIO) registered in England and Wales.",
};

export default function LegalPage() {
  return (
    <>
      <PageHeader breadcrumb="Legal" eyebrow="Governance" title="Legal Information" />
      <section className={`section ${styles.simpleSection}`}>
        <div className="container">
          <div className={styles.simpleCard}>
            <div className={styles.legalList}>
              <p>
                <strong>Shariff Sufi Foundation</strong>
              </p>
              <p>Charitable Incorporated Organisation (CIO)</p>
              <p>Registered in England and Wales</p>
              <p>Registered Charity Number: 1215515</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
