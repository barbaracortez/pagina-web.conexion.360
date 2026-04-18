import styles from './WhatWeDo.module.css'

function WhatWeDo() {
  return (
    <section className={`section ${styles.section}`} id="que-hacemos">
      <div className="section__inner">
        <div className={styles.grid}>
          <div className={styles.text}>
            <span className="section__eyebrow">Qué hacemos</span>
            <h2 className="section__title">
              Diseñamos webs que<br />
              <span className={styles.accent}>trabajan por vos</span>
            </h2>
            <p className={styles.body}>
              En Conexión 360° creamos páginas web profesionales que no solo se ven bien,
              sino que están diseñadas para convertir visitantes en clientes reales.
            </p>
            <p className={styles.body}>
              Trabajamos con emprendedores, profesionales independientes y PYMES que
              quieren dar el salto digital o mejorar su presencia online con una web
              a la altura de su negocio.
            </p>
            <ul className={styles.checkList}>
              {[
                'Diseño moderno adaptado a tu marca',
                'Optimizado para celulares y tablets',
                'Rápido, seguro y listo para Google',
                'Entrega en tiempo récord',
              ].map(item => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.check}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.visual}>
            <div className={styles.mockup}>
              <div className={styles.mockupBar}>
                <span /><span /><span />
              </div>
              <div className={styles.mockupContent}>
                <div className={styles.mockupLine} style={{ width: '60%' }} />
                <div className={styles.mockupLine} style={{ width: '90%' }} />
                <div className={styles.mockupLine} style={{ width: '75%' }} />
                <div className={styles.mockupBlock} />
                <div className={styles.mockupGrid}>
                  <div className={styles.mockupCard} />
                  <div className={styles.mockupCard} />
                  <div className={styles.mockupCard} />
                </div>
              </div>
            </div>
            <div className={styles.badge1}>⚡ Listo en 7 días</div>
            <div className={styles.badge2}>📱 100% Responsive</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
