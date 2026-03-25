import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Zap, Lock, Target, Smartphone, Layout } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Zap,
    tag: 'Velocidad',
    title: 'Escala sin sobre-invertir',
    italic: 'capital eficiente',
    description: 'Construimos pipelines de IA que crecen con tu negocio, sin necesidad de contratar equipos enteros. Un sistema bien diseñado multiplica la capacidad de tu equipo actual.',
    metric: '3x',
    metricLabel: 'Capacidad de equipo',
  },
  {
    icon: Shield,
    tag: 'Eficiencia',
    title: 'Elimina los cuellos de botella',
    italic: 'flujo sin fricción',
    description: 'Identificamos y automatizamos los procesos manuales repetitivos que consumen el tiempo de tu equipo. Cada workflow optimizado libera horas para trabajo de alto valor.',
    metric: '80%',
    metricLabel: 'Tareas automatizadas',
  },
  {
    icon: Lock,
    tag: 'Precisión',
    title: 'Duplica tu eficiencia operativa',
    italic: 'resultados medibles',
    description: 'Nuestros modelos propietarios producen resultados deterministas, no alucinaciones. Data soberana: tu información nunca entrena modelos públicos de terceros.',
    metric: '2x',
    metricLabel: 'Eficiencia operativa',
  },
  {
    icon: Target,
    tag: 'Estrategia',
    title: 'Desarrollo Estratégico Ágil',
    italic: 'lógica antes que código',
    description: 'Generamos herramientas personalizadas en tiempo récord porque primero comprendemos a fondo la lógica operativa de tu negocio. Diseñamos la solución exacta antes de escribir la primera línea de código.',
    metric: '100%',
    metricLabel: 'Personalización',
  },
  {
    icon: Smartphone,
    tag: 'Accesibilidad',
    title: 'Enfoque Mobile-First',
    italic: 'experiencia óptima',
    description: 'Todas nuestras plataformas se desarrollan pensando nativamente en un entorno móvil. Aseguramos una interacción inmediata, fluida y sin fricciones desde la palma de tu mano, en cualquier dispositivo.',
    metric: 'UI/UX',
    metricLabel: 'Nativo sin compromisos',
  },
  {
    icon: Layout,
    tag: 'Estética',
    title: 'Diseño Moderno e Intuitivo',
    italic: 'alta fidelidad',
    description: 'Construimos interfaces impecables de alta fidelidad que operan como verdaderos instrumentos digitales. Combinamos la estética premium con una usabilidad instintiva para elevar la percepción de tu marca.',
    metric: '1:1',
    metricLabel: 'Pixel perfect',
  },
]

export default function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.features-title', {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 60, duration: 0.9, delay: i * 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="servicios" className="section-padding" style={{ background: 'var(--obsidian)' }}>
      <div className="container-wide">
        {/* Header */}
        <div className="features-title" style={{ marginBottom: '4rem', maxWidth: '640px' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.75rem' }}>
            — PROPOSICIÓN DE VALOR
          </div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.1 }}>
            Por qué elegir{' '}
            <span className="serif-italic" style={{ color: 'var(--champagne)' }}>Sidere AI</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                ref={el => cardsRef.current[i] = el}
                className="glass-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                {/* Icon + Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '12px',
                    background: 'rgba(201,168,76,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} style={{ color: 'var(--champagne)' }} />
                  </div>
                  <span className="tag-pill" style={{ background: 'rgba(201,168,76,0.08)', color: 'var(--champagne)', border: '1px solid rgba(201,168,76,0.2)' }}>
                    {feat.tag}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.03em', color: 'var(--ivory)' }}>
                    {feat.title}
                  </h3>
                  <div className="serif-italic" style={{ color: 'var(--champagne)', fontSize: '0.9rem', marginTop: '0.1rem' }}>
                    {feat.italic}
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', lineHeight: 1.75, color: 'rgba(250,248,245,0.55)', fontWeight: 300 }}>
                  {feat.description}
                </p>

                {/* Metric */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{
                    fontFamily: 'Inter, sans-serif', fontWeight: 800,
                    fontSize: '2rem', letterSpacing: '-0.04em',
                    background: 'linear-gradient(135deg, var(--champagne), var(--ivory))',
                    WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>{feat.metric}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(250,248,245,0.4)' }}>
                    {feat.metricLabel}
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
