import { experience, projects, skills } from './content'
import './App.css'

const currentYear = new Date().getFullYear()

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Daniel Amayaenvbo home">
          DA<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section" id="top">
          <p className="eyebrow">Software engineer · systems + applied ML</p>
          <h1>
            Building reliable systems
            <br />
            for work that has consequences.
          </h1>
          <p className="hero-copy">
            I am Daniel Amayaenvbo, a third-year Software Engineering student at
            Drexel University. I build services, developer tools, and applied ML
            systems with a focus on correctness, performance, and clear failure
            behavior.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View selected work <ArrowIcon />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/danielamayaenvbo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="statement section">
          <p className="section-label">Approach</p>
          <p className="statement-copy">
            Production software is defined by its behavior under load, failure,
            and change—not by a demo path. I work from typed contracts,
            measurable constraints, and testable recovery paths.
          </p>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Engineering where reliability matters.</h2>
          </div>
          <div className="experience-list">
            {experience.map((role) => (
              <article className="experience-card" key={`${role.company}-${role.role}`}>
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
          <div className="section-heading">
            <p className="section-label">Selected work</p>
            <h2>Systems, not surface area.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <p>{project.status}</p>
                  <span className="project-index">0{project.index}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {project.linkLabel} <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section section">
          <p className="section-label">Tools I use</p>
          <div className="skill-groups">
            {skills.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="section-label">Contact</p>
          <h2>Have a difficult systems problem?</h2>
          <p>
            I am interested in software engineering co-ops and internships where
            systems design, performance, and applied AI meet.
          </p>
          <a className="contact-link" href="mailto:doa29@drexel.edu">
            doa29@drexel.edu <ArrowIcon />
          </a>
        </section>
      </main>

      <footer>
        <p>© {currentYear} Daniel Amayaenvbo</p>
        <a href="https://www.linkedin.com/in/amayaenvbo" target="_blank" rel="noreferrer">
          LinkedIn <ArrowIcon />
        </a>
      </footer>
    </>
  )
}

export default App
