import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Menu,
  MessageCircle,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const audiences = [
    {
      number: '01',
      icon: GraduationCap,
      title: 'Students',
      description:
        'Build your network early, discover internships, and find the people who can shape your career.',
    },
    {
      number: '02',
      icon: Users,
      title: 'Pharmacists',
      description:
        'Connect with peers, explore opportunities, and stay close to the wider pharmacy profession.',
    },
    {
      number: '03',
      icon: FlaskConical,
      title: 'Researchers',
      description:
        'Find collaborators, share research interests, and discover ideas across the pharmacy ecosystem.',
    },
    {
      number: '04',
      icon: Building2,
      title: 'Organizations',
      description:
        'Build your professional presence, connect with talent, and engage with the pharmacy community.',
    },
    {
      number: '05',
      icon: BriefcaseBusiness,
      title: 'Recruiters',
      description:
        'Discover pharmacy talent across students, professionals, researchers, and specialists.',
    },
    {
      number: '06',
      icon: GraduationCap,
      title: 'Educators',
      description:
        'Share knowledge, connect with learners, and contribute to the next generation of pharmacy.',
    },
  ]

  const features = [
    {
      number: '01',
      title: 'Professional profiles',
      description:
        'Create a profile that represents your education, experience, skills, research, and professional interests.',
      icon: Users,
    },
    {
      number: '02',
      title: 'Jobs & internships',
      description:
        'Discover opportunities across community pharmacy, clinical practice, industry, research, and more.',
      icon: BriefcaseBusiness,
    },
    {
      number: '03',
      title: 'Research network',
      description:
        'Discover researchers, publications, projects, interests, and potential collaborators.',
      icon: FlaskConical,
    },
    {
      number: '04',
      title: 'Communities',
      description:
        'Join focused professional conversations around pharmacy, education, research, and industry.',
      icon: Network,
    },
    {
      number: '05',
      title: 'Learning',
      description:
        'Find courses, resources, discussions, and knowledge that help you keep moving forward.',
      icon: GraduationCap,
    },
    {
      number: '06',
      title: 'Organizations',
      description:
        'Explore pharmaceutical companies, institutions, hospitals, and professional organizations.',
      icon: Building2,
    },
  ]

  const jobs = [
    {
      type: 'INDUSTRY',
      title: 'Clinical Pharmacist',
      company: 'PharmaCare',
      location: 'Mumbai · Hybrid',
    },
    {
      type: 'RESEARCH',
      title: 'Research Associate',
      company: 'Life Sciences Lab',
      location: 'Bengaluru · On-site',
    },
    {
      type: 'INTERNSHIP',
      title: 'Pharmacy Intern',
      company: 'MedCore',
      location: 'Pune · Hybrid',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f9f8] text-[#17212b] selection:bg-[#006241] selection:text-white">
      <style>{`
        .pharma-page {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .pharma-container {
          width: min(1180px, calc(100% - 40px));
          margin-inline: auto;
        }

        .pharma-grid {
          background-image:
            linear-gradient(rgba(0, 98, 65, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 98, 65, 0.035) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .pharma-card {
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .pharma-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 98, 65, 0.22);
          box-shadow: 0 18px 40px rgba(23, 33, 43, 0.07);
        }

        .pharma-link {
          transition:
            color 160ms ease,
            background 160ms ease,
            border-color 160ms ease,
            transform 160ms ease;
        }

        .pharma-link:hover {
          transform: translateY(-1px);
        }

        .pharma-job {
          transition:
            background 160ms ease,
            padding 160ms ease;
        }

        .pharma-job:hover {
          background: #f5f8f7;
        }

        @media (max-width: 768px) {
          .pharma-container {
            width: min(100% - 28px, 1180px);
          }
        }
      `}</style>

      <div className="pharma-page">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="sticky top-0 z-50 border-b border-[#dfe7e3] bg-white/95 backdrop-blur">
          <div className="pharma-container flex h-[72px] items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-[#006241] text-sm font-extrabold text-white">
                P
              </span>

              <span className="text-[15px] font-extrabold tracking-[-0.03em] text-[#17212b]">
                Pharma<span className="text-[#006241]">Link</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              <a
                href="#network"
                className="text-[13px] font-semibold text-[#63717c] hover:text-[#006241]"
              >
                Network
              </a>

              <a
                href="#jobs"
                className="text-[13px] font-semibold text-[#63717c] hover:text-[#006241]"
              >
                Jobs
              </a>

              <a
                href="#research"
                className="text-[13px] font-semibold text-[#63717c] hover:text-[#006241]"
              >
                Research
              </a>

              <a
                href="#communities"
                className="text-[13px] font-semibold text-[#63717c] hover:text-[#006241]"
              >
                Communities
              </a>

              <a
                href="#events"
                className="text-[13px] font-semibold text-[#63717c] hover:text-[#006241]"
              >
                Events
              </a>
            </nav>

            <div className="hidden items-center gap-5 md:flex">
              <button
                type="button"
                className="grid h-9 w-9 place-items-center rounded-full text-[#61707b] hover:bg-[#f2f6f4]"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <Link
                to="/login"
                className="text-[13px] font750 font-semibold text-[#17212b] hover:text-[#006241]"
              >
                Log in
              </Link>

              <Link
                to="/register"
                className="pharma-link inline-flex h-10 items-center justify-center rounded-[8px] bg-[#006241] px-5 text-[12px] font-bold text-white shadow-[0_7px_18px_rgba(0,98,65,.15)] hover:bg-[#004f35]"
              >
                Join PharmaLink
              </Link>
            </div>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-[#dce5e1] text-[#17212b] md:hidden"
              onClick={() =>
                setMobileMenuOpen((current) => !current)
              }
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-[#e2e9e6] bg-white px-5 py-5 md:hidden">
              <div className="mx-auto flex max-w-[1180px] flex-col gap-1">
                {[
                  ['Network', '#network'],
                  ['Jobs', '#jobs'],
                  ['Research', '#research'],
                  ['Communities', '#communities'],
                  ['Events', '#events'],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className="rounded-lg px-3 py-3 text-sm font-semibold text-[#52616d] hover:bg-[#f4f7f6] hover:text-[#006241]"
                  >
                    {label}
                  </a>
                ))}

                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#e5ebe8] pt-4">
                  <Link
                    to="/login"
                    className="grid h-11 place-items-center rounded-lg border border-[#d8e2de] text-sm font-bold"
                  >
                    Log in
                  </Link>

                  <Link
                    to="/register"
                    className="grid h-11 place-items-center rounded-lg bg-[#006241] text-sm font-bold text-white"
                  >
                    Join
                  </Link>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* =====================================================
            HERO
        ====================================================== */}

        <main>
          <section className="pharma-grid relative overflow-hidden border-b border-[#e0e8e4] bg-white">
            <div className="absolute left-[5%] top-[15%] h-56 w-56 rounded-full bg-[#006241]/[0.035] blur-3xl" />

            <div className="pharma-container relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:py-24">
              <div className="max-w-[570px]">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9d9cd] bg-[#f2faf7] px-3.5 py-2 text-[9px] font-extrabold tracking-[0.16em] text-[#006241]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#006241]" />
                  THE PROFESSIONAL NETWORK FOR PHARMACY
                </div>

                <h1 className="max-w-[650px] text-[clamp(3.2rem,6vw,5.4rem)] font-extrabold leading-[0.93] tracking-[-0.065em] text-[#17212b]">
                  Where pharmacy
                  <br />
                  <span className="text-[#006241]">
                    professionals
                  </span>
                  <br />
                  connect, discover,
                  <br />
                  & grow.
                </h1>

                <p className="mt-7 max-w-[560px] text-[16px] leading-[1.7] text-[#63717c] md:text-[17px]">
                  Connect with pharmacists, researchers,
                  students, pharmaceutical companies,
                  recruiters, and educators — all in one
                  professional ecosystem.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/register"
                    className="pharma-link inline-flex h-[50px] items-center gap-2 rounded-[8px] bg-[#006241] px-6 text-[12px] font-bold text-white shadow-[0_10px_25px_rgba(0,98,65,.16)] hover:bg-[#004f35]"
                  >
                    Join PharmaLink
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href="#network"
                    className="pharma-link inline-flex h-[50px] items-center gap-2 rounded-[8px] border border-[#d6e1dd] bg-white px-6 text-[12px] font-bold text-[#24333d] hover:border-[#006241] hover:text-[#006241]"
                  >
                    Explore the network
                    <ChevronRight size={15} />
                  </a>
                </div>

                <div className="mt-7 flex items-center gap-3 text-[10px] font-semibold text-[#7c8992]">
                  <ShieldCheck
                    size={15}
                    className="text-[#006241]"
                  />

                  Built for the pharmacy community.
                  Professional by design.
                </div>
              </div>

              {/* PRODUCT PREVIEW */}

              <div className="relative mx-auto w-full max-w-[650px] lg:translate-x-4">
                <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#006241]/10" />

                <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4169E1]/[0.06]" />

                <div className="relative rounded-[16px] border border-[#d9e3df] bg-white p-2.5 shadow-[0_30px_70px_rgba(23,33,43,.13)]">
                  <div className="flex h-10 items-center justify-between border-b border-[#edf1ef] px-3">
                    <div className="flex items-center gap-2">
                      <span className="grid h-7 w-7 place-items-center rounded-md bg-[#006241] text-[9px] font-bold text-white">
                        P
                      </span>

                      <div className="h-2 w-20 rounded-full bg-[#dfe7e3]" />
                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-5 w-5 rounded-full bg-[#f0f4f2]" />
                      <span className="h-5 w-5 rounded-full bg-[#eef3f1]" />
                    </div>
                  </div>

                  <div className="grid min-h-[390px] grid-cols-[135px_1fr]">
                    <aside className="border-r border-[#edf1ef] bg-[#fbfcfc] p-4">
                      <div className="mb-7 flex items-center gap-2">
                        <span className="h-8 w-8 rounded-full bg-[#006241]" />

                        <div>
                          <div className="h-1.5 w-12 rounded bg-[#d7e1dd]" />
                          <div className="mt-1.5 h-1 w-8 rounded bg-[#e8eeeb]" />
                        </div>
                      </div>

                      {[
                        'My profile',
                        'Network',
                        'Jobs',
                        'Research',
                        'Communities',
                        'Learning',
                      ].map((item, index) => (
                        <div
                          key={item}
                          className={`mb-2 flex items-center gap-2 rounded-md px-2.5 py-2 ${
                            index === 0
                              ? 'bg-[#e9f5f1] text-[#006241]'
                              : 'text-[#8a969f]'
                          }`}
                        >
                          <span className="h-2.5 w-2.5 rounded-sm bg-current opacity-60" />
                          <span className="text-[7px] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </aside>

                    <div className="bg-white p-5">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <div className="mb-2 text-[7px] font-bold uppercase tracking-[0.16em] text-[#006241]">
                            YOUR NETWORK
                          </div>

                          <div className="text-[16px] font-bold tracking-[-0.03em] text-[#17212b]">
                            People worth knowing.
                          </div>
                        </div>

                        <div className="grid h-8 w-8 place-items-center rounded-full bg-[#f2f6f4]">
                          <Search
                            size={13}
                            className="text-[#64727c]"
                          />
                        </div>
                      </div>

                      <div className="mb-5 rounded-lg border border-[#e5ebe8] bg-[#fbfcfc] px-3 py-2.5">
                        <div className="flex items-center gap-2 text-[8px] text-[#9aa5ac]">
                          <Search size={11} />
                          Search pharmacy professionals...
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          [
                            'AP',
                            'Ayesha Patel',
                            'Clinical Pharmacist',
                          ],
                          [
                            'RK',
                            'Rahul Kumar',
                            'Pharmaceutical Researcher',
                          ],
                          [
                            'MS',
                            'Maya Shah',
                            'Pharmacy Student',
                          ],
                          [
                            'AN',
                            'Arjun Nair',
                            'Industry Professional',
                          ],
                        ].map(
                          ([initials, name, role], index) => (
                            <div
                              key={name}
                              className="flex items-center gap-3 rounded-lg border border-[#e8eeeb] p-2.5"
                            >
                              <span
                                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[8px] font-bold text-white ${
                                  index === 0
                                    ? 'bg-[#006241]'
                                    : index === 1
                                      ? 'bg-[#4169E1]'
                                      : 'bg-[#52616d]'
                                }`}
                              >
                                {initials}
                              </span>

                              <div className="min-w-0 flex-1">
                                <div className="text-[9px] font-bold text-[#263640]">
                                  {name}
                                </div>

                                <div className="mt-0.5 truncate text-[7px] text-[#8a969f]">
                                  {role}
                                </div>
                              </div>

                              <button
                                type="button"
                                className="rounded-md border border-[#c9dfd7] px-2 py-1 text-[7px] font-bold text-[#006241]"
                              >
                                Connect
                              </button>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-4 bottom-7 hidden rounded-lg border border-[#dce7e2] bg-white px-4 py-3 shadow-[0_15px_35px_rgba(23,33,43,.09)] sm:block">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-[#edf7f3] text-[#006241]">
                      <Network size={13} />
                    </span>

                    <div>
                      <div className="text-[8px] font-bold text-[#263640]">
                        New connection
                      </div>

                      <div className="mt-1 text-[7px] text-[#8a969f]">
                        Your network is growing.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-3 top-8 hidden rounded-lg border border-[#dce7e2] bg-white px-4 py-3 shadow-[0_15px_35px_rgba(23,33,43,.09)] sm:block">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={13}
                      className="text-[#4169E1]"
                    />

                    <span className="text-[8px] font-bold text-[#263640]">
                      Discover your community
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              PROBLEM
          ====================================================== */}

          <section className="bg-white py-24 lg:py-28">
            <div className="pharma-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#006241]">
                  WHY PHARMALINK
                </span>

                <h2 className="mt-5 max-w-[520px] text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.96] tracking-[-0.06em]">
                  Pharmacy is a
                  <br />
                  connected
                  <br />
                  <span className="text-[#7b8993]">
                    profession.
                  </span>
                  <br />
                  It shouldn't feel
                  <br />
                  fragmented.
                </h2>
              </div>

              <div className="flex flex-col justify-center">
                <p className="max-w-[550px] text-[15px] leading-[1.8] text-[#687681]">
                  The pharmacy ecosystem is full of talented
                  people, important research, career
                  opportunities, and valuable conversations.
                  PharmaLink brings those professional
                  connections into one focused environment.
                </p>

                <div className="mt-9 max-w-[550px] divide-y divide-[#e4ebe8] border-y border-[#e4ebe8]">
                  {[
                    'Find the right professional connections.',
                    'Discover relevant opportunities.',
                    'Build a professional identity that travels with you.',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 py-5"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#edf7f3] text-[8px] font-extrabold text-[#006241]">
                        0{index + 1}
                      </span>

                      <span className="text-[12px] font-bold text-[#34434e]">
                        {item}
                      </span>

                      <ChevronRight
                        size={14}
                        className="ml-auto text-[#a3adb4]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              ECOSYSTEM
          ====================================================== */}

          <section
            id="network"
            className="border-y border-[#e0e8e4] bg-[#f3f7f5] py-24 lg:py-28"
          >
            <div className="pharma-container">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                <div>
                  <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#006241]">
                    THE PHARMALINK ECOSYSTEM
                  </span>

                  <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
                    One professional
                    <br />
                    <span className="text-[#7b8993]">
                      home for pharmacy.
                    </span>
                  </h2>
                </div>

                <p className="max-w-[480px] justify-self-end text-[14px] leading-[1.75] text-[#6c7a84]">
                  Networking, careers, research, learning,
                  communities, and organizations — designed
                  around the way pharmacy professionals
                  actually work and grow.
                </p>
              </div>

              <div className="mt-12 grid overflow-hidden rounded-[14px] border border-[#dbe5e1] bg-white shadow-[0_15px_45px_rgba(23,33,43,.05)] sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => {
                  const Icon = feature.icon

                  return (
                    <div
                      key={feature.title}
                      className="pharma-card group border-b border-[#e3ebe7] p-7 last:border-b-0 sm:nth-[2n]:border-l lg:border-r lg:nth-[3n]:border-r-0"
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-[8px] font-extrabold tracking-[0.1em] text-[#a0adb5]">
                          {feature.number}
                        </span>

                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#edf7f3] text-[#006241]">
                          <Icon size={15} />
                        </span>
                      </div>

                      <h3 className="mt-10 text-[15px] font-extrabold tracking-[-0.025em]">
                        {feature.title}
                      </h3>

                      <p className="mt-3 min-h-[72px] text-[11px] leading-[1.7] text-[#7a8790]">
                        {feature.description}
                      </p>

                      <span className="mt-6 inline-flex items-center gap-1 text-[9px] font-extrabold text-[#006241]">
                        Explore
                        <ArrowRight size={11} />
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* =====================================================
              AUDIENCE
          ====================================================== */}

          <section
            id="communities"
            className="bg-white py-24 lg:py-28"
          >
            <div className="pharma-container">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#006241]">
                    DIFFERENT JOURNEYS
                  </span>

                  <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
                    One network.
                    <br />
                    <span className="text-[#7b8993]">
                      Different journeys.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[390px] text-[14px] leading-[1.75] text-[#71808a]">
                    PharmaLink adapts to where you are in
                    your professional journey — from your
                    first pharmacy class to years of
                    professional experience.
                  </p>
                </div>

                <div className="divide-y divide-[#e3ebe7] border-y border-[#e3ebe7]">
                  {audiences.map((audience) => {
                    const Icon = audience.icon

                    return (
                      <div
                        key={audience.title}
                        className="group flex items-center gap-5 py-5"
                      >
                        <span className="w-6 text-[8px] font-extrabold text-[#a1adb4]">
                          {audience.number}
                        </span>

                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#edf7f3] text-[#006241] transition-colors group-hover:bg-[#006241] group-hover:text-white">
                          <Icon size={16} />
                        </span>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-[13px] font-extrabold text-[#263640]">
                            {audience.title}
                          </h3>

                          <p className="mt-1 max-w-[560px] text-[10px] leading-[1.6] text-[#849099]">
                            {audience.description}
                          </p>
                        </div>

                        <ChevronRight
                          size={15}
                          className="shrink-0 text-[#a5afb5] transition-transform group-hover:translate-x-1 group-hover:text-[#006241]"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              PROFILE
          ====================================================== */}

          <section className="border-y border-[#e0e8e4] bg-[#f3f7f5] py-24 lg:py-28">
            <div className="pharma-container grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#006241]">
                  YOUR PROFESSIONAL IDENTITY
                </span>

                <h2 className="mt-5 max-w-[580px] text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
                  Built around your
                  <br />
                  <span className="text-[#7b8993]">
                    professional journey.
                  </span>
                </h2>

                <p className="mt-6 max-w-[510px] text-[14px] leading-[1.8] text-[#71808a]">
                  Your profile isn't just a name and a
                  photograph. Showcase the education,
                  experience, research, skills, interests,
                  and work that define your place in pharmacy.
                </p>

                <Link
                  to="/register"
                  className="pharma-link mt-8 inline-flex items-center gap-2 text-[11px] font-extrabold text-[#006241]"
                >
                  Build your profile
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="mx-auto w-full max-w-[470px] rounded-[14px] border border-[#d8e3df] bg-white p-2 shadow-[0_25px_55px_rgba(23,33,43,.09)]">
                <div className="h-24 rounded-[10px] bg-[#006241]" />

                <div className="relative px-7 pb-7">
                  <div className="-mt-10 flex items-end justify-between">
                    <div className="grid h-20 w-20 place-items-center rounded-full border-4 border-white bg-[#4169E1] text-xl font-extrabold text-white shadow-sm">
                      AK
                    </div>

                    <button
                      type="button"
                      className="rounded-md border border-[#c9ddd6] px-3 py-1.5 text-[9px] font-extrabold text-[#006241]"
                    >
                      Connect
                    </button>
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold tracking-[-0.035em]">
                    Ayush Kapoor
                  </h3>

                  <p className="mt-1 text-[10px] font-semibold text-[#687782]">
                    Pharmacy Student · Research Enthusiast
                  </p>

                  <p className="mt-4 max-w-[370px] text-[10px] leading-[1.7] text-[#8a969e]">
                    Exploring pharmaceutical research,
                    professional networking, and the future
                    of pharmacy.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {[
                      'Pharmaceutical Research',
                      'Clinical Pharmacy',
                      'Networking',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#edf7f3] px-2.5 py-1 text-[8px] font-bold text-[#006241]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              JOBS
          ====================================================== */}

          <section
            id="jobs"
            className="bg-white py-24 lg:py-28"
          >
            <div className="pharma-container grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#006241]">
                  CAREER
                </span>

                <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
                  Your next
                  <br />
                  opportunity
                  <br />
                  <span className="text-[#7b8993]">
                    could be here.
                  </span>
                </h2>

                <p className="mt-6 max-w-[450px] text-[14px] leading-[1.8] text-[#71808a]">
                  From your first internship to your next
                  professional move, discover opportunities
                  that actually belong to the pharmacy
                  ecosystem.
                </p>

                <a
                  href="#jobs-list"
                  className="pharma-link mt-7 inline-flex items-center gap-2 text-[11px] font-extrabold text-[#006241]"
                >
                  Explore pharmacy careers
                  <ArrowRight size={13} />
                </a>
              </div>

              <div
                id="jobs-list"
                className="rounded-[14px] border border-[#dce5e1] bg-[#f7f9f8] p-3 shadow-[0_15px_40px_rgba(23,33,43,.05)]"
              >
                <div className="flex items-center justify-between border-b border-[#e1e9e5] px-4 py-4">
                  <div>
                    <div className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-[#006241]">
                      RECOMMENDED FOR YOU
                    </div>

                    <div className="mt-1 text-[15px] font-extrabold tracking-[-0.03em]">
                      Career opportunities
                    </div>
                  </div>

                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#006241] text-white">
                    <BriefcaseBusiness size={14} />
                  </span>
                </div>

                <div className="mt-2">
                  {jobs.map((job) => (
                    <div
                      key={job.title}
                      className="pharma-job flex items-center gap-4 border-b border-[#e3ebe7] px-4 py-5 last:border-0"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-[#006241] shadow-sm">
                        <BriefcaseBusiness size={15} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="text-[7px] font-extrabold tracking-[0.12em] text-[#006241]">
                          {job.type}
                        </div>

                        <h3 className="mt-1 text-[12px] font-extrabold">
                          {job.title}
                        </h3>

                        <p className="mt-1 text-[9px] text-[#87939b]">
                          {job.company} · {job.location}
                        </p>
                      </div>

                      <ChevronRight
                        size={14}
                        className="text-[#a2adb4]"
                      />
                    </div>
                  ))}
                </div>

                <div className="px-4 py-3">
                  <span className="text-[9px] font-extrabold text-[#006241]">
                    See all opportunities →
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              RESEARCH
          ====================================================== */}

          <section
            id="research"
            className="border-y border-[#e0e8e4] bg-[#f3f7f5] py-24 lg:py-28"
          >
            <div className="pharma-container grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
              <div className="order-2 lg:order-1">
                <div className="rounded-[14px] border border-[#d8e3df] bg-white p-3 shadow-[0_20px_50px_rgba(23,33,43,.07)]">
                  <div className="rounded-[10px] border border-[#e5ebe8] p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-extrabold tracking-[0.14em] text-[#4169E1]">
                        RESEARCH
                      </span>

                      <span className="text-[8px] font-semibold text-[#9aa5ac]">
                        2026
                      </span>
                    </div>

                    <div className="mt-12 grid h-28 place-items-center rounded-lg bg-[#f3f7f5]">
                      <FlaskConical
                        size={35}
                        strokeWidth={1.5}
                        className="text-[#006241]"
                      />
                    </div>

                    <h3 className="mt-6 text-[17px] font-extrabold tracking-[-0.035em]">
                      Discover what's shaping
                      <br />
                      the future of pharmacy.
                    </h3>

                    <p className="mt-3 text-[10px] leading-[1.7] text-[#87939b]">
                      Find researchers, publications,
                      projects, research interests, and ideas
                      worth exploring.
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#e5ebe8] pt-5">
                      <div>
                        <div className="text-[14px] font-extrabold">
                          2.4K
                        </div>
                        <div className="mt-1 text-[7px] text-[#919da5]">
                          Researchers
                        </div>
                      </div>

                      <div>
                        <div className="text-[14px] font-extrabold">
                          8.7K
                        </div>
                        <div className="mt-1 text-[7px] text-[#919da5]">
                          Publications
                        </div>
                      </div>

                      <div>
                        <div className="text-[14px] font-extrabold">
                          340+
                        </div>
                        <div className="mt-1 text-[7px] text-[#919da5]">
                          Projects
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#4169E1]">
                  RESEARCH & INNOVATION
                </span>

                <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
                  Ideas become
                  <br />
                  <span className="text-[#7b8993]">
                    discoveries.
                  </span>
                </h2>

                <p className="mt-6 max-w-[490px] text-[14px] leading-[1.8] text-[#71808a]">
                  Research becomes more meaningful when the
                  right people can find it. PharmaLink gives
                  researchers and professionals a focused
                  place to discover each other's work and
                  collaborate.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    'Publications',
                    'Researchers',
                    'Projects',
                    'Research interests',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#d6e1dd] bg-white px-3 py-1.5 text-[8px] font-bold text-[#65737d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#research"
                  className="pharma-link mt-7 inline-flex items-center gap-2 text-[11px] font-extrabold text-[#006241]"
                >
                  Explore research
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </section>

          {/* =====================================================
              DIFFERENTIATION
          ====================================================== */}

          <section className="bg-white py-24 lg:py-28">
            <div className="pharma-container grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#006241]">
                  WHY PHARMALINK
                </span>

                <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
                  Not just another
                  <br />
                  <span className="text-[#7b8993]">
                    professional
                  </span>
                  <br />
                  network.
                </h2>

                <p className="mt-6 max-w-[450px] text-[14px] leading-[1.8] text-[#71808a]">
                  PharmaLink starts with one simple idea:
                  professional networking works better when
                  the network actually understands your field.
                </p>
              </div>

              <div className="overflow-hidden rounded-[14px] border border-[#dce5e1] bg-[#f7f9f8]">
                <div className="grid grid-cols-2 border-b border-[#dfe7e3] bg-white text-[9px] font-extrabold">
                  <div className="px-5 py-4 text-[#a0abb2]">
                    GENERAL NETWORK
                  </div>

                  <div className="border-l border-[#dfe7e3] px-5 py-4 text-[#006241]">
                    PHARMALINK
                  </div>
                </div>

                {[
                  ['Professional identity', 'Pharmacy-first'],
                  ['Career discovery', 'Pharmacy opportunities'],
                  ['Research', 'Research network'],
                  ['Communities', 'Pharmacy communities'],
                  ['Learning', 'Pharmacy learning'],
                  ['Organizations', 'Pharma ecosystem'],
                ].map(([left, right], index) => (
                  <div
                    key={left}
                    className="grid grid-cols-2 border-b border-[#e1e9e5] last:border-0"
                  >
                    <div className="px-5 py-4 text-[10px] font-semibold text-[#7d8991]">
                      {left}
                    </div>

                    <div className="border-l border-[#e1e9e5] px-5 py-4 text-[10px] font-extrabold text-[#006241]">
                      <span className="mr-2 text-[8px] text-[#a0aaa9]">
                        0{index + 1}
                      </span>
                      {right}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              FINAL CTA
          ====================================================== */}

          <section className="px-5 py-20 md:px-8 lg:py-24">
            <div className="pharma-container overflow-hidden rounded-[16px] bg-[#006241]">
              <div className="pharma-grid relative px-7 py-16 md:px-14 lg:px-16 lg:py-20">
                <div className="absolute right-[-70px] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-white/10" />

                <div className="absolute right-[10px] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full border border-white/[0.08]" />

                <div className="relative z-10 max-w-[700px]">
                  <span className="text-[9px] font-extrabold tracking-[0.16em] text-white/60">
                    PHARMACY'S PROFESSIONAL NETWORK
                  </span>

                  <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.06em] text-white">
                    Build your place
                    <br />
                    in the pharmacy
                    <br />
                    <span className="text-white/55">
                      community.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[500px] text-[14px] leading-[1.75] text-white/70">
                    Create your professional profile,
                    connect with the right people, discover
                    opportunities, and grow with pharmacy.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/register"
                      className="pharma-link inline-flex h-[48px] items-center gap-2 rounded-[7px] bg-white px-5 text-[11px] font-extrabold text-[#006241] hover:bg-[#f3f7f5]"
                    >
                      Create your profile
                      <ArrowRight size={13} />
                    </Link>

                    <a
                      href="#network"
                      className="pharma-link inline-flex h-[48px] items-center gap-2 rounded-[7px] border border-white/25 px-5 text-[11px] font-extrabold text-white hover:border-white/50"
                    >
                      Explore PharmaLink
                    </a>
                  </div>
                </div>

                <div className="absolute right-[70px] top-1/2 hidden -translate-y-1/2 lg:block">
                  <div className="relative grid h-36 w-36 place-items-center rounded-full border border-white/20">
                    <div className="absolute inset-5 rounded-full border border-white/15" />

                    <div className="relative grid h-16 w-16 place-items-center rounded-full bg-white text-2xl font-extrabold text-[#006241] shadow-[0_15px_40px_rgba(0,0,0,.15)]">
                      P
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <footer className="bg-[#172733] text-white">
          <div className="pharma-container grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link
                to="/"
                className="flex items-center gap-2"
              >
                <span className="grid h-8 w-8 place-items-center rounded-md bg-[#006241] text-[11px] font-extrabold">
                  P
                </span>

                <span className="text-[13px] font-extrabold">
                  Pharma<span className="text-[#52b89a]">
                    Link
                  </span>
                </span>
              </Link>

              <p className="mt-5 max-w-[260px] text-[10px] leading-[1.7] text-white/45">
                The professional network built for
                pharmacy.
              </p>
            </div>

            <div>
              <div className="text-[8px] font-extrabold tracking-[0.12em] text-white/40">
                EXPLORE
              </div>

              <div className="mt-4 space-y-3 text-[10px] text-white/65">
                <a href="#network" className="block hover:text-white">
                  Network
                </a>
                <a href="#jobs" className="block hover:text-white">
                  Jobs
                </a>
                <a href="#research" className="block hover:text-white">
                  Research
                </a>
                <a href="#communities" className="block hover:text-white">
                  Communities
                </a>
              </div>
            </div>

            <div>
              <div className="text-[8px] font-extrabold tracking-[0.12em] text-white/40">
                PHARMALINK
              </div>

              <div className="mt-4 space-y-3 text-[10px] text-white/65">
                <Link to="/register" className="block hover:text-white">
                  Join
                </Link>
                <Link to="/login" className="block hover:text-white">
                  Log in
                </Link>
                <a href="#network" className="block hover:text-white">
                  About
                </a>
                <a href="#network" className="block hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <div className="text-[8px] font-extrabold tracking-[0.12em] text-white/40">
                LEGAL
              </div>

              <div className="mt-4 space-y-3 text-[10px] text-white/65">
                <a href="#network" className="block hover:text-white">
                  Privacy
                </a>
                <a href="#network" className="block hover:text-white">
                  Terms
                </a>
                <a href="#network" className="block hover:text-white">
                  Help
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="pharma-container flex flex-col gap-3 py-5 text-[8px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
              <span>
                © 2026 PharmaLink. Built for the pharmacy
                community.
              </span>

              <span className="flex items-center gap-1.5">
                <MessageCircle size={11} />
                Connect. Discover. Grow.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Landing