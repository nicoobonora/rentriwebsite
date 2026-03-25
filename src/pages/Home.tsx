import { useState, useRef, useCallback } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqData = [
  {
    question: "Cos'\u00e8 il RENTRI?",
    answer: "Il RENTRI (Registro Elettronico Nazionale per la Tracciabilit\u00e0 dei Rifiuti) \u00e8 il sistema nazionale italiano per tracciare i rifiuti lungo tutta la filiera. \u00c8 obbligatorio per gli operatori del settore."
  },
  {
    question: "RENTRI Mobile \u00e8 gratuita?",
    answer: "S\u00ec, RENTRI Mobile \u00e8 scaricabile e utilizzabile gratuitamente."
  },
  {
    question: "Serve una connessione internet?",
    answer: "S\u00ec, l'app richiede una connessione internet per comunicare con il sistema RENTRI. Puoi comunque preparare le operazioni e inviarle quando sei connesso."
  },
  {
    question: "Come accedo all'app?",
    answer: "Puoi accedere utilizzando il tuo certificato digitale RENTRI (.p12). L'accesso \u00e8 sicuro e protetto."
  },
  {
    question: "L'app \u00e8 conforme alla normativa?",
    answer: "RENTRI Mobile utilizza le API ufficiali del sistema RENTRI per comunicare direttamente con il registro nazionale. L'app segue le specifiche tecniche previste dal D.M. 59/2023."
  },
  {
    question: "Su quali dispositivi funziona?",
    answer: "L'app \u00e8 disponibile per iPhone (iOS 15+) e per smartphone Android (8.0+)."
  }
]

function FaqItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  const answerRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`faq-item${isOpen ? ' active' : ''}`}>
      <button className="faq-question" aria-expanded={isOpen} onClick={onClick}>
        <span>{question}</span>
        <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div
        className="faq-answer"
        role="region"
        ref={answerRef}
        style={{ maxHeight: isOpen ? `${answerRef.current?.scrollHeight}px` : undefined }}
      >
        <p className="faq-answer-inner">{answer}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  useScrollAnimation()

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <Nav variant="home" />
      <main>
        {/* ===== HERO ===== */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-text">
              <span className="hero-badge">DISPONIBILE SU iOS E ANDROID</span>
              <h1 id="hero-heading">Il RENTRI diventa semplice dal tuo smartphone</h1>
              <p className="hero-subtitle">Compila il FIR, registra i movimenti e gestisci le vidimazioni. Tutto in un'unica app, conforme alla normativa.</p>
              <div className="hero-actions">
                <a href="#scarica" className="btn btn-primary btn-lg" onClick={(e) => handleAnchorClick(e, '#scarica')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m5 12 7 7 7-7"/></svg>
                  Scarica Gratis
                </a>
                <a href="#funzionalita" className="btn btn-outline btn-lg" onClick={(e) => handleAnchorClick(e, '#funzionalita')}>Scopri di pi&ugrave;</a>
              </div>
              <div className="hero-trust">
                <span>&#10003; Gratis</span>
                <span>&#10003; Basata sulle API ufficiali RENTRI</span>
                <span>&#10003; iOS e Android</span>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="phone-frame">
                <div className="phone-frame-inner">
                  <div className="phone-logo">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>
                  </div>
                  <span className="phone-title">RENTRI Mobile</span>
                  <span className="phone-sub">Gestione rifiuti semplificata</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRUST STRIP ===== */}
        <section className="trust-strip" aria-label="Garanzie e conformit&agrave;">
          <div className="container">
            <div className="trust-item">
              <span className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              API ufficiali RENTRI
            </div>
            <div className="trust-item">
              <span className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </span>
              Integrato con RENTRI
            </div>
            <div className="trust-item">
              <span className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              Dati crittografati
            </div>
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="benefits" id="funzionalita" aria-labelledby="benefits-heading">
          <div className="container">
            <div className="section-header">
              <p className="overline">PERCH&Eacute; SCEGLIERCI</p>
              <h2 id="benefits-heading">Tutto ci&ograve; che serve per il RENTRI, niente di pi&ugrave;</h2>
            </div>
            <div className="benefits-grid">
              {/* Card 1 */}
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                </div>
                <h3>FIR in 2 minuti</h3>
                <p>Compila il Formulario di Identificazione Rifiuto con campi precompilati e validazione automatica.</p>
              </div>
              {/* Card 2 */}
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 3L21 7L17 11"/><path d="M21 7H9"/><path d="M7 21L3 17L7 13"/><path d="M3 17H15"/></svg>
                </div>
                <h3>Movimenti semplificati</h3>
                <p>Registra carico e scarico con un workflow guidato passo-passo.</p>
              </div>
              {/* Card 3 */}
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
                </div>
                <h3>Vidimazione digitale</h3>
                <p>Gestisci la vidimazione dei registri direttamente dall'app.</p>
              </div>
              {/* Card 4 */}
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
                </div>
                <h3>Lavora ovunque</h3>
                <p>Prepara le operazioni dal cantiere o dalla discarica e inviale quando hai connessione.</p>
              </div>
              {/* Card 5 */}
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 11c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3"/><path d="M18 11c0 1.66-1.34 3-3 3"/><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z"/></svg>
                </div>
                <h3>Firma OTP sicura</h3>
                <p>Firma digitale con OTP integrata, conforme alle normative.</p>
              </div>
              {/* Card 6 */}
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>Zero burocrazia</h3>
                <p>Interfaccia pensata per operatori, non per burocrati. Nessuna formazione necessaria.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="how-it-works" id="come-funziona" aria-labelledby="how-heading">
          <div className="container">
            <div className="section-header">
              <p className="overline">COME FUNZIONA</p>
              <h2 id="how-heading">Operativo in 3 passi</h2>
            </div>
            <div className="steps">
              <div className="step animate-on-scroll">
                <div className="step-number" aria-hidden="true">1</div>
                <div className="step-content">
                  <h3>Scarica l'app</h3>
                  <p>Disponibile gratuitamente su App Store e Google Play.</p>
                </div>
              </div>
              <div className="step animate-on-scroll">
                <div className="step-number" aria-hidden="true">2</div>
                <div className="step-content">
                  <h3>Configura l'azienda</h3>
                  <p>Inserisci i dati aziendali una sola volta. Li riuseremo ovunque.</p>
                </div>
              </div>
              <div className="step animate-on-scroll">
                <div className="step-number" aria-hidden="true">3</div>
                <div className="step-content">
                  <h3>Inizia a lavorare</h3>
                  <p>Compila FIR, registra movimenti e gestisci vidimazioni. Subito.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VIDEO TUTORIAL ===== */}
        <section className="video-section" id="tutorial" aria-labelledby="video-heading">
          <div className="container">
            <div className="video-layout">
              <div className="video-text animate-on-scroll">
                <p className="overline">VIDEO TUTORIAL</p>
                <h2 id="video-heading">Guarda come funziona</h2>
                <p className="video-description">Un breve tutorial per scoprire quanto &egrave; semplice usare RENTRI Mobile. In pochi minuti vedrai come:</p>
                <ul className="video-checklist">
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
                    Accedere con il tuo certificato
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
                    Compilare un FIR in pochi tap
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
                    Registrare i movimenti di carico e scarico
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
                    Firmare digitalmente i documenti
                  </li>
                </ul>
              </div>
              <div className="video-wrapper animate-on-scroll">
                <div className="video-phone-frame">
                  <video controls preload="metadata" playsInline aria-label="Video tutorial di RENTRI Mobile">
                    <source src="/assets/tutorial.mp4" type="video/mp4" />
                    Il tuo browser non supporta la riproduzione video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="faq" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-header">
              <p className="overline">FAQ</p>
              <h2 id="faq-heading">Domande frequenti</h2>
            </div>
            <div className="faq-list">
              {faqData.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="final-cta" id="scarica" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading" className="animate-on-scroll">Pronto a semplificare il RENTRI?</h2>
            <p className="section-subtitle animate-on-scroll">Unisciti agli operatori che hanno gi&agrave; scelto un modo migliore di lavorare.</p>
            <div className="store-buttons animate-on-scroll">
              <a href="#" className="store-btn" aria-label="Scarica su App Store">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <span className="store-btn-text">
                  <span className="store-btn-label">Scarica su</span>
                  <span className="store-btn-name">App Store</span>
                </span>
              </a>
              <a href="#" className="store-btn" aria-label="Scarica su Google Play">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm10.893 9.476l2.56-2.56L5.574.582l8.93 10.708zm0 1.42L5.573 23.418l11.49-8.148-2.56-2.56zm3.27-1.42l2.81-1.996a1 1 0 0 0 0-1.588l-2.81-1.996-2.87 2.87 2.87 2.71z"/></svg>
                <span className="store-btn-text">
                  <span className="store-btn-label">Disponibile su</span>
                  <span className="store-btn-name">Google Play</span>
                </span>
              </a>
            </div>
            <p className="final-cta-trust animate-on-scroll">
              Disponibile gratuitamente su iOS e Android
            </p>
          </div>
        </section>
      </main>
      <Footer variant="home" />
    </>
  )
}
