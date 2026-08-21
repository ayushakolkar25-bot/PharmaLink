import { Menu, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link
          to="/"
          className="brand"
          aria-label="PharmaLink home"
        >
          <span className="brand-mark">P</span>

          <span className="brand-name">
            Pharma<span>Link</span>
          </span>
        </Link>

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
          <Link to="/network">Network</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/research">Research</Link>
          <Link to="/communities">Communities</Link>
          <Link to="/events">Events</Link>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="search-button"
            aria-label="Search PharmaLink"
          >
            <Search size={18} />
          </button>

          <Link to="/login" className="login-link">
            Log in
          </Link>

          <Link to="/register" className="join-button">
            Join PharmaLink
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}

export default Header