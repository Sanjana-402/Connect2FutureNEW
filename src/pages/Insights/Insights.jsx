import { useState } from 'react';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import Button from '../../components/Button/Button';
import InsightCard from '../../components/InsightCard/InsightCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import { images } from '../../utils/images';
import { featuredInsight, sideInsights, gridInsights, insightCategories } from '../../data/insights';
import styles from './Insights.module.css';

const categoryIcons = {
  All: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.3" /></svg>,
  Insights: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" /><path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  Announcements: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 8v2l10 3V5L3 8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><path d="M6 11v3a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.3" /></svg>,
  Stories: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 3h10v12H4a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" /><path d="M6 7h6M6 10h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  Media: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M7 7l5 2.5L7 12V7z" fill="currentColor" /></svg>,
  Gallery: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="6" cy="7" r="1.4" stroke="currentColor" strokeWidth="1.3" /><path d="M3 14l4-4 3 3 3-4 3 5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>,
};

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);
  const totalPages = 8;

  return (
    <>
      <Hero
        breadcrumb="Insights"
        title="Ideas. Innovation. Impact."
        subtitle="Stay informed with the latest stories, announcements, insights and perspectives from across Connect2Future."
        image={images.insightsHero}
      />

      <section className="section bg-background">
        <Container wide>
          <div className={styles.categories}>
            <div className={styles.categoryList}>
              {insightCategories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.categoryItem} ${activeCategory === cat ? styles.categoryActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span className={styles.categoryIcon}>{categoryIcons[cat]}</span>
                  {cat}
                </button>
              ))}
            </div>
            <Button variant="primary" size="sm">View All Insights</Button>
          </div>

          {/* Featured + side stories */}
          <div className={styles.featuredGrid}>
            <RevealOnScroll className={styles.featuredCard} as="article">
              <img src={featuredInsight.image} alt={featuredInsight.title} className={styles.featuredImage} />
              <div className={styles.featuredOverlay} />
              <span className={styles.featuredBadge}>Featured Insight</span>
              <div className={styles.featuredContent}>
                <span className={styles.featuredCategory}>{featuredInsight.category}</span>
                <h2 className={styles.featuredTitle}>{featuredInsight.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredInsight.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <a href="#" className={styles.readFull}>
                    Read Full Story
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <span className={styles.featuredDate}>{featuredInsight.date} &bull; {featuredInsight.readTime}</span>
                </div>
              </div>
            </RevealOnScroll>

            <div className={styles.sideList}>
              {sideInsights.map((item, i) => (
                <RevealOnScroll key={item.title} delay={0.1 + i * 0.08} className={styles.sideItem} as="article">
                  <div>
                    <span className={styles.sideCategory}>{item.category}</span>
                    <h3 className={styles.sideTitle}>{item.title}</h3>
                    <p className={styles.sideExcerpt}>{item.excerpt}</p>
                    <span className={styles.sideMeta}>{item.date} &bull; {item.readTime}</span>
                  </div>
                  <div className={styles.sideImageWrap}>
                    <img src={item.image} alt={item.title} className={styles.sideImage} />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Magazine grid */}
          <div className={styles.grid}>
            {gridInsights.map((item, i) => (
              <InsightCard key={item.title} item={item} delay={i * 0.08} />
            ))}
          </div>

          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
            >
              &larr;
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`${styles.pageBtn} ${page === n ? styles.pageActive : ''}`}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <span className={styles.pageBtn} style={{ border: 'none' }}>&hellip;</span>
            <button
              className={`${styles.pageBtn} ${page === totalPages ? styles.pageActive : ''}`}
              onClick={() => setPage(totalPages)}
            >
              {totalPages}
            </button>
            <button
              className={styles.pageBtn}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              aria-label="Next page"
            >
              &rarr;
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}
