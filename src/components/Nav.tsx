import { Link, useLocation } from 'react-router-dom'
import { useNavScroll } from '../hooks/useNavScroll'

interface NavProps {
  variant?: 'home' | 'legal'
}

export default function Nav({ variant = 'home' }: NavProps) {
  useNavScroll()
  const location = useLocation()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (variant === 'legal') {
    return (
      <header className="nav" role="banner">
        <div className="container">
          <Link to="/" className="nav-logo" aria-label="RENTRI Mobile &mdash; Torna alla home">
            <img src="/assets/logo.png" alt="RENTRI Mobile logo" width={160} height={40} />
          </Link>
          <nav className="nav-links" aria-label="Navigazione">
            <Link to="/">Torna alla Home</Link>
          </nav>
          <Link to="/" className="btn btn-primary nav-cta-desktop">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
            Home
          </Link>
          <Link to="/" className="btn btn-primary nav-cta-mobile">Home</Link>
        </div>
      </header>
    )
  }

  return (
    <header className="nav" role="banner">
      <div className="container">
        <a href="#" className="nav-logo" aria-label="RENTRI Mobile — Torna alla home">
          <img src="/assets/logo.png" alt="RENTRI Mobile logo" width={160} height={40} />
        </a>
        <nav className="nav-links" aria-label="Navigazione principale">
          <a href="/#funzionalita" onClick={(e) => handleAnchorClick(e, '#funzionalita')}>Funzionalit&agrave;</a>
          <a href="/#come-funziona" onClick={(e) => handleAnchorClick(e, '#come-funziona')}>Come funziona</a>
          <a href="/#tutorial" onClick={(e) => handleAnchorClick(e, '#tutorial')}>Tutorial</a>
          <a href="/#faq" onClick={(e) => handleAnchorClick(e, '#faq')}>FAQ</a>
          <a href="/#scarica" onClick={(e) => handleAnchorClick(e, '#scarica')}>Scarica</a>
        </nav>
        <a href="/#scarica" className="btn btn-primary nav-cta-desktop" onClick={(e) => handleAnchorClick(e, '#scarica')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m5 12 7 7 7-7"/></svg>
          Scarica l'App
        </a>
        <a href="/#scarica" className="btn btn-primary nav-cta-mobile" onClick={(e) => handleAnchorClick(e, '#scarica')}>Scarica</a>
      </div>
    </header>
  )
}
