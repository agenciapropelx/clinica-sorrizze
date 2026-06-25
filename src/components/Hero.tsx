import { WhatsAppIcon } from '../icons'

const WHATSAPP = 'https://wa.me/5585984010886?text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Sorrizze%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita.%20%F0%9F%98%8A'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 680,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 96,
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/assets/clinic-facade.jpg"
          alt="Fachada Clínica Sorrizze"
          className="hero-bg-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          className="hero-gradient"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(249,249,255,0.97) 0%, rgba(249,249,255,0.82) 55%, rgba(249,249,255,0.2) 100%)',
          }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1280,
          margin: '0 auto',
          padding: '80px 24px',
          width: '100%',
        }}
      >
        <div className="hero-content" style={{ maxWidth: 620 }}>
          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#111c2d',
              margin: '0 0 20px',
            }}
          >
            Transforme seu sorriso,{' '}
            <br />
            <span style={{ color: '#775a19' }}>recupere sua confiança.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-sub"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: '#4e4639',
              margin: '0 0 36px',
              maxWidth: 520,
            }}
          >
            Cuidado odontológico completo em Caucaia com tecnologia de ponta e
            atendimento humanizado. Descubra a excelência em cada detalhe.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#775a19',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'box-shadow 0.25s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(119,90,25,0.4)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'none'
              }}
            >
              Agendar pelo WhatsApp
              <WhatsAppIcon size={20} />
            </a>

            {/* Social proof */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 16px',
                backgroundColor: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(8px)',
                borderRadius: 14,
                boxShadow: '0 4px 16px rgba(51,65,85,0.10)',
                border: '1px solid rgba(209,197,180,0.3)',
              }}
            >
              <div style={{ display: 'flex' }}>
                {[
                  { bg: '#d1c5b4', label: 'Paciente 1' },
                  { bg: '#b9c7e0', label: 'Paciente 2' },
                  { bg: '#c5a059', label: 'Paciente 3' },
                ].map((a, i) => (
                  <div
                    key={i}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: '2px solid #f9f9ff',
                      backgroundColor: a.bg,
                      marginLeft: i > 0 ? -8 : 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-label={a.label}
                  />
                ))}
              </div>
              <div style={{ lineHeight: 1.3 }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: '#111c2d', margin: 0 }}>4.9/5 Estrelas</p>
                <p style={{ fontSize: 12, color: '#4e4639', margin: 0 }}>Avaliações Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
