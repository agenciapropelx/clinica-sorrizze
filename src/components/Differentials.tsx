const items = [
  {
    icon: 'biotech',
    title: 'Equipamentos Modernos',
    desc: 'Utilizamos as tecnologias mais avançadas do mercado para diagnósticos precisos e tratamentos indolores.',
  },
  {
    icon: 'home_health',
    title: 'Ambiente Acolhedor',
    desc: 'Nossa clínica foi projetada para oferecer conforto e relaxamento, reduzindo qualquer ansiedade pré-consulta.',
  },
  {
    icon: 'groups',
    title: 'Equipe Experiente',
    desc: 'Profissionais altamente qualificados e em constante atualização para oferecer o melhor resultado possível.',
  },
]

export default function Differentials() {
  return (
    <section id="differentials" style={{ backgroundColor: '#f0f3ff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2
            style={{
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 34px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: '#111c2d',
              margin: '0 0 16px',
            }}
          >
            Por que escolher a Sorrizze?
          </h2>
        </div>

        <div
          className="grid-3"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="luxury-shadow"
              style={{
                backgroundColor: '#ffffff',
                padding: 32,
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                border: '1px solid rgba(209,197,180,0.12)',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(119,90,25,0.3)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(209,197,180,0.12)'
                ;(e.currentTarget as HTMLElement).style.transform = 'none'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#775a19' }}>
                {item.icon}
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111c2d', margin: 0 }}>{item.title}</h3>
              <p style={{ fontSize: 15, color: '#4e4639', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
