import Image from "next/image"
import Link from "next/link"

import { SiteNav } from "@/components/site-nav"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { about, experiences, links, posts, projects, skills } from "@/lib/content"

const container = "mx-auto w-full max-w-site px-5 md:px-8"
const linkMuted = "text-faint transition-colors hover:text-ink"

function SectionHeader({ title, subtitle, aside }: { title: string; subtitle?: string; aside?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
      <div>
        <h2 className="font-serif text-[2rem] leading-tight">{title}</h2>
        {subtitle && <p className="mt-2 max-w-xl text-sm text-dim">{subtitle}</p>}
      </div>
      {aside}
    </div>
  )
}

export default function Home() {
  const [current, ...previous] = experiences

  return (
    <div className="min-h-screen">
      <SiteNav />

      <main>
        {/* Introduction */}
        <section className={`${container} pb-16 pt-16 md:pb-[72px] md:pt-28`}>
          <Reveal>
            <h1 className="max-w-[820px] text-balance font-serif text-[2.6rem] leading-[1.1] tracking-[-0.01em] md:text-[3.5rem]">
              Hi. I&apos;m Joseph. I Build AI for People.
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex flex-col gap-5 text-sm md:flex-row md:gap-12">
            <div className="md:w-[280px]">
              <p className="text-faint">Currently</p>
              <p className="mt-1.5 text-dim">
                {current.title} @ {current.company}
              </p>
            </div>
            <div className="md:w-[440px]">
              <p className="text-faint">Previously</p>
              <p className="mt-1.5 text-dim">{previous.map((e) => `${e.title} @ ${e.company}`).join(", ")}</p>
            </div>
          </Reveal>
        </section>

        {/* Projects */}
        <section id="work" className={`${container} pb-24 md:pb-32`}>
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of my most impactful work in AI and machine learning."
            aside={
              <Link href={links.github} target="_blank" rel="noreferrer" className={`text-sm ${linkMuted}`}>
                More on GitHub ↗
              </Link>
            }
          />
          <div className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i < 2 ? i * 0.05 : 0}>
                <article className="group">
                  <Link href={p.links.demo} target="_blank" rel="noreferrer" className="block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-soft">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </Link>
                  <h3 className="mt-4 text-[15px] font-medium leading-snug">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-dim">{p.description}</p>
                  <details className="group/details mt-2 text-sm">
                    <summary className="cursor-pointer list-none text-faint transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                      <span className="group-open/details:hidden">Read more</span>
                      <span className="hidden group-open/details:inline">Show less</span>
                    </summary>
                    <p className="mt-2 leading-relaxed text-dim">{p.longDescription}</p>
                  </details>
                  <p className="mt-3 text-sm text-faint">{p.tags.join(" · ")}</p>
                  <div className="mt-3 flex gap-5 text-sm">
                    <Link href={p.links.demo} target="_blank" rel="noreferrer" className="hover:text-accent-ink">
                      View Demo ↗
                    </Link>
                    <Link href={p.links.github} target="_blank" rel="noreferrer" className="hover:text-accent-ink">
                      Source Code ↗
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={`${container} pb-24 md:pb-32`}>
          <SectionHeader title="Professional Experience" subtitle="My journey in AI research and development" />
          <ol className="mt-10 border-b border-line">
            {experiences.map((e) => (
              <li key={e.company + e.period} className="border-t border-line py-8">
                <Reveal className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-12">
                  <div className="text-sm">
                    <p className="text-dim">{e.period}</p>
                    <p className="mt-1 text-faint">{e.location}</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-[1.6rem] leading-tight">{e.company}</h3>
                    <p className="mt-1 text-sm text-dim">{e.title}</p>
                    <ul className="mt-4 max-w-[680px] space-y-2.5 text-sm leading-relaxed text-dim">
                      {e.description.map((d) => (
                        <li key={d} className="flex gap-3">
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-faint" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-faint">{e.skills.join(" · ")}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* Skills */}
          <div className="mt-24 md:mt-32">
            <SectionHeader
              title="Technical Expertise"
              subtitle="My technical expertise spans across these key areas, enabling me to build end-to-end AI solutions from research to production."
            />
            <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <Reveal key={s.name} className="border-t border-line pt-4">
                  <h3 className="text-sm font-medium">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim">{s.technologies.join(" · ")}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className={`${container} pb-24 md:pb-32`}>
          <SectionHeader
            title="Writing"
            aside={
              <Link href={`${links.substack}/subscribe`} target="_blank" rel="noreferrer" className={`text-sm ${linkMuted}`}>
                Subscribe on Substack ↗
              </Link>
            }
          />
          <ul className="mt-8 border-b border-line">
            {posts.map((p) => (
              <li key={p.title} className="border-t border-line">
                <Link href={p.href} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-8 py-6">
                  <div>
                    <h3 className="font-serif text-[1.6rem] leading-tight transition-colors group-hover:text-accent-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-dim">{p.subtitle}</p>
                  </div>
                  <span className="shrink-0 pt-2 text-sm text-faint">{p.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className={`${container} pb-24 md:pb-32`}>
          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">
            <div className="relative aspect-square w-32 overflow-hidden rounded-full bg-soft md:w-40">
              <Image src="/images/profile_pic_joe.jpg" alt="Joseph Yared" fill sizes="160px" className="object-cover" />
            </div>
            <div className="max-w-[640px]">
              <h2 className="font-serif text-[2rem] leading-tight">Intelligent systems for complex problems</h2>
              <p className="mt-5 text-lg leading-relaxed text-dim">{about}</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${container} pb-24 md:pb-32`}>
          <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-[2rem] leading-tight">Let&apos;s Work Together</h2>
              <p className="mt-4 max-w-md text-dim">
                I&apos;m always interested in challenging projects and collaborations. Whether you have a specific project
                in mind or just want to discuss possibilities, I&apos;d love to hear from you.
              </p>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-faint">Email</dt>
                  <dd className="mt-1">
                    <Link href={`mailto:${links.email}`} className="hover:text-accent-ink">{links.email}</Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-faint">LinkedIn</dt>
                  <dd className="mt-1">
                    <Link href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-ink">
                      linkedin.com/in/josephyared
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-faint">Phone</dt>
                  <dd className="mt-1">
                    <Link href={`tel:${links.phone}`} className="hover:text-accent-ink">{links.phone}</Link>
                  </dd>
                </div>
              </dl>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className={`${container} flex flex-col gap-4 py-8 text-sm md:flex-row md:items-center md:justify-between`}>
          <p className="text-faint">© {new Date().getFullYear()} Joseph Yared. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href={links.linkedin} target="_blank" rel="noreferrer" className="text-dim hover:text-ink">LinkedIn ↗</Link>
            <Link href={links.github} target="_blank" rel="noreferrer" className="text-dim hover:text-ink">GitHub ↗</Link>
            <Link href={links.substack} target="_blank" rel="noreferrer" className="text-dim hover:text-ink">Substack ↗</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
