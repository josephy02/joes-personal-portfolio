"use client"

import Link from "next/link"
import { useState } from "react"
import { PlaceholderArt } from "@/components/placeholder-art"
import type { Project } from "@/lib/content"

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const [filter, setFilter] = useState("All")
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              filter === c ? "border-ink bg-ink text-paper" : "border-line text-dim hover:border-faint hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2">
        {shown.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
            <PlaceholderArt
              label={p.name}
              background={p.art}
              size="md"
              className="aspect-[4/3] transition-[filter] duration-500 group-hover:brightness-[1.05]"
            />
            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium">{p.name}</p>
                <p className="mt-0.5 text-sm text-dim">{p.description}</p>
              </div>
              <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-xs text-faint">{p.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
