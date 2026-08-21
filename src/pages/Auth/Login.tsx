import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
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
    <div className="auth-form-wrapper">
      <div className="auth-form-header">
        <span className="auth-mobile-label">
          PHARMALINK
        </span>

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
  )
}

export default Login