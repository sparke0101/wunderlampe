import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const formData: ContactFormData = await req.json();
    const { name, email, phone, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      throw new Error('Missing required fields');
    }

    // Insert contact into database
    const { data: contact, error: dbError } = await supabase
      .from('contacts')
      .insert({
        name,
        email,
        phone: phone || null,
        subject,
        message,
        status: 'new'
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save contact information');
    }

    // Send email notification using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (resendApiKey) {
      const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Message - Wunder Lampe</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #d4af37, #ffd700); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #d4af37; }
    .value { margin-top: 5px; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #d4af37; margin: 15px 0; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🍃 New Contact Message</h1>
      <p>Wunder Lampe - Premium Shisha Bar</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Customer Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      ${phone ? `
      <div class="field">
        <div class="label">Phone Number:</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Subject:</div>
        <div class="value">${subject}</div>
      </div>
      <div class="message-box">
        <div class="label">Message:</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        <p>This message was submitted through the Wunder Lampe website contact form.</p>
        <p>Contact ID: ${contact.id}</p>
        <p>Submitted: ${new Date(contact.created_at).toLocaleString('de-DE')}</p>
      </div>
    </div>
  </div>
</body>
</html>
      `;

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Wunder Lampe Website <noreply@wunderlampe.com>',
          to: ['info.wunderlampe@gmail.com'],
          subject: `New Contact Message: ${subject}`,
          html: emailBody,
          reply_to: email,
        }),
      });

      if (!emailResponse.ok) {
        console.error('Failed to send email:', await emailResponse.text());
        // Don't throw error - contact is saved, email is optional
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact message sent successfully',
        id: contact.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || 'Failed to process contact form' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    );
  }
});