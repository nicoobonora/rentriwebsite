import { useSearchParams, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function PaymentResult() {
  const [searchParams] = useSearchParams()
  const status = searchParams.get('payment')
  const isSuccess = status === 'success'

  return (
    <>
      <Nav variant="legal" />
      <main>
        <section className="payment-result">
          <div className="container">
            <div className="payment-card">
              {isSuccess ? (
                <>
                  <div className="payment-icon payment-icon-success">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="M22 4 12 14.01l-3-3" />
                    </svg>
                  </div>
                  <h1>Pagamento completato!</h1>
                  <p className="payment-subtitle">
                    Il tuo abbonamento Pro è ora attivo. Grazie per aver scelto RENTRI Mobile.
                  </p>
                  <div className="payment-steps">
                    <div className="payment-step">
                      <span className="payment-step-number">1</span>
                      <span>Torna all'app RENTRI Mobile sul tuo telefono</span>
                    </div>
                    <div className="payment-step">
                      <span className="payment-step-number">2</span>
                      <span>Chiudi e riapri l'app per attivare il piano Pro</span>
                    </div>
                    <div className="payment-step">
                      <span className="payment-step-number">3</span>
                      <span>Inizia a lavorare senza limiti!</span>
                    </div>
                  </div>
                  <p className="payment-note">
                    L'attivazione potrebbe richiedere qualche secondo. Se il piano non risulta attivo, chiudi completamente l'app e riaprila.
                  </p>
                </>
              ) : (
                <>
                  <div className="payment-icon payment-icon-cancel">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </div>
                  <h1>Pagamento annullato</h1>
                  <p className="payment-subtitle">
                    Il pagamento non è stato completato. Nessun addebito è stato effettuato.
                  </p>
                  <p className="payment-note">
                    Puoi riprovare in qualsiasi momento dall'app, nella sezione Impostazioni.
                  </p>
                </>
              )}
              <Link to="/" className="btn btn-primary btn-lg payment-cta">
                Torna alla home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="legal" />
    </>
  )
}
