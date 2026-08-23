import {
  ExternalLink,
  FlaskConical,
  MoreHorizontal,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react'

import type { User } from '../../data/users'

interface ResearchSectionProps {
  user: User
  isOwnProfile?: boolean
}

function ResearchSection({
  user,
  isOwnProfile = false,
}: ResearchSectionProps) {
  return (
    <section className="profile-detail-card">
      <div className="profile-detail-header">
        <div>
          <span className="profile-detail-eyebrow">
            PHARMACEUTICAL RESEARCH
          </span>

          <h2>Research</h2>
        </div>

        <div className="profile-detail-actions">
          {isOwnProfile && (
            <button
              type="button"
              aria-label="Add research"
            >
              <Plus size={17} />
            </button>
          )}

          <button
            type="button"
            aria-label={
              isOwnProfile
                ? 'Edit research'
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

      {user.research.length === 0 ? (
        <div className="profile-section-empty">
          <FlaskConical size={20} />

          <strong>
            No research added yet.
          </strong>

          <span>
            Add research projects, publications
            or academic work.
          </span>
        </div>
      ) : (
        <div className="profile-research-list">
          {user.research.map((research) => (
            <article
              key={research.id}
              className="profile-research-item"
            >
              <div className="profile-research-icon">
                <FlaskConical size={18} />
              </div>

              <div className="profile-research-content">
                <h3>
                  {research.title}
                </h3>

                <strong>
                  {research.organization}
                </strong>

                {research.role && (
                  <span>
                    {research.role}
                  </span>
                )}

                <span>
                  {research.startDate}
                  {' – '}
                  {research.current
                    ? 'Present'
                    : research.endDate}
                </span>

                {research.description && (
                  <p>
                    {research.description}
                  </p>
                )}

                {research.link && (
                  <a
                    href={research.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View research
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

              {isOwnProfile && (
                <div className="profile-item-actions">
                  <button
                    type="button"
                    aria-label={`Edit ${research.title}`}
                  >
                    <Pencil size={14} />
                  </button>

                  <button
                    type="button"
                    aria-label={`Delete ${research.title}`}
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
          Add research
        </button>
      )}
    </section>
  )
}

export default ResearchSection