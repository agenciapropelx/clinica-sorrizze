import { useEffect, useRef, useState } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WHATSAPP =
  'https://wa.me/5585984010886?text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Sorrizze%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita.%20%F0%9F%98%8A'

const WELCOME: Message = {
  role: 'assistant',
  content: 'Olá! Sou a Edna, assistente virtual da Sorrizze 😊 Como posso ajudar você hoje?',
}

const SUGGESTIONS = [
  'Quero agendar uma consulta',
  'Quais tratamentos vocês oferecem?',
  'Onde fica a clínica?',
  'Tem avaliação gratuita?',
]

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
      <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} width={18} height={18}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  )
}

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '4px 2px' }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: '#7f7667',
            animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes typing-dot {
          0%, 60%, 100% { opacity: 0.25; transform: scale(0.9); }
          30% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasNotification, setHasNotification] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
      setHasNotification(false)
    }
  }, [isOpen, messages])

  const send = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isLoading) return

    const userMsg: Message = { role: 'user', content: trimmed }
    const history = [...messages, userMsg]
    setMessages(history)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await res.json()

      if (data.error) throw new Error(data.error)

      const reply: string =
        data.choices?.[0]?.message?.content ??
        'Desculpe, não consegui processar sua mensagem. Tente pelo WhatsApp!'

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Ops, tive um problema técnico 😅 Entre em contato pelo WhatsApp: (85) 98401-0886',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  const showSuggestions = messages.length === 1 && !isLoading

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div
          className="chat-panel"
          style={{
            position: 'fixed',
            bottom: 88,
            right: 28,
            width: 360,
            maxHeight: 520,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            borderRadius: 20,
            boxShadow: '0 20px 60px -10px rgba(38,49,67,0.28), 0 4px 16px rgba(38,49,67,0.12)',
            zIndex: 999,
            overflow: 'hidden',
            animation: 'chat-slide-up 0.22s ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#263143',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: 'rgba(197,160,89,0.2)',
                border: '1.5px solid rgba(197,160,89,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <img src="/assets/logo.png" alt="Sorrizze" style={{ width: 26, height: 26, objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: '#ecf1ff', margin: 0 }}>
                Edna
              </p>
              <p style={{ fontSize: 11, color: '#98a7bc', margin: 0 }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: '#4ade80',
                    marginRight: 5,
                    verticalAlign: 'middle',
                  }}
                />
                Online agora
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#7f7667',
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 6,
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#ecf1ff')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#7f7667')}
              aria-label="Fechar chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              backgroundColor: '#f9f9ff',
              minHeight: 0,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-end',
                  gap: 7,
                }}
              >
                {msg.role === 'assistant' && (
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      backgroundColor: '#e7eeff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <img src="/assets/logo.png" alt="" style={{ width: 20, height: 20, objectFit: 'contain' }} />
                  </div>
                )}
                <div
                  style={{
                    maxWidth: '78%',
                    padding: '10px 13px',
                    borderRadius:
                      msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    backgroundColor: msg.role === 'user' ? '#775a19' : '#ffffff',
                    color: msg.role === 'user' ? '#ffffff' : '#111c2d',
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    boxShadow: '0 1px 4px rgba(51,65,85,0.10)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: '#e7eeff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <img src="/assets/logo.png" alt="" style={{ width: 20, height: 20, objectFit: 'contain' }} />
                </div>
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '16px 16px 16px 4px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 1px 4px rgba(51,65,85,0.10)',
                  }}
                >
                  <TypingDots />
                </div>
              </div>
            )}

            {/* Quick suggestions */}
            {showSuggestions && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    style={{
                      fontSize: 12,
                      padding: '6px 12px',
                      borderRadius: 9999,
                      border: '1.5px solid #c5a059',
                      backgroundColor: 'transparent',
                      color: '#775a19',
                      cursor: 'pointer',
                      fontWeight: 600,
                      transition: 'background-color 0.15s, color 0.15s',
                      fontFamily: 'inherit',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#775a19'
                      ;(e.currentTarget as HTMLButtonElement).style.color = '#ffffff'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                      ;(e.currentTarget as HTMLButtonElement).style.color = '#775a19'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '12px 14px',
              borderTop: '1px solid rgba(209,197,180,0.3)',
              backgroundColor: '#ffffff',
              display: 'flex',
              gap: 8,
              alignItems: 'flex-end',
              flexShrink: 0,
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
                e.target.style.height = 'auto'
                e.target.style.height = Math.min(e.target.scrollHeight, 90) + 'px'
              }}
              onKeyDown={handleKey}
              placeholder="Digite sua mensagem..."
              rows={1}
              disabled={isLoading}
              style={{
                flex: 1,
                resize: 'none',
                border: '1.5px solid #d1c5b4',
                borderRadius: 12,
                padding: '9px 12px',
                fontSize: 13.5,
                lineHeight: 1.45,
                fontFamily: 'inherit',
                color: '#111c2d',
                backgroundColor: '#f9f9ff',
                outline: 'none',
                transition: 'border-color 0.15s, box-shadow 0.15s',
                maxHeight: 90,
                overflow: 'auto',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#775a19'
                e.target.style.boxShadow = '0 0 0 3px rgba(119,90,25,0.12)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1c5b4'
                e.target.style.boxShadow = 'none'
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={isLoading || !input.trim()}
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                backgroundColor: input.trim() && !isLoading ? '#775a19' : '#d1c5b4',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: input.trim() && !isLoading ? 'pointer' : 'default',
                flexShrink: 0,
                transition: 'background-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                if (input.trim() && !isLoading)
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
              }}
              aria-label="Enviar mensagem"
            >
              <SendIcon />
            </button>
          </div>

          {/* WA fallback link */}
          <div
            style={{
              backgroundColor: '#f0f3ff',
              padding: '8px 14px',
              textAlign: 'center',
              borderTop: '1px solid rgba(209,197,180,0.2)',
            }}
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 11.5, color: '#7f7667', textDecoration: 'none' }}
            >
              Prefere falar por{' '}
              <span style={{ color: '#775a19', fontWeight: 700 }}>WhatsApp?</span>
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="chat-fab"
        aria-label={isOpen ? 'Fechar assistente' : 'Abrir assistente virtual'}
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: '#263143',
          border: 'none',
          color: '#e9c176',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 6px 24px rgba(38,49,67,0.35)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 32px rgba(38,49,67,0.45)'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 24px rgba(38,49,67,0.35)'
        }}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}

        {/* Notification dot */}
        {hasNotification && !isOpen && (
          <span
            style={{
              position: 'absolute',
              top: 4,
              right: 4,
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              border: '2px solid #f9f9ff',
            }}
          />
        )}
      </button>

      <style>{`
        @keyframes chat-slide-up {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 768px) {
          .chat-fab {
            bottom: 90px !important;
            right: 16px !important;
          }
          .chat-panel {
            right: 0 !important;
            left: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            max-height: 72vh !important;
            border-radius: 20px 20px 0 0 !important;
          }
        }
      `}</style>
    </>
  )
}
