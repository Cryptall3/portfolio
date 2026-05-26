"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface AnalyticsProject {
  title: string
  description: string
  image: string
  link: string
  client?: string
  tags: string[]
  category: "sql" | "python"
}

export function AnalyticsCard({ project }: { project: AnalyticsProject }) {
  const isSql = project.category === "sql"
  return (
    <div className="analytics-card group">
      <div className="relative h-36 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(8,9,13,0.9) 0%, rgba(8,9,13,0.3) 60%, transparent 100%)",
          }}
        />
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-600 px-2 py-1 rounded-md"
            style={{
              background: isSql ? "rgba(0,212,255,0.15)" : "rgba(167,139,250,0.15)",
              border: `1px solid ${isSql ? "rgba(0,212,255,0.3)" : "rgba(167,139,250,0.3)"}`,
              color: isSql ? "var(--clr-cyan)" : "#a78bfa",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
            }}
          >
            {isSql ? "SQL" : "Python"}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4
            className="text-sm font-600 text-white leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {project.title}
          </h4>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 mt-0.5"
            style={{ color: "#475569" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
          >
            <ExternalLink size={13} />
          </Link>
        </div>
        {project.client && (
          <p className="text-xs mb-2" style={{ color: "var(--clr-amber)", fontFamily: "var(--font-mono)" }}>
            {project.client}
          </p>
        )}
        <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: "#64748b" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#64748b",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectCard({ project }: { project: AnalyticsProject }) {
  return <AnalyticsCard project={project} />
}
