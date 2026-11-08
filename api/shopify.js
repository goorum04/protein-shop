export const config = { runtime: 'edge' };

const SHOPIFY_ENDPOINT = 'https://0bb404-4.myshopify.com/api/2024-10/graphql.json';

// El token es llegeix de la variable d'entorn SHOPIFY_STOREFRONT_TOKEN
// (Vercel → Project → Settings → Environment Variables). Mai l'escriguis al codi.
const STOREFRONT_TOKEN = (typeof process !== 'undefined' && process.env && process.env.SHOPIFY_STOREFRONT_TOKEN) || '';

// Només permetem les operacions que la web fa servir. Així ningú pot usar aquest
// proxy per llançar consultes arbitràries contra la botiga amb el nostre token.
const ALLOWED_OPERATIONS = [
  /^\s*mutation\s+cartCreate\b/,          // checkout (shared.js)
  /^\s*query\s*\{\s*products\s*\(\s*first/ // catàleg (api/products.js)
];

const MAX_BODY_BYTES = 64 * 1024;

// Orígens que poden cridar l'API des del navegador. Les peticions de la pròpia web
// són same-origin i no necessiten CORS; això només cobreix previews de Vercel i local.
const ALLOWED_ORIGIN_RE = /^https?:\/\/((www\.)?nlvipnutrition\.com|[a-z0-9-]+\.vercel\.app|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/i;

function corsHeaders(req) {
  const origin = req.headers.get('origin') || '';
  const headers = { 'Content-Type': 'application/json', 'Vary': 'Origin' };
  if (ALLOWED_ORIGIN_RE.test(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    headers['Access-Control-Allow-Headers'] = 'Content-Type';
  }
  return headers;
}

function jsonResponse(req, payload, status = 200) {
  return new Response(JSON.stringify(payload), { status, headers: corsHeaders(req) });
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(req) });
  }
  if (req.method !== 'POST') {
    return jsonResponse(req, { errors: [{ message: 'Method not allowed' }] }, 405);
  }

  if (!STOREFRONT_TOKEN) {
    console.error('SHOPIFY_STOREFRONT_TOKEN is not configured');
    return jsonResponse(req, { errors: [{ message: 'Shopify token not configured on the server' }] }, 500);
  }

  try {
    const body = await req.text();
    if (body.length > MAX_BODY_BYTES) {
      return jsonResponse(req, { errors: [{ message: 'Request too large' }] }, 413);
    }

    let parsed;
    try {
      parsed = JSON.parse(body);
    } catch (e) {
      return jsonResponse(req, { errors: [{ message: 'Invalid JSON body' }] }, 400);
    }

    const query = typeof parsed?.query === 'string' ? parsed.query : '';
    if (!ALLOWED_OPERATIONS.some((re) => re.test(query))) {
      return jsonResponse(req, { errors: [{ message: 'Operation not allowed' }] }, 403);
    }

    const res = await fetch(SHOPIFY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Shopify-Storefront-Private-Token': STOREFRONT_TOKEN
      },
      body: body
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Shopify API Error:', res.status, errorText);
      return jsonResponse(req, { errors: [{ message: `Shopify API responded with ${res.status}` }] }, res.status);
    }

    const data = await res.json();
    return jsonResponse(req, data);
  } catch (error) {
    console.error('Proxy Exception:', error);
    return jsonResponse(req, { errors: [{ message: error.message }] }, 500);
  }
}
