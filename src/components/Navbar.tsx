import { useEffect, useState } from 'react'
import { WhatsAppIcon } from '../icons'

const WHATSAPP = 'https://wa.me/5585984010886?text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Sorrizze%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita.%20%F0%9F%98%8A'

const links = [
  { href: '#services', label: 'Serviços' },
  { href: '#differentials', label: 'Diferenciais' },
  { href: '#team', label: 'Equipe' },
  { href: '#testimonials', label: 'Depoimentos' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: 'rgba(249,249,255,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 1px 0 0 rgba(209,197,180,0.4)',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 1280,
          margin: '0 auto',
          padding: '14px 24px',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/assets/logo.png" alt="Sorrizze Logo" style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: 20, color: '#775a19', letterSpacing: '-0.01em' }}>Sorrizze</span>
        </a>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: activeSection === l.href.slice(1) ? '#775a19' : '#4e4639',
                textDecoration: 'none',
                borderBottom: activeSection === l.href.slice(1) ? '2px solid #775a19' : '2px solid transparent',
                paddingBottom: 2,
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#775a19',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: 9999,
            fontWeight: 700,
            fontSize: 14,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.04)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(119,90,25,0.35)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <WhatsAppIcon size={18} />
          Agendar WhatsApp
        </a>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  )
}
