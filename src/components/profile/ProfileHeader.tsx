import {
  BriefcaseBusiness,
  Edit3,
  MapPin,
  MoreHorizontal,
} from 'lucide-react'
import { useState } from 'react'

import type { User } from '../../data/users'
import { useAuthStore } from '../../stores/authStore'

interface ProfileHeaderProps {
  user: User
  isOwnProfile?: boolean
}

function ProfileHeader({
  user,
  isOwnProfile = false,
}: ProfileHeaderProps) {
  const {
    updateProfile,
  } = useAuthStore()

  const [
    isEditing,
    setIsEditing,
  ] = useState(false)

  const [
    name,
    setName,
  ] = useState(user.name)

  const [
    headline,
    setHeadline,
  ] = useState(user.headline)

  const [
    organization,
    setOrganization,
  ] = useState(user.organization)

  const [
    location,
    setLocation,
  ] = useState(user.location)

  function handleSave() {
    const cleanName =
      name.trim()

    if (!cleanName) {
      return
    }

    const initials =
      cleanName
        .split(' ')
        .filter(Boolean)
        .map(
          (part) =>
            part[0],
        )
        .join('')
        .slice(0, 2)
        .toUpperCase()

    updateProfile({
      name: cleanName,
      initials,
      headline:
        headline.trim(),
      organization:
        organization.trim(),
      location:
        location.trim(),
    })

    setIsEditing(false)
  }

  function handleCancel() {
    setName(user.name)
    setHeadline(user.headline)
    setOrganization(
      user.organization,
    )
    setLocation(
      user.location,
    )

    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <section className="profile-header linkedin-profile-card">

        <div className="profile-header-cover" />

        <div className="profile-edit-panel">

          <div className="profile-edit-panel-header">
            <div>
              <span>
                PROFILE SETTINGS
              </span>

              <h2>
                Edit profile
              </h2>
            </div>
          </div>

          <div className="profile-edit-grid">

            <label>
              <span>
                Full name
              </span>

              <input
                value={name}
                onChange={(event) =>
                  setName(
                    event.target.value,
                  )
                }
              />
            </label>

            <label>
              <span>
                Headline
              </span>

              <input
                value={headline}
                onChange={(event) =>
                  setHeadline(
                    event.target.value,
                  )
                }
              />
            </label>

            <label>
              <span>
                Organization
              </span>

              <input
                value={organization}
                onChange={(event) =>
                  setOrganization(
                    event.target.value,
                  )
                }
              />
            </label>

            <label>
              <span>
                Location
              </span>

              <input
                value={location}
                onChange={(event) =>
                  setLocation(
                    event.target.value,
                  )
                }
              />
            </label>

          </div>

          <div className="profile-edit-actions">

            <button
              type="button"
              className="profile-edit-cancel"
              onClick={
                handleCancel
              }
            >
              Cancel
            </button>

            <button
              type="button"
              className="profile-edit-save"
              onClick={
                handleSave
              }
            >
              Save changes
            </button>

          </div>

        </div>

      </section>
    )
  }

  return (
    <section className="profile-header linkedin-profile-card">

      <div className="profile-header-cover" />

      <div className="profile-header-content">

        <div className="profile-header-avatar">
          {user.initials}
        </div>

        <div className="profile-header-main">

          <div className="profile-header-info">

            <div className="profile-name-row">

              <h1 className="profile-header-name">
                {user.name}
              </h1>

              {user.verified && (
                <span className="profile-verified">
                  ✓
                </span>
              )}

            </div>

            <p className="profile-header-headline">
              {user.headline}
            </p>

            <div className="profile-header-meta">

              {user.location && (
                <span>
                  <MapPin size={11} />
                  {user.location}
                </span>
              )}

              {user.organization && (
                <span>
                  <BriefcaseBusiness size={11} />
                  {user.organization}
                </span>
              )}

            </div>

          </div>

          {user.organization && (
            <div className="profile-header-organization">
              <strong>
                {user.organization}
              </strong>
            </div>
          )}

        </div>

        <div className="profile-header-actions">

          {isOwnProfile ? (
            <>
              <button
                type="button"
                className="profile-header-action primary"
                onClick={() =>
                  setIsEditing(true)
                }
              >
                <Edit3 size={13} />
                Edit profile
              </button>

              <button
                type="button"
                className="profile-header-action"
              >
                Add section
              </button>

              <button
                type="button"
                className="profile-header-action icon-only"
                aria-label="More"
              >
                <MoreHorizontal size={15} />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="profile-header-action primary"
              >
                Connect
              </button>

              <button
                type="button"
                className="profile-header-action"
              >
                Message
              </button>
            </>
          )}

        </div>

        <div className="profile-header-stats">

          <div>
            <strong>
              {user.connections}
            </strong>

            <span>
              Connections
            </span>
          </div>

          <div>
            <strong>
              {user.followers}
            </strong>

            <span>
              Followers
            </span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default ProfileHeader