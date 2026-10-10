import {
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  FileText,
  Grid3X3,
  Home,
  Menu,
  MessageCircle,
  Network,
  Search,
  Settings,
  Bookmark,
  Users,
  GraduationCap,
  FlaskConical,
  UserPlus,
  X,
} from 'lucide-react'

import {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import type { ReactNode } from 'react'

import { useAuthStore } from '../../stores/authStore'
import './Header.css'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const {
    currentUser,
    logout,
  } = useAuthStore()

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  const [profileMenuOpen, setProfileMenuOpen] =
    useState(false)

  const [businessMenuOpen, setBusinessMenuOpen] =
    useState(false)

  const [searchValue, setSearchValue] =
    useState('')

  const profileMenuRef =
    useRef<HTMLDivElement>(null)

  const businessMenuRef =
    useRef<HTMLDivElement>(null)

  const isActive = (path: string) =>
    location.pathname === path ||
    location.pathname.startsWith(`${path}/`)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const closeProfileMenu = () => {
    setProfileMenuOpen(false)
  }

  const closeBusinessMenu = () => {
    setBusinessMenuOpen(false)
  }

  useEffect(() => {
    function handleOutsideClick(
      event: MouseEvent,
    ) {
      const target =
        event.target as Node

      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(target)
      ) {
        setProfileMenuOpen(false)
      }

      if (
        businessMenuRef.current &&
        !businessMenuRef.current.contains(target)
      ) {
        setBusinessMenuOpen(false)
      }
    }

    if (
      profileMenuOpen ||
      businessMenuOpen
    ) {
      document.addEventListener(
        'mousedown',
        handleOutsideClick,
      )
    }

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      )
    }
  }, [
    profileMenuOpen,
    businessMenuOpen,
  ])

  useEffect(() => {
    setProfileMenuOpen(false)
    setBusinessMenuOpen(false)
    setMobileMenuOpen(false)
  }, [location.pathname])

  function handleLogout() {
    logout()
    setProfileMenuOpen(false)
    navigate('/')
  }

  function handleSearchSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    const query =
      searchValue.trim()

    if (!query) {
      return
    }

    /*
     * Keep search behavior deliberately lightweight until a
     * dedicated global search route is wired into the app.
     * The current query is sent as a URL parameter.
     */
    navigate(
      `/search?q=${encodeURIComponent(query)}`,
    )
  }

  const userInitials =
    currentUser?.initials ?? 'AA'

  const userName =
    currentUser?.name ??
    'PharmaLink User'

  const userHeadline =
    currentUser?.headline ??
    'Pharmacy Professional'

  const userOrganization =
    currentUser?.organization ?? ''

  return (
    <>
      <header
        className="pharmalink-header"
        role="banner"
      >
        <div className="pharmalink-header-inner">

          {/* =====================================================
              BRAND
          ====================================================== */}

          <Link
            to="/feed"
            className="pharmalink-header-brand"
            onClick={closeMobileMenu}
            aria-label="PharmaLink home"
          >
            <span className="pharmalink-header-logo">
              P
            </span>

            <span className="pharmalink-header-name">
              Pharma<span>Link</span>
            </span>
          </Link>


          {/* =====================================================
              GLOBAL SEARCH
          ====================================================== */}

          <form
            className="pharmalink-header-search"
            onSubmit={handleSearchSubmit}
            role="search"
          >
            <Search
              className="pharmalink-header-search-icon"
              size={21}
              strokeWidth={2}
            />

            <input
              type="search"
              value={searchValue}
              onChange={(event) =>
                setSearchValue(
                  event.target.value,
                )
              }
              placeholder="Search pharmacy professionals..."
              aria-label="Search PharmaLink"
            />

            {searchValue && (
              <button
                type="button"
                className="pharmalink-header-search-clear"
                aria-label="Clear search"
                onClick={() =>
                  setSearchValue('')
                }
              >
                <X size={15} />
              </button>
            )}
          </form>


          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <nav
            className="pharmalink-header-nav"
            aria-label="Primary navigation"
          >

            <HeaderNavItem
              to="/feed"
              label="Home"
              active={isActive('/feed')}
            >
              <Home size={23} />
            </HeaderNavItem>

            <HeaderNavItem
              to="/network"
              label="My Network"
              active={isActive('/network')}
            >
              <Network size={23} />
            </HeaderNavItem>

            <HeaderNavItem
              to="/jobs"
              label="Jobs"
              active={isActive('/jobs')}
            >
              <BriefcaseBusiness size={23} />
            </HeaderNavItem>

            <HeaderNavItem
              to="/messages"
              label="Messaging"
              active={isActive('/messages')}
            >
              <MessageCircle size={23} />
            </HeaderNavItem>

            <HeaderNavItem
              to="/notifications"
              label="Notifications"
              active={isActive('/notifications')}
              notificationCount={3}
            >
              <Bell size={23} />
            </HeaderNavItem>


            {/* =================================================
                ME / PROFILE
            ================================================= */}

            <div
              className="pharmalink-header-profile-wrapper"
              ref={profileMenuRef}
            >
              <button
                type="button"
                className={`pharmalink-header-profile ${
                  isActive('/profile')
                    ? 'active'
                    : ''
                } ${
                  profileMenuOpen
                    ? 'menu-open'
                    : ''
                }`}
                onClick={() =>
                  setProfileMenuOpen(
                    (current) => !current,
                  )
                }
                aria-expanded={
                  profileMenuOpen
                }
                aria-haspopup="menu"
              >
                <span className="pharmalink-header-avatar">
                  {userInitials}
                </span>

                <span className="pharmalink-header-profile-label">
                  <span>Me</span>

                  <ChevronDown
                    size={15}
                    className={
                      profileMenuOpen
                        ? 'rotated'
                        : ''
                    }
                  />
                </span>
              </button>

              {profileMenuOpen && (
                <div
                  className="pharmalink-profile-dropdown"
                  role="menu"
                >
                  <div className="pharmalink-profile-dropdown-user">
                    <div className="pharmalink-profile-dropdown-avatar">
                      {userInitials}
                    </div>

                    <div className="pharmalink-profile-dropdown-user-info">
                      <div className="pharmalink-profile-dropdown-name">
                        {userName}
                      </div>

                      <div className="pharmalink-profile-dropdown-headline">
                        {userHeadline}
                      </div>

                      {userOrganization && (
                        <div className="pharmalink-profile-dropdown-organization">
                          {userOrganization}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pharmalink-profile-dropdown-profile">
                    <Link
                      to="/profile"
                      className="pharmalink-profile-view-button"
                      onClick={
                        closeProfileMenu
                      }
                    >
                      View profile
                    </Link>
                  </div>

                  <div className="pharmalink-profile-dropdown-section">
                    <div className="pharmalink-profile-dropdown-section-title">
                      ACCOUNT
                    </div>

                    <Link
                      to="/settings"
                      className="pharmalink-profile-dropdown-item"
                      onClick={
                        closeProfileMenu
                      }
                    >
                      <Settings size={17} />
                      <span>
                        Settings & Privacy
                      </span>
                    </Link>

                    <button
                      type="button"
                      className="pharmalink-profile-dropdown-item"
                    >
                      <span className="pharmalink-dropdown-text-icon">
                        ?
                      </span>
                      <span>Help</span>
                    </button>

                    <button
                      type="button"
                      className="pharmalink-profile-dropdown-item"
                    >
                      <span className="pharmalink-dropdown-text-icon">
                        A
                      </span>
                      <span>Language</span>
                    </button>
                  </div>

                  <div className="pharmalink-profile-dropdown-section">
                    <div className="pharmalink-profile-dropdown-section-title">
                      MANAGE
                    </div>

                    <Link
                      to="/profile"
                      className="pharmalink-profile-dropdown-item"
                      onClick={
                        closeProfileMenu
                      }
                    >
                      <FileText size={17} />
                      <span>
                        Posts & Activity
                      </span>
                    </Link>

                    <button
                      type="button"
                      className="pharmalink-profile-dropdown-item"
                    >
                      <Bookmark size={17} />
                      <span>
                        Saved items
                      </span>
                    </button>

                    <button
                      type="button"
                      className="pharmalink-profile-dropdown-item"
                    >
                      <Users size={17} />
                      <span>
                        My Communities
                      </span>
                    </button>
                  </div>

                  <div className="pharmalink-profile-dropdown-footer">
                    <button
                      type="button"
                      className="pharmalink-profile-dropdown-signout"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>


            {/* DIVIDER */}

            <div
              className="pharmalink-header-divider"
              aria-hidden="true"
            />


            {/* =================================================
                FOR BUSINESS
            ================================================= */}

            <div
              className="pharmalink-header-business-wrapper"
              ref={businessMenuRef}
            >
              <button
                type="button"
                className={`pharmalink-header-business ${
                  businessMenuOpen
                    ? 'menu-open'
                    : ''
                }`}
                onClick={() =>
                  setBusinessMenuOpen(
                    (current) => !current,
                  )
                }
                aria-expanded={
                  businessMenuOpen
                }
                aria-haspopup="menu"
              >
                <span className="pharmalink-header-business-icon">
                  <Grid3X3 size={23} />
                </span>

                <span className="pharmalink-header-business-label">
                  <span>For Business</span>

                  <ChevronDown
                    size={14}
                    className={
                      businessMenuOpen
                        ? 'rotated'
                        : ''
                    }
                  />
                </span>
              </button>

              {businessMenuOpen && (
                <div
                  className="pharmalink-business-dropdown"
                  role="menu"
                >
                  <div className="pharmalink-business-column pharmalink-business-apps">
                    <h3>My Apps</h3>

                    <BusinessAppItem
                      icon={
                        <FlaskConical size={21} />
                      }
                      title="Research"
                      description="Discover pharmacy research and innovation."
                      to="/research"
                    />

                    <BusinessAppItem
                      icon={
                        <Users size={21} />
                      }
                      title="Communities"
                      description="Join professional pharmacy communities."
                      to="/communities"
                    />

                    <BusinessAppItem
                      icon={
                        <Building2 size={21} />
                      }
                      title="Organizations"
                      description="Build and manage your organization."
                      to="/organizations"
                    />

                    <BusinessAppItem
                      icon={
                        <BriefcaseBusiness
                          size={21}
                        />
                      }
                      title="Jobs"
                      description="Find and hire pharmacy talent."
                      to="/jobs"
                    />

                    <div className="pharmalink-business-category">
                      Talent
                    </div>

                    <BusinessAppItem
                      icon={
                        <UserPlus size={21} />
                      }
                      title="Hire pharmacy talent"
                      description="Connect with qualified professionals."
                      to="/jobs"
                    />

                    <BusinessAppItem
                      icon={
                        <GraduationCap
                          size={21}
                        />
                      }
                      title="Learning"
                      description="Build skills across pharmacy."
                      to="/learning"
                    />

                    <div className="pharmalink-business-category">
                      Professional
                    </div>

                    <BusinessAppItem
                      icon={
                        <Network size={21} />
                      }
                      title="Professional Network"
                      description="Grow your pharmacy network."
                      to="/network"
                    />
                  </div>

                  <div className="pharmalink-business-column pharmalink-business-explore">
                    <h3>
                      Explore more for business
                    </h3>

                    <BusinessExploreItem
                      title="Hire on PharmaLink"
                      description="Find, attract and recruit pharmacy talent."
                      to="/jobs"
                    />

                    <BusinessExploreItem
                      title="Post a job"
                      description="Reach qualified pharmacy professionals."
                      to="/jobs"
                    />

                    <BusinessExploreItem
                      title="Build an organization"
                      description="Create and manage your pharmacy organization."
                      to="/organizations"
                    />

                    <BusinessExploreItem
                      title="Research partnerships"
                      description="Discover researchers and collaboration opportunities."
                      to="/research"
                    />

                    <BusinessExploreItem
                      title="PharmaLink Learning"
                      description="Courses and resources for professional growth."
                      to="/learning"
                    />

                    <div className="pharmalink-business-create">
                      <Link
                        to="/organizations"
                        onClick={
                          closeBusinessMenu
                        }
                      >
                        Create an Organization
                        <span>+</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* =================================================
                LEARNING
            ================================================= */}

            <Link
              to="/learning"
              className={`pharmalink-header-learning ${
                isActive('/learning')
                  ? 'active'
                  : ''
              }`}
            >
              <span className="pharmalink-header-learning-icon">
                <BookOpen size={23} />
              </span>

              <span>Learning</span>
            </Link>
          </nav>


          {/* MOBILE MENU */}
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
            aria-expanded={
              mobileMenuOpen
            }
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </header>


      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================== */}

      {mobileMenuOpen && (
        <div className="pharmalink-mobile-navigation">
          <div className="pharmalink-mobile-navigation-inner">

            <MobileNavItem
              to="/feed"
              label="Home"
              active={isActive('/feed')}
              onClick={closeMobileMenu}
            >
              <Home size={22} />
            </MobileNavItem>

            <MobileNavItem
              to="/network"
              label="My Network"
              active={isActive('/network')}
              onClick={closeMobileMenu}
            >
              <Network size={22} />
            </MobileNavItem>

            <MobileNavItem
              to="/jobs"
              label="Jobs"
              active={isActive('/jobs')}
              onClick={closeMobileMenu}
            >
              <BriefcaseBusiness size={22} />
            </MobileNavItem>

            <MobileNavItem
              to="/messages"
              label="Messaging"
              active={isActive('/messages')}
              onClick={closeMobileMenu}
            >
              <MessageCircle size={22} />
            </MobileNavItem>

            <MobileNavItem
              to="/notifications"
              label="Notifications"
              active={isActive('/notifications')}
              notificationCount={0}
              onClick={closeMobileMenu}
            >
              <Bell size={22} />
            </MobileNavItem>

            <MobileNavItem
              to="/profile"
              label="My profile"
              active={isActive('/profile')}
              onClick={closeMobileMenu}
            >
              <span className="pharmalink-mobile-avatar">
                {userInitials}
              </span>
            </MobileNavItem>

            <MobileNavItem
              to="/organizations"
              label="For Business"
              active={isActive('/organizations')}
              onClick={closeMobileMenu}
            >
              <Grid3X3 size={22} />
            </MobileNavItem>

            <MobileNavItem
              to="/learning"
              label="Learning"
              active={isActive('/learning')}
              onClick={closeMobileMenu}
            >
              <BookOpen size={22} />
            </MobileNavItem>
          </div>
        </div>
      )}
    </>
  )
}


/* =========================================================
   DESKTOP NAV ITEM
========================================================= */

interface HeaderNavItemProps {
  to: string
  label: string
  active: boolean
  notificationCount?: number
  children: ReactNode
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
      aria-current={
        active ? 'page' : undefined
      }
    >
      <span className="pharmalink-header-nav-icon">
        {children}

        {notificationCount !==
          undefined && (
          <span className="pharmalink-header-notification">
            {notificationCount}
          </span>
        )}
      </span>

      <span>{label}</span>
    </Link>
  )
}


/* =========================================================
   BUSINESS APP ITEM
========================================================= */

interface BusinessAppItemProps {
  icon: ReactNode
  title: string
  description: string
  to: string
}

function BusinessAppItem({
  icon,
  title,
  description,
  to,
}: BusinessAppItemProps) {
  return (
    <Link
      to={to}
      className="pharmalink-business-app-item"
      onClick={() => undefined}
    >
      <span className="pharmalink-business-app-icon">
        {icon}
      </span>

      <span className="pharmalink-business-app-content">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
    </Link>
  )
}


/* =========================================================
   BUSINESS EXPLORE ITEM
========================================================= */

interface BusinessExploreItemProps {
  title: string
  description: string
  to: string
}

function BusinessExploreItem({
  title,
  description,
  to,
}: BusinessExploreItemProps) {
  return (
    <Link
      to={to}
      className="pharmalink-business-explore-item"
    >
      <strong>{title}</strong>
      <span>{description}</span>
    </Link>
  )
}


/* =========================================================
   MOBILE NAV ITEM
========================================================= */

interface MobileNavItemProps {
  to: string
  label: string
  active: boolean
  notificationCount?: number
  onClick: () => void
  children: ReactNode
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
      aria-current={
        active ? 'page' : undefined
      }
    >
      <span className="pharmalink-mobile-nav-icon">
        {children}

        {notificationCount !==
          undefined && (
          <span className="pharmalink-header-notification">
            {notificationCount}
          </span>
        )}
      </span>

      <span>{label}</span>
    </Link>
  )
}

export default Header
