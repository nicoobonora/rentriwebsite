import { useEffect } from 'react'

export function useNavScroll() {
  useEffect(() => {
    const nav = document.querySelector('.nav')
    if (!nav) return
    let scrolled = false
    const handler = () => {
      const s = window.scrollY > 10
      if (s !== scrolled) {
        scrolled = s
        nav.classList.toggle('scrolled', s)
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
}
