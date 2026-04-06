import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { INSTAGRAM_LAUNCH_POST_URL } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Mission | Shariff Sufi Foundation",
  description:
    "We support young people aged 16 to 25 in Camden to build confidence and skills, and to access education, training, and employment opportunities, with programmes that will grow over time.",
};

export default function MissionPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Mission"
        eyebrow="Our Mission"
        title="Confidence, skills & real opportunities"
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
              <div className={styles.missionBody}>
                <p className={styles.missionLead}>
                  Our mission is to support young people aged <strong>16 to 25</strong> by helping
                  them build <strong>confidence</strong>, develop <strong>life skills</strong>, and
                  access opportunities in <strong>education, training, and employment</strong>.
                </p>
                <p className={styles.missionLead}>
                  We advance education, promote social inclusion, relieve unemployment where we can,
                  and provide safe recreational and developmental opportunities, always with the same
                  welcoming spirit that Shariff lived by.
                </p>
                <p className={styles.missionLead}>
                  This is still <strong>the beginning</strong>. We are working towards delivering
                  programmes that make a <strong>lasting, practical difference</strong> in young
                  people’s lives, and we will keep building step by step, with our community.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.instagramCallout}>
            <p>
              <strong>Stay connected.</strong> We have just launched on Instagram, it would mean a
              lot if you could follow us and share our posts to help spread the word.
            </p>
            <p>
              <a
                href={INSTAGRAM_LAUNCH_POST_URL}
                className={styles.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View our post on Instagram
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
