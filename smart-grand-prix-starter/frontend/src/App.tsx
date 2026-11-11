const modules = [
  {
    number: "01",
    title: "Business Directory",
    description: "Discover motorsport and automotive businesses, services, and verified contacts across Rwanda.",
    status: "Core MVP",
  },
  {
    number: "02",
    title: "Motorsport Intelligence",
    description: "Follow sourced industry news, event information, organizations, and useful research.",
    status: "Core MVP",
  },
  {
    number: "03",
    title: "Talent & Opportunities",
    description: "Find jobs, internships, training pathways, and professional opportunities.",
    status: "Core MVP",
  },
];

export default function App() {
  return (
    <main className="shell">
      <nav className="nav">
        <a className="brand" href="/" aria-label="Smart Grand Prix home">
          <span className="brand-mark">SG</span>
          <span>SMART GRAND PRIX</span>
        </a>
        <span className="market-tag">RWANDA FIRST</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">MOTORSPORT • BUSINESS • INTELLIGENCE</p>
        <h1>Connecting Rwanda’s motorsport ecosystem.</h1>
        <p className="hero-copy">
          Discover businesses, follow industry developments, and access opportunities
          across Rwanda’s motorsport and automotive community.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#platform">Explore the platform</a>
          <span className="launch-note">Early platform preview</span>
        </div>
      </section>

      <section id="platform" className="modules">
        <div className="section-heading">
          <p className="eyebrow">THE PLATFORM</p>
          <h2>Three connected starting points.</h2>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.number}>
              <span className="module-number">{module.number}</span>
              <span className="module-status">{module.status}</span>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>SMART GRAND PRIX</span>
        <span>Independent platform • Rwanda</span>
      </footer>
    </main>
  );
}
