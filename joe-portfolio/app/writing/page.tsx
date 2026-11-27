import type { Metadata } from "next"
import Link from "next/link"

import { links, posts } from "@/lib/content"

export const metadata: Metadata = { title: "Writing — Joseph Yared" }

export default function WritingPage() {
  return (
    <div className="mx-auto w-full max-w-[720px] px-5 pb-24 pt-14 md:pb-32 md:pt-24">
      <h1 className="font-serif text-[2.6rem] leading-[1.08] md:text-[3.25rem]">Writing</h1>
      <p className="mt-4 text-dim">
        Essays and notes, published on{" "}
        <Link href={links.substack} target="_blank" rel="noreferrer" className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
          Substack
        </Link>
        .
      </p>

      <ul className="mt-12">
        {posts.map((p) => (
          <li key={p.title}>
            <Link href={p.href} target="_blank" rel="noreferrer" className="group -mx-3 block rounded-md px-3 py-4 transition-colors hover:bg-soft">
              <div className="flex items-baseline justify-between gap-6">
                <h2 className="font-serif text-2xl leading-tight">{p.title}</h2>
                <span className="shrink-0 text-sm text-faint">{p.date}</span>
              </div>
              <p className="mt-1 text-sm text-dim">{p.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={`${links.substack}/subscribe`}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block text-sm text-faint transition-colors hover:text-ink"
      >
        Subscribe for new posts ↗
      </Link>
    </div>
  )
}
