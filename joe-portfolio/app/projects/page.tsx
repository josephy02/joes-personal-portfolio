import type { Metadata } from "next"
import Link from "next/link"

import { ProjectGrid } from "@/components/project-grid"
import { links, projects } from "@/lib/content"

export const metadata: Metadata = { title: "Projects — Joseph Yared" }

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-site px-5 pb-24 pt-14 md:px-8 md:pb-32 md:pt-24">
      <h1 className="font-serif text-[2.6rem] leading-[1.08] md:text-[3.25rem]">Featured Projects</h1>
      <p className="mt-4 max-w-xl text-dim">
        A selection of my most impactful work in AI and machine learning. More on{" "}
        <Link href={links.github} target="_blank" rel="noreferrer" className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
          GitHub
        </Link>
        .
      </p>
      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  )
}
