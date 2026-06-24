// ===========================================
// CONFIGURACION DE SHOPIFY
// ===========================================

const SHOPIFY_DOMAIN = '0bb404-4.myshopify.com';
const STOREFRONT_TOKEN = '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';

async function shopifyFetch(query, variables = {}) {
  try {
    const response = await fetch('/api/shopify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    });

    if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        console.error('API Error Response:', response.status, errJson);
        return null;
    }

    const json = await response.json();
    if (json.errors) {
      console.error('Shopify GraphQL Errors:', json.errors);
      return null;
    }
    return json.data;
  } catch (e) {
    console.error('Shopify fetch network error:', e);
    // En entorno local sin Vercel, el fetch a /api/shopify fallar\u00e1 con 404
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        console.warn('Parece que est\u00e1s en entorno local. Aseg\u00farate de usar "vercel dev" para que las funciones de la API funcionen.');
    }
    return null;
  }
}

const PRODUCTS_CACHE_KEY = 'nlvip_products_v1';
const PRODUCTS_CACHE_TTL = 5 * 60 * 1000; // 5 min, igual que la caché de l'edge

function readProductsCache() {
  try {
    const raw = sessionStorage.getItem(PRODUCTS_CACHE_KEY);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (!data || (Date.now() - ts) > PRODUCTS_CACHE_TTL) return null;
    return data;
  } catch (e) { return null; }
}

function writeProductsCache(data) {
  try {
    sessionStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch (e) { /* sessionStorage ple o no disponible: ignorar */ }
}

async function fetchProductsFromShopify() {
  // 1) Caché de sessió: retorn immediat sense xarxa si és fresca.
  const cached = readProductsCache();
  if (cached) return cached;

  // 2) Endpoint GET cachejat per la CDN de Vercel (/api/products).
  try {
    const response = await fetch('/api/products');
    if (!response.ok) {
      console.error('Products API error:', response.status);
      return null;
    }
    const json = await response.json();
    if (json.errors) {
      console.error('Shopify GraphQL Errors:', json.errors);
      return null;
    }
    const data = json.data;
    if (!data || !data.products) return null;
    const products = data.products.edges.map(({ node }) => transformProduct(node));
    writeProductsCache(products);
    return products;
  } catch (e) {
    console.error('Products fetch network error:', e);
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
      console.warn('Entorn local: fes servir "vercel dev" perquè /api/products funcioni.');
    }
    return null;
  }
}

function transformProduct(product) {
  const variants = product.variants.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    price: parseFloat(node.price.amount),
    in_stock: node.availableForSale,
    flavor: (() => {
      const opt = node.selectedOptions.find(o =>
        o.name.toLowerCase() === 'sabor' ||
        o.name.toLowerCase() === 'flavor' ||
        o.name.toLowerCase() === 'colour' ||
        o.name.toLowerCase() === 'color'
      )?.value;
      const val = opt || node.title;
      return val === 'Default Title' ? null : val;
    })(),
    options: node.selectedOptions,
    image: node.image?.url || null
  }));

  const hasMultipleVariants = variants.length > 1;
  const isPack = product.title.toLowerCase().startsWith('pack');

  return {
    id: product.handle,
    shopifyId: product.id,
    name: product.title,
    brand: product.vendor || '',
    category: mapCategory(product.productType, product.title, product.vendor),
    price: parseFloat(product.priceRange.minVariantPrice.amount),
    image: product.images.edges[0]?.node?.url || '',
    description: product.description,
    in_stock: variants.some(v => v.in_stock),
    variants: variants,
    hasFlavors: hasMultipleVariants,
    allFlavors: hasMultipleVariants ? [...new Set(variants.map(v => v.flavor).filter(f => f && f !== 'Default Title'))] : [],
    handle: product.handle,
    isPack: isPack
  };
}

function mapCategory(productType, title, vendor) {
  const titleLower = (title || '').toLowerCase();
  if (titleLower.startsWith('pack')) return 'packs';

  // Excepciones por título específico
  if (titleLower.includes('androbull')) return 'prehormonal';
  if (titleLower.includes('barr nitromix')) return 'pre-workout';

  // Lookup directo del productType de Shopify (tiene prioridad sobre keywords)
  const DIRECT_MAP = {
    'proteina': 'proteinas',
    'proteína': 'proteinas',
    'creatina': 'creatina',
    'pre workout': 'pre-workout',
    'pre-workout': 'pre-workout',
    'mass gainer': 'mass-gainer',
    'salud y vitaminas': 'vitaminas',
    'alimentación': 'alimentacion',
    'alimentacion': 'alimentacion',
    'control de peso': 'control-peso',
    'carbohidratos': 'carbohidratos',
    'prehormonal': 'prehormonal',
    'aminoacido': 'vitaminas',
    'aminoácido': 'vitaminas',
  };

  const directKey = (productType || '').toLowerCase().trim();
  if (directKey && DIRECT_MAP[directKey] !== undefined) return DIRECT_MAP[directKey];

  // Fallback por keywords: solo para productos con productType vacío o desconocido
  const type = ((productType || '') + ' ' + (title || '') + ' ' + (vendor || '')).toLowerCase();
  if (type.includes('barrita') || type.includes('barreta') || type.includes('batido') || type.includes('crema') || type.includes('cream') || type.includes('donut') || type.includes('alimentaci') || type.includes('snack') || type.includes('avena') || type.includes('farina') || type.includes('harina') || type.includes('salsa') || type.includes('mantequilla') || type.includes('patata') || type.includes('hazelnut') || type.includes('peanut') || type.includes('choco') || type.includes('sirope') || type.includes('arce') || type.includes('profit')) return 'alimentacion';
  if (type.includes('prote') || type.includes('whey') || type.includes('beef') || type.includes('iso')) return 'proteinas';
  if (type.includes('creatina') || type.includes('creatine')) return 'creatina';
  if (type.includes('pre-workout') || type.includes('pre workout') || type.includes('preentrenamiento') || type.includes('pump')) return 'pre-workout';
  if (type.includes('vitamin') || type.includes('omega') || type.includes('mineral') || type.includes('salut') || type.includes('salud') || type.includes('multivita')) return 'vitaminas';
  if (type.includes('masa') || type.includes('gainer') || type.includes('mass') || type.includes('peso')) return 'mass-gainer';
  if (type.includes('carbohidrat') || type.includes('carb') || type.includes('ciclodextrina')) return 'carbohidratos';
  if (type.includes('control') || type.includes('carnitina') || type.includes('diure') || type.includes('quemador') || type.includes('fat burner')) return 'control-peso';
  if (type.includes('prehormonal') || type.includes('testo') || type.includes('hormonal') || type.includes('zma') || type.includes('andro')) return 'prehormonal';
  return 'vitaminas';
}

async function createCheckout(items) {
  const lineItems = items.map(item => ({
    variantId: item.variantId,
    quantity: item.qty || 1
  }));

  const query = `
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout { id webUrl }
        checkoutUserErrors { message }
      }
    }
  `;

  const data = await shopifyFetch(query, {
    input: { lineItems }
  });

  if (data?.checkoutCreate?.checkout) {
    return data.checkoutCreate.checkout.webUrl;
  }
  console.error('Checkout error:', data?.checkoutCreate?.checkoutUserErrors);
  return null;
}
