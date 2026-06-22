import Link from 'next/link'
import styles from './work.module.css'

const projects = [
  {
    id: 'spendly',
    type: 'Independent · Full Stack · AI',
    title: 'Spendly — AI-Powered Expense Tracker',
    year: '2026',
    description:
      'A full-stack SaaS platform I designed and built from scratch with JWT authentication, MongoDB/Mongoose, and multi-device refresh token support. Built with a layered architecture (repository → service → controller → route) using Node.js, Express.js, and TypeScript.',
    highlights: [
      'JWT auth with access/refresh token rotation and HttpOnly cookies',
      'Google OAuth via Passport.js — resolved cross-site cookie issues across redirect flows',
      'MongoDB aggregation pipelines for category breakdowns and month-over-month trends',
      'Groq LLM integration for AI-powered expense classification',
      'Responsive React frontend with Zustand, React Hook Form, Zod, Recharts',
    ],
    impact: 'Showcases backend depth beyond frontend CV',
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Passport.js', 'Zustand', 'React Hook Form', 'Zod', 'Tailwind CSS', 'Recharts'],
    featured: true,
  },
  {
    id: 'telehealth',
    type: 'Healthcare · Real-time · Twilio',
    title: 'Telehealth Video Consultation Platform',
    year: '2023–2024',
    description:
      'Real-time doctor–patient video consultation platform using Twilio Video SDK. Enabled secure audio/video sessions with token-based authentication and role-based access control. Designed meeting join flows and participant lifecycle management for smooth clinical user experiences.',
    highlights: [
      'Twilio Video SDK integration for real-time audio/video sessions',
      'Token-based authentication with role-based access for doctors and patients',
      'Meeting join flow and participant lifecycle management',
      'Secure session handling integrated with backend services',
      'Responsive, accessible UI built with Material UI',
    ],
    impact: 'Zero onboarding drop-offs · secure clinical sessions',
    stack: ['React', 'Redux', 'TypeScript', 'Twilio Video', 'Material UI', 'JWT', 'OAuth'],
    featured: true,
  },
  {
    id: 'twilio-flex',
    type: 'Enterprise · Communications · Twilio',
    title: 'Customer Communication Platform (Twilio Flex)',
    year: '2022–2023',
    description:
      'Built and customised multiple Twilio Flex plugins extending agent workflows for dialpad, voicemail, callbacks, and conference calls. Used Twilio Serverless functions to handle real-time routing logic, reducing manual steps and improving call handling speed.',
    highlights: [
      'Custom plugin architecture within Twilio Flex SDK',
      'Extended workflows for dialpad, voicemail, callbacks, and conference calls',
      'Twilio Serverless functions for real-time routing logic',
      'Redux-based state management for multi-channel contact flows',
      'Reduced average handle time by streamlining UI actions',
    ],
    impact: '~40% fewer manual steps per agent interaction',
    stack: ['React', 'Redux', 'Twilio Flex', 'Twilio Serverless', 'Material UI', 'GraphQL'],
    featured: false,
  },
  {
    id: 'school-portal',
    type: 'Education · Admin Portal',
    title: 'School Management Portal',
    year: '2022–2023',
    description:
      'Role-based admin portal for 250+ users across multiple user types. Built reusable React component library covering member management, school records, and calendar modules with lazy loading and performance optimisations.',
    highlights: [
      'Role-based access control across admin, staff, and student views',
      'Reusable component library — members, schools, calendar modules',
      'Lazy loading and performance optimisations for large datasets',
      'Firebase Firestore real-time data sync',
      'Agile/Scrum delivery with sprint ceremonies and code reviews',
    ],
    impact: '250+ active users · responsive across all devices',
    stack: ['React', 'Redux', 'Material UI', 'Firebase'],
    featured: false,
  },
  {
    id: 'school-reg',
    type: 'Education · i18n',
    title: 'School Registration Form System',
    year: '2022',
    description:
      'End-to-end multi-language school registration system supporting 26 languages. Delivered a responsive, accessible, pixel-perfect user experience across devices with skeleton loaders, optimised data handling, and maintenance mode with automated email notifications.',
    highlights: [
      '26-language i18n via react-i18next with namespace splitting',
      'Skeleton loader system for perceived performance improvements',
      'Maintenance mode toggle with automated email notifications',
      'Optimised form state to handle large multi-step registration flows',
      'Pixel-perfect responsive UI across mobile, tablet, and desktop',
    ],
    impact: '26 languages · zero re-registrations needed',
    stack: ['React', 'Redux', 'Material UI', 'Firebase', 'react-i18next'],
    featured: false,
  },
  {
    id: 'inventory',
    type: 'Enterprise · Inventory · Performance',
    title: 'Inventory & Warehouse Management App',
    year: '2021–2022',
    description:
      'Built interactive dashboards, stock management, and order tracking workflows for a warehouse management application. Optimised performance for large inventories, reducing page load times and enabling faster operational decisions for warehouse staff.',
    highlights: [
      'Interactive dashboards for real-time stock visibility',
      'Stock management and order tracking workflows',
      'Performance optimisation — reduced page load times by ~35%',
      'Role-based access for warehouse staff, managers, and admins',
      'Jest unit and integration tests for key modules',
    ],
    impact: '~35% reduction in page load times',
    stack: ['React', 'Redux', 'TypeScript', 'Material UI', 'Jest'],
    featured: false,
  },
  {
    id: 'nextjs-apps',
    type: 'Production · Next.js · SEO',
    title: 'Next.js Production Applications',
    year: '2021–2024',
    description:
      'Contributed to multiple production-grade Next.js applications using App Router, SSR, SSG, and ISR rendering strategies. Delivered responsive, multilingual client-facing interfaces including onboarding and portfolio experiences with improved Core Web Vitals and SEO.',
    highlights: [
      'App Router with SSR, SSG, and ISR strategy per route',
      'Core Web Vitals improvements — LCP, FID, CLS optimised',
      'Multilingual interfaces using i18next with namespace splitting',
      'PWA-ready architecture with faster load times',
      'TypeScript throughout with strict type safety',
    ],
    impact: 'Core Web Vitals improved · ~35% load time reduction',
    stack: ['Next.js', 'React', 'Redux', 'TypeScript', 'Tailwind CSS', 'i18next'],
    featured: false,
  }
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
