import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { PlaceholderArt } from "@/components/placeholder-art"
import { experiences, findWork, projects } from "@/lib/content"

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return [...experiences, ...projects].map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const work = findWork((await params).slug)
  if (!work) return {}
  const name = work.kind === "experience" ? work.item.company : work.item.name
  return { title: `${name} — Joseph Yared` }
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-faint">{label}</dt>
      <dd className="mt-1 text-dim">{value}</dd>
    </div>
  )
}

export default async function WorkDetailPage({ params }: { params: Params }) {
  const work = findWork((await params).slug)
  if (!work) notFound()

  const back = work.kind === "experience" ? { href: "/", label: "Work" } : { href: "/projects", label: "Projects" }
  const all = work.kind === "experience" ? experiences : projects
  const index = all.findIndex((w) => w.slug === work.item.slug)
  const next = all[(index + 1) % all.length]
  const nextName = "company" in next ? next.company : next.name

  return (
    <article className="mx-auto w-full max-w-site px-5 pb-24 pt-10 md:px-8 md:pb-32 md:pt-16">
      <Link href={back.href} className="text-sm text-faint transition-colors hover:text-ink">
        ← {back.label}
      </Link>

      {work.kind === "experience" ? (
        <>
          <header className="mt-8 max-w-[720px]">
            <h1 className="font-serif text-[2.6rem] leading-[1.08] md:text-[3.25rem]">{work.item.company}</h1>
            <dl className="mt-8 grid grid-cols-2 gap-5 text-sm sm:grid-cols-4">
              <Meta label="Role" value={work.item.title} />
              <Meta label="Period" value={work.item.period} />
              <Meta label="Location" value={work.item.location} />
              <Meta label="Status" value={work.item.status} />
            </dl>
          </header>
          <PlaceholderArt label={work.item.company} background={work.item.art} className="mt-12 aspect-[4/3] sm:aspect-[2/1]" />
          <div className="mt-12 max-w-[720px]">
            <ul className="space-y-4 text-lg leading-relaxed text-dim">
              {work.item.description.map((d) => (
                <li key={d} className="flex gap-4">
                  <span className="mt-[13px] h-1 w-1 shrink-0 rounded-full bg-faint" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-faint">{work.item.skills.join(" · ")}</p>
          </div>
        </>
      ) : (
        <>
          <header className="mt-8 max-w-[720px]">
            <h1 className="font-serif text-[2.6rem] leading-[1.08] md:text-[3.25rem]">{work.item.name}</h1>
            <p className="mt-4 text-lg text-dim">{work.item.title}</p>
            <div className="mt-6 flex gap-5 text-sm">
              <Link href={work.item.links.demo} target="_blank" rel="noreferrer" className="hover:text-accent-ink">
                View Demo ↗
              </Link>
              <Link href={work.item.links.github} target="_blank" rel="noreferrer" className="hover:text-accent-ink">
                Source Code ↗
              </Link>
            </div>
          </header>
          <PlaceholderArt label={work.item.name} background={work.item.art} className="mt-12 aspect-[4/3] sm:aspect-[2/1]" />
          <div className="mt-12 max-w-[720px] space-y-5 text-lg leading-relaxed text-dim">
            <p className="text-ink">{work.item.description}</p>
            <p>{work.item.longDescription}</p>
            <p className="pt-3 text-sm text-faint">{work.item.tags.join(" · ")}</p>
          </div>
        </>
      )}

      <Link href={`/work/${next.slug}`} className="group mt-20 flex items-baseline justify-between border-t border-line pt-6 text-sm">
        <span className="text-faint">Next</span>
        <span className="transition-colors group-hover:text-accent-ink">{nextName} →</span>
      </Link>
    </article>
  )
}
