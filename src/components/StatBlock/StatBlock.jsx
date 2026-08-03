import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './StatBlock.module.css';

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState('0');

  const numeric = parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
  const suffix = value.replace(/[\d,]/g, '');

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(numeric * eased).toLocaleString());
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function StatBlock({ stats, light = false, cols = 4 }) {
  return (
    <div className={styles.row} style={{ '--cols': cols }}>
      {stats.map((s, i) => (
        <RevealOnScroll key={s.label} delay={i * 0.08} className={`${styles.stat} ${light ? styles.statLight : ''}`}>
          <div className={styles.value}><Counter value={s.value} /></div>
          <div className={`${styles.label} ${light ? styles.labelLight : ''}`}>{s.label}</div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
