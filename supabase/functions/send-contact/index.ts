import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, subject, message } = await req.json()

    const emailBody = `
New Contact Message from Wunder Lampe Website

Customer Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Subject: ${subject}

Message:
${message}

---
This message was submitted through the Wunder Lampe website contact form.
    `

    // Send email using a service like Resend or similar
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@wunderlampe.de',
        to: ['info.wunderlampe@gmail.com'],
        subject: `Contact Form: ${subject} - ${name}`,
        text: emailBody,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Contact message sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})