import Link from "next/link"
import { CopyEmail } from "@/components/copy-email"
import { links } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-site px-5 md:px-8">
      <div className="flex flex-col gap-4 border-t border-line py-8 text-sm md:flex-row md:items-center md:justify-between">
        <CopyEmail email={links.email} className="text-dim" />
        <div className="flex gap-5 text-faint">
          <Link href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</Link>
          <Link href={links.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</Link>
          <Link href={links.substack} target="_blank" rel="noreferrer" className="hover:text-ink">Substack</Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
