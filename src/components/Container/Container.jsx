import styles from './Container.module.css';

export default function Container({ children, wide = false, className = '' }) {
  return (
    <div className={`${styles.container} ${wide ? styles.wide : ''} ${className}`}>
      {children}
    </div>
  );
}
