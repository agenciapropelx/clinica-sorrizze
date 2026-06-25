import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { IncomingMessage, ServerResponse } from 'node:http'

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

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'sorrizze-chat-api',
        configureServer(server) {
          server.middlewares.use(
            '/api/chat',
            (req: IncomingMessage, res: ServerResponse) => {
              if (req.method !== 'POST') {
                res.statusCode = 405
                res.end('Method Not Allowed')
                return
              }

              const apiKey = env.OPENAI_API_KEY
              if (!apiKey) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(
                  JSON.stringify({
                    error: 'OPENAI_API_KEY não encontrada. Adicione ao .env.local',
                  }),
                )
                return
              }

              let body = ''
              req.on('data', (chunk: Buffer) => {
                body += chunk.toString()
              })
              req.on('end', async () => {
                try {
                  const { messages } = JSON.parse(body)

                  const upstream = await fetch(
                    'https://api.openai.com/v1/chat/completions',
                    {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiKey}`,
                      },
                      body: JSON.stringify({
                        model: 'gpt-4o-mini',
                        messages: [
                          { role: 'system', content: SYSTEM_PROMPT },
                          ...messages,
                        ],
                        max_tokens: 400,
                        temperature: 0.7,
                      }),
                    },
                  )

                  const data = await upstream.json()
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(data))
                } catch (err) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: String(err) }))
                }
              })
            },
          )
        },
      },
    ],
  }
})
