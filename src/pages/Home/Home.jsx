import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import StatBlock from '../../components/StatBlock/StatBlock';
import InsightCard from '../../components/InsightCard/InsightCard';
import EcosystemCards from '../../components/EcosystemCards/EcosystemCards'; // <-- new import
import { images } from '../../utils/images';
import { ventures } from '../../data/ventures';
import { homeInsights } from '../../data/insights';
import styles from './Home.module.css';

const heroSlides = [images.heroHome1, images.heroHome2, images.heroHome3];

const impactStats = [
  { value: '6', label: 'Ventures' },
  { value: '100+', label: 'Professionals' },
  { value: '500K+', label: 'Lives Impacted' },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveSlide((s) => (s + 1) % 3), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        {heroSlides.map((src, i) => (
          <img key={src} src={src} alt="" className={styles.heroImage} />
        ))}
        <div className={styles.heroOverlay} />

        <Container wide className={styles.heroContent}>
          <div className={styles.heroInner}>
            <div className={styles.heroDots}>
              {['01', '02', '03'].map((n, i) => (
                <span key={n} className={`${styles.heroDot} ${i === activeSlide ? styles.heroDotActive : ''}`}>
                  {n}
                </span>
              ))}
            </div>

            <div>
              <motion.h1
                className={`h-display ${styles.heroTitle}`}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Building the Future, Creating Possibilities.
              </motion.h1>
              <motion.p
                className={`text-body-lg ${styles.heroSubtitle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Connect2Future is a diversified ecosystem of companies empowering people,
                businesses and communities through innovation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Button to="/our-ecosystem" variant="gold">Explore Our Ecosystem</Button>
              </motion.div>

              {/* Ecosystem cards ΓÇô directly below the button, still inside hero */}
              <EcosystemCards />
            </div>
          </div>
        </Container>

        {/* <div className={styles.scrollDown}>
          <span>Scroll Down</span>
          <span className={styles.scrollLine} />
        </div> */}
      </section>

      {/* ============ CHAIRMAN'S MESSAGE ============ */}
      <section className="section bg-background">
        <Container wide>
          <div className={styles.chairman}>
            <RevealOnScroll className={styles.chairmanText}>
              <span className="eyebrow">Chairman's Message</span>
              <h2 className="h-2" style={{ marginTop: '16px', marginBottom: '20px' }}>
                A Vision for a Better Tomorrow
              </h2>
              <p className="text-body-lg" style={{ marginBottom: '28px' }}>
                At Connect2Future, our purpose is to build and nurture businesses that
                solve real problems and create lasting impact. We believe in the power
                of people, the strength of innovation and the promise of a future built together.
              </p>
              <div className={styles.signature}>Vikram N.</div>
              <div className={styles.signatureRole}>Chairman, Connect2Future</div>
              <Button to="/who-we-are" variant="secondary">Read Full Message</Button>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15} className={styles.chairmanImageWrap}>
              <img src={images.chairman} alt="Vikram N., Chairman, Connect2Future" className={styles.chairmanImage} />
              <div className={styles.quoteCard}>
                <span className={styles.quoteMark}>&ldquo;</span>
                <p className={styles.quoteText}>
                  We don't just build companies, we build opportunities.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* ============ ECOSYSTEM PREVIEW ============ */}
      <section className="section bg-surface">
        <Container wide>
          <SectionTitle
            center
            eyebrow="Our Ecosystem"
            title="Six Ventures. One Vision."
          />
          <div className={styles.ventureGrid}>
            {ventures.map((v, i) => (
              <RevealOnScroll key={v.id} delay={i * 0.06} className={styles.ventureCard} as="div">
                <div className={styles.ventureMark}>{v.mark}</div>
                <h3 className={styles.ventureName}>{v.name}</h3>
                <p className={styles.ventureTagline}>{v.tagline}</p>
                <span className={styles.ventureExplore}>
                  Explore
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </RevealOnScroll>
            ))}
          </div>
          <div className={styles.viewAllWrap}>
            <Button to="/our-ecosystem" variant="primary">View All Companies</Button>
          </div>
        </Container>
      </section>

      {/* ============ INSIGHTS PREVIEW ============ */}
      <section className="section bg-background">
        <Container wide>
          <div className={styles.insightsHeader}>
            <RevealOnScroll>
              <span className="eyebrow">Latest Insights</span>
              <h2 className="h-2" style={{ marginTop: '16px' }}>Ideas. Innovation. Impact.</h2>
            </RevealOnScroll>
            <Button to="/insights" variant="ghost">View All Insights</Button>
          </div>
          <div className={styles.insightsGrid}>
            {homeInsights.map((item, i) => (
              <InsightCard key={item.title} item={item} delay={i * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* ============ IMPACT ============ */}
      <section className="section bg-primary">
        <Container wide>
          <div className={styles.impact}>
            <RevealOnScroll>
              <span className="eyebrow">Our Impact</span>
              <h2 className="h-2 text-white" style={{ marginTop: '16px' }}>
                Creating Value That Matters.
              </h2>
            </RevealOnScroll>
            <StatBlock stats={impactStats} cols={3} />
          </div>
        </Container>
      </section>
    </>
  );
}
