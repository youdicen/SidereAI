import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from(badgeRef.current, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' })
        .from(headlineRef.current.children, { opacity: 0, y: 60, stagger: 0.15, duration: 1, ease: 'power3.out' }, '-=0.4')
        .from(subRef.current, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from(ctaRef.current.children, { opacity: 0, y: 20, stagger: 0.12, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        height: '100dvh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&auto=format&fit=crop&q=80')`,
        }}
      />
      {/* Gradient overlays */}
      <div className="hero-gradient" />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        background: 'linear-gradient(to bottom, transparent, var(--vaporBg))',
        pointerEvents: 'none',
      }} />
      {/* Red accent glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '40vw',
        height: '40vw',
        borderRadius: '9999px',
        background: 'radial-gradient(circle, rgba(189,0,18,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="container-wide" style={{ position: 'relative', zIndex: 10, paddingTop: '5rem' }}>
        {/* Badge */}
        <div ref={badgeRef} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <span className="status-dot" />
          <span style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(250,248,245,0.55)' }}>
            SISTEMAS OPERATIVOS — EL SALVADOR
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          style={{ overflow: 'hidden' }}
        >
          <div style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.045em',
            color: 'var(--vaporGhost)',
          }}>
            Infraestructura
          </div>
          <div
            className="serif-italic"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 7rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: 'var(--vaporPlasma)',
            }}
          >
            Cognitiva.
          </div>
          <div style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: 'rgba(250,248,245,0.55)',
            marginTop: '0.5rem',
          }}>
            Soluciones de IA aplicada.
          </div>
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          style={{
            marginTop: '2rem',
            maxWidth: '520px',
            fontFamily: 'Sora, sans-serif',
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'rgba(250,248,245,0.6)',
            fontWeight: 300,
          }}
        >
          Diseñamos y desplegamos sistemas de inteligencia artificial propietarios para empresas que no pueden permitirse depender de terceros. Del audit al deploy, somos su equipo de ingeniería neural.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <a
            href="#portafolio"
            className="btn-magnetic btn-primary"
          >
            <span className="btn-slide" />
            <span className="btn-text" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Ver Portafolio <ArrowRight size={15} />
            </span>
          </a>
          <a
            href="https://wa.me/50362200921"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic btn-ghost"
          >
            <Zap size={14} style={{ color: 'var(--vaporPlasma)' }} />
            <span>Hablar con nosotros</span>
          </a>
        </div>

        {/* Stats Row */}
        <div
          style={{
            marginTop: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
          }}
        >
          {[
            { n: '99.9%', label: 'Confiabilidad del Modelo' },
            { n: '30%', label: 'Reducción de Latencia' },
            { n: '5+', label: 'Proyectos Desplegados' },
          ].map(stat => (
            <div key={stat.n}>
              <div className="stat-number">{stat.n}</div>
              <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(250,248,245,0.4)', marginTop: '0.25rem' }}>
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
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
        opacity: 0.4,
      }}>
        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--vaporGhost)' }}>SCROLL</div>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--vaporPlasma), transparent)' }} />
      </div>
    </section>
  )
}
