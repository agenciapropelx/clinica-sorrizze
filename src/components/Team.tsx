const doctors = [
  {
    name: 'Dra. Thayna',
    specialty: 'ODONTOPEDIATRIA',
    photo: '/assets/dra-thayna.jpg',
    icons: ['verified', 'favorite'],
  },
  {
    name: 'Dr. Werington',
    specialty: 'IMPLANTODONTIA',
    photo: '/assets/dr-werington.jpg',
    icons: ['verified', 'precision_manufacturing'],
  },
  {
    name: 'Dra. Isabela',
    specialty: 'ORTODONTIA',
    photo: '/assets/dra-isabela.jpg',
    icons: ['verified', 'architecture'],
  },
]

export default function Team() {
  return (
    <section id="team" style={{ backgroundColor: '#f9f9ff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
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
            Profissionais
          </span>
          <h2
            style={{
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 34px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: '#111c2d',
              margin: '8px 0 12px',
            }}
          >
            Corpo Clínico Especializado
          </h2>
          <p style={{ fontSize: 16, color: '#4e4639' }}>
            Conheça os profissionais dedicados ao seu novo sorriso.
          </p>
        </div>

        <div
          className="grid-3"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 28,
          }}
        >
          {doctors.map((doc) => (
            <DoctorCard key={doc.name} {...doc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DoctorCard({
  name,
  specialty,
  photo,
  icons,
}: {
  name: string
  specialty: string
  photo: string
  icons: string[]
}) {
  return (
    <div
      className="luxury-shadow"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 28,
        overflow: 'hidden',
        transition: 'transform 0.25s',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'none'
      }}
    >
      {/* Photo */}
      <div
        style={{
          aspectRatio: '0.85',
          overflow: 'hidden',
          backgroundColor: '#dee8ff',
        }}
      >
        <img
          src={photo}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Info */}
      <div
        style={{
          padding: '28px 28px 32px',
          textAlign: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        <h3 style={{ fontWeight: 700, fontSize: 20, color: '#775a19', margin: '0 0 6px' }}>{name}</h3>
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            color: '#515f74',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          {specialty}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 20, color: '#4e4639' }}>
          {icons.map((ic) => (
            <span key={ic} className="material-symbols-outlined" style={{ fontSize: 22 }}>
              {ic}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
