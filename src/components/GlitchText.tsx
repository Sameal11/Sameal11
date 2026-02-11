import type { CSSProperties } from "react"

interface GlitchTextProps {
  children: string
  speed?: number
  enableShadows?: boolean
  enableOnHover?: boolean
  className?: string
}

interface CustomCSSProperties extends CSSProperties {
  "--after-duration": string
  "--before-duration": string
  "--after-shadow": string
  "--before-shadow": string
}

export default function GlitchText({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}: GlitchTextProps) {
  const inlineStyles: CustomCSSProperties = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-5px 0 red" : "none",
    "--before-shadow": enableShadows ? "5px 0 cyan" : "none",
  }

  const baseClasses =
    "inline-block whitespace-nowrap text-white text-[clamp(2rem,10vw,8rem)] font-black relative select-none cursor-pointer"

  const pseudoClasses = !enableOnHover
    ? "after:content-[attr(data-text)] after:absolute after:top-0 after:left-[6px] after:whitespace-nowrap after:text-white after:bg-transparent after:[text-shadow:var(--after-shadow)] after:animate-glitch-after " +
      "before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-6px] before:whitespace-nowrap before:text-white before:bg-transparent before:[text-shadow:var(--before-shadow)] before:animate-glitch-before"
    : "after:content-[''] after:absolute after:top-0 after:left-[6px] after:opacity-0 before:content-[''] before:absolute before:top-0 before:left-[-6px] before:opacity-0 " +
      "hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:animate-glitch-after " +
      "hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:animate-glitch-before"

  return (
    <span
      style={inlineStyles}
      data-text={children}
      className={`${baseClasses} ${pseudoClasses} ${className}`}
    >
      {children}
    </span>
  )
}
