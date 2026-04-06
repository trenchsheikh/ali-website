import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "About | Shariff Sufi Foundation",
  description:
    "Named in honour of Shariff Sufi, our CIO supports young people aged 16 to 25 in Camden with confidence, skills, and opportunity, welcoming everyone, regardless of background.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="About"
        eyebrow="About Shariff Sufi Foundation"
        title="Who we are & why we carry this name"
      />
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutProse}>
            <p>
              <span className={styles.aboutHighlight}>Shariff Sufi Foundation</span> is a UK
              registered Charitable Incorporated Organisation (CIO). We focus on young people aged{" "}
              <strong>16 to 25</strong>, particularly in and around the London Borough of Camden,
              offering advice, guidance, educational support, and inclusive activities so young
              people can build confidence, develop life skills, and take part in their communities.
            </p>
            <p>
              Our work is for <strong>everyone</strong>: we welcome people from all backgrounds and
              walks of life. The charity exists to spread positivity and opportunity in Shariff’s
              name, with the same open hearted spirit he lived by.
            </p>

            <h2 className={styles.proseHeading}>Named in memory of Shariff</h2>
            <p>
              The foundation is named after <strong>Shariff</strong>, who passed away in 2021. He was
              a patient man who wanted the best for anyone and everyone he met. He took real joy in
              seeing people happy and was a significant part of his community.
            </p>
            <p>
              He helped people from all backgrounds, without regard to gender, age, race, or
              nationality, and that same ethos guides us today. We carry his name because we want the
              charity to feel as generous, grounded, and inclusive as he was: a place where people
              are accepted, supported, and encouraged to thrive.
            </p>
            <p>
              Everything we do is rooted in that purpose:{" "}
              <strong>bringing positivity through his name</strong>, and honouring his legacy by
              standing for welcome, respect, and hope.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
