import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Insights', href: '#insights' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} style={{ zIndex: 600 }}>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
          style={{ color: 'var(--ivory)' }}
        >
          <X size={24} />
        </button>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--ivory)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={() => setMenuOpen(false)}
          className="btn-magnetic btn-primary"
        >
          <span className="btn-slide" />
          <span className="btn-text">Contacto</span>
        </a>
      </div>

      {/* Actual Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          padding: '1rem 1.5rem',
          transition: 'all 0.4s ease',
        }}
      >
        <nav
          className={`container-wide flex items-center justify-between ${scrolled ? 'nav-pill' : ''}`}
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: scrolled ? '0.6rem 1.5rem' : '0.6rem 0',
            transition: 'all 0.4s ease',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <svg width="32" height="37" viewBox="0 0 130.35 151.82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <style>{`.ls1{fill:none;stroke:#C9A84C;stroke-miterlimit:10}.ls2{fill:#C9A84C;stroke:#C9A84C;stroke-miterlimit:10}`}</style>
              <path className="ls1" d="M98,106.43l50.81,38.46-74,7.41S124.79,175,125.55,175s47.75,10.47,47.75,10.47l-22.47-40.6,28.6-38.8L139.6,230.94l-10.47-51.07L98.05,107.92l-1.35-3.11,59.38,26.86L196,149.74,127.85,176l-35.49,21.7,23.12-49.46,10.11-21.56,14.26-37.49,33.45,96.26" transform="translate(-69.9 -83.76)"/>
              <line className="ls1" x1="9.86" y1="66.86" x2="107.22" y2="24.36"/>
              <line className="ls1" x1="58.46" y1="92.28" x2="80.93" y2="61.13"/>
              <circle className="ls2" cx="5.47" cy="69.18" r="4.97"/>
              <circle className="ls2" cx="28.08" cy="22.07" r="4.97"/>
              <circle className="ls2" cx="23.11" cy="113.96" r="4.97"/>
              <circle className="ls2" cx="58.46" cy="92.86" r="4.97"/>
              <circle className="ls2" cx="80.34" cy="61.13" r="4.97"/>
              <circle className="ls2" cx="108.39" cy="23.3" r="4.97"/>
              <circle className="ls2" cx="124.88" cy="66.1" r="4.97"/>
              <circle className="ls2" cx="69.69" cy="5.47" r="4.97"/>
              <circle className="ls2" cx="69.56" cy="146.35" r="4.97"/>
              <circle className="ls2" cx="102.66" cy="100.9" r="4.97"/>
            </svg>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.04em', color: 'var(--ivory)' }}>
                Sidere<span style={{ color: 'var(--champagne)' }}>AI</span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.14em', color: 'rgba(250,248,245,0.45)' }}>
                INGENIERÍA NEURAL
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-7" style={{ listStyle: 'none' }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: 'rgba(250,248,245,0.65)',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'color 0.25s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--champagne)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(250,248,245,0.65)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/50362200921"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic btn-primary hidden md:inline-flex"
            >
              <span className="btn-slide" />
              <span className="btn-text">WhatsApp</span>
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10"
              style={{ background: 'transparent', border: 'none', color: 'var(--ivory)', cursor: 'pointer' }}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}
