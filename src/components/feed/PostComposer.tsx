import {
  BriefcaseBusiness,
  FileText,
  FlaskConical,
  ImagePlus,
  MessageCircle,
  X,
} from 'lucide-react'
import { useState } from 'react'

interface PostComposerProps {
  userInitials?: string
  userName?: string
  onSubmit?: (content: string, type: PostType) => void
}

export type PostType =
  | 'post'
  | 'research'
  | 'opportunity'
  | 'discussion'

function PostComposer({
  userInitials = 'AK',
  userName = 'You',
  onSubmit,
}: PostComposerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState('')
  const [postType, setPostType] =
    useState<PostType>('post')

  const handleSubmit = () => {
    const trimmedContent = content.trim()

    if (!trimmedContent) {
      return
    }

    onSubmit?.(trimmedContent, postType)

    setContent('')
    setPostType('post')
    setIsOpen(false)
  }

  const handleCancel = () => {
    setContent('')
    setPostType('post')
    setIsOpen(false)
  }

  return (
    <section className="feed-composer">

      <div className="feed-composer-top">

        <div className="feed-composer-avatar">
          {userInitials}
        </div>

        {!isOpen ? (
          <button
            type="button"
            className="feed-composer-input"
            onClick={() => setIsOpen(true)}
          >
            Share something with your professional
            network...
          </button>
        ) : (
          <div className="feed-composer-open-header">
            <div>
              <strong>
                Create a post
              </strong>

              <span>
                Posting as {userName}
              </span>
            </div>

            <button
              type="button"
              className="feed-composer-close"
              onClick={handleCancel}
              aria-label="Close post composer"
            >
              <X size={17} />
            </button>
          </div>
        )}

      </div>

      {isOpen && (
        <div className="feed-composer-editor">

          <div className="feed-composer-type-selector">

            <button
              type="button"
              className={
                postType === 'post'
                  ? 'selected'
                  : ''
              }
              onClick={() => setPostType('post')}
            >
              <FileText size={15} />
              Post
            </button>

            <button
              type="button"
              className={
                postType === 'research'
                  ? 'selected'
                  : ''
              }
              onClick={() =>
                setPostType('research')
              }
            >
              <FlaskConical size={15} />
              Research
            </button>

            <button
              type="button"
              className={
                postType === 'opportunity'
                  ? 'selected'
                  : ''
              }
              onClick={() =>
                setPostType('opportunity')
              }
            >
              <BriefcaseBusiness size={15} />
              Opportunity
            </button>

            <button
              type="button"
              className={
                postType === 'discussion'
                  ? 'selected'
                  : ''
              }
              onClick={() =>
                setPostType('discussion')
              }
            >
              <MessageCircle size={15} />
              Discussion
            </button>

          </div>

          <textarea
            className="feed-composer-textarea"
            value={content}
            onChange={(event) =>
              setContent(event.target.value)
            }
            placeholder={
              postType === 'research'
                ? 'Share your research, findings, or an interesting paper...'
                : postType === 'opportunity'
                  ? 'Share a job, internship, collaboration, or professional opportunity...'
                  : postType === 'discussion'
                    ? 'Start a professional discussion with the pharmacy community...'
                    : 'What would you like to share with your professional network?'
            }
            rows={5}
            maxLength={3000}
            autoFocus
          />

          <div className="feed-composer-footer">

            <div className="feed-composer-tools">

              <button
                type="button"
                aria-label="Add image"
                title="Add image"
              >
                <ImagePlus size={17} />
              </button>

              <button
                type="button"
                aria-label="Add document"
                title="Add document"
              >
                <FileText size={17} />
              </button>

            </div>

            <div className="feed-composer-submit">

              <span>
                {content.length}/3000
              </span>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!content.trim()}
              >
                Publish
              </button>

            </div>

          </div>

        </div>
      )}

      {!isOpen && (
        <div className="feed-composer-actions">

          <button
            type="button"
            onClick={() => {
              setPostType('research')
              setIsOpen(true)
            }}
          >
            <FlaskConical size={18} />
            <span>Research</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setPostType('opportunity')
              setIsOpen(true)
            }}
          >
            <BriefcaseBusiness size={18} />
            <span>Opportunity</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setPostType('discussion')
              setIsOpen(true)
            }}
          >
            <MessageCircle size={18} />
            <span>Discussion</span>
          </button>

        </div>
      )}

    </section>
  )
}

export default PostComposer