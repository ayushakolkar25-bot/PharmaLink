import {
  BriefcaseBusiness,
  MoreHorizontal,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react'

import type { User } from '../../data/users'

interface ExperienceSectionProps {
  user: User
  isOwnProfile?: boolean
}

function ExperienceSection({
  user,
  isOwnProfile = false,
}: ExperienceSectionProps) {
  return (
    <section className="profile-detail-card">
      <div className="profile-detail-header">
        <div>
          <span className="profile-detail-eyebrow">
            CAREER
          </span>

          <h2>Experience</h2>
        </div>

        <div className="profile-detail-actions">
          {isOwnProfile && (
            <button
              type="button"
              aria-label="Add experience"
            >
              <Plus size={17} />
            </button>
          )}

          <button
            type="button"
            aria-label={
              isOwnProfile
                ? 'Edit experience'
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

      {user.experience.length === 0 ? (
        <div className="profile-section-empty">
          <BriefcaseBusiness size={20} />

          <strong>
            No experience added yet.
          </strong>

          <span>
            Add your professional experience,
            internships, projects or positions.
          </span>
        </div>
      ) : (
        <div className="profile-timeline">
          {user.experience.map(
            (experience, index) => (
              <article
                key={experience.id}
                className="profile-timeline-item"
              >
                <div className="profile-timeline-marker">
                  <BriefcaseBusiness size={16} />
                </div>

                <div className="profile-timeline-content">
                  <h3>
                    {experience.title}
                  </h3>

                  <strong>
                    {experience.organization}
                  </strong>

                  <span className="profile-timeline-duration">
                    {experience.startDate}
                    {' – '}
                    {experience.current
                      ? 'Present'
                      : experience.endDate}
                  </span>

                  {experience.location && (
                    <span className="profile-timeline-location">
                      {experience.location}
                    </span>
                  )}

                  {experience.description && (
                    <p>
                      {experience.description}
                    </p>
                  )}
                </div>

                {isOwnProfile && (
                  <div className="profile-item-actions">
                    <button
                      type="button"
                      aria-label={`Edit ${experience.title}`}
                    >
                      <Pencil size={14} />
                    </button>

                    <button
                      type="button"
                      aria-label={`Delete ${experience.title}`}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}

                {index <
                  user.experience.length - 1 && (
                  <div className="profile-timeline-line" />
                )}
              </article>
            ),
          )}
        </div>
      )}

      {isOwnProfile && (
        <button
          type="button"
          className="profile-add-entry"
        >
          <Plus size={14} />
          Add experience
        </button>
      )}
    </section>
  )
}

export default ExperienceSection