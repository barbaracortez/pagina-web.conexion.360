import { useEffect, useRef } from 'react'
import { WHATSAPP_URL } from '../App'
import styles from './Hero.module.css'

function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.15,
      alpha: Math.random() * 0.7 + 0.15,
      speed: Math.random() * 0.08 + 0.01,
      td: Math.random() * 0.012 + 0.004,
      tdir: Math.random() > 0.5 ? 1 : -1,
    }))

    const rays = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * canvas.width * 1.3 - 80,
      y: -50 - Math.random() * 250,
      len: 160 + Math.random() * 280,
      w: 0.5 + Math.random() * 1.3,
      alpha: 0.09 + Math.random() * 0.18,
      spd: 0.3 + Math.random() * 0.5,
      angle: (Math.PI / 180) * (38 + Math.random() * 18),
      timer: i * 420,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.alpha += s.td * s.tdir
        if (s.alpha > 0.88 || s.alpha < 0.06) s.tdir *= -1
        s.y += s.speed
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(190,215,255,${s.alpha})`
        ctx.fill()
      })
      rays.forEach(r => {
        r.timer -= 16
        if (r.timer > 0) return
        r.x += Math.cos(r.angle) * r.spd
        r.y += Math.sin(r.angle) * r.spd
        const x2 = r.x + Math.cos(r.angle) * r.len
        const y2 = r.y + Math.sin(r.angle) * r.len
        const g = ctx.createLinearGradient(r.x, r.y, x2, y2)
        g.addColorStop(0,    `rgba(56,189,248,0)`)
        g.addColorStop(0.3,  `rgba(100,185,255,${r.alpha})`)
        g.addColorStop(0.65, `rgba(56,189,248,${r.alpha * .6})`)
        g.addColorStop(1,    `rgba(56,189,248,0)`)
        ctx.beginPath()
        ctx.moveTo(r.x, r.y)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = g
        ctx.lineWidth = r.w
        ctx.stroke()
        if (r.x > canvas.width + 80 || r.y > canvas.height + 80) {
          r.x = Math.random() * canvas.width * 0.5 - 80
          r.y = -50 - Math.random() * 200
          r.alpha = 0.08 + Math.random() * 0.17
          r.len = 160 + Math.random() * 280
          r.timer = 500 + Math.random() * 900
        }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section className={styles.hero} id="inicio">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.glow} />
      <div className={styles.glowRight} />
      <div className={styles.edgeLine} />

      <div className={styles.inner}>
        {/* Logo grande en hero */}
        <div className={`${styles.logoWrap} fade-up`}>
          <img src="/logo-whatssap.jpeg" alt="Conexión 360°" className={styles.logoHero} />
        </div>

        <span className={`${styles.badge} fade-up-d1`}>
          Agencia de diseño web · Profesional &amp; Premium
        </span>

        <h1 className={`${styles.title} fade-up-d2`}>
          Tu presencia digital<br />
          <span className={styles.titleAccent}>empieza aquí</span>
        </h1>

        <p className={`${styles.sub} fade-up-d3`}>
          Diseñamos y desarrollamos páginas web que convierten visitantes en clientes.
          Modernas, rápidas y hechas a medida para tu negocio.
        </p>

        <div className={`${styles.actions} fade-up-d4`}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
             className="btn btn--wa">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.524 5.842L0 24l6.338-1.501A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.003-1.368l-.36-.213-3.76.89.94-3.651-.234-.374A9.774 9.774 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            Quiero mi web ahora
          </a>
          <a href="#servicios" className="btn btn--outline">Ver servicios</a>
        </div>

        <div className={`${styles.stats} fade-up-d4`}>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Responsive</span>
          </div>
          <div className={styles.statSep} />
          <div className={styles.stat}>
            <span className={styles.statNum}>+30</span>
            <span className={styles.statLabel}>Proyectos</span>
          </div>
          <div className={styles.statSep} />
          <div className={styles.stat}>
            <span className={styles.statNum}>30 días</span>
            <span className={styles.statLabel}>Entrega promedio</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
