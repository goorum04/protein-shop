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

export default async function handler(request) {
  try {
    // Reutilitza el proxy existent /api/shopify (que ja conté el token al servidor),
    // així aquest fitxer no duplica cap secret.
    const origin = new URL(request.url).origin;
    const res = await fetch(origin + '/api/shopify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: PRODUCTS_QUERY })
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Products fetch error:', res.status, errorText);
      return new Response(JSON.stringify({ errors: [{ message: `Upstream responded with ${res.status}` }] }), {
        status: res.status,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // Cachejat a la CDN de Vercel: ~5 min de frescor + serveix stale mentre revalida.
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    console.error('Products proxy exception:', error);
    return new Response(JSON.stringify({ errors: [{ message: error.message }] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}
