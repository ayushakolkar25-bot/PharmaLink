import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

import './Auth.css'

function AuthLayout() {
  return (
    <div className="auth-page">
      <div className="auth-background-grid" />

      <header className="auth-header">
        <Link to="/" className="auth-brand">
          <span className="auth-brand-mark">P</span>

          <span>
            Pharma<span>Link</span>
          </span>
        </Link>

        <Link to="/" className="auth-back">
          <ArrowLeft size={15} />
          Back to PharmaLink
        </Link>
      </header>

      <main className="auth-main">
        <div className="auth-shell">
          <section className="auth-side">
            <div className="auth-side-content">
              <span className="auth-side-label">
                PHARMACY PROFESSIONAL NETWORK
              </span>

              <h1>
                Your professional
                <span> journey starts here.</span>
              </h1>

              <p>
                Connect with the people, opportunities,
                research, communities, and ideas shaping
                the future of pharmacy.
              </p>

              <div className="auth-side-points">
                <div>
                  <span>01</span>
                  <p>Build your professional identity.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Discover people and opportunities.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Grow within the pharmacy community.</p>
                </div>
              </div>
            </div>

            <div className="auth-side-footer">
              <ShieldCheck size={15} />

              <span>
                Your professional profile belongs to you.
              </span>
            </div>
          </section>

          <section className="auth-card">
            <Outlet />
          </section>
        </div>
      </main>

      <footer className="auth-footer">
        <span>
          © 2026 PharmaLink
        </span>

        <div>
          <Link to="/">Privacy</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Help</Link>
        </div>
      </footer>
    </div>
  )
}

export default AuthLayout