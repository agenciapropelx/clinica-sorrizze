import { WhatsAppIcon } from '../icons'

const WHATSAPP = 'https://wa.me/5585984010886?text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Sorrizze%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita.%20%F0%9F%98%8A'
const MAPS = 'https://maps.google.com/?q=Av.+Dom+Almeida+Lustosa,+2628+Jurema+Caucaia+CE'

export default function CTA() {
  return (
    <section style={{ backgroundColor: '#f9f9ff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Section header — centered like other sections */}
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
            Fale Conosco
          </span>
          <h2
            style={{
              fontWeight: 700,
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: '#111c2d',
              margin: '8px 0 12px',
            }}
          >
            Estamos prontos para atender você
          </h2>
          <p style={{ fontSize: 16, color: '#4e4639', lineHeight: 1.6, maxWidth: 520, margin: '0 auto' }}>
            Entre em contato para tirar dúvidas, agendar sua avaliação ou conhecer nossa estrutura.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 32,
            alignItems: 'stretch',
          }}
        >
          {/* Left: map */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Map card */}
            <div
              className="luxury-shadow"
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid rgba(209,197,180,0.2)',
                backgroundColor: '#ffffff',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', flex: 1, minHeight: 320 }}>
                <iframe
                  title="Localização Sorrizze"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8!2d-38.67!3d-3.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDMnNDgiLjAiUyAzOMKwNDAnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Info card over map */}
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    backgroundColor: '#ffffff',
                    borderRadius: 12,
                    padding: '12px 14px',
                    maxWidth: 260,
                    boxShadow: '0 4px 16px rgba(51,65,85,0.14)',
                    border: '1px solid rgba(209,197,180,0.2)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: 13, color: '#111c2d', margin: '0 0 3px' }}>
                        Sorrizze – Clínica Odontológica
                      </p>
                      <p style={{ fontSize: 11, color: '#4e4639', margin: 0, lineHeight: 1.4 }}>
                        Av. Dom Almeida Lustosa, 2628
                        <br />
                        Jurema, Caucaia – CE
                      </p>
                    </div>
                    <a href={MAPS} target="_blank" rel="noopener noreferrer" style={{ color: '#775a19', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
                    <span style={{ fontWeight: 700, fontSize: 13 }}>4.9</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#FBBC04', fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span style={{ fontSize: 12, color: '#775a19', textDecoration: 'underline' }}>(412 avaliações)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA dark card */}
          <div
            style={{
              backgroundColor: '#263143',
              borderRadius: 36,
              padding: '40px 48px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: 'absolute',
                top: -80,
                right: -80,
                width: 280,
                height: 280,
                borderRadius: '50%',
                backgroundColor: 'rgba(119,90,25,0.18)',
                filter: 'blur(60px)',
                pointerEvents: 'none',
              }}
            />

            <h2
              style={{
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 42px)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#ecf1ff',
                margin: 0,
                position: 'relative',
                zIndex: 1,
              }}
            >
              Agende sua avaliação
            </h2>
            <p
              style={{
                fontSize: 17,
                color: '#b9c7e0',
                lineHeight: 1.6,
                maxWidth: 360,
                margin: 0,
                position: 'relative',
                zIndex: 1,
              }}
            >
              Vagas limitadas esta semana. Garanta o seu horário e comece a transformar o
              seu sorriso agora mesmo.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#775a19',
                color: '#ffffff',
                padding: '18px 40px',
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 18,
                textDecoration: 'none',
                position: 'relative',
                zIndex: 1,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(119,90,25,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Agendar via WhatsApp
              <WhatsAppIcon size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
