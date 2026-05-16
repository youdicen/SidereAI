import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cloud, ShieldCheck, Code2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    icon: Cloud,
    tag: 'Cloud · Infraestructura',
    title: 'Microservicios de Alta Disponibilidad',
    italic: 'AWS Multi-AZ, sin punto único de falla',
    description: 'Arquitecturas Cloud-Native con microservicios contenedorizados en Docker, desplegados sobre AWS con CI/CD automático. Aislamiento funcional por módulo y continuidad operativa ante eventos no planificados.',
    metric: 'AWS · Multi-AZ',
    metricLabel: 'Sin punto único de falla',
  },
  {
    icon: ShieldCheck,
    tag: 'Seguridad · RBAC',
    title: 'Seguridad por Roles y Cifrado E2E',
    italic: 'datos protegidos por diseño',
    description: 'PostgreSQL en 3FN/BCNF con control de acceso RBAC a nivel de esquema. Comunicación sobre TLS/SSL con cifrado en reposo. Política de mínimo privilegio revisada en cada sprint.',
    metric: 'RBAC + TLS',
    metricLabel: 'Mínimo privilegio por diseño',
  },
  {
    icon: Code2,
    tag: 'QA · GitFlow',
    title: 'Código Verificable bajo Principios SOLID',
    italic: 'calidad visible en cada línea',
    description: 'Código SOLID gestionado con GitFlow. Pull Requests diarios con revisor asignado. Unit Tests e Integration Tests con reportes exportables. APIs documentadas en Postman para revisión técnica externa.',
    metric: 'SOLID + GitFlow',
    metricLabel: 'Tests unitarios e integración continua',
  },
]

export default function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pilares-title', {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 60, duration: 0.9, delay: i * 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pilares" className="section-padding" style={{ background: 'var(--obsidian)' }}>
      <div className="container-wide">

        {/* Header */}
        <div className="pilares-title" style={{ marginBottom: '4rem', maxWidth: '680px' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.75rem' }}>
            — ARQUITECTURA TÉCNICA
          </div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.1 }}>
            Estándares que soportan{' '}
            <span className="serif-italic" style={{ color: 'var(--champagne)' }}>revisión técnica real.</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(250,248,245,0.5)', marginTop: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
            Cada decisión de arquitectura está respaldada por principios documentados y trazables.
          </p>
        </div>

        {/* Cards Grid — 3 columnas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                ref={el => cardsRef.current[i] = el}
                className="glass-card"
                style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                {/* Icon + Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '14px',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} style={{ color: 'var(--champagne)' }} />
                  </div>
                  <span className="tag-pill" style={{ background: 'rgba(201,168,76,0.08)', color: 'var(--champagne)', border: '1px solid rgba(201,168,76,0.2)' }}>
                    {pillar.tag}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.03em', color: 'var(--ivory)', lineHeight: 1.3 }}>
                    {pillar.title}
                  </h3>
                  <div className="serif-italic" style={{ color: 'var(--champagne)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                    {pillar.italic}
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(250,248,245,0.55)', fontWeight: 300, flexGrow: 1 }}>
                  {pillar.description}
                </p>

                {/* Metric */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace', fontWeight: 700,
                    fontSize: '1rem', letterSpacing: '0.05em',
                    background: 'linear-gradient(135deg, var(--champagne), var(--ivory))',
                    WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>{pillar.metric}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'rgba(250,248,245,0.35)' }}>
                    {pillar.metricLabel}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
