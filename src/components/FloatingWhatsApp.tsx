import { WhatsAppIcon } from '../icons'

const WHATSAPP = 'https://wa.me/5585984010886?text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Sorrizze%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita.%20%F0%9F%98%8A'

export default function FloatingWhatsApp() {
  return (
    <>
      <div className="floating-wa">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            backgroundColor: '#775a19',
            color: '#ffffff',
            width: '100%',
            padding: '16px 0',
            borderRadius: 9999,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            boxShadow: '0 6px 24px rgba(119,90,25,0.4)',
          }}
        >
          <WhatsAppIcon size={20} />
          AGENDAR AGORA
        </a>
      </div>

      <style>{`
        .floating-wa {
          display: none;
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          z-index: 40;
        }
        @media (max-width: 768px) {
          .floating-wa { display: block; }
        }
      `}</style>
    </>
  )
}
