import { motion } from 'framer-motion';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './Timeline.module.css';

const SEGMENT_DURATION = 3; // seconds between one dot lighting up and the next

function AnimatedTimeline({ milestones }) {
  const count = milestones.length;
  const totalDuration = count > 1 ? SEGMENT_DURATION * (count - 1) : SEGMENT_DURATION;

  const fillVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: { duration: totalDuration, ease: 'linear' },
    },
  };

  function getDotVariants(index) {
    // ✅ FIXED: Triggers exactly when the line reaches the CENTER of the dot column
    const progress = (index + 0.5) / count; 
    return {
      hidden: {
        backgroundColor: '#ffffff',     // Solid white before the line arrives
        borderColor: '#ffffff',
        boxShadow: '0 0 0 0 rgba(255,30,168,0)',
      },
      visible: {
        backgroundColor: '#ff1ea8',
        borderColor: '#ff1ea8',
        boxShadow: '0 0 14px 4px rgba(255,30,168,0.65)',
        transition: { 
          // Color snaps instantly to pink at the exact moment it touches the center
          backgroundColor: { delay: progress * totalDuration, duration: 0 },
          borderColor: { delay: progress * totalDuration, duration: 0 },
          // The glow fades in slightly for a smoother visual "pop"
          boxShadow: { delay: progress * totalDuration, duration: 0.2 }, 
        },
      },
    };
  }

  return (
    <motion.div
      className={`${styles.track} ${styles.trackLight}`}
      style={{ '--count': count }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <span className={styles.trackBase} />
      <motion.span className={styles.trackFill} variants={fillVariants} />

      {milestones.map((m, i) => (
        <div key={m.year} className={styles.item}>
          <motion.span className={styles.dot} variants={getDotVariants(i)} />
          <RevealOnScroll delay={i * 0.08}>
            <div className={styles.year}>{m.year}</div>
            <div className={styles.title}>{m.title}</div>
            <p className={styles.desc}>{m.description}</p>
          </RevealOnScroll>
        </div>
      ))}
    </motion.div>
  );
}

function StaticTimeline({ milestones }) {
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

export default function Timeline({ milestones, light = false }) {
  if (light) {
    return <AnimatedTimeline milestones={milestones} />;
  }
  return <StaticTimeline milestones={milestones} />;
}