import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const targets = node.classList.contains('reveal')
      ? [node, ...node.querySelectorAll('.reveal')]
      : [...node.querySelectorAll('.reveal')]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return containerRef
}