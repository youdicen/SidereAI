import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, Calendar, Car, LayoutGrid, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    Icon: Globe,
    title: 'Website Profesional',
    description: 'Presencia digital completa. Diseño a medida, formularios de contacto, galería y SEO básico.',
  },
  {
    Icon: Calendar,
    title: 'Sistema de Reservas — Hotel',
    description: 'Gestión de habitaciones, calendario de disponibilidad y confirmaciones automáticas por correo.',
  },
  {
    Icon: Car,
    title: 'Sistema Rent-a-Car',
    description: 'Catálogo de flota, reservas en línea con fechas y pago integrado vía Stripe o transferencia.',
  },
  {
    Icon: LayoutGrid,
    title: 'Catálogo Digital',
    description: 'Muestra productos o servicios con precios, fotos y enlace de contacto por WhatsApp.',
  },
]

const criteria = [
  'Negocio en operación activa con impacto en la comunidad local',
  'Sin acceso actual a herramientas digitales equivalentes',
]

export default function Community() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.community-intro', {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      })
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 40, duration: 0.75, delay: i * 0.11, ease: 'power3.out',
          scrollTrigger: { trigger: '.community-cards', start: 'top 82%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="comunidad"
      className="section-padding"
      style={{
        background: 'var(--obsidian)',
        backgroundImage: 'radial-gradient(ellipse at bottom right, rgba(34,197,94,0.07) 0%, transparent 55%)',
        borderTop: '1px solid rgba(34,197,94,0.08)',
      }}
    >
      <div className="container-wide">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Visión */}
          <div className="community-intro">
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'rgba(34,197,94,0.8)', marginBottom: '0.75rem' }}>
              — PROGRAMA COMUNIDAD
            </div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.1 }}>
              Porque el software no debería ser{' '}
              <span className="serif-italic" style={{ color: 'rgba(34,197,94,0.9)' }}>un privilegio.</span>
            </h2>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(250,248,245,0.55)', marginTop: '1.5rem', lineHeight: 1.8, fontWeight: 300 }}>
              Donamos desarrollo a negocios locales seleccionados donde una herramienta digital marca la diferencia operativa real.
            </p>

            {/* Criteria */}
            <div style={{ marginTop: '2rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(250,248,245,0.35)', marginBottom: '1rem' }}>
                CRITERIOS DE SELECCIÓN
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {criteria.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: '6px', flexShrink: 0,
                      background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'rgba(34,197,94,0.8)',
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(250,248,245,0.6)', lineHeight: 1.6 }}>{c}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="mailto:comunidad@sidereai.com"
                className="btn-magnetic"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.75rem', borderRadius: '9999px',
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
                  fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.9rem',
                  color: 'rgba(34,197,94,0.95)', textDecoration: 'none',
                  transition: 'background 0.3s, border-color 0.3s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.12)'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                Postular mi negocio <ArrowRight size={15} />
              </a>
            </div>

            {/* Social proof note */}
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'rgba(250,248,245,0.28)', marginTop: '1.25rem', lineHeight: 1.7 }}>
              Proyectos como Hotel La Palma, Café Caporal y Pastelería Lilian son ejemplos reales del programa en acción.
            </p>
          </div>

          {/* Right — Solution Cards */}
          <div className="community-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {solutions.map((sol, i) => {
              const IconC = sol.Icon
              return (
                <div
                  key={sol.title}
                  ref={el => cardsRef.current[i] = el}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    border: '1px solid rgba(34,197,94,0.1)',
                    transition: 'border-color 0.3s, transform 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: '11px', marginBottom: '1rem',
                    background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <IconC size={19} style={{ color: 'rgba(34,197,94,0.8)' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'var(--ivory)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {sol.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(250,248,245,0.48)', lineHeight: 1.65, fontWeight: 300 }}>
                    {sol.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
