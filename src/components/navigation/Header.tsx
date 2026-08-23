import {
  Bell,
  BriefcaseBusiness,
  Home,
  Menu,
  MessageCircle,
  Network,
  Search,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="pharmalink-header">
        <div className="pharmalink-header-inner">

          {/* Brand */}

          <Link
            to="/feed"
            className="pharmalink-header-brand"
            onClick={closeMobileMenu}
          >
            <span className="pharmalink-header-logo">
              P
            </span>

            <span className="pharmalink-header-name">
              Pharma<span>Link</span>
            </span>
          </Link>

          {/* Search */}

          <div className="pharmalink-header-search">
            <Search size={17} />

            <input
              type="search"
              placeholder="Search pharmacy professionals..."
              aria-label="Search PharmaLink"
            />
          </div>

          {/* Desktop Navigation */}

          <nav className="pharmalink-header-nav">
            <HeaderNavItem
              to="/feed"
              label="Home"
              active={isActive('/feed')}
            >
              <Home size={19} />
            </HeaderNavItem>

            <HeaderNavItem
              to="/network"
              label="Network"
              active={isActive('/network')}
            >
              <Network size={19} />
            </HeaderNavItem>

            <HeaderNavItem
              to="/jobs"
              label="Jobs"
              active={isActive('/jobs')}
            >
              <BriefcaseBusiness size={19} />
            </HeaderNavItem>

            <HeaderNavItem
              to="/messages"
              label="Messages"
              active={isActive('/messages')}
            >
              <MessageCircle size={19} />
            </HeaderNavItem>

            <HeaderNavItem
              to="/notifications"
              label="Notifications"
              active={isActive('/notifications')}
              notificationCount={3}
            >
              <Bell size={19} />
            </HeaderNavItem>

            <Link
              to="/profile"
              className={`pharmalink-header-profile ${
                isActive('/profile')
                  ? 'active'
                  : ''
              }`}
            >
              <span className="pharmalink-header-avatar">
                AA
              </span>

              <span>Me</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}

          <button
            type="button"
            className="pharmalink-header-mobile-button"
            onClick={() =>
              setMobileMenuOpen(
                (current) => !current,
              )
            }
            aria-label={
              mobileMenuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>
      </header>

      {/* Mobile Navigation */}

      {mobileMenuOpen && (
        <div className="pharmalink-mobile-navigation">
          <div className="pharmalink-mobile-navigation-inner">

            <MobileNavItem
              to="/feed"
              label="Home"
              active={isActive('/feed')}
              onClick={closeMobileMenu}
            >
              <Home size={18} />
            </MobileNavItem>

            <MobileNavItem
              to="/network"
              label="Network"
              active={isActive('/network')}
              onClick={closeMobileMenu}
            >
              <Network size={18} />
            </MobileNavItem>

            <MobileNavItem
              to="/jobs"
              label="Jobs"
              active={isActive('/jobs')}
              onClick={closeMobileMenu}
            >
              <BriefcaseBusiness size={18} />
            </MobileNavItem>

            <MobileNavItem
              to="/messages"
              label="Messages"
              active={isActive('/messages')}
              onClick={closeMobileMenu}
            >
              <MessageCircle size={18} />
            </MobileNavItem>

            <MobileNavItem
              to="/notifications"
              label="Notifications"
              active={isActive('/notifications')}
              notificationCount={3}
              onClick={closeMobileMenu}
            >
              <Bell size={18} />
            </MobileNavItem>

            <MobileNavItem
              to="/profile"
              label="My profile"
              active={isActive('/profile')}
              onClick={closeMobileMenu}
            >
              <span className="pharmalink-mobile-avatar">
                AA
              </span>
            </MobileNavItem>

          </div>
        </div>
      )}
    </>
  )
}

interface HeaderNavItemProps {
  to: string
  label: string
  active: boolean
  notificationCount?: number
  children:ReactNode
}

function HeaderNavItem({
  to,
  label,
  active,
  notificationCount,
  children,
}: HeaderNavItemProps) {
  return (
    <Link
      to={to}
      className={`pharmalink-header-nav-item ${
        active ? 'active' : ''
      }`}
    >
      <span className="pharmalink-header-nav-icon">
        {children}

        {notificationCount !== undefined && (
          <span className="pharmalink-header-notification">
            {notificationCount}
          </span>
        )}
      </span>

      <span>
        {label}
      </span>
    </Link>
  )
}

interface MobileNavItemProps {
  to: string
  label: string
  active: boolean
  notificationCount?: number
  onClick: () => void
  children: React.ReactNode
}

function MobileNavItem({
  to,
  label,
  active,
  notificationCount,
  onClick,
  children,
}: MobileNavItemProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`pharmalink-mobile-nav-item ${
        active ? 'active' : ''
      }`}
    >
      <span className="pharmalink-mobile-nav-icon">
        {children}

        {notificationCount !== undefined && (
          <span className="pharmalink-header-notification">
            {notificationCount}
          </span>
        )}
      </span>

      <span>
        {label}
      </span>
    </Link>
  )
}

export default Header