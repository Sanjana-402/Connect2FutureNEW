import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './InsightCard.module.css';

export default function InsightCard({ item, delay = 0 }) {
  return (
    <RevealOnScroll delay={delay} className={styles.card} as="article">
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.title} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{item.category}</span>
        <h3 className={styles.title}>{item.title}</h3>
        {item.excerpt && <p className={styles.excerpt}>{item.excerpt}</p>}
        <div className={styles.meta}>
          <span>{item.date}</span>
          <span>&bull;</span>
          <span>{item.readTime}</span>
        </div>
        <a href="#" className={styles.readMore}>
          Read More
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </RevealOnScroll>
  );
}
