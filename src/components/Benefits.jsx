import styles from './Benefits.module.css'

const BENEFITS = [
  {
    icon: '🏆',
    title: 'Profesionalismo que genera confianza',
    desc: 'Una web bien diseñada transmite seriedad y credibilidad. Tus clientes potenciales te perciben como un referente en tu rubro desde el primer clic.',
  },
  {
    icon: '📈',
    title: 'Más clientes, más ventas',
    desc: 'Tu página trabaja las 24 hs, los 7 días de la semana. Capturamos leads y dirigimos visitas hacia la acción que más te importa.',
  },
  {
    icon: '🌐',
    title: 'Presencia digital sólida',
    desc: 'Dejá de depender solo de las redes sociales. Con tu propio sitio web tenés control total y una base digital que te pertenece.',
  },
  {
    icon: '⚡',
    title: 'Velocidad y rendimiento',
    desc: 'Sitios optimizados que cargan rápido en cualquier dispositivo. Google premia la velocidad con mejor posicionamiento.',
  },
  {
    icon: '📱',
    title: 'Diseño mobile-first',
    desc: 'Más del 70% de las búsquedas son desde celulares. Todos nuestros sitios se ven perfectos en cualquier pantalla.',
  },
  {
    icon: '🔧',
    title: 'Soporte y acompañamiento',
    desc: 'No te dejamos solo después de la entrega. Estamos disponibles para cambios, ajustes y consultas por WhatsApp.',
  },
]

function Benefits() {
  return (
    <section className={`section ${styles.section}`} id="beneficios">
      <div className="section__inner">
        <div className={styles.head}>
          <span className="section__eyebrow">Por qué elegirnos</span>
          <h2 className="section__title">Los beneficios de tener<br />una web profesional</h2>
        </div>
        <div className={styles.grid}>
          {BENEFITS.map(b => (
            <div key={b.title} className={styles.card}>
              <span className={styles.icon}>{b.icon}</span>
              <h3 className={styles.title}>{b.title}</h3>
              <p className={styles.desc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
