import { WHATSAPP_URL } from '../App'
import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '🖥️',
    tag: 'Más popular',
    title: 'Sitio Web Corporativo',
    desc: 'Presencia online profesional para tu empresa. Diseño elegante, secciones personalizadas y optimizado para posicionamiento en Google.',
    features: ['Hasta 6 páginas', 'Diseño a medida', 'Formulario de contacto', 'SEO básico incluido'],
    highlight: true,
  },
  {
    icon: '🚀',
    tag: 'Alta conversión',
    title: 'Landing Page',
    desc: 'Página de destino enfocada en un solo objetivo: conseguirte más clientes, ventas o consultas. Diseñada para convertir.',
    features: ['1 página optimizada', 'CTA estratégicos', 'Integración WhatsApp', 'Velocidad máxima'],
    highlight: false,
  },
  {
    icon: '💼',
    tag: 'Para profesionales',
    title: 'Web Profesional Personal',
    desc: 'Tu carta de presentación digital. Ideal para consultores, médicos, abogados, coaches y cualquier profesional independiente.',
    features: ['Diseño premium', 'Sección de servicios', 'Testimonios', 'Blog opcional'],
    highlight: false,
  },
]

function Services() {
  return (
    <section className={`section ${styles.section}`} id="servicios">
      <div className="section__inner">
        <div className={styles.head}>
          <span className="section__eyebrow">Nuestros servicios</span>
          <h2 className="section__title">Elegí el que mejor<br />se adapta a tu negocio</h2>
          <p className="section__subtitle">
            Todos los proyectos incluyen diseño responsive, soporte post-entrega y código limpio.
          </p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map(s => (
            <div key={s.title} className={`${styles.card} ${s.highlight ? styles.cardHL : ''}`}>
              {s.highlight && <div className={styles.ribbon}>{s.tag}</div>}
              <span className={styles.cardIcon}>{s.icon}</span>
              {!s.highlight && <span className={styles.cardTag}>{s.tag}</span>}
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <ul className={styles.featureList}>
                {s.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.dot} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                 className={`btn ${s.highlight ? 'btn--primary' : 'btn--outline'} ${styles.cardBtn}`}>
                Consultar precio
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
