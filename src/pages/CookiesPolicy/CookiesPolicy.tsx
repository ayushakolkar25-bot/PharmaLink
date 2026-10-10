
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Cookie,
  ShieldCheck,
  X,
} from "lucide-react";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "technologies", title: "2. What technologies are used?" },
  { id: "purposes", title: "3. What are these technologies used for?" },
  { id: "third-parties", title: "4. Third-party technologies" },
  { id: "your-choices", title: "5. Your choices" },
  { id: "advertising", title: "6. Targeted advertising" },
  { id: "browser-controls", title: "7. Browser controls" },
  { id: "do-not-track", title: "8. Do Not Track" },
  { id: "resources", title: "9. Helpful resources" },
];

type TableRow = {
  name: string;
  description: string;
};

const technologyRows: TableRow[] = [
  {
    name: "Essential technologies",
    description:
      "These technologies support core platform functions such as authentication, account security, session management, navigation, and protection against fraudulent activity. They may be necessary for PharmaLink to provide services you request.",
  },
  {
    name: "Preferences",
    description:
      "Where implemented, these technologies remember settings such as display preferences, language choices, or other options so that your experience remains consistent between visits.",
  },
  {
    name: "Analytics",
    description:
      "Where enabled, analytics technologies help us understand how visitors use the platform, identify technical problems, measure performance, and improve page layouts and features. Their use is subject to applicable consent requirements.",
  },
  {
    name: "Security",
    description:
      "Security technologies may help identify suspicious sign-in attempts, protect accounts, detect abuse, prevent automated attacks, and maintain the integrity of PharmaLink systems.",
  },
  {
    name: "Advertising",
    description:
      "If advertising features are introduced, related technologies may help measure campaigns or manage advertising preferences. Non-essential advertising technologies should only be used in accordance with applicable law and required user choices.",
  },
  {
    name: "Social and embedded content",
    description:
      "If the platform includes embedded videos, external content, or social integrations, the relevant provider may use its own technologies when that content is loaded. Those providers' practices may be governed by their own privacy and cookie policies.",
  },
];

const purposeRows: TableRow[] = [
  {
    name: "Authentication",
    description:
      "Maintain sign-in sessions, recognize an authenticated account, support secure navigation, and help users access features available to them.",
  },
  {
    name: "Preferences",
    description:
      "Remember supported choices and settings so you do not need to configure the same options repeatedly.",
  },
  {
    name: "Security and integrity",
    description:
      "Detect suspicious activity, protect accounts, investigate abuse, help prevent fraudulent requests, and maintain the reliability of the platform.",
  },
  {
    name: "Performance and analytics",
    description:
      "Understand page performance, identify errors, measure general usage patterns, and improve the accessibility, usability, and reliability of the service.",
  },
  {
    name: "Personalization",
    description:
      "Where enabled and permitted, use relevant preferences and interactions to present more useful content, professional resources, or recommendations.",
  },
  {
    name: "Advertising measurement",
    description:
      "If advertising is supported, measure campaign effectiveness and apply available advertising preferences in accordance with applicable law and consent requirements.",
  },
  {
    name: "External content",
    description:
      "Enable third-party content or integrations that users choose to access. Loading such content may allow the external provider to receive technical information about the request.",
  },
];

function PolicyTable({
  caption,
  rows,
}: {
  caption: string;
  rows: TableRow[];
}) {
  return (
    <div className="mt-5 overflow-hidden rounded-lg border border-[#dce3df]">
      <div className="border-b border-[#dce3df] bg-white px-4 py-3 text-xs font-bold text-[#52616b]">
        {caption}
      </div>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-[#f7f8f7]">
            <th className="w-[32%] border-b border-[#e1e7e3] px-3 py-3 text-[11px] font-extrabold text-[#243b49] sm:w-[27%] sm:px-5">
              Technology
            </th>
            <th className="border-b border-[#e1e7e3] px-3 py-3 text-[11px] font-extrabold text-[#243b49] sm:px-5">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.name}
              className={
                index % 2 === 1 ? "bg-[#f2f4f5]" : "bg-white"
              }
            >
              <th className="border-b border-[#e1e7e3] px-3 py-4 align-top text-[11px] font-bold leading-5 text-[#007653] sm:px-5 sm:text-xs">
                {row.name}
              </th>
              <td className="border-b border-[#e1e7e3] px-3 py-4 align-top text-xs leading-[1.85] text-[#53636d] sm:px-5 sm:text-[13px]">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-4 text-xl font-semibold leading-snug tracking-tight text-[#263b48] sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-4 text-[13px] leading-[1.95] text-[#53636d] sm:text-sm">
        {children}
      </div>
    </section>
  );
}

function InfoPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-r-md border-l-[3px] border-[#008565] bg-[#eaf6f1] px-4 py-4 sm:px-5">
      <h3 className="mb-2 text-sm font-bold text-[#145c47]">{title}</h3>
      <div className="text-xs leading-6 text-[#526c63] sm:text-[13px]">
        {children}
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-extrabold text-white">{title}</h3>
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

export default function CookiesPolicy() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#172b39]">
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

          <nav className="hidden items-center gap-6 text-xs font-medium text-[#52616b] lg:flex">
            <Link to="/user-agreement" className="hover:text-[#007653]">
              User Agreement
            </Link>
            <Link to="/privacy-policy" className="hover:text-[#007653]">
              Privacy Policy
            </Link>
            <Link to="/community-guidelines" className="hover:text-[#007653]">
              Community Guidelines
            </Link>
            <Link to="/copyright-policy" className="hover:text-[#007653]">
              Copyright Policy
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
        <div className="mx-auto max-w-7xl px-5 py-9 text-center sm:px-8 sm:py-12">
          <h1 className="text-3xl font-medium tracking-[-0.035em] text-[#202d35] sm:text-4xl lg:text-5xl">
            Cookie Policy
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-[#68757c] sm:text-sm">
            Learn how cookies and similar technologies may support your
            experience on PharmaLink.
          </p>
        </div>
      </section>

      {/* DOCUMENT CONTENT */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-[#61717b] transition hover:text-[#007653]"
          >
            <ArrowLeft size={14} /> Back to PharmaLink
          </Link>

          <div className="mb-7 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#7a878d]">
            <span className="inline-flex items-center gap-2">
              <Cookie size={15} className="text-[#007653]" />
              PharmaLink Legal
            </span>
            <span>Last updated: October 10, 2026</span>
          </div>

          <p className="mb-4 text-[13px] leading-[1.95] text-[#53636d] sm:text-sm">
            PharmaLink uses, or may use as features are introduced, cookies
            and similar technologies to support account access, protect the
            platform, remember preferences, and understand how our services
            perform. This Cookie Policy explains these technologies, the
            purposes for which they may be used, and the choices that may be
            available to you.
          </p>

          <p className="mb-7 text-[13px] leading-[1.95] text-[#53636d] sm:text-sm">
            The technologies actually used depend on the features and
            infrastructure deployed by PharmaLink. This policy should be read
            alongside our{" "}
            <Link
              to="/privacy-policy"
              className="font-medium text-[#0876c9] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="/user-agreement"
              className="font-medium text-[#0876c9] hover:underline"
            >
              User Agreement
            </Link>
            .
          </p>

          <InfoPanel title="A note about your privacy">
            Essential technologies may be needed for the platform to work.
            Non-essential technologies should be handled according to
            applicable consent requirements and the choices offered to users.
          </InfoPanel>

          {/* TABLE OF CONTENTS */}
          <div className="my-8 rounded-lg border border-[#e1e6e3] bg-white p-4 sm:p-5">
            <button
              type="button"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              aria-expanded={mobileTocOpen}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-sm font-bold text-[#243b49]">
                On this page
              </span>
              {mobileTocOpen ? (
                <X size={17} className="text-[#007653]" />
              ) : (
                <ChevronDown size={17} className="text-[#007653]" />
              )}
            </button>

            <nav
              className={`${
                mobileTocOpen ? "grid" : "hidden"
              } mt-3 grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2`}
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMobileTocOpen(false)}
                  className="rounded px-2 py-2 text-xs text-[#0876c9] transition hover:bg-[#edf7f3] hover:text-[#007653]"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-10">
            {/* 1 */}
            <PolicySection id="introduction" title="Introduction">
              <p>
                Cookies are small data files stored on your device by a
                website. Similar technologies can include local storage,
                pixels, tags, scripts, and other mechanisms that store or
                access information on a device.
              </p>
              <p>
                This policy describes how such technologies may be used in
                connection with PharmaLink's website and professional
                networking services. It does not mean that every technology
                described here is currently deployed.
              </p>
            </PolicySection>

            {/* 2 */}
            <PolicySection
              id="technologies"
              title="What technologies are used?"
            >
              <p>
                Depending on the features available, PharmaLink may use the
                following categories of technologies.
              </p>

              <PolicyTable
                caption="Technology categories"
                rows={technologyRows}
              />

              <p>
                The precise cookies, their providers, and their expiry periods
                depend on the technologies configured for the live platform.
                A detailed cookie inventory should be maintained as part of
                the production implementation.
              </p>
            </PolicySection>

            {/* 3 */}
            <PolicySection
              id="purposes"
              title="What are these technologies used for?"
            >
              <p>
                Technologies can serve different purposes depending on the
                feature, the information processed, and the configuration of
                the service.
              </p>

              <PolicyTable caption="Purposes and functions" rows={purposeRows} />

              <InfoPanel title="Essential versus optional technologies">
                Technologies that are strictly necessary for a service
                requested by the user may be treated differently from
                analytics, personalization, or advertising technologies.
                Where consent is required, optional technologies should not
                be activated before the required consent is obtained.
              </InfoPanel>
            </PolicySection>

            {/* 4 */}
            <PolicySection
              id="third-parties"
              title="What third parties use these technologies in connection with our services?"
            >
              <p>
                PharmaLink may rely on third-party providers for hosting,
                security, authentication, performance measurement, embedded
                content, or other technical services. If a provider places
                or accesses cookies or similar technologies, its role should
                be assessed and disclosed as required by applicable law.
              </p>

              <p>
                Third-party technologies may allow the provider to receive
                technical information, such as browser or device information,
                an IP address, or details of a request. The information
                collected depends on the particular integration.
              </p>

              <p>
                External services operate under their own terms and privacy
                practices where applicable. Users should review those
                policies before interacting with external content.
              </p>

              <InfoPanel title="Third-party transparency">
                PharmaLink should identify relevant providers and link to
                their policies where required. Only providers actually used
                by the live service should be listed in a published cookie
                inventory.
              </InfoPanel>
            </PolicySection>

            {/* 5 */}
            <PolicySection id="your-choices" title="Your choices">
              <p>
                The choices available to you may depend on the technology
                involved, your location, and the features supported by
                PharmaLink.
              </p>

              <h3 className="pt-2 text-base font-semibold text-[#263b48]">
                Cookie preferences
              </h3>
              <p>
                Where a preference tool is provided, you may be able to
                accept or reject non-essential categories and change your
                choices later. Essential technologies may remain active
                when necessary to provide a requested service or maintain
                security.
              </p>

              <h3 className="pt-2 text-base font-semibold text-[#263b48]">
                Account settings
              </h3>
              <p>
                If PharmaLink offers privacy, personalization, or
                communication settings in your account, you can review
                those settings to understand which choices they control.
                Account preferences may not replace consent controls that
                are separately required by law.
              </p>

              <h3 className="pt-2 text-base font-semibold text-[#263b48]">
                Withdrawing consent
              </h3>
              <p>
                Where processing relies on consent, you should be able to
                withdraw it as permitted by law. Withdrawal does not
                invalidate processing carried out before the withdrawal.
              </p>
            </PolicySection>

            {/* 6 */}
            <PolicySection
              id="advertising"
              title="Opt out of targeted advertising"
            >
              <p>
                If PharmaLink introduces targeted advertising or uses
                third-party advertising technologies, the platform should
                explain the available controls and obtain consent where
                required.
              </p>

              <p>
                You may also be able to manage certain advertising
                preferences through your browser, device, or an external
                advertising provider. Those controls vary by service and
                may not apply to every form of advertising or measurement.
              </p>

              <p>
                Any opt-out or consent mechanism offered by PharmaLink
                should clearly explain its scope, how the choice is stored,
                and how it can be changed later.
              </p>
            </PolicySection>

            {/* 7 */}
            <PolicySection id="browser-controls" title="Browser controls">
              <p>
                Most modern browsers allow you to review, block, or delete
                cookies through their settings. You may also be able to
                configure a browser to notify you when a website attempts
                to store a cookie.
              </p>

              <p>
                Blocking or deleting certain cookies may sign you out,
                remove saved preferences, or affect features that depend on
                session information. Browser controls may not manage every
                technology, such as all forms of local storage or external
                embedded content.
              </p>

              <p>
                Consult your browser's official help documentation for
                instructions specific to your browser and device.
              </p>
            </PolicySection>

            {/* 8 */}
            <PolicySection id="do-not-track" title="What is Do Not Track?">
              <p>
                Some browsers provide a Do Not Track setting intended to
                communicate a preference about certain forms of online
                tracking. The meaning and technical handling of this signal
                are not consistent across all services.
              </p>

              <p>
                PharmaLink's response to such signals depends on its actual
                technical implementation and applicable legal requirements.
                Where required, recognized consent and preference mechanisms
                should be used to manage optional technologies.
              </p>
            </PolicySection>

            {/* 9 */}
            <PolicySection id="resources" title="Other helpful resources">
              <p>
                These resources can help you understand the related policies
                and make informed choices when using PharmaLink.
              </p>

              <div className="space-y-3 rounded-lg border border-[#e1e6e3] bg-white p-4 sm:p-5">
                <ResourceLink
                  to="/privacy-policy"
                  title="Privacy Policy"
                  description="How personal information may be handled."
                />
                <ResourceLink
                  to="/user-agreement"
                  title="User Agreement"
                  description="The terms governing your use of PharmaLink."
                />
                <ResourceLink
                  to="/contact"
                  title="Contact PharmaLink"
                  description="Get in touch with questions about privacy or cookies."
                />
              </div>
            </PolicySection>
          </div>

          {/* CLOSING NOTE */}
          <div className="mt-12 rounded-lg border border-[#d5e9e1] bg-[#eaf6f1] p-5 sm:p-6">
            <div className="flex gap-3">
              <ShieldCheck
                size={23}
                className="mt-0.5 shrink-0 text-[#007653]"
              />
              <div>
                <h2 className="text-sm font-bold text-[#145c47]">
                  Questions about cookies?
                </h2>
                <p className="mt-2 text-xs leading-6 text-[#526c63] sm:text-[13px]">
                  If you have questions about the use of cookies or similar
                  technologies on PharmaLink, contact us through our official
                  support channel.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#007653] hover:underline"
                >
                  Contact us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[11px] leading-5 text-[#87939a]">
            This is a draft policy template. Before publication, verify the
            actual technologies deployed, cookie names and durations, third
            parties, consent controls, and applicable legal requirements.
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#142a38] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-[#007653] text-sm font-extrabold">
                  P
                </span>
                <span className="text-sm font-extrabold">PharmaLink</span>
              </Link>
              <p className="mt-3 max-w-xs text-xs leading-6 text-white/60">
                A professional network for the pharmaceutical ecosystem.
              </p>
            </div>

            <FooterColumn
              title="Platform"
              links={[
                ["About", "/about"],
                ["Professional Network", "/feed"],
                ["Jobs & Internships", "/jobs"],
                ["Communities", "/communities"],
              ]}
            />

            <FooterColumn
              title="Resources"
              links={[
                ["Help Center", "/help"],
                ["Contact Us", "/contact"],
                ["Accessibility", "/accessibility"],
                ["Community Guidelines", "/community-guidelines"],
              ]}
            />

            <FooterColumn
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
              to="/privacy-policy"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              Privacy Policy <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ResourceLink({
  to,
  title,
  description,
}: {
  to: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="group flex items-start justify-between gap-4 rounded-md p-2 transition hover:bg-[#edf7f3]"
    >
      <div>
        <h3 className="text-xs font-bold text-[#0876c9] group-hover:text-[#007653]">
          {title}
        </h3>
        <p className="mt-1 text-[11px] leading-5 text-[#697780]">
          {description}
        </p>
      </div>
      <ArrowRight
        size={15}
        className="mt-1 shrink-0 text-[#829099] transition group-hover:translate-x-0.5 group-hover:text-[#007653]"
      />
    </Link>
  );
}
