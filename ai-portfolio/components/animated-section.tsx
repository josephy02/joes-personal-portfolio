"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export function AnimatedSection({ children, id, className = "" }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("animate-in")
            observer.unobserve(section)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`opacity-0 transition-all duration-1000 ${className}`}
      style={{ transform: "translateY(50px)" }}
    >
      {children}
    </section>
  )
}

