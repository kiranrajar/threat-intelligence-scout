// ─────────────────────────────────────────────────────────────────────────────
// Live Agent API Config
// Set VITE_AGENT_WEBHOOK_URL in your .env file to enable the live backend.
// Example:
//   VITE_AGENT_WEBHOOK_URL=https://abc123.ngrok-free.app/webhook/3347cb76-f7c8-43f1-9bc0-3d919825db27/chat
//
// The frontend will try this endpoint first; if unreachable it falls back to
// the built-in intelligence engine automatically — no errors shown to the user.
// ─────────────────────────────────────────────────────────────────────────────

export const AGENT_WEBHOOK_URL = import.meta.env.VITE_AGENT_WEBHOOK_URL || null;

/**
 * Sends a chat message to the live n8n agent and returns the text response.
 * Returns null if the endpoint is not configured or if the request fails.
 *
 * @param {string} message - The user's query
 * @param {string} sessionId - A session ID for conversation memory
 * @returns {Promise<string|null>}
 */
export async function callLiveAgent(message, sessionId = 'scout-session') {
  if (!AGENT_WEBHOOK_URL) return null;

  try {
    const res = await fetch(AGENT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chatInput: message, sessionId }),
      signal: AbortSignal.timeout(30000), // 30 second timeout
    });

    if (!res.ok) return null;

    const data = await res.json();

    // n8n chat trigger returns: { output: "..." } or { message: "..." } or { response: "..." }
    const text =
      data?.output ||
      data?.message ||
      data?.response ||
      data?.text ||
      (typeof data === 'string' ? data : null);

    return text || null;
  } catch {
    // Network error, timeout, CORS — fail silently and use local engine
    return null;
  }
}
