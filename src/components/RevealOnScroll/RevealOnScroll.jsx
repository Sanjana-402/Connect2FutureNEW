import { motion } from 'framer-motion';

/**
 * Wraps children in a subtle fade + rise reveal, triggered once
 * when the element enters the viewport. Used throughout the site
 * in place of scattered one-off animation logic.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  className,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
