
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  GraduationCap,
  FlaskConical,
  Menu,
  X,
} from "lucide-react";
import { FaLinkedin, FaYoutube , FaInstagram } from "react-icons/fa";
import { useState } from "react";

const GREEN = "#007653";
const NAVY = "#142a38";
const SILVER = "#84939e";

const images = {
  hero: "/images/ayush-hero.png",
  about: "/images/ayush-about.png",
  vision: "/images/ayush-vision.png",
};

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-white font-sans text-[#142a38]">
      {/* HERO */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#142a38] text-white md:min-h-[650px]">
        <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-br from-[#006c50] via-[#005c46] to-[#004b3b] md:left-[34%] md:w-auto" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(19,161,116,0.15),transparent_55%)]" />

        {/* Navigation */}
        <header className="relative z-30 mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-[#007653] text-sm font-extrabold">
              P
            </span>
            <span className="text-sm font-bold tracking-tight">
              PharmaLink
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="rounded-md p-2 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-4 right-4 top-[65px] flex-col gap-5 rounded-xl border border-white/10 bg-[#142a38] p-5 text-sm font-medium md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          >
            <Link to="/" className="transition hover:text-[#8ce2c5]">
              Home
            </Link>
            <Link
              to="/about"
              aria-current="page"
              className="border-b border-white pb-1 transition hover:text-[#8ce2c5] md:border-white/60"
            >
              About
            </Link>
            <Link to="/careers" className="transition hover:text-[#8ce2c5]">
              Careers
            </Link>
            <Link to="/blog" className="transition hover:text-[#8ce2c5]">
              Blog
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#007653] px-4 py-2.5 text-xs font-bold transition hover:bg-[#008b63]"
            >
              Join PharmaLink <ArrowRight size={14} />
            </Link>
          </nav>
        </header>

        <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 md:min-h-[570px] md:grid-cols-[1.02fr_0.98fr]">
          {/* Portrait */}
          <div className="relative flex min-h-[350px] items-end justify-center overflow-hidden md:min-h-[570px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#142a38] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#142a38]/10" />

            <div className="absolute left-5 top-12 hidden [writing-mode:vertical-rl] rotate-180 text-[10px] font-bold tracking-[0.25em] text-white/90 md:block">
              PHARMALINK
              <span className="mx-3 inline-block h-10 border-l border-white/50" />
              FOUNDER'S STORY
            </div>

            <img
              src={images.hero}
              alt="Ayush Akolkar, founder of PharmaLink"
              className="relative z-10 max-h-[490px] w-full max-w-[490px] object-contain object-bottom grayscale md:max-h-[550px] md:max-w-[580px]"
            />
          </div>

          {/* Hero copy */}
          <div className="relative flex flex-col justify-center px-6 pb-14 pt-5 sm:px-10 md:py-16 lg:px-16">
            <span className="mb-3 text-[10px] font-extrabold tracking-[0.22em] text-[#b9e6d6]">
              FOUNDER &amp; BUILDER
            </span>

            <h1 className="text-[clamp(3.6rem,8vw,6.4rem)] font-extrabold leading-[0.88] tracking-[-0.065em] text-[#e5eee9]">
              Ayush
              <br />
              Akolkar
            </h1>

            <h2 className="mt-5 max-w-[440px] text-xl font-bold leading-tight tracking-tight sm:text-2xl">
              Building a more connected future for the pharmaceutical world.
            </h2>

            <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-white/75">
              A computer science student and aspiring entrepreneur building
              PharmaLink — a professional network for pharmacy professionals,
              students, researchers, educators and organizations.
            </p>

            <a
              href="#about-me"
              className="mt-6 inline-flex w-fit items-center gap-4 text-sm font-bold transition hover:text-[#9de4c9]"
            >
              Learn more <ArrowRight size={19} />
            </a>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-l border-white/35 pl-4 text-[9px] font-bold tracking-[0.16em] text-white/75 sm:ml-auto sm:mt-0 md:absolute md:bottom-10 md:right-8 md:block md:space-y-2 md:border-l md:pl-3">
              <span className="block">IDEAS</span>
              <span className="block">TECHNOLOGY</span>
              <span className="block">PHARMACY</span>
              <span className="block">PEOPLE</span>
              <span className="block">IMPACT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section
        id="about-me"
        className="relative scroll-mt-8 bg-white px-5 py-16 sm:px-10 lg:px-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative">
            <SectionLabel number="01" label="ABOUT ME" />

            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              A student.
              <br />
              A builder.
              <br />
              <span className="text-[#84939e]">A bigger vision.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-[1.8] text-[#536372]">
              I'm Ayush Akolkar, a computer science student and an aspiring
              entrepreneur passionate about building technology that creates
              real impact.
            </p>

            <p className="mt-4 max-w-md text-sm leading-[1.8] text-[#536372]">
              I've always been interested in how technology can solve
              meaningful problems. Over time, I realized how big the gap is
              in the way the pharmaceutical community connects, learns and
              grows.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -left-5 top-8 h-[80%] w-[78%] bg-[#eaf4f0]" />

            <div className="absolute -right-3 -top-3 grid grid-cols-5 gap-4 opacity-40 sm:-right-8">
              {Array.from({ length: 40 }, (_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-[#84939e]" />
              ))}
            </div>

            <img
              src={images.about}
              alt="Ayush Akolkar looking toward the future"
              className="relative z-10 aspect-[4/4.2] w-[82%] justify-self-end bg-[#d9dddc] object-cover grayscale shadow-xl"
            />

            <div className="absolute -left-2 top-[44%] z-20 bg-white px-4 py-5 shadow-lg sm:-left-8 sm:px-5">
              <div className="space-y-3 text-[8px] font-extrabold tracking-[0.08em] text-[#536372]">
                <p>STUDENT</p>
                <p>ENTREPRENEUR</p>
                <p>PHARMALINK</p>
                <p>LONG-TERM IMPACT</p>
              </div>
              <div className="mt-3 h-0.5 w-4 bg-[#008565]" />
            </div>

            <div className="absolute -bottom-5 right-0 z-20 font-serif text-3xl italic leading-none text-[#008565] sm:-right-4 sm:text-5xl">
              Ayush
              <br />
              Akolkar
            </div>
          </div>
        </div>
      </section>

      {/* WHY PHARMALINK */}
      <section className="bg-white px-5 pb-16 pt-12 sm:px-10 lg:px-16 lg:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-5 top-0 grid grid-cols-5 gap-4 opacity-35">
              {Array.from({ length: 35 }, (_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-[#84939e]" />
              ))}
            </div>

            <img
              src={images.vision}
              alt="Ayush reflecting on the future of PharmaLink"
              className="relative z-10 aspect-[4/4.2] w-full object-cover object-top grayscale"
            />
          </div>

          <div className="max-w-lg">
            <SectionLabel number="02" label="WHY PHARMALINK" />

            <div className="mt-5 text-5xl font-extrabold leading-none text-[#142a38]">
              “
            </div>

            <h2 className="-mt-2 text-3xl font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-4xl">
              Because
              <br />
              the pharmaceutical
              <br />
              community deserves
              <br />
              <span className="text-[#84939e]">a better place.</span>
            </h2>

            <p className="mt-5 text-sm leading-[1.8] text-[#536372]">
              While exploring the pharmaceutical ecosystem, I noticed that
              students, professionals, researchers and organizations are all
              working in the same industry, yet their journeys are scattered
              across different platforms.
            </p>

            <p className="mt-4 text-sm leading-[1.8] text-[#536372]">
              Finding the right opportunities, people, insights or guidance
              is often harder than it should be. I built PharmaLink to change
              that — a dedicated professional network where the entire
              pharmaceutical community can connect, discover, learn and grow
              together.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#eff8f5] px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionLabel number="03" label="OUR MISSION" />

            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              One ecosystem
              <br />
              for every pharmacy
              <br />
              <span className="text-[#84939e]">professional.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-[1.8] text-[#536372]">
              At PharmaLink, our mission is to bring together pharmacy
              students, pharmacists, researchers, educators, recruiters and
              organizations into one professional ecosystem.
            </p>
          </div>

          <div className="space-y-7 border-l border-[#d6e6df] pl-5 sm:pl-8">
            <MissionItem
              icon={<Users size={25} />}
              title="Connect"
              description="Bring the pharmaceutical community closer together."
            />
            <MissionItem
              icon={<GraduationCap size={26} />}
              title="Empower"
              description="Create access to opportunities, learning and guidance."
            />
            <MissionItem
              icon={<FlaskConical size={25} />}
              title="Create impact"
              description="Support collaboration and innovation in pharmacy and healthcare."
            />
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00694f] to-[#004b3b] px-5 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(37,177,129,0.17),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionLabel number="04" label="THE VISION" light />

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-4xl">
              Build a stronger,
              <br />
              more connected
              <br />
              pharmaceutical community.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-[1.8] text-white/75">
              PharmaLink is the beginning of a larger vision — to support
              pharmacy professionals at every stage of their journey and help
              them create a meaningful impact in healthcare and society.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-xs font-extrabold !text-[#000080] transition hover:bg-[#e3f5ed]"
              >
                Join PharmaLink <ArrowRight size={15} />
              </Link>

              <Link
                to="/feed"
                className="text-xs font-bold underline underline-offset-4 transition hover:text-[#b8e9d7]"
              >
                Explore the network
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center py-6">
            <div className="relative grid aspect-square w-full max-w-[310px] place-items-center rounded-full border border-dashed border-white/20">
              <div className="absolute inset-[13%] rounded-full border border-dashed border-white/25" />
              <div className="absolute inset-[26%] rounded-full border border-dashed border-white/30" />
              <div className="absolute inset-[39%] rounded-full border border-white/20" />

              <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-white text-2xl font-extrabold text-[#007653] shadow-lg">
                P
              </div>

              <div className="absolute -right-1 top-[40%] border-l border-white/50 pl-3 text-[9px] font-bold leading-5 tracking-[0.12em]">
                <p>PEOPLE</p>
                <p>OPPORTUNITIES</p>
                <p>LEARNING</p>
                <p>COLLABORATION</p>
                <p>IMPACT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#142a38] px-5 py-10 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link to="/" className="flex w-fit items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-[#007653] text-sm font-extrabold">
                  P
                </span>
                <span className="text-sm font-bold">PharmaLink</span>
              </Link>

              <p className="mt-3 max-w-[230px] text-xs leading-relaxed text-white/65">
                A professional network for the pharmaceutical ecosystem.
              </p>

              <div className="mt-5 flex items-center gap-4 text-white/75">
                <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:text-white">
                  <FaInstagram size={17} />
                </a>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="hover:text-white">
                  <FaLinkedin size={17} />
                </a>
                <a href="https://x.com/" aria-label="X" className="text-sm font-bold hover:text-white">
                  X
                </a>
                <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:text-white">
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>

            <FooterColumn
              title="Platform"
              links={[
                ["About", "/about"],
                ["Network", "/feed"],
                ["Jobs & Internships", "/jobs"],
                ["Learning", "/learning"],
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
                ["Privacy Policy", "/privacy"],
                ["Cookie Policy", "/cookie-policy"],
                ["Copyright Policy", "/copyright-policy"],
              ]}
            />
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-5 text-[10px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 PharmaLink. All rights reserved.</span>

            <button
              type="button"
              onClick={() =>
                alert("Language selection will be available soon.")
              }
              className="flex w-fit items-center gap-2 hover:text-white"
            >
              Language <span aria-hidden="true">⌄</span>
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({
  number,
  label,
  light = false,
}: {
  number: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-8">
      <span
        className={`h-12 w-[2px] ${
          light ? "bg-white/60" : "bg-[#008565]"
        }`}
      />
      <span
        className={`text-[10px] font-extrabold tracking-[0.16em] ${
          light ? "text-[#b8e9d7]" : "text-[#007653]"
        }`}
      >
        {number}. {label}
      </span>
    </div>
  );
}

function MissionItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-5">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#dcefe8] text-[#007653]">
        {icon}
      </div>

      <div>
        <h3 className="text-base font-extrabold text-[#142a38]">{title}</h3>
        <p className="mt-1 max-w-sm text-xs leading-relaxed text-[#617481]">
          {description}
        </p>
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
      <div className="space-y-2">
        {links.map(([label, href]) => (
          <Link
            key={label}
            to={href}
            className="block w-fit text-[11px] text-white/65 transition hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

