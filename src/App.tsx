import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import PaymentResult from './pages/PaymentResult'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/termini" element={<Terms />} />
      <Route path="/payment" element={<PaymentResult />} />
    </Routes>
  )
}

export default App
