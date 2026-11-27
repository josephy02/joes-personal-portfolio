import type { Metadata } from "next"
import Link from "next/link"

import { ContactForm } from "@/components/contact-form"
import { CopyEmail } from "@/components/copy-email"
import { about, experiences, links, skills } from "@/lib/content"

export const metadata: Metadata = { title: "About — Joseph Yared" }

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[720px] px-5 pb-24 pt-14 md:pb-32 md:pt-24">
      <div className="h-20 w-20 rounded-full bg-[linear-gradient(140deg,#E7A3C6_0%,#D9773A_55%,#7B67C2_100%)]" aria-hidden />

      <h1 className="mt-8 font-serif text-[2.1rem] leading-[1.15] md:text-[2.5rem]">
        Intelligent systems for complex problems.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-dim">{about}</p>

      {/* Experience */}
      <section className="mt-16">
        <h2 className="text-sm text-faint">Experience</h2>
        <ul className="mt-3">
          {experiences.map((e, i) => (
            <li key={e.slug}>
              <Link
                href={`/work/${e.slug}`}
                className="group flex flex-col gap-1 border-t border-line py-4 sm:grid sm:grid-cols-[1fr_1fr_auto] sm:gap-6"
              >
                <span className="flex items-baseline justify-between gap-4 sm:contents">
                  <span className="flex items-center gap-2 transition-colors group-hover:text-accent-ink">
                    {i === 0 && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ink" aria-label="Current" />}
                    {e.company}
                  </span>
                  <span className="shrink-0 text-sm text-faint sm:order-last sm:text-right sm:text-base">{e.period}</span>
                </span>
                <span className="text-sm text-dim sm:text-base">{e.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="text-sm text-faint">Technical Expertise</h2>
        <dl className="mt-3">
          {skills.map((s) => (
            <div key={s.name} className="grid gap-1 border-t border-line py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt>{s.name}</dt>
              <dd className="text-dim">{s.technologies.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-16 scroll-mt-20">
        <h2 className="font-serif text-[2rem] leading-tight">Let&apos;s Work Together</h2>
        <p className="mt-4 text-dim">
          I&apos;m always interested in challenging projects and collaborations. Whether you have a specific project in mind
          or just want to discuss possibilities, I&apos;d love to hear from you.
        </p>
        <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-faint">Email</dt>
            <dd className="mt-1">
              <CopyEmail email={links.email} />
            </dd>
          </div>
          <div>
            <dt className="text-faint">LinkedIn</dt>
            <dd className="mt-1">
              <Link href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-ink">
                in/josephyared
              </Link>
            </dd>
          </div>
          <div>
            <dt className="text-faint">Phone</dt>
            <dd className="mt-1">
              <Link href={`tel:${links.phone}`} className="hover:text-accent-ink">
                {links.phone}
              </Link>
            </dd>
          </div>
        </dl>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
