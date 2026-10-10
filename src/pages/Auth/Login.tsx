
import {
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
  FlaskConical,
} from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    /*
      Temporary authentication flow.

      Backend authentication will be connected later.
      For now we simply move the user into onboarding.
    */

    navigate('/onboarding')
  }

  return (
    <>
      <style>{`
        .pl-login,
        .pl-login * {
          box-sizing: border-box;
        }

        .pl-login {
          --pl-green: #006241;
          --pl-green-dark: #004b33;
          --pl-ink: #17212b;
          --pl-muted: #74818c;

          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          color: var(--pl-ink);
          background:
            radial-gradient(ellipse at 8% 15%, rgba(0,98,65,.065), transparent 32%),
            radial-gradient(ellipse at 92% 85%, rgba(65,105,225,.045), transparent 30%),
            #f7f9f8;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .pl-login button,
        .pl-login input {
          font: inherit;
        }

        .pl-login a {
          color: inherit;
          text-decoration: none;
        }

        .pl-login button:focus-visible,
        .pl-login a:focus-visible,
        .pl-login input:focus-visible {
          outline: 3px solid rgba(0,98,65,.25);
          outline-offset: 3px;
        }

        .pl-login__header {
          width: min(1180px, calc(100% - 48px));
          height: 76px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .pl-login__brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--pl-ink) !important;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: -.035em;
        }

        .pl-login__brand-mark {
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          border-radius: 10px;
          color: white;
          background: var(--pl-green);
          font-size: 13px;
          font-weight: 850;
          box-shadow: 0 5px 12px rgba(0,98,65,.15);
        }

        .pl-login__brand-name span {
          color: var(--pl-green);
        }

        .pl-login__back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #697783 !important;
          font-size: 12px;
          font-weight: 600;
          transition: color .2s ease;
        }

        .pl-login__back:hover {
          color: var(--pl-green) !important;
        }

        .pl-login__main {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 24px 52px;
          position: relative;
          z-index: 1;
        }

        .pl-login__shell {
          width: min(1040px, 100%);
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(213,225,219,.95);
          border-radius: 20px;
          box-shadow:
            0 28px 75px rgba(23,33,43,.085),
            0 5px 18px rgba(23,33,43,.035);
        }

        .pl-login__side {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 620px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 45px 38px 30px;
          color: white;
          background:
            radial-gradient(circle at 90% 10%, rgba(98,192,157,.23), transparent 32%),
            linear-gradient(145deg, #003e2c 0%, #006241 55%, #08795b 100%);
        }

        .pl-login__side::before,
        .pl-login__side::after {
          content: "";
          position: absolute;
          z-index: -1;
          width: 340px;
          height: 340px;
          right: -205px;
          bottom: 70px;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 50%;
          box-shadow:
            0 0 0 40px rgba(255,255,255,.035),
            0 0 0 80px rgba(255,255,255,.025),
            0 0 0 120px rgba(255,255,255,.018);
          pointer-events: none;
        }

        .pl-login__side::after {
          width: 190px;
          height: 190px;
          right: -80px;
          bottom: 145px;
          box-shadow: none;
          border-color: rgba(255,255,255,.11);
        }

        .pl-login__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: rgba(255,255,255,.76);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .pl-login__eyebrow svg {
          color: #9cddbf;
        }

        .pl-login__side-title {
          max-width: 390px;
          margin: 28px 0 0;
          color: #fff;
          font-size: clamp(38px, 4vw, 53px);
          font-weight: 750;
          line-height: 1.04;
          letter-spacing: -.065em;
        }

        .pl-login__side-title span {
          color: #9cddbf;
        }

        .pl-login__side-description {
          max-width: 330px;
          margin: 20px 0 0;
          color: rgba(255,255,255,.73);
          font-size: 13px;
          line-height: 1.85;
        }

        .pl-login__features {
          display: grid;
          gap: 0;
          margin-top: 36px;
        }

        .pl-login__feature {
          display: grid;
          grid-template-columns: 39px 1fr;
          align-items: start;
          gap: 13px;
          padding: 17px 0;
          border-top: 1px solid rgba(255,255,255,.14);
        }

        .pl-login__feature-icon {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          color: #c0ecd6;
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 10px;
        }

        .pl-login__feature h3 {
          margin: 1px 0 5px;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }

        .pl-login__feature p {
          margin: 0;
          color: rgba(255,255,255,.65);
          font-size: 11px;
          line-height: 1.65;
        }

        .pl-login__side-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          color: rgba(255,255,255,.58);
          font-size: 10px;
        }

        .pl-login__side-footer svg {
          color: #a7dfc5;
          flex-shrink: 0;
        }

        .pl-login__card {
          min-width: 0;
          min-height: 620px;
          display: flex;
          align-items: center;
          padding: 48px 54px;
        }

        .pl-login .auth-form-wrapper {
          width: 100%;
          max-width: 405px;
          margin: 0 auto;
        }

        .pl-login .auth-mobile-label {
          display: none;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
          color: var(--pl-green);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: .12em;
        }

        .pl-login .auth-form-header {
          margin-bottom: 32px;
        }

        .pl-login .auth-form-header h2 {
          margin: 0;
          color: var(--pl-ink);
          font-size: clamp(32px, 3.2vw, 41px);
          font-weight: 760;
          line-height: 1.1;
          letter-spacing: -.06em;
        }

        .pl-login .auth-form-header p {
          margin: 12px 0 0;
          color: var(--pl-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .pl-login .auth-form {
          display: grid;
          gap: 22px;
        }

        .pl-login .auth-field {
          display: grid;
          gap: 9px;
          min-width: 0;
        }

        .pl-login .auth-field > label,
        .pl-login .auth-label-row label {
          color: #354550;
          font-size: 12px;
          font-weight: 700;
        }

        .pl-login .auth-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .pl-login .forgot-password {
          padding: 0;
          color: var(--pl-green);
          background: transparent;
          border: 0;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: color .18s ease;
        }

        .pl-login .forgot-password:hover {
          color: var(--pl-green-dark);
          text-decoration: underline;
        }

        .pl-login .auth-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 0;
        }

        .pl-login .auth-input-wrapper > svg {
          position: absolute;
          left: 14px;
          width: 17px;
          height: 17px;
          color: #8c9a96;
          pointer-events: none;
          flex-shrink: 0;
        }

        .pl-login .auth-input-wrapper input {
          display: block;
          width: 100%;
          min-width: 0;
          height: 48px;
          padding: 0 43px;
          color: var(--pl-ink);
          background: #fbfcfb;
          border: 1px solid #dce5e0;
          border-radius: 9px;
          outline: none;
          font-size: 12px;
          line-height: normal;
          transition: border-color .18s ease, box-shadow .18s ease, background .18s ease;
        }

        .pl-login .auth-input-wrapper input::placeholder {
          color: #a0aba7;
          opacity: 1;
        }

        .pl-login .auth-input-wrapper input:hover {
          border-color: #bfd0c8;
        }

        .pl-login .auth-input-wrapper input:focus {
          background: #fff;
          border-color: var(--pl-green);
          box-shadow: 0 0 0 3px rgba(0,98,65,.09);
        }

        .pl-login .password-toggle {
          position: absolute;
          right: 9px;
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          padding: 0;
          color: #82908b;
          background: transparent;
          border: 0;
          border-radius: 6px;
          cursor: pointer;
          transition: color .18s ease, background .18s ease;
        }

        .pl-login .password-toggle:hover {
          color: var(--pl-green);
          background: #eaf5f0;
        }

        .pl-login .auth-submit {
          width: 100%;
          min-height: 49px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 3px;
          padding: 12px 18px;
          color: white;
          background: var(--pl-green);
          border: 1px solid var(--pl-green);
          border-radius: 9px;
          font-size: 12px;
          font-weight: 750;
          cursor: pointer;
          box-shadow: 0 7px 17px rgba(0,98,65,.13);
          transition: background .18s ease, transform .18s ease, box-shadow .18s ease;
        }

        .pl-login .auth-submit svg {
          transition: transform .18s ease;
        }

        .pl-login .auth-submit:hover {
          background: var(--pl-green-dark);
          box-shadow: 0 10px 23px rgba(0,98,65,.20);
          transform: translateY(-1px);
        }

        .pl-login .auth-submit:hover svg {
          transform: translateX(3px);
        }

        .pl-login .auth-divider {
          display: flex;
          align-items: center;
          gap: 13px;
          margin: 28px 0 22px;
        }

        .pl-login .auth-divider span {
          flex: 1;
          height: 1px;
          background: #e8eeeb;
        }

        .pl-login .auth-divider small {
          color: #a1aba6;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .1em;
        }

        .pl-login .auth-switch {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 5px;
          color: #75827d;
          font-size: 11px;
          line-height: 1.8;
          text-align: center;
        }

        .pl-login .auth-switch a {
          color: var(--pl-green);
          font-weight: 750;
        }

        .pl-login .auth-switch a:hover {
          text-decoration: underline;
        }

        .pl-login__footer {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 19px 0 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          color: #89958f;
          border-top: 1px solid #e1e8e4;
          font-size: 10px;
        }

        .pl-login__footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 19px;
        }

        .pl-login__footer a:hover {
          color: var(--pl-green);
        }

        @media (max-width: 1000px) {
          .pl-login__shell {
            grid-template-columns: .85fr 1.15fr;
          }

          .pl-login__side {
            padding: 38px 28px 27px;
          }

          .pl-login__card {
            padding: 42px 32px;
          }

          .pl-login__side-title {
            font-size: 40px;
          }
        }

        @media (max-width: 760px) {
          .pl-login__main {
            padding: 18px 18px 35px;
          }

          .pl-login__shell {
            width: min(500px, 100%);
            grid-template-columns: 1fr;
            border-radius: 16px;
          }

          .pl-login__side {
            display: none;
          }

          .pl-login__card {
            min-height: auto;
            padding: 38px 35px;
          }

          .pl-login .auth-mobile-label {
            display: flex;
          }

          .pl-login .auth-form-header h2 {
            font-size: 36px;
          }

          .pl-login__footer {
            width: calc(100% - 36px);
          }
        }

        @media (max-width: 420px) {
          .pl-login__header {
            width: calc(100% - 32px);
            height: 66px;
          }

          .pl-login__brand {
            font-size: 12px;
          }

          .pl-login__back {
            gap: 5px;
            font-size: 11px;
          }

          .pl-login__main {
            padding: 10px 12px 26px;
          }

          .pl-login__card {
            padding: 30px 22px;
          }

          .pl-login .auth-form-header h2 {
            font-size: 32px;
          }

          .pl-login .auth-form-header p {
            font-size: 12px;
          }

          .pl-login .auth-form {
            gap: 19px;
          }

          .pl-login__footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
            padding-top: 16px;
          }

          .pl-login__footer-links {
            gap: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pl-login *,
          .pl-login *::before,
          .pl-login *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="pl-login">
        <header className="pl-login__header">
          <Link to="/" className="pl-login__brand" aria-label="PharmaLink home">
            <span className="pl-login__brand-mark">P.</span>
            <span className="pl-login__brand-name">
              PHARMA<span>LINK</span>
            </span>
          </Link>

          <Link to="/" className="pl-login__back">
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </header>

        <main className="pl-login__main">
          <div className="pl-login__shell">
            <aside className="pl-login__side">
              <div>
                <div className="pl-login__eyebrow">
                  <ShieldCheck size={14} />
                  YOUR PROFESSIONAL COMMUNITY
                </div>

                <h1 className="pl-login__side-title">
                  Your next
                  <br />
                  chapter starts <span>here.</span>
                </h1>

                <p className="pl-login__side-description">
                  Reconnect with your professional community,
                  explore new opportunities, and keep growing
                  your presence in pharmacy.
                </p>

                <div className="pl-login__features">
                  <div className="pl-login__feature">
                    <div className="pl-login__feature-icon">
                      <Network size={19} />
                    </div>
                    <div>
                      <h3>Your professional network</h3>
                      <p>Reconnect with peers and discover new people in pharmacy.</p>
                    </div>
                  </div>

                  <div className="pl-login__feature">
                    <div className="pl-login__feature-icon">
                      <FlaskConical size={19} />
                    </div>
                    <div>
                      <h3>Ideas that move you forward</h3>
                      <p>Keep up with research, discussions, and industry insights.</p>
                    </div>
                  </div>

                  <div className="pl-login__feature">
                    <div className="pl-login__feature-icon">
                      <ShieldCheck size={19} />
                    </div>
                    <div>
                      <h3>Your journey, all in one place</h3>
                      <p>Continue building your professional identity and career.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pl-login__side-footer">
                <ShieldCheck size={15} />
                A community built around pharmacy professionals.
              </div>
            </aside>

            <section className="pl-login__card">
              <div className="auth-form-wrapper">
                <div className="auth-mobile-label">
                  <span className="pl-login__brand-mark">P.</span>
                  PHARMALINK
                </div>

                <div className="auth-form-header">
                  <h2>
                    Welcome back.
                  </h2>

                  <p>
                    Sign in to continue your professional journey.
                  </p>
                </div>

                <form
                  className="auth-form"
                  onSubmit={handleSubmit}
                >
                  <div className="auth-field">
                    <label htmlFor="email">
                      Email address
                    </label>

                    <div className="auth-input-wrapper">
                      <Mail size={17} />

                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="auth-field">
                    <div className="auth-label-row">
                      <label htmlFor="password">
                        Password
                      </label>

                      <button
                        type="button"
                        className="forgot-password"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <div className="auth-input-wrapper">
                      <LockKeyhole size={17} />

                      <input
                        id="password"
                        type={
                          showPassword
                            ? 'text'
                            : 'password'
                        }
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) =>
                          setPassword(event.target.value)
                        }
                        autoComplete="current-password"
                        required
                      />

                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                          setShowPassword((current) => !current)
                        }
                        aria-label={
                          showPassword
                            ? 'Hide password'
                            : 'Show password'
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={17} />
                        ) : (
                          <Eye size={17} />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="auth-submit"
                  >
                    Sign in
                    <ArrowRight size={17} />
                  </button>
                </form>

                <div className="auth-divider">
                  <span />
                  <small>OR</small>
                  <span />
                </div>

                <div className="auth-switch">
                  <span>
                    Don't have a PharmaLink account?
                  </span>

                  <Link to="/register">
                    Create an account
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="pl-login__footer">
          <span>
            © {new Date().getFullYear()} PharmaLink. All rights reserved.
          </span>

          <nav className="pl-login__footer-links" aria-label="Legal links">
            <Link to="/about">About</Link>
            <Link to="/user-agreement">Terms of Use</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default Login
