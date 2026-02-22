"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.page}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "Shariff Sufi Foundation",
            "alternateName": "Shariff Sufi Foundation CIO",
            "url": "https://shariffsufifoundation.org",
            "logo": "https://shariffsufifoundation.org/logo.png",
            "description": "Shariff Sufi Foundation is a UK registered Charitable Incorporated Organisation (CIO) supporting young people up to the age of 25 in Camden.",
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "London Borough of Camden"
            },
            "knowsAbout": ["Education", "Social Inclusion", "Youth Development"],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@shariffsufifoundation.org",
              "contactType": "customer support"
            }
          }),
        }}
      />
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logo}>
            <div>SHARIFF <span className={styles.logoRed}>SUFI</span></div>
            <span className={styles.logoSmall}>FOUNDATION</span>
          </div>
          
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
          </button>

          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ""}`}>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#mission" onClick={() => setIsMenuOpen(false)}>Mission</a></li>
            <li><a href="#legal" onClick={() => setIsMenuOpen(false)}>Legal</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <a href="#contact" className="btn btn-primary">Support Us</a>
        </div>
      </nav>

      <main>
        {/* Hero Section - Split Layout */}
        <section className={styles.hero}>
          <div className={`container`}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  Shariff Sufi
                  <span className={styles.heroTitleSmall}>Foundation</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  Shariff Sufi Foundation exists to advance education, promote social inclusion, 
                  and provide recreational opportunities for young people up to age 25.
                </p>
                <div className={styles.ctas}>
                  <a href="#about" className="btn btn-primary">Learn More</a>
                  <a href="#contact" className="btn btn-outline" style={{ marginLeft: '20px' }}>Contact Us</a>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.heroDecoration}></div>
                <Image 
                  src="/hero.png" 
                  alt="Shariff Sufi Foundation Work" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`section ${styles.aboutSection}`}>
          <div className="container">
            <div className={styles.aboutGrid}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>About Shariff Sufi Foundation</span>
                <h2 className={styles.sectionTitle}>Supporting Young People in Camden</h2>
              </div>
              <div className={styles.aboutText}>
                <p>
                  <span className={styles.aboutHighlight}>Shariff Sufi Foundation</span> is a UK registered Charitable Incorporated Organisation (CIO) supporting young people up to the age of 25, particularly in and around the London Borough of Camden.
                </p>
                <p style={{ marginTop: '20px' }}>
                  We provide advice, guidance, educational support, and inclusive recreational activities that help young people develop life skills, improve wellbeing, and participate positively in society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className={`section ${styles.missionSection}`}>
          <div className="container">
            <div className={styles.aboutGrid}>
               <div className={styles.missionImage}>
                <Image 
                  src="/mission.png" 
                  alt="Our Mission" 
                  width={600} 
                  height={450}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.missionContent}>
                <span className={styles.sectionLabel}>Our Mission</span>
                <h2 className={styles.sectionTitle}>Empowering Through Opportunity</h2>
                <p style={{ marginTop: '30px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                  Shariff Sufi Foundation exists to empower young people by advancing education, promoting social inclusion, relieving unemployment, and providing safe recreational and developmental opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal & Footer Area */}
        <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footerGrid}>
              <div id="legal">
                <h3 className={styles.footerTitle}>Legal Information</h3>
                <p className={styles.footerText}>Shariff Sufi Foundation</p>
                <p className={styles.footerText}>Charitable Incorporated Organisation (CIO)</p>
                <p className={styles.footerText}>Registered in England and Wales</p>
                <p className={styles.footerText}>Registered Charity Number: 1215515</p>
              </div>
              
              <div id="contact">
                <h3 className={styles.footerTitle}>Contact Us</h3>
                <p className={styles.footerText}>Email</p>
                <a href="mailto:info@shariffsufifoundation.org" className={styles.footerContact}>info@shariffsufifoundation.org</a>
              </div>

              <div>
                <h3 className={styles.footerTitle}>Links</h3>
                <ul className={styles.footerText}>
                  <li><a href="#about">About</a></li>
                  <li><a href="#mission">Mission</a></li>
                  <li><a href="#legal">Legal</a></li>
                </ul>
              </div>
            </div>
            
            <div style={{ marginTop: '60px', opacity: 0.3, fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
              © {new Date().getFullYear()} Shariff Sufi Foundation. All rights reserved. Registered Charity No. 1215515.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
