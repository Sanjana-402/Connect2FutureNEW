import { useState } from 'react';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import { images } from '../../utils/images';
import styles from './Contact.module.css';

const infoItems = [
  {
    title: 'Our Office',
    lines: ['Connect2Future Corporate Office', 'Prestige Tech Park, Kadubeesanahalli', 'Bengaluru, Karnataka 560103, India'],
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 18s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" stroke="currentColor" strokeWidth="1.4" /><circle cx="10" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" /></svg>,
  },
  {
    title: 'Call Us',
    lines: ['+91 98765 43210', 'Mon – Fri, 9:00 AM – 6:00 PM IST'],
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 3h3l1.5 4-2 1.5a10 10 0 004.5 4.5L12.5 11l4 1.5V16a1.5 1.5 0 01-1.6 1.5A14 14 0 014 4.6 1.5 1.5 0 015.5 3H4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>,
  },
  {
    title: 'Email Us',
    lines: ['hello@connect2future.com', 'partnerships@connect2future.com'],
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M3 5.5L10 11l7-5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  },
  {
    title: 'Working Hours',
    lines: ['Monday – Friday', '9:00 AM – 6:00 PM IST'],
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" /><path d="M10 5.5V10l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  },
];

const reachOptions = [
  { title: 'Partnerships', text: 'Explore strategic collaborations and partnership opportunities.', icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M9 13l3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 10l3-3h4l2 2M22 10l-3-3h-4l-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { title: 'Careers', text: 'Join our team and be a part of our growth journey.', icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="5" y="9" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M9 9V7a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.4" /></svg> },
  { title: 'Investors', text: 'Learn more about our ecosystem and investment opportunities.', icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.4" /><path d="M6 21c0-3.6 3-6.5 7-6.5s7 2.9 7 6.5" stroke="currentColor" strokeWidth="1.4" /><path d="M17 6l1.5 1.5L21 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { title: 'Media & Press', text: 'For media inquiries, press releases, and brand assets.', icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="3" y="6" width="20" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M9.5 10.5L15 13l-5.5 2.5v-5z" fill="currentColor" /></svg> },
  { title: 'General Inquiries', text: 'Have a question? We\u2019re happy to help.', icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="1.4" /><path d="M13 17v.01M11 10a2 2 0 112.6 1.9c-.9.3-1.6 1-1.6 2.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg> },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Hero
        breadcrumb="Contact"
        title="Let's Build the Future. Together."
        subtitle="We are always open to new ideas, partnerships, and opportunities. Get in touch with us."
        image={images.contactOffice}
      />

      {/* ===== INFO STRIP ===== */}
      <section className="section-tight bg-background">
        <Container wide>
          <div className={styles.infoStrip}>
            {infoItems.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.08} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div className={styles.infoTitle}>{item.title}</div>
                <div>
                  {item.lines.map((line) => (
                    <p key={line} className={styles.infoText}>{line}</p>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FORM + MAP ===== */}
      <section className="section bg-surface">
        <Container wide>
          <div className={styles.formMapGrid}>
            <RevealOnScroll>
              <span className="eyebrow">Send Us a Message</span>
              <h2 className="h-2" style={{ marginTop: '16px' }}>We'd Love to Hear From You</h2>
              <p className="text-body" style={{ marginTop: '12px' }}>
                Whether you have a question, want to explore a partnership, or just want
                to say hello, our team is here to help.
              </p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <input className={styles.field} type="text" placeholder="Full Name *" required />
                  <input className={styles.field} type="email" placeholder="Email Address *" required />
                </div>
                <input className={styles.field} type="text" placeholder="Company / Organization" />
                <input className={styles.field} type="text" placeholder="Subject" />
                <textarea className={styles.textarea} placeholder="Your Message *" required />

                <div className={styles.formFooter}>
                  <Button type="submit" variant="primary">
                    {submitted ? 'Message Sent' : 'Send Message'}
                  </Button>
                  <div className={styles.secureNote}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="3" y="7" width="10" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    Your information is secure and will never be shared.
                  </div>
                </div>
              </form>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <span className="eyebrow">Find Us Here</span>
              <div className={styles.mapWrap}>
                <iframe
                  title="Connect2Future office location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Prestige+Tech+Park+Kadubeesanahalli+Bengaluru&output=embed"
                />
              </div>

              <div className={styles.impactCard}>
                <div className={styles.impactIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 2L2 9l6 2 2 6 8-15z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.impactTitle}>Let's Create Impact Together</h3>
                  <p className={styles.impactText}>
                    We collaborate with visionary organizations and individuals to build
                    innovative solutions that create real-world impact.
                  </p>
                  <a href="#" className={styles.impactLink}>
                    Explore Partnership Opportunities
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* ===== REACH OUT FOR ===== */}
      <section className="section bg-background">
        <Container wide>
          <SectionTitle center eyebrow="We'd Love to Connect" title="Reach Out for" />
          <div className={styles.reachGrid}>
            {reachOptions.map((r, i) => (
              <RevealOnScroll key={r.title} delay={i * 0.08} className={styles.reachItem}>
                <div className={styles.reachIcon}>{r.icon}</div>
                <div className={styles.reachTitle}>{r.title}</div>
                <p className={styles.reachText}>{r.text}</p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
