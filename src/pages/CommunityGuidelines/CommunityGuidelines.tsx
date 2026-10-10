
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  BriefcaseBusiness,
  MessageSquareWarning,
  Scale,
  Users,
  LockKeyhole,
  Flag,
  CheckCircle2,
} from "lucide-react";

const GREEN = "#007653";
const NAVY = "#172b39";

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

function PrincipleCard({
  title,
  description,
  detail,
  color,
  icon,
}: {
  title: string;
  description: string;
  detail: string;
  color: string;
  icon: ReactNode;
}) {
  return (
    <article
      className="flex min-h-[170px] flex-col rounded-lg p-4 sm:p-5"
      style={{ backgroundColor: color }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/80 text-[#263b49]">
          {icon}
        </span>
        <h3 className="text-base font-bold text-[#26343c]">{title}</h3>
      </div>

      <p className="text-xs leading-5 text-[#45535b]">{description}</p>

      <p className="mt-auto pt-4 text-[10px] font-semibold text-[#263b49]">
        {detail} <span aria-hidden="true">→</span>
      </p>
    </article>
  );
}

function ContentPanel({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-lg bg-[#f6f8f9] p-5 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-[#007653] shadow-sm">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug text-[#26343c]">
            {title}
          </h3>
          <div className="mt-3 space-y-3 text-xs leading-[1.9] text-[#53636d] sm:text-[13px]">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

function GuidelineSection({
  id,
  number,
  title,
  subtitle,
  color,
  children,
}: {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#78858d]">
            {number} / COMMUNITY STANDARD
          </div>

          <h2 className="text-[25px] font-medium leading-tight tracking-[-0.03em] text-[#26343c] sm:text-[30px]">
            {title}
          </h2>

          <p className="mt-2 text-xs leading-6 text-[#64737b] sm:text-sm">
            {subtitle}
          </p>
        </div>
      </div>

      <div
        className="mb-5 h-[2px] w-full"
        style={{ backgroundColor: color }}
      />

      <div className="space-y-5 text-[13px] leading-[1.95] text-[#43525b] sm:text-sm">
        {children}
      </div>
    </section>
  );
}

function Rule({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-1.5 font-semibold text-[#26343c]">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function LearnMore({ to, children }: { to: string; children: ReactNode }) {
  return (
    <p className="pt-1 text-xs">
      Learn more about{" "}
      <PolicyLink to={to}>{children}</PolicyLink>.
    </p>
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
      ],
    },
  ];

  return (
    <footer className="border-t border-[#e7e9e8] bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-[1000px]">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex w-fit items-center gap-2">
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
              <h3 className="mb-3 text-xs font-bold text-[#26343c]">
                {group.title}
              </h3>

              <div className="space-y-2.5">
                {group.links.map(([label, href]) => (
                  <Link
                    key={label}
                    to={href}
                    className="block w-fit text-xs text-[#6c7981] transition hover:text-[#007653]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#e7e9e8] pt-5 text-[10px] text-[#849099] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PharmaLink. All rights reserved.</p>
          <p>Connect. Discover. Grow.</p>
        </div>
      </div>
    </footer>
  );
}

export default function CommunityGuildelines() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#26343c]">
      {/* HEADER */}
      <header className="border-b border-[#e5e7e6] bg-white">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="flex h-[54px] items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-[#007653] text-sm font-extrabold text-white">
                P
              </span>
              <span className="text-sm font-extrabold tracking-tight text-[#172b39]">
                Pharma<span className="text-[#008565]">Link</span>
              </span>
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-md bg-[#007653] px-3 py-2 text-[10px] font-bold text-white transition hover:bg-[#005c41]"
            >
              Join PharmaLink <ArrowRight size={12} />
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
              to="/community-guidelines"
              aria-current="page"
              className="shrink-0 font-bold text-[#007653]"
            >
              Community Guidelines
            </Link>
            <Link to="/cookie-policy" className="shrink-0 hover:text-[#007653]">
              Cookie Policy
            </Link>
            <Link to="/copyright-policy" className="shrink-0 hover:text-[#007653]">
              Copyright Policy
            </Link>
          </nav>
        </div>
      </header>

      {/* INTRODUCTION */}
      <main className="mx-auto max-w-[1000px] px-5 pb-16 pt-8 sm:px-8 sm:pt-10">
        <section className="grid items-center gap-6 sm:grid-cols-[1fr_220px] sm:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#007653]">
              <Users size={14} /> Our community standards
            </div>

            <h1 className="max-w-[620px] text-[31px] font-medium leading-[1.17] tracking-[-0.04em] text-[#26343c] sm:text-[40px]">
              We want PharmaLink to reflect the best of the pharmaceutical
              community.
            </h1>

            <p className="mt-4 max-w-[620px] text-sm leading-6 text-[#5c6a72]">
              This is a community where we treat each other with respect,
              share knowledge responsibly, and help each other succeed.
            </p>
          </div>

          <div className="hidden sm:flex sm:justify-center">
            <div className="grid h-36 w-36 place-items-center rounded-full bg-[#edf7f3]">
              <div className="grid h-24 w-24 place-items-center rounded-3xl bg-white text-[#007653] shadow-sm">
                <HeartHandshake size={48} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </section>

        {/* THREE PRINCIPLES */}
        <section
          aria-label="Our three community principles"
          className="mt-7 grid gap-3 sm:grid-cols-3"
        >
          <PrincipleCard
            title="Be safe"
            description="Only bring safe, respectful conversations and interactions to PharmaLink."
            detail="Protect the community"
            color="#fff0eb"
            icon={<ShieldCheck size={19} />}
          />

          <PrincipleCard
            title="Be trustworthy"
            description="Use your real identity, provide accurate information, and share authentic content."
            detail="Build trust"
            color="#edf6e9"
            icon={<CheckCircle2 size={19} />}
          />

          <PrincipleCard
            title="Be professional"
            description="Support constructive discussion and respect the standards of the pharmaceutical profession."
            detail="Lead with respect"
            color="#eaf3fd"
            icon={<BriefcaseBusiness size={19} />}
          />
        </section>

        {/* POLICY OVERVIEW */}
        <section className="mt-10">
          <h2 className="text-xl font-medium tracking-tight text-[#26343c]">
            PharmaLink Community Guidelines
          </h2>

          <div className="mt-4 space-y-4 text-[13px] leading-[1.9] text-[#53636d] sm:text-sm">
            <p>
              Thank you for being part of PharmaLink, where pharmacy
              students, pharmacists, researchers, educators, recruiters,
              and organizations come together to learn, collaborate, and
              grow professionally.
            </p>

            <p>
              These guidelines explain the behavior expected from members
              and how we aim to maintain a useful, trustworthy professional
              environment. They apply to profiles, posts, comments,
              messages, research contributions, job listings, communities,
              and other interactions on the platform.
            </p>

            <p>
              By using PharmaLink, you also agree to our{" "}
              <PolicyLink to="/user-agreement">User Agreement</PolicyLink>.
              Please read our{" "}
              <PolicyLink to="/privacy-policy">Privacy Policy</PolicyLink>{" "}
              to understand how personal information may be handled.
            </p>
          </div>
        </section>

        {/* REPORTING PANEL */}
        <div className="mt-7 space-y-4">
          <ContentPanel
            icon={<MessageSquareWarning size={21} />}
            title="Tell us if you see abusive or inappropriate content"
          >
            <p>
              If you encounter harassment, misleading claims, impersonation,
              spam, unsafe advice, or another violation of these guidelines,
              report it through the reporting feature where available or
              contact our support team.
            </p>

            <p>
              Please provide enough context for us to identify the content
              and understand the concern. Avoid sharing unnecessary personal
              or confidential information in a report.
            </p>

            <p>
              We review reports according to the circumstances, available
              evidence, applicable policies, and legal requirements.
            </p>

            <p>
              <PolicyLink to="/contact">
                Report a concern to PharmaLink
              </PolicyLink>
            </p>
          </ContentPanel>

          <ContentPanel
            icon={<Scale size={21} />}
            title="Violating our community guidelines can result in action"
          >
            <p>
              Depending on the severity, context, frequency, and impact of
              a violation, we may remove content, restrict a feature,
              issue a warning, temporarily suspend an account, or terminate
              access where appropriate.
            </p>

            <p>
              We aim to consider the circumstances and available evidence
              when reviewing reported behavior. Repeated or serious
              violations may result in stronger action.
            </p>

            <p>
              Where appropriate and available, users may contact support
              to ask for a review of an account or content decision.
            </p>

            <p>
              <PolicyLink to="/user-agreement">
                Learn more about our User Agreement
              </PolicyLink>
            </p>
          </ContentPanel>
        </div>

        {/* BE SAFE */}
        <div className="mt-12">
          <GuidelineSection
            id="be-safe"
            number="01"
            title="Be safe"
            subtitle="Only bring safe and respectful conversations to PharmaLink."
            color="#efaa95"
          >
            <Rule title="Do not harass, bully, or intimidate">
              Do not threaten, target, humiliate, stalk, or repeatedly
              contact another person in an unwanted manner. Personal
              attacks, targeted harassment, and intimidation have no place
              in a professional community.
            </Rule>

            <Rule title="Do not threaten violence or encourage harm">
              Do not threaten physical harm, encourage violence, or use
              PharmaLink to coordinate harmful activity. Report credible
              safety concerns through appropriate channels.
            </Rule>

            <Rule title="Respect privacy and confidentiality">
              Do not publish private contact details, confidential employer
              information, private messages, or another person's sensitive
              information without an appropriate legal basis and any
              required permission.
            </Rule>

            <Rule title="Protect patient information">
              Pharmacy and healthcare discussions require particular care.
              Do not share identifiable patient records, photographs,
              prescriptions, medical documents, or other protected health
              information without lawful authority and appropriate safeguards.
              Educational examples should be properly de-identified.
            </Rule>

            <Rule title="Do not promote dangerous or unlawful activity">
              Do not use the platform to promote illegal transactions,
              fraudulent medical products, the misuse of medicines, or
              activities that create an unreasonable risk to users or
              the public.
            </Rule>

            <Rule title="Report safety concerns responsibly">
              Use reporting tools or contact PharmaLink when you encounter
              potentially harmful behavior. Do not retaliate against the
              person involved or publish additional private information
              while attempting to resolve the issue.
            </Rule>

            <LearnMore to="/contact">
              reporting inappropriate content and safety concerns
            </LearnMore>
          </GuidelineSection>
        </div>

        {/* BE TRUSTWORTHY */}
        <div className="mt-12">
          <GuidelineSection
            id="be-trustworthy"
            number="02"
            title="Be trustworthy"
            subtitle="Use your real identity where required and share accurate, authentic information."
            color="#9bc58d"
          >
            <Rule title="Do not share false or misleading information">
              Share information responsibly and avoid presenting rumors,
              fabricated evidence, manipulated results, or unverified
              claims as established facts. Correct material errors when
              you become aware of them.
            </Rule>

            <Rule title="Represent your professional identity honestly">
              Do not misrepresent your qualifications, degrees, professional
              registrations, employment, certifications, research experience,
              or affiliations. Do not impersonate another individual,
              institution, employer, or organization.
            </Rule>

            <Rule title="Do not create fake profiles or deceptive accounts">
              Do not use false identities, misleading credentials, or
              coordinated inauthentic accounts to manipulate discussions,
              mislead members, or obtain access to restricted features.
            </Rule>

            <Rule title="Do not manipulate engagement">
              Do not use fake accounts, automated interactions, purchased
              engagement, or coordinated deceptive behavior to manipulate
              reactions, recommendations, professional visibility, or
              community discussions.
            </Rule>

            <Rule title="Share research responsibly">
              Cite sources where appropriate, distinguish your own findings
              from others' work, and avoid fabricating results or
              misrepresenting scientific evidence. Respect publication
              permissions and research ethics requirements.
            </Rule>

            <Rule title="Be transparent about commercial interests">
              Do not conceal material conflicts of interest when disclosure
              is required or relevant to the discussion. Promotional
              material should be presented honestly and must not mislead
              members about products, services, qualifications, or outcomes.
            </Rule>

            <LearnMore to="/copyright-policy">
              copyright and intellectual property responsibilities
            </LearnMore>
          </GuidelineSection>
        </div>

        {/* BE PROFESSIONAL */}
        <div className="mt-12">
          <GuidelineSection
            id="be-professional"
            number="03"
            title="Be professional"
            subtitle="Help create a respectful environment for learning, collaboration, and career growth."
            color="#8ab9f3"
          >
            <Rule title="Treat every member with respect">
              Engage with people constructively, regardless of their
              education, experience, profession, employer, location, or
              career stage. Disagreement is acceptable; personal attacks,
              discriminatory abuse, and demeaning behavior are not.
            </Rule>

            <Rule title="Do not discriminate">
              Do not engage in unlawful discrimination, hate speech, or
              targeted abuse based on protected characteristics. Professional
              discussions should remain inclusive and focused on relevant
              ideas, evidence, and experience.
            </Rule>

            <Rule title="Do not engage in unwanted advances">
              Do not use messages, comments, or networking features to
              send repeated unwanted romantic or sexual advances, sexually
              harass other members, or pressure anyone into personal
              interactions unrelated to legitimate professional engagement.
            </Rule>

            <Rule title="Keep discussions relevant and constructive">
              Share knowledge, ask meaningful questions, provide useful
              feedback, and disagree respectfully. Avoid repetitive
              arguments, deliberate disruption, inflammatory personal
              commentary, or behavior intended to derail a discussion.
            </Rule>

            <Rule title="Do not spam or abuse networking features">
              Do not send bulk unsolicited messages, repeatedly solicit
              members, distribute deceptive promotions, or misuse
              invitations and connection requests. Respect other members'
              boundaries and communication preferences.
            </Rule>

            <Rule title="Respect intellectual property">
              Share articles, images, research, educational resources,
              and other materials only when you have the necessary rights,
              permissions, or other lawful basis. Attribution alone does
              not automatically authorize copying protected work.
            </Rule>

            <Rule title="Use professional judgment in healthcare discussions">
              Keep educational and scientific conversations evidence-based.
              Do not present unqualified personal opinions as definitive
              medical advice or encourage unsafe practices. Respect
              professional standards, applicable law, and patient
              confidentiality.
            </Rule>

            <LearnMore to="/user-agreement">
              the rules governing professional participation
            </LearnMore>
          </GuidelineSection>
        </div>

        {/* JOBS AND OPPORTUNITIES */}
        <div className="mt-12">
          <GuidelineSection
            id="jobs-opportunities"
            number="04"
            title="Jobs and opportunities"
            subtitle="Make professional opportunities genuine, transparent, and useful."
            color="#c7b3ed"
          >
            <Rule title="Publish genuine opportunities">
              Job listings, internships, fellowships, and educational
              opportunities should include accurate information about the
              organization, requirements, responsibilities, and application
              process.
            </Rule>

            <Rule title="Do not mislead applicants">
              Do not advertise fabricated positions, guarantee outcomes
              you cannot substantiate, impersonate an employer, or
              misrepresent compensation, eligibility, or working conditions.
            </Rule>

            <Rule title="Protect applicant information">
              Do not misuse CVs, contact details, credentials, or other
              information obtained through recruitment interactions.
              Handle applicant information in accordance with applicable
              privacy and employment requirements.
            </Rule>

            <Rule title="Avoid fraudulent requests">
              Members should be cautious of suspicious requests for
              money, banking credentials, passwords, or unnecessary
              sensitive information in exchange for an opportunity.
              Report suspected recruitment fraud.
            </Rule>

            <LearnMore to="/jobs">
              jobs and internships on PharmaLink
            </LearnMore>
          </GuidelineSection>
        </div>

        {/* COMMUNITIES */}
        <div className="mt-12">
          <GuidelineSection
            id="communities"
            number="05"
            title="Communities and knowledge sharing"
            subtitle="Help build spaces where pharmaceutical knowledge can be exchanged responsibly."
            color="#7dcdb7"
          >
            <Rule title="Keep community participation relevant">
              Follow the purpose and rules of each community. Avoid
              repetitive posts, unrelated promotions, or content that
              prevents others from participating meaningfully.
            </Rule>

            <Rule title="Respect moderators and members">
              Community moderators should act consistently with applicable
              platform rules. Members should not harass moderators,
              circumvent reasonable restrictions, or retaliate against
              people who report concerns in good faith.
            </Rule>

            <Rule title="Share educational material responsibly">
              Provide context for scientific claims, cite reliable sources
              where appropriate, and distinguish established evidence
              from hypotheses, personal experience, or preliminary findings.
            </Rule>

            <Rule title="Respect confidentiality and permissions">
              Do not publish confidential research, restricted documents,
              proprietary material, or unpublished work without the
              necessary authorization.
            </Rule>

            <LearnMore to="/copyright-policy">
              copyright and content-sharing responsibilities
            </LearnMore>
          </GuidelineSection>
        </div>

        {/* ENFORCEMENT */}
        <section className="mt-14 rounded-xl border border-[#dce6e1] bg-[#f4f9f6] p-5 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-[#007653] shadow-sm">
              <LockKeyhole size={23} />
            </div>

            <div>
              <h2 className="text-xl font-medium tracking-tight text-[#26343c]">
                How we enforce these guidelines
              </h2>

              <p className="mt-3 text-xs leading-[1.9] text-[#53636d] sm:text-sm">
                We aim to maintain a professional environment through
                appropriate reporting, review, and enforcement procedures.
                Actions may depend on the severity, frequency, context,
                impact, and evidence associated with a reported violation.
              </p>

              <ul className="mt-4 space-y-2.5 text-xs leading-6 text-[#53636d] sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="mt-1 shrink-0 text-[#007653]"
                  />
                  Content may be reviewed, removed, or restricted where
                  appropriate.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="mt-1 shrink-0 text-[#007653]"
                  />
                  Accounts may receive warnings, feature restrictions,
                  suspensions, or termination for serious or repeated
                  violations.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="mt-1 shrink-0 text-[#007653]"
                  />
                  Where available, members may contact support to request
                  a review of a decision.
                </li>
              </ul>

              <p className="mt-4 text-xs leading-6 text-[#53636d]">
                Nothing in these guidelines limits any rights or remedies
                available under applicable law.
              </p>

              <Link
                to="/user-agreement"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#0876bd] hover:underline"
              >
                Read the User Agreement <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* REPORTING CTA */}
        <section className="mt-8 rounded-xl bg-[#142a38] px-5 py-7 text-white sm:px-8 sm:py-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8edbc1]">
                <Flag size={14} /> Help keep PharmaLink trustworthy
              </div>

              <h2 className="text-xl font-medium leading-tight sm:text-2xl">
                See something that doesn't belong?
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-6 text-white/65 sm:text-sm">
                Report a concern or contact our team so that the issue
                can be reviewed through the appropriate channel.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 text-xs font-bold text-[#006c50] transition hover:bg-[#eaf6f1]"
            >
              Contact PharmaLink <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <p className="mt-7 text-[11px] leading-6 text-[#87939a]">
          These Community Guidelines are intended to support a respectful
          professional network. They should be read alongside the PharmaLink
          User Agreement and applicable policies. The final published version
          should reflect the platform's actual moderation, reporting,
          appeal, and enforcement procedures.
        </p>
      </main>

      <Footer />
    </div>
  );
}
