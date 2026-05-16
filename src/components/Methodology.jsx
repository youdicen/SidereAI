import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brain, Cpu, GitMerge, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const frameworks = [
  {
    id: 'cognitive',
    icon: Brain,
    tag: 'Scrum · IA Predictiva',
    roman: 'I',
    name: 'Cognitive Agile',
    nameEs: 'Agilidad Cognitiva',
    italic: 'el proceso que razona',
    description: 'Mantenemos la estructura de los eventos Scrum (Sprint Planning, Daily, Review, Retrospective), pero cada ceremonia está asistida por agentes de IA que analizan el estado del backlog, detectan cuellos de botella técnicos de forma proactiva y sugieren ajustes arquitectónicos antes de que se conviertan en deuda técnica. El proceso no solo es rápido y flexible: razona sobre el estado del sistema en tiempo real.',
    metric: 'Scrum + IA',
    metricLabel: 'Detección proactiva de cuellos de botella',
    color: 'rgba(201,168,76,',
  },
  {
    id: 'augmented',
    icon: Cpu,
    tag: 'IA · Ciclo de Vida',
    roman: 'II',
    name: 'AI-Augmented Engineering',
    nameEs: 'Ingeniería Aumentada por IA',
    italic: 'cada artefacto potenciado',
    description: 'El ciclo de vida Scrum no cambia en su esencia contractual —los sprints, entregables y demos siguen siendo predecibles y auditables— pero cada artefacto está potenciado por agentes especializados. Los criterios de aceptación son validados automáticamente, la cobertura de tests evaluada en tiempo real y la documentación de APIs en Postman generada de forma asistida. El equipo humano mantiene la gobernanza; la IA incrementa la densidad de valor por sprint.',
    metric: '+AI por Sprint',
    metricLabel: 'Densidad de entrega por ciclo',
    color: 'rgba(150,120,220,',
  },
  {
    id: 'synthesized',
    icon: GitMerge,
    tag: 'Híbrido · Lógica + IA',
    roman: 'III',
    name: 'Synthesized Agile',
    nameEs: 'Agilidad Sintetizada',
    italic: 'lógica humana, ejecución de máquina',
    description: 'El software resultante no es puramente artesanal ni puramente generado: es una síntesis donde cada decisión de alto nivel tiene origen humano y cada optimización de implementación tiene asistencia de IA. Esto reduce el margen de error, acelera los ciclos de revisión y garantiza que la arquitectura final sea coherente con los requerimientos institucionales del cliente.',
    metric: 'Síntesis',
    metricLabel: 'Lógica humana + optimización IA',
    color: 'rgba(80,180,120,',
  },
  {
    id: 'adl',
    icon: Zap,
    tag: 'ADL · Micro-iteraciones',
    roman: 'IV',
    name: 'Autonomous Development Lifecycle',
    nameEs: 'ADL — Ciclo Autónomo',
    italic: 'más allá del sprint de dos semanas',
    description: 'Bajo el ADL la agilidad se mide en horas, no en semanas. Los agentes de IA son capaces de iterar, probar y preparar micro-cambios de forma continua bajo supervisión humana estricta, sin necesidad de esperar al final de un sprint para incorporar retroalimentación. Los hitos y entregables formales permanecen inalterados, pero internamente el equipo opera a una velocidad cualitativamente superior a la de cualquier equipo convencional.',
    metric: 'ADL · 24h',
    metricLabel: 'Ciclos de mejora bajo supervisión',
    color: 'rgba(189,0,18,',
  },
]

const certifications = [
  { role: 'Product Owner', cert: 'Scrum Product Owner (CSPO)' },
  { role: 'Scrum Master', cert: 'ScrumMaster (CSM)' },
  { role: 'Senior Developer', cert: 'Scrum Developer (CSD)' },
  { role: 'Arquitecto de Soluciones', cert: 'AWS Solutions Architect' },
]

const phases = [
  {
    num: '01',
    title: 'Descubrimiento y Alcance',
    description: 'Evaluación de requerimientos funcionales y no funcionales. Elaboración del Product Backlog inicial con criterios de aceptación, análisis de riesgos técnicos y Plan de Arquitectura preliminar validado por el cliente.',
  },
  {
    num: '02',
    title: 'Diseño de Arquitectura',
    description: 'Diseño Cloud-Native del sistema, selección del stack tecnológico y elaboración de diagramas bajo el C4 Model. Revisión y aprobación formal del diseño por el equipo técnico del cliente antes del inicio del desarrollo.',
  },
  {
    num: '03',
    title: 'Desarrollo Iterativo con Cognitive Agile',
    description: 'Ciclos de desarrollo asistidos por IA con entregables funcionales cada dos semanas. Code reviews diarios, testing continuo y demostraciones en ambiente de staging controlado. La IA monitorea la velocidad del equipo y anticipa desviaciones del cronograma.',
  },
  {
    num: '04',
    title: 'Despliegue y Transferencia de Conocimiento',
    description: 'Despliegue controlado en producción con rollback plan documentado. Entrega de documentación técnica completa (APIs, diagramas C4, manuales operativos) y sesiones formales de transferencia al equipo del cliente.',
  },
]

export default function Methodology() {
  const sectionRef = useRef(null)
  const frameworksRef = useRef(null)
  const stepsRef = useRef([])
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro title
      gsap.from('.meth-title', {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      // Framework cards
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 60, duration: 0.9, delay: i * 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: frameworksRef.current, start: 'top 80%' },
        })
      })
      // Timeline steps
      stepsRef.current.forEach((step, i) => {
        gsap.from(step, {
          opacity: 0, x: -40, duration: 0.8, delay: i * 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: step, start: 'top 88%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ─── SECCIÓN A: El Protocolo Sidere — Intro + 4 Marcos ─────────────── */}
      <section
        ref={sectionRef}
        id="metodologia"
        className="section-padding"
        style={{
          background: 'var(--obsidian)',
          backgroundImage: `
            radial-gradient(ellipse at bottom left, rgba(189,0,18,0.06) 0%, transparent 50%),
            url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=40')
          `,
          backgroundBlendMode: 'normal, overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,18,0.93)', pointerEvents: 'none' }} />

        <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div className="meth-title" style={{ marginBottom: '4rem', maxWidth: '720px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.75rem' }}>
              — EL PROTOCOLO SIDERE
            </div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.1 }}>
              Más allá de Scrum:{' '}
              <span className="serif-italic" style={{ color: 'var(--champagne)' }}>cuatro marcos. Un resultado.</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(250,248,245,0.5)', marginTop: '1.25rem', lineHeight: 1.8, fontWeight: 300 }}>
              Evolucionamos el marco ágil con inteligencia artificial como participante activo del ciclo de vida. La trazabilidad y previsibilidad contractual se mantienen; la velocidad e inteligencia operativa se multiplican.
            </p>
          </div>

          {/* 4 Framework Cards — 2×2 grid */}
          <div
            ref={frameworksRef}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem', marginBottom: '5rem' }}
          >
            {frameworks.map((fw, i) => {
              const Icon = fw.icon
              return (
                <div
                  key={fw.id}
                  ref={el => cardsRef.current[i] = el}
                  className="glass-card"
                  style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${fw.color}0.3)`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                >
                  {/* Top row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                    }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: '12px',
                        background: `${fw.color}0.1)`,
                        border: `1px solid ${fw.color}0.2)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={19} style={{ color: `${fw.color}0.9)` }} />
                      </div>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'rgba(250,248,245,0.3)' }}>
                        MARCO {fw.roman}
                      </span>
                    </div>
                    <span className="tag-pill" style={{ background: `${fw.color}0.08)`, color: `${fw.color}0.85)`, border: `1px solid ${fw.color}0.2)`, fontSize: '0.62rem' }}>
                      {fw.tag}
                    </span>
                  </div>

                  {/* Name */}
                  <div>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.03em', color: 'var(--ivory)', lineHeight: 1.3 }}>
                      {fw.name}
                    </h3>
                    <div className="serif-italic" style={{ color: `${fw.color}0.8)`, fontSize: '0.875rem', marginTop: '0.15rem' }}>
                      {fw.italic}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.845rem', lineHeight: 1.8, color: 'rgba(250,248,245,0.52)', fontWeight: 300, flexGrow: 1 }}>
                    {fw.description}
                  </p>

                  {/* Metric */}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.85rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace', fontWeight: 700,
                      fontSize: '0.85rem', letterSpacing: '0.06em',
                      color: `${fw.color}0.85)`,
                    }}>{fw.metric}</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(250,248,245,0.35)' }}>
                      {fw.metricLabel}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Philosophy Box — Industria vs Protocolo Sidere */}
          <div
            className="glass-card"
            style={{ padding: '2rem', borderLeft: '2px solid var(--champagne)', marginBottom: '5rem' }}
          >
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(250,248,245,0.4)', marginBottom: '1.25rem' }}>
              ENFOQUE INDUSTRIA vs PROTOCOLO SIDERE
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Scrum sin asistencia de IA',
                  'Sprints sin visibilidad interna entre ciclos',
                  'Documentación manual post-desarrollo',
                  'Equipo humano como único ejecutor',
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: '0.8rem', color: 'rgba(250,248,245,0.3)', textDecoration: 'line-through', fontFamily: 'Inter, sans-serif' }}>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Cognitive Agile: Scrum con razonamiento predictivo',
                  'ADL: micro-iteraciones continuas bajo supervisión',
                  'AI-Augmented: documentación asistida en tiempo real',
                  'Synthesized Agile: lógica humana + optimización IA',
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: '0.8rem', color: 'var(--champagne)', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── FASES DEL PROTOCOLO + CERTIFICACIONES ─── */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Certifications */}
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '1.5rem' }}>
                STACK METODOLÓGICO DEL EQUIPO
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {certifications.map((c, i) => (
                  <div
                    key={i}
                    className="glass-card"
                    style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}
                  >
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(250,248,245,0.35)' }}>
                      {c.role.toUpperCase()}
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: 'var(--ivory)' }}>
                      {c.cert}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Timeline de Fases */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '0.5rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.25rem' }}>
                FASES DEL PROTOCOLO DE ENTREGA
              </div>
              {phases.map((phase, i) => (
                <div
                  key={phase.num}
                  ref={el => stepsRef.current[i] = el}
                  className="timeline-item"
                  style={{ paddingLeft: '1.75rem' }}
                >
                  <div className="process-step-number">FASE {phase.num}</div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.025em', color: 'var(--ivory)', marginBottom: '0.5rem' }}>
                    {phase.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.855rem', lineHeight: 1.75, color: 'rgba(250,248,245,0.5)', fontWeight: 300 }}>
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
