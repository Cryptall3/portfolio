"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Mail, Twitter, MessageSquare, Linkedin, ExternalLink, ArrowUpRight, Download } from "lucide-react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import { AnalyticsCard } from "@/components/project-card"
import { featuredProjects, sqlProjects, pythonProjects } from "@/lib/projects"

const TerminalWidget = dynamic(() => import("@/components/terminal-widget"), { ssr: false })

const stats = [
  { value: "8K+", label: "Coresightbot Users" },
  { value: "3.2K+", label: "SC0PE Users" },
  { value: "78%", label: "Alpha Win Rate" },
  { value: "650+", label: "Students Taught" },
  { value: "5yrs", label: "DeFi Experience" },
]

const experience = [
  {
    company: "Coresightbot",
    role: "Lead Developer",
    period: "Nov 2024 – Present",
    type: "Full-Time",
    color: "var(--clr-cyan)",
    bullets: [
      "Built a multi-chain data indexing engine in Java serving 8,000+ users across Solana, Arbitrum, Ethereum, and Base.",
      "Developed an alpha detection system scanning Solana with a 78% win rate - called tokens yielding 300x, 400x, and 500x returns ($kabuto, $neo, $yaranaika).",
      "Created CORA, an autonomous trading agent that executes trades on alpha alerts using user-preset strategies.",
      "Secured a competitive development grant from Superteam by demonstrating technical scalability and code quality.",
    ],
  },
  {
    company: "Predictefy",
    role: "Developer / Data Analyst",
    period: "Jan 2026 – Mar 2026",
    type: "Contract",
    color: "var(--clr-amber)",
    bullets: [
      "Built a data normalization engine to standardize inconsistent schemas from 5+ prediction markets (Polymarket, Kalshi, and others).",
      "Created a market filtering and Closed Market detection system that parses multiple date/status formats.",
      "Developed the market discovery UI in Next.js with custom state-driven sorting to manage thousands of real-time rows.",
    ],
  },
  {
    company: "Nirvana Academy",
    role: "Tutor - DeFi Operations & Analytics",
    period: "Apr 2025 – Dec 2025",
    type: "Part-Time",
    color: "#a78bfa",
    bullets: [
      "Taught 650+ students how to translate complex blockchain events into structured SQL analysis.",
      "Created a technical curriculum focused on data modeling and backend logic for DeFi applications.",
    ],
  },
  {
    company: "SC0PE",
    role: "Founder & Lead Developer",
    period: "2024 – 2025",
    type: "Founder",
    color: "#a78bfa",
    bullets: [
      "Built and launched a DeFi trading terminal leveraging the 0G tech stack for AI-powered trading on 0G, Ethereum, Base, and BSC.",
      "Scaled the platform to 3,200+ users within 3 months, becoming the #1 analytics tool in the 0G ecosystem.",
      "Architected AI agent systems for smart whale detection, community health scoring, risk assessment, and real-time cross-chain pattern recognition.",
      "Implemented privacy-first analytics with zero-knowledge processing and federated learning across multiple chains.",
    ],
  },
]

const techStack: Record<string, string[]> = {
  Languages: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
  "Frameworks & Runtime": ["Spring Boot", "Next.js", "Node.js", "React"],
  "Data & Infra": ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Docker"],
  "Web3 & Blockchain": ["Solana", "Ethereum", "Base", "Arbitrum", "BSC"],
  Tools: ["Git", "WebSockets", "RESTful APIs", "ETL Pipelines", "Mode Analytics"],
}

const accentColors: Record<string, string> = {
  cyan: "var(--clr-cyan)",
  purple: "#a78bfa",
  amber: "var(--clr-amber)",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--clr-bg)", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section className="relative pt-36 pb-28 px-6 overflow-hidden">
          <div className="hero-bg" />
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* Left */}
              <div className="flex-1 space-y-6 animate-fade-in-up">
                <div className="section-label">Available for opportunities</div>
                <h1 style={{ fontFamily: "var(--font-space-grotesk)", lineHeight: 1.05 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
                  Alewu <span className="gradient-text">Allwell</span>
                </h1>
                <p style={{ fontFamily: "var(--font-space-grotesk)", color: "#94a3b8" }}
                   className="text-2xl md:text-3xl font-500">
                  Full-Stack Developer &amp; Web3 Engineer
                </p>
                <p style={{ color: "#64748b", lineHeight: 1.7 }} className="text-base max-w-lg">
                  5+ years building infrastructure, data systems, and products that power Web3 at scale.
                  From multi-chain indexing engines to autonomous trading agents and AI-powered analytics platforms.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href="#projects" className="btn-primary">
                    View My Work <ArrowUpRight size={16} />
                  </Link>
                  <a href="/main%20resume.pdf" download="Alewu_Allwell_Resume.pdf" className="btn-outline">
                    <Download size={16} /> Download CV
                  </a>
                </div>
              </div>

              {/* Right - Terminal */}
              <div className="flex-1 w-full animate-fade-in-up delay-300">
                <TerminalWidget />
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="py-10 px-6 border-y" style={{ borderColor: "var(--clr-card-border)", background: "var(--clr-bg2)" }}>
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <div className="section-label">About</div>
                <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
                    className="text-3xl md:text-4xl font-bold text-white">
                  I build things that ship.
                </h2>
                <p style={{ color: "#64748b", lineHeight: 1.8 }}>
                  I&apos;m a data-focused full-stack developer with deep roots in Web3. Over the last 5+ years I&apos;ve
                  designed ETL systems, built multi-chain indexing engines, shipped production dApps, and taught hundreds
                  of developers how to work with on-chain data.
                </p>
                <p style={{ color: "#64748b", lineHeight: 1.8 }}>
                  My stack is broad - Java backend systems, TypeScript/Next.js frontends, Python data pipelines -
                  but my focus is always on engineering things that are fast, scalable, and actually useful.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="badge-glow">Superteam Grantee</span>
                  <span style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.3)", color: "#a78bfa" }}
                        className="badge-glow">
                    #1 in 0G Ecosystem
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Backend Systems", desc: "Java, Spring Boot, Node.js - building the engines that power products." },
                  { label: "Frontend", desc: "Next.js, TypeScript, React - shipping clean, fast user interfaces." },
                  { label: "Data Engineering", desc: "ETL pipelines, normalization engines, data warehousing at scale." },
                  { label: "Web3 Native", desc: "On-chain indexing, DeFi protocols, multi-chain infrastructure." },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-5">
                    <h4 style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--clr-cyan)", fontSize: "0.9rem", fontWeight: 600, marginBottom: 8 }}>
                      {item.label}
                    </h4>
                    <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-20 px-6" style={{ background: "var(--clr-bg2)" }}>
          <div className="container mx-auto max-w-7xl">
            <div className="section-label">Experience</div>
            <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
                className="text-3xl md:text-4xl font-bold text-white mb-12">
              Where I&apos;ve Worked
            </h2>
            <div className="timeline">
              {experience.map((job) => (
                <div key={job.company} className="timeline-item">
                  <div className="glass-card p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 style={{ fontFamily: "var(--font-space-grotesk)", color: "white", fontSize: "1.15rem", fontWeight: 700 }}>
                          {job.role}
                        </h3>
                        <span style={{ color: job.color, fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.95rem" }}>
                          {job.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#475569", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", padding: "3px 10px", borderRadius: "100px" }}>
                          {job.type}
                        </span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#64748b" }}>
                          {job.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3" style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.65 }}>
                          <span style={{ color: job.color, marginTop: 4, flexShrink: 0 }}>▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="section-label">Tech Stack</div>
            <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
                className="text-3xl md:text-4xl font-bold text-white mb-10">
              Tools &amp; Technologies
            </h2>
            <div className="space-y-6">
              {Object.entries(techStack).map(([group, items]) => (
                <div key={group} className="flex flex-col sm:flex-row gap-3">
                  <div className="shrink-0 w-44">
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {group}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="tech-chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section id="projects" className="py-20 px-6" style={{ background: "var(--clr-bg2)" }}>
          <div className="container mx-auto max-w-7xl">
            <div className="section-label">Projects</div>
            <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
                className="text-3xl md:text-4xl font-bold text-white mb-12">
              Things I&apos;ve Built
            </h2>
            <div className="space-y-8">
              {featuredProjects.map((project) => {
                const accent = accentColors[project.accentColor] ?? "var(--clr-cyan)"
                return (
                  <div key={project.title} className="featured-project">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className="relative lg:w-2/5 h-56 lg:h-auto overflow-hidden" style={{ minHeight: 220 }}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(8,9,13,0.95) 100%)" }} />
                        <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, rgba(8,9,13,0.95) 0%, transparent 60%)" }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-7 md:p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="project-tag" style={{ background: `rgba(${accent === "var(--clr-cyan)" ? "0,212,255" : accent === "var(--clr-amber)" ? "245,158,11" : "167,139,250"},0.12)`, borderColor: `rgba(${accent === "var(--clr-cyan)" ? "0,212,255" : accent === "var(--clr-amber)" ? "245,158,11" : "167,139,250"},0.3)`, color: accent }}>
                              Featured Build
                            </span>
                            {project.badges.map((b) => (
                              <span key={b} className="badge-glow" style={{ animation: "none", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }}>
                                {b}
                              </span>
                            ))}
                          </div>
                          <h3 style={{ fontFamily: "var(--font-space-grotesk)", color: "white", fontSize: "1.5rem", fontWeight: 700, marginBottom: 4 }}>
                            {project.title}
                          </h3>
                          <p style={{ color: accent, fontSize: "0.85rem", fontWeight: 600, marginBottom: 14, fontFamily: "var(--font-space-grotesk)" }}>
                            {project.subtitle}
                          </p>
                          <p style={{ color: "#64748b", lineHeight: 1.75, fontSize: "0.9rem", marginBottom: 16 }}>
                            {project.description}
                          </p>
                          {project.note && (
                            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#475569", marginBottom: 12 }}>
                              // {project.note}
                            </p>
                          )}
                          {/* Stats row */}
                          {project.stats && (
                            <div className="flex flex-wrap gap-4 mb-5">
                              {project.stats.map((st) => (
                                <div key={st.label} className="text-center">
                                  <div style={{ fontFamily: "var(--font-space-grotesk)", color: accent, fontWeight: 700, fontSize: "1.1rem" }}>{st.value}</div>
                                  <div style={{ color: "#475569", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{st.label}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span key={tag} className="tech-chip" style={{ fontSize: "0.72rem", padding: "4px 10px" }}>{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          {project.liveUrl ? (
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                              className="btn-outline" style={{ alignSelf: "flex-start", display: "inline-flex" }}>
                              View Project <ExternalLink size={14} />
                            </Link>
                          ) : (
                            <span className="btn-outline" style={{ opacity: 0.4, cursor: "not-allowed", display: "inline-flex" }}>
                              Private Project
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── BLOCKCHAIN ANALYTICS ── */}
        <section id="analytics" className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="section-label">Blockchain Analytics</div>
            <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
                className="text-3xl md:text-4xl font-bold text-white mb-4">
              On-Chain Research
            </h2>
            <p style={{ color: "#64748b", marginBottom: 48, maxWidth: 560 }}>
              SQL dashboards and Python analyses across Dune Analytics, Flipside Crypto, and Kaggle -
              covering DeFi protocols, token distributions, and cross-chain market research.
            </p>

            {/* SQL */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 600, color: "var(--clr-cyan)", background: "var(--clr-cyan-dim)", border: "1px solid var(--clr-cyan-border)", padding: "4px 12px", borderRadius: "6px" }}>
                  SQL
                </span>
                <span style={{ color: "#475569", fontSize: "0.82rem" }}>Dune Analytics &amp; Flipside Crypto</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sqlProjects.map((p) => (
                  <AnalyticsCard key={p.title} project={p as any} />
                ))}
              </div>
            </div>

            {/* Python */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 600, color: "#a78bfa", background: "rgba(167,139,250,0.10)", border: "1px solid rgba(167,139,250,0.25)", padding: "4px 12px", borderRadius: "6px" }}>
                  Python
                </span>
                <span style={{ color: "#475569", fontSize: "0.82rem" }}>Kaggle Analyses</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pythonProjects.map((p) => (
                  <AnalyticsCard key={p.title} project={p as any} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20 px-6" style={{ background: "var(--clr-bg2)" }}>
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-xl mx-auto text-center">
              <div className="section-label" style={{ justifyContent: "center" }}>Contact</div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p style={{ color: "#64748b", marginBottom: 40, lineHeight: 1.7 }}>
                I&apos;m open to full-time roles, contracts, and interesting Web3 projects.
                If you&apos;re building something ambitious, reach out.
              </p>
              <div className="flex flex-col gap-3 text-left">
                {[
                  { icon: <Mail size={16} />, label: "allwellomojo@gmail.com", href: "mailto:allwellomojo@gmail.com" },
                  { icon: <Linkedin size={16} />, label: "linkedin.com/in/aallwell", href: "https://www.linkedin.com/in/aallwell/" },
                  { icon: <Github size={16} />, label: "github.com/Cryptall3", href: "https://github.com/Cryptall3" },
                  { icon: <Twitter size={16} />, label: "@cryptall3", href: "https://twitter.com/cryptall3" },
                  { icon: <MessageSquare size={16} />, label: "Telegram: @allwell11", href: "https://t.me/allwell11" },
                ].map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                    <span className="contact-icon">{link.icon}</span>
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} style={{ marginLeft: "auto", opacity: 0.5 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-8 px-6" style={{ borderTop: "1px solid var(--clr-card-border)" }}>
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span style={{ fontFamily: "var(--font-space-grotesk)", color: "#475569", fontSize: "0.85rem" }}>
                © {new Date().getFullYear()} Alewu Allwell - Full-Stack Developer
              </span>
              <div className="flex items-center gap-5">
                {[
                  { href: "https://github.com/Cryptall3", icon: <Github size={16} /> },
                  { href: "https://www.linkedin.com/in/aallwell/", icon: <Linkedin size={16} /> },
                  { href: "https://twitter.com/cryptall3", icon: <Twitter size={16} /> },
                ].map((s) => (
                  <Link key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#475569" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-cyan)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}>
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}
