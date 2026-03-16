export const config = { runtime: 'edge' };

export default async function handler(req) {
  const body = await req.text();
  const res = await fetch('https://0bb404-4.myshopify.com/api/2024-10/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Shopify-Storefront-Private-Token': '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'
    },
    body: body
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
