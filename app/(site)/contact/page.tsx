import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { INSTAGRAM_LAUNCH_POST_URL } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Contact | Shariff Sufi Foundation",
  description:
    "Get in touch with Shariff Sufi Foundation by email. We also welcome donations to support our work in Camden.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader breadcrumb="Contact" eyebrow="Get in touch" title="Contact Us" />
      <section className={`section ${styles.simpleSection}`}>
        <div className="container">
          <div className={styles.simpleCard}>
            <p>
              For general enquiries, email us at{" "}
              <a href="mailto:info@shariffsufifoundation.org">info@shariffsufifoundation.org</a>.
            </p>
            <p>
              To support our work with a donation, visit our{" "}
              <Link href="/donate">Donate & Gift Aid</Link> page.
            </p>
            <p>
              We are also on{" "}
              <a
                href={INSTAGRAM_LAUNCH_POST_URL}
                className={styles.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              . Follow and share to help spread the word.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
