import Link from 'next/link'
import styles from './page.module.css'

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Redux', 'Jest', 'Docker', 'Stripe API']

const highlights = [
  { num: '4+', label: 'years production experience' },
  { num: '26', label: 'languages shipped' },
  { num: '~40%', label: 'agent workflow reduction' },
  { num: '~35%', label: 'page load time reduction' },
]

const previews = [
  { type: 'Independent · Full Stack · AI', title: 'Spendly — AI Expense Tracker', desc: 'Full-stack with Stripe, Groq LLM, OAuth, MongoDB analytics' },
  { type: 'Enterprise · Communications · Twilio', title: 'Twilio Flex Platform', desc: 'Custom plugins · 40% fewer manual agent steps' },
  { type: 'Education · i18n', title: 'School Registration System', desc: '26 languages · skeleton loaders · maintenance mode' },
]

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>Frontend · Full-Stack · Auckland, NZ</p>
            <h1 className={styles.title}>
              I build web apps<br />
              that feel <em>effortless</em>
            </h1>
            <p className={styles.sub}>
              4+ years shipping accessible, performant React and Next.js apps across SaaS,
              healthcare, education, and communications. Available immediately — open work visa,
              no sponsorship needed.
            </p>
            <div className={styles.actions}>
              <Link href="/work" className={styles.btnPrimary}>See my work</Link>
              <Link href="/hire" className={styles.btnGhost}>Hire me</Link>
            </div>
            <div className={styles.contactRow}>
              <a href="https://www.linkedin.com/in/janhavi-solanki-6377b81b5/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn ↗</a>
              <span className={styles.divider} aria-hidden="true" />
              <a href="tel:02124115422" className={styles.contactLink}>021 241 1542</a>
              <span className={styles.divider} aria-hidden="true" />
              <a href="mailto:janhavissolanki112@gmail.com" className={styles.contactLink}>Email ↗</a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.statsGrid}>
              {highlights.map(h => (
                <div key={h.label} className={styles.stat}>
                  <span className={styles.statNum}>{h.num}</span>
                  <span className={styles.statLabel}>{h.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.stackBox}>
              <p className={styles.stackLabel}>Tech stack</p>
              <div className={styles.tags}>
                {stack.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.strip}>
        <div className={styles.stripInner}>
          {previews.map(p => (
            <div key={p.title} className={styles.stripCard}>
              <p className={styles.stripType}>{p.type}</p>
              <p className={styles.stripTitle}>{p.title}</p>
              <p className={styles.stripDesc}>{p.desc}</p>
            </div>
          ))}
          <div className={`${styles.stripCard} ${styles.stripCta}`}>
            <p className={styles.stripCtaLabel}>All projects →</p>
            <Link href="/work" className={styles.stripCtaBtn}>View full work</Link>
          </div>
        </div>
      </section>

    </>
  )
}