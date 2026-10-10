
import { useState, type FormEvent } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
  ShieldCheck,
  Network,
  FlaskConical,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Your password must contain at least 8 characters.')
      return
    }

    if (password !== confirmPassword) {
      setError('Your passwords do not match. Please try again.')
      return
    }

    if (!acceptedTerms) {
      setError('Please accept the Terms and Privacy Policy.')
      return
    }

    // Temporary frontend flow. Connect backend registration here later.
    navigate('/feed')
  }

  return (
    <>
      <style>{`
        .pl-register,
        .pl-register * {
          box-sizing: border-box;
        }

        .pl-register {
          --pl-green: #006241;
          --pl-green-dark: #004b33;
          --pl-green-light: #eaf5f0;
          --pl-ink: #17212b;
          --pl-muted: #74818c;
          --pl-border: #dfe7e3;

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

        .pl-register button,
        .pl-register input {
          font: inherit;
        }

        .pl-register a {
          color: inherit;
          text-decoration: none;
        }

        .pl-register button:focus-visible,
        .pl-register a:focus-visible,
        .pl-register input:focus-visible {
          outline: 3px solid rgba(0,98,65,.25);
          outline-offset: 3px;
        }

        .pl-register__header {
          width: min(1180px, calc(100% - 48px));
          height: 76px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .pl-register__brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--pl-ink);
          font-size: 14px;
          font-weight: 800;
          letter-spacing: -.035em;
        }

        .pl-register__brand-mark {
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

        .pl-register__brand-name span {
          color: var(--pl-green);
        }

        .pl-register__back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #697783 !important;
          font-size: 12px;
          font-weight: 600;
          transition: color .2s ease;
        }

        .pl-register__back:hover {
          color: var(--pl-green) !important;
        }

        .pl-register__main {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 24px 52px;
          position: relative;
          z-index: 1;
        }

        .pl-register__shell {
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

        .pl-register__side {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 690px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 45px 38px 30px;
          color: white;
          background:
            radial-gradient(circle at 90% 10%, rgba(98,192,157,.23), transparent 32%),
            linear-gradient(145deg, #003e2c 0%, #006241 55%, #08795b 100%);
        }

        .pl-register__side::before,
        .pl-register__side::after {
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

        .pl-register__side::after {
          width: 190px;
          height: 190px;
          right: -80px;
          bottom: 145px;
          box-shadow: none;
          border-color: rgba(255,255,255,.11);
        }

        .pl-register__side-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: rgba(255,255,255,.76);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .pl-register__side-eyebrow svg {
          color: #9cddbf;
        }

        .pl-register__side-title {
          max-width: 390px;
          margin: 28px 0 0;
          color: #fff;
          font-size: clamp(38px, 4vw, 53px);
          font-weight: 750;
          line-height: 1.04;
          letter-spacing: -.065em;
        }

        .pl-register__side-title span {
          color: #9cddbf;
        }

        .pl-register__side-description {
          max-width: 330px;
          margin: 20px 0 0;
          color: rgba(255,255,255,.73);
          font-size: 13px;
          line-height: 1.85;
        }

        .pl-register__features {
          display: grid;
          gap: 0;
          margin-top: 36px;
        }

        .pl-register__feature {
          display: grid;
          grid-template-columns: 39px 1fr;
          align-items: start;
          gap: 13px;
          padding: 17px 0;
          border-top: 1px solid rgba(255,255,255,.14);
        }

        .pl-register__feature-icon {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          color: #c0ecd6;
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 10px;
        }

        .pl-register__feature h3 {
          margin: 1px 0 5px;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }

        .pl-register__feature p {
          margin: 0;
          color: rgba(255,255,255,.65);
          font-size: 11px;
          line-height: 1.65;
        }

        .pl-register__side-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          color: rgba(255,255,255,.58);
          font-size: 10px;
        }

        .pl-register__side-footer svg {
          color: #a7dfc5;
          flex-shrink: 0;
        }

        .pl-register__card {
          min-width: 0;
          display: flex;
          align-items: center;
          padding: 48px 54px;
        }

        .pl-register__form-wrap {
          width: 100%;
          max-width: 405px;
          margin: 0 auto;
        }

        .pl-register__mobile-label {
          display: none;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
          color: var(--pl-green);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: .12em;
        }

        .pl-register__mobile-mark {
          display: grid;
          place-items: center;
          width: 29px;
          height: 29px;
          border-radius: 8px;
          color: white;
          background: var(--pl-green);
          letter-spacing: 0;
        }

        .pl-register__heading {
          margin: 0;
          color: var(--pl-ink);
          font-size: clamp(32px, 3.2vw, 41px);
          font-weight: 760;
          line-height: 1.1;
          letter-spacing: -.06em;
        }

        .pl-register__subtitle {
          margin: 12px 0 0;
          color: var(--pl-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .pl-register__form {
          display: grid;
          gap: 19px;
          margin-top: 30px;
        }

        .pl-register__field {
          display: grid;
          gap: 8px;
          min-width: 0;
        }

        .pl-register__label {
          color: #354550;
          font-size: 12px;
          font-weight: 700;
        }

        .pl-register__input-wrap {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 0;
        }

        .pl-register__input-icon {
          position: absolute;
          left: 14px;
          width: 17px;
          height: 17px;
          color: #8c9a96;
          pointer-events: none;
          flex-shrink: 0;
        }

        .pl-register__input {
          display: block;
          width: 100%;
          min-width: 0;
          height: 47px;
          padding: 0 43px;
          color: var(--pl-ink);
          background: #fbfcfb;
          border: 1px solid #dce5e0;
          border-radius: 9px;
          outline: none;
          font-size: 12px !important;
          line-height: normal;
          transition: border-color .18s ease, box-shadow .18s ease, background .18s ease;
        }

        .pl-register__input::placeholder {
          color: #a0aba7;
          opacity: 1;
        }

        .pl-register__input:hover {
          border-color: #bfd0c8;
        }

        .pl-register__input:focus {
          background: #fff;
          border-color: var(--pl-green);
          box-shadow: 0 0 0 3px rgba(0,98,65,.09);
        }

        .pl-register__toggle {
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

        .pl-register__toggle:hover {
          color: var(--pl-green);
          background: var(--pl-green-light);
        }

        .pl-register__error {
          padding: 11px 13px;
          color: #a33535;
          background: #fff5f5;
          border: 1px solid #f0d6d6;
          border-radius: 8px;
          font-size: 12px;
          line-height: 1.6;
        }

        .pl-register__terms {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #75827d;
          font-size: 11px;
          line-height: 1.8;
          cursor: pointer;
        }

        .pl-register__terms input {
          width: 15px;
          height: 15px;
          margin: 2px 0 0;
          flex: 0 0 15px;
          accent-color: var(--pl-green);
          cursor: pointer;
        }

        .pl-register__terms a {
          color: var(--pl-green);
          font-weight: 700;
        }

        .pl-register__terms a:hover {
          text-decoration: underline;
        }

        .pl-register__submit {
          width: 100%;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 2px;
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

        .pl-register__submit svg {
          transition: transform .18s ease;
        }

        .pl-register__submit:hover {
          background: var(--pl-green-dark);
          box-shadow: 0 10px 23px rgba(0,98,65,.20);
          transform: translateY(-1px);
        }

        .pl-register__submit:hover svg {
          transform: translateX(3px);
        }

        .pl-register__divider {
          display: flex;
          align-items: center;
          gap: 13px;
          margin: 25px 0 22px;
        }

        .pl-register__divider span {
          flex: 1;
          height: 1px;
          background: #e8eeeb;
        }

        .pl-register__divider small {
          color: #a1aba6;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .1em;
        }

        .pl-register__signin {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 5px;
          color: #75827d;
          font-size: 11px;
          line-height: 1.8;
          text-align: center;
        }

        .pl-register__signin a {
          color: var(--pl-green);
          font-weight: 750;
        }

        .pl-register__signin a:hover {
          text-decoration: underline;
        }

        .pl-register__footer {
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

        .pl-register__footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 19px;
        }

        .pl-register__footer a:hover {
          color: var(--pl-green);
        }

        @media (min-width: 1500px) {
          .pl-register__shell {
            width: min(1080px, 100%);
          }
        }

        @media (max-width: 1000px) {
          .pl-register__shell {
            grid-template-columns: .85fr 1.15fr;
          }

          .pl-register__side {
            padding: 38px 28px 27px;
          }

          .pl-register__card {
            padding: 42px 32px;
          }

          .pl-register__side-title {
            font-size: 40px;
          }
        }

        @media (max-width: 760px) {
          .pl-register__main {
            padding: 18px 18px 35px;
          }

          .pl-register__shell {
            width: min(500px, 100%);
            grid-template-columns: 1fr;
            border-radius: 16px;
          }

          .pl-register__side {
            display: none;
          }

          .pl-register__card {
            padding: 38px 35px;
          }

          .pl-register__mobile-label {
            display: flex;
          }

          .pl-register__heading {
            font-size: 36px;
          }

          .pl-register__footer {
            width: calc(100% - 36px);
          }
        }

        @media (max-width: 420px) {
          .pl-register__header {
            width: calc(100% - 32px);
            height: 66px;
          }

          .pl-register__brand {
            font-size: 12px;
          }

          .pl-register__back {
            gap: 5px;
            font-size: 11px;
          }

          .pl-register__main {
            padding: 10px 12px 26px;
          }

          .pl-register__card {
            padding: 30px 22px;
          }

          .pl-register__heading {
            font-size: 32px;
          }

          .pl-register__subtitle {
            font-size: 12px;
          }

          .pl-register__form {
            gap: 17px;
            margin-top: 25px;
          }

          .pl-register__footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
            padding-top: 16px;
          }

          .pl-register__footer-links {
            gap: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pl-register *,
          .pl-register *::before,
          .pl-register *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="pl-register">
        <header className="pl-register__header">
          <Link to="/" className="pl-register__brand" aria-label="PharmaLink home">
            <span className="pl-register__brand-mark">P.</span>
            <span className="pl-register__brand-name">
              PHARMA<span>LINK</span>
            </span>
          </Link>

          <Link to="/" className="pl-register__back">
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </header>

        <main className="pl-register__main">
          <div className="pl-register__shell">
            <aside className="pl-register__side">
              <div>
                <div className="pl-register__side-eyebrow">
                  <Sparkles size={14} />
                  YOUR PROFESSIONAL COMMUNITY
                </div>

                <h1 className="pl-register__side-title">
                  Where pharmacy
                  <br />
                  meets <span>possibility.</span>
                </h1>

                <p className="pl-register__side-description">
                  A professional space to connect with people,
                  exchange knowledge, discover opportunities,
                  and shape the future of pharmacy.
                </p>

                <div className="pl-register__features">
                  <div className="pl-register__feature">
                    <div className="pl-register__feature-icon">
                      <Network size={19} />
                    </div>
                    <div>
                      <h3>Build meaningful connections</h3>
                      <p>Meet students, researchers, pharmacists, and industry professionals.</p>
                    </div>
                  </div>

                  <div className="pl-register__feature">
                    <div className="pl-register__feature-icon">
                      <FlaskConical size={19} />
                    </div>
                    <div>
                      <h3>Explore knowledge and research</h3>
                      <p>Discover new ideas, scientific work, and professional discussions.</p>
                    </div>
                  </div>

                  <div className="pl-register__feature">
                    <div className="pl-register__feature-icon">
                      <ShieldCheck size={19} />
                    </div>
                    <div>
                      <h3>Shape your professional identity</h3>
                      <p>Create your profile and take the next step in your pharmacy journey.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pl-register__side-footer">
                <CheckCircle2 size={15} />
                A community built around pharmacy professionals.
              </div>
            </aside>

            <section className="pl-register__card">
              <div className="pl-register__form-wrap">
                <div className="pl-register__mobile-label">
                  <span className="pl-register__mobile-mark">P.</span>
                  PHARMALINK
                </div>

                <div>
                  <h2 className="pl-register__heading">
                    Create your account.
                  </h2>
                  <p className="pl-register__subtitle">
                    Start building your professional presence in pharmacy.
                  </p>
                </div>

                <form className="pl-register__form" onSubmit={handleSubmit}>
                  <div className="pl-register__field">
                    <label className="pl-register__label" htmlFor="register-full-name">
                      Full name
                    </label>
                    <div className="pl-register__input-wrap">
                      <UserRound className="pl-register__input-icon" size={17} />
                      <input
                        className="pl-register__input"
                        id="register-full-name"
                        type="text"
                        placeholder="Your full name"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        autoComplete="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="pl-register__field">
                    <label className="pl-register__label" htmlFor="register-email">
                      Email address
                    </label>
                    <div className="pl-register__input-wrap">
                      <Mail className="pl-register__input-icon" size={17} />
                      <input
                        className="pl-register__input"
                        id="register-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="pl-register__field">
                    <label className="pl-register__label" htmlFor="register-password">
                      Password
                    </label>
                    <div className="pl-register__input-wrap">
                      <LockKeyhole className="pl-register__input-icon" size={17} />
                      <input
                        className="pl-register__input"
                        id="register-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="At least 8 characters"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="new-password"
                        minLength={8}
                        required
                      />
                      <button
                        className="pl-register__toggle"
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                      </button>
                    </div>
                  </div>

                  <div className="pl-register__field">
                    <label className="pl-register__label" htmlFor="register-confirm-password">
                      Confirm password
                    </label>
                    <div className="pl-register__input-wrap">
                      <LockKeyhole className="pl-register__input-icon" size={17} />
                      <input
                        className="pl-register__input"
                        id="register-confirm-password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Re-enter your password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        autoComplete="new-password"
                        required
                      />
                      <button
                        className="pl-register__toggle"
                        type="button"
                        onClick={() => setShowConfirmPassword((current) => !current)}
                        aria-label={
                          showConfirmPassword ? 'Hide password' : 'Show password'
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={17} />
                        ) : (
                          <Eye size={17} />
                        )}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="pl-register__error" role="alert">
                      {error}
                    </div>
                  )}

                  <label className="pl-register__terms">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) => setAcceptedTerms(event.target.checked)}
                      required
                    />
                    <span>
                      I agree to PharmaLink&apos;s{' '}
                      <Link to="/user-agreement">Terms of Use</Link>
                      {' '}and{' '}
                      <Link to="/privacy-policy">Privacy Policy</Link>.
                    </span>
                  </label>

                  <button className="pl-register__submit" type="submit">
                    <ArrowRight size={17} />
                    <Link to="/feed">Continue</Link>
                  </button>
                </form>

                <div className="pl-register__divider">
                  <span />
                  <small>ALREADY A MEMBER?</small>
                  <span />
                </div>

                <div className="pl-register__signin">
                  <span>Already have a PharmaLink account?</span>
                  <Link to="/login">Sign in</Link>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="pl-register__footer">
          <span>© {new Date().getFullYear()} PharmaLink. All rights reserved.</span>
          <nav className="pl-register__footer-links" aria-label="Legal links">
            <Link to="/about">About</Link>
            <Link to="/user-agreement">Terms of Use</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default Register
