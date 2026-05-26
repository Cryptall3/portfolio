"use client"

import { useState, useEffect } from "react"

const terminalLines = [
  { parts: [{ text: 'const role', cls: "cmd" }, { text: " = ", cls: "" }, { text: '"Full-Stack Developer"', cls: "str" }] },
  { parts: [{ text: 'const stacks', cls: "cmd" }, { text: " = ", cls: "" }, { text: '["Java", "Next.js", "TypeScript", "Python"]', cls: "str" }] },
  { parts: [{ text: "// Global Impact", cls: "cmt" }] },
  { parts: [{ text: "users.total", cls: "cmd" }, { text: " = ", cls: "" }, { text: '"11,000+"', cls: "str" }, { text: " // On apps developed", cls: "cmt" }] },
  { parts: [{ text: "clientProjects", cls: "cmd" }, { text: " = ", cls: "" }, { text: "70", cls: "val" }, { text: " // Across all stacks", cls: "cmt" }] },
  { parts: [{ text: "chainsWorkedWith", cls: "cmd" }, { text: " = ", cls: "" }, { text: "20", cls: "val" }] },
  { parts: [{ text: "experience.years", cls: "cmd" }, { text: " = ", cls: "" }, { text: "5", cls: "val" }] },
  { parts: [{ text: "status", cls: "cmd" }, { text: " = ", cls: "" }, { text: '"Building..."', cls: "str" }] },
]

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= terminalLines.length) {
          clearInterval(timer)
          return v
        }
        return v + 1
      })
    }, 380)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="terminal-window w-full max-w-md mx-auto">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="terminal-title">allwell@portfolio:~</span>
      </div>
      <div className="terminal-body">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <span key={i} className="terminal-line">
            {line.parts.map((part, j) =>
              part.cls ? (
                <span key={j} className={part.cls}>
                  {part.text}
                </span>
              ) : (
                <span key={j} style={{ color: "#94a3b8" }}>
                  {part.text}
                </span>
              )
            )}
            <br />
          </span>
        ))}
        {visibleLines <= terminalLines.length && <span className="terminal-cursor" />}
      </div>
    </div>
  )
}
