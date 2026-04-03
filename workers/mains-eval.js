/**
 * BharatNotes Mains Evaluator — Cloudflare Worker
 * Tries Gemini 2.0 Flash first; falls back to Groq (Llama 3.3 70B) on quota/error.
 *
 * Secrets (wrangler secret put <NAME>):
 *   GEMINI_KEY  — Google AI Studio key
 *   GROQ_KEY    — Groq API key
 */

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent';
const GROQ_URL   = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

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

    const { question, answer, marks, words, paper, model_key_points } = body;
    if (!question || !answer || !marks) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400, headers: corsHeaders });
    }

    const safeAnswer    = String(answer).slice(0, 3000);
    const wordCount     = safeAnswer.trim().split(/\s+/).length;
    const keyPointsBlock = (model_key_points && model_key_points.length)
      ? `\nKEY POINTS THIS ANSWER SHOULD COVER:\n${model_key_points.map((p, i) => `${i + 1}. ${p}`).join('\n')}`
      : '';

    const prompt = `You are an expert UPSC Mains examiner with 20+ years of experience evaluating ${paper || 'GS'} papers.

Evaluate the following candidate answer for a UPSC Mains question.

QUESTION (${marks} marks, suggested length: ${words || Math.round(marks * 13)} words):
${question}
${keyPointsBlock}

CANDIDATE'S ANSWER (${wordCount} words written):
${safeAnswer}

MARKING SCHEME (total ${marks} marks):
- Content & Accuracy      : ${Math.round(marks * 0.40)} marks — factual correctness, coverage of dimensions, data/committees/reports cited
- Analytical Depth        : ${Math.round(marks * 0.30)} marks — multi-angle analysis, cause-effect, critical thinking, stakeholder view
- Structure & Presentation: ${Math.round(marks * 0.20)} marks — intro-body-conclusion flow, headings/bullets used well, coherence
- Word Discipline         : ${Math.round(marks * 0.10)} marks — within ±15% of ${words || Math.round(marks * 13)} word limit

Be strict but fair. A mediocre answer scores 50–60%, a good answer 65–75%, an excellent answer 80–90%.

Return ONLY valid JSON — no markdown, no explanation outside JSON:
{
  "total": <integer out of ${marks}>,
  "breakdown": {
    "content":    { "score": <integer>, "max": ${Math.round(marks * 0.40)}, "comment": "<25-word precise comment>" },
    "analysis":   { "score": <integer>, "max": ${Math.round(marks * 0.30)}, "comment": "<25-word precise comment>" },
    "structure":  { "score": <integer>, "max": ${Math.round(marks * 0.20)}, "comment": "<25-word precise comment>" },
    "words":      { "score": <integer>, "max": ${Math.round(marks * 0.10)}, "comment": "<word count + assessment>" }
  },
  "strengths": ["<specific strength 1>", "<specific strength 2>"],
  "missing":   ["<key point or dimension missed 1>", "<missed 2>", "<missed 3>"],
  "examiner_note": "<2-3 sentences of actionable examiner-level feedback>"
}`;

    /* ── 1. Try Gemini ─────────────────────────────────── */
    if (env.GEMINI_KEY) {
      try {
        const gr = await fetch(`${GEMINI_URL}?key=${env.GEMINI_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.2, responseMimeType: 'application/json' }
          })
        });
        if (gr.ok) {
          const gd  = await gr.json();
          const raw = gd?.candidates?.[0]?.content?.parts?.[0]?.text || '';
          const ev  = JSON.parse(raw);
          return new Response(JSON.stringify(ev), { status: 200, headers: corsHeaders });
        }
        /* 429 or other error → fall through to Groq */
      } catch (_) { /* network error → fall through */ }
    }

    /* ── 2. Fallback: Groq (Llama 3.3 70B) ────────────── */
    if (!env.GROQ_KEY) {
      return new Response(JSON.stringify({ error: 'All AI providers unavailable' }), { status: 503, headers: corsHeaders });
    }
    try {
      const qr = await fetch(GROQ_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.GROQ_KEY}`
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.2,
          response_format: { type: 'json_object' }
        })
      });
      if (!qr.ok) {
        const et = await qr.text();
        return new Response(JSON.stringify({ error: 'Groq error', status: qr.status, detail: et }), { status: 502, headers: corsHeaders });
      }
      const qd  = await qr.json();
      const raw = qd?.choices?.[0]?.message?.content || '';
      const ev  = JSON.parse(raw);
      return new Response(JSON.stringify(ev), { status: 200, headers: corsHeaders });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Groq failed', detail: e.message }), { status: 502, headers: corsHeaders });
    }
  }
};
