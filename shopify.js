// ===========================================
// CONFIGURACIÓN DE SHOPIFY
// ===========================================

const SHOPIFY_DOMAIN = '0bb404-4.myshopify.com';
const STOREFRONT_TOKEN = 'f511bf842c4e9b81de6f34c80500c3b2';

async function shopifyFetch(query, variables = {}) {
  try {
    const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-10/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN
      },
      body: JSON.stringify({ query, variables })
    });
    const json = await response.json();
    if (json.errors) {
      console.error('Shopify API Error:', json.errors);
      return null;
    }
    return json.data;
  } catch (e) {
    console.error('Shopify fetch error:', e);
    return null;
  }
}

async function fetchProductsFromShopify() {
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
                }
              }
            }
            options { name values }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch(query);
  if (!data || !data.products) return null;
  return data.products.edges.map(({ node }) => transformProduct(node));
}

function transformProduct(product) {
  const variants = product.variants.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    price: parseFloat(node.price.amount),
    in_stock: node.availableForSale,
    flavor: node.selectedOptions.find(o =>
      o.name.toLowerCase() === 'sabor' ||
      o.name.toLowerCase() === 'flavor' ||
      o.name.toLowerCase() === 'colour' ||
      o.name.toLowerCase() === 'color'
    )?.value || node.title,
    options: node.selectedOptions
  }));

  const hasMultipleVariants = variants.length > 1;

  return {
    id: product.handle,
    shopifyId: product.id,
    name: product.title,
    brand: product.vendor || '',
    category: mapCategory(product.productType),
    price: parseFloat(product.priceRange.minVariantPrice.amount),
    image: product.images.edges[0]?.node?.url || '',
    description: product.description,
    in_stock: variants.some(v => v.in_stock),
    variants: variants,
    hasFlavors: hasMultipleVariants,
    allFlavors: hasMultipleVariants ? [...new Set(variants.map(v => v.flavor).filter(Boolean))] : [],
    handle: product.handle
  };
}

function mapCategory(productType) {
  const type = (productType || '').toLowerCase();
  if (type.includes('prote') || type.includes('whey') || type.includes('beef')) return 'proteinas';
  if (type.includes('creatina') || type.includes('creatine')) return 'creatina';
  if (type.includes('pre-workout') || type.includes('pre workout') || type.includes('preentrenamiento')) return 'pre-workout';
  if (type.includes('vitamin') || type.includes('omega') || type.includes('mineral')) return 'vitaminas';
  if (type.includes('masa') || type.includes('gainer') || type.includes('mass')) return 'mass-gainer';
  if (type.includes('barreta') || type.includes('batido') || type.includes('crema') || type.includes('donut')) return 'alimentacion';
  if (type.includes('carbohidrat') || type.includes('carb')) return 'carbohidratos';
  if (type.includes('control') || type.includes('carnitina') || type.includes('diure')) return 'control-peso';
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
