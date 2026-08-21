import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
} from 'lucide-react'
import { useState } from 'react'
import type{ FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] =
    useState('')

  const [error, setError] = useState('')

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (password.length < 8) {
      setError(
        'Password must contain at least 8 characters.',
      )
      return
    }

    setError('')

    /*
      Temporary registration flow.

      Backend registration will be connected later.
      The next step will be professional identity selection.
    */

    navigate('/onboarding')
  }

  return (
    <div className="auth-form-wrapper register-wrapper">
      <div className="auth-form-header">
        <span className="auth-mobile-label">
          PHARMALINK
        </span>

        <h2>
          Create your account.
        </h2>

        <p>
          Start building your professional presence
          in pharmacy.
        </p>
      </div>

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >
        <div className="auth-field">
          <label htmlFor="fullName">
            Full name
          </label>

          <div className="auth-input-wrapper">
            <User size={17} />

            <input
              id="fullName"
              type="text"
              placeholder="Your full name"
              value={fullName}
              onChange={(event) =>
                setFullName(event.target.value)
              }
              autoComplete="name"
              required
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="registerEmail">
            Email address
          </label>

          <div className="auth-input-wrapper">
            <Mail size={17} />

            <input
              id="registerEmail"
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
          <label htmlFor="registerPassword">
            Password
          </label>

          <div className="auth-input-wrapper">
            <LockKeyhole size={17} />

            <input
              id="registerPassword"
              type={
                showPassword
                  ? 'text'
                  : 'password'
              }
              placeholder="At least 8 characters"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              autoComplete="new-password"
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

        <div className="auth-field">
          <label htmlFor="confirmPassword">
            Confirm password
          </label>

          <div className="auth-input-wrapper">
            <LockKeyhole size={17} />

            <input
              id="confirmPassword"
              type={
                showConfirmPassword
                  ? 'text'
                  : 'password'
              }
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              autoComplete="new-password"
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword(
                  (current) => !current,
                )
              }
              aria-label={
                showConfirmPassword
                  ? 'Hide password'
                  : 'Show password'
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
          <div className="auth-error">
            {error}
          </div>
        )}

        <label className="terms-check">
          <input
            type="checkbox"
            required
          />

          <span>
            I agree to PharmaLink's{' '}
            <Link to="/">
              Terms
            </Link>{' '}
            and{' '}
            <Link to="/">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="auth-submit"
        >
          Continue
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
          Already have a PharmaLink account?
        </span>

        <Link to="/login">
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default Register