import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './SectionTitle.module.css';

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
  className = '',
}) {
  return (
    <RevealOnScroll className={`${styles.wrap} ${center ? styles.center : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`h-2 ${styles.title}`} style={dark ? { color: '#fff' } : undefined}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body-lg ${styles.subtitle}`} style={dark ? { color: 'rgba(255,255,255,0.72)' } : undefined}>
          {subtitle}
        </p>
      )}
    </RevealOnScroll>
  );
}
