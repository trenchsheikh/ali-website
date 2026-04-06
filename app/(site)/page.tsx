import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Shariff Sufi Foundation | Empowering Youth in Camden",
  description:
    "UK charity in Camden supporting young people aged 16 to 25 with confidence, life skills, and opportunities, named in honour of Shariff Sufi and open to all.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            name: "Shariff Sufi Foundation",
            alternateName: "Shariff Sufi Foundation CIO",
            url: "https://shariffsufifoundation.org",
            logo: "https://shariffsufifoundation.org/logo.png",
            description:
              "Shariff Sufi Foundation is a UK registered Charitable Incorporated Organisation (CIO) supporting young people aged 16 to 25 in Camden, building confidence, skills, and opportunity in honour of Shariff Sufi.",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "London Borough of Camden",
            },
            knowsAbout: ["Education", "Social Inclusion", "Youth Development"],
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@shariffsufifoundation.org",
              contactType: "customer support",
            },
          }),
        }}
      />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Shariff Sufi
                <span className={styles.heroTitleSmall}>Foundation</span>
              </h1>
              <p className={styles.heroSubtitle}>
                A Camden charity named in honour of Shariff Sufi, supporting young people aged 16 to
                25 to build confidence, develop life skills, and access opportunities in education,
                training, and employment, with positivity and welcome for all.
              </p>
              <div className={styles.ctas}>
                <Link href="/about" className="btn btn-primary">
                  Learn More
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{ marginLeft: "20px" }}>
                  Contact Us
                </Link>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <div className={styles.heroDecoration} />
              <Image
                src="/hero.png"
                alt="Shariff Sufi Foundation Work"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
