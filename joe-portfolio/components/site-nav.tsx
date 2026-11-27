"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

const items = [
  { href: "/", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/work")
  return pathname.startsWith(href)
}

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-site items-center justify-between gap-3 px-5 md:px-8">
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${isActive(pathname, item.href) ? "text-accent-ink" : "text-faint hover:text-ink"}`}
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
