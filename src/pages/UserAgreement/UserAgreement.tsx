
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  FileText,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      {
        heading: "Welcome to PharmaLink",
        text: "PharmaLink is a professional networking platform designed to bring together pharmacy students, pharmacists, researchers, educators, recruiters, healthcare organizations, and other members of the pharmaceutical ecosystem.",
      },
      {
        heading: "About this Agreement",
        text: "These User Agreement terms govern your access to and use of PharmaLink, including its website, professional networking features, job listings, research resources, communities, and other services made available through the platform.",
      },
      {
        heading: "Acceptance of Terms",
        text: "By creating an account, accessing, or using PharmaLink, you acknowledge that you have read and understood this Agreement. If you do not agree to these terms, you must discontinue use of the platform.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility and Accounts",
    content: [
      {
        heading: "Eligibility",
        text: "You must be legally capable of entering into a binding agreement under applicable law to use PharmaLink. If you are under the age of majority in your jurisdiction, you may use the platform only where permitted by applicable law and with any required consent.",
      },
      {
        heading: "Account Information",
        text: "You agree to provide accurate, current, and complete information when registering and to keep your account information up to date. You must not impersonate another person or misrepresent your professional qualifications, education, employment, or affiliations.",
      },
      {
        heading: "Account Security",
        text: "You are responsible for safeguarding your login credentials and for activity carried out through your account, subject to applicable law. Notify PharmaLink promptly if you suspect unauthorized access or a security incident involving your account.",
      },
    ],
  },
  {
    id: "profile",
    title: "3. Your Profile and Professional Identity",
    content: [
      {
        heading: "Accurate Professional Information",
        text: "Your profile may include your name, educational background, work experience, qualifications, skills, professional interests, research contributions, and other information you choose to share. You are responsible for ensuring that the information you provide is accurate and not misleading.",
      },
      {
        heading: "Professional Representation",
        text: "You must not claim degrees, licenses, certifications, research contributions, or professional registrations that you do not possess. Where professional verification is offered, its availability and scope will be communicated separately.",
      },
      {
        heading: "Profile Visibility",
        text: "Information you publish on your profile may be visible to other users according to the platform's features and applicable privacy settings. Review your settings before sharing information you wish to keep private.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use",
    content: [
      {
        heading: "Permitted Use",
        text: "You may use PharmaLink to build professional connections, share relevant knowledge, discover opportunities, participate in communities, discuss research, and engage with other legitimate professional activities supported by the platform.",
      },
      {
        heading: "Prohibited Conduct",
        text: "You must not use PharmaLink to harass, threaten, defraud, impersonate, discriminate unlawfully against, or deliberately mislead others. You must not distribute unlawful, defamatory, deceptive, malicious, or unauthorized content.",
      },
      {
        heading: "Platform Integrity",
        text: "You must not attempt to access accounts or systems without authorization, interfere with platform operations, circumvent security measures, distribute malware, scrape restricted information, or use automated activity in ways that violate applicable law or platform rules.",
      },
      {
        heading: "Spam and Misuse",
        text: "Unsolicited bulk messages, deceptive promotions, fake engagement, fraudulent job listings, and repeated unwanted solicitation are not permitted. Commercial activities must comply with applicable law and any relevant platform policies.",
      },
    ],
  },
  {
    id: "content",
    title: "5. User Content and Intellectual Property",
    content: [
      {
        heading: "Your Content",
        text: "You retain ownership of content you create and submit to PharmaLink, subject to rights you may have granted to others and applicable law. You are responsible for ensuring that you have the rights and permissions needed to upload or share your content.",
      },
      {
        heading: "Permission to Operate the Platform",
        text: "When you publish or upload content, you grant PharmaLink a non-exclusive, worldwide, royalty-free license to host, store, reproduce, display, distribute, and technically adapt that content only as reasonably necessary to operate, provide, secure, and improve the services, subject to your settings and applicable law. This license ends when the content is deleted or your account is closed, except for limited retention needed for legal compliance, security, backups, dispute resolution, or content already shared by others, as permitted by law.",
      },
      {
        heading: "Respect for Intellectual Property",
        text: "You must respect the intellectual property rights of PharmaLink and third parties. Do not upload copyrighted research, images, documents, or other material unless you own it or have the necessary permission or legal basis to share it.",
      },
      {
        heading: "Platform Materials",
        text: "The PharmaLink name, branding, interface, and platform materials may be protected by intellectual property laws. Except where permitted by law or expressly authorized, you may not copy, modify, distribute, or commercially exploit these materials.",
      },
    ],
  },
  {
    id: "networking",
    title: "6. Connections, Communities and Communication",
    content: [
      {
        heading: "Professional Interactions",
        text: "PharmaLink helps users discover and communicate with other members. You are responsible for exercising appropriate judgment when accepting connections, responding to messages, joining communities, or sharing information with other users.",
      },
      {
        heading: "Community Participation",
        text: "Community discussions must remain relevant, respectful, and consistent with applicable community rules. Community administrators may establish additional requirements, provided they are consistent with applicable law and platform policies.",
      },
      {
        heading: "Third-Party Relationships",
        text: "PharmaLink is not responsible for the independent actions, representations, qualifications, or conduct of other users. Any professional, commercial, educational, or employment relationship you enter into with another user is subject to its own terms and applicable law.",
      },
    ],
  },
  {
    id: "jobs",
    title: "7. Jobs, Internships and Opportunities",
    content: [
      {
        heading: "Opportunity Listings",
        text: "Job and internship listings may be submitted by employers, recruiters, organizations, or other permitted users. Listing availability, accuracy, eligibility requirements, compensation, and recruitment decisions may be determined by the relevant provider.",
      },
      {
        heading: "No Guarantee of Employment",
        text: "PharmaLink does not guarantee that a listing will lead to an interview, offer, placement, or employment. Applicants should independently verify the identity of employers, the legitimacy of opportunities, and any requests for payment or sensitive information.",
      },
      {
        heading: "Recruiter Responsibilities",
        text: "Users publishing opportunities must provide truthful descriptions, comply with applicable employment and advertising laws, and avoid discriminatory, deceptive, or fraudulent recruitment practices.",
      },
    ],
  },
  {
    id: "research",
    title: "8. Research and Healthcare Information",
    content: [
      {
        heading: "Research Contributions",
        text: "Users sharing research, publications, educational material, or scientific discussions are responsible for the accuracy, permissions, attribution, and appropriate context of their contributions.",
      },
      {
        heading: "No Substitute for Professional Advice",
        text: "Information shared on PharmaLink is provided for general educational, informational, and professional networking purposes. It is not a substitute for independent scientific evaluation, medical advice, diagnosis, treatment, or advice from a qualified healthcare professional.",
      },
      {
        heading: "Responsible Sharing",
        text: "Do not publish confidential patient information, identifiable health information, protected research data, or other restricted material without a valid legal basis and all necessary permissions. Users must comply with applicable privacy, research ethics, and professional requirements.",
      },
    ],
  },
  {
    id: "privacy",
    title: "9. Privacy and Data Protection",
    content: [
      {
        heading: "How Information Is Handled",
        text: "PharmaLink processes personal information in connection with account creation, profile management, professional networking, platform security, communications, and service delivery, subject to applicable law and the platform's Privacy Policy.",
      },
      {
        heading: "Your Responsibilities",
        text: "You should share only information you have a right to disclose. Do not publish another person's personal or confidential information without an appropriate legal basis or permission where required.",
      },
      {
        heading: "Additional Information",
        text: "The Privacy Policy explains the categories of information collected, the purposes of processing, applicable sharing practices, retention, and the choices or rights available to users. Please review it before using the platform.",
      },
    ],
  },
  {
    id: "third-party",
    title: "10. Third-Party Services and Links",
    content: [
      {
        heading: "External Websites",
        text: "PharmaLink may provide links to external websites, recruitment portals, educational resources, or services operated by third parties. These services may have their own terms, privacy policies, and practices.",
      },
      {
        heading: "Independent Providers",
        text: "Unless expressly stated otherwise, PharmaLink does not control third-party websites or independently guarantee their content, availability, security, or accuracy. Your interactions with those services are governed by the applicable third-party terms and law.",
      },
    ],
  },
  {
    id: "moderation",
    title: "11. Moderation, Suspension and Termination",
    content: [
      {
        heading: "Policy Enforcement",
        text: "Where reasonably necessary and permitted by law, PharmaLink may review reported content, investigate suspected violations, remove or restrict content, limit features, or suspend accounts. Decisions will take account of the circumstances and any applicable legal obligations.",
      },
      {
        heading: "Account Closure",
        text: "You may stop using the platform and request account closure through the available account controls or support channels. Certain information may be retained where necessary or permitted for legal compliance, security, dispute resolution, and legitimate operational purposes.",
      },
      {
        heading: "Appeals and Reports",
        text: "If you believe that content or account action was handled incorrectly, you may contact PharmaLink through its designated support channel. Any available review or appeal process will be subject to the applicable platform procedures.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "12. Disclaimers and Limitation of Liability",
    content: [
      {
        heading: "Service Availability",
        text: "To the extent permitted by law, the platform is provided on an as-available basis. PharmaLink does not guarantee uninterrupted access, error-free operation, the accuracy of every user submission, or the continued availability of any particular feature.",
      },
      {
        heading: "User-Generated Information",
        text: "Content posted by users represents the views and responsibility of its authors and does not necessarily reflect the views of PharmaLink. Users should independently evaluate information before relying on it.",
      },
      {
        heading: "Liability",
        text: "Nothing in this Agreement excludes or limits any liability, warranty, or consumer right that cannot lawfully be excluded or limited. Subject to that requirement, any limitation of liability will apply only to the extent permitted under applicable law.",
      },
    ],
  },
  {
    id: "indemnity",
    title: "13. Responsibility for Violations",
    content: [
      {
        heading: "Compliance with the Agreement",
        text: "You are responsible for your use of PharmaLink and for complying with applicable law and these terms. Where permitted by law, you may be responsible for losses or claims caused by your unlawful conduct, infringement of third-party rights, or material breach of this Agreement.",
      },
      {
        heading: "Fair Application",
        text: "Nothing in this section creates an obligation to indemnify another party where such an obligation would be prohibited by applicable law. The scope and enforcement of any responsibility under this section remain subject to applicable law.",
      },
    ],
  },
  {
    id: "changes",
    title: "14. Changes to This Agreement",
    content: [
      {
        heading: "Updates",
        text: "PharmaLink may revise this Agreement to reflect changes in the platform, its features, applicable law, or operational requirements. Where required, notice of material changes will be provided through the platform, by email, or through another appropriate channel.",
      },
      {
        heading: "Effective Date",
        text: "The revised Agreement will take effect on the date stated in the updated version or as otherwise communicated. Where applicable law requires affirmative consent, PharmaLink will obtain that consent before applying the relevant changes.",
      },
    ],
  },
  {
    id: "law",
    title: "15. Governing Law and Disputes",
    content: [
      {
        heading: "Applicable Law",
        text: "This Agreement is subject to applicable law. The specific governing law and competent forum must be identified in the final published version in accordance with PharmaLink's legal structure and applicable legal requirements.",
      },
      {
        heading: "Resolving Concerns",
        text: "If you have a concern about these terms or your use of PharmaLink, please contact the platform through its official support channel so that the matter can be reviewed. Nothing in this section limits any mandatory rights or remedies available under applicable law.",
      },
    ],
  },
  {
    id: "contact",
    title: "16. Contact Information",
    content: [
      {
        heading: "Questions About These Terms",
        text: "If you have questions about this User Agreement, need to report a concern, or wish to request clarification, contact PharmaLink using the official contact details published on the platform.",
      },
      {
        heading: "Keep Your Information Current",
        text: "Please check this page periodically for updates. The effective date and any applicable notices should be reviewed before relying on a particular version of this Agreement.",
      },
    ],
  },
];

export default function UserAgreement() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8f7] font-sans text-[#172b39]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#e5e9e7] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#006c50] text-sm font-extrabold text-white">
              P
            </span>
            <span className="text-base font-extrabold tracking-tight">
              Pharma<span className="text-[#008565]">Link</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#52616b] md:flex">
            <Link to="/" className="transition hover:text-[#007653]">
              Home
            </Link>
            <Link to="/about" className="transition hover:text-[#007653]">
              About
            </Link>
            <Link to="/feed" className="transition hover:text-[#007653]">
              Network
            </Link>
            <Link to="/register" className="transition hover:text-[#007653]">
              Join PharmaLink
            </Link>
          </nav>

          <Link
            to="/feed"
            className="hidden items-center gap-2 rounded-md bg-[#006c50] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#00583f] sm:inline-flex"
          >
            Explore network <ArrowRight size={14} />
          </Link>
        </div>
      </header>

      {/* Page title */}
      <section className="border-b border-[#e7e4df] bg-[#f0ede8]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-[#61717b] transition hover:text-[#007653]"
          >
            <ArrowLeft size={14} /> Back to PharmaLink
          </Link>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#007653]">
                <FileText size={15} /> Legal documentation
              </div>

              <h1 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                User Agreement
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#61717b] sm:text-base">
                The terms governing your access to PharmaLink and your
                participation in our professional pharmaceutical community.
              </p>
            </div>

            <div className="shrink-0 text-xs leading-6 text-[#697780]">
              <p>Document type</p>
              <p className="font-bold text-[#172b39]">Platform Terms</p>
              <p className="mt-1">Last updated: October 10, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introductory notice */}
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <div className="flex gap-4 rounded-xl border border-[#d5e9e1] bg-[#eaf6f1] p-5 sm:p-6">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-[#007653] shadow-sm">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-[#145c47]">
              Please read this agreement carefully
            </h2>
            <p className="mt-1.5 text-xs leading-6 text-[#526c63] sm:text-sm">
              This document explains the rules for using PharmaLink, your
              responsibilities as a member, and how the platform's services
              operate. By using the platform, you agree to the applicable
              terms described below.
            </p>
          </div>
        </div>
      </div>

      {/* Main document */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 lg:py-12">
        {/* Mobile table of contents */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            aria-expanded={mobileTocOpen}
            className="flex w-full items-center justify-between rounded-lg border border-[#e0e7e3] bg-white px-4 py-3 text-sm font-bold"
          >
            <span className="flex items-center gap-2">
              <Menu size={17} className="text-[#007653]" />
              Table of contents
            </span>
            {mobileTocOpen ? (
              <X size={17} />
            ) : (
              <ChevronDown size={17} />
            )}
          </button>

          {mobileTocOpen && (
            <nav className="mt-2 rounded-lg border border-[#e0e7e3] bg-white p-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMobileTocOpen(false)}
                  className="block rounded-md px-3 py-2 text-xs leading-5 text-[#52616b] transition hover:bg-[#edf7f3] hover:text-[#007653]"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Desktop table of contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-[#e4e9e6] bg-white p-5">
            <div className="mb-4 border-b border-[#e9eeeb] pb-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#007653]">
                On this page
              </p>
              <h2 className="mt-2 text-lg font-extrabold">
                Contents
              </h2>
            </div>

            <nav className="max-h-[calc(100vh-220px)] space-y-1 overflow-y-auto pr-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-md px-3 py-2 text-xs leading-5 text-[#61717b] transition hover:bg-[#edf7f3] hover:text-[#007653]"
                >
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="mt-5 rounded-lg bg-[#edf7f3] p-4">
              <ShieldCheck size={20} className="text-[#007653]" />
              <p className="mt-2 text-xs font-bold text-[#145c47]">
                Your professional community
              </p>
              <p className="mt-1 text-[11px] leading-5 text-[#61776e]">
                Help keep PharmaLink respectful, useful, and trustworthy.
              </p>
            </div>
          </div>
        </aside>

        {/* Agreement content */}
        <article className="min-w-0 space-y-6">
          <div className="rounded-xl border border-[#e4e9e6] bg-white p-5 sm:p-8">
            <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#007653]">
              <FileText size={14} /> Agreement overview
            </div>

            <p className="mt-4 text-sm leading-7 text-[#52616b]">
              PharmaLink aims to create a connected professional environment
              for the pharmaceutical ecosystem. These terms establish
              expectations for participation, content sharing, professional
              conduct, privacy, and responsible use of the platform.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#52616b]">
              Please also review the Privacy Policy and any additional
              policies that apply to the features you use.
            </p>
          </div>

          {sections.map((section, index) => (
            <section
              id={section.id}
              key={section.id}
              className="scroll-mt-28 rounded-xl border border-[#e4e9e6] bg-white p-5 sm:p-8"
            >
              <div className="mb-6 flex items-start gap-4 border-b border-[#e9eeeb] pb-5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#eaf6f1] text-xs font-extrabold text-[#007653]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h2 className="text-xl font-extrabold tracking-tight text-[#172b39] sm:text-2xl">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-xs text-[#829099]">
                    PharmaLink User Agreement
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={item.heading}>
                    {itemIndex === 0 && (
                      <div className="mb-3 rounded-r-md border-l-[3px] border-[#008565] bg-[#eef8f4] px-4 py-3">
                        <h3 className="text-sm font-extrabold text-[#145c47]">
                          {item.heading}
                        </h3>
                      </div>
                    )}

                    {itemIndex !== 0 && (
                      <h3 className="mb-2 text-sm font-bold text-[#243b49]">
                        {item.heading}
                      </h3>
                    )}

                    <p className="text-[13px] leading-[1.95] text-[#53636d] sm:text-sm">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Closing note */}
          <div className="rounded-xl border border-[#d5e9e1] bg-[#eaf6f1] p-5 sm:p-7">
            <h2 className="text-base font-extrabold text-[#145c47]">
              Thank you for being part of PharmaLink
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#526c63]">
              We believe that a stronger pharmaceutical community begins with
              responsible participation, meaningful connections, and respect
              for every member.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-[#007653] hover:underline"
            >
              Contact us about this agreement <ArrowRight size={15} />
            </Link>
          </div>

          <div className="px-1 py-3 text-[11px] leading-5 text-[#87939a]">
            This is a draft template for product development and must be
            reviewed and approved for PharmaLink's actual legal structure,
            operations, and applicable jurisdictions before publication.
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="bg-[#142a38] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-[#007653] text-sm font-extrabold">
                  P
                </span>
                <span className="text-sm font-extrabold">
                  PharmaLink
                </span>
              </Link>

              <p className="mt-3 max-w-xs text-xs leading-6 text-white/60">
                A professional network for the pharmaceutical ecosystem.
              </p>
            </div>

            <FooterGroup
              title="Platform"
              links={[
                ["About", "/about"],
                ["Professional Network", "/feed"],
                ["Jobs & Internships", "/jobs"],
                ["Communities", "/communities"],
              ]}
            />

            <FooterGroup
              title="Resources"
              links={[
                ["Help Center", "/help"],
                ["Contact Us", "/contact"],
                ["Accessibility", "/accessibility"],
                ["Community Guidelines", "/community-guidelines"],
              ]}
            />

            <FooterGroup
              title="Legal"
              links={[
                ["User Agreement", "/user-agreement"],
                ["Privacy Policy", "/privacy"],
                ["Cookie Policy", "/cookie-policy"],
                ["Copyright Policy", "/copyright-policy"],
              ]}
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-5 text-[11px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 PharmaLink. All rights reserved.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              Built for the pharmacy community <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h2 className="mb-3 text-xs font-extrabold text-white">{title}</h2>
      <div className="space-y-2.5">
        {links.map(([label, href]) => (
          <Link
            key={label}
            to={href}
            className="block w-fit text-xs text-white/60 transition hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
