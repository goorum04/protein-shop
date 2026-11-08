export const config = { runtime: 'edge' };

// Query fix de productes. Viu al servidor perquè la petició del client sigui un GET
// sense body, i així la CDN de Vercel la pugui cachejar.
const PRODUCTS_QUERY = `
  query {
    products(first: 250) {
      edges {
        node {
          id
          title
          handle
          description
          productType
          vendor
          priceRange {
            minVariantPrice { amount currencyCode }
          }
          images(first: 1) {
            edges { node { url altText } }
          }
          variants(first: 30) {
            edges {
              node {
                id
                title
                price { amount currencyCode }
                availableForSale
                selectedOptions { name value }
                image { url }
              }
            }
          }
          options { name values }
        }
      }
    }
  }
`;

const SHOPIFY_ENDPOINT = 'https://0bb404-4.myshopify.com/api/2024-10/graphql.json';
// Mateix token que api/shopify.js, llegit de la variable d'entorn SHOPIFY_STOREFRONT_TOKEN.
const STOREFRONT_TOKEN = (typeof process !== 'undefined' && process.env && process.env.SHOPIFY_STOREFRONT_TOKEN) || '';

export default async function handler(request) {
  if (!STOREFRONT_TOKEN) {
    console.error('SHOPIFY_STOREFRONT_TOKEN is not configured');
    return new Response(JSON.stringify({ errors: [{ message: 'Shopify token not configured on the server' }] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Crida directa a Shopify (abans passava per /api/shopify via HTTP, cosa que
    // fallava als previews protegits de Vercel i afegia un salt innecessari).
    const res = await fetch(SHOPIFY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Shopify-Storefront-Private-Token': STOREFRONT_TOKEN
      },
      body: JSON.stringify({ query: PRODUCTS_QUERY })
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Products fetch error:', res.status, errorText);
      return new Response(JSON.stringify({ errors: [{ message: `Upstream responded with ${res.status}` }] }), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        // Cachejat a la CDN de Vercel: ~5 min de frescor + serveix stale mentre revalida.
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    console.error('Products proxy exception:', error);
    return new Response(JSON.stringify({ errors: [{ message: error.message }] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
