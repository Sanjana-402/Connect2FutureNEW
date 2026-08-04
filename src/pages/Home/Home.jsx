import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import StatBlock from '../../components/StatBlock/StatBlock';
import InsightCard from '../../components/InsightCard/InsightCard';
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
            </div>
          </div>
        </Container>

        <div className={styles.scrollDown}>
          <span>Scroll Down</span>
          <span className={styles.scrollLine} />
        </div>
      </section>

      {/* ============ OUR FOUNDERS ============ */}
      <section className={`${styles.foundersSection} bg-background`}>
        <Container wide>

          <RevealOnScroll className={styles.founderHeader}>
            <span className="eyebrow">OUR FOUNDERS</span>

            <h2 className="h-2" style={{ marginTop: "18px" }}>
              A Vision for a Better Tomorrow
            </h2>
          </RevealOnScroll>

          <div className={styles.founderGrid}>

            <RevealOnScroll className={styles.founderCard}>

              <img
                src="/founder1.jpg"
                alt="Founder 1"
                className={styles.founderImage}
              />

              <div className={styles.quoteCard}>

                <span className={styles.quoteMark}>
                  &ldquo;
                </span>

                <p className={styles.quoteText}>
                  We don't just build companies,
                  we build opportunities.
                </p>

              </div>

            </RevealOnScroll>

            <RevealOnScroll
              delay={0.15}
              className={styles.founderCard}
            >

              <img
                src="/founder2.jpg"
                alt="Founder 2"
                className={styles.founderImage}
              />

              <div className={styles.quoteCard}>

                <span className={styles.quoteMark}>
                  &ldquo;
                </span>

                <p className={styles.quoteText}>
                  Innovation begins with people
                  and grows through vision.
                </p>

              </div>

            </RevealOnScroll>

          </div>

        </Container>
        <div className={styles.founderClosing}>
          <p>
            "𝘌𝘮𝘱𝘰𝘸𝘦𝘳𝘪𝘯𝘨 𝘱𝘦𝘰𝘱𝘭𝘦. 𝘐𝘯𝘴𝘱𝘪𝘳𝘪𝘯𝘨 𝘪𝘯𝘯𝘰𝘷𝘢𝘵𝘪𝘰𝘯. 𝘉𝘶𝘪𝘭𝘥𝘪𝘯𝘨 𝘣𝘶𝘴𝘪𝘯𝘦𝘴𝘴𝘦𝘴 𝘵𝘩𝘢𝘵 𝘤𝘳𝘦𝘢𝘵𝘦 𝘭𝘢𝘴𝘵𝘪𝘯𝘨 𝘪𝘮𝘱𝘢𝘤𝘵."
          </p>
        </div>
      </section>
            {/* ============ IMPACT ============ */}
      <section  style={{ paddingTop: "40px",paddingBottom: "40px" ,background:"#0b0b0b"}}>
        <Container wide>
          <div className={styles.impact}>
            <RevealOnScroll>
              <span className="eyebrow" style={{ color: "#ff1ea8" }}>Our Impact</span>
              <h2 className="text-white" style={{ fontSize:"3rem",lineHeight:"1.1",fontWeight:600 }}>
                Creating Value That Matters.
              </h2>
            </RevealOnScroll>
            <StatBlock stats={impactStats} cols={3} />
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



    </>
  );
}
