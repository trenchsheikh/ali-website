import Script from "next/script";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Donate & Gift Aid | Shariff Sufi Foundation",
  description:
    "Support our work in Camden. Donate and, if you are a UK taxpayer, add Gift Aid at no extra cost to you.",
};

export default function DonatePage() {
  return (
    <>
      <Script src="https://app.youform.com/embed.js" strategy="afterInteractive" />
      <PageHeader
        breadcrumb="Donate"
        eyebrow="Donate"
        title="Support us & Gift Aid"
      />
      <section className={`section ${styles.donateSection}`}>
        <div className="container">
          <p className={styles.donateIntro}>
            Your donation helps us advance education and opportunities for young people in Camden.
            If you are a UK taxpayer, you can complete the Gift Aid section in the form below so we
            can reclaim tax on your gift at no extra cost to you.
          </p>
          <div className={styles.donateEmbed}>
            <div
              data-youform-embed=""
              data-form="9pyxnao2"
              data-base-url="https://app.youform.com"
              data-width="100%"
              data-height="700"
            />
          </div>
        </div>
      </section>
    </>
  );
}
