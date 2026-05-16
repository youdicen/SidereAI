import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, CheckCircle, FileText } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const slaItems = [
  { severity: 'Crítica', response: '< 2 horas', color: '#BD0012' },
  { severity: 'Alta', response: '< 8 horas', color: '#C9A84C' },
  { severity: 'Media', response: '< 48 horas', color: 'rgba(250,248,245,0.5)' },
]

const mentoriaLevels = [
  {
    num: '01',
    title: 'Asignación Controlada',
    description: 'Tareas de complejidad acotada con bajo impacto en el flujo crítico del sistema (Happy Path), diseñadas para el aprendizaje progresivo sin riesgo operativo.',
  },
  {
    num: '02',
    title: 'Supervisión Senior Certificada',
    description: 'Supervisión directa mediante code-reviews rigurosos conducidos por desarrolladores senior certificados (CSD), garantizando la calidad del entregable final.',
  },
  {
    num: '03',
    title: 'Evaluación y Trazabilidad',
    description: 'Evaluación de competencias con documentación del progreso individual de cada beneficiario como evidencia de impacto social medible y sostenible.',
  },
]

const differentiators = [
  { industry: 'Desarrolladores junior en rutas críticas sin supervisión', sidere: 'Tareas de complejidad controlada con supervisión senior' },
  { industry: 'Capacitación externa desvinculada del proyecto', sidere: 'Mentoría integrada al flujo de trabajo real' },
  { industry: 'Sin trazabilidad del aprendizaje', sidere: 'Documentación individual de progreso por beneficiario' },
  { industry: 'IA como amenaza al empleo junior', sidere: 'IA como herramienta de aprendizaje acelerado supervisado' },
]

export default function Compliance() {
  const sectionRef = useRef(null)
  const slaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.compliance-title', {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.from('.mentoria-item', {
        opacity: 0, x: -40, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
      gsap.from('.sla-card', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: slaRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ─── SECCIÓN RSE: Responsabilidad Social y Mentoría ─────────────────── */}
      <section
        ref={sectionRef}
        id="rse"
        className="section-padding"
        style={{ background: 'var(--obsidian)' }}
      >
        <div className="container-wide">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Intro */}
            <div className="compliance-title">
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.75rem' }}>
                — COMPROMISO INSTITUCIONAL
              </div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.1 }}>
                Mentoría técnica.{' '}
                <span className="serif-italic" style={{ color: 'var(--champagne)' }}>Impacto local.</span>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(250,248,245,0.5)', marginTop: '1.25rem', lineHeight: 1.8, fontWeight: 300 }}>
                Integramos desarrolladores junior y beneficiarios de inclusión digital en proyectos reales, bajo supervisión senior, sin comprometer la calidad del entregable.
              </p>

              {/* Philosophy Box */}
              <div className="glass-card" style={{ marginTop: '2.5rem', padding: '1.5rem', borderLeft: '2px solid var(--champagne)' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(250,248,245,0.4)', marginBottom: '1rem' }}>
                  INDUSTRIA vs SIDEREAI
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {differentiators.map((d, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', paddingBottom: '0.75rem', borderBottom: i < differentiators.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(250,248,245,0.3)', textDecoration: 'line-through', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
                        {d.industry}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--champagne)', fontFamily: 'Inter, sans-serif', fontWeight: 500, lineHeight: 1.5 }}>
                        {d.sidere}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: 3 niveles de mentoría */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '0.5rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.5rem' }}>
                FRAMEWORK DE MENTORÍA — 3 NIVELES
              </div>
              {mentoriaLevels.map((level, i) => {
                const icons = [Users, CheckCircle, FileText]
                const IconC = icons[i]
                return (
                  <div
                    key={level.num}
                    className="mentoria-item glass-card"
                    style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: '12px', flexShrink: 0,
                      background: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <IconC size={20} style={{ color: 'var(--champagne)' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(250,248,245,0.35)', marginBottom: '0.3rem' }}>
                        NIVEL {level.num}
                      </div>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '-0.02em', color: 'var(--ivory)', marginBottom: '0.5rem' }}>
                        {level.title}
                      </h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(250,248,245,0.5)', fontWeight: 300 }}>
                        {level.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN SLAs: Cumplimiento y Experiencia Institucional ─────────── */}
      <section
        ref={slaRef}
        id="slas"
        className="section-padding"
        style={{
          background: 'var(--slate)',
          backgroundImage: 'radial-gradient(ellipse at top right, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
      >
        <div className="container-wide">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Experiencia */}
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.75rem' }}>
                — EXPERIENCIA Y CUMPLIMIENTO
              </div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.15 }}>
                Comprometidos con{' '}
                <span className="serif-italic" style={{ color: 'var(--champagne)' }}>la continuidad.</span>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(250,248,245,0.5)', marginTop: '1.25rem', lineHeight: 1.8, fontWeight: 300 }}>
                Más de cinco años desarrollando sistemas para el sector público y privado en Centroamérica y Norteamérica. Plataformas de M&amp;E, gestión de beneficiarios y sistemas de alta disponibilidad para organizaciones con exigencias regulatorias estrictas.
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                {[
                  { n: '+5 años', label: 'Trayectoria sostenida' },
                  { n: '+12', label: 'Sistemas desplegados' },
                  { n: '100%', label: 'Entregas en plazo' },
                ].map(s => (
                  <div key={s.n}>
                    <div className="stat-number">{s.n}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'rgba(250,248,245,0.4)', marginTop: '0.2rem' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: SLA Cards */}
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '1.25rem' }}>
                POLÍTICA DE SOPORTE Y SLAs DOCUMENTADOS
              </div>

              {/* Availability badge */}
              <div className="sla-card glass-card" style={{ padding: '1.5rem', marginBottom: '1rem', borderLeft: '2px solid var(--champagne)' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(250,248,245,0.35)', marginBottom: '0.5rem' }}>
                  DISPONIBILIDAD GARANTIZADA EN PRODUCCIÓN
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 800,
                  fontSize: '2.5rem', letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg, var(--champagne), var(--ivory))',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  99.5%
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(250,248,245,0.5)', marginTop: '0.25rem' }}>
                  SLA documentado y firmado con cada contrato de entrega
                </div>
              </div>

              {/* Response time cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {slaItems.map((item, i) => (
                  <div
                    key={i}
                    className="sla-card glass-card"
                    style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '9999px', background: item.color, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: 'var(--ivory)' }}>
                          Severidad {item.severity}
                        </div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(250,248,245,0.4)', fontWeight: 300 }}>
                          Tiempo de respuesta garantizado
                        </div>
                      </div>
                    </div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.9rem', color: item.color }}>
                      {item.response}
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(250,248,245,0.4)', marginTop: '1.25rem', lineHeight: 1.75, fontWeight: 300 }}>
                SidereAI ofrece garantía técnica sobre el código entregado, que incluye la corrección de defectos de origen sin costo adicional durante el período de garantía contractual establecido en el contrato.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
