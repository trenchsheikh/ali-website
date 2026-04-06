import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Shariff Sufi Foundation | Empowering Youth in Camden",
  description:
    "Shariff Sufi Foundation is a UK registered CIO supporting young people up to 25. Advancing education, social inclusion, and wellbeing in Camden.",
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
              "Shariff Sufi Foundation is a UK registered Charitable Incorporated Organisation (CIO) supporting young people up to the age of 25 in Camden.",
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
                Shariff Sufi Foundation exists to advance education, promote social inclusion, and
                provide recreational opportunities for young people up to age 25.
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
