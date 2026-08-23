import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Home,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Network,
  Search,
  Settings,
  ArrowRight,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import './Feed.css'
import PostComposer from '../../components/feed/PostComposer'
import Header from '../../components/navigation/Header'
import Sidebar from '../../components/navigation/Sidebar'

function Feed() {
  return (
    <div className="feed-page">
        
      <Header />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="feed-main">
        <div className="feed-layout">

          {/* =================================================
              LEFT COLUMN
          ================================================== */}
          
      <aside className="feed-left-column">
        <Sidebar />
      </aside>
         

          {/* =================================================
              CENTER COLUMN
          ================================================== */}

          <section className="feed-center-column">

            {/* Welcome */}

            <div className="feed-welcome">
              <div>
                <span>
                  YOUR NETWORK
                </span>

                <h1>
                  Good to see you, Ayush.
                </h1>
              </div>

              <button
                type="button"
                className="feed-more-button"
                aria-label="More options"
              >
                <MoreHorizontal size={19} />
              </button>
            </div>

            {/* Post composer */}

            <PostComposer
                userInitials="AA"
                userName="Ayush Akolkar"
                onSubmit={(content, type) => {
                    console.log({
                        content,
                        type,
                    })
                }}
            />

            {/* Feed sort */}

            <div className="feed-sort">
              <span />
              <button type="button">
                Sort by <strong>Top</strong>
                <ChevronRight size={13} />
              </button>
            </div>

            {/* First temporary post */}

            <article className="feed-post">

              <div className="feed-post-header">

                <div className="feed-post-avatar">
                  AS
                </div>

                <div className="feed-post-author">
                  <strong>
                    Dr. Ananya Sharma
                  </strong>

                  <span>
                    Clinical Pharmacist · 2h
                  </span>
                </div>

                <button
                  type="button"
                  className="feed-post-more"
                  aria-label="Post options"
                >
                  <MoreHorizontal size={18} />
                </button>

              </div>

              <div className="feed-post-body">

                <p>
                  Excited to share our latest work on
                  improving medication safety in clinical
                  pharmacy practice.
                </p>

                <p>
                  Looking forward to connecting with
                  professionals interested in
                  pharmacovigilance and patient safety.
                </p>

              </div>

              <div className="feed-post-tags">
                <span>#Pharmacovigilance</span>
                <span>#ClinicalPharmacy</span>
                <span>#PatientSafety</span>
              </div>

              <div className="feed-post-stats">
                <span>
                  24 reactions
                </span>

                <span>
                  8 comments
                </span>
              </div>

              <div className="feed-post-actions">
                <button type="button">
                  Like
                </button>

                <button type="button">
                  Comment
                </button>

                <button type="button">
                  Share
                </button>

                <button type="button">
                  Save
                </button>
              </div>

            </article>

            {/* Second temporary post */}

            <article className="feed-post">

              <div className="feed-post-header">

                <div className="feed-post-avatar blue">
                  RM
                </div>

                <div className="feed-post-author">
                  <strong>
                    Rahul Mehta
                  </strong>

                  <span>
                    Pharmaceutical Researcher · 4h
                  </span>
                </div>

                <button
                  type="button"
                  className="feed-post-more"
                  aria-label="Post options"
                >
                  <MoreHorizontal size={18} />
                </button>

              </div>

              <div className="feed-post-body">

                <p>
                  Looking for collaborators interested in
                  drug discovery and computational
                  approaches to pharmaceutical research.
                </p>

              </div>

              <div className="feed-post-opportunity">

                <div className="feed-opportunity-icon">
                  <FlaskConical size={19} />
                </div>

                <div>
                  <strong>
                    Research collaboration
                  </strong>

                  <span>
                    Drug Discovery · Remote
                  </span>
                </div>

                <ChevronRight size={16} />

              </div>

              <div className="feed-post-stats">
                <span>
                  17 reactions
                </span>

                <span>
                  5 comments
                </span>
              </div>

              <div className="feed-post-actions">
                <button type="button">
                  Like
                </button>

                <button type="button">
                  Comment
                </button>

                <button type="button">
                  Share
                </button>

                <button type="button">
                  Save
                </button>
              </div>

            </article>

          </section>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}

          <aside className="feed-right-column">

            {/* Research spotlight */}

            <section className="feed-discover-card">

              <div className="feed-card-heading">
                <div>
                  <span>
                    RESEARCH SPOTLIGHT
                  </span>

                  <h2>
                    Discover what's happening.
                  </h2>
                </div>

                <FlaskConical size={17} />
              </div>

              <div className="feed-research-feature">
                <span>
                  DRUG DISCOVERY
                </span>

                <strong>
                  Emerging approaches in
                  pharmaceutical research
                </strong>

                <p>
                  Explore research, researchers and
                  conversations shaping pharmacy.
                </p>

                <Link to="/research">
                  Explore research
                  <ArrowRightIcon />
                </Link>
              </div>

            </section>

            {/* Career opportunities */}

            <section className="feed-discover-card">

              <div className="feed-card-heading">
                <div>
                  <span>
                    CAREER
                  </span>

                  <h2>
                    Opportunities for you.
                  </h2>
                </div>

                <BriefcaseBusiness size={17} />
              </div>

              <div className="feed-job-list">

                <Link
                  to="/jobs"
                  className="feed-job-item"
                >
                  <div>
                    <strong>
                      Clinical Pharmacist
                    </strong>

                    <span>
                      Mumbai · Hybrid
                    </span>
                  </div>

                  <ChevronRight size={15} />
                </Link>

                <Link
                  to="/jobs"
                  className="feed-job-item"
                >
                  <div>
                    <strong>
                      Research Associate
                    </strong>

                    <span>
                      Bengaluru · On-site
                    </span>
                  </div>

                  <ChevronRight size={15} />
                </Link>

                <Link
                  to="/jobs"
                  className="feed-job-item"
                >
                  <div>
                    <strong>
                      Pharmacy Intern
                    </strong>

                    <span>
                      Pune · Hybrid
                    </span>
                  </div>

                  <ChevronRight size={15} />
                </Link>

              </div>

              <Link
                to="/jobs"
                className="feed-card-footer-link"
              >
                See all opportunities
                <ArrowRightIcon />
              </Link>

            </section>

            {/* People */}

            <section className="feed-discover-card">

              <div className="feed-card-heading">
                <div>
                  <span>
                    NETWORK
                  </span>

                  <h2>
                    People you may know.
                  </h2>
                </div>

                <Users size={17} />
              </div>

              <div className="feed-people-list">

                <PersonSuggestion
                  initials="AS"
                  name="Ananya Sharma"
                  role="Clinical Pharmacist"
                />

                <PersonSuggestion
                  initials="RM"
                  name="Rahul Mehta"
                  role="Pharmaceutical Researcher"
                  blue
                />

                <PersonSuggestion
                  initials="NS"
                  name="Neha Singh"
                  role="Pharmacy Student"
                />

              </div>

              <Link
                to="/network"
                className="feed-card-footer-link"
              >
                Grow your network
                <ArrowRightIcon />
              </Link>

            </section>

            {/* Trending */}

            <section className="feed-trending">

              <span>
                TRENDING IN PHARMACY
              </span>

              <h2>
                What professionals are talking about.
              </h2>

              <div className="feed-trending-tags">
                <span>#Pharmacovigilance</span>
                <span>#ClinicalResearch</span>
                <span>#DrugDiscovery</span>
                <span>#PharmacyCareers</span>
                <span>#RegulatoryAffairs</span>
              </div>

            </section>

          </aside>

        </div>
      </main>

      {/* =====================================================
          MOBILE BOTTOM NAV
      ====================================================== */}

      <nav className="feed-bottom-nav">

        <Link
          to="/feed"
          className="active"
        >
          <Home size={19} />
          <span>Home</span>
        </Link>

        <Link to="/network">
          <Network size={19} />
          <span>Network</span>
        </Link>

        <Link to="/jobs">
          <BriefcaseBusiness size={19} />
          <span>Jobs</span>
        </Link>

        <Link to="/messages">
          <MessageCircle size={19} />
          <span>Messages</span>
        </Link>

        <Link to="/profile">
          <span className="bottom-avatar">
            AK
          </span>
          <span>Me</span>
        </Link>

      </nav>
    </div>
  )
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function PersonSuggestion({
  initials,
  name,
  role,
  blue = false,
}: {
  initials: string
  name: string
  role: string
  blue?: boolean
}) {
  return (
    <div className="feed-person">

      <div
        className={`feed-person-avatar ${
          blue ? 'blue' : ''
        }`}
      >
        {initials}
      </div>

      <div className="feed-person-info">
        <strong>
          {name}
        </strong>

        <span>
          {role}
        </span>
      </div>

      <button type="button">
        +
      </button>

    </div>
  )
}

function ArrowRightIcon() {
  return <ArrowRight size={13} />
}

export default Feed