
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
  LockKeyhole,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      {
        heading: "About this Privacy Policy",
        text: "PharmaLink is a professional networking platform designed for pharmacy students, pharmacists, researchers, educators, recruiters, healthcare organizations, and other members of the pharmaceutical ecosystem. This Privacy Policy explains how personal information may be collected, used, stored, disclosed, and protected when you use our website and services.",
      },
      {
        heading: "Our Approach to Privacy",
        text: "We aim to handle personal information responsibly, transparently, and in accordance with applicable data protection laws. We seek to collect information relevant to providing and improving the platform and to give users appropriate choices regarding their information.",
      },
      {
        heading: "Scope",
        text: "This policy applies to information processed through PharmaLink's website, user accounts, professional profiles, networking features, job and internship services, research resources, communities, and related communications. Additional notices may apply to particular features.",
      },
    ],
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: [
      {
        heading: "Information You Provide",
        text: "When you create an account or use PharmaLink, you may provide your name, email address, profile photograph, password credentials, educational background, employment history, professional qualifications, skills, interests, and other account information. The information collected depends on the features you choose to use.",
      },
      {
        heading: "Profile and Professional Information",
        text: "You may add information about your university, employer, professional experience, research publications, certifications, projects, and career interests. You decide what information to include in your profile, subject to fields that may be required to provide a particular service.",
      },
      {
        heading: "Content and Communications",
        text: "We may process posts, comments, messages, uploaded files, community contributions, support requests, feedback, and other information you submit through the platform. Please avoid including sensitive or confidential information unless the feature is designed for that purpose and you have an appropriate legal basis to share it.",
      },
      {
        heading: "Information Collected Automatically",
        text: "When supported by the platform, technical information may include device type, browser type, IP address, operating system, access timestamps, pages visited, referring URLs, and diagnostic or security logs. The categories collected depend on the services and technologies in use.",
      },
      {
        heading: "Information From Other Sources",
        text: "If enabled and permitted, we may receive information from organizations, recruiters, professional partners, or services you choose to connect with PharmaLink. We will handle such information according to applicable law and any relevant notices provided at the time of collection.",
      },
    ],
  },
  {
    id: "purposes",
    title: "3. How We Use Your Information",
    content: [
      {
        heading: "Account and Platform Operations",
        text: "We use relevant information to create and manage accounts, maintain professional profiles, authenticate users, deliver networking features, provide support, and operate the services you request.",
      },
      {
        heading: "Professional Networking",
        text: "Profile and activity information may be used to help users discover professional connections, relevant communities, educational resources, research contributions, and career opportunities, according to the platform's available features and your settings.",
      },
      {
        heading: "Platform Improvement",
        text: "Where permitted, we may use technical information, feedback, and aggregated usage data to understand performance, identify errors, improve usability, develop features, and evaluate how users interact with PharmaLink.",
      },
      {
        heading: "Communications",
        text: "We may send service-related messages about account activity, security, changes to policies, requested support, and important platform updates. Marketing or optional promotional communications will be handled in accordance with applicable law and available preferences.",
      },
      {
        heading: "Security and Legal Compliance",
        text: "Information may be processed to detect fraud, investigate misuse, protect users and platform systems, enforce applicable policies, respond to lawful requests, and comply with legal obligations.",
      },
    ],
  },
  {
    id: "legal-basis",
    title: "4. Legal Bases for Processing",
    content: [
      {
        heading: "Applicable Legal Grounds",
        text: "Depending on your location and the activity involved, PharmaLink may process personal information to perform a contract with you, comply with legal obligations, pursue legitimate interests where permitted, or obtain your consent where required.",
      },
      {
        heading: "Consent",
        text: "Where processing relies on consent, you may withdraw that consent as permitted by law. Withdrawal does not affect the lawfulness of processing carried out before withdrawal. Some services may no longer be available if the information is necessary to provide them.",
      },
      {
        heading: "Transparency",
        text: "The legal basis applicable to a particular activity depends on the circumstances, the type of information involved, and the laws that apply. Where required, additional information will be provided at the point of collection.",
      },
    ],
  },
  {
    id: "visibility",
    title: "5. Profile Visibility and Public Information",
    content: [
      {
        heading: "Information Visible to Other Users",
        text: "PharmaLink is a professional networking platform. Information you choose to publish on a profile, post, comment, or community page may be visible to other users according to the feature's design and your available settings.",
      },
      {
        heading: "Public Content",
        text: "Content shared in publicly accessible areas may be viewed, copied, indexed, or shared by people outside PharmaLink. Removing content from the platform may not remove copies already made by other users or external services.",
      },
      {
        heading: "Your Choices",
        text: "Before publishing information, review the intended audience and available privacy settings. Do not post private contact information, confidential employer information, identifiable patient data, or another person's information without an appropriate legal basis and any required permissions.",
      },
    ],
  },
  {
    id: "sharing",
    title: "6. How We Share Information",
    content: [
      {
        heading: "With Other Users",
        text: "Information included in your public profile, posts, comments, or other shared contributions may be accessible to other users as part of the platform's networking features.",
      },
      {
        heading: "Service Providers",
        text: "We may use third-party providers to support hosting, authentication, security, customer support, analytics, communications, and other operational functions. Where they process personal information on our behalf, appropriate contractual and legal safeguards should apply.",
      },
      {
        heading: "Employers and Recruiters",
        text: "If you apply for an opportunity, submit information to a recruiter, or use an employment-related feature, relevant information may be shared with the employer, recruiter, or organization involved, as explained by that feature.",
      },
      {
        heading: "Legal and Safety Reasons",
        text: "Information may be disclosed where required or permitted by law, in response to valid legal process, or where reasonably necessary to investigate suspected fraud, protect rights, address security incidents, or protect the safety of users and others.",
      },
      {
        heading: "Business Transactions",
        text: "If PharmaLink undergoes a merger, restructuring, acquisition, financing, or transfer of relevant assets, personal information may be involved in that transaction, subject to applicable law and appropriate safeguards.",
      },
      {
        heading: "No Unspecified Sale Commitment",
        text: "The actual sharing and disclosure practices of PharmaLink must be accurately described based on its operations. This policy does not authorize any practice that is prohibited by applicable law or inconsistent with a commitment made to users.",
      },
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies and Similar Technologies",
    content: [
      {
        heading: "What These Technologies Do",
        text: "Cookies, local storage, pixels, and similar technologies may be used, where implemented, to maintain sessions, remember preferences, support security, measure performance, and improve the user experience.",
      },
      {
        heading: "Essential Technologies",
        text: "Technologies necessary for authentication, security, or core functionality may be required for the service to operate. Disabling them may affect sign-in, navigation, or other features.",
      },
      {
        heading: "Optional Technologies",
        text: "Analytics, personalization, or advertising technologies may be subject to consent requirements and preference controls under applicable law. Their use should reflect the technologies actually deployed by PharmaLink.",
      },
      {
        heading: "Managing Preferences",
        text: "You may be able to manage cookies through browser settings or a platform preference tool, where available. Additional information about specific technologies and their purposes should be provided in the Cookie Policy if PharmaLink uses them.",
      },
    ],
  },
  {
    id: "retention",
    title: "8. Data Retention",
    content: [
      {
        heading: "How Long Information Is Kept",
        text: "We aim to retain personal information only for as long as reasonably necessary for the purposes described in this policy, including account operation, service delivery, security, dispute resolution, and compliance with legal obligations.",
      },
      {
        heading: "Retention Factors",
        text: "Retention periods may depend on the type of information, whether your account remains active, the purpose for which the information was collected, applicable legal requirements, and the need to establish or defend legal claims.",
      },
      {
        heading: "Deletion and Backups",
        text: "When information is deleted, residual copies may remain temporarily in protected backups or records retained for legitimate legal or security reasons. Such information should be handled according to applicable retention and deletion procedures.",
      },
    ],
  },
  {
    id: "security",
    title: "9. Data Security",
    content: [
      {
        heading: "Safeguards",
        text: "PharmaLink should implement reasonable technical and organizational safeguards appropriate to the information processed and the risks involved. Depending on the system, these may include access controls, authentication protections, secure communications, monitoring, and backup procedures.",
      },
      {
        heading: "Your Role in Security",
        text: "Use a strong, unique password, keep your credentials confidential, sign out of shared devices, and promptly report suspected unauthorized access. Do not share credentials or attempt to access another person's account.",
      },
      {
        heading: "Limitations",
        text: "No website, application, or transmission method can be guaranteed to be completely secure. We will handle security incidents in accordance with applicable legal requirements and relevant incident-response procedures.",
      },
    ],
  },
  {
    id: "rights",
    title: "10. Your Privacy Rights and Choices",
    content: [
      {
        heading: "Access and Correction",
        text: "Depending on applicable law, you may have the right to request access to personal information held about you and ask for inaccurate or incomplete information to be corrected.",
      },
      {
        heading: "Deletion and Restriction",
        text: "You may have the right to request deletion, restriction, or objection to certain processing activities, subject to legal exceptions and the circumstances of the request.",
      },
      {
        heading: "Portability and Consent",
        text: "Where provided by applicable law, you may be able to request a copy of certain information in a portable format or withdraw consent for processing that relies on consent.",
      },
      {
        heading: "Marketing Preferences",
        text: "If promotional communications are offered, you may be able to opt out through the message itself or the available account settings. Service-related communications may still be sent where necessary.",
      },
      {
        heading: "Making a Request",
        text: "To exercise a privacy right, contact PharmaLink through its official support channel. We may need to verify your identity before responding and will handle requests within the timeframes required by applicable law.",
      },
    ],
  },
  {
    id: "international",
    title: "11. International Data Transfers",
    content: [
      {
        heading: "Processing Locations",
        text: "Depending on the infrastructure and service providers used, personal information may be processed or stored in locations different from your own.",
      },
      {
        heading: "Transfer Safeguards",
        text: "Where information is transferred across borders, PharmaLink should apply any safeguards, contractual protections, approvals, or other requirements mandated by applicable data protection laws.",
      },
    ],
  },
  {
    id: "children",
    title: "12. Children's Privacy",
    content: [
      {
        heading: "Age Requirements",
        text: "PharmaLink is intended for a professional community. Access to the platform is subject to applicable age requirements, contractual capacity rules, and any additional restrictions communicated during registration.",
      },
      {
        heading: "Information About Minors",
        text: "We do not intend to collect personal information from children in circumstances where doing so would violate applicable law. If you believe that a child has provided information inappropriately, contact PharmaLink so the matter can be reviewed.",
      },
    ],
  },
  {
    id: "third-party",
    title: "13. Third-Party Services",
    content: [
      {
        heading: "External Links",
        text: "The platform may link to external websites, research publications, recruitment portals, educational resources, or services operated by third parties. Their information practices are governed by their own policies.",
      },
      {
        heading: "Independent Services",
        text: "PharmaLink does not control all third-party privacy practices. Review the relevant provider's privacy notice before submitting personal information or using an external service.",
      },
    ],
  },
  {
    id: "changes",
    title: "14. Changes to This Privacy Policy",
    content: [
      {
        heading: "Policy Updates",
        text: "We may update this Privacy Policy to reflect changes in platform functionality, information practices, legal requirements, or operational needs.",
      },
      {
        heading: "Notification of Changes",
        text: "Where required by law, we will provide notice of material changes through the platform, by email, or through another appropriate channel. Where affirmative consent is legally required, we will seek it before applying the relevant change.",
      },
      {
        heading: "Reviewing the Current Version",
        text: "The effective date or last-updated date should be displayed on this page. We encourage you to review this policy periodically to understand the practices applicable to your use of PharmaLink.",
      },
    ],
  },
  {
    id: "contact",
    title: "15. Contact and Privacy Requests",
    content: [
      {
        heading: "Questions About Privacy",
        text: "If you have questions about this policy, need to report a privacy concern, or wish to exercise an applicable privacy right, contact PharmaLink using the official contact details published on the platform.",
      },
      {
        heading: "Privacy Contact Details",
        text: "Before publication, PharmaLink should provide a monitored contact email or support channel for privacy requests, along with any legally required company identity, address, or data protection contact information.",
      },
      {
        heading: "Complaints and Regulatory Rights",
        text: "Depending on your location, you may have the right to raise a complaint with the relevant data protection authority or other competent regulator.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8f7] font-sans text-[#172b39]">
      {/* HEADER */}
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
            to="/register"
            className="hidden items-center gap-2 rounded-md bg-[#006c50] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#00583f] sm:inline-flex"
          >
            Join PharmaLink <ArrowRight size={14} />
          </Link>
        </div>
      </header>

      {/* TITLE BANNER */}
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
                <ShieldCheck size={15} /> Privacy and data protection
              </div>

              <h1 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#61717b] sm:text-base">
                Learn how PharmaLink may collect, use, disclose, and protect
                your personal information when you use our professional
                networking platform.
              </p>
            </div>

            <div className="shrink-0 text-xs leading-6 text-[#697780]">
              <p>Document type</p>
              <p className="font-bold text-[#172b39]">
                Privacy and Data Protection
              </p>
              <p className="mt-1">Last updated: October 10, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY NOTICE */}
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <div className="flex gap-4 rounded-xl border border-[#d5e9e1] bg-[#eaf6f1] p-5 sm:p-6">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-[#007653] shadow-sm">
            <LockKeyhole size={22} />
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-[#145c47]">
              Your information deserves responsible handling
            </h2>
            <p className="mt-1.5 text-xs leading-6 text-[#526c63] sm:text-sm">
              This policy describes the intended privacy practices associated
              with PharmaLink. The final published policy should reflect the
              information we actually collect, the technologies we use, and
              the rights available to users under applicable law.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 lg:py-12">
        {/* MOBILE CONTENTS */}
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

        {/* DESKTOP CONTENTS */}
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
                Privacy matters
              </p>
              <p className="mt-1 text-[11px] leading-5 text-[#61776e]">
                Understand your choices and how your information may be used.
              </p>
            </div>
          </div>
        </aside>

        {/* POLICY DOCUMENT */}
        <article className="min-w-0 space-y-6">
          <div className="rounded-xl border border-[#e4e9e6] bg-white p-5 sm:p-8">
            <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#007653]">
              <FileText size={14} /> Policy overview
            </div>

            <p className="mt-4 text-sm leading-7 text-[#52616b]">
              Your privacy is an important part of building a trustworthy
              professional community. This policy outlines the categories of
              information that may be processed through PharmaLink, the
              purposes of processing, how information may be shared, and the
              privacy choices available to you.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#52616b]">
              Please also review the User Agreement and Cookie Policy for
              additional information about using the platform.
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
                    PharmaLink Privacy Policy
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={item.heading}>
                    {itemIndex === 0 ? (
                      <div className="mb-3 rounded-r-md border-l-[3px] border-[#008565] bg-[#eef8f4] px-4 py-3">
                        <h3 className="text-sm font-extrabold text-[#145c47]">
                          {item.heading}
                        </h3>
                      </div>
                    ) : (
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

          {/* CLOSING NOTE */}
          <div className="rounded-xl border border-[#d5e9e1] bg-[#eaf6f1] p-5 sm:p-7">
            <h2 className="text-base font-extrabold text-[#145c47]">
              Questions about your privacy?
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#526c63]">
              If you have questions about this policy or wish to make a privacy
              request, please contact PharmaLink through its official support
              channel.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-[#007653] hover:underline"
            >
              Contact PharmaLink <ArrowRight size={15} />
            </Link>
          </div>

          <div className="px-1 py-3 text-[11px] leading-5 text-[#87939a]">
            This is a draft privacy policy. Before publication, verify that
            it accurately describes PharmaLink's actual data collection,
            storage, sharing, retention, security practices, and applicable
            legal obligations.
          </div>
        </article>
      </div>

      {/* FOOTER */}
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
                ["Privacy Policy", "/privacy-policy"],
                ["Cookie Policy", "/cookie-policy"],
                ["Copyright Policy", "/copyright-policy"],
              ]}
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-5 text-[11px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 PharmaLink. All rights reserved.</p>
            <Link
              to="/user-agreement"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              User Agreement <ArrowRight size={13} />
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
