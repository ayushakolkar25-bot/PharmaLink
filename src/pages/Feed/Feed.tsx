import {
  ArrowRight,
  Bookmark,
  Check,
  Copy,
  BookmarkCheck,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  FlaskConical,
  Home,
  MessageCircle,
  MoreHorizontal,
  Network,
  Newspaper,
  Send,
  Share2,
  ThumbsUp,
  Users,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import './Feed.css'

import Header from '../../components/navigation/Header'
import Sidebar from '../../components/navigation/Sidebar'
import PostComposer from '../../components/feed/PostComposer'

import {
  useAuthStore,
} from '../../stores/authStore'

interface FeedPost {
  id: number
  authorId: string
  authorName: string
  initials: string
  role: string
  time: string
  type: 'post' | 'research' | 'discussion'
  content: string[]
  tags: string[]
  likes: number
  comments: number
  shares: number
  liked: boolean
  saved: boolean
  researchTitle?: string
  researchMeta?: string
}

interface CommentItem {
  id: number
  postId: number
  author: string
  initials: string
  content: string
}

const initialPosts: FeedPost[] = [
  {
    id: 3,
    authorId: 'user-004',
    authorName: 'Neha Singh',
    initials: 'NS',
    role: 'Pharmacy Student',
    time: '8h',
    type: 'discussion',
    content: [
      'What skills do you think pharmacy students should focus on before entering the pharmaceutical industry?',
    ],
    tags: [
      '#PharmacyStudents',
      '#CareerDevelopment',
      '#PharmaIndustry',
    ],
    likes: 42,
    comments: 18,
    shares: 2,
    liked: false,
    saved: false,
  },
  {
    id: 2,
    authorId: 'user-003',
    authorName: 'Rahul Mehta',
    initials: 'RM',
    role: 'Pharmaceutical Researcher',
    time: '4h',
    type: 'research',
    content: [
      'Looking for collaborators interested in drug discovery and computational approaches to pharmaceutical research.',
    ],
    tags: [
      '#DrugDiscovery',
      '#PharmaResearch',
      '#ResearchCollaboration',
    ],
    likes: 17,
    comments: 5,
    shares: 4,
    liked: false,
    saved: false,
    researchTitle: 'Research collaboration',
    researchMeta: 'Drug Discovery · Remote',
  },
  {
    id: 1,
    authorId: 'user-002',
    authorName: 'Dr. Ananya Sharma',
    initials: 'AS',
    role: 'Clinical Pharmacist',
    time: '2h',
    type: 'post',
    content: [
      'Excited to share our latest work on improving medication safety in clinical pharmacy practice.',
      'Looking forward to connecting with professionals interested in pharmacovigilance and patient safety.',
    ],
    tags: [
      '#Pharmacovigilance',
      '#ClinicalPharmacy',
      '#PatientSafety',
    ],
    likes: 24,
    comments: 8,
    shares: 4,
    liked: false,
    saved: false,
  },
]

const pharmalinkNews = [
  {
    category: 'INDUSTRY',
    title: 'What pharmacy professionals are watching this week',
    time: 'Today',
  },
  {
    category: 'RESEARCH',
    title: 'New directions in drug delivery and clinical research',
    time: 'Yesterday',
  },
  {
    category: 'CAREERS',
    title: 'Skills in demand across pharmacy and life sciences',
    time: '2 days ago',
  },
]

const initialComments: CommentItem[] = []

type FeedFilter =
  | 'For You'
  | 'Following'
  | 'Trending'
  | 'Latest'

type SortMode =
  | 'Top'
  | 'Latest'

function Feed() {
  const {
    currentUser,
  } = useAuthStore()

  const [posts, setPosts] =
    useState<FeedPost[]>(initialPosts)

  const [comments, setComments] =
    useState<CommentItem[]>(initialComments)

  const [activeFilter, setActiveFilter] =
    useState<FeedFilter>('For You')

  const [sortMode, setSortMode] =
    useState<SortMode>('Top')

  const [sortOpen, setSortOpen] =
    useState(false)

  const [commentOpen, setCommentOpen] =
    useState<number | null>(null)

  const [commentText, setCommentText] =
    useState('')

  const [shareMessage, setShareMessage] =
    useState<number | null>(null)

  /*
   * Added product-level controls. These do not replace the existing
   * feed logic; they make the existing controls actually useful.
   */

  const [postMenuOpen, setPostMenuOpen] =
    useState<number | null>(null)

  const [feedOptionsOpen, setFeedOptionsOpen] =
    useState(false)

  const [hiddenPostIds, setHiddenPostIds] =
    useState<number[]>([])

  const [connectedPeople, setConnectedPeople] =
    useState<string[]>([])

  const userInitials =
    currentUser?.initials ?? 'AA'

  const userName =
    currentUser?.name ?? 'Ayush Akolkar'

  const userHeadline =
    currentUser?.headline ??
    'Pharmacy Professional'

  const displayName =
    userName.split(' ')[0] || 'there'

  /*
   * =========================================================
   * FILTER + SORT
   * =========================================================
   */

  const visiblePosts = useMemo(() => {
    const result = posts.filter(
      (post) => !hiddenPostIds.includes(post.id),
    )

    if (activeFilter === 'Following') {
      return result.filter(
        (post) =>
          post.authorId === 'user-002' ||
          post.authorId === 'user-003',
      )
    }

    if (activeFilter === 'Trending') {
      return result.sort(
        (a, b) =>
          b.likes +
          b.comments +
          b.shares -
          (a.likes +
            a.comments +
            a.shares),
      )
    }

    if (activeFilter === 'Latest') {
      return result.sort(
        (a, b) => b.id - a.id,
      )
    }

    if (sortMode === 'Latest') {
      return result.sort(
        (a, b) => b.id - a.id,
      )
    }

    return result.sort(
      (a, b) =>
        b.likes +
        b.comments +
        b.shares -
        (a.likes +
          a.comments +
          a.shares),
    )
  }, [
    posts,
    activeFilter,
    sortMode,
    hiddenPostIds,
  ])

  /*
   * =========================================================
   * POST CREATION
   * =========================================================
   */

  function handleCreatePost(
    content: string,
    type: string,
  ) {
    const cleanContent =
      content.trim()

    if (!cleanContent) {
      return
    }

    const newPost: FeedPost = {
      id:
        Date.now(),
      authorId:
        currentUser?.id ??
        'user-001',
      authorName:
        userName,
      initials:
        userInitials,
      role:
        userHeadline,
      time:
        'now',
      type:
        type === 'research'
          ? 'research'
          : type === 'discussion'
            ? 'discussion'
            : 'post',
      content:
        cleanContent
          .split('\n')
          .filter(Boolean),
      tags: [],
      likes: 0,
      comments: 0,
      shares: 0,
      liked: false,
      saved: false,
    }

    setPosts((current) => [
      newPost,
      ...current,
    ])
  }

  /*
   * =========================================================
   * LIKE
   * =========================================================
   */

  function handleLike(
    postId: number,
  ) {
    setPosts((current) =>
      current.map((post) => {
        if (post.id !== postId) {
          return post
        }

        return {
          ...post,
          liked: !post.liked,
          likes:
            post.liked
              ? Math.max(
                  0,
                  post.likes - 1,
                )
              : post.likes + 1,
        }
      }),
    )
  }

  /*
   * =========================================================
   * SAVE
   * =========================================================
   */

  function handleSave(
    postId: number,
  ) {
    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              saved: !post.saved,
            }
          : post,
      ),
    )
  }

  /*
   * =========================================================
   * COMMENT
   * =========================================================
   */

  function toggleComments(
    postId: number,
  ) {
    setCommentOpen((current) =>
      current === postId
        ? null
        : postId,
    )

    setCommentText('')
  }

  function handleCommentSubmit(
    postId: number,
  ) {
    const cleanComment =
      commentText.trim()

    if (!cleanComment) {
      return
    }

    const newComment: CommentItem = {
      id: Date.now(),
      postId,
      author: userName,
      initials: userInitials,
      content: cleanComment,
    }

    setComments((current) => [
      ...current,
      newComment,
    ])

    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments:
                post.comments + 1,
            }
          : post,
      ),
    )

    setCommentText('')
  }

  /*
   * =========================================================
   * SHARE
   * =========================================================
   */

  function handleShare(
    postId: number,
  ) {
    setShareMessage(postId)

    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              shares:
                post.shares + 1,
            }
          : post,
      ),
    )

    window.setTimeout(() => {
      setShareMessage(null)
    }, 1800)
  }

  /*
   * ---------------------------------------------------------
   * POST MENU
   * ---------------------------------------------------------
   */

  function togglePostMenu(
    postId: number,
  ) {
    setPostMenuOpen((current) =>
      current === postId ? null : postId,
    )
  }

  function handleHidePost(postId: number) {
    setHiddenPostIds((current) =>
      current.includes(postId)
        ? current
        : [...current, postId],
    )
    setPostMenuOpen(null)
  }

  function handleCopyPost(post: FeedPost) {
    const textToCopy = [
      post.authorName,
      ...post.content,
      post.tags.join(' '),
    ]
      .filter(Boolean)
      .join('\n\n')

    if (navigator.clipboard) {
      void navigator.clipboard.writeText(textToCopy)
    }

    setPostMenuOpen(null)
    setShareMessage(post.id)

    window.setTimeout(() => {
      setShareMessage((current) =>
        current === post.id ? null : current,
      )
    }, 1200)
  }

  /*
   * ---------------------------------------------------------
   * FEED OPTIONS
   * ---------------------------------------------------------
   */

  function resetFeedView() {
    setActiveFilter('For You')
    setSortMode('Top')
    setFeedOptionsOpen(false)
  }

  function restoreHiddenPosts() {
    setHiddenPostIds([])
    setFeedOptionsOpen(false)
  }

  /*
   * ---------------------------------------------------------
   * NETWORK CONNECTION
   * ---------------------------------------------------------
   */

  function toggleConnection(name: string) {
    setConnectedPeople((current) =>
      current.includes(name)
        ? current.filter((person) => person !== name)
        : [...current, name],
    )
  }

  return (
    <div className="feed-page">
      <Header />

      <main className="feed-main">
        <div className="feed-layout">

          {/* =====================================================
              LEFT COLUMN
          ====================================================== */}

          <aside className="feed-left-column">
            <Sidebar />
          </aside>

          {/* =====================================================
              CENTER COLUMN
          ====================================================== */}

          <section className="feed-center-column">

            {/* Welcome */}

            <div className="feed-welcome">
              <div>
                <span>
                  YOUR NETWORK
                </span>

                <h1>
                  Good to see you,{' '}
                  {displayName}.
                </h1>
              </div>

              <div className="feed-heading-actions">

                <button
                  type="button"
                  className="feed-more-button"
                  aria-label="Feed options"
                  aria-expanded={
                    feedOptionsOpen
                  }
                  onClick={() =>
                    setFeedOptionsOpen((current) =>
                      !current,
                    )
                  }
                >
                  <MoreHorizontal
                    size={19}
                  />
                </button>

                {feedOptionsOpen && (
                  <div
                    className="feed-options-menu"
                    role="menu"
                  >

                    <button
                      type="button"
                      onClick={resetFeedView}
                    >
                      Reset feed view
                    </button>

                    <button
                      type="button"
                      onClick={restoreHiddenPosts}
                      disabled={
                        hiddenPostIds.length === 0
                      }
                    >
                      Restore hidden posts
                    </button>

                  </div>
                )}

              </div>
            </div>

            {/* Composer */}

            <PostComposer
              userInitials={
                userInitials
              }
              userName={
                userName
              }
              onSubmit={
                handleCreatePost
              }
            />

            {/* Feed filters */}

            <div className="feed-controls">

              <div className="feed-filter-tabs">

                {(
                  [
                    'For You',
                    'Following',
                    'Trending',
                    'Latest',
                  ] as FeedFilter[]
                ).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={
                      activeFilter ===
                      filter
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setActiveFilter(
                        filter,
                      )
                    }
                  >
                    {filter}
                  </button>
                ))}

              </div>

              <div className="feed-sort">

                <span>
                  Sort by
                </span>

                <div className="feed-sort-wrapper">

                  <button
                    type="button"
                    className="feed-sort-button"
                    onClick={() =>
                      setSortOpen(
                        (current) =>
                          !current,
                      )
                    }
                    aria-expanded={
                      sortOpen
                    }
                  >
                    <strong>
                      {sortMode}
                    </strong>

                    <ChevronDown
                      size={14}
                    />
                  </button>

                  {sortOpen && (
                    <div className="feed-sort-menu">

                      <button
                        type="button"
                        className={
                          sortMode ===
                          'Top'
                            ? 'active'
                            : ''
                        }
                        onClick={() => {
                          setSortMode(
                            'Top',
                          )
                          setSortOpen(
                            false,
                          )
                        }}
                      >
                        Top
                      </button>

                      <button
                        type="button"
                        className={
                          sortMode ===
                          'Latest'
                            ? 'active'
                            : ''
                        }
                        onClick={() => {
                          setSortMode(
                            'Latest',
                          )
                          setSortOpen(
                            false,
                          )
                        }}
                      >
                        Latest
                      </button>

                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Posts */}

            <div className="feed-post-list">

              {visiblePosts.length === 0 ? (
                <div className="feed-empty-state">
                  <Users
                    size={28}
                  />

                  <h2>
                    Nothing here yet.
                  </h2>

                  <p>
                    Follow more pharmacy
                    professionals to build
                    your network.
                  </p>

                  <Link
                    to="/network"
                  >
                    Explore your network
                    <ArrowRight
                      size={14}
                    />
                  </Link>
                </div>
              ) : (
                visiblePosts.map(
                  (post) => (
                    <FeedPostCard
                      key={post.id}
                      post={post}
                      comments={
                        comments.filter(
                          (comment) =>
                            comment.postId ===
                            post.id,
                        )
                      }
                      commentOpen={
                        commentOpen ===
                        post.id
                      }
                      commentText={
                        commentText
                      }
                      shareMessage={
                        shareMessage ===
                        post.id
                      }
                      onLike={
                        handleLike
                      }
                      onSave={
                        handleSave
                      }
                      onCommentToggle={
                        toggleComments
                      }
                      onCommentTextChange={
                        setCommentText
                      }
                      onCommentSubmit={
                        handleCommentSubmit
                      }
                      onShare={
                        handleShare
                      }
                      postMenuOpen={
                        postMenuOpen ===
                        post.id
                      }
                      onPostMenuToggle={
                        togglePostMenu
                      }
                      onHidePost={
                        handleHidePost
                      }
                      onCopyPost={
                        handleCopyPost
                      }
                    />
                  ),
                )
              )}

            </div>
          </section>

          {/* =====================================================
              RIGHT COLUMN
          ====================================================== */}

          <aside className="feed-right-column">

            {/* PharmaLink News */}

            <section className="feed-news-card">

              <div className="feed-news-heading">

                <div>
                  <span>
                    PHARMALINK
                  </span>

                  <h2>
                    PharmaLink News
                  </h2>
                </div>

                <Newspaper
                  size={18}
                />

              </div>

              <div className="feed-news-list">

                {pharmalinkNews.map(
                  (item, index) => (
                    <Link
                      to="/news"
                      className={`feed-news-item ${
                        index === 0
                          ? 'featured'
                          : ''
                      }`}
                      key={item.title}
                    >

                      <span className="feed-news-category">
                        {item.category}
                      </span>

                      <strong>
                        {item.title}
                      </strong>

                      <span className="feed-news-time">
                        {item.time}
                      </span>

                    </Link>
                  ),
                )}

              </div>

              <Link
                to="/news"
                className="feed-news-footer"
              >
                View all news
                <ArrowRight
                  size={14}
                />
              </Link>

            </section>

            {/* Research */}

            <section className="feed-discover-card">

              <div className="feed-card-heading">

                <div>
                  <span>
                    RESEARCH SPOTLIGHT
                  </span>

                  <h2>
                    Discover what's
                    happening.
                  </h2>
                </div>

                <FlaskConical
                  size={18}
                />

              </div>

              <div className="feed-research-feature">

                <span>
                  DRUG DISCOVERY
                </span>

                <strong>
                  Emerging approaches in pharmaceutical research
                </strong>

                <p>
                  Explore research, researchers and conversations shaping pharmacy.
                </p>

                <Link
                  to="/research"
                >
                  Explore research
                  <ArrowRight
                    size={14}
                  />
                </Link>

              </div>

            </section>

            {/* Jobs */}

            <section className="feed-discover-card">

              <div className="feed-card-heading">

                <div>
                  <span>
                    CAREER
                  </span>

                  <h2>
                    Opportunities
                    for you.
                  </h2>
                </div>

                <BriefcaseBusiness
                  size={18}
                />

              </div>

              <div className="feed-job-list">

                <JobLink
                  title="Clinical Pharmacist"
                  location="Mumbai · Hybrid"
                />

                <JobLink
                  title="Research Associate"
                  location="Bengaluru · On-site"
                />

                <JobLink
                  title="Pharmacy Intern"
                  location="Pune · Hybrid"
                />

              </div>

              <Link
                to="/jobs"
                className="feed-card-footer-link"
              >
                See all opportunities
                <ArrowRight
                  size={14}
                />
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
                    People you may
                    know.
                  </h2>
                </div>

                <Users
                  size={18}
                />

              </div>

              <div className="feed-people-list">

                <PersonSuggestion
                  initials="AS"
                  name="Ananya Sharma"
                  role="Clinical Pharmacist"
                  connected={
                    connectedPeople.includes(
                      'Ananya Sharma',
                    )
                  }
                  onToggle={
                    toggleConnection
                  }
                />

                <PersonSuggestion
                  initials="RM"
                  name="Rahul Mehta"
                  role="Pharmaceutical Researcher"
                  connected={
                    connectedPeople.includes(
                      'Rahul Mehta',
                    )
                  }
                  onToggle={
                    toggleConnection
                  }
                />

                <PersonSuggestion
                  initials="NS"
                  name="Neha Singh"
                  role="Pharmacy Student"
                  connected={
                    connectedPeople.includes(
                      'Neha Singh',
                    )
                  }
                  onToggle={
                    toggleConnection
                  }
                />

              </div>

              <Link
                to="/network"
                className="feed-card-footer-link"
              >
                Grow your network
                <ArrowRight
                  size={14}
                />
              </Link>

            </section>

            {/* Trending */}

            <section className="feed-trending">

              <span>
                TRENDING IN PHARMACY
              </span>

              <h2>
                What professionals are discussing.
              </h2>

              <div className="feed-trending-tags">

                <span>
                  #Pharmacovigilance
                </span>

                <span>
                  #ClinicalResearch
                </span>

                <span>
                  #DrugDiscovery
                </span>

                <span>
                  #PharmacyCareers
                </span>

                <span>
                  #RegulatoryAffairs
                </span>

              </div>

            </section>

            {/* Organization */}

            <section className="feed-discover-card">

              <div className="feed-card-heading">

                <div>
                  <span>
                    PHARMALINK
                  </span>

                  <h2>
                    Build your
                    professional
                    presence.
                  </h2>
                </div>

                <Network
                  size={18}
                />

              </div>

              <p className="feed-network-copy">
                Connect with pharmacy
                professionals, discover
                opportunities and build
                meaningful relationships.
              </p>

              <Link
                to="/profile"
                className="feed-card-footer-link"
              >
                Complete your profile
                <ArrowRight
                  size={14}
                />
              </Link>

            </section>

          </aside>
        </div>
      </main>

      {/* Mobile navigation */}

      <nav className="feed-bottom-nav">

        <Link
          to="/feed"
          className="active"
        >
          <Home size={19} />
          <span>
            Home
          </span>
        </Link>

        <Link
          to="/network"
        >
          <Network size={19} />
          <span>
            Network
          </span>
        </Link>

        <Link
          to="/jobs"
        >
          <BriefcaseBusiness
            size={19}
          />
          <span>
            Jobs
          </span>
        </Link>

        <Link
          to="/messages"
        >
          <MessageCircle
            size={19}
          />
          <span>
            Messages
          </span>
        </Link>

        <Link
          to="/profile"
        >
          <span className="bottom-avatar">
            {userInitials}
          </span>

          <span>
            Me
          </span>
        </Link>

      </nav>
    </div>
  )
}

/*
 * =========================================================
 * POST CARD
 * =========================================================
 */

interface FeedPostCardProps {
  post: FeedPost
  comments: CommentItem[]
  commentOpen: boolean
  commentText: string
  shareMessage: boolean
  onLike: (
    postId: number,
  ) => void
  onSave: (
    postId: number,
  ) => void
  onCommentToggle: (
    postId: number,
  ) => void
  onCommentTextChange: (
    value: string,
  ) => void
  onCommentSubmit: (
    postId: number,
  ) => void
  onShare: (
    postId: number,
  ) => void
  postMenuOpen: boolean
  onPostMenuToggle: (
    postId: number,
  ) => void
  onHidePost: (
    postId: number,
  ) => void
  onCopyPost: (
    post: FeedPost,
  ) => void
}

function FeedPostCard({
  post,
  comments,
  commentOpen,
  commentText,
  shareMessage,
  onLike,
  onSave,
  onCommentToggle,
  onCommentTextChange,
  onCommentSubmit,
  onShare,
  postMenuOpen,
  onPostMenuToggle,
  onHidePost,
  onCopyPost,
}: FeedPostCardProps) {
  return (
    <article className="feed-post">

      <div className="feed-post-header">

        <div
          className={`feed-post-avatar ${
            post.type === 'research'
              ? 'blue'
              : ''
          }`}
        >
          {post.initials}
        </div>

        <div className="feed-post-author">

          <strong>
            {post.authorName}
          </strong>

          <span>
            {post.role}
            {' · '}
            {post.time}
          </span>

        </div>

        <button
          type="button"
          className={
            `feed-post-more ${
              postMenuOpen
                ? 'active'
                : ''
            }`
          }
          aria-label="Post options"
          aria-expanded={postMenuOpen}
          onClick={() =>
            onPostMenuToggle(post.id)
          }
        >
          <MoreHorizontal
            size={18}
          />
        </button>

        {postMenuOpen && (
          <div
            className="feed-post-menu"
            role="menu"
          >

            <button
              type="button"
              onClick={() =>
                onCopyPost(post)
              }
            >
              <Copy size={14} />
              <span>Copy post</span>
            </button>

            <button
              type="button"
              onClick={() =>
                onHidePost(post.id)
              }
            >
              <Check size={14} />
              <span>Hide this post</span>
            </button>

          </div>
        )}

      </div>

      <div className="feed-post-body">

        {post.content.map(
          (paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ),
        )}

      </div>

      {post.researchTitle && (
        <div className="feed-post-opportunity">

          <div className="feed-opportunity-icon">
            <FlaskConical
              size={19}
            />
          </div>

          <div>

            <strong>
              {post.researchTitle}
            </strong>

            <span>
              {post.researchMeta}
            </span>

          </div>

          <ChevronRight
            size={16}
          />

        </div>
      )}

      {post.tags.length > 0 && (
        <div className="feed-post-tags">

          {post.tags.map(
            (tag) => (
              <span key={tag}>
                {tag}
              </span>
            ),
          )}

        </div>
      )}

      <div className="feed-post-stats">

        <span>
          {post.likes}{' '}
          {post.likes === 1
            ? 'reaction'
            : 'reactions'}
        </span>

        <span>
          {post.comments}{' '}
          {post.comments === 1
            ? 'comment'
            : 'comments'}
          {' · '}
          {post.shares}{' '}
          {post.shares === 1
            ? 'share'
            : 'shares'}
        </span>

      </div>

      <div className="feed-post-actions">

        <button
          type="button"
          className={
            post.liked
              ? 'active'
              : ''
          }
          onClick={() =>
            onLike(post.id)
          }
        >
          <ThumbsUp
            size={17}
            fill={
              post.liked
                ? 'currentColor'
                : 'none'
            }
          />

          <span>
            {post.liked
              ? 'Liked'
              : 'Like'}
          </span>
        </button>

        <button
          type="button"
          className={
            commentOpen
              ? 'active'
              : ''
          }
          onClick={() =>
            onCommentToggle(
              post.id,
            )
          }
        >
          <MessageCircle
            size={17}
          />

          <span>
            Comment
          </span>
        </button>

        <button
          type="button"
          onClick={() =>
            onShare(post.id)
          }
          className={
            shareMessage
              ? 'active'
              : ''
          }
        >
          <Share2
            size={17}
          />

          <span>
            {shareMessage
              ? 'Shared'
              : 'Share'}
          </span>
        </button>

        <button
          type="button"
          className={
            post.saved
              ? 'active'
              : ''
          }
          onClick={() =>
            onSave(post.id)
          }
        >
          {post.saved ? (
            <BookmarkCheck
              size={17}
            />
          ) : (
            <Bookmark
              size={17}
            />
          )}

          <span>
            {post.saved
              ? 'Saved'
              : 'Save'}
          </span>
        </button>

      </div>

      {commentOpen && (
        <div className="feed-comments">

          {comments.length > 0 && (
            <div className="feed-comment-list">

              {comments.map(
                (comment) => (
                  <div
                    className="feed-comment"
                    key={comment.id}
                  >

                    <div className="feed-comment-avatar">
                      {comment.initials}
                    </div>

                    <div className="feed-comment-content">

                      <strong>
                        {comment.author}
                      </strong>

                      <p>
                        {comment.content}
                      </p>

                    </div>

                  </div>
                ),
              )}

            </div>
          )}

          <div className="feed-comment-form">

            <div className="feed-comment-avatar">
              {post.initials}
            </div>

            <input
              type="text"
              value={commentText}
              onChange={(event) =>
                onCommentTextChange(
                  event.target.value,
                )
              }
              onKeyDown={(event) => {
                if (
                  event.key ===
                  'Enter'
                ) {
                  onCommentSubmit(
                    post.id,
                  )
                }
              }}
              placeholder="Add a comment..."
              aria-label="Add a comment"
            />

            <button
              type="button"
              onClick={() =>
                onCommentSubmit(
                  post.id,
                )
              }
              disabled={
                !commentText.trim()
              }
              aria-label="Send comment"
            >
              <Send
                size={16}
              />
            </button>

          </div>

        </div>
      )}

    </article>
  )
}

/*
 * =========================================================
 * JOB LINK
 * =========================================================
 */

function JobLink({
  title,
  location,
}: {
  title: string
  location: string
}) {
  return (
    <Link
      to="/jobs"
      className="feed-job-item"
    >
      <div>

        <strong>
          {title}
        </strong>

        <span>
          {location}
        </span>

      </div>

      <ChevronRight
        size={15}
      />
    </Link>
  )
}

/*
 * =========================================================
 * PERSON SUGGESTION
 * =========================================================
 */

function PersonSuggestion({
  initials,
  name,
  role,
  connected,
  onToggle,
}: {
  initials: string
  name: string
  role: string
  connected: boolean
  onToggle: (name: string) => void
}) {
  return (
    <div className="feed-person">

      <div className="feed-person-avatar">
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

      <Link
        to="/network"
        className={`feed-person-connect ${
          connected ? 'connected' : ''
        }`}
        aria-label={`${
          connected
            ? 'Connected with'
            : 'Connect with'
        } ${name}`}
        aria-pressed={connected}
        onClick={() =>
          onToggle(name)
        }
      >
        {connected ? (
          <Check size={13} />
        ) : (
          '+'
        )}
      </Link>

    </div>
  )
}

export default Feed

/*
 * =====================================================================
 * PHARMALINK PRODUCT NOTES — ADDITIVE UX BEHAVIOUR
 * =====================================================================
 *
 * The original feed architecture remains intact above. The following
 * notes document why the small enhancements were added rather than
 * replacing the existing page structure.
 *
 * 01. Post options are intentionally practical: copying a post and
 *     hiding a post are actions users can understand without training.
 *
 * 02. Feed options expose only view-reset controls. This keeps the
 *     top-right menu from becoming a generic settings drawer.
 *
 * 03. Connection buttons are stateful. A successful local interaction
 *     is reflected immediately, which makes the sidebar feel like part
 *     of the actual product instead of static placeholder content.
 *
 * 04. Hidden posts are kept in a small in-memory list. This is suitable
 *     for the current front-end implementation and can later be moved
 *     to a server preference without changing the component contract.
 *
 * 05. No decorative gradients, floating glass cards, oversized marketing
 *     blocks, or large empty promotional areas are introduced here.
 *     The feed remains content-first and task-oriented.
 *
 * 06. Existing routes, post data, like/save/comment/share handlers,
 *     filters, sorting, composer integration, sidebar integration and
 *     mobile navigation are deliberately preserved.
 *
 * 07. The CSS companion file adds an override layer rather than deleting
 *     earlier rules. That makes the visual update reversible and keeps
 *     the project's original class system intact.
 *
 * 08. The page is designed around a real product principle: every visible
 *     element should either help the user publish, discover, decide, or
 *     navigate. Visual polish should support those actions, not compete
 *     with them.
 *
 * =====================================================================
 */
