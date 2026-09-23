import { useEffect, useState } from "react";
import { profile, metrics, projects, skills, education } from "./data";
import ProjectLogo from "./Logos";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "");

  const toggle = () => {
    const current =
      theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button className="icon-btn" onClick={toggle} aria-label="Toggle colour theme">
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 3.5a6.5 6.5 0 0 1 0 13Z" fill="currentColor" />
      </svg>
    </button>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap header-inner">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <nav aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          {profile.resume && (
            <a href={profile.resume} className="btn btn-small" target="_blank" rel="noreferrer">
              Résumé
            </a>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <p className="eyebrow">{profile.role}</p>
      <h1>{profile.name}</h1>
      <p className="headline">{profile.headline}</p>
      <p className="credential">{profile.credential}</p>
      <p className="lede">{profile.summary}</p>

      <div className="cta-row">
        <a href="#work" className="btn btn-primary">
          View selected work
        </a>
        {profile.resume && (
          <a href={profile.resume} className="btn" target="_blank" rel="noreferrer">
            Download résumé
          </a>
        )}
        <a href={profile.github} className="btn" target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} className="btn" target="_blank" rel="noreferrer">
            LinkedIn <Arrow />
          </a>
        )}
      </div>

      <p className="availability">
        <span className="dot" aria-hidden="true" />
        {profile.availability}
      </p>

      <dl className="metrics">
        {metrics.map((m) => (
          <div key={m.label} className="metric">
            <dt>{m.label}</dt>
            <dd>{m.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Pipeline({ steps }) {
  return (
    <ol className="pipeline" aria-label="System pipeline">
      {steps.map((s, i) => (
        <li key={i}>
          <span>{s}</span>
        </li>
      ))}
    </ol>
  );
}

function Project({ p, index }) {
  const [open, setOpen] = useState(false);
  const { live, code, note } = p.links;
  const detailsId = `${p.id}-details`;

  return (
    <article className={`project${open ? " is-open" : ""}`} id={p.id} style={{ "--p": p.accent }}>
      <div className="project-card">
        <div className={`stage stage-${p.logo}`}>
          <ProjectLogo name={p.logo} />
        </div>

        <div className="project-main">
          <p className="project-meta">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{p.domain}</span>
            <span>{p.year}</span>
          </p>
          <h3>{p.title}</h3>
          <p className="tagline">{p.tagline}</p>
          <p className="project-summary">{p.summary}</p>

          <ul className="chips">
            {p.keyStack.map((t) => (
              <li key={t} className="tag tag-accent">
                {t}
              </li>
            ))}
          </ul>

          <div className="project-actions">
            <button
              type="button"
              className="btn btn-small btn-more"
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "Show less" : "More details"}
              <svg className="chev" viewBox="0 0 16 16" aria-hidden="true">
                <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {live && (
              <a href={live} className="btn btn-small btn-primary" target="_blank" rel="noreferrer">
                Live demo <Arrow />
              </a>
            )}
            {code && (
              <a href={code} className="btn btn-small" target="_blank" rel="noreferrer">
                Source <Arrow />
              </a>
            )}
            {note && <span className="link-note">{note}</span>}
          </div>
        </div>
      </div>

      <div className="details" id={detailsId} inert={!open}>
        <div className="details-inner">
          <figure className="shot">
            {live && (
              <div className="shot-bar" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            )}
            <img src={p.image} alt={p.imageAlt} loading="lazy" className={`shot-${p.id}`} />
          </figure>

          <Pipeline steps={p.pipeline} />

          <div className="project-body">
            <div className="project-text">
              <h4>Problem</h4>
              <p>{p.problem}</p>

              <h4>Approach</h4>
              <ul>
                {p.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>

              <h4>Engineering</h4>
              <ul>
                {p.engineering.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <aside className="stack" aria-label={`${p.title} technology stack`}>
              <h4>Full stack</h4>
              <dl>
                {Object.entries(p.stack).map(([group, items]) => (
                  <div key={group}>
                    <dt>{group}</dt>
                    <dd>
                      {items.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section wrap">
      <div className="section-head">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="work" label="Selected work" title="Three systems, end to end">
          <div className="projects">
            {projects.map((p, i) => (
              <Project key={p.id} p={p} index={i} />
            ))}
          </div>
        </Section>

        <Section id="skills" label="Skills" title="What I work with">
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-group">
                <h3>{s.group}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" label="Education" title="Academic background">
          <div className="edu">
            <div>
              <h3>{education.degree}</h3>
              <p className="edu-school">{education.school}</p>
              <p className="muted">
                {education.status}
                {education.showCgpa && ` · CGPA ${education.cgpa}`}
              </p>
            </div>
            <p className="mono muted">{education.period}</p>
            <div className="edu-cols">
              <div>
                <p className="label">Relevant coursework</p>
                <ul className="chips">
                  {education.coursework.map((c) => (
                    <li key={c} className="tag">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label">Alongside the degree</p>
                <ul className="edu-list">
                  {education.alongside.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" label="Contact" title="Let's talk">
          <div className="contact">
            <p className="lede">
              I'm looking for roles where I can own ML work from data to deployment. If you're hiring
              for data science or applied AI, I'd be glad to walk you through any of these projects.
            </p>
            <ul className="contact-list">
              {profile.email && (
                <li>
                  <span className="label">Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
              )}
              <li>
                <span className="label">GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  {profile.github.replace("https://", "")}
                </a>
              </li>
              {profile.linkedin && (
                <li>
                  <span className="label">LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    {profile.linkedin.replace(/https?:\/\/(www\.)?/, "")}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </Section>
      </main>

      <footer className="site-footer wrap">
        <p>
          © {year} {profile.name}
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
