export const config = { runtime: 'edge' }

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

export default async function handler(req: Request): Promise<Response> {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'OPENAI_API_KEY não configurada' }),
      { status: 500, headers: corsHeaders },
    )
  }

  try {
    const { messages } = await req.json()

    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
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
