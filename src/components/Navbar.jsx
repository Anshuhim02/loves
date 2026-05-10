import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        <a href="#home" className="navbar-brand" style={{ textDecoration: 'none' }}>
          D ❤️ S
        </a>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {[
            { href: '#baby', label: '👶 Baby' },
            { href: '#gallery', label: 'Memories' },
            { href: '#timeline', label: 'Story' },
            { href: '#finale', label: 'Celebrate' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 500,
                padding: '6px 14px',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                display: 'none',
              }}
              className="nav-link-desktop"
            >
              {link.label}
            </a>
          ))}
          <style>{`
            @media (min-width: 769px) {
              .nav-link-desktop { display: inline-block !important; }
              .nav-link-desktop:hover { color: var(--rose-gold-light) !important; background: rgba(255,255,255,0.05); }
            }
          `}</style>
        </div>
      </div>
    </nav>
  )
}
