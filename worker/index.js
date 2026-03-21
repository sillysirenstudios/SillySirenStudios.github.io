const CORS_ORIGIN = 'https://sillysirenstudios.com';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': CORS_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
  });
}

async function sendEmail(apiKey, { to, subject, replyTo, text }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Silly Siren Studios <noreply@sillysirenstudios.com>',
      to,
      subject,
      reply_to: replyTo,
      text,
    }),
  });
  return res.ok;
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400);
    }

    const url = new URL(request.url);

    if (url.pathname === '/contact') {
      const { firstName, lastName, email, message } = body;
      if (!firstName || !lastName || !email || !message) {
        return json({ error: 'All fields are required' }, 400);
      }
      const ok = await sendEmail(env.RESEND_API_KEY, {
        to: 'SillySirenStudios+contact@gmail.com',
        subject: `Message from ${firstName} ${lastName}`,
        replyTo: email,
        text: `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
      });
      return ok ? json({ success: true }) : json({ error: 'Failed to send' }, 500);
    }

    if (url.pathname === '/testflight') {
      const { firstName, lastName, email } = body;
      if (!firstName || !lastName || !email) {
        return json({ error: 'All fields are required' }, 400);
      }
      const ok = await sendEmail(env.RESEND_API_KEY, {
        to: 'SillySirenStudios+testflight@gmail.com',
        subject: `TestFlight request from ${firstName} ${lastName}`,
        replyTo: email,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}`,
      });
      return ok ? json({ success: true }) : json({ error: 'Failed to send' }, 500);
    }

    return json({ error: 'Not found' }, 404);
  },
};
