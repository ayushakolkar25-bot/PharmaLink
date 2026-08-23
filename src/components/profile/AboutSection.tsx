import {
  MoreHorizontal,
  Pencil,
  UserRound,
} from 'lucide-react'
import { useState } from 'react'

import type { User } from '../../data/users'
import { useAuthStore } from '../../stores/authStore'

interface AboutSectionProps {
  user: User
  isOwnProfile?: boolean
}

function AboutSection({
  user,
  isOwnProfile = false,
}: AboutSectionProps) {
  const {
    updateProfile,
  } = useAuthStore()

  const [
    isEditing,
    setIsEditing,
  ] = useState(false)

  const [
    bio,
    setBio,
  ] = useState(user.bio)

  function handleSave() {
    updateProfile({
      bio: bio.trim(),
    })

    setIsEditing(false)
  }

  function handleCancel() {
    setBio(user.bio)
    setIsEditing(false)
  }

  return (
    <section className="profile-detail-card">

      <div className="profile-detail-header">

        <div>
          <span className="profile-detail-eyebrow">
            PROFESSIONAL PROFILE
          </span>

          <h2>
            About
          </h2>
        </div>

        {isOwnProfile && (
          <div className="profile-detail-actions">

            <button
              type="button"
              aria-label="Edit about"
              onClick={() =>
                setIsEditing(true)
              }
            >
              <Pencil size={15} />
            </button>

          </div>
        )}

        {!isOwnProfile && (
          <button
            type="button"
            className="profile-detail-more"
          >
            <MoreHorizontal size={17} />
          </button>
        )}

      </div>

      {isEditing ? (
        <div className="profile-about-editor">

          <label>
            <span>
              About
            </span>

            <textarea
              value={bio}
              onChange={(event) =>
                setBio(
                  event.target.value,
                )
              }
              rows={6}
              maxLength={1000}
              placeholder="Tell the pharmacy community about yourself..."
            />

            <small>
              {bio.length}/1000
            </small>
          </label>

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
              Save
            </button>

          </div>

        </div>
      ) : (
        <>
          <div className="profile-about-content">

            <div className="profile-detail-icon">
              <UserRound size={16} />
            </div>

            <p>
              {user.bio ||
                'Tell the pharmacy community about your professional journey, interests, experience and the work you care about.'}
            </p>

          </div>

          <button
            type="button"
            className="profile-show-more"
          >
            Show more
          </button>
        </>
      )}

    </section>
  )
}

export default AboutSection