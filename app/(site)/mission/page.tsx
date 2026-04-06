import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Mission | Shariff Sufi Foundation",
  description:
    "We empower young people by advancing education, promoting social inclusion, and providing safe recreational and developmental opportunities in Camden.",
};

export default function MissionPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Mission"
        eyebrow="Our Mission"
        title="Empowering Through Opportunity"
      />
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.missionImage}>
              <Image
                src="/mission.png"
                alt="Our mission"
                width={600}
                height={450}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
            <div className={styles.missionContent}>
              <p className={styles.missionLead}>
                Shariff Sufi Foundation exists to empower young people by advancing education,
                promoting social inclusion, relieving unemployment, and providing safe recreational
                and developmental opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
