import './App.css'

function App() {
  return (
    <main className="design-system-page">
      <div className="container">

        <header className="ds-header">
          <div>
            <span className="ds-eyebrow">PHARMALINK DESIGN SYSTEM</span>
            <h1>Connect. Discover. Grow.</h1>
            <p>
              The visual foundation for the professional network built for pharmacy.
            </p>
          </div>

          <div className="brand-mark">
            <span className="brand-icon">P</span>
            <span>PharmaLink</span>
          </div>
        </header>

        {/* Colors */}
        <section className="ds-section">
          <div className="section-heading">
            <span className="ds-eyebrow">01</span>
            <h2>Colors</h2>
            <p>Professional pharmaceutical-inspired color system.</p>
          </div>

          <div className="color-grid">
            <div className="color-card primary">
              <div className="color-preview" />
              <strong>Primary</strong>
              <span>Pharma Teal</span>
            </div>

            <div className="color-card navy">
              <div className="color-preview" />
              <strong>Navy</strong>
              <span>Professional Dark</span>
            </div>

            <div className="color-card surface">
              <div className="color-preview" />
              <strong>Surface</strong>
              <span>White</span>
            </div>

            <div className="color-card background">
              <div className="color-preview" />
              <strong>Background</strong>
              <span>Soft Neutral</span>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="ds-section">
          <div className="section-heading">
            <span className="ds-eyebrow">02</span>
            <h2>Typography</h2>
            <p>Clear hierarchy designed for professional content.</p>
          </div>

          <div className="type-demo">
            <h1>Professional networking for pharmacy.</h1>
            <h2>Discover people and opportunities.</h2>
            <h3>Build your professional identity.</h3>

            <p>
              PharmaLink connects pharmacists, students, researchers,
              pharmaceutical professionals, recruiters and educators in one
              professional ecosystem.
            </p>

            <p className="text-secondary">
              Secondary text provides supporting information without competing
              with the primary content.
            </p>

            <p className="text-muted">
              Muted text is used for metadata and low-priority information.
            </p>
          </div>
        </section>

        {/* Buttons */}
        <section className="ds-section">
          <div className="section-heading">
            <span className="ds-eyebrow">03</span>
            <h2>Buttons</h2>
            <p>Simple, confident actions with clear hierarchy.</p>
          </div>

          <div className="component-row">
            <button className="btn btn-primary">
              Join PharmaLink
            </button>

            <button className="btn btn-secondary">
              Explore Network
            </button>

            <button className="btn btn-outline">
              Learn More
            </button>

            <button className="btn btn-ghost">
              Cancel
            </button>

            <button className="btn btn-primary" disabled>
              Disabled
            </button>
          </div>
        </section>

        {/* Cards */}
        <section className="ds-section">
          <div className="section-heading">
            <span className="ds-eyebrow">04</span>
            <h2>Cards</h2>
            <p>Reusable surfaces for professional information.</p>
          </div>

          <div className="card-grid">
            <article className="demo-card">
              <span className="demo-icon">Rx</span>

              <h3>Pharmacy Professionals</h3>

              <p>
                Connect with pharmacists and pharmaceutical professionals
                across different specialties and industries.
              </p>

              <a href="#">Explore professionals →</a>
            </article>

            <article className="demo-card">
              <span className="demo-icon">R</span>

              <h3>Research Network</h3>

              <p>
                Discover researchers, publications, projects and ideas shaping
                the future of pharmacy.
              </p>

              <a href="#">Explore research →</a>
            </article>

            <article className="demo-card">
              <span className="demo-icon">J</span>

              <h3>Pharmacy Careers</h3>

              <p>
                Find internships, jobs and professional opportunities across
                the pharmaceutical ecosystem.
              </p>

              <a href="#">Explore careers →</a>
            </article>
          </div>
        </section>

        {/* Inputs */}
        <section className="ds-section">
          <div className="section-heading">
            <span className="ds-eyebrow">05</span>
            <h2>Inputs</h2>
            <p>Clean controls for forms and professional workflows.</p>
          </div>

          <div className="input-demo">
            <label htmlFor="demo-search">Search</label>

            <input
              id="demo-search"
              type="text"
              placeholder="Search people, jobs, research..."
            />

            <label htmlFor="demo-email">Email address</label>

            <input
              id="demo-email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
        </section>

        {/* Badges */}
        <section className="ds-section">
          <div className="section-heading">
            <span className="ds-eyebrow">06</span>
            <h2>Badges</h2>
            <p>Small visual indicators for professional context.</p>
          </div>

          <div className="component-row">
            <span className="badge badge-primary">Pharmacist</span>
            <span className="badge badge-blue">Researcher</span>
            <span className="badge badge-green">Verified</span>
            <span className="badge badge-neutral">B.Pharm Student</span>
          </div>
        </section>

      </div>
    </main>
  )
}

export default App