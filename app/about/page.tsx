import Link from 'next/link'
import styles from './about.module.css'

const skillGroups = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js (App Router, SSR, SSG, ISR)', 'TypeScript', 'HTML5 / CSS3 / SASS', 'Tailwind CSS', 'Material UI', 'Framer Motion', 'WCAG Accessibility'],
  },
  {
    category: 'State & forms',
    items: ['Redux Toolkit', 'Redux-Saga', 'Zustand', 'TanStack Query', 'React Hook Form', 'Formik', 'Zod / Yup', 'Context API'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Axios', 'Firebase', 'Twilio API', 'Stripe API'],
  },
  {
    category: 'Databases',
    items: ['MongoDB / Mongoose', 'PostgreSQL', 'SQL'],
  },
  {
    category: 'Testing',
    items: ['Jest', 'React Testing Library', 'Playwright', 'Cucumber', 'Enzyme', 'Unit / Integration / E2E'],
  },
  {
    category: 'DevOps & cloud',
    items: ['Docker', 'GitHub Actions', 'GitLab CI/CD', 'Vercel', 'AWS S3', 'Azure', 'Render'],
  },
  {
    category: 'Auth',
    items: ['NextAuth.js', 'Passport.js', 'OAuth 2.0', 'JWT'],
  },
  {
    category: 'Tools',
    items: ['Git / GitHub / GitLab', 'Postman', 'Jira', 'Asana', 'Chrome DevTools', 'React DevTools', 'GitHub Copilot'],
  },
]

const timeline = [
  {
    period: 'Feb 2021 – Jun 2021',
    role: 'Trainee Software Engineer',
    company: 'Tatvasoft, India (Remote)',
    detail: 'Intensive training in React, TypeScript, GraphQL, Redux, Node.js, and Next.js. Progressed to production contributions within 6 months.',
  },
  {
    period: 'Jul 2021 – Jul 2025',
    role: 'Software Engineer',
    company: 'Tatvasoft, India (Remote)',
    detail: 'Shipped production features across healthcare, education, SaaS, and communications domains. Owned frontend architecture, CI/CD pipelines, and performance optimisation across multiple client projects.',
  },
  {
    period: '2025 – Present',
    role: 'Open to opportunities',
    company: 'Auckland, New Zealand',
    detail: 'Relocated to Auckland. Building Spendly as an independent project while actively looking for frontend or full-stack roles in the NZ tech scene.',
  },
]

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Intro */}
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>About me</p>
          <h1 className={styles.pageTitle}>
            Software engineer with a<br /><em>full-stack mindset</em>
          </h1>
        </header>

        <div className={styles.topGrid}>
          <div className={styles.bio}>
            <p className={styles.bodyText}>
              I started my career at Tatvasoft in India, where over four years I progressed from
              trainee to software engineer — shipping production code across healthcare, education,
              SaaS, and communications domains. I worked in Agile Scrum teams, collaborating with
              designers, backend engineers, QA, and product managers through the full delivery cycle.
            </p>
            <p className={styles.bodyText}>
              I&apos;m a frontend specialist at heart, but I&apos;m comfortable owning the full stack.
              My most recent project, Spendly, is a full-stack SaaS I built independently — backend
              architecture, auth, Stripe payments, LLM integration, and the frontend all done by me.
            </p>
            <p className={styles.bodyText}>
              I recently relocated to Auckland and I&apos;m excited to bring that experience to
              the NZ tech scene. I hold an open work visa with no restrictions — available to start
              immediately, no sponsorship required.
            </p>
            <p className={styles.bodyText}>
              Outside of work I enjoy building side projects, diving into design systems, and staying
              current with the React and Next.js ecosystem.
            </p>
          </div>

          <div className={styles.metaCard}>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Location</span>
              <span className={styles.metaVal}>Auckland, New Zealand</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Work rights</span>
              <span className={styles.metaVal}>Open work visa · no sponsorship</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Availability</span>
              <span className={styles.metaVal}>Immediately</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Experience</span>
              <span className={styles.metaVal}>4+ years</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Email</span>
              <a href="mailto:janhavissolanki112@gmail.com" className={styles.metaLink}>
                janhavissolanki112@gmail.com
              </a>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Phone</span>
              <a href="tel:02124115422" className={styles.metaLink}>021 241 1542</a>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>LinkedIn</span>
              <a href="https://www.linkedin.com/in/janhavi-solanki-6377b81b5/" target="_blank" rel="noopener noreferrer" className={styles.metaLink}>
                janhavi-solanki ↗
              </a>
            </div>
            <div className={styles.metaActions}>
              <Link href="/hire" className={styles.hireBtn}>Hire me</Link>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Career timeline</h2>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <p className={styles.period}>{t.period}</p>
                </div>
                <div className={styles.timelineLine} aria-hidden="true">
                  <span className={styles.timelineDot} />
                </div>
                <div className={styles.timelineRight}>
                  <p className={styles.timelineRole}>{t.role}</p>
                  <p className={styles.timelineCompany}>{t.company}</p>
                  <p className={styles.timelineDetail}>{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Full skill set</h2>
          <div className={styles.skillGrid}>
            {skillGroups.map(g => (
              <div key={g.category} className={styles.skillGroup}>
                <p className={styles.skillCat}>{g.category}</p>
                <div className={styles.skillItems}>
                  {g.items.map(s => <span key={s} className={styles.skillItem}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

// Footer appended separately — see layout for shared footer component