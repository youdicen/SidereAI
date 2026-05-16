import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, MapPin } from 'lucide-react'
import NeuralCanvas from './NeuralCanvas'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from(badgeRef.current, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' })
        .from(headlineRef.current.children, { opacity: 0, y: 60, stagger: 0.15, duration: 1, ease: 'power3.out' }, '-=0.4')
        .from(subRef.current, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from(ctaRef.current.children, { opacity: 0, y: 20, stagger: 0.12, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from(statsRef.current.children, { opacity: 0, y: 20, stagger: 0.1, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingBottom: '4rem',
      }}
    >
      {/* Background Image */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&auto=format&fit=crop&q=80')`,
        }}
      />
      {/* Gradient base — atenúa la foto */}
      <div className="hero-gradient" />

      {/* ── Neural Synapse Canvas — sobre el gradiente ── */}
      <NeuralCanvas style={{ zIndex: 3 }} />

      {/* Fade-to-obsidian bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        background: 'linear-gradient(to bottom, transparent, var(--obsidian))',
        pointerEvents: 'none',
        zIndex: 4,
      }} />
      {/* Red accent glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '40vw',
        height: '40vw',
        borderRadius: '9999px',
        background: 'radial-gradient(circle, rgba(189,0,18,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 4,
      }} />

      {/* Content */}
      <div className="container-wide" style={{ position: 'relative', zIndex: 10, paddingTop: '5rem', paddingBottom: '2rem' }}>

        {/* Badge */}
        <div ref={badgeRef} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
          <MapPin size={12} style={{ color: 'var(--champagne)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'rgba(250,248,245,0.55)' }}>
            PROBADOS EN PRODUCCIÓN — EL SALVADOR · C.A.
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          style={{ overflow: 'hidden' }}
        >
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.045em',
            color: 'var(--ivory)',
          }}>
            Software que construye
          </div>
          <div
            className="serif-italic"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 7rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: 'var(--champagne)',
            }}
          >
            lo que importa.
          </div>
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          style={{
            marginTop: '2rem',
            maxWidth: '540px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: 'rgba(250,248,245,0.6)',
            fontWeight: 300,
          }}
        >
          Para instituciones que exigen auditoría.{' '}
          <span style={{ color: 'var(--ivory)' }}>Para negocios que necesitan velocidad.</span>
        </p>

        {/* CTAs */}
        <div ref={ctaRef} style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <a
            href="#mercados"
            className="btn-magnetic btn-primary"
          >
            <span className="btn-slide" />
            <span className="btn-text" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Ver segmentos <ArrowRight size={15} />
            </span>
          </a>
          <a
            href="#contacto"
            className="btn-magnetic btn-ghost"
          >
            <span>Hablar con nuestro equipo</span>
          </a>
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          style={{
            marginTop: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
          }}
        >
          {[
            { n: '+5 años', label: 'Trayectoria verificable' },
            { n: '3 segmentos', label: 'Institucional · Negocios · Comunidad' },
            { n: 'SLA 99.5%', label: 'Disponibilidad garantizada' },
          ].map(stat => (
            <div key={stat.n}>
              <div className="stat-number">{stat.n}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(250,248,245,0.4)', marginTop: '0.25rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        right: 'clamp(1.5rem, 5vw, 4rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
        opacity: 0.4,
      }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--ivory)' }}>SCROLL</div>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--champagne), transparent)' }} />
      </div>
    </section>
  )
}
