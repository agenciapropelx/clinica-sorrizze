interface Env {
  OPENAI_API_KEY: string
}

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

const SYSTEM_PROMPT = `Seu nome é Edna. Você é a assistente virtual da Sorrizze Clínica Odontológica, localizada em Caucaia, Ceará.

Endereço: Av. Dom Almeida Lustosa, 2628 – Jurema, Caucaia – CE
WhatsApp: (85) 98401-0886
Avaliação gratuita disponível para novos pacientes.

Nossa equipe especializada:
• Dra. Thayna – Odontopediatria (tratamentos para crianças)
• Dr. Werington – Implantodontia (implantes dentários)
• Dra. Isabela – Ortodontia (aparelhos e alinhadores)

Tratamentos oferecidos: Limpeza e Profilaxia, Clareamento Dental, Ortodontia, Facetas de Porcelana, Implantes Dentários, Restaurações.

Regras de comportamento:
- Responda em português brasileiro, de forma simpática, acolhedora e profissional
- Respostas curtas e diretas, no máximo 3 frases
- Quando o paciente quiser agendar, forneça o WhatsApp e encoraje-o
- Nunca invente preços, horários específicos ou informações não fornecidas
- Se não souber algo, redirecione educadamente para o WhatsApp`

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const origin = request.headers.get('Origin') ?? ''
  const corsHeaders = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  if (!env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'OPENAI_API_KEY não configurada' }),
      { status: 500, headers: corsHeaders },
    )
  }

  try {
    const { messages } = await request.json<{ messages: Message[] }>()

    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 400,
        temperature: 0.7,
      }),
    })

    const data = await upstream.json()
    return new Response(JSON.stringify(data), { headers: corsHeaders })
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: corsHeaders,
    })
  }
}

export const onRequestOptions: PagesFunction = async ({ request }) => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': request.headers.get('Origin') ?? '',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
