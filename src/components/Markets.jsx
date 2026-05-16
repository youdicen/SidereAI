import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Store, Heart, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CHAMPAGNE = 'rgba(201,168,76,'
const BLUE = 'rgba(96,165,250,'
const GREEN = 'rgba(34,197,94,'

const segments = [
  {
    id: 'institucional',
    tag: 'SECTOR PÚBLICO Y COOPERACIÓN',
    Icon: Building2,
    color: CHAMPAGNE,
    title: 'Para proyectos que no pueden fallar.',
    description: 'Arquitecturas auditables, SLAs firmados y documentación técnica lista para evaluación institucional.',
    stack: ['AWS', 'Docker', 'PostgreSQL', 'GitFlow'],
    features: ['SLAs documentados', 'Código revisable', 'Arquitectura C4'],
    cta: 'Ver soluciones →',
    href: '#pilares',
    border: 'rgba(201,168,76,0.25)',
  },
  {
    id: 'negocios',
    tag: 'STARTUPS Y NEGOCIOS LOCALES',
    Icon: Store,
    color: BLUE,
    title: 'Online en días. Sin complicaciones.',
    description: 'Desplegamos tu plataforma en Railway y Supabase. Precio fijo, entrega rápida, soporte directo.',
    stack: ['Railway', 'Supabase', 'Vercel', 'React'],
    features: ['Precio fijo', 'Entrega en semanas', 'Soporte WhatsApp'],
    cta: 'Ver portafolio →',
    href: '#portafolio',
    border: 'rgba(96,165,250,0.25)',
  },
  {
    id: 'comunidad',
    tag: 'PROGRAMA DONACIONES',
    Icon: Heart,
    color: GREEN,
    title: 'Software gratuito para quienes lo necesitan.',
    description: 'Donamos desarrollo a negocios locales seleccionados. Sin burocracia. Sin costo.',
    stack: ['Website', 'Reservas Hotel', 'Rent-a-Car', 'Catálogo'],
    features: ['Pro-bono', 'Selección aplicativa', 'Impacto local'],
    cta: 'Aplicar al programa →',
    href: '#comunidad',
    border: 'rgba(34,197,94,0.25)',
  },
]

export default function Markets() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.markets-title', {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      })
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 60, duration: 0.85, delay: i * 0.13, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="mercados"
      className="section-padding"
      style={{ background: 'var(--slate)', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="container-wide">
        {/* Header */}
        <div className="markets-title" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.75rem' }}>
            — TRES SEGMENTOS
          </div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.1 }}>
            El software correcto{' '}
            <span className="serif-italic" style={{ color: 'var(--champagne)' }}>para cada escala.</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {segments.map((seg, i) => {
            const IconC = seg.Icon
            const c = seg.color
            return (
              <div
                key={seg.id}
                ref={el => cardsRef.current[i] = el}
                className="glass-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', border: `1px solid ${seg.border}`, transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${c}0.45)`; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = seg.border; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Tag + Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em',
                    color: `${c}0.8)`, background: `${c}0.08)`,
                    border: `1px solid ${c}0.18)`, padding: '0.25rem 0.6rem', borderRadius: '6px',
                  }}>
                    {seg.tag}
                  </span>
                  <div style={{
                    width: 38, height: 38, borderRadius: '10px',
                    background: `${c}0.1)`, border: `1px solid ${c}0.2)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <IconC size={18} style={{ color: `${c}0.85)` }} />
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.03em', color: 'var(--ivory)', lineHeight: 1.3 }}>
                  {seg.title}
                </h3>

                {/* Description */}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.855rem', lineHeight: 1.7, color: 'rgba(250,248,245,0.5)', fontWeight: 300, flexGrow: 1 }}>
                  {seg.description}
                </p>

                {/* Stack Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {seg.stack.map(s => (
                    <span key={s} style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.08em',
                      padding: '0.2rem 0.55rem', borderRadius: '5px',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(250,248,245,0.55)',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                  {seg.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={12} style={{ color: `${c}0.7)`, flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(250,248,245,0.55)' }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={seg.href}
                  style={{
                    fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem',
                    color: `${c}0.9)`, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    transition: 'gap 0.25s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.6rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.3rem'}
                >
                  {seg.cta}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
