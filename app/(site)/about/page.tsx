import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "About | Shariff Sufi Foundation",
  description:
    "Shariff Sufi Foundation is a UK registered CIO supporting young people up to 25 in and around Camden through education, guidance, and inclusive activities.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="About"
        eyebrow="About Shariff Sufi Foundation"
        title="Supporting Young People in Camden"
      />
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutProse}>
            <p>
              <span className={styles.aboutHighlight}>Shariff Sufi Foundation</span> is a UK
              registered Charitable Incorporated Organisation (CIO) supporting young people up to
              the age of 25, particularly in and around the London Borough of Camden.
            </p>
            <p>
              We provide advice, guidance, educational support, and inclusive recreational activities
              that help young people develop life skills, improve wellbeing, and participate
              positively in society.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
