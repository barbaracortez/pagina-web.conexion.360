import styles from './Process.module.css'

const STEPS = [
  {
    num: '01',
    icon: '💬',
    title: 'Contacto',
    desc: 'Nos escribís por WhatsApp o formulario. Hablamos de tu negocio, tus objetivos y te asesoramos sin compromiso.',
  },
  {
    num: '02',
    icon: '🎨',
    title: 'Diseño',
    desc: 'Creamos el diseño personalizado de tu web. Te enviamos una vista previa para que apruebes o pidas cambios.',
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Entrega',
    desc: 'Tu web va online. Te entregamos todo listo, funcional y explicado. Soporte incluido post-lanzamiento.',
  },
]

function Process() {
  return (
    <section className={`section ${styles.section}`} id="proceso">
      <div className="section__inner">
        <div className={styles.head}>
          <span className="section__eyebrow">Cómo trabajamos</span>
          <h2 className="section__title">Tu web en 3 pasos simples</h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Un proceso claro, transparente y sin vueltas. De la idea a la web en tiempo récord.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              <div className={styles.stepIcon}>{s.icon}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              {i < STEPS.length - 1 && (
                <div className={styles.connector}>
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
