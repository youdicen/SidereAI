import { MessageCircle, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contacto"
      style={{
        background: 'var(--obsidian-deep, #08080C)',
        borderTop: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top rounded corners visual */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--champagne), var(--obsidian-red), var(--champagne), transparent)',
      }} />

      {/* Contact CTA Band */}
      <div
        style={{
          padding: '5rem 1.5rem',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      >
        <div className="container-wide" style={{ maxWidth: 720 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--champagne)', marginBottom: '1rem' }}>
            — INICIEMOS UNA CONVERSACIÓN
          </div>
          <h2 style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '-0.04em', color: 'var(--ivory)', lineHeight: 1.05, marginBottom: '1.25rem',
          }}>
            ¿Listo para construir algo{' '}
            <span className="serif-italic" style={{ color: 'var(--champagne)' }}>extraordinario</span>?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(250,248,245,0.5)', lineHeight: 1.75, marginBottom: '2.5rem', fontWeight: 300 }}>
            Escríbenos directamente por WhatsApp. Respondemos en menos de 2 horas durante horario laboral.
          </p>

          <a
            href="https://wa.me/50362200921"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic btn-primary"
            style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
          >
            <span className="btn-slide" />
            <span className="btn-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageCircle size={18} /> Escribir por WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="gradient-line" />

      {/* Footer Grid */}
      <div className="container-wide" style={{ padding: '3rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.04em', color: 'var(--ivory)', marginBottom: '0.5rem' }}>
              Sidere<span style={{ color: 'var(--champagne)' }}>AI</span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(250,248,245,0.4)', lineHeight: 1.7, fontWeight: 300 }}>
              Ingeniería Neural Aplicada.<br />Construimos la inteligencia que mueve tu empresa.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a href="https://linkedin.com/company/sidereai" target="_blank" rel="noopener noreferrer"
                style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(250,248,245,0.5)', textDecoration: 'none', transition: 'background 0.25s, color 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; e.currentTarget.style.color = 'var(--champagne)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(250,248,245,0.5)' }}
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(250,248,245,0.35)', marginBottom: '1rem' }}>
              NAVEGACIÓN
            </div>
            {[
              { label: 'Servicios', href: '#servicios' },
              { label: 'Portafolio', href: '#portafolio' },
              { label: 'Metodología', href: '#metodologia' },
              { label: 'Insights', href: '#insights' },
            ].map(link => (
              <div key={link.href} style={{ marginBottom: '0.5rem' }}>
                <a href={link.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(250,248,245,0.5)', textDecoration: 'none', transition: 'color 0.25s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--champagne)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(250,248,245,0.5)'}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(250,248,245,0.35)', marginBottom: '1rem' }}>
              CONTACTO DIRECTO
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a href="mailto:solutions@sidereai.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(250,248,245,0.5)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--champagne)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,245,0.5)'}
              >
                <Mail size={14} /> solutions@sidereai.com
              </a>
              <a href="tel:+50362200921" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(250,248,245,0.5)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--champagne)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,245,0.5)'}
              >
                <Phone size={14} /> SV: +503 6220-0921
              </a>
              <a href="tel:+18174021579" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(250,248,245,0.5)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--champagne)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,245,0.5)'}
              >
                <Phone size={14} /> US: +1 (817) 402-1579
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(250,248,245,0.35)', marginBottom: '1rem' }}>
              LEGAL
            </div>
            {[
              { label: 'Ética Neural y Gobernanza', href: 'legal/neural-ethics.html' },
              { label: 'Política de Privacidad', href: 'legal/privacy-policy.html' },
              { label: 'Términos de Servicio', href: 'legal/terms-of-service.html' },
            ].map(link => (
              <div key={link.href} style={{ marginBottom: '0.5rem' }}>
                <a href={link.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(250,248,245,0.5)', textDecoration: 'none', transition: 'color 0.25s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--champagne)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(250,248,245,0.5)'}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(250,248,245,0.25)' }}>
            © {year} Sidere AI. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="status-dot" />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'rgba(34,197,94,0.7)' }}>
              TODOS LOS SISTEMAS OPERATIVOS
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
