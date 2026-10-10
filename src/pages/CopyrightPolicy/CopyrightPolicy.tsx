
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

const GREEN = "#007653";
const NAVY = "#172b39";

function PolicySection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-4 text-[22px] font-medium leading-tight tracking-[-0.025em] text-[#26343c] sm:text-[26px]">
        {title}
      </h2>
      <div className="space-y-4 text-[13px] leading-[1.85] text-[#35444d] sm:text-sm">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="pt-1 text-[17px] font-medium leading-snug text-[#26343c]">
      {children}
    </h3>
  );
}

function PolicyLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="font-medium text-[#0876bd] underline-offset-2 hover:underline"
    >
      {children}
    </Link>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-[#0876bd] underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}

function FooterLinks() {
  const links = [
    ["About", "/about"],
    ["Accessibility", "/accessibility"],
    ["User Agreement", "/user-agreement"],
    ["Privacy Policy", "/privacy-policy"],
    ["Cookie Policy", "/cookie-policy"],
    ["Copyright Policy", "/copyright-policy"],
    ["Brand Policy", "/brand-guidelines"],
    ["Community Guidelines", "/community-guidelines"],
  ];

  return (
    <footer className="border-t border-[#e8e8e8] bg-white px-5 py-6">
      <div className="mx-auto flex max-w-[850px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[10px] text-[#829099]">
          © 2026 PharmaLink
        </span>

        <nav
          aria-label="Legal footer navigation"
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className="text-[10px] text-[#66747c] transition hover:text-[#007653]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="w-fit text-[10px] text-[#66747c] hover:text-[#007653]"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default function CopyrightPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#26343c]">
      {/* HEADER */}
      <header className="border-b border-[#e3e3e3] bg-white">
        <div className="mx-auto max-w-[850px] px-5">
          <div className="flex h-[52px] items-center justify-between">
            <Link
              to="/"
              aria-label="PharmaLink home"
              className="flex items-center gap-2"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md bg-[#007653] text-xs font-extrabold text-white">
                P
              </span>
              <span className="text-[16px] font-extrabold tracking-tight text-[#172b39]">
                Pharma<span className="text-[#008565]">Link</span>
              </span>
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#007653] px-3 py-2 text-[10px] font-bold text-white transition hover:bg-[#005e41]"
            >
              Join PharmaLink <ArrowRight size={12} />
            </Link>
          </div>

          <nav
            aria-label="Legal navigation"
            className="flex gap-x-5 overflow-x-auto border-t border-[#eeeeee] py-3 text-[10px] font-medium text-[#53616a] sm:gap-x-7"
          >
            <Link
              to="/user-agreement"
              className="shrink-0 hover:text-[#007653]"
            >
              User Agreement⌄
            </Link>
            <Link
              to="/privacy-policy"
              className="shrink-0 hover:text-[#007653]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/community-guidelines"
              className="shrink-0 hover:text-[#007653]"
            >
              Community Guidelines
            </Link>
            <Link
              to="/cookie-policy"
              className="shrink-0 hover:text-[#007653]"
            >
              Cookie Policy
            </Link>
            <Link
              to="/copyright-policy"
              aria-current="page"
              className="shrink-0 font-bold text-[#007653]"
            >
              Copyright Policy
            </Link>
            <Link
              to="/brand-guidelines"
              className="shrink-0 hover:text-[#007653]"
            >
              Brand Guidelines
            </Link>
          </nav>
        </div>
      </header>

      {/* TITLE BANNER */}
      <section className="border-b border-[#e7e0da] bg-[#f2ede7]">
        <div className="mx-auto max-w-[850px] px-5 py-8 text-center sm:py-10">
          <h1 className="text-[34px] font-normal tracking-[-0.035em] text-[#252525] sm:text-[43px]">
            Copyright Policy
          </h1>
        </div>
      </section>

      {/* MAIN DOCUMENT */}
      <main className="mx-auto max-w-[850px] px-5 pb-16 pt-5 sm:pt-7">
        <div className="mb-12 flex items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] text-[#0876bd] hover:underline"
          >
            <ArrowLeft size={13} />
            Back to PharmaLink
          </Link>

          <span className="text-right text-[10px] italic text-[#687780]">
            Last updated: October 10, 2026
          </span>
        </div>

        {/* COPYRIGHT INTRODUCTION */}
        <div className="space-y-5">
          <PolicySection title="Complaints regarding content posted on PharmaLink">
            <p>
              PharmaLink respects intellectual property rights and aims to
              provide a professional platform where members can share
              original work, research, educational resources, and other
              relevant content. Users are expected to respect the rights
              of authors, researchers, publishers, organizations, and
              other rights holders.
            </p>

            <p>
              Our{" "}
              <PolicyLink to="/user-agreement">
                User Agreement
              </PolicyLink>{" "}
              requires members to comply with applicable laws and to share
              content only when they have the necessary rights, permissions,
              or other valid legal basis. This policy describes how to
              report alleged copyright infringement and how PharmaLink may
              review such complaints.
            </p>

            <p>
              Depending on the circumstances, we may remove or restrict
              access to reported material, request further information,
              notify the person who submitted the content, or take
              appropriate action against accounts involved in repeated
              infringement. Any action will be subject to applicable law,
              the evidence available, and the circumstances of the report.
            </p>

            <p>
              Please submit notices and counter-notices truthfully and in
              good faith. Knowingly submitting materially false claims may
              result in legal consequences. You may wish to obtain
              independent legal advice before submitting a formal notice.
            </p>
          </PolicySection>

          {/* COPYRIGHT INFRINGEMENT */}
          <PolicySection
            id="copyright-infringement"
            title="Claims regarding copyright infringement"
          >
            <Subheading>Notice of Copyright Infringement</Subheading>

            <p>
              If you believe that content available through PharmaLink
              infringes a copyright you own or are authorized to represent,
              you may submit a written notice through our official contact
              channel. Where a specific statutory notice procedure applies,
              your submission should satisfy the requirements of that law.
            </p>

            <p>
              To help us review your complaint, please include the
              following information, to the extent applicable:
            </p>

            <ol className="list-decimal space-y-4 pl-6 marker:font-medium marker:text-[#35444d]">
              <li>
                <strong className="font-semibold">
                  Identification of the rights holder.
                </strong>{" "}
                Your full name and, if you are acting for someone else,
                confirmation that you are authorized to act on the
                rights holder's behalf.
              </li>
              <li>
                <strong className="font-semibold">
                  Identification of the copyrighted work.
                </strong>{" "}
                A description of the original work you believe has been
                infringed, with publication details or other supporting
                information where available.
              </li>
              <li>
                <strong className="font-semibold">
                  Location of the reported material.
                </strong>{" "}
                The exact URL or other information sufficient for us to
                locate the allegedly infringing content on PharmaLink.
              </li>
              <li>
                <strong className="font-semibold">
                  Your contact details.
                </strong>{" "}
                An email address and any additional contact information
                reasonably necessary to communicate with you about the
                complaint.
              </li>
              <li>
                <strong className="font-semibold">
                  Good-faith statement.
                </strong>{" "}
                A statement explaining why you believe the disputed use
                is not authorized by the copyright owner, its agent, or
                applicable law.
              </li>
              <li>
                <strong className="font-semibold">
                  Accuracy and authority statement.
                </strong>{" "}
                Where required by the applicable legal procedure, a
                statement confirming that the information is accurate
                and that you are authorized to submit the complaint.
              </li>
              <li>
                <strong className="font-semibold">
                  Signature.
                </strong>{" "}
                Your physical or electronic signature, where required
                by applicable law.
              </li>
            </ol>

            <div className="rounded-r-md border-l-[3px] border-[#008565] bg-[#eef8f4] px-4 py-4">
              <h3 className="text-sm font-semibold text-[#145c47]">
                Submit a copyright complaint
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#526c63]">
                Use PharmaLink's official contact channel and include
                the relevant URLs and supporting information.
              </p>
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#0876bd] hover:underline"
              >
                Contact PharmaLink <ArrowRight size={13} />
              </Link>
            </div>

            <p>
              Please submit only information that is relevant to your
              complaint. Do not include sensitive personal information
              unless it is genuinely necessary for the review.
            </p>
          </PolicySection>

          {/* REVIEW PROCESS */}
          <PolicySection
            id="review-process"
            title="How copyright complaints are reviewed"
          >
            <p>
              After receiving a report, PharmaLink may review the information
              submitted, request clarification, assess the location and
              nature of the material, and take action where appropriate.
              Submitting a complaint does not guarantee removal of content.
            </p>

            <p>
              Where required by law or appropriate in the circumstances,
              we may notify the person who posted the material and provide
              an opportunity to respond. We may preserve relevant records
              or restrict access while a report is being evaluated, where
              permitted by law.
            </p>

            <p>
              We may decline to act on incomplete, unverifiable, abusive,
              or clearly unsupported reports. We may also take account of
              licensing arrangements, permissions, exceptions, limitations,
              and other relevant legal considerations.
            </p>
          </PolicySection>

          {/* COUNTER NOTICE */}
          <PolicySection
            id="counter-notice"
            title="Counter-notice"
          >
            <Subheading>Responding to a copyright complaint</Subheading>

            <p>
              If your content has been removed or restricted following a
              copyright complaint and you believe the action was mistaken,
              you may contact PharmaLink to explain your position and
              request a review. A formal counter-notice may be available
              where the applicable law provides for one.
            </p>

            <p>
              Depending on the legal procedure that applies, a formal
              counter-notice may need to contain:
            </p>

            <ol className="list-decimal space-y-4 pl-6">
              <li>
                Your name and physical or electronic signature, where
                required.
              </li>
              <li>
                Identification of the material that was removed or
                restricted and its location before the action was taken.
              </li>
              <li>
                An explanation of why you believe the material was removed
                or restricted by mistake or misidentification.
              </li>
              <li>
                Your contact information and any jurisdictional statements
                or consents required under the applicable statutory
                counter-notice procedure.
              </li>
              <li>
                Any supporting evidence of ownership, permission,
                licensing, or another legal basis for the disputed use.
              </li>
            </ol>

            <p>
              PharmaLink may review a response, request additional
              information, or follow the notice-and-counter-notice
              procedure required by applicable law. Restoration of content
              is not automatic and depends on the circumstances and legal
              requirements.
            </p>

            <div className="rounded-r-md border-l-[3px] border-[#008565] bg-[#eef8f4] px-4 py-4">
              <h3 className="text-sm font-semibold text-[#145c47]">
                Request a review
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#526c63]">
                Reference the original complaint, identify the affected
                content, and explain the basis for your response.
              </p>
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#0876bd] hover:underline"
              >
                Contact support <ArrowRight size={13} />
              </Link>
            </div>
          </PolicySection>

          {/* REPEATED INFRINGEMENT */}
          <PolicySection
            id="repeat-infringement"
            title="Repeat infringement"
          >
            <p>
              PharmaLink may take appropriate action against accounts
              that repeatedly infringe intellectual property rights.
              Depending on the circumstances, applicable law, and the
              available evidence, this may include warnings, content
              restrictions, temporary suspension, or account termination.
            </p>

            <p>
              In assessing repeated reports, we may consider the nature
              of the alleged infringement, previous findings, the
              reliability of the notices, responses received, and any
              applicable legal requirements.
            </p>
          </PolicySection>

          {/* OTHER CONTENT */}
          <PolicySection
            id="other-content"
            title="Claims regarding content other than copyright infringement"
          >
            <p>
              Not every content dispute concerns copyright. If you need
              to report another type of concern, please use the appropriate
              reporting channel.
            </p>

            <ul className="list-disc space-y-3 pl-6 marker:text-[#007653]">
              <li>
                <PolicyLink to="/community-guidelines">
                  Reporting inappropriate content or safety concerns
                </PolicyLink>
              </li>
              <li>
                <PolicyLink to="/brand-guidelines">
                  Brand and trademark concerns
                </PolicyLink>
              </li>
              <li>
                <PolicyLink to="/contact">
                  Impersonation, fraudulent accounts, or other complaints
                </PolicyLink>
              </li>
            </ul>

            <p>
              Reports should identify the relevant content, explain the
              concern, and include any information reasonably needed
              to assess the issue. Please avoid submitting duplicate
              reports unless you have additional relevant information.
            </p>
          </PolicySection>

          {/* USER RESPONSIBILITIES */}
          <PolicySection
            id="user-responsibilities"
            title="Responsibilities when sharing content"
          >
            <p>
              Before uploading or sharing content, make sure you have the
              necessary rights, licenses, permissions, or other legal
              basis to do so. This is particularly important when sharing
              research papers, journal articles, illustrations, photographs,
              datasets, presentations, and educational material.
            </p>

            <p>
              Attribution alone does not necessarily authorize the use
              of copyrighted material. If you are unsure whether a use
              is permitted, seek permission from the relevant rights
              holder or obtain independent legal advice.
            </p>

            <p>
              PharmaLink does not endorse or independently verify every
              rights claim made by a user. Users remain responsible for
              their own submissions, subject to applicable law.
            </p>
          </PolicySection>

          {/* CONTACT */}
          <PolicySection
            id="contact"
            title="Contact information"
          >
            <p>
              For copyright complaints, counter-notice inquiries, or
              questions about this policy, contact PharmaLink through
              its official support channel.
            </p>

            <p>
              When contacting us, include a clear subject line, links to
              the relevant content, and the information needed to
              understand your request.
            </p>

            <div className="rounded-lg border border-[#e2e8e4] p-5">
              <p className="font-semibold text-[#26343c]">
                PharmaLink Copyright and Content Support
              </p>
              <p className="mt-2 text-xs leading-6 text-[#66747c]">
                Contact channel: PharmaLink Contact page
                <br />
                Please include: Copyright complaint or counter-notice
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#0876bd] hover:underline"
              >
                Go to Contact Us <ArrowRight size={13} />
              </Link>
            </div>
          </PolicySection>

          {/* LEGAL DISCLAIMER */}
          <div className="mt-10 border-t border-[#e6e9e7] pt-5">
            <p className="text-[11px] leading-6 text-[#7a878d]">
              This Copyright Policy is a draft for the PharmaLink platform.
              It is not legal advice. Before publication, confirm the
              applicable copyright laws, formal notice requirements,
              designated contact details, response procedures, and any
              statutory counter-notice process relevant to PharmaLink's
              operating jurisdiction.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <FooterLinks />
    </div>
  );
}
