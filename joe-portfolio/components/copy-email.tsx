"use client"

import { useState } from "react"

export function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button type="button" onClick={copy} className={`group inline-flex items-baseline gap-2 text-left ${className}`}>
      <span className="transition-colors group-hover:text-accent-ink">{email}</span>
      <span className="text-xs text-faint" aria-live="polite">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  )
}
