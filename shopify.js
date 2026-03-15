// ===========================================
// CONFIGURACIÓN DE SHOPIFY
// ===========================================

const SHOPIFY_DOMAIN = window.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'nlvipnutrition.myshopify.com';
const STOREFRONT_TOKEN = window.NEXT_PUBLIC_SHOPIFY_TOKEN || '';

async function shopifyFetch(query, variables = {}) {
  const API_VERSIONS = ['2024-10', '2024-07', '2024-04', '2024-01', '2023-10'];
  let lastError = null;
  
  for (const version of API_VERSIONS) {
    try {
      const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/${version}/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN
        },
        body: JSON.stringify({ query, variables })
      });
      
      const json = await response.json();
      if (json.errors) {
        if (json.errors[0].message.includes('Not Found') || json.errors[0].message.includes('version')) {
          lastError = json.errors;
          continue;
        }
        console.error('Shopify API Error:', json.errors);
        return null;
      }
      return json.data;
    } catch (e) {
      lastError = e;
      continue;
    }
  }
  
  console.error('Shopify API Error - All versions failed:', lastError);
  return null;
}

async function fetchProducts() {
  const query = `
    query {
      products(first: 100) {
        edges {
          node {
            id
            title
            handle
            description
            productType
            vendor
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 20) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            options {
              name
              values
            }
          }
        }
      }
    }
  `;
  
  const data = await shopifyFetch(query);
  if (!data || !data.products) return [];
  
  return data.products.edges.map(({ node }) => transformProduct(node));
}

function transformProduct(product) {
  const variants = product.variants.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    price: parseFloat(node.price.amount),
    in_stock: node.availableForSale,
    flavor: node.selectedOptions.find(o => o.name.toLowerCase() === 'sabor' || o.name.toLowerCase() === 'flavor')?.value || null,
    options: node.selectedOptions
  }));
  
  const hasMultipleFlavors = product.options.some(o => 
    o.name.toLowerCase() === 'sabor' || o.name.toLowerCase() === 'flavor'
  );
  
  return {
    id: product.id,
    name: product.title,
    brand: product.vendor || '',
    category: mapCategory(product.productType),
    price: parseFloat(product.priceRange.minVariantPrice.amount),
    image: product.images.edges[0]?.node?.url || '',
    description: product.description,
    in_stock: variants.some(v => v.in_stock),
    variants: variants,
    hasFlavors: hasMultipleFlavors,
    allFlavors: hasMultipleFlavors ? [...new Set(variants.map(v => v.flavor).filter(Boolean))] : [],
    handle: product.handle
  };
}

function mapCategory(productType) {
  const type = (productType || '').toLowerCase();
  if (type.includes('prote') || type.includes('whey') || type.includes('beef')) return 'proteinas';
  if (type.includes('creatina')) return 'creatina';
  if (type.includes('pre-workout') || type.includes('pre workout') || type.includes('preentrenamiento')) return 'pre-workout';
  if (type.includes('vitamin') || type.includes('omega') || type.includes('mineral')) return 'vitaminas';
  if (type.includes('masa') || type.includes('gainer') || type.includes('mass')) return 'mass-gainer';
  if (type.includes('barreta') || type.includes('batido') || type.includes('crema') || type.includes('donut')) return 'alimentacion';
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
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          message
        }
      }
    }
  `;
  
  const variables = {
    input: {
      lineItems: lineItems.map(li => ({
        variantId: li.variantId,
        quantity: li.quantity
      }))
    }
  };
  
  const data = await shopifyFetch(query, variables);
  if (data?.checkoutCreate?.checkout) {
    return data.checkoutCreate.checkout.webUrl;
  }
  console.error('Checkout error:', data?.checkoutCreate?.checkoutUserErrors);
  return null;
}

async function getProductByHandle(handle) {
  const query = `
    query getProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        description
        productType
        vendor
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 20) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
              selectedOptions {
                name
                value
              }
            }
          }
        }
        options {
          name
          values
        }
      }
    }
  `;
  
  const data = await shopifyFetch(query, { handle });
  if (data?.productByHandle) {
    return transformProduct(data.productByHandle);
  }
  return null;
}
