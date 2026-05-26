"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Analytics", href: "#analytics" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              className="text-lg font-700 text-white"
            >
              Alewu<span style={{ color: "var(--clr-cyan)" }}>.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#94a3b8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/main%20resume.pdf"
              download="Alewu_Allwell_Resume.pdf"
              className="btn-primary"
              style={{ padding: "8px 18px", fontSize: "0.82rem" }}
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{ background: "var(--clr-card)", border: "1px solid var(--clr-card-border)" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 text-white" />
            ) : (
              <Menu className="h-4 w-4 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "var(--clr-card-border)" }}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium py-2 transition-colors"
                  style={{ color: "#94a3b8" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/main%20resume.pdf"
                download="Alewu_Allwell_Resume.pdf"
                className="btn-primary mt-2"
                style={{ padding: "10px 18px", fontSize: "0.85rem", alignSelf: "flex-start" }}
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
