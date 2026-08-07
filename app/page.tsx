const projects = [
  {
    number: "01",
    title: "NutriEdu",
    type: "Full-stack product",
    description:
      "A nutrition platform that turns dietary restrictions into safe recipes, weekly meal plans, and practical shopping lists.",
    highlights: [
      "JWT authentication and role-based admin flows",
      "Personalized recipe and ingredient filtering",
      "Password recovery and transactional email",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind"],
    links: [
      { label: "Backend", href: "https://github.com/xrhon0s/NutriEdu" },
      {
        label: "Frontend",
        href: "https://github.com/xrhon0s/NutriEdu-frontend",
      },
    ],
    tone: "lime",
  },
  {
    number: "02",
    title: "Perfume Catalog",
    type: "Interactive frontend",
    description:
      "A responsive digital-magazine experience for exploring fragrances through live search, filters, page navigation, and detailed product views.",
    highlights: [
      "Magazine-inspired browsing experience",
      "Real-time search and multi-category filters",
      "Reusable state and component architecture",
    ],
    stack: ["React", "TypeScript", "Zustand", "Framer Motion", "Vite"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/xrhon0s/Perfume_Catalog",
      },
    ],
    tone: "violet",
  },
  {
    number: "03",
    title: "Task Manager API",
    type: "Backend architecture",
    description:
      "A REST API built to practice clean boundaries: routes, controllers, services, validation, domain constants, and centralized errors.",
    highlights: [
      "Complete task CRUD and status workflows",
      "Layered architecture and separation of concerns",
      "Request validation and centralized errors",
    ],
    stack: ["Node.js", "Express", "REST", "JavaScript"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/xrhon0s/task-manager-api",
      },
    ],
    tone: "blue",
  },
];

const capabilities = [
  "React interfaces",
  "Node.js APIs",
  "AI integration",
  "Real-time products",
  "Clean architecture",
  "Responsive design",
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="David Sanchez, home">
          DS<span>/</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="mailto:dsancheztaba66@gmail.com">
            Let&apos;s talk
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Medellín, Colombia · Open to work
          </p>
          <h1>
            I build products
            <br />
            that <em>move</em> ideas
            <br />
            into reality.
          </h1>
          <p className="hero-intro">
            I&apos;m <strong>David Sanchez</strong>, a full-stack developer focused
            on React, Node.js, real-time systems, and thoughtful AI integration.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-quiet"
              href="https://github.com/xrhon0s"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Photo placeholder">
          <div className="portrait-grid" aria-hidden="true" />
          <div className="portrait-placeholder">
            <span className="portrait-initials">DS</span>
            <span className="portrait-note">Photo coming soon</span>
          </div>
          <div className="portrait-tag">Full-stack<br />developer</div>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
        </div>
      </section>

      <div className="capability-strip" aria-label="Core capabilities">
        <div className="capability-track">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <b aria-hidden="true">✦</b>
            </span>
          ))}
        </div>
      </div>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work · 2026</p>
            <h2>Built with purpose.</h2>
          </div>
          <p>
            Products that balance useful features, maintainable architecture,
            and a clear experience for the people using them.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="project-visual" aria-hidden="true">
                <span className="project-number">{project.number}</span>
                <div className="visual-window">
                  <span />
                  <span />
                  <span />
                  <div className="visual-content">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="stack-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-statement">
            <p className="eyebrow">How I work</p>
            <h2>
              Fast feedback.
              <br />
              Solid foundations.
            </h2>
            <p>
              I use AI as part of an intentional development workflow: to
              accelerate iteration while keeping architecture, maintainability,
              and product judgment in human hands.
            </p>
          </div>

          <div className="experience-card">
            <div className="experience-topline">
              <span>Experience</span>
              <span>2+ years</span>
            </div>
            <div className="role">
              <span className="role-year">2024—26</span>
              <div>
                <h3>Co-Founder & Full Stack Developer</h3>
                <p>WillDevp</p>
                <p className="role-detail">
                  Built real-time financial dashboards, reusable analytics
                  components, and backend services for client products.
                </p>
              </div>
            </div>
            <div className="role">
              <span className="role-year">2024—Now</span>
              <div>
                <h3>Freelance Full Stack Developer</h3>
                <p>Independent projects</p>
                <p className="role-detail">
                  Developing APIs, responsive interfaces, and conversational AI
                  experiences from early concept through delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="details-section shell">
        <div className="detail-block">
          <p className="detail-label">Core stack</p>
          <p>React · JavaScript · TypeScript · Node.js · Next.js · Express · PostgreSQL · Convex</p>
        </div>
        <div className="detail-block">
          <p className="detail-label">Also working with</p>
          <p>Java · Spring Boot · Playwright · Selenium · Anthropic Claude API · OpenAI Codex</p>
        </div>
        <div className="detail-block">
          <p className="detail-label">Languages</p>
          <p>Spanish — Native<br />English — Intermediate</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="shell contact-inner">
          <p className="eyebrow">Have a role or project in mind?</p>
          <h2>Let&apos;s build what&apos;s next.</h2>
          <a className="contact-link" href="mailto:dsancheztaba66@gmail.com">
            dsancheztaba66@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-footer">
            <span>David Sanchez Tabarez © 2026</span>
            <div>
              <a href="https://github.com/xrhon0s" target="_blank" rel="noreferrer">GitHub</a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
