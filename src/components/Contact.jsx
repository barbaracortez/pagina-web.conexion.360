import { useState } from 'react'
import { WHATSAPP_URL, EMAIL } from '../App'
import styles from './Contact.module.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handle = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Simulate send (replace with real endpoint / EmailJS / formspree)
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <section className={`section ${styles.section}`} id="contacto">
      <div className="section__inner">
        <div className={styles.grid}>

          {/* Left — info */}
          <div className={styles.info}>
            <span className="section__eyebrow">Contacto</span>
            <h2 className="section__title" style={{ maxWidth: '400px' }}>
              Hablemos de<br />tu proyecto
            </h2>
            <p className={styles.infoPara}>
              Contanos qué necesitás y te respondemos en menos de 24 horas
              con un presupuesto sin compromiso.
            </p>

            <div className={styles.channels}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                 className={styles.channel}>
                <span className={styles.channelIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.524 5.842L0 24l6.338-1.501A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.003-1.368l-.36-.213-3.76.89.94-3.651-.234-.374A9.774 9.774 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.channelLabel}>WhatsApp</span>
                  <span className={styles.channelValue}>Respuesta inmediata</span>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className={styles.channel}>
                <span className={styles.channelIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-10 7L2 7"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.channelLabel}>Email</span>
                  <span className={styles.channelValue}>{EMAIL}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.formWrap}>
            {status === 'sent' ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Te respondemos en menos de 24 hs. También podés escribirnos directo por WhatsApp.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                   className="btn btn--wa" style={{ marginTop: '1rem' }}>
                  Ir a WhatsApp
                </a>
              </div>
            ) : (
              <form className={styles.form} onSubmit={submit} noValidate>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Nombre</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Tu nombre completo"
                    value={form.name} onChange={handle}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="tu@email.com"
                    value={form.email} onChange={handle}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Mensaje</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Contanos qué necesitás, qué tipo de negocio tenés y cualquier detalle relevante..."
                    rows={5}
                    value={form.message} onChange={handle}
                    className={`${styles.input} ${styles.textarea}`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`btn btn--primary ${styles.submitBtn}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
