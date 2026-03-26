export const config = { runtime: 'edge' };

export default async function handler(req) {
  try {
    const body = await req.text();
    console.log('--- Shopify API Proxy Request ---');
    // console.log('Body:', body);

    const res = await fetch('https://0bb404-4.myshopify.com/api/2024-10/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Shopify-Storefront-Private-Token': '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'
      },
      body: body
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Shopify API Error:', res.status, errorText);
      return new Response(JSON.stringify({ errors: [{ message: `Shopify API responded with ${res.status}` }], details: errorText }), {
        status: res.status,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    const data = await res.json();
    console.log('Shopify API Success');
    
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Proxy Exception:', error);
    return new Response(JSON.stringify({ errors: [{ message: error.message }] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}
