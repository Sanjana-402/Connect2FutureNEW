import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import { footerLinks } from '../../data/navigation';
import { ventures } from '../../data/ventures';
import styles from './Footer.module.css';

const socials = [
  { label: 'LinkedIn', path: 'M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.44-2.16 2.96V21h-4z' },
  { label: 'Twitter', path: 'M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4 4 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 01-1.9.1c.5 1.7 2.1 2.9 4 3A8.2 8.2 0 012 18.6a11.6 11.6 0 006.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.1z' },
  { label: 'Instagram', path: 'M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.37.47 2.43C21.99 8.94 22 9.3 22 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47C15.06 21.99 14.7 22 12 22s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z' },
  { label: 'YouTube', path: 'M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.6 15.5V8.5l6.3 3.5-6.3 3.5z' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container wide>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>C2F</span>
              <span className={styles.logoText}>CONNECT2FUTURE</span>
            </div>
            <p className={styles.desc}>
              Building companies that create opportunities, drive innovation and deliver lasting impact.
            </p>
            <div className={styles.social}>
              {socials.map((s) => (
                <a key={s.label} href="#" className={styles.socialIcon} aria-label={s.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Explore</div>
            {footerLinks.explore.map((l) => (
              <Link key={l.label} to={l.path} className={styles.colLink}>{l.label}</Link>
            ))}
          </div>

          <div>
            <div className={styles.colTitle}>Our Ecosystem</div>
            {ventures.map((v) => (
              <Link key={v.id} to="/our-ecosystem" className={styles.colLink}>{v.name}</Link>
            ))}
          </div>

          <div>
            <div className={styles.colTitle}>Company</div>
            {footerLinks.company.map((l) => (
              <Link key={l.label} to={l.path} className={styles.colLink}>{l.label}</Link>
            ))}
            <div className={styles.colTitle} style={{ marginTop: '20px' }}>Legal</div>
            {footerLinks.legal.map((l) => (
              <Link key={l.label} to={l.path} className={styles.colLink}>{l.label}</Link>
            ))}
          </div>

          <div>
            <div className={styles.colTitle}>Stay Connected</div>
            <p className={styles.desc}>Subscribe to our newsletter and stay updated.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className={styles.newsletterInput}
                aria-label="Email address"
              />
              <button type="submit" className={styles.newsletterSubmit} aria-label="Subscribe">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
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
