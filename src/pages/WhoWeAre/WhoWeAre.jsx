import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Timeline from '../../components/Timeline/Timeline';
import { images } from '../../utils/images';
import styles from './WhoWeAre.module.css';

const purpose = [
  {
    title: 'Our Mission',
    text: 'To build and nurture businesses that solve real problems and improve lives through innovation, technology and human potential.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="11" cy="11" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Our Vision',
    text: 'To be a leading ecosystem of future-ready companies, recognized for our integrity, innovation and impact across industries and communities.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M1 11C1 11 5 4 11 4C17 4 21 11 21 11C21 11 17 18 11 18C5 18 1 11 1 11Z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Our Purpose',
    text: 'To create opportunities, empower individuals, and contribute to a more equitable and sustainable world.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 8.5L20 9.5L15.5 14L16.8 20.5L11 17.3L5.2 20.5L6.5 14L2 9.5L8.5 8.5L11 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const values = [
  { title: 'People First', desc: 'We put people at the heart of everything we do.' },
  { title: 'Innovation', desc: 'We embrace new ideas and create innovative solutions.' },
  { title: 'Integrity', desc: 'We act with transparency and strong moral principles.' },
  { title: 'Collaboration', desc: 'We achieve more together through trust and teamwork.' },
  { title: 'Excellence', desc: 'We pursue excellence in quality and performance.' },
  { title: 'Responsibility', desc: 'We are committed to creating long-term impact.' },
];

const valueIcons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.4" /><circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" /><path d="M15.5 20c0-2.6 1.8-4.7 4-5.3" stroke="currentColor" strokeWidth="1.4" /></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2v.6h5v-.6c0-.8.4-1.5 1-2A6 6 0 0012 3z" stroke="currentColor" strokeWidth="1.4" /><path d="M9.5 19.5h5M10 21.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.4" /></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.5 12.5l2.5 2.5 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" /></svg>,
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19V13M9.5 19V9M15 19V6M20 19V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>,
  <svg key="6" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" stroke="currentColor" strokeWidth="1.4" /></svg>,
];

const milestones = [
  { year: '2022', title: 'The Beginning', description: 'Connect2Future was founded with a vision to build meaningful businesses.' },
  { year: '2023', title: 'First Ventures', description: 'Launch of our early ventures focused on solving real-world challenges.' },
  { year: '2024', title: 'Growing Together', description: 'Our ecosystem expanded, bringing together passionate teams and ideas.' },
  { year: '2025', title: 'Scaling Impact', description: 'Stronger businesses, greater impact and growing communities across India.' },
  { year: '2026', title: 'The Future Ahead', description: 'Continuing our journey of innovation, impact and creating a better tomorrow.' },
];

export default function WhoWeAre() {
  return (
    <>
      <Hero
        breadcrumb="Who We Are"
        title="Who We Are"
        subtitle="Connect2Future is a diversified ecosystem of companies united by a shared purpose — to build businesses that create opportunities, drive innovation and deliver lasting impact."
        image={images.whoWeAreHero}
      >
        <div className={styles.heroTimelineWrap}>
          <SectionTitle  title="Milestones That Define Us" dark />
          <Timeline milestones={milestones} light />
        </div>
      </Hero>

      {/* ===== PURPOSE ===== */}
      <section className="section section-tight bg-surface">
        <Container wide>
          <div className={styles.purposeGrid}>
            <RevealOnScroll className={styles.purposeIntro}>
              <span className="eyebrow">Our Purpose</span>
              <h2 className="h-2" style={{ marginTop: '16px' }}>Why We Exist</h2>
              <p className="text-body">
                We believe in the power of ideas, the potential of people, and the
                responsibility to build a better future for generations to come.
              </p>
            </RevealOnScroll>

            {purpose.map((p, i) => (
              <RevealOnScroll key={p.title} delay={0.1 + i * 0.08} className={styles.purposeCard}>
                <div className={styles.purposeIcon}>{p.icon}</div>
                <div className={styles.purposeTitle}>{p.title}</div>
                <p className="text-body-sm">{p.text}</p>
                <div className={styles.purposeUnderline} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      

      {/* ===== VALUES ===== */}
      <section className="section section-tight bg-background">
        <Container wide>
          <SectionTitle center eyebrow="Our Values" title="The Principles That Guide Us" />
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.06} className={styles.valueItem}>
                <div className={styles.valueIcon}>{valueIcons[i]}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
                <div className={styles.valueUnderline} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

            {/* ===== CERTIFICATION ===== */}
      {/* ✅ Changed style to padding: '0' to eliminate the massive gap */}
      <section className="section bg-surface" style={{ padding: '0' }}>
        <Container wide>
          <div className={styles.certificationCard}>
            <div className={styles.certLogos}>
              <img src={images.iitGuwahatiLogo} alt="IIT Guwahati" className={styles.certLogo} />
              <img src={images.nsdcLogo} alt="NSDC" className={styles.certLogo} />
              <img src={images.masaiLogo} alt="Masai" className={styles.certLogo} />
            </div>
            
            <div className={styles.certDivider}></div>
            
            <div className={styles.certTextArea}>
              <h3>
                Certified / Associated with 
                <span className={styles.certHighlight}> IIT Guwahati</span>
                <span className={styles.greenTick}>✓</span>
              </h3>
              <div className={styles.certMeta}>
                <span>Code: <span className={styles.certCode}>IITGCS/24091634</span></span>
                <span className={styles.officialBadge}>
                  <span>🛡️</span> Official Recognition
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
