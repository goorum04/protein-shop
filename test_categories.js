const fs = require('fs');

const query = `
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
      }
    }
  }
}
`;

async function test() {
  const res = await fetch('https://0bb404-4.myshopify.com/api/2024-10/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Shopify-Storefront-Private-Token': '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'
    },
    body: JSON.stringify({ query })
  });
  const data = await res.json();
  const products = data.data.products.edges.map(e => e.node);
  
  function mapCategory(productType, title, vendor) {
    const type = ((productType || '') + ' ' + (title || '') + ' ' + (vendor || '')).toLowerCase();
    
    if (type.includes('barrita') || type.includes('barreta') || type.includes('batido') || type.includes('crema') || type.includes('donut') || type.includes('alimentacion') || type.includes('snack') || type.includes('avena') || type.includes('farina') || type.includes('harina') || type.includes('salsa') || type.includes('mantequilla') || type.includes('patata') || type.includes('hazelnut') || type.includes('peanut') || type.includes('choco') || type.includes('sirope') || type.includes('arce') || type.includes('profit')) return 'alimentacion';
    
    if (type.includes('prote') || type.includes('whey') || type.includes('beef') || type.includes('iso')) return 'proteinas';
    if (type.includes('creatina') || type.includes('creatine')) return 'creatina';
    if (type.includes('pre-workout') || type.includes('pre workout') || type.includes('preentrenamiento') || type.includes('pump')) return 'pre-workout';
    if (type.includes('vitamin') || type.includes('omega') || type.includes('mineral') || type.includes('salut') || type.includes('salud') || type.includes('multivita')) return 'vitaminas';
    if (type.includes('masa') || type.includes('gainer') || type.includes('mass') || type.includes('peso')) return 'mass-gainer';
    if (type.includes('prehormonal') || type.includes('testo') || type.includes('hormonal') || type.includes('zma') || type.includes('andro')) return 'prehormonal';
    if (type.includes('carbohidrat') || type.includes('carb') || type.includes('ciclodextrina')) return 'carbohidratos';
    if (type.includes('control') || type.includes('carnitina') || type.includes('diure') || type.includes('quemador') || type.includes('fat burner')) return 'control-peso';
    return 'vitaminas';
  }

  for (const p of products) {
    const cat = mapCategory(p.productType, p.title, p.vendor);
    if (cat === 'vitaminas') {
      console.log(`Vitaminas: ${p.title} | Type: ${p.productType} | Vendor: ${p.vendor}`);
    } else if (cat === 'alimentacion') {
      console.log(`ALIMENTACION: ${p.title} | Type: ${p.productType} | Vendor: ${p.vendor}`);
    }
  }
}
test();
