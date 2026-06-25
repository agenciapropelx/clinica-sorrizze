const reviews = [
  {
    text: '"O atendimento é excepcional! A Dra. Thayna é maravilhosa com as crianças, meu filho perdeu o medo do dentista logo na primeira consulta."',
    author: 'Ana Souza',
    initials: 'AS',
    color: '#d5e3fd',
  },
  {
    text: '"Fiz meus implantes com o Dr. Werington e a mudança na minha autoestima foi incrível. Tudo muito moderno e profissional."',
    author: 'Roberto Lima',
    initials: 'RL',
    color: '#dee8ff',
  },
  {
    text: '"Minhas facetas ficaram super naturais. A Dra. Isabela é muito atenta aos detalhes. Recomendo de olhos fechados!"',
    author: 'Mariana Costa',
    initials: 'MC',
    color: '#ffdea5',
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', color: '#FBBC04' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ backgroundColor: '#e7eeff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2
            style={{
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 34px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: '#111c2d',
              margin: '0 0 12px',
            }}
          >
            O que dizem nossos pacientes
          </h2>
          <p style={{ fontSize: 16, color: '#4e4639', maxWidth: 480, margin: '0 auto' }}>
            Histórias reais de quem transformou seu sorriso na Sorrizze.
          </p>
        </div>

        <div
          className="grid-3"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.author}
              className="luxury-shadow"
              style={{
                backgroundColor: '#ffffff',
                padding: 32,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                border: '1px solid rgba(209,197,180,0.12)',
              }}
            >
              <Stars />
              <p
                style={{
                  fontSize: 15,
                  color: '#4e4639',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {r.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: r.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 14,
                    color: '#775a19',
                  }}
                >
                  {r.initials}
                </div>
                <span style={{ fontWeight: 700, fontSize: 15, color: '#111c2d' }}>{r.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
