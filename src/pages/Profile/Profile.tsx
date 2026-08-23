import {
  ArrowLeft,
  BriefcaseBusiness,
  GraduationCap,
  MoreHorizontal,
  Pencil,
  Search,
  Share2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import AboutSection from '../../components/profile/AboutSection'
import EducationSection from '../../components/profile/EducationSection'
import ExperienceSection from '../../components/profile/ExperienceSection'
import ProfileHeader from '../../components/profile/ProfileHeader'
import ResearchSection from '../../components/profile/ResearchSection'
import SkillsSection from '../../components/profile/SkillsSection'

import { users } from '../../data/users'
import { posts } from '../../data/posts'

import './Profile.css'

function Profile() {
  const currentUser =
    users.find((user) => user.id === 'user-001') ??
    users[0]

  const userPosts = posts.filter(
    (post) => post.authorId === currentUser.id,
  )

  const suggestedPeople = users
    .filter((user) => user.id !== currentUser.id)
    .slice(0, 5)

  return (
    <div className="linkedin-profile-page">

      {/* =====================================================
          GLOBAL PROFILE NAVIGATION
      ====================================================== */}

      <header className="profile-topbar">

        <div className="profile-topbar-inner">

          <Link
            to="/feed"
            className="profile-topbar-back"
            aria-label="Back"
          >
            <ArrowLeft size={18} />
          </Link>

          <div className="profile-topbar-title">
            <span>PROFILE</span>
            <strong>{currentUser.name}</strong>
          </div>

          <div className="profile-topbar-actions">

            <button type="button">
              <Share2 size={17} />
            </button>

            <button type="button">
              <MoreHorizontal size={18} />
            </button>

          </div>

        </div>

      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="linkedin-profile-main">

        <div className="linkedin-profile-grid">

          {/* =================================================
              LEFT / MAIN COLUMN
          ================================================= */}

          <div className="linkedin-profile-main-column">

            {/* PROFILE HEADER */}

            <ProfileHeader
              user={currentUser}
              isOwnProfile
            />

            {/* PROFESSIONAL STATUS */}

            <section className="linkedin-profile-card profile-open-card">

              <div className="profile-open-content">

                <span>
                  PROFESSIONAL STATUS
                </span>

                <strong>
                  Open to professional opportunities
                </strong>

                <p>
                  Let pharmacy organizations and
                  professionals know what you're
                  interested in.
                </p>

              </div>

              <button type="button">
                <Pencil size={15} />
              </button>

            </section>

            {/* ANALYTICS */}

            <section className="linkedin-profile-card">

              <div className="linkedin-section-header">

                <div>
                  <span>YOUR PROFILE</span>

                  <h2>
                    Profile analytics
                  </h2>
                </div>

                <Link to="/analytics">
                  Show all →
                </Link>

              </div>

              <div className="profile-analytics-row">

                <div className="profile-analytics-item">
                  <strong>59</strong>
                  <b>Profile views</b>
                  <small>Last 90 days</small>
                </div>

                <div className="profile-analytics-item">
                  <strong>128</strong>
                  <b>Post impressions</b>
                  <small>Last 7 days</small>
                </div>

                <div className="profile-analytics-item">
                  <strong>20</strong>
                  <b>Search appearances</b>
                  <small>Last 7 days</small>
                </div>

              </div>

            </section>

            {/* ABOUT */}

            <AboutSection
              user={currentUser}
              isOwnProfile
            />

            {/* SERVICES */}

            <section className="linkedin-profile-card">

              <div className="linkedin-section-header">

                <div>
                  <span>
                    PROFESSIONAL EXPERTISE
                  </span>

                  <h2>
                    Services
                  </h2>
                </div>

                <button type="button">
                  <Pencil size={15} />
                </button>

              </div>

              <p className="profile-section-description">
                Professional services and areas of
                expertise you can offer through the
                PharmaLink network.
              </p>

              <div className="profile-service-tags">

                {currentUser.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </section>

            {/* ACTIVITY */}

            <section className="linkedin-profile-card profile-activity">

              <div className="linkedin-section-header">

                <div>
                  <span>
                    PROFESSIONAL ACTIVITY
                  </span>

                  <h2>
                    Activity
                  </h2>

                  <small>
                    {currentUser.followers} followers
                  </small>
                </div>

                <Link to="/feed">
                  See all →
                </Link>

              </div>

              <div className="profile-activity-tabs">

                <button className="active">
                  Posts
                </button>

                <button>
                  Comments
                </button>

                <button>
                  Research
                </button>

                <button>
                  Documents
                </button>

              </div>

              {userPosts.length > 0 ? (

                <div className="profile-post-list">

                  {userPosts.slice(0, 3).map((post) => (

                    <article
                      key={post.id}
                      className="profile-post-card"
                    >

                      <div className="profile-post-header">

                        <div className="profile-post-avatar">
                          {currentUser.initials}
                        </div>

                        <div>
                          <strong>
                            {currentUser.name}
                          </strong>

                          <span>
                            {currentUser.headline}
                          </span>

                          <small>
                           
                          </small>
                        </div>

                        <MoreHorizontal
                          size={16}
                        />

                      </div>

                      <p>
                        {post.content}
                      </p>

                      <div className="profile-post-actions">

                        <button type="button">
                          Like
                        </button>

                        <button type="button">
                          Comment
                        </button>

                        <button type="button">
                          Share
                        </button>

                      </div>

                    </article>

                  ))}

                </div>

              ) : (

                <div className="profile-activity-empty">

                  <strong>
                    No posts yet
                  </strong>

                  <span>
                    Share your first professional
                    update with the PharmaLink
                    community.
                  </span>

                  <Link to="/feed">
                    Create a post
                  </Link>

                </div>

              )}

            </section>

            {/* EXPERIENCE */}

            <ExperienceSection
              user={currentUser}
              isOwnProfile
            />

            {/* EDUCATION */}

            <EducationSection
              user={currentUser}
              isOwnProfile
            />

            {/* RESEARCH */}

            <ResearchSection
              user={currentUser}
              isOwnProfile
            />

            {/* SKILLS */}

            <SkillsSection
              user={currentUser}
              isOwnProfile
            />

          </div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside className="linkedin-profile-sidebar">

            {/* LANGUAGE */}

            <section className="linkedin-sidebar-card">

              <div className="sidebar-heading">
                <strong>
                  Profile language
                </strong>

                <Pencil size={14} />
              </div>

              <p>
                English
              </p>

            </section>

            {/* URL */}

            <section className="linkedin-sidebar-card">

              <div className="sidebar-heading">
                <strong>
                  Public profile & URL
                </strong>

                <Pencil size={14} />
              </div>

              <p className="profile-public-url">
                pharmalink.in/
                {currentUser.name
                  .toLowerCase()
                  .replaceAll(' ', '-')}
              </p>

            </section>

            {/* PEOPLE YOU MAY KNOW */}

            <section className="linkedin-sidebar-card">

              <div className="sidebar-title">

                <span>
                  DISCOVER
                </span>

                <h2>
                  People you may know
                </h2>

                <p>
                  From your pharmacy network
                </p>

              </div>

              <div className="sidebar-people">

                {suggestedPeople.map((person) => (

                  <div
                    key={person.id}
                    className="sidebar-person"
                  >

                    <div className="sidebar-person-avatar">
                      {person.initials}
                    </div>

                    <div className="sidebar-person-info">

                      <strong>
                        {person.name}
                      </strong>

                      <span>
                        {person.headline}
                      </span>

                      <small>
                        {person.organization}
                      </small>

                      <button type="button">
                        Connect
                      </button>

                    </div>

                  </div>

                ))}

              </div>

              <Link
                to="/network"
                className="sidebar-show-all"
              >
                Show all →
              </Link>

            </section>

            {/* COMMUNITIES */}

            <section className="linkedin-sidebar-card">

              <div className="sidebar-title">

                <span>
                  PHARMACY NETWORK
                </span>

                <h2>
                  Communities
                </h2>

              </div>

              <p className="sidebar-description">
                Discover pharmacy communities,
                research groups, career discussions
                and professional circles.
              </p>

              <Link
                to="/communities"
                className="sidebar-show-all"
              >
                Explore communities →
              </Link>

            </section>

          </aside>

        </div>

      </main>

    </div>
  )
}

export default Profile