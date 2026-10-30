import { useEffect, useState } from 'react'
import { experience, highlights, profile, projects, skills } from './content'
import './App.css'

const currentYear = new Date().getFullYear()
const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

type Theme = 'light' | 'dark'

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem('theme')
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(readStoredTheme)

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = () => {
    const current =
      theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next = current === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be unavailable; the toggle still works for this visit.
    }
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label="Toggle color theme">
      <span className="theme-toggle-icon" aria-hidden="true" />
    </button>
  )
}

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

function App() {
  const active = useActiveSection()
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="wordmark" href="#top" aria-label="Daniel Amayaenvbo home">
            DA<span>.</span>
          </a>
          <div className="header-actions">
            <nav aria-label="Primary navigation">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section" id="top">
          <p className="availability">
            <span className="status-dot" aria-hidden="true" />
            Open to software engineering co-ops &amp; internships
          </p>
          <p className="eyebrow">Software engineer · systems + applied ML</p>
          <h1>
            Building reliable systems for work that has <em>consequences.</em>
          </h1>
          <p className="hero-copy">
            I'm Daniel Amayaenvbo, a fourth-year student at Drexel University double majoring
            in Software Engineering and AI &amp; Machine Learning. I build services, developer tools, and applied ML systems with a focus
            on correctness, performance, and clear failure behavior.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View selected work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
            <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowIcon />
            </a>
          </div>

          <dl className="stats">
            {highlights.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="statement section" data-reveal>
          <p className="section-label">Approach</p>
          <p className="statement-copy">
            Production software is defined by its behavior under load, failure, and change—not
            by a demo path. I work from typed contracts, measurable constraints, and testable
            recovery paths.
          </p>
        </section>

        <section className="section" id="work">
          <div className="section-heading" data-reveal>
            <p className="section-label">Experience</p>
            <h2>Engineering where reliability matters.</h2>
          </div>
          <div className="experience-list">
            {experience.map((role) => (
              <article className="experience-card" key={`${role.company}-${role.role}`} data-reveal>
                <div className="experience-meta">
                  <p>{role.period}</p>
                  <p>{role.location}</p>
                </div>
                <div>
                  <p className="company">{role.company}</p>
                  <h3>{role.role}</h3>
                  <ul>
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading" data-reveal>
            <p className="section-label">Selected work</p>
            <h2>Systems, not surface area.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name} data-reveal>
                <div className="project-topline">
                  <p>{project.status}</p>
                  <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <span className="text-link" aria-hidden="true">
                  {project.linkLabel} <ArrowIcon />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section section" data-reveal>
          <p className="section-label">Tools I use</p>
          <div className="skill-groups">
            {skills.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section section" id="contact" data-reveal>
          <p className="section-label">Contact</p>
          <h2>Have a difficult systems problem?</h2>
          <p>
            I'm interested in software engineering co-ops and internships where systems design,
            performance, and applied AI meet.
          </p>
          <a className="contact-link" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowIcon />
          </a>
          <div className="contact-secondary">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>
          © {currentYear} {profile.name}
        </p>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  )
}

export default App
