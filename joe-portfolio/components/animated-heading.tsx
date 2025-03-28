"use client"

import { useEffect, useRef } from "react"

interface AnimatedHeadingProps {
  text: string
  className?: string
}

export function AnimatedHeading({ text, className = "" }: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const heading = headingRef.current
    if (!heading) return

    const letters = text.split("")
    heading.innerHTML = ""

    letters.forEach((letter, index) => {
      const span = document.createElement("span")

      if (letter === " ") {
        // Handle spaces by adding a non-breaking space
        span.innerHTML = "&nbsp;"
        span.style.display = "inline-block"
        span.style.width = "0.3em" // Add width for proper spacing
      } else {
        span.innerText = letter
      }

      span.style.opacity = "0"
      span.style.transform = "translateY(20px)"
      span.style.display = "inline-block"
      span.style.transition = `opacity 0.5s ease, transform 0.5s ease`
      span.style.transitionDelay = `${index * 0.03}s`

      heading.appendChild(span)

      // Trigger animation after a small delay
      setTimeout(() => {
        span.style.opacity = "1"
        span.style.transform = "translateY(0)"
      }, 100)
    })
  }, [text])

  return (
    <h1 ref={headingRef} className={className}>
      {text}
    </h1>
  )
}


