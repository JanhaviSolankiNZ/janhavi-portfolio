import Link from 'next/link'
import styles from './hire.module.css'

const reasons = [
  {
    title: 'No visa friction',
    desc: 'Open work visa — no sponsorship, no delays, no paperwork. I can start as soon as you need me.',
  },
  {
    title: 'Full-stack, frontend-first',
    desc: 'Strong enough on the backend to own features end-to-end, but my sharpest edge is React and Next.js UI. You get speed without sacrificing quality.',
  },
  {
    title: 'Ships and communicates',
    desc: 'Four years in Agile Scrum teams — sprint ceremonies, PR reviews, cross-functional collaboration. I know how to work with designers, QA, and product.',
  },
  {
    title: 'Accessible by default',
    desc: 'WCAG compliance is built into my workflow, not bolted on. Apps I build work for everyone.',
  },
  {
    title: 'Performance-minded',
    desc: 'Reduced page load times by 35% across Next.js projects via lazy loading, memoization, code-splitting, and smart rendering strategies.',
  },
  {
    title: 'AI-augmented output',
    desc: 'Comfortable using GitHub Copilot and LLM tools to accelerate delivery — without losing ownership of the code.',
  },
]

const faqs = [
  {
    q: 'What type of role are you looking for?',
    a: 'Frontend or full-stack JavaScript roles — React, Next.js, TypeScript. I am open to permanent, contract, or fixed-term. Preferably Auckland-based or remote within NZ.',
  },
  {
    q: 'Are you available immediately?',
    a: 'Yes. I hold a New Zealand open work visa with no conditions and am available to start as soon as needed.',
  },
  {
    q: 'Do you need visa sponsorship?',
    a: 'No — I have an open work visa. No sponsorship required, no immigration process to navigate on your end.',
  },
  {
    q: 'What industries have you worked in?',
    a: 'Healthcare, education, SaaS, and enterprise communications. I adapt quickly to new domains.',
  },
  {
    q: 'Are you open to hybrid or in-office?',
    a: 'Yes — I am flexible with hybrid and in-office arrangements in Auckland.',
  },
]

export default function HirePage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Hero */}
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Let&apos;s work together</p>
          <h1 className={styles.pageTitle}>
            Ready to hire a React specialist<br />
            <em>based in Auckland?</em>
          </h1>
          <p className={styles.pageSub}>
            I&apos;m actively looking for frontend or full-stack roles. Open work visa,
            available immediately, no sponsorship required.
          </p>
          <div className={styles.headerActions}>
            <a href="mailto:janhavissolanki112@gmail.com" className={styles.bigBtn}>
              Send me an email
            </a>
            <a href="tel:02124115422" className={styles.ghostBtn}>
              Call 021 241 1542
            </a>
          </div>
        </header>

        {/* Contact card + reasons */}
        <div className={styles.topGrid}>
          {/* Contact details */}
          <div className={styles.contactCard}>
            <p className={styles.cardSectionLabel}>Contact</p>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:janhavissolanki112@gmail.com" className={styles.contactVal}>
                janhavissolanki112@gmail.com
              </a>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:02124115422" className={styles.contactVal}>021 241 1542</a>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>LinkedIn</span>
              <a href="https://www.linkedin.com/in/janhavi-solanki-6377b81b5/" target="_blank" rel="noopener noreferrer" className={styles.contactVal}>
                janhavi-solanki ↗
              </a>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.contactPlain}>Auckland, New Zealand</span>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Visa</span>
              <span className={styles.contactPlain}>Open work visa · no sponsorship</span>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Available</span>
              <span className={styles.contactPlain}>Immediately</span>
            </div>

            <div className={styles.statusPill}>
              <span className={styles.dot} aria-hidden="true" />
              Actively looking · June 2025
            </div>
          </div>

          {/* Why hire me */}
          <div className={styles.reasons}>
            <p className={styles.cardSectionLabel}>Why hire me</p>
            <div className={styles.reasonGrid}>
              {reasons.map(r => (
                <div key={r.title} className={styles.reason}>
                  <p className={styles.reasonTitle}>{r.title}</p>
                  <p className={styles.reasonDesc}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Common questions</h2>
          <div className={styles.faqs}>
            {faqs.map(f => (
              <div key={f.q} className={styles.faq}>
                <p className={styles.faqQ}>{f.q}</p>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work preview CTA */}
        <div className={styles.workCta}>
          <div>
            <p className={styles.workCtaTitle}>Want to see what I build?</p>
            <p className={styles.workCtaSub}>Browse my projects before reaching out.</p>
          </div>
          <Link href="/work" className={styles.workCtaBtn}>View my work →</Link>
        </div>

      </div>
    </div>
  )
}