import styles from './Container.module.css';

export default function Container({ children, wide = false, className = '', style }) {
  return (
    <div className={`${styles.container} ${wide ? styles.wide : ''} ${className}`} style={style}>
      {children}
    </div>
  );
}
