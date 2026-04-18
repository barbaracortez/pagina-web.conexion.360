import { useState, useEffect } from 'react'
import { WHATSAPP_URL } from '../App'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'Contacto',  href: '#contacto' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#inicio" className={styles.logo}>
          <img src="/public/logo-whatssap.jpeg" alt="Conexión 360° logo" className={styles.logoImg} />
          <span className={styles.logoText}>
            Conexión<strong>360°</strong>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className={styles.navLink}>{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
           className={`btn btn--wa ${styles.ctaBtn}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.524 5.842L0 24l6.338-1.501A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.003-1.368l-.36-.213-3.76.89.94-3.651-.234-.374A9.774 9.774 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
          </svg>
          WhatsApp
        </a>

        {/* Hamburger */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menú">
          <span className={menuOpen ? styles.barOpen : ''}></span>
          <span className={menuOpen ? styles.barOpen : ''}></span>
          <span className={menuOpen ? styles.barOpen : ''}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} className={styles.mobileLink}
             onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
           className={`btn btn--wa ${styles.mobileCta}`}
           onClick={() => setMenuOpen(false)}>
          Escribinos por WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
