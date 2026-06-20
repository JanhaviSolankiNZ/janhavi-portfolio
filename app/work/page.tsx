import Link from 'next/link'
import styles from './work.module.css'

const projects = [
  {
    id: 'spendly',
    type: 'Independent · SaaS · AI',
    title: 'Spendly — AI-Powered Expense Tracker',
    year: '2024',
    description:
      'A full-stack SaaS platform I designed and built from scratch. Layered backend architecture (repository → service → controller → route) using Node.js, Express.js, and TypeScript. Stripe subscriptions with checkout sessions, billing portal, and webhook-driven plan upgrades.',
    highlights: [
      'JWT auth with access/refresh token rotation and HttpOnly cookies',
      'Google OAuth via Passport.js — resolved cross-site cookie issues across redirect flows',
      'MongoDB aggregation pipelines for category breakdowns and month-over-month trends',
      'Groq LLM integration for AI-powered expense classification',
      'Responsive React frontend with Zustand, React Hook Form, Zod, Recharts',
    ],
    impact: '35% faster loads via SSR & code splitting',
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Passport.js', 'Zustand', 'React Hook Form', 'Zod', 'Tailwind CSS', 'Recharts'],
    featured: true,
  },
  {
    id: 'twilio',
    type: 'Enterprise · Communications',
    title: 'Twilio Flex Customer Platform',
    year: '2023',
    description:
      'Developed custom Twilio Flex plugins for a customer communications platform, improving agent workflows and reducing manual steps by approximately 40%. Built serverless functions on Twilio Serverless to handle real-time routing logic.',
    highlights: [
      'Custom plugin architecture within Twilio Flex SDK',
      'GraphQL API integration for agent task data',
      'Redux-based state management for multi-channel contact flows',
      'Reduced average handle time by streamlining UI actions',
    ],
    impact: '40% fewer manual steps per agent interaction',
    stack: ['React', 'Redux', 'Twilio Flex', 'Twilio Serverless', 'Material UI', 'GraphQL'],
    featured: false,
  },
  {
    id: 'school-portal',
    type: 'Education · Admin portal',
    title: 'School Management Portal',
    year: '2022–2023',
    description:
      'Role-based admin portal built for 250+ users across multiple user types. Reusable React component library covering member management, school records, and calendar modules with full accessibility compliance.',
    highlights: [
      'Role-based access control across admin, staff, and student views',
      'Reusable component library — members, schools, calendar modules',
      'Firebase Firestore real-time data sync',
      'WCAG 2.1 AA accessibility compliance throughout',
    ],
    impact: '250+ active users · fully accessible',
    stack: ['React', 'Redux', 'Material UI', 'Firebase'],
    featured: false,
  },
  {
    id: 'school-reg',
    type: 'Education · i18n',
    title: 'School Registration Form System',
    year: '2022',
    description:
      'End-to-end multi-language school registration system supporting 26 languages, with skeleton loaders for perceived performance, optimised data handling, and maintenance mode with automated email notifications.',
    highlights: [
      '26-language i18n via react-i18next with namespace splitting',
      'Skeleton loader system for perceived performance',
      'Maintenance mode toggle with automated email notifications',
      'Optimised form state to handle large multi-step flows',
    ],
    impact: '26 languages · zero re-registrations needed',
    stack: ['React', 'Redux', 'Material UI', 'Firebase', 'react-i18next'],
    featured: false,
  },
  {
    id: 'nextjs-apps',
    type: 'Production · Next.js · Azure',
    title: 'Next.js Production Applications',
    year: '2021–2024',
    description:
      'Multiple production-grade Next.js apps using App Router, SSR, SSG, and ISR. Containerised with Docker, deployed on Azure. Improved Core Web Vitals, SEO, and page load performance significantly across all projects.',
    highlights: [
      'App Router with server components and streaming',
      'SSR / SSG / ISR strategy per route based on data freshness needs',
      'Core Web Vitals improvements — LCP, FID, CLS all green',
      'Docker containerisation + Azure CI/CD deployment pipelines',
    ],
    impact: 'Core Web Vitals green · 35% load time reduction',
    stack: ['Next.js', 'React', 'Redux', 'TypeScript', 'Tailwind CSS', 'i18next', 'Docker', 'Azure'],
    featured: false,
  },
]

export default function WorkPage() {
  const [featured, ...rest] = projects

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Selected work</p>
          <h1 className={styles.pageTitle}>Projects I&apos;ve shipped</h1>
          <p className={styles.pageSub}>
            4+ years building production-grade applications across SaaS, healthcare, education,
            and enterprise communications. Real stack decisions, measurable impact.
          </p>
        </header>

        {/* Featured project */}
        <article className={styles.featured}>
          <div className={styles.featuredHead}>
            <div>
              <p className={styles.cardType}>{featured.type}</p>
              <h2 className={styles.cardTitle}>{featured.title}</h2>
            </div>
            <span className={styles.yearBadge}>{featured.year}</span>
          </div>
          <p className={styles.cardDesc}>{featured.description}</p>
          <div className={styles.twoCol}>
            <div>
              <p className={styles.colLabel}>What I built</p>
              <ul className={styles.highlights}>
                {featured.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>
            <div>
              <p className={styles.colLabel}>Stack</p>
              <div className={styles.tags}>
                {featured.stack.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              <div className={styles.impactBadge}>{featured.impact}</div>
            </div>
          </div>
        </article>

        {/* Rest of projects */}
        <div className={styles.grid}>
          {rest.map(p => (
            <article key={p.id} className={styles.card}>
              <div className={styles.cardHead}>
                <div>
                  <p className={styles.cardType}>{p.type}</p>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                </div>
                <span className={styles.yearBadge}>{p.year}</span>
              </div>
              <p className={styles.cardDesc}>{p.description}</p>
              <ul className={styles.highlights}>
                {p.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <div className={styles.cardFooter}>
                <div className={styles.tags}>
                  {p.stack.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                <div className={styles.impactBadge}>{p.impact}</div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <p className={styles.ctaText}>Like what you see?</p>
          <Link href="/hire" className={styles.ctaBtn}>Get in touch →</Link>
        </div>
      </div>
    </div>
  )
}
