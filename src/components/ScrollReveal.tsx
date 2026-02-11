import { useEffect, useRef, useMemo } from "react"
import type { ReactNode, RefObject } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  scrollContainerRef?: RefObject<HTMLElement>
  enableBlur?: boolean
  baseOpacity?: number
  baseRotation?: number
  blurStrength?: number
  containerClassName?: string
  textClassName?: string
  rotationEnd?: string
  wordAnimationEnd?: string
}

export default function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isStringChild = typeof children === "string"

  // Split words safely
  const splitText = useMemo(() => {
    if (!isStringChild) return children

    return children.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) return word

      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      )
    })
  }, [children, isStringChild])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Only pass scroller if using custom container
    const scroller = scrollContainerRef?.current

    // ROTATION
    gsap.fromTo(
      el,
      {
        transformOrigin: "0% 50%",
        rotate: baseRotation,
      },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          ...(scroller && { scroller }),
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    )

    const wordElements = el.querySelectorAll<HTMLElement>(".word")

    if (wordElements.length > 0) {
      // OPACITY
      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            ...(scroller && { scroller }),
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      )

      // BLUR (optional)
      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            filter: "blur(0px)",
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              ...(scroller && { scroller }),
              start: "top bottom-=20%",
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        )
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ])

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      {isStringChild ? (
        <p
          className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
        >
          {splitText}
        </p>
      ) : (
        <div className={textClassName}>{splitText}</div>
      )}
    </div>
  )
}
