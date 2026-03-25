import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Globe, QrCode, ScanLine, Building2, Cake, Coffee, Monitor, PenLine } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 'openqr',
    title: 'OpenQR',
    subtitle: 'Generador y lector de códigos QR',
    description: 'Herramienta web de alta precisión para generar, personalizar y escanear códigos QR al instante. Cero instalación, funciona directamente desde el navegador.',
    url: 'https://youdicen.github.io/OpenQR/',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=80',
    icon: QrCode,
    tags: ['Open Source', 'JavaScript', 'PWA'],
    color: '#C9A84C',
  },
  {
    id: 'opensignature',
    title: 'OpenSignature',
    subtitle: 'Terminal de firma digital offline',
    description: 'Sistema de alta precisión diseñado bajo principios de confianza digital. Captura de firmas biométricas y fotografías en un entorno completamente aislado y seguro.',
    url: 'https://youdicen.github.io/OpenSignature/',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    icon: PenLine,
    tags: ['Offline', 'React', 'Seguridad'],
    color: '#32CD32',
  },
  {
    id: 'openocr',
    title: 'OpenOCR',
    subtitle: 'Reconocimiento óptico de caracteres',
    description: 'Aplicación de OCR para extraer texto de documentos de identidad mediante cámara o galería. Optimizada para móviles con extracción estructurada de datos en JSON.',
    url: 'https://youdicen.github.io/OpenOCR/',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=800&auto=format&fit=crop&q=80',
    icon: ScanLine,
    tags: ['IA', 'Tesseract.js', 'Mobile'],
    color: '#7C3AED',
  },
  {
    id: 'guanaco',
    title: 'Portal Guanaco',
    subtitle: 'Plataforma de reputación',
    description: 'Sistema digital para que ciudadanos reporten estafas y malos clientes. Interfaz intuitiva con seguimiento en tiempo real y base de datos centralizada.',
    url: 'https://youdicen.github.io/PortalGuanaco/',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    icon: Globe,
    tags: ['Cívico', 'React', 'Supabase'],
    color: '#BD0012',
  },
  {
    id: 'hotelpalma',
    title: 'Hotel La Palma',
    subtitle: 'Sitio web de hotel boutique',
    description: 'Propuesta de presencia digital premium para un hotel boutique. Galería inmersiva, sistema de reservas integrado, y diseño que captura la experiencia única del establecimiento.',
    url: 'https://youdicen.github.io/HotelLaPalma-Web/',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=80',
    icon: Building2,
    tags: ['Hospitalidad', 'HTML/CSS', 'Animaciones'],
    color: '#059669',
  },
  {
    id: 'lilian',
    title: 'Pastelería Lilian',
    subtitle: 'Catálogo digital para pastelería',
    description: 'Sitio web elegante para una pastelería artesanal. Catálogo de productos visual, pedidos vía WhatsApp y diseño que refleja la artesanía y calidad de sus creaciones. Google maps scraping y analisis de reputacion por sucursal.',
    url: 'https://www.pastelerialilian.com/',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80',
    icon: Cake,
    tags: ['Gastronomía', 'React', 'WhatsApp'],
    color: '#DB2777',
  },
  {
    id: 'cafecaporal',
    title: 'Café Caporal',
    subtitle: 'Café de especialidad',
    description: 'E-commerce premium para café de especialidad. Calculadora avanzada de dosis de café, Experiencia de usuario refinada con proceso de compra optimizado y diseño que refleja la calidad del producto y carrito de compras',
    url: 'https://cafecaporal.com/',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&auto=format&fit=crop&q=80',
    icon: Coffee,
    tags: ['E-commerce', 'Café', 'Premium'],
    color: '#D97706',
  },
  {
    id: 'mastergelectronics',
    title: 'MasterG Electronics',
    subtitle: 'Tienda de tecnología',
    description: 'Plataforma e-commerce publicitaria e informativa para clientes del negocio.',
    url: 'https://mastergelectronics.com/',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=80',
    icon: Monitor,
    tags: ['E-commerce', 'Tecnología', 'Gadgets'],
    color: '#3B82F6',
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 70,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 87%',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  const Icon = project.icon
  const isLarge = index === 0 || index === 4

  return (
    <div
      ref={cardRef}
      className={`portfolio-card ${isLarge ? 'md:col-span-2' : ''}`}
    >
      {/* Image */}
      <div style={{ overflow: 'hidden', borderRadius: '1.5rem 1.5rem 0 0', position: 'relative' }}>
        <img
          src={project.image}
          alt={project.title}
          className="portfolio-card-img"
          loading="lazy"
        />
        {/* Color accent overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${project.color}22 0%, transparent 60%)`,
          pointerEvents: 'none',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem 1.75rem 2rem' }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              className="tag-pill"
              style={{
                background: `${project.color}18`,
                color: project.color,
                border: `1px solid ${project.color}33`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.3rem', letterSpacing: '-0.03em', color: 'var(--ivory)', marginBottom: '0.25rem' }}>
              {project.title}
            </h3>
            <div className="serif-italic" style={{ fontSize: '0.9rem', color: 'rgba(250,248,245,0.5)' }}>
              {project.subtitle}
            </div>
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: '12px', flexShrink: 0,
            background: `${project.color}18`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon size={18} style={{ color: project.color }} />
          </div>
        </div>

        {/* Description */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(250,248,245,0.5)', fontWeight: 300, marginTop: '0.85rem', marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* CTA */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-magnetic"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '9999px',
            background: `${project.color}18`,
            border: `1px solid ${project.color}40`,
            color: project.color,
            textDecoration: 'none',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = project.color; e.currentTarget.style.color = '#FAF8F5' }}
          onMouseLeave={e => { e.currentTarget.style.background = `${project.color}18`; e.currentTarget.style.color = project.color }}
        >
          Ver Proyecto <ExternalLink size={13} />
        </a>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} id="portafolio" className="section-padding" style={{ background: 'var(--slate)', backgroundImage: 'radial-gradient(ellipse at top, rgba(201,168,76,0.04) 0%, transparent 60%)' }}>
      <div className="container-wide">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '0.75rem' }}>
              — PORTAFOLIO DE PROYECTOS (DEMOS)
            </div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.1 }}>
              Soluciones que{' '}
              <span className="serif-italic" style={{ color: 'var(--champagne)' }}>funcionan</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(250,248,245,0.5)', marginTop: '0.75rem', maxWidth: '420px', lineHeight: 1.7, fontWeight: 300 }}>
              Proyectos reales, para clientes reales. Cada solución construida desde cero con tecnología de vanguardia.
            </p>
          </div>
          <a
            href="https://wa.me/50362200921"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic btn-primary"
          >
            <span className="btn-slide" />
            <span className="btn-text">Cotizar Proyecto</span>
          </a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
