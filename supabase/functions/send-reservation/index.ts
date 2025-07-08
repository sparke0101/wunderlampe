import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message?: string;
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

    const formData: ReservationFormData = await req.json();
    const { name, email, phone, date, time, guests, message } = formData;

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !guests) {
      throw new Error('Missing required fields');
    }

    // Validate date is not in the past
    const reservationDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (reservationDate < today) {
      throw new Error('Reservation date cannot be in the past');
    }

    // Insert reservation into database
    const { data: reservation, error: dbError } = await supabase
      .from('reservations')
      .insert({
        name,
        email,
        phone,
        date,
        time,
        guests: parseInt(guests),
        message: message || null,
        status: 'pending'
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save reservation information');
    }

    // Send email notification using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (resendApiKey) {
      const formattedDate = new Date(date).toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const formattedTime = time;

      const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Reservation Request - Wunderlampe</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #d4af37, #ffd700); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #d4af37; }
    .value { margin-top: 5px; }
    .reservation-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #d4af37; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #d4af37; margin: 15px 0; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    .urgent { background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🍃 New Reservation Request</h1>
      <p>Wunderlampe - Premium Shisha Bar</p>
    </div>
    <div class="content">
      <div class="urgent">
        <strong>⚠️ Action Required:</strong> Please contact the customer to confirm this reservation.
      </div>
      
      <div class="field">
        <div class="label">Customer Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone Number:</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      
      <div class="reservation-details">
        <h3 style="color: #d4af37; margin-top: 0;">Reservation Details</h3>
        <div class="field">
          <div class="label">Date:</div>
          <div class="value">${formattedDate}</div>
        </div>
        <div class="field">
          <div class="label">Time:</div>
          <div class="value">${formattedTime}</div>
        </div>
        <div class="field">
          <div class="label">Number of Guests:</div>
          <div class="value">${guests} ${parseInt(guests) === 1 ? 'person' : 'people'}</div>
        </div>
      </div>
      
      ${message ? `
      <div class="message-box">
        <div class="label">Special Requests:</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}
      
      <div class="footer">
        <p>This reservation was submitted through the Wunderlampe website.</p>
        <p>Reservation ID: ${reservation.id}</p>
        <p>Submitted: ${new Date(reservation.created_at).toLocaleString('de-DE')}</p>
        <p><strong>Please contact the customer within 2 hours to confirm availability.</strong></p>
      </div>
    </div>
  </div>
</body>
</html>
      `;

      // Send email to restaurant
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Wunderlampe Reservations <reservations@wunderlampe.com>',
          to: ['info.wunderlampe@gmail.com'],
          subject: `New Reservation: ${name} - ${formattedDate} at ${formattedTime}`,
          html: emailBody,
          reply_to: email,
        }),
      });

      // Send confirmation email to customer
      const customerEmailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Reservation Request Received - Wunderlampe</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #d4af37, #ffd700); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .reservation-summary { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #d4af37; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    .contact-info { background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🍃 Thank You for Your Reservation Request</h1>
      <p>Wunderlampe - Premium Shisha Bar</p>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>Thank you for choosing Wunder Lampe! We have received your reservation request and will contact you shortly to confirm availability.</p>
      <p>Thank you for choosing Wunderlampe! We have received your reservation request and will contact you shortly to confirm availability.</p>
      
      <div class="reservation-summary">
        <h3 style="color: #d4af37; margin-top: 0;">Your Reservation Request</h3>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${formattedTime}</p>
        <p><strong>Guests:</strong> ${guests} ${parseInt(guests) === 1 ? 'person' : 'people'}</p>
        ${message ? `<p><strong>Special Requests:</strong> ${message}</p>` : ''}
      </div>
      
      <div class="contact-info">
        <h4 style="color: #d4af37; margin-top: 0;">What happens next?</h4>
        <p>• We will contact you within 2 hours to confirm your reservation</p>
        <p>• You will receive a confirmation email once your table is secured</p>
        <p>• If you need to make changes, please call us at <a href="tel:+4915788818885">+49 1578 8818885</a></p>
      </div>
      
      <p>We look forward to welcoming you to Wunder Lampe for an unforgettable evening!</p>
      <p>We look forward to welcoming you to Wunderlampe for an unforgettable evening!</p>
      
      <div class="footer">
        <p><strong>Wunderlampe</strong><br>
        Eisenbahnstraße 98, 04315 Leipzig<br>
        Phone: <a href="tel:+4915788818885">+49 1578 8818885</a><br>
        Email: <a href="mailto:info.wunderlampe@gmail.com">info.wunderlampe@gmail.com</a></p>
      </div>
    </div>
  </div>
</body>
</html>
      `;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Wunderlampe <noreply@wunderlampe.com>',
          to: [email],
          subject: 'Reservation Request Received - Wunderlampe',
          html: customerEmailBody,
        }),
      });

      if (!emailResponse.ok) {
        console.error('Failed to send email:', await emailResponse.text());
        // Don't throw error - reservation is saved, email is optional
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Reservation request sent successfully',
        id: reservation.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    console.error('Error processing reservation form:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || 'Failed to process reservation form' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    );
  }
});