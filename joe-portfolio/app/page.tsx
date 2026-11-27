import Link from "next/link"

import { Reveal } from "@/components/reveal"
import { PlaceholderArt } from "@/components/placeholder-art"
import { experiences } from "@/lib/content"

export default function WorkPage() {
  const [current, ...previous] = experiences

  return (
    <div className="mx-auto w-full max-w-site px-5 md:px-8">
      <section className="pb-14 pt-14 md:pb-20 md:pt-24">
        <Reveal>
          <h1 className="max-w-[860px] text-balance font-serif text-[2.6rem] leading-[1.08] tracking-[-0.01em] md:text-[3.75rem]">
            Hi. I&apos;m Joseph. I Build AI for People.
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 grid gap-5 text-sm sm:grid-cols-[minmax(0,220px)_minmax(0,420px)] sm:gap-12">
          <div>
            <p className="text-faint">Currently</p>
            <p className="mt-1.5 text-dim">
              {current.title} @ {current.company} in {current.location}
            </p>
          </div>
          <div>
            <p className="text-faint">Previously</p>
            <p className="mt-1.5 text-dim">
              {previous.map((e) => `${e.title} @ ${e.company}`).join(", ")}
            </p>
          </div>
        </Reveal>
      </section>

      <section aria-label="Work" className="space-y-12 pb-24 md:space-y-16 md:pb-32">
        {experiences.map((e, i) => (
          <Reveal key={e.slug} delay={i === 0 ? 0.15 : 0}>
            <Link href={`/work/${e.slug}`} className="group block">
              <PlaceholderArt
                label={e.company}
                background={e.art}
                className="aspect-[4/3] transition-[filter,transform] duration-700 ease-out group-hover:brightness-[1.04] sm:aspect-[16/9] lg:aspect-[2/1]"
              />
              <p className="mt-3 flex items-baseline gap-2 text-sm">
                <span>{e.company}</span>
                <span className="text-faint">/</span>
                <span className="text-faint">{e.status}</span>
                <span className="ml-auto translate-x-[-4px] text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </p>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
