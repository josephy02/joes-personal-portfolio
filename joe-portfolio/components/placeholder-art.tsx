// Stand-in artwork until real project imagery is ready.
export function PlaceholderArt({
  label,
  background,
  className = "",
  size = "lg",
}: {
  label: string
  background: string
  className?: string
  size?: "lg" | "md"
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[3px] ${className}`}
      style={{ background }}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,rgba(255,255,255,0.28),transparent_60%)]" />
      <span
        className={`relative px-6 text-center font-medium tracking-[-0.035em] text-white [text-shadow:0_1px_20px_rgba(0,0,0,0.15)] ${
          size === "lg" ? "text-3xl md:text-[2.75rem]" : "text-2xl"
        }`}
      >
        {label}
      </span>
    </div>
  )
}
