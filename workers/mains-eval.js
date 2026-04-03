/**
 * BharatNotes Mains Evaluator — Cloudflare Worker
 * Calls Google Gemini Flash (free tier) to evaluate a UPSC Mains answer.
 *
 * Setup:
 *   1. wrangler secret put GEMINI_KEY   (paste your Gemini API key)
 *   2. wrangler deploy
 *
 * Allowed origin: https://bharatnotes.com (change if needed)
 */

const ALLOWED_ORIGINS = ['https://bharatnotes.com', 'http://localhost:8080'];
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
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

    /* Clamp answer length to avoid token abuse */
    const safeAnswer = String(answer).slice(0, 3000);
    const wordCount   = safeAnswer.trim().split(/\s+/).length;

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

    let geminiRes;
    try {
      geminiRes = await fetch(`${GEMINI_URL}?key=${env.GEMINI_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.2,
            responseMimeType: 'application/json'
          }
        })
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Gemini unreachable', detail: e.message }), { status: 502, headers: corsHeaders });
    }

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      return new Response(JSON.stringify({ error: 'Gemini error', status: geminiRes.status, detail: errText }), { status: 502, headers: corsHeaders });
    }

    const geminiData = await geminiRes.json();
    const raw = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    let evaluation;
    try {
      evaluation = JSON.parse(raw);
    } catch {
      return new Response(JSON.stringify({ error: 'Parse failed', raw }), { status: 500, headers: corsHeaders });
    }

    return new Response(JSON.stringify(evaluation), { status: 200, headers: corsHeaders });
  }
};
