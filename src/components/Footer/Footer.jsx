import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import { footerLinks } from '../../data/navigation';
import { ecosystemCompanies } from '../../data/ecosystemCompanies';
import styles from './Footer.module.css';
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/connect2future/",
    icon: <FaLinkedinIn />
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/the_c2f_?igsh=MWpvMDF4anE5bnA3eQ==",
    icon: <FaInstagram />
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917019436720?text=Hello%20Connect2Future,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services%20and%20business%20solutions.%0A%0AThank%20you.",
    icon: <FaWhatsapp />
  },
  {
    label: "Email",
    href: "mailto:hr@connect2future.com",
    icon: <FaEnvelope />
  }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container wide>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <img
                src="/c2flooooo.png"
                alt="Connect2Future"
                className={styles.logoIcon}
              />

              <div className={styles.brand}>
                <div className={styles.verticalLine}></div>

                <div className={styles.text}>
                  <h3 className={styles.title}>
                    Connect2future
                  </h3>

                  <p className={styles.tagline}>
                    UNLOCK THE POWER OF CONNECTIVITY
                  </p>
                </div>
              </div>
            </div>
            <p className={styles.desc}>
              Building companies that create opportunities, drive innovation and deliver lasting impact.
            </p>
            <div className={styles.social}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Explore</div>
            {footerLinks.explore.map((l) => (
              <Link key={l.label} to={l.path} className={styles.colLink}>{l.label}</Link>
            ))}
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Our Ecosystem</div>
            {ecosystemCompanies.map((v) => (
              <a
                key={v.id}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.colLink}
              >
                {v.name}
              </a>
            ))}
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Company</div>
            {footerLinks.company.map((l) => (
              <Link key={l.label} to={l.path} className={styles.colLink}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>&copy; {new Date().getFullYear()} Connect2Future. All rights reserved.</span>
          <span>Building the future. <strong>Together.</strong></span>
        </div>
      </Container>
    </footer>
  );
}
