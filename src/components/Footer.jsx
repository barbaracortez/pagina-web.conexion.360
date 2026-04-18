import { WHATSAPP_URL, EMAIL } from '../App'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="/public/logo-whatssap.jpeg" alt="Conexión 360°" className={styles.logoImg} />
            <span className={styles.logoText}>Conexión<strong>360°</strong></span>
          </div>
          <p className={styles.tagline}>
            Diseñamos tu presencia digital con propósito y profesionalismo.
          </p>
          <div className={styles.socials}>
            <a href="https://instagram.com/conexion360.26" target="_blank" rel="noopener noreferrer"
               className={styles.social} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navegación</h4>
          <a href="#inicio"    className={styles.link}>Inicio</a>
          <a href="#servicios" className={styles.link}>Servicios</a>
          <a href="#beneficios"className={styles.link}>Beneficios</a>
          <a href="#proceso"   className={styles.link}>Proceso</a>
          <a href="#contacto"  className={styles.link}>Contacto</a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Servicios</h4>
          <a href="#servicios" className={styles.link}>Sitio corporativo</a>
          <a href="#servicios" className={styles.link}>Landing page</a>
          <a href="#servicios" className={styles.link}>Web profesional</a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contacto directo</h4>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
             className={`${styles.link} ${styles.linkWa}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.524 5.842L0 24l6.338-1.501A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.003-1.368l-.36-.213-3.76.89.94-3.651-.234-.374A9.774 9.774 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className={styles.link}>{EMAIL}</a>
        </div>

      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Conexión 360° — Todos los derechos reservados.</span>
        <span className={styles.made}>Hecho con ❤️ en Argentina</span>
      </div>
    </footer>
  )
}

export default Footer
