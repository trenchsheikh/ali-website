"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/site.module.css";

const navItems: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/donate", label: "Donate" },
  { href: "/legal", label: "Legal" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={active ? styles.navLinkActive : undefined}
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logoLink} onClick={closeMenu}>
            <div className={styles.logo}>
              <div>
                SHARIFF <span className={styles.logoRed}>SUFI</span>
              </div>
              <span className={styles.logoSmall}>FOUNDATION</span>
            </div>
          </Link>

          <button
            type="button"
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
          </button>

          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ""}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} onNavigate={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link href="/donate" className="btn btn-primary" onClick={closeMenu}>
            Support Us
          </Link>
        </div>
      </nav>

      <main className={styles.innerMain}>{children}</main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <h3 className={styles.footerTitle}>Legal Information</h3>
              <p className={styles.footerText}>Shariff Sufi Foundation</p>
              <p className={styles.footerText}>Charitable Incorporated Organisation (CIO)</p>
              <p className={styles.footerText}>Registered in England and Wales</p>
              <p className={styles.footerText}>Registered Charity Number: 1215515</p>
            </div>

            <div>
              <h3 className={styles.footerTitle}>Contact Us</h3>
              <p className={styles.footerText}>Email</p>
              <a href="mailto:info@shariffsufifoundation.org" className={styles.footerContact}>
                info@shariffsufifoundation.org
              </a>
            </div>

            <div>
              <h3 className={styles.footerTitle}>Links</h3>
              <ul className={styles.footerText}>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/mission">Mission</Link>
                </li>
                <li>
                  <Link href="/donate">Donate</Link>
                </li>
                <li>
                  <Link href="/legal">Legal</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: "60px",
              opacity: 0.3,
              fontSize: "0.8rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "20px",
            }}
          >
            © {new Date().getFullYear()} Shariff Sufi Foundation. All rights reserved. Registered
            Charity No. 1215515.
          </div>
        </div>
      </footer>
    </div>
  );
}
