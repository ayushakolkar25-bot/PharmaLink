import {
  MoreHorizontal,
  Pencil,
  Plus,
  Sparkles,
  X,
} from 'lucide-react'

import type { User } from '../../data/users'

interface SkillsSectionProps {
  user: User
  isOwnProfile?: boolean
}

function SkillsSection({
  user,
  isOwnProfile = false,
}: SkillsSectionProps) {
  return (
    <section className="profile-detail-card">
      <div className="profile-detail-header">
        <div>
          <span className="profile-detail-eyebrow">
            PROFESSIONAL EXPERTISE
          </span>

          <h2>Skills</h2>
        </div>

        <div className="profile-detail-actions">
          {isOwnProfile && (
            <button
              type="button"
              aria-label="Add skill"
            >
              <Plus size={17} />
            </button>
          )}

          <button
            type="button"
            aria-label={
              isOwnProfile
                ? 'Edit skills'
                : 'More options'
            }
          >
            {isOwnProfile ? (
              <Pencil size={15} />
            ) : (
              <MoreHorizontal size={17} />
            )}
          </button>
        </div>
      </div>

      {user.skills.length === 0 ? (
        <div className="profile-section-empty">
          <Sparkles size={20} />

          <strong>
            No skills added yet.
          </strong>

          <span>
            Add your professional skills and
            areas of expertise.
          </span>
        </div>
      ) : (
        <div className="profile-skills-list">
          {user.skills.map((skill) => (
            <div
              key={skill}
              className="profile-skill-item"
            >
              <Sparkles size={12} />

              <span>
                {skill}
              </span>

              {isOwnProfile && (
                <button
                  type="button"
                  aria-label={`Remove ${skill}`}
                >
                  <X size={11} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {isOwnProfile && (
        <button
          type="button"
          className="profile-add-entry"
        >
          <Plus size={14} />
          Add skill
        </button>
      )}
    </section>
  )
}

export default SkillsSection