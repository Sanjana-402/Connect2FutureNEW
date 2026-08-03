import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size,
  showArrow = true,
  type = 'button',
  className = '',
}) {
  const classes = `${styles.btn} ${styles[variant]} ${size ? styles[size] : ''} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <span className={styles.arrow}><ArrowIcon /></span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
