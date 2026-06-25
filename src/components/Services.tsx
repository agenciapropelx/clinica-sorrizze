const services = [
  {
    icon: 'dentistry',
    title: 'Limpeza',
    desc: 'Profilaxia completa para manter sua saúde bucal em dia e prevenir doenças.',
  },
  {
    icon: 'flare',
    title: 'Clareamento',
    desc: 'Recupere o brilho do seu sorriso com técnicas modernas e seguras.',
  },
  {
    icon: 'straighten',
    title: 'Ortodontia',
    desc: 'Alinhamento dental com aparelhos modernos e discretos, incluindo alinhadores.',
  },
  {
    icon: 'favorite',
    title: 'Facetas',
    desc: 'Transformação estética do sorriso com lentes de contato de alta durabilidade.',
  },
  {
    icon: 'add_task',
    title: 'Implantes',
    desc: 'Reabilitação oral completa para devolver função mastigatória e estética.',
  },
  {
    icon: 'healing',
    title: 'Restaurações',
    desc: 'Tratamentos de cárie e reparos estéticos com resinas de alta qualidade.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#f9f9ff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span
            style={{
              color: '#775a19',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Nossas Especialidades
          </span>
          <h2
            style={{
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 34px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: '#111c2d',
              margin: '8px 0 16px',
            }}
          >
            Tratamentos de Excelência
          </h2>
          <p style={{ fontSize: 16, color: '#4e4639', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            Oferecemos tratamentos odontológicos avançados, sempre focados em conforto,
            segurança e resultados naturais.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid-3"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div
      className="luxury-shadow"
      style={{
        backgroundColor: '#ffffff',
        padding: 32,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 16,
        border: '1px solid rgba(209,197,180,0.12)',
        transition: 'border-color 0.2s, transform 0.2s',
        cursor: 'default',
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
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: '#ffdea5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#775a19',
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 32 }}>{icon}</span>
      </div>
      <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111c2d', margin: 0 }}>{title}</h3>
      <p style={{ fontSize: 15, color: '#4e4639', lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  )
}
