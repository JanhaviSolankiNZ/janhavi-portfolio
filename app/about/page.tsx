import Link from "next/link";
import styles from "./about.module.css";

const skillGroups = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js (App Router, SSR, SSG, ISR)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 / CSS3 / SASS",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Styled-components",
      "Framer Motion",
      "WCAG Accessibility",
      "Mobile-First Design",
    ],
  },
  {
    category: "State & Forms",
    items: [
      "Redux Toolkit",
      "Redux-Saga",
      "Redux-Thunk",
      "Zustand",
      "TanStack Query (React Query)",
      "Context API",
      "React Hook Form",
      "Formik",
      "Zod",
      "Yup",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Axios",
      "Firebase",
      "Twilio API",
      "Stripe API",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB / Mongoose", "PostgreSQL", "SQL"],
  },
  {
    category: "Data Visualisation",
    items: ["Recharts", "Chart.js"],
  },
  {
    category: "Testing",
    items: [
      "Jest",
      "React Testing Library",
      "Playwright",
      "Cucumber",
      "Enzyme",
      "Unit / Integration / E2E",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Webpack",
      "Vite",
      "Docker",
      "GitHub Actions",
      "GitLab CI/CD",
      "Vercel",
      "Render",
      "AWS S3",
      "Azure",
    ],
  },
  {
    category: "Auth",
    items: [
      "NextAuth.js",
      "Passport.js",
      "OAuth 2.0",
      "JWT (access/refresh token rotation)",
      "HttpOnly cookies",
    ],
  },
  {
    category: "Languages",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python (Basic)",
      "C++ (DSA)",
      "Java (Basic)",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git / GitHub / GitLab / Bitbucket",
      "Postman",
      "Jira",
      "Asana",
      "Chrome DevTools",
      "React DevTools",
      "GitHub Copilot",
    ],
  },
];

const timeline = [
  {
    period: "Feb 2021 – Jul 2025",
    role: "Software Engineer",
    company: "Tatvasoft, India (Remote)",
    detail:
      "Delivered responsive, accessible, cross-browser web apps using React, Next.js, and TypeScript. Built full-stack features with Node.js, Express.js, MongoDB, and PostgreSQL. Reduced page load times by 35% via lazy loading, memoization, and code-splitting. Integrated REST and GraphQL APIs, wrote Jest/RTL tests, and maintained GitLab CI/CD pipelines. Collaborated in Agile Scrum teams across healthcare, education, SaaS, and communications domains.",
  },
  {
    period: "2025 – Present",
    role: "Open to Opportunities",
    company: "Auckland, New Zealand",
    detail:
      "Relocated to Auckland on an open work visa (no sponsorship required). Independently architected and built Spendly — a full-stack AI-powered expense tracking SaaS with Stripe subscriptions, JWT/OAuth authentication, Groq LLM integration, and analytics dashboards. Actively seeking frontend or full-stack roles in the NZ tech scene.",
  },
];
export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Intro */}
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>About me</p>
          <h1 className={styles.pageTitle}>
            Software engineer with a<br />
            <em>full-stack mindset</em>
          </h1>
        </header>

        <div className={styles.topGrid}>
          <div className={styles.bio}>
            <p className={styles.bodyText}>
              I started my career at Tatvasoft in India, where over four years I
              progressed from trainee to software engineer; shipping production
              code across healthcare, education, SaaS, and communications
              domains. I worked in Agile Scrum teams, collaborating with
              designers, backend engineers, QA, and product managers through the
              full delivery cycle.
            </p>
            <p className={styles.bodyText}>
              I&apos;m a frontend specialist at heart, but I&apos;m comfortable
              owning the full stack. My most recent independent project,
              Spendly, is a full-stack AI-powered expense tracking SaaS I
              designed and built from scratch, layered Node.js and Express.js
              backend, JWT and Google OAuth authentication, Stripe
              subscriptions, Groq LLM integration for smart expense
              classification, and a React and TypeScript frontend with real-time
              analytics dashboards.
            </p>
            <p className={styles.bodyText}>
              I recently relocated to Auckland and I&apos;m excited to bring
              that experience to the NZ tech scene. I hold an open work visa
              with no restrictions, so I am available to start immediately, no
              sponsorship required.
            </p>
            <p className={styles.bodyText}>
              Outside of work I enjoy building side projects, exploring design
              systems, and staying current with the React and Next.js ecosystem.
            </p>
          </div>

          <div className={styles.metaCard}>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Location</span>
              <span className={styles.metaVal}>Auckland, New Zealand</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Work rights</span>
              <span className={styles.metaVal}>
                Open work visa · no sponsorship
              </span>
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
              <a
                href="mailto:janhavissolanki112@gmail.com"
                className={styles.metaLink}
              >
                janhavissolanki112@gmail.com
              </a>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Phone</span>
              <a href="tel:02124115422" className={styles.metaLink}>
                021 241 1542
              </a>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/janhavi-solanki-6377b81b5/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.metaLink}
              >
                janhavi-solanki ↗
              </a>
            </div>
            <div className={styles.metaActions}>
              <Link href="/hire" className={styles.hireBtn}>
                Hire me
              </Link>
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
            {skillGroups.map((g) => (
              <div key={g.category} className={styles.skillGroup}>
                <p className={styles.skillCat}>{g.category}</p>
                <div className={styles.skillItems}>
                  {g.items.map((s) => (
                    <span key={s} className={styles.skillItem}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Footer appended separately — see layout for shared footer component
