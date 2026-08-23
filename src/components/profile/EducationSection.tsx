import {
  GraduationCap,
  MoreHorizontal,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react'

import type { User } from '../../data/users'

interface EducationSectionProps {
  user: User
  isOwnProfile?: boolean
}

function EducationSection({
  user,
  isOwnProfile = false,
}: EducationSectionProps) {
  return (
    <section className="profile-detail-card">
      <div className="profile-detail-header">
        <div>
          <span className="profile-detail-eyebrow">
            ACADEMIC BACKGROUND
          </span>

          <h2>Education</h2>
        </div>

        <div className="profile-detail-actions">
          {isOwnProfile && (
            <button
              type="button"
              aria-label="Add education"
            >
              <Plus size={17} />
            </button>
          )}

          <button
            type="button"
            aria-label={
              isOwnProfile
                ? 'Edit education'
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

      {user.education.length === 0 ? (
        <div className="profile-section-empty">
          <GraduationCap size={20} />

          <strong>
            No education added yet.
          </strong>

          <span>
            Add your university, degree and
            academic background.
          </span>
        </div>
      ) : (
        <div className="profile-education-list">
          {user.education.map((education) => (
            <article
              key={education.id}
              className="profile-education-item"
            >
              <div className="profile-education-logo">
                <GraduationCap size={19} />
              </div>

              <div className="profile-education-content">
                <h3>
                  {education.institution}
                </h3>

                <strong>
                  {education.degree}
                  {education.field
                    ? ` · ${education.field}`
                    : ''}
                </strong>

                <span>
                  {education.startDate}
                  {' – '}
                  {education.current
                    ? 'Present'
                    : education.endDate}
                </span>

                {education.description && (
                  <p>
                    {education.description}
                  </p>
                )}
              </div>

              {isOwnProfile && (
                <div className="profile-item-actions">
                  <button
                    type="button"
                    aria-label={`Edit ${education.institution}`}
                  >
                    <Pencil size={14} />
                  </button>

                  <button
                    type="button"
                    aria-label={`Delete ${education.institution}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {isOwnProfile && (
        <button
          type="button"
          className="profile-add-entry"
        >
          <Plus size={14} />
          Add education
        </button>
      )}
    </section>
  )
}

export default EducationSection