import Container from '../Container/Container';
import styles from './Newsletter.module.css';

export default function Newsletter({ text = 'Stay connected with our latest updates and stories.', cta = 'Subscribe to Newsletter' }) {
  return (
    <section className={styles.bar}>
      <Container wide className={styles.inner}>
        <div className={styles.left}>
          <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M2.5 5L10 11L17.5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{text}</span>
        </div>
        <button className={styles.btn}>{cta}</button>
      </Container>
    </section>
  );
}
