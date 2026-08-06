import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Hero.module.css';

export default function Hero({ eyebrow, breadcrumb, title, subtitle, image, children }) {
  return (
    <section className={styles.hero}>
      <motion.img
        src={image}
        alt=""
        className={styles.image}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className={styles.overlay} />
      <Container wide className={styles.content}>
        {breadcrumb && (
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>&rsaquo;</span>
            <span>{breadcrumb}</span>
          </div>
        )}
        <motion.h1
          className={`h-1 ${styles.title}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        <div className={styles.underline} />
        {subtitle && (
          <motion.p
            className={`text-body-lg ${styles.subtitle}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
      </Container>

      {children && (
        <Container wide className={styles.bottomOverlay}>
          {children}
        </Container>
      )}
    </section>
  );
}