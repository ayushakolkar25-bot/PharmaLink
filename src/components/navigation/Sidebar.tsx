import {
  Bookmark,
  CalendarDays,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Settings,
  Users,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { users } from '../../data/users'

function Sidebar() {
  const location = useLocation()

  // Temporary authenticated-user selection.
  // This will later come from authStore/currentUser.
  const currentUser =
    users.find((user) => user.id === 'user-001') ??
    users[0]

  const navigationItems = [
    {
      label: 'Saved posts',
      icon: Bookmark,
      path: '/saved',
    },
    {
      label: 'Communities',
      icon: Users,
      path: '/communities',
    },
    {
      label: 'Research',
      icon: FlaskConical,
      path: '/research',
    },
    {
      label: 'Events',
      icon: CalendarDays,
      path: '/events',
    },
    {
      label: 'Learning',
      icon: GraduationCap,
      path: '/learning',
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/settings',
    },
  ]

  return (
    <aside className="pharmalink-sidebar">

      {/* Profile summary */}

      <section className="pharmalink-sidebar-profile">

        <div className="pharmalink-sidebar-cover" />

        <div className="pharmalink-sidebar-profile-content">

          <Link
            to="/profile"
            className="pharmalink-sidebar-avatar"
          >
            {currentUser.initials}
          </Link>

          <Link
            to="/profile"
            className="pharmalink-sidebar-name"
          >
            {currentUser.name}
          </Link>

          <p className="pharmalink-sidebar-headline">
            {currentUser.headline}
          </p>

          <p className="pharmalink-sidebar-organization">
            {currentUser.organization}
          </p>

          <Link
            to="/profile"
            className="pharmalink-sidebar-profile-link"
          >
            View profile
            <ChevronRight size={14} />
          </Link>

        </div>

      </section>

      {/* Profile statistics */}

      <section className="pharmalink-sidebar-stats">

        <Link to="/profile">
          <span>
            Profile views
          </span>

          <strong>
            {currentUser.connections}
          </strong>
        </Link>

        <Link to="/profile">
          <span>
            Post impressions
          </span>

          <strong>
            {currentUser.followers}
          </strong>
        </Link>

      </section>

      {/* Professional navigation */}

      <nav className="pharmalink-sidebar-navigation">

        <div className="pharmalink-sidebar-navigation-title">
          YOUR PHARMALINK
        </div>

        {navigationItems.map(
          ({
            label,
            icon: Icon,
            path,
          }) => {
            const active =
              location.pathname === path

            return (
              <Link
                key={path}
                to={path}
                className={`pharmalink-sidebar-nav-item ${
                  active ? 'active' : ''
                }`}
              >
                <Icon size={17} />

                <span>
                  {label}
                </span>
              </Link>
            )
          },
        )}

      </nav>

    </aside>
  )
}

export default Sidebar