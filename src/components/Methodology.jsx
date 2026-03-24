import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Auditoría',
    description: 'Evaluamos la madurez de datos e infraestructura existente. Identificamos los cuellos de botella y las oportunidades de automatización con mayor ROI.',
  },
  {
    num: '02',
    title: 'Arquitectura',
    description: 'Diseñamos redes neuronales personalizadas y seguras. Cada arquitectura es propietaria: tus datos nunca abandonan tu infraestructura.',
  },
  {
    num: '03',
    title: 'Despliegue',
    description: 'Implementamos en entornos de alta seguridad con integración fluida a sistemas legacy. Sin interrupciones operativas, sin fricción.',
  },
  {
    num: '04',
    title: 'Refinamiento',
    description: 'Bucles de retroalimentación continua y ajuste de pesos. Su sistema se vuelve más inteligente con cada ciclo de producción.',
  },
]

export default function Methodology() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.meth-title', {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
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
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,18,0.92)', pointerEvents: 'none' }} />

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Left */}
          <div className="meth-title">
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.75rem' }}>
              — EL PROTOCOLO SIDERE
            </div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.1 }}>
              Del caos a la{' '}
              <span className="serif-italic" style={{ color: 'var(--champagne)' }}>precisión</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(250,248,245,0.5)', marginTop: '1.25rem', lineHeight: 1.8, fontWeight: 300 }}>
              Un proceso probado de cuatro etapas que transforma la complejidad de la inteligencia artificial en sistemas empresariales confiables y escalables.
            </p>

            {/* Philosophy Box */}
            <div
              className="glass-card"
              style={{ marginTop: '2.5rem', padding: '1.5rem', borderLeft: '2px solid var(--champagne)' }}
            >
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(250,248,245,0.4)', marginBottom: '0.5rem' }}>
                ENFOQUE INDUSTRIA vs SIDERE
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(250,248,245,0.35)', marginBottom: '0.4rem', textDecoration: 'line-through' }}>APIs de terceros</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(250,248,245,0.35)', textDecoration: 'line-through' }}>Datos en la nube pública</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(250,248,245,0.35)', textDecoration: 'line-through' }}>Dependencia de proveedores</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--champagne)', marginBottom: '0.4rem' }}>Modelos propietarios</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--champagne)', marginBottom: '0.4rem' }}>Soberanía total de datos</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--champagne)' }}>Independencia operativa</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '0.5rem' }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={el => stepsRef.current[i] = el}
                className="timeline-item"
                style={{ paddingLeft: '1.75rem' }}
              >
                <div className="process-step-number">FASE {step.num}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.025em', color: 'var(--ivory)', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(250,248,245,0.5)', fontWeight: 300 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
