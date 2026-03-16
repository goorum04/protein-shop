export const config = { runtime: 'edge' };

export default async function handler(req) {
  const SHOPIFY_DOMAIN = '0bb404-4.myshopify.com';
  const STOREFRONT_TOKEN = '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';

  const body = await req.text();

  const response = await fetch(
    'https://' + SHOPIFY_DOMAIN + '/api/2024-10/graphql.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Shopify-Storefront-Private-Token': STOREFRONT_TOKEN
      },
      body: body
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
