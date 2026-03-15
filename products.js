let PRODUCTS = [];
let PRODUCTS_LOADED = false;

function groupProductsByFlavor(products) {
  const groups = {};
  products.forEach(p => {
    const key = `${p.name}|${p.brand}`;
    if (!groups[key]) {
      groups[key] = {
        ...p,
        variants: [],
        in_stock: p.in_stock
      };
    }
    if (p.flavor || (p.variants && p.variants.length > 0)) {
      if (p.variants && p.variants.length > 0) {
        p.variants.forEach(v => {
          groups[key].variants.push({
            id: v.id,
            flavor: v.flavor,
            image: v.image || p.image,
            in_stock: v.in_stock
          });
          if (v.in_stock) groups[key].in_stock = true;
        });
      } else if (p.flavor) {
        groups[key].variants.push({
          id: p.id,
          flavor: p.flavor,
          image: p.image,
          in_stock: p.in_stock
        });
      }
    }
  });
  
  return Object.values(groups).map(g => {
    if (g.variants.length > 0) {
      g.allFlavors = [...new Set(g.variants.map(v => v.flavor).filter(Boolean))];
      g.defaultFlavor = g.variants.find(v => v.in_stock)?.flavor || g.variants[0]?.flavor || null;
    }
    return g;
  });
}

async function loadProductsFromShopify() {
  if (PRODUCTS_LOADED) return PRODUCTS;
  
  try {
    const shopifyProducts = await fetchProducts();
    if (shopifyProducts && shopifyProducts.length > 0) {
      PRODUCTS = groupProductsByFlavor(shopifyProducts);
      PRODUCTS_LOADED = true;
      console.log(`Loaded ${PRODUCTS.length} products from Shopify`);
      return PRODUCTS;
    }
  } catch (error) {
    console.error('Error loading products from Shopify:', error);
  }
  
  return [];
}

const FEATURED_IDS = [];
