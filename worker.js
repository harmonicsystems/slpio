/**
 * SLP/IO Chat Proxy — Cloudflare Worker
 *
 * This worker proxies chat requests from your slpio.org chatbot
 * to the Anthropic Claude API, keeping your API key secure.
 *
 * SETUP:
 * 1. Create a Cloudflare account (free): https://dash.cloudflare.com
 * 2. Go to Workers & Pages → Create Worker
 * 3. Paste this entire file as the worker code
 * 4. Go to Settings → Variables → Add:
 *      Name: ANTHROPIC_API_KEY
 *      Value: your Claude API key (get one at https://console.anthropic.com)
 *      Check "Encrypt"
 * 5. Deploy the worker
 * 6. Copy the worker URL (e.g., https://slpio-chat.yourname.workers.dev)
 * 7. Paste that URL into your index.html where it says:
 *      const CHAT_API_URL = '';
 *
 * FREE TIER: 100,000 requests/day — more than enough to start.
 */

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const { system, messages } = await request.json();

      // Basic rate limiting by IP (optional but recommended)
      // You can enhance this with Cloudflare's built-in rate limiting

      // Validate input
      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return new Response(JSON.stringify({ error: 'Invalid messages' }), {
          status: 400,
          headers: corsHeaders(),
        });
      }

      // Cap conversation length to control costs
      const recentMessages = messages.slice(-10);

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1024,
          system: system,
          messages: recentMessages,
        }),
      });

      const data = await response.json();

      if (data.content && data.content.length > 0) {
        return new Response(JSON.stringify({ content: data.content[0].text }), {
          headers: corsHeaders(),
        });
      } else {
        return new Response(JSON.stringify({ error: 'No response from model', details: data }), {
          status: 500,
          headers: corsHeaders(),
        });
      }
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Server error', message: err.message }), {
        status: 500,
        headers: corsHeaders(),
      });
    }
  },
};

function corsHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
