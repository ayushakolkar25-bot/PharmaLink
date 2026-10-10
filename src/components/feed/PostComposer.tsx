import {
  Award,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  FileText,
  FlaskConical,
  Globe2,
  Image as ImageIcon,
  MessageCircle,
  Plus,
  Sparkles,
  Users,
  X,
  Smile,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import './PostComposer.css'


interface PostComposerProps {
  userInitials: string
  userName: string
  onSubmit: (content: string, type: string) => void
}

type ComposerType =
  | 'post'
  | 'research'
  | 'opportunity'
  | 'discussion'

type Audience =
  | 'Anyone'
  | 'Connections only'
  | 'Group'

type CommentPermission =
  | 'Anyone'
  | 'Connections only'
  | 'Off'

type Occasion =
  | 'Project launch'
  | 'Work anniversary'
  | 'New position'
  | 'New educational milestone'
  | 'New certification'

interface ComposerOption {
  type: ComposerType
  label: string
  icon: typeof FileText
}

const composerOptions: ComposerOption[] = [
  {
    type: 'post',
    label: 'Post',
    icon: FileText,
  },
  {
    type: 'research',
    label: 'Research',
    icon: FlaskConical,
  },
  {
    type: 'opportunity',
    label: 'Opportunity',
    icon: BriefcaseBusiness,
  },
  {
    type: 'discussion',
    label: 'Discussion',
    icon: MessageCircle,
  },
]

const emojiGroups = [
  {
    label: 'Frequently Used',
    emojis: ['👋', '👍', '😊'],
  },
  {
    label: 'People',
    emojis: [
      '😀',
      '😃',
      '😄',
      '😁',
      '😆',
      '😅',
      '🤣',
      '😂',
      '🙂',
      '🙃',
      '😉',
      '😊',
      '😇',
      '🥰',
      '😍',
      '🤩',
      '😘',
      '😎',
      '🤗',
      '🤔',
      '🤝',
      '👏',
      '🙌',
      '💪',
      '🙏',
      '🎉',
      '🔥',
      '💡',
      '❤️',
      '✨',
    ],
  },
]

const occasionOptions: {
  title: Occasion
  description: string
}[] = [
  {
    title: 'Project launch',
    description: 'Share a new project milestone.',
  },
  {
    title: 'Work anniversary',
    description: 'Celebrate your work anniversary.',
  },
  {
    title: 'New position',
    description: 'Share a job update.',
  },
  {
    title: 'New educational milestone',
    description: 'Share an educational milestone.',
  },
  {
    title: 'New certification',
    description: 'Celebrate a new certification.',
  },
]

function PostComposer({
  userInitials,
  userName,
  onSubmit,
}: PostComposerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const [content, setContent] = useState('')

  const [postType, setPostType] =
    useState<ComposerType>('post')

  const [audience, setAudience] =
    useState<Audience>('Anyone')

  const [commentsPermission, setCommentsPermission] =
    useState<CommentPermission>('Anyone')

  const [brandPartnership, setBrandPartnership] =
    useState(false)

  const [audienceOpen, setAudienceOpen] =
    useState(false)

  const [commentsOpen, setCommentsOpen] =
    useState(false)

  const [emojiOpen, setEmojiOpen] =
    useState(false)

  const [aiOpen, setAiOpen] =
    useState(false)

  const [occasionOpen, setOccasionOpen] =
    useState(false)

  const [occasion, setOccasion] =
    useState<Occasion | null>(null)

  const [attachments, setAttachments] =
    useState<File[]>([])

  const [documentAttached, setDocumentAttached] =
    useState(false)

  const [pollOpen, setPollOpen] =
    useState(false)

  const [pollQuestion, setPollQuestion] =
    useState('')

  const [pollOptions, setPollOptions] =
    useState(['', ''])

  const textareaRef =
    useRef<HTMLTextAreaElement | null>(null)

  const imageInputRef =
    useRef<HTMLInputElement | null>(null)

  const documentInputRef =
    useRef<HTMLInputElement | null>(null)

  const firstName =
    userName.split(' ')[0] || userName

  const maxLength = 3000

  function resetTransientState() {
    setAudienceOpen(false)
    setCommentsOpen(false)
    setEmojiOpen(false)
    setAiOpen(false)
    setOccasionOpen(false)
    setPollOpen(false)
  }

  function openComposer(
    type: ComposerType = 'post',
  ) {
    resetTransientState()
    setPostType(type)
    setIsOpen(true)
  }

  function closeComposer() {
    setIsOpen(false)
    setContent('')
    setPostType('post')
    setAudience('Anyone')
    setCommentsPermission('Anyone')
    setBrandPartnership(false)
    setAttachments([])
    setDocumentAttached(false)
    setOccasion(null)
    setPollQuestion('')
    setPollOptions(['', ''])
    resetTransientState()
  }

  function chooseAudience(
    value: Audience,
  ) {
    setAudience(value)
    setAudienceOpen(false)
  }

  function chooseComments(
    value: CommentPermission,
  ) {
    setCommentsPermission(value)
    setCommentsOpen(false)
  }

  function insertEmoji(
    emoji: string,
  ) {
    const textarea =
      textareaRef.current

    if (!textarea) {
      setContent((value) => `${value}${emoji}`)
      return
    }

    const start =
      textarea.selectionStart ??
      content.length

    const end =
      textarea.selectionEnd ??
      content.length

    const nextContent =
      content.slice(0, start) +
      emoji +
      content.slice(end)

    setContent(nextContent)

    window.requestAnimationFrame(() => {
      textarea.focus()

      const nextPosition =
        start + emoji.length

      textarea.setSelectionRange(
        nextPosition,
        nextPosition,
      )
    })

    setEmojiOpen(false)
  }

  function handleFilesSelected(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const selected =
      Array.from(event.target.files ?? [])

    if (selected.length > 0) {
      setAttachments((current) => [
        ...current,
        ...selected,
      ])
    }

    event.target.value = ''
  }

  function removeAttachment(
    index: number,
  ) {
    setAttachments((current) =>
      current.filter(
        (_, itemIndex) =>
          itemIndex !== index,
      ),
    )
  }

  function handleDocumentSelected(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file =
      event.target.files?.[0]

    if (file) {
      setDocumentAttached(true)
    }

    event.target.value = ''
  }

  function selectOccasion(
    value: Occasion,
  ) {
    setOccasion(value)
    setOccasionOpen(false)

    const prompts: Record<
      Occasion,
      string
    > = {
      'Project launch':
        'Excited to share a new project milestone with my professional network.',
      'Work anniversary':
        'Grateful to celebrate another year in my professional journey.',
      'New position':
        'Excited to share an update about my new position.',
      'New educational milestone':
        'Happy to share a new educational milestone in my journey.',
      'New certification':
        'Pleased to share that I have completed a new certification.',
    }

    setContent((current) =>
      current.trim()
        ? current
        : prompts[value],
    )

    window.requestAnimationFrame(() => {
      textareaRef.current?.focus()
    })
  }

  function addPollOption() {
    if (pollOptions.length >= 4) {
      return
    }

    setPollOptions((current) => [
      ...current,
      '',
    ])
  }

  function removePollOption(
    index: number,
  ) {
    if (pollOptions.length <= 2) {
      return
    }

    setPollOptions((current) =>
      current.filter(
        (_, itemIndex) =>
          itemIndex !== index,
      ),
    )
  }

  function updatePollOption(
    index: number,
    value: string,
  ) {
    setPollOptions((current) =>
      current.map(
        (option, optionIndex) =>
          optionIndex === index
            ? value
            : option,
      ),
    )
  }

  function handleSubmit() {
    const cleanContent =
      content.trim()

    const validPollOptions =
      pollOptions
        .map((option) => option.trim())
        .filter(Boolean)

    if (
      !cleanContent &&
      validPollOptions.length < 2 &&
      attachments.length === 0 &&
      !documentAttached
    ) {
      return
    }

    let finalContent = cleanContent

    if (
      pollQuestion.trim() &&
      validPollOptions.length >= 2
    ) {
      finalContent +=
        `${finalContent ? '\n\n' : ''}` +
        `Poll: ${pollQuestion.trim()}` +
        `\n${validPollOptions
          .map(
            (option, index) =>
              `${index + 1}. ${option}`,
          )
          .join('\n')}`
    }

    if (occasion) {
      finalContent +=
        `${finalContent ? '\n\n' : ''}` +
        `Occasion: ${occasion}`
    }

    if (attachments.length > 0) {
      finalContent +=
        `${finalContent ? '\n\n' : ''}` +
        `Attachments: ${attachments
          .map((file) => file.name)
          .join(', ')}`
    }

    if (documentAttached) {
      finalContent +=
        `${finalContent ? '\n\n' : ''}` +
        'Document attached.'
    }

    onSubmit(
      finalContent,
      postType,
    )

    closeComposer()
  }

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow =
      'hidden'

    const focusTimer =
      window.setTimeout(() => {
        textareaRef.current?.focus()
      }, 60)

    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (
        event.key === 'Escape'
      ) {
        if (
          audienceOpen ||
          commentsOpen ||
          emojiOpen ||
          aiOpen ||
          occasionOpen
        ) {
          resetTransientState()
          return
        }

        closeComposer()
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      window.clearTimeout(
        focusTimer,
      )

      document.body.style.overflow =
        previousOverflow

      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [
    isOpen,
    audienceOpen,
    commentsOpen,
    emojiOpen,
    aiOpen,
    occasionOpen,
  ])

  return (
    <>
      {/* =========================================================
          COLLAPSED COMPOSER
          Clicking the large input opens the full composer.
         ========================================================= */}

      <section className="pl-composer">
        <div className="pl-composer-top">
          <div className="pl-composer-avatar">
            {userInitials}
          </div>

          <button
            type="button"
            className="pl-composer-trigger"
            onClick={() =>
              openComposer()
            }
            aria-label="Create a post"
          >
            Share something with your
            professional network...
          </button>
        </div>

        <div className="pl-composer-actions">
          <button
            type="button"
            onClick={() =>
              openComposer('research')
            }
          >
            <FlaskConical size={19} />
            <span>Research</span>
          </button>

          <button
            type="button"
            onClick={() =>
              openComposer('opportunity')
            }
          >
            <BriefcaseBusiness size={19} />
            <span>Opportunity</span>
          </button>

          <button
            type="button"
            onClick={() =>
              openComposer('discussion')
            }
          >
            <MessageCircle size={19} />
            <span>Discussion</span>
          </button>
        </div>
      </section>

      {/* =========================================================
          FULL POST MODAL
         ========================================================= */}

      {isOpen && (
        <div
          className="pl-post-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeComposer()
            }
          }}
        >
          <section
            className="pl-post-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pl-post-modal-title"
          >
            {/* HEADER */}
            <header className="pl-post-modal-header">
              <div className="pl-post-author-block">
                <div className="pl-post-avatar">
                  {userInitials}
                </div>

                <div className="pl-post-author-meta">
                  <h2 id="pl-post-modal-title">
                    {userName}
                  </h2>

                  <button
                    type="button"
                    className="pl-posting-account"
                  >
                    <span>
                      Posting as {userName}
                    </span>
                    <ChevronDown
                      size={16}
                    />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="pl-post-modal-close"
                onClick={closeComposer}
                aria-label="Close post composer"
              >
                <X size={28} />
              </button>
            </header>

            {/* AUDIENCE + COMMENT SETTINGS */}
            <div className="pl-post-audience-row">
              <div className="pl-popover-anchor">
                <button
                  type="button"
                  className="pl-audience-pill"
                  aria-expanded={
                    audienceOpen
                  }
                  onClick={() => {
                    setCommentsOpen(false)
                    setEmojiOpen(false)
                    setAiOpen(false)
                    setAudienceOpen(
                      (current) => !current,
                    )
                  }}
                >
                  <Globe2 size={17} />
                  {audience}
                  <ChevronDown
                    size={15}
                  />
                </button>

                {audienceOpen && (
                  <div className="pl-audience-popover">
                    <div className="pl-popover-title">
                      Who can see your post?
                    </div>

                    <AudienceChoice
                      icon={<Globe2 size={25} />}
                      title="Anyone"
                      description="Anyone on or off LinkedIn"
                      selected={
                        audience === 'Anyone'
                      }
                      onClick={() =>
                        chooseAudience('Anyone')
                      }
                    />

                    <AudienceChoice
                      icon={
                        <Users size={25} />
                      }
                      title="Connections only"
                      description=""
                      selected={
                        audience ===
                        'Connections only'
                      }
                      onClick={() =>
                        chooseAudience(
                          'Connections only',
                        )
                      }
                    />

                    <AudienceChoice
                      icon={
                        <Users size={25} />
                      }
                      title="Group"
                      description=""
                      selected={
                        audience === 'Group'
                      }
                      showChevron
                      onClick={() =>
                        chooseAudience('Group')
                      }
                    />

                    <div className="pl-brand-partnership">
                      <div>
                        <strong>
                          Brand Partnership
                        </strong>
                        <a href="#">
                          Learn more
                        </a>
                      </div>

                      <button
                        type="button"
                        className={
                          brandPartnership
                            ? 'on'
                            : 'off'
                        }
                        onClick={() =>
                          setBrandPartnership(
                            (current) =>
                              !current,
                          )
                        }
                        aria-pressed={
                          brandPartnership
                        }
                      >
                        <span>
                          {brandPartnership
                            ? 'On'
                            : 'Off'}
                        </span>
                        <span className="pl-toggle">
                          <span />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="pl-popover-anchor">
                <button
                  type="button"
                  className="pl-audience-pill"
                  aria-expanded={
                    commentsOpen
                  }
                  onClick={() => {
                    setAudienceOpen(false)
                    setEmojiOpen(false)
                    setAiOpen(false)
                    setCommentsOpen(
                      (current) => !current,
                    )
                  }}
                >
                  <MessageCircle
                    size={17}
                  />
                  Comments: {commentsPermission}
                  <ChevronDown
                    size={15}
                  />
                </button>

                {commentsOpen && (
                  <div className="pl-comments-popover">
                    <div className="pl-popover-title">
                      Comment settings
                    </div>

                    <CommentChoice
                      icon={
                        <Globe2 size={25} />
                      }
                      title="Anyone"
                      selected={
                        commentsPermission ===
                        'Anyone'
                      }
                      onClick={() =>
                        chooseComments(
                          'Anyone',
                        )
                      }
                    />

                    <CommentChoice
                      icon={
                        <Users size={25} />
                      }
                      title="Connections only"
                      selected={
                        commentsPermission ===
                        'Connections only'
                      }
                      onClick={() =>
                        chooseComments(
                          'Connections only',
                        )
                      }
                    />

                    <CommentChoice
                      icon={
                        <MessageCircle
                          size={25}
                        />
                      }
                      title="Off"
                      selected={
                        commentsPermission ===
                        'Off'
                      }
                      onClick={() =>
                        chooseComments('Off')
                      }
                    />
                  </div>
                )}
              </div>
            </div>

            {/* POST TYPE */}
            <div className="pl-post-modal-type-row">
              {composerOptions.map(
                ({
                  type,
                  label,
                  icon: Icon,
                }) => (
                  <button
                    key={type}
                    type="button"
                    className={
                      postType === type
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setPostType(type)
                    }
                  >
                    <Icon size={17} />
                    <span>{label}</span>
                  </button>
                ),
              )}
            </div>

            {/* EDITOR */}
            <div className="pl-post-editor">
              <textarea
                ref={textareaRef}
                value={content}
                maxLength={maxLength}
                onChange={(event) =>
                  setContent(
                    event.target.value,
                  )
                }
                placeholder={
                  postType === 'research'
                    ? 'Share your research, findings, or a question with the pharmacy community...'
                    : postType ===
                        'opportunity'
                      ? 'Tell your network about the opportunity...'
                      : postType ===
                          'discussion'
                        ? 'Start a professional discussion...'
                        : `What would you like to share, ${firstName}?`
                }
                aria-label="Post content"
              />

              {/* OCCASION CARD */}
              {occasion && (
                <div className="pl-selected-occasion">
                  <div className="pl-selected-occasion-icon">
                    <Award size={17} />
                  </div>

                  <div>
                    <span>OCCASION</span>
                    <strong>{occasion}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setOccasion(null)
                    }
                    aria-label="Remove occasion"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              {/* ATTACHMENT CHIPS */}
              {attachments.length >
                0 && (
                <div className="pl-attachments">
                  {attachments.map(
                    (
                      file,
                      index,
                    ) => (
                      <div
                        className="pl-attachment-chip"
                        key={`${file.name}-${index}`}
                      >
                        <ImageIcon
                          size={15}
                        />
                        <span>
                          {file.name}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            removeAttachment(
                              index,
                            )
                          }
                          aria-label={`Remove ${file.name}`}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ),
                  )}
                </div>
              )}

              {documentAttached && (
                <div className="pl-document-chip">
                  <FileText size={16} />
                  <span>
                    Document attached
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setDocumentAttached(
                        false,
                      )
                    }
                    aria-label="Remove document"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}

              {/* POLL BUILDER */}
              {pollOpen && (
                <div className="pl-poll-builder">
                  <div className="pl-poll-header">
                    <div>
                      <strong>
                        Create a poll
                      </strong>
                      <span>
                        Ask your network a
                        professional question.
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setPollOpen(false)
                      }
                      aria-label="Close poll builder"
                    >
                      <X size={17} />
                    </button>
                  </div>

                  <input
                    type="text"
                    value={pollQuestion}
                    onChange={(event) =>
                      setPollQuestion(
                        event.target.value,
                      )
                    }
                    placeholder="What would you like to ask?"
                  />

                  <div className="pl-poll-options">
                    {pollOptions.map(
                      (
                        option,
                        index,
                      ) => (
                        <div
                          className="pl-poll-option-row"
                          key={index}
                        >
                          <input
                            value={option}
                            onChange={(event) =>
                              updatePollOption(
                                index,
                                event.target
                                  .value,
                              )
                            }
                            placeholder={`Option ${index + 1}`}
                          />

                          {pollOptions.length >
                            2 && (
                            <button
                              type="button"
                              onClick={() =>
                                removePollOption(
                                  index,
                                )
                              }
                              aria-label={`Remove option ${index + 1}`}
                            >
                              <X
                                size={15}
                              />
                            </button>
                          )}
                        </div>
                      ),
                    )}
                  </div>

                  <button
                    type="button"
                    className="pl-add-poll-option"
                    onClick={addPollOption}
                    disabled={
                      pollOptions.length >=
                      4
                    }
                  >
                    <Plus size={15} />
                    Add option
                  </button>
                </div>
              )}
            </div>

            {/* TOOLBAR */}
            <div className="pl-post-tools">
              <div className="pl-post-tools-left">
                <button
                  type="button"
                  className="pl-tool-text"
                >
                  Proofread
                </button>

                <div className="pl-tool-popover-anchor">
                  <button
                    type="button"
                    className={`pl-icon-tool ${
                      emojiOpen
                        ? 'selected'
                        : ''
                    }`}
                    aria-label="Add emoji"
                    aria-expanded={
                      emojiOpen
                    }
                    onClick={() => {
                      setAudienceOpen(false)
                      setCommentsOpen(false)
                      setAiOpen(false)
                      setEmojiOpen(
                        (current) =>
                          !current,
                      )
                    }}
                  >
                    <Smile size={23} />
                  </button>

                  {emojiOpen && (
                    <EmojiPicker
                      onSelect={insertEmoji}
                      onClose={() =>
                        setEmojiOpen(false)
                      }
                    />
                  )}
                </div>

                <button
                  type="button"
                  className="pl-icon-tool"
                  aria-label="Add image or video"
                  onClick={() =>
                    imageInputRef.current?.click()
                  }
                >
                  <ImageIcon size={22} />
                </button>

                <div className="pl-tool-popover-anchor">
                  <button
                    type="button"
                    className={`pl-icon-tool ${
                      aiOpen
                        ? 'selected'
                        : ''
                    }`}
                    aria-label="Use AI"
                    aria-expanded={aiOpen}
                    onClick={() => {
                      setAudienceOpen(false)
                      setCommentsOpen(false)
                      setEmojiOpen(false)
                      setAiOpen(
                        (current) =>
                          !current,
                      )
                    }}
                  >
                    <Sparkles size={22} />
                  </button>

                  {aiOpen && (
                    <div className="pl-ai-popover">
                      <button
                        type="button"
                        className="pl-ai-close"
                        onClick={() =>
                          setAiOpen(false)
                        }
                        aria-label="Close AI card"
                      >
                        <X size={18} />
                      </button>

                      <h3>
                        Enhance your posts
                        with AI
                      </h3>

                      <p>
                        Improve clarity,
                        tone and structure
                        before you publish.
                      </p>

                      <div className="pl-ai-members">
                        <div className="pl-mini-avatar">
                          AK
                        </div>
                        <div className="pl-mini-avatar">
                          RS
                        </div>
                        <div className="pl-mini-avatar">
                          MK
                        </div>
                        <span>
                          Available to
                          PharmaLink
                          members
                        </span>
                      </div>

                      <button
                        type="button"
                        className="pl-ai-cta"
                        onClick={() => {
                          setContent(
                            (current) =>
                              current ||
                              'Share a clear professional update with your pharmacy network.',
                          )

                          setAiOpen(
                            false,
                          )

                          window.requestAnimationFrame(
                            () => {
                              textareaRef.current?.focus()
                            },
                          )
                        }}
                      >
                        Improve my draft
                      </button>

                      <small>
                        You can review changes
                        before posting.
                      </small>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="pl-icon-tool"
                  aria-label="Add occasion"
                  onClick={() =>
                    setOccasionOpen(true)
                  }
                >
                  <Award size={22} />
                </button>

                <button
                  type="button"
                  className="pl-icon-tool"
                  aria-label="Add event"
                  onClick={() =>
                    setOccasionOpen(true)
                  }
                >
                  <CalendarDays
                    size={22}
                  />
                </button>

                <button
                  type="button"
                  className="pl-icon-tool"
                  aria-label="Add job opportunity"
                  onClick={() =>
                    setPostType('opportunity')
                  }
                >
                  <BriefcaseBusiness
                    size={22}
                  />
                </button>

                <button
                  type="button"
                  className="pl-icon-tool"
                  aria-label="Create a poll"
                  onClick={() => {
                    setPollOpen(true)
                    setAiOpen(false)
                    setEmojiOpen(false)
                  }}
                >
                  <BarChart3
                    size={22}
                  />
                </button>

                <button
                  type="button"
                  className="pl-icon-tool"
                  aria-label="Attach document"
                  onClick={() =>
                    documentInputRef.current?.click()
                  }
                >
                  <FileText size={22} />
                </button>

                <button
                  type="button"
                  className="pl-icon-tool"
                  aria-label="More options"
                  onClick={() =>
                    setPollOpen(
                      (current) =>
                        !current,
                    )
                  }
                >
                  <Plus size={25} />
                </button>
              </div>

              <input
                ref={imageInputRef}
                type="file"
                className="pl-hidden-input"
                accept="image/*,video/*"
                multiple
                onChange={
                  handleFilesSelected
                }
              />

              <input
                ref={documentInputRef}
                type="file"
                className="pl-hidden-input"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
                onChange={
                  handleDocumentSelected
                }
              />
            </div>

            {/* FOOTER */}
            <footer className="pl-post-modal-footer">
              <div className="pl-character-count">
                {content.length}/{maxLength}
              </div>

              <div className="pl-modal-footer-actions">
                <button
                  type="button"
                  className="pl-schedule-button"
                  aria-label="Schedule post"
                  title="Schedule post"
                >
                  <ClockIcon />
                </button>

                <button
                  type="button"
                  className="pl-publish-button"
                  disabled={
                    !content.trim() &&
                    attachments.length === 0 &&
                    !documentAttached
                  }
                  onClick={
                    handleSubmit
                  }
                >
                  Post
                </button>
              </div>
            </footer>

            {/* OCCASION SELECTION */}
            {occasionOpen && (
              <div
                className="pl-secondary-modal-layer"
                role="presentation"
                onMouseDown={(
                  event,
                ) => {
                  if (
                    event.target ===
                    event.currentTarget
                  ) {
                    setOccasionOpen(
                      false,
                    )
                  }
                }}
              >
                <section
                  className="pl-occasion-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="pl-occasion-title"
                >
                  <header>
                    <h2 id="pl-occasion-title">
                      Select occasion
                    </h2>

                    <button
                      type="button"
                      onClick={() =>
                        setOccasionOpen(
                          false,
                        )
                      }
                      aria-label="Close occasion selection"
                    >
                      <X size={28} />
                    </button>
                  </header>

                  <div className="pl-occasion-list">
                    {occasionOptions.map(
                      ({
                        title,
                        description,
                      }) => (
                        <button
                          type="button"
                          className="pl-occasion-item"
                          key={title}
                          onClick={() =>
                            selectOccasion(
                              title,
                            )
                          }
                        >
                          <span>
                            <strong>
                              {title}
                            </strong>
                            <small>
                              {
                                description
                              }
                            </small>
                          </span>

                          <span className="pl-occasion-arrow">
                            →
                          </span>
                        </button>
                      ),
                    )}
                  </div>

                  <footer>
                    <button
                      type="button"
                      className="pl-back-button"
                      onClick={() =>
                        setOccasionOpen(
                          false,
                        )
                      }
                    >
                      Back
                    </button>
                  </footer>
                </section>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  )
}

/* =============================================================
   AUDIENCE CHOICE
   ============================================================= */

function AudienceChoice({
  icon,
  title,
  description,
  selected,
  showChevron = false,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  description: string
  selected: boolean
  showChevron?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className="pl-audience-choice"
      onClick={onClick}
    >
      <span className="pl-choice-icon">
        {icon}
      </span>

      <span className="pl-choice-copy">
        <strong>{title}</strong>
        {description && (
          <small>
            {description}
          </small>
        )}
      </span>

      {showChevron && (
        <ChevronDown
          className="pl-choice-chevron"
          size={18}
        />
      )}

      <span
        className={`pl-radio ${
          selected
            ? 'selected'
            : ''
        }`}
      >
        {selected && (
          <span />
        )}
      </span>
    </button>
  )
}

/* =============================================================
   COMMENT CHOICE
   ============================================================= */

function CommentChoice({
  icon,
  title,
  selected,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className="pl-comment-choice"
      onClick={onClick}
    >
      <span className="pl-choice-icon">
        {icon}
      </span>

      <strong>{title}</strong>

      <span
        className={`pl-radio ${
          selected
            ? 'selected'
            : ''
        }`}
      >
        {selected && (
          <span />
        )}
      </span>
    </button>
  )
}

/* =============================================================
   EMOJI PICKER
   ============================================================= */

function EmojiPicker({
  onSelect,
  onClose,
}: {
  onSelect: (emoji: string) => void
  onClose: () => void
}) {
  return (
    <div className="pl-emoji-picker">
      <div className="pl-emoji-search-row">
        <input
          type="text"
          placeholder="Search"
          aria-label="Search emojis"
        />

        <span className="pl-emoji-search-icon">
          🔎
        </span>

        <button
          type="button"
          className="pl-emoji-current"
          onClick={onClose}
          aria-label="Close emoji picker"
        >
          👋
        </button>

        <button
          type="button"
          className="pl-emoji-close"
          onClick={onClose}
          aria-label="Close emoji picker"
        >
          <X size={22} />
        </button>
      </div>

      <div className="pl-emoji-category-row">
        {[
          '◷',
          '☺',
          '🐻',
          '🤖',
          '◒',
          '🚗',
          '☀',
          '%',
          '⚑',
        ].map(
          (
            icon,
            index,
          ) => (
            <button
              type="button"
              key={index}
              className={
                index === 0
                  ? 'active'
                  : ''
              }
            >
              {icon}
            </button>
          ),
        )}
      </div>

      <div className="pl-emoji-scroll">
        {emojiGroups.map(
          (group) => (
            <div
              className="pl-emoji-group"
              key={group.label}
            >
              <h4>{group.label}</h4>

              <div className="pl-emoji-grid">
                {group.emojis.map(
                  (emoji) => (
                    <button
                      type="button"
                      key={emoji}
                      onClick={() =>
                        onSelect(
                          emoji,
                        )
                      }
                      aria-label={`Insert ${emoji}`}
                    >
                      {emoji}
                    </button>
                  ),
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

/* =============================================================
   CLOCK ICON
   ============================================================= */

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 7V12L15.5 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PostComposer
