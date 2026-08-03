import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '../Container/Container';
import { navLinks } from '../../data/navigation';
import { useScrollNavbar } from '../../hooks/useScrollNavbar';
import styles from './Navbar.module.css';

export default function Navbar() {
  const scrolled = useScrollNavbar(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Container wide className={styles.inner}>
          <Link to="/" className={styles.logo} aria-label="Connect2Future — Home">
            <span className={styles.logoMark}>C2F</span>
            <span className={styles.logoText}>
              CONNECT<span className={styles.logoAccent}>2</span>FUTURE
            </span>
          </Link>

          <nav className={styles.links} aria-label="Primary">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.linkActive : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 16L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <Link to="/contact" className={styles.ctaBtn}>
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <button
            className={styles.burger}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className={styles.burgerLine} />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.scrim}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className={styles.mobilePanel}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                className={styles.mobileClose}
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
