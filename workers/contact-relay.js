/**
 * BharatNotes Contact Relay — Cloudflare Worker
 * Receives form POST → sends message to Telegram via Bot API
 *
 * Secrets (wrangler secret put <NAME>):
 *   TG_BOT_TOKEN  — Telegram bot token
 *   TG_CHAT_ID    — Your personal Telegram chat ID
 */

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'POST only' }), { status: 405, headers: corsHeaders });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders });
    }

    const { name, email, subject, message, whatsapp } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email and message are required.' }), { status: 400, headers: corsHeaders });
    }

    /* Basic validation */
    if (String(message).length > 2000) {
      return new Response(JSON.stringify({ error: 'Message too long (max 2000 chars).' }), { status: 400, headers: corsHeaders });
    }

    const subjectLine = subject ? `📌 *${esc(subject)}*` : '📌 *General Enquiry*';
    const waLine = whatsapp ? `\n📱 *WhatsApp:* ${esc(whatsapp)}` : '';
    const text = `🔔 *New BharatNotes Contact*\n\n${subjectLine}\n\n👤 *Name:* ${esc(name)}\n📧 *Email:* ${esc(email)}${waLine}\n\n💬 *Message:*\n${esc(message)}`;

    try {
      const tgRes = await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.TG_CHAT_ID,
          text,
          parse_mode: 'Markdown'
        })
      });
      const tgData = await tgRes.json();
      if (!tgData.ok) throw new Error(tgData.description || 'Telegram error');
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Could not send message: ' + e.message }), { status: 502, headers: corsHeaders });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: corsHeaders });
  }
};

function esc(s) {
  return String(s).replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&').slice(0, 500);
}
