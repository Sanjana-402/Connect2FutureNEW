import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './Timeline.module.css';

export default function Timeline({ milestones }) {
  return (
    <div className={styles.track} style={{ '--count': milestones.length }}>
      {milestones.map((m, i) => (
        <RevealOnScroll
          key={m.year}
          delay={i * 0.08}
          className={`${styles.item} ${i % 2 === 1 ? styles.itemAccent : ''}`}
        >
          <span className={styles.dot} />
          <div className={styles.year}>{m.year}</div>
          <div className={styles.title}>{m.title}</div>
          <p className={styles.desc}>{m.description}</p>
        </RevealOnScroll>
      ))}
    </div>
  );
}
