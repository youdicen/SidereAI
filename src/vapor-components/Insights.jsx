import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const articles = [
  {
    tag: 'Investigación',
    date: 'Mar 2025',
    title: 'El cambio de la IA Generativa a la IA Determinista en Empresas',
    excerpt: 'Por qué las organizaciones maduras están migrando de GPT hacia arquitecturas de inferencia controlada que garantizan outputs predecibles.',
    href: 'insights/generative-to-deterministic.html',
    readTime: '8 min',
    isExternal: false,
  },
  {
    tag: 'White Paper',
    date: 'Feb 2025',
    title: 'Soberanía Neural: Las arquitecturas propietarias como escudo corporativo',
    excerpt: 'Cómo los modelos propietarios se están convirtiendo en el nuevo firewall empresarial frente al riesgo de datos en modelos públicos compartidos.',
    href: '#',
    readTime: '12 min',
    isExternal: false,
  },
]

export default function Insights() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.insight-card', {
        opacity: 0, y: 50, stagger: 0.15, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="insights" className="section-padding" style={{ background: 'var(--vaporGraphite)' }}>
      <div className="container-wide">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--vaporPlasma)', marginBottom: '0.75rem' }}>
            — INVESTIGACIÓN & ANÁLISIS
          </div>
          <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--vaporGhost)', lineHeight: 1.1 }}>
            Pensamiento{' '}
            <span className="serif-italic" style={{ color: 'var(--vaporPlasma)' }}>crítico</span>
          </h2>
        </div>

        {/* Articles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.href}
              target={article.isExternal ? '_blank' : '_self'}
              rel={article.isExternal ? 'noopener noreferrer' : undefined}
              className="insight-card glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                textDecoration: 'none',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Meta */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="tag-pill" style={{ background: 'rgba(201,168,76,0.08)', color: 'var(--vaporPlasma)', border: '1px solid rgba(201,168,76,0.2)' }}>
                  {article.tag}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(250,248,245,0.35)', fontSize: '0.72rem' }}>
                  <Clock size={11} />
                  <span style={{ fontFamily: 'Fira Code, monospace' }}>{article.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.025em', color: 'var(--vaporGhost)', lineHeight: 1.3 }}>
                {article.title}
              </h3>

              {/* Excerpt */}
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(250,248,245,0.5)', fontWeight: 300 }}>
                {article.excerpt}
              </p>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(250,248,245,0.3)' }}>
                  {article.date}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--vaporPlasma)', fontSize: '0.78rem', fontWeight: 600 }}>
                  Leer análisis <ArrowRight size={13} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
