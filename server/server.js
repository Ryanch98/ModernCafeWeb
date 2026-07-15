import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();
console.log(
  'KEY CHECK:',
  process.env.GROQ_API_KEY.slice(0, 8),
  '...',
  process.env.GROQ_API_KEY.slice(-8),
);
const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

const SYSTEM_PROMPT = `
You are Modern Cafe AI, a coffee expert.

You are an expert in:
- Coffee beans
- Brewing
- Espresso
- Latte
- Cappuccino
- Turkish coffee
- Coffee roasting
- Flavor notes
- Coffee equipment
- Coffee science

Always answer professionally.
If the user asks unrelated questions, politely say you only answer coffee-related questions.
`;

const PORT = process.env.PORT || 3001;
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

if (!process.env.GROQ_API_KEY) {
  console.warn('WARNING: GROQ_API_KEY is not set.');
}

function getFallbackReply(message) {
  const text = (message || '').toLowerCase();

  if (text.includes('latte') || text.includes('espresso') || text.includes('cappuccino')) {
    return 'I can help with coffee guidance. The AI service is temporarily unavailable, but a latte is espresso with steamed milk, while a cappuccino uses equal parts espresso, steamed milk, and foam.';
  }

  if (text.includes('beans') || text.includes('roast')) {
    return 'I can help with coffee guidance. The AI service is temporarily unavailable right now, but coffee beans vary by origin, roast level, and flavor notes such as chocolate, citrus, or caramel.';
  }

  return 'I can help with coffee-related questions. The AI service is temporarily unavailable right now, so I am replying with a short fallback answer. Please try again shortly.';
}

app.post('/chat', async (req, res) => {
  try {
    const { message = '', history = [] } = req.body || {};

    const safeHistory = Array.isArray(history)
      ? history.filter((item) => item && typeof item === 'object' && item.role && item.content)
      : [];

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...safeHistory,
      { role: 'user', content: message },
    ];

    if (!process.env.GROQ_API_KEY) {
      return res.json({ answer: getFallbackReply(message) });
    }

    const response = await client.chat.completions.create({
      model: GROQ_MODEL,
      messages,
      temperature: 0.4,
      max_tokens: 300,
    });

    const answer = response.choices?.[0]?.message?.content || getFallbackReply(message);
    res.json({ answer });
  } catch (err) {
    const status = err?.status || err?.response?.status || 500;
    const errorMessage = err?.error?.message || err?.message || 'Unknown error';

    console.error('GROQ ERROR:', { status, errorMessage });

    if (status === 401 || status === 403 || status === 429) {
      return res.status(502).json({
        answer: `The coffee assistant is currently unavailable because the AI service rejected the request (${errorMessage}). Please check your Groq API key or try again later.`,
      });
    }

    res.status(500).json({
      answer: getFallbackReply(req.body?.message || ''),
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
