import { InstagramIcon, EmailIcon } from '../icons'

const EMAIL = 'mailto:contato@clinicasorrizze.com.br'

const socials = [
  {
    href: 'https://instagram.com/clinicasorrizze',
    label: 'Instagram',
    icon: <InstagramIcon size={20} />,
  },
  {
    href: EMAIL,
    label: 'E-mail',
    icon: <EmailIcon size={20} />,
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f0f3ff',
        borderTop: '1px solid rgba(209,197,180,0.3)',
        borderRadius: '16px 16px 0 0',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '64px 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/assets/logo.png" alt="Sorrizze Logo" style={{ height: 40, width: 'auto' }} />
            <span style={{ fontWeight: 700, fontSize: 20, color: '#775a19' }}>Sorrizze</span>
          </div>
          <p style={{ fontSize: 14, color: '#4e4639', lineHeight: 1.6, margin: 0 }}>
            Odontologia de alta performance e atendimento humanizado no coração de Caucaia.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 style={{ fontWeight: 700, fontSize: 15, color: '#111c2d', margin: '0 0 16px' }}>Navegação</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { href: '#services', label: 'Serviços' },
              { href: '#differentials', label: 'Diferenciais' },
              { href: '#team', label: 'Equipe' },
              { href: '#testimonials', label: 'Depoimentos' },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{ fontSize: 14, color: '#4e4639', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#775a19')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4e4639')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontWeight: 700, fontSize: 15, color: '#111c2d', margin: '0 0 16px' }}>Contato</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: 'location_on', text: 'Av. Dom Almeida Lustosa, 2628 – Jurema – Caucaia – CE' },
              { icon: 'phone', text: '(85) 98401-0886' },
              { icon: 'mail', text: 'contato@clinicasorrizze.com.br' },
            ].map((c) => (
              <li key={c.icon} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', color: '#4e4639', fontSize: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#775a19', flexShrink: 0, marginTop: 1 }}>
                  {c.icon}
                </span>
                {c.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 style={{ fontWeight: 700, fontSize: 15, color: '#111c2d', margin: '0 0 16px' }}>Social</h4>
          <div style={{ display: 'flex', gap: 12 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={s.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: '#dee8ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#515f74',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#775a19'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#dee8ff'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#515f74'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(209,197,180,0.3)',
          textAlign: 'center',
          padding: '20px 24px',
          fontSize: 13,
          color: '#7f7667',
        }}
      >
        © 2026 Sorrizze Clínica Odontológica. Todos os direitos reservados.
      </div>
    </footer>
  )
}
