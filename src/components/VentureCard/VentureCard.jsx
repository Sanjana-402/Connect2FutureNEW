import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import Button from '../Button/Button';
import styles from './VentureCard.module.css';

const StatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 13.5V2.5M2 13.5H14M2 13.5L6 8.5L9 10.5L14 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function VentureCard({ venture, reverse = false }) {
  return (
    <RevealOnScroll className={`${styles.row} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageWrap}>
        <img src={venture.image} alt={venture.name} className={styles.image} loading="lazy" />
      </div>

      <div className={styles.info}>
        <div>
          <div className={styles.header}>
            <span className={styles.mark}>{venture.mark}</span>
            <h3 className={`h-3 ${styles.name}`}>{venture.name}</h3>
          </div>
          <p className={styles.tagline}>{venture.tagline}</p>
          <p className={`text-body ${styles.desc}`}>{venture.description}</p>
          <Button to="/our-ecosystem" variant="secondary" size="sm">Learn More</Button>
        </div>

        <div className={styles.statList}>
          {venture.stats.map((s) => (
            <div className={styles.statItem} key={s.label}>
              <span className={styles.statIcon}><StatIcon /></span>
              <div>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
