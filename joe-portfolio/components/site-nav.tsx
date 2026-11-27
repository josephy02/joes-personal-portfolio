"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const items = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#writing", id: "writing", label: "Writing" },
  { href: "#about", id: "about", label: "About" },
  { href: "#contact", id: "contact", label: "Contact" },
]

export function SiteNav() {
  const [active, setActive] = useState("work")

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-site items-center justify-between gap-3 px-5 md:px-8">
        <nav className="flex items-center gap-3.5 text-[13px] sm:gap-6 sm:text-sm">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`transition-colors ${active === item.id ? "text-accent-ink" : "text-faint hover:text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
