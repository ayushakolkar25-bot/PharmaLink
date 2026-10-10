
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Accessibility as AccessibilityIcon,
  ArrowRight,
  MessageSquareText,
  Target,
  BookOpen,
  Eye,
  Keyboard,
  Monitor,
  FileText,
  Headphones,
} from "lucide-react";

function ResourceLink({
  to,
  title,
  description,
}: {
  to: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="py-2">
      <Link
        to={to}
        className="text-xs font-medium leading-5 text-[#0876bd] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007653]"
      >
        {title}
      </Link>
      {description && (
        <p className="mt-0.5 text-xs leading-5 text-[#53636d]">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg bg-[#f6f8f9] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-[#007653] shadow-sm"
        >
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-base font-medium leading-snug text-[#26343c]">
            {title}
          </h2>
          <div className="mt-3 space-y-4 text-xs leading-[1.9] text-[#53636d] sm:text-[13px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const groups = [
    {
      title: "Platform",
      links: [
        ["About", "/about"],
        ["Professional Network", "/feed"],
        ["Jobs & Internships", "/jobs"],
        ["Communities", "/communities"],
      ],
    },
    {
      title: "Resources",
      links: [
        ["Help Center", "/help"],
        ["Contact Us", "/contact"],
        ["Accessibility", "/accessibility"],
      ],
    },
    {
      title: "Legal",
      links: [
        ["User Agreement", "/user-agreement"],
        ["Privacy Policy", "/privacy-policy"],
        ["Cookie Policy", "/cookie-policy"],
        ["Copyright Policy", "/copyright-policy"],
        ["Community Guidelines", "/community-guidelines"],
      ],
    },
  ];

  return (
    <footer className="border-t border-[#e5e8e6] bg-white px-5 py-7 sm:px-8">
      <div className="mx-auto max-w-[1000px]">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-[#007653] text-sm font-extrabold text-white">
                P
              </span>
              <span className="text-sm font-extrabold text-[#172b39]">
                Pharma<span className="text-[#008565]">Link</span>
              </span>
            </Link>

            <p className="mt-3 max-w-[210px] text-xs leading-6 text-[#718088]">
              A professional network for the pharmaceutical ecosystem.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-3 text-xs font-bold text-[#26343c]">
                {group.title}
              </h2>

              <nav aria-label={`${group.title} links`} className="space-y-2.5">
                {group.links.map(([label, href]) => (
                  <Link
                    key={label}
                    to={href}
                    aria-current={
                      label === "Accessibility" ? "page" : undefined
                    }
                    className="block w-fit text-xs text-[#6c7981] transition hover:text-[#007653] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007653]"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-[#e5e8e6] pt-5 text-[10px] text-[#849099] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PharmaLink. All rights reserved.</p>
          <Link
            to="/privacy-policy"
            className="w-fit hover:text-[#007653]"
          >
            Privacy and data protection
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#26343c]">
      {/* HEADER */}
      <header className="border-b border-[#e5e7e6] bg-white">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="flex h-[54px] items-center justify-between">
            <Link
              to="/"
              aria-label="PharmaLink home"
              className="inline-flex items-center gap-2.5"
            >
              <span className="grid h-8 w-8 place-items-center rounded-md bg-[#007653] text-sm font-extrabold text-white">
                P
              </span>
              <span className="text-sm font-extrabold tracking-tight text-[#172b39]">
                Pharma<span className="text-[#008565]">Link</span>
              </span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#007653] px-3 py-2 text-[10px] font-bold text-white transition hover:bg-[#005c41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007653]"
            >
              Contact Us <ArrowRight size={12} />
            </Link>
          </div>

          <nav
            aria-label="Legal navigation"
            className="flex gap-x-6 overflow-x-auto border-t border-[#eeeeee] py-3 text-[10px] font-medium text-[#59676f]"
          >
            <Link to="/user-agreement" className="shrink-0 hover:text-[#007653]">
              User Agreement
            </Link>
            <Link to="/privacy-policy" className="shrink-0 hover:text-[#007653]">
              Privacy Policy
            </Link>
            <Link
              to="/accessibility"
              aria-current="page"
              className="shrink-0 font-bold text-[#007653]"
            >
              Accessibility
            </Link>
            <Link to="/cookie-policy" className="shrink-0 hover:text-[#007653]">
              Cookie Policy
            </Link>
            <Link to="/copyright-policy" className="shrink-0 hover:text-[#007653]">
              Copyright Policy
            </Link>
            <Link
              to="/community-guidelines"
              className="shrink-0 hover:text-[#007653]"
            >
              Community Guidelines
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-[1000px] px-5 pb-14 pt-8 sm:px-8 sm:pt-10">
        {/* INTRODUCTION */}
        <section className="grid items-center gap-5 sm:grid-cols-[1fr_150px]">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#007653]">
              <AccessibilityIcon size={15} />
              Accessibility at PharmaLink
            </div>

            <h1 className="max-w-[660px] text-[30px] font-medium leading-[1.2] tracking-[-0.035em] text-[#26343c] sm:text-[38px]">
              A professional network designed to be accessible to everyone.
            </h1>

            <p className="mt-3 max-w-[650px] text-sm leading-6 text-[#53636d]">
              Your abilities, experiences, and goals are unique. PharmaLink
              aims to make professional networking, learning, research, and
              career opportunities easier to access and use.
            </p>
          </div>

          <div className="hidden justify-center sm:flex">
            <div className="grid h-32 w-32 place-items-center rounded-full bg-[#eaf5ef]">
              <div className="grid h-24 w-24 place-items-center rounded-3xl bg-white text-[#007653] shadow-sm">
                <AccessibilityIcon size={54} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </section>

        <p className="mt-6 text-xs leading-[1.9] text-[#53636d] sm:text-[13px]">
          We recognize that members may interact with PharmaLink in different
          ways, using different devices, assistive technologies, and
          accessibility settings. Our goal is to build an experience that
          supports diverse needs without compromising the quality of the
          professional community.
        </p>

        <p className="mt-4 text-xs leading-[1.9] text-[#53636d] sm:text-[13px]">
          Accessibility is an ongoing responsibility. We aim to consider
          inclusive design throughout product development, identify barriers,
          and improve our website as we learn from testing and member feedback.
        </p>

        {/* ACCESSIBILITY PRINCIPLES */}
        <section
          aria-label="Accessibility principles"
          className="mt-7 grid gap-3 sm:grid-cols-3"
        >
          <div className="rounded-lg bg-[#fff0eb] p-4">
            <Eye size={21} className="mb-3 text-[#9a533b]" />
            <h2 className="text-sm font-semibold text-[#26343c]">
              Clear and readable
            </h2>
            <p className="mt-2 text-xs leading-5 text-[#59636a]">
              Content should be understandable, readable, and distinguishable
              across supported devices and screen sizes.
            </p>
          </div>

          <div className="rounded-lg bg-[#edf6e9] p-4">
            <Keyboard size={21} className="mb-3 text-[#36764d]" />
            <h2 className="text-sm font-semibold text-[#26343c]">
              Easier to navigate
            </h2>
            <p className="mt-2 text-xs leading-5 text-[#59636a]">
              Navigation and interactive controls should support predictable
              interaction and keyboard accessibility.
            </p>
          </div>

          <div className="rounded-lg bg-[#eaf3fd] p-4">
            <Monitor size={21} className="mb-3 text-[#356ca8]" />
            <h2 className="text-sm font-semibold text-[#26343c]">
              Inclusive by design
            </h2>
            <p className="mt-2 text-xs leading-5 text-[#59636a]">
              We aim to identify and reduce barriers for people with different
              abilities, needs, and assistive technologies.
            </p>
          </div>
        </section>

        {/* SUPPORT CARD */}
        <div className="mt-7 space-y-4">
          <InfoCard
            icon={<MessageSquareText size={23} />}
            title="Our Accessibility Support Desk"
          >
            <p>
              We welcome feedback about accessibility barriers on PharmaLink.
              If you encounter a problem using a page, navigating a feature,
              reading content, or completing an action, please let us know.
            </p>

            <p>
              When contacting us, describe the page or feature involved, what
              you were trying to do, and what happened instead. If possible,
              include your browser, device, and assistive technology details.
              Please avoid sharing passwords, patient information, or other
              sensitive personal data in your report.
            </p>

            <p>
              Our team can use these details to understand the issue and
              evaluate appropriate improvements.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[#0876bd] hover:underline"
            >
              Report an accessibility issue <ArrowRight size={13} />
            </Link>
          </InfoCard>

          <InfoCard
            icon={<Target size={23} />}
            title="Accessibility in product design and development"
          >
            <p>
              Accessibility should be considered when designing and building
              PharmaLink features, including profiles, professional networking,
              job listings, research resources, and community discussions.
            </p>

            <p>
              We aim to use semantic page structure, meaningful headings,
              descriptive labels, sufficient color contrast, visible focus
              indicators, and appropriately labeled interactive elements.
            </p>

            <p>
              We also aim to consider keyboard interaction, screen-reader
              compatibility, understandable error messages, and responsive
              layouts as part of ongoing development and testing.
            </p>

            <p>
              Our implementation and conformance should be evaluated against
              relevant accessibility standards rather than assumed from
              design intentions alone.
            </p>
          </InfoCard>
        </div>

        {/* ACCESSIBILITY PRACTICES */}
        <section className="mt-10">
          <h2 className="text-xl font-medium tracking-tight text-[#26343c] sm:text-2xl">
            Our accessibility practices
          </h2>

          <p className="mt-3 text-xs leading-[1.9] text-[#53636d] sm:text-[13px]">
            We aim to make accessibility part of everyday product decisions.
            The following areas guide our work and ongoing evaluation.
          </p>

          <div className="mt-5 space-y-5">
            <div className="border-l-2 border-[#007653] pl-4">
              <h3 className="text-sm font-semibold text-[#26343c]">
                Visual accessibility
              </h3>
              <p className="mt-2 text-xs leading-[1.9] text-[#53636d]">
                We aim to provide readable text, distinguishable controls,
                appropriate contrast, and layouts that remain usable at
                different viewport sizes and zoom levels. Color should not
                be the only way information is communicated.
              </p>
            </div>

            <div className="border-l-2 border-[#007653] pl-4">
              <h3 className="text-sm font-semibold text-[#26343c]">
                Keyboard accessibility
              </h3>
              <p className="mt-2 text-xs leading-[1.9] text-[#53636d]">
                Important features should be usable without relying exclusively
                on a mouse or touchscreen. Interactive elements should have
                a logical focus order and a visible focus state.
              </p>
            </div>

            <div className="border-l-2 border-[#007653] pl-4">
              <h3 className="text-sm font-semibold text-[#26343c]">
                Screen readers and assistive technology
              </h3>
              <p className="mt-2 text-xs leading-[1.9] text-[#53636d]">
                We aim to use meaningful HTML structure, accessible names,
                descriptive links, and appropriate labels so assistive
                technologies can communicate content and functionality.
              </p>
            </div>

            <div className="border-l-2 border-[#007653] pl-4">
              <h3 className="text-sm font-semibold text-[#26343c]">
                Forms, feedback, and errors
              </h3>
              <p className="mt-2 text-xs leading-[1.9] text-[#53636d]">
                Forms should provide understandable instructions, identify
                errors clearly, and help users correct problems without
                unnecessary confusion. Required fields and status changes
                should be communicated accessibly.
              </p>
            </div>

            <div className="border-l-2 border-[#007653] pl-4">
              <h3 className="text-sm font-semibold text-[#26343c]">
                Continuous evaluation
              </h3>
              <p className="mt-2 text-xs leading-[1.9] text-[#53636d]">
                Accessibility needs ongoing attention. We aim to use feedback,
                manual checks, and appropriate automated testing to identify
                barriers and prioritize improvements.
              </p>
            </div>
          </div>
        </section>

        {/* STANDARDS */}
        <section className="mt-10">
          <h2 className="text-xl font-medium tracking-tight text-[#26343c] sm:text-2xl">
            Accessibility standards
          </h2>

          <p className="mt-3 text-xs leading-[1.9] text-[#53636d] sm:text-[13px]">
            The Web Content Accessibility Guidelines (WCAG), published by
            the World Wide Web Consortium (W3C), provide a widely used
            framework for accessible web content.
          </p>

          <p className="mt-4 text-xs leading-[1.9] text-[#53636d] sm:text-[13px]">
            PharmaLink can use relevant WCAG success criteria to guide design,
            implementation, and evaluation. The applicable target level and
            actual conformance should be established through testing of the
            deployed platform.
          </p>

          <div className="mt-4 rounded-lg border border-[#e2e8e4] p-4">
            <div className="flex items-start gap-3">
              <BookOpen
                size={20}
                className="mt-0.5 shrink-0 text-[#007653]"
              />
              <div>
                <h3 className="text-sm font-semibold text-[#26343c]">
                  Web Content Accessibility Guidelines (WCAG)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#53636d]">
                  Learn about internationally recognized guidance for making
                  websites and digital content more accessible.
                </p>
                <a
                  href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#0876bd] hover:underline"
                >
                  Read the WCAG guidance <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HELPFUL RESOURCES */}
        <section className="mt-10 rounded-lg bg-[#f6f8f9] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-[#007653] shadow-sm">
              <FileText size={22} />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-base font-medium text-[#26343c]">
                Helpful resources
              </h2>

              <p className="mt-2 text-xs leading-[1.9] text-[#53636d]">
                Explore these resources to understand PharmaLink's policies
                and find help with accessibility-related questions.
              </p>

              <div className="mt-3 divide-y divide-[#e4e8e7]">
                <ResourceLink
                  to="/user-agreement"
                  title="PharmaLink User Agreement"
                  description="Terms governing use of the platform."
                />

                <ResourceLink
                  to="/privacy-policy"
                  title="PharmaLink Privacy Policy"
                  description="Information about privacy and personal data."
                />

                <ResourceLink
                  to="/community-guidelines"
                  title="Community Guidelines"
                  description="Standards for respectful professional participation."
                />

                <ResourceLink
                  to="/contact"
                  title="Contact and accessibility support"
                  description="Report an accessibility barrier or request assistance."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="mt-5 rounded-lg border border-[#dce8e1] bg-[#eef7f2] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Headphones
              size={22}
              className="mt-0.5 shrink-0 text-[#007653]"
            />

            <div>
              <h2 className="text-base font-semibold text-[#26343c]">
                Need accessibility assistance?
              </h2>

              <p className="mt-2 text-xs leading-[1.9] text-[#53636d] sm:text-[13px]">
                If a barrier prevents you from using PharmaLink, contact
                our team with a description of the issue. Your feedback
                helps us identify areas that need improvement.
              </p>

              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#007653] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#005c41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007653]"
              >
                Contact support <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <p className="mt-6 text-[11px] leading-6 text-[#87939a]">
          This page describes PharmaLink's accessibility objectives and
          intended practices. It should not be interpreted as a claim of
          verified accessibility conformance until the live platform has
          been evaluated. Update this page as accessibility features,
          testing procedures, and support arrangements evolve.
        </p>
      </main>

      <Footer />
    </div>
  );
}
