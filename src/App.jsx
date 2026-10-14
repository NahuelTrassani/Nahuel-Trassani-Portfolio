import { content, links, shared } from './data/content.js'
import { useActiveSection, useLang, useReveal, useSpotlight, useTheme } from './hooks.js'
import Mark from './components/Mark.jsx'
import Visual from './components/Visual.jsx'
import { Arrow, Download, GitHub, LinkedIn, Mail, Moon, Sun } from './components/Icons.jsx'

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'contact']

function fecha(valor, lang) {
  if (!valor) return null
  if (valor.length === 4) return valor
  const [y, m] = valor.split('-').map(Number)
  const mes = new Date(y, m - 1, 1).toLocaleDateString(lang === 'es' ? 'es-AR' : 'en-US', { month: 'short' })
  return `${mes.replace('.', '')} ${y}`
}

function texto(valor, lang) {
  return typeof valor === 'string' ? valor : valor[lang]
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section__title reveal">
        <span>{title}</span>
      </h2>
      {children}
    </section>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [lang, toggleLang] = useLang()
  const active = useActiveSection(SECTIONS)
  useReveal()
  useSpotlight()

  const t = content[lang]

  return (
    <div className="page">
      <div className="spotlight" aria-hidden="true" />

      <div className="toolbar">
        <button className="chip" onClick={toggleLang} aria-label={t.ui.langLabel}>
          {t.ui.lang}
        </button>
        <button className="chip chip--icon" onClick={toggleTheme} aria-label={t.ui.theme} title={t.ui.theme}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>

      <div className="layout">
        <header className="side">
          <div className="side__top">
            <Mark />
            <h1 className="side__name">Nahuel Trassani</h1>
            <p className="side__role">{t.hero.role}</p>
            <p className="side__tagline">{t.hero.tagline}</p>
            <p className="side__location">{t.hero.location}</p>

            <div className="side__cta">
              <a className="btn btn--primary" href={t.hero.cvFile} download>
                <Download /> {t.hero.cv}
              </a>
              <a className="btn btn--ghost" href={`mailto:${links.email}`}>
                {t.hero.contact}
              </a>
            </div>

            <nav className="side__nav" aria-label="Secciones">
              <ul>
                {SECTIONS.map((id) => (
                  <li key={id}>
                    <a href={`#${id}`} className={active === id ? 'is-active' : ''}>
                      <span className="side__nav-line" />
                      {t.nav[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="social">
            <li>
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHub />
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href={`mailto:${links.email}`} aria-label="Email">
                <Mail />
              </a>
            </li>
          </ul>
        </header>

        <main className="main">
          <Section id="about" title={t.nav.about}>
            <div className="about reveal">
              {t.about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <p className="about__lang">{t.languages}</p>
            </div>
            <ul className="stats reveal">
              {t.stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="experience" title={t.nav.experience}>
            <ol className="timeline">
              {t.experience.map((job) => (
                <li key={job.company + job.start} className="job card reveal">
                  <p className="job__period">
                    {fecha(job.start, lang)} — {job.end ? fecha(job.end, lang) : t.ui.present}
                  </p>
                  <div>
                    <h3 className="job__title">
                      {job.company} <span>· {job.role}</span>
                    </h3>
                    <ul className="job__points">
                      {job.points.map((p) => (
                        <li key={p.slice(0, 24)}>{p}</li>
                      ))}
                    </ul>
                    <Tags items={job.tags} />
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="projects" title={t.nav.projects}>
            <div className="projects">
              {shared.projects.map((p) => {
                const info = t.projects[p.id]
                return (
                  <article key={p.id} className="project card reveal">
                    <Visual project={p} title={info.title} lang={lang} />
                    <div className="project__body">
                      <p className="project__kind">{info.kind}</p>
                      <h3 className="project__title">{info.title}</h3>
                      <p className="project__text">{info.text}</p>
                      <Tags items={p.tags} />
                      <div className="project__links">
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noreferrer" className="link">
                            {t.ui.demo} <Arrow />
                          </a>
                        )}
                        <a href={p.repo} target="_blank" rel="noreferrer" className="link link--muted">
                          <GitHub /> {t.ui.code}
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <h3 className="subhead reveal">{t.ui.more}</h3>
            <ul className="more reveal">
              {shared.more.map((p) => {
                const info = t.projects[p.id]
                return (
                  <li key={p.id} className="more__item">
                    <div>
                      <p className="more__title">{info.title}</p>
                      <p className="more__text">{info.text}</p>
                    </div>
                    <div className="project__links">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" className="link">
                          {t.ui.demo} <Arrow />
                        </a>
                      )}
                      <a href={p.repo} target="_blank" rel="noreferrer" className="link link--muted">
                        <GitHub /> {t.ui.code}
                      </a>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Section>

          <Section id="skills" title={t.nav.skills}>
            <div className="skills reveal">
              {shared.skills.map((g) => (
                <div key={g.id} className="skills__group">
                  <h3>{t.skills[g.id]}</h3>
                  <Tags items={g.items} />
                </div>
              ))}
            </div>

            <div className="credentials">
              <div className="reveal">
                <h3 className="subhead">{t.ui.certs}</h3>
                <ul className="list">
                  {shared.certs.map((c) => (
                    <li key={texto(c.name, 'en')}>
                      <span className="list__main">
                        {texto(c.name, lang)}
                        {c.score && <em className="badge">{c.score}</em>}
                      </span>
                      <span className="list__meta">
                        {c.org} · {fecha(c.date, lang)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal">
                <h3 className="subhead">{t.ui.education}</h3>
                <ul className="list">
                  {t.education.map((e) => (
                    <li key={e.name}>
                      <span className="list__main">{e.name}</span>
                      <span className="list__meta">
                        {e.org} · {e.period}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="contact" title={t.contact.title}>
            <div className="contact card reveal">
              <p className="contact__text">{t.contact.text}</p>
              <a className="contact__mail" href={`mailto:${links.email}`}>
                {links.email}
              </a>
              <div className="side__cta">
                <a className="btn btn--ghost" href={links.linkedin} target="_blank" rel="noreferrer">
                  <LinkedIn /> LinkedIn
                </a>
                <a className="btn btn--ghost" href={links.github} target="_blank" rel="noreferrer">
                  <GitHub /> GitHub
                </a>
              </div>
            </div>
          </Section>

          <footer className="footer">
            <p>
              © {new Date().getFullYear()} Nahuel Trassani · {t.footer}
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
