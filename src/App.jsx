import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Process from './components/Process'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

// ── Configuración central ─────────────────────────────
export const WHATSAPP_NUMBER = '542617254321'
export const WHATSAPP_MSG = encodeURIComponent('Hola! Me interesa una página web para mi negocio.')
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`
export const EMAIL = 'conexion360.contacto.oficial@gmail.com'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <Benefits />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
