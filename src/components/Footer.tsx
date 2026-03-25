import { Link, useLocation } from 'react-router-dom'

interface FooterProps {
  variant?: 'home' | 'legal'
}

export default function Footer({ variant = 'home' }: FooterProps) {
  const location = useLocation()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const homePrefix = variant === 'legal' ? '/' : ''

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="RENTRI Mobile logo" width={140} height={36} />
            <p>L'app che semplifica la gestione dei rifiuti per gli operatori italiani.</p>
          </div>
          <div className="footer-col">
            <h4>App</h4>
            <a href={`${homePrefix}#funzionalita`} onClick={variant === 'home' ? (e) => handleAnchorClick(e, '#funzionalita') : undefined}>Funzionalit&agrave;</a>
            <a href={`${homePrefix}#come-funziona`} onClick={variant === 'home' ? (e) => handleAnchorClick(e, '#come-funziona') : undefined}>Come funziona</a>
            <a href={`${homePrefix}#faq`} onClick={variant === 'home' ? (e) => handleAnchorClick(e, '#faq') : undefined}>FAQ</a>
            <a href={`${homePrefix}#scarica`} onClick={variant === 'home' ? (e) => handleAnchorClick(e, '#scarica') : undefined}>Scarica</a>
          </div>
          <div className="footer-col">
            <h4>Legale</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/termini">Termini di Servizio</Link>
            {variant === 'home' && (
              <Link to="/privacy#cookie-policy">Cookie Policy</Link>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 RENTRI Mobile. Tutti i diritti riservati.</span>
          <span>RENTRI Mobile non &egrave; affiliata con il Ministero dell'Ambiente.</span>
        </div>
      </div>
    </footer>
  )
}
