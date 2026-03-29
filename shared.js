// =============================================
// shared.js – Shared functionality across pages
// =============================================

// ===== SHOPIFY CONFIG =====
// (Cargado desde shopify.js)

// ===== TRANSLATIONS =====
const translations = {
  ca: {
    // Navigation
    nav_inici: "Inici",
    nav_productes: "Productes",
    nav_nosaltres: "Nosaltres",
    nav_assessoria: "Assessoria",
    nav_contacte: "Contacte",

    // Home
    hero_title: "Assolir els teus objectius",
    hero_subtitle: "Som el teu partner fitness a Andorra. Productes de qualitat, assessorament expert i resultats garantits",
    hero_cta: "Veure productes",
    home_featured: "Productes destacats",
    home_mes: "més venuts",
    home_cat_title: "Categories",
    home_products_count: "productes",

    // Products
    products_title: "Botiga",
    products_subtitle: "Més de 500 productes de les millors marques",
    products_search: "Cerca productes...",
    products_filter: "Filtrar",
    products_sort: "Ordenar per",
    products_sort_default: "Ordenar per",
    products_sort_price_asc: "Preu: menor a major",
    products_sort_price_desc: "Preu: major a menor",
    products_sort_name: "Nom A-Z",
    products_stock: "Només en stock",
    products_no_results: "No s'han trobat productes",
    products_contact: "Contacta'ns per WhatsApp",
    products_count: "producte",
    products_count_plural: "productes",
    products_loading: "Carregant productes...",
    products_from_shopify: "Carregant productes de Shopify...",

    // Product Card
    product_in_stock: "En estoc",
    product_out_stock: "Esgotat",
    product_add: "Afegir 🛒",
    product_format: "Format:",
    product_flavors: "sabors disponibles",

    // Modal
    modal_close: "Tancar",
    modal_add_cart: "Afegir al carret",
    modal_contact_wa: "Contactar per WhatsApp",

    // Cart
    cart_title: "El teu carret",
    cart_empty: "El teu carret és buit 🛒",
    cart_subtotal: "Subtotal",
    cart_discount: "Descompte",
    cart_total: "Total",
    cart_checkout: "Finalitzar comanda",
    cart_continue: "Continuar comprant",
    cart_remove: "Eliminar",
    cart_coupon: "Codi de descompte",
    cart_coupon_placeholder: "Introdueix el codi",
    cart_coupon_apply: "Aplicar",
    cart_coupon_remove: "Treure",

    // Services
    services_title: "Els nostres serveis",
    services_subtitle: "T'oferim tot el que necessites per assolir els teus objectius",
    service_contact: "Contactar ara →",
    service_book: "Reservar ara →",

    // Contact
    contact_title: "Contacte",
    contact_address: "Carrer Esteve Dolsa 15, Andorra la Vella",
    contact_phone: "376 645 263",
    contact_email: "info@nlvipnutrition.com",

    // Footer
    footer_links: "Enllaços ràpids",
    footer_products: "Productes",
    footer_contact: "Contacte",
    footer_legal: "Avís legal",
    footer_copyright: "©️ 2026 NL VIP Nutrition Andorra",

    // Misc
    loading: "Carregant...",
    error: "Error",
    close: "Tancar",
    cancel: "Cancel·lar",
    confirm: "Confirmar",
    yes: "Sí",
    no: "No",

    // Categories
    cat_all: "Tots els productes",
    cat_proteinas: "Proteïnes",
    cat_creatina: "Creatina",
    cat_preworkout: "Pre-Workout",
    cat_massgainer: "Mass Gainer",
    cat_vitaminas: "Vitamines",
    cat_alimentacion: "Alimentació",
    cat_controlpeso: "Control de Pes",
    cat_carbohidratos: "Carbohidrats",
    cat_prehormonal: "Prehormonal",

    // Checkout
    checkout_title: "Finalitzar comanda",
    checkout_redirecting: "Redirigint al checkout...",
    checkout_error: "Error al crear el checkout",

    // Home page new keys
    top_strip_shipping: "Enviament gratuït per compres superiors a 70€",
    top_strip_store: "Botiga física: Carrer Esteve Dolsa 15, Andorra",
    hero_eyebrow: "Nova col·lecció 2026",
    hero_title_1: "Supera",
    hero_title_2: "els teus",
    hero_title_3: "límits",
    hero_desc: "La botiga de suplements esportius número 1 a Andorra. Proteïnes, creatina, pre-workout i molt més de les millors marques del món.",
    hero_notice: "Tenim molts més productes dels que apareixen a la web. Escriu-nos per WhatsApp →",
    hero_cta_shop: "Explorar productes",
    hero_cta_wa: "Assessorament gratuït",
    stat_products: "Productes",
    stat_clients: "Clients",
    stat_quality: "Qualitat",
    cats_tag: "Categories",
    cats_title: "Explora per",
    cats_highlight: "categoria",
    cats_sub: "Troba exactament el que necessites per als teus objectius esportius",
    cat_products: "productes",
    featured_tag: "Destacats",
    featured_title: "Productes",
    featured_title_2: "més venuts",
    featured_see_all: "Veure tots →",
    nxt_tag: "Suplement Premium",
    nxt_title: "La proteïna de vedella pura",
    nxt_desc: "NXT Beef Protein Isolate — 27g de proteïna per servei, sense lactosa, sense greix.",
    nxt_feat1: "27g proteïna / servei",
    nxt_feat2: "Sense lactosa · Baix en greix",
    nxt_feat3: "Múltiples sabors disponibles",
    nxt_feat4: "Disponible a la botiga ara",
    nxt_cta1: "Veure producte",
    nxt_cta2: "Consulta disponibilitat",
    why_tag: "Per què nosaltres",
    why_title: "La diferència NL VIP",
    why_sub: "Més que una botiga. Som el teu company d’entrenament a Andorra.",
    why_1_title: "Qualitat garantida",
    why_1_desc: "Treballem únicament amb marques de confiança internacional",
    why_2_title: "Assessorament expert",
    why_2_desc: "El nostre equip t’ajuda a triar el producte perfecte per als teus objectius",
    why_3_title: "Botiga física a Andorra",
    why_3_desc: "Vine a veure’ns al Carrer Esteve Dolsa 15 i prova-ho en persona",
    why_4_title: "WhatsApp 24h",
    why_4_desc: "Escriu-nos i et respondrem personalment amb consells i disponibilitat",
    why_badge: "clients satisfets",
    wa_cta_title: "No trobes el que busques?",
    wa_cta_desc: "Tenim molts més productes dels que apareixen a la web. Contacta’ns per WhatsApp i t’assessorem personalment.",
    wa_cta_btn: "Escriu-nos ara",
    wa_cta_catalog: "Veure catàleg complet",
    footer_desc: "La teva botiga de suplements esportius de confiança a Andorra.",
    footer_products_title: "Productes",
    footer_company_title: "Empresa",
    footer_about: "Sobre nosaltres",
    footer_rights: "Tots els drets reservats",
    cart_total_label: "Total:",
    cart_checkout_btn: "Finalitzar compra a Shopify 🛒"
  },

  es: {
    nav_inici: "Inicio",
    nav_productes: "Productos",
    nav_nosaltres: "Nosotros",
    nav_assessoria: "Asesoría",
    nav_contacte: "Contacto",

    hero_title: "Alcanza tus objetivos",
    hero_subtitle: "Somos tu partner fitness en Andorra. Productos de calidad, asesoramiento experto y resultados garantizados",
    hero_cta: "Ver productos",
    home_featured: "Productos destacados",
    home_mes: "más vendidos",
    home_cat_title: "Categorías",
    home_products_count: "productos",

    products_title: "Tienda",
    products_subtitle: "Más de 500 productos de las mejores marcas",
    products_search: "Buscar productos...",
    products_filter: "Filtrar",
    products_sort: "Ordenar por",
    products_sort_default: "Ordenar por",
    products_sort_price_asc: "Precio: menor a mayor",
    products_sort_price_desc: "Precio: mayor a menor",
    products_sort_name: "Nombre A-Z",
    products_stock: "Solo en stock",
    products_no_results: "No se han encontrado productos",
    products_contact: "Contáctanos por WhatsApp",
    products_count: "producto",
    products_count_plural: "productos",
    products_loading: "Cargando productos...",
    products_from_shopify: "Cargando productos de Shopify...",

    product_in_stock: "En stock",
    product_out_stock: "Agotado",
    product_add: "Añadir 🛒",
    product_format: "Formato:",
    product_flavors: "sabores disponibles",

    modal_close: "Cerrar",
    modal_add_cart: "Añadir al carrito",
    modal_contact_wa: "Contactar por WhatsApp",

    cart_title: "Tu carrito",
    cart_empty: "Tu carrito está vacío 🛒",
    cart_subtotal: "Subtotal",
    cart_discount: "Descuento",
    cart_total: "Total",
    cart_checkout: "Finalizar pedido",
    cart_continue: "Seguir comprando",
    cart_remove: "Eliminar",
    cart_coupon: "Código de descuento",
    cart_coupon_placeholder: "Introduce el código",
    cart_coupon_apply: "Aplicar",
    cart_coupon_remove: "Quitar",

    services_title: "Nuestros servicios",
    services_subtitle: "Te ofrecemos todo lo que necesitas para alcanzar tus objetivos",
    service_contact: "Contactar ahora →",
    service_book: "Reservar ahora →",

    contact_title: "Contacto",
    contact_address: "Carrer Esteve Dolsa 15, Andorra la Vella",
    contact_phone: "376 645 263",
    contact_email: "info@nlvipnutrition.com",

    footer_links: "Enlaces rápidos",
    footer_products: "Productos",
    footer_contact: "Contacto",
    footer_legal: "Aviso legal",
    footer_copyright: "©️ 2026 NL VIP Nutrition Andorra",

    loading: "Cargando...",
    error: "Error",
    close: "Cerrar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    yes: "Sí",
    no: "No",

    cat_all: "Todos los productos",
    cat_proteinas: "Proteínas",
    cat_creatina: "Creatina",
    cat_preworkout: "Pre-Workout",
    cat_massgainer: "Mass Gainer",
    cat_vitaminas: "Vitaminas",
    cat_alimentacion: "Alimentación",
    cat_controlpeso: "Control de Peso",
    cat_carbohidratos: "Carbohidratos",
    cat_prehormonal: "Prehormonal",

    checkout_title: "Finalizar pedido",
    checkout_redirecting: "Redirigiendo al checkout...",
    checkout_error: "Error al crear el checkout",

    top_strip_shipping: "Envío gratuito en compras superiores a 70€",
    top_strip_store: "Tienda física: Carrer Esteve Dolsa 15, Andorra",
    hero_eyebrow: "Nueva colección 2026",
    hero_title_1: "Supera",
    hero_title_2: "tus",
    hero_title_3: "límites",
    hero_desc: "La tienda de suplementos deportivos número 1 en Andorra. Proteínas, creatina, pre-workout y mucho más de las mejores marcas del mundo.",
    hero_notice: "Tenemos muchos más productos de los que aparecen en la web. Escríbenos por WhatsApp →",
    hero_cta_shop: "Explorar productos",
    hero_cta_wa: "Asesoramiento gratuito",
    stat_products: "Productos",
    stat_clients: "Clientes",
    stat_quality: "Calidad",
    cats_tag: "Categorías",
    cats_title: "Explora por",
    cats_highlight: "categoría",
    cats_sub: "Encuentra exactamente lo que necesitas para tus objetivos deportivos",
    cat_products: "productos",
    featured_tag: "Destacados",
    featured_title: "Productos",
    featured_title_2: "más vendidos",
    featured_see_all: "Ver todos →",
    nxt_tag: "Suplemento Premium",
    nxt_title: "La proteína de ternera pura",
    nxt_desc: "NXT Beef Protein Isolate — 27g de proteína por servicio, sin lactosa, sin grasa.",
    nxt_feat1: "27g proteína / servicio",
    nxt_feat2: "Sin lactosa · Bajo en grasa",
    nxt_feat3: "Múltiples sabores disponibles",
    nxt_feat4: "Disponible en la tienda ahora",
    nxt_cta1: "Ver producto",
    nxt_cta2: "Consultar disponibilidad",
    why_tag: "Por qué nosotros",
    why_title: "La diferencia NL VIP",
    why_sub: "Más que una tienda. Somos tu compañero de entrenamiento en Andorra.",
    why_1_title: "Calidad garantizada",
    why_1_desc: "Trabajamos únicamente con marcas de confianza internacional",
    why_2_title: "Asesoramiento experto",
    why_2_desc: "Nuestro equipo te ayuda a elegir el producto perfecto para tus objetivos",
    why_3_title: "Tienda física en Andorra",
    why_3_desc: "Visítanos en Carrer Esteve Dolsa 15 y pruébalo en persona",
    why_4_title: "WhatsApp 24h",
    why_4_desc: "Escríbenos y te responderemos personalmente con consejos y disponibilidad",
    why_badge: "clientes satisfechos",
    wa_cta_title: "¿No encuentras lo que buscas?",
    wa_cta_desc: "Tenemos muchos más productos de los que aparecen en la web. Contáctanos por WhatsApp y te asesoramos personalmente.",
    wa_cta_btn: "Escríbenos ahora",
    wa_cta_catalog: "Ver catálogo completo",
    footer_desc: "Tu tienda de suplementos deportivos de confianza en Andorra.",
    footer_products_title: "Productos",
    footer_company_title: "Empresa",
    footer_about: "Sobre nosotros",
    footer_rights: "Todos los derechos reservados",
    cart_total_label: "Total:",
    cart_checkout_btn: "Finalizar compra en Shopify 🛒"
  },

  fr: {
    nav_inici: "Accueil",
    nav_productes: "Produits",
    nav_nosaltres: "Nous",
    nav_assessoria: "Conseil",
    nav_contacte: "Contact",

    hero_title: "Atteignez vos objectifs",
    hero_subtitle: "Nous sommes votre partenaire fitness en Andorre. Produits de qualité, conseils experts et résultats garantis",
    hero_cta: "Voir les produits",
    home_featured: "Produits en vedette",
    home_mes: "les plus vendus",
    home_cat_title: "Catégories",
    home_products_count: "produits",

    products_title: "Boutique",
    products_subtitle: "Plus de 500 produits des meilleures marques",
    products_search: "Rechercher des produits...",
    products_filter: "Filtrer",
    products_sort: "Trier par",
    products_sort_default: "Trier par",
    products_sort_price_asc: "Prix: croissant",
    products_sort_price_desc: "Prix: décroissant",
    products_sort_name: "Nom A-Z",
    products_stock: "En stock uniquement",
    products_no_results: "Aucun produit trouvé",
    products_contact: "Contactez-nous par WhatsApp",
    products_count: "produit",
    products_count_plural: "produits",
    products_loading: "Chargement des produits...",
    products_from_shopify: "Chargement des produits depuis Shopify...",

    product_in_stock: "En stock",
    product_out_stock: "Épuisé",
    product_add: "Ajouter 🛒",
    product_format: "Format:",
    product_flavors: "saveurs disponibles",

    modal_close: "Fermer",
    modal_add_cart: "Ajouter au panier",
    modal_contact_wa: "Contacter par WhatsApp",

    cart_title: "Votre panier",
    cart_empty: "Votre panier est vide 🛒",
    cart_subtotal: "Sous-total",
    cart_discount: "Remise",
    cart_total: "Total",
    cart_checkout: "Finaliser la commande",
    cart_continue: "Continuer vos achats",
    cart_remove: "Supprimer",
    cart_coupon: "Code promo",
    cart_coupon_placeholder: "Entrez le code",
    cart_coupon_apply: "Appliquer",
    cart_coupon_remove: "Retirer",

    services_title: "Nos services",
    services_subtitle: "Nous vous proposons tout ce dont vous avez besoin pour atteindre vos objectifs",
    service_contact: "Contacter maintenant →",
    service_book: "Réserver maintenant →",

    contact_title: "Contact",
    contact_address: "Carrer Esteve Dolsa 15, Andorra la Vella",
    contact_phone: "376 645 263",
    contact_email: "info@nlvipnutrition.com",

    footer_links: "Liens rapides",
    footer_products: "Produits",
    footer_contact: "Contact",
    footer_legal: "Mentions légales",
    footer_copyright: "©️ 2026 NL VIP Nutrition Andorra",

    loading: "Chargement...",
    error: "Erreur",
    close: "Fermer",
    cancel: "Annuler",
    confirm: "Confirmer",
    yes: "Oui",
    no: "Non",

    cat_all: "Tous les produits",
    cat_proteinas: "Protéines",
    cat_creatina: "Créatine",
    cat_preworkout: "Pre-Workout",
    cat_massgainer: "Mass Gainer",
    cat_vitaminas: "Vitamines",
    cat_alimentacion: "Alimentation",
    cat_controlpeso: "Contrôle du poids",
    cat_carbohydrates: "Glucides",
    cat_prehormonal: "Pré-hormonal",

    checkout_title: "Finaliser la commande",
    checkout_redirecting: "Redirection vers le checkout...",
    checkout_error: "Erreur lors de la création du checkout",

    top_strip_shipping: "Livraison gratuite pour les achats supérieurs à 70€",
    top_strip_store: "Boutique physique: Carrer Esteve Dolsa 15, Andorre",
    hero_eyebrow: "Nouvelle collection 2026",
    hero_title_1: "Dépassez",
    hero_title_2: "vos",
    hero_title_3: "limites",
    hero_desc: "La boutique de suppléments sportifs numéro 1 en Andorre. Protéines, créatine, pre-workout et bien plus des meilleures marques du monde.",
    hero_notice: "Nous avons beaucoup plus de produits que ceux qui apparaissent sur le site. Écrivez-nous sur WhatsApp →",
    hero_cta_shop: "Explorer les produits",
    hero_cta_wa: "Conseil gratuit",
    stat_products: "Produits",
    stat_clients: "Clients",
    stat_quality: "Qualité",
    cats_tag: "Catégories",
    cats_title: "Explorez par",
    cats_highlight: "catégorie",
    cats_sub: "Trouvez exactement ce dont vous avez besoin pour vos objectifs sportifs",
    cat_products: "produits",
    featured_tag: "En vedette",
    featured_title: "Produits",
    featured_title_2: "les plus vendus",
    featured_see_all: "Voir tout →",
    nxt_tag: "Supplément Premium",
    nxt_title: "La protéine de bœuf pure",
    nxt_desc: "NXT Beef Protein Isolate — 27g de protéine par portion, sans lactose, sans graisse.",
    nxt_feat1: "27g protéine / portion",
    nxt_feat2: "Sans lactose · Faible en gras",
    nxt_feat3: "Plusieurs saveurs disponibles",
    nxt_feat4: "Disponible en boutique maintenant",
    nxt_cta1: "Voir le produit",
    nxt_cta2: "Consulter la disponibilité",
    why_tag: "Pourquoi nous",
    why_title: "La différence NL VIP",
    why_sub: "Plus qu’une boutique. Nous sommes votre partenaire d’entraînement en Andorre.",
    why_1_title: "Qualité garantie",
    why_1_desc: "Nous travaillons uniquement avec des marques de confiance internationale",
    why_2_title: "Conseil expert",
    why_2_desc: "Notre équipe vous aide à choisir le produit parfait pour vos objectifs",
    why_3_title: "Boutique physique en Andorre",
    why_3_desc: "Venez nous voir au Carrer Esteve Dolsa 15 et essayez en personne",
    why_4_title: "WhatsApp 24h",
    why_4_desc: "Écrivez-nous et nous vous répondrons personnellement avec des conseils",
    why_badge: "clients satisfaits",
    wa_cta_title: "Vous ne trouvez pas ce que vous cherchez?",
    wa_cta_desc: "Nous avons beaucoup plus de produits. Contactez-nous sur WhatsApp et nous vous conseillons personnellement.",
    wa_cta_btn: "Écrivez-nous maintenant",
    wa_cta_catalog: "Voir le catalogue complet",
    footer_desc: "Votre boutique de suppléments sportifs de confiance en Andorre.",
    footer_products_title: "Produits",
    footer_company_title: "Entreprise",
    footer_about: "À propos de nous",
    footer_rights: "Tous droits réservés",
    cart_total_label: "Total:",
    cart_checkout_btn: "Finaliser l’achat sur Shopify 🛒"
  },

  en: {
    nav_inici: "Home",
    nav_productes: "Products",
    nav_nosaltres: "About us",
    nav_assessoria: "Coaching",
    nav_contacte: "Contact",

    hero_title: "Achieve your goals",
    hero_subtitle: "We are your fitness partner in Andorra. Quality products, expert advice and guaranteed results",
    hero_cta: "View products",
    home_featured: "Featured products",
    home_mes: "best sellers",
    home_cat_title: "Categories",
    home_products_count: "products",

    products_title: "Shop",
    products_subtitle: "Over 500 products from the best brands",
    products_search: "Search products...",
    products_filter: "Filter",
    products_sort: "Sort by",
    products_sort_default: "Sort by",
    products_sort_price_asc: "Price: low to high",
    products_sort_price_desc: "Price: high to low",
    products_sort_name: "Name A-Z",
    products_stock: "In stock only",
    products_no_results: "No products found",
    products_contact: "Contact us on WhatsApp",
    products_count: "product",
    products_count_plural: "products",
    products_loading: "Loading products...",
    products_from_shopify: "Loading products from Shopify...",

    product_in_stock: "In stock",
    product_out_stock: "Out of stock",
    product_add: "Add 🛒",
    product_format: "Format:",
    product_flavors: "flavors available",

    modal_close: "Close",
    modal_add_cart: "Add to cart",
    modal_contact_wa: "Contact on WhatsApp",

    cart_title: "Your cart",
    cart_empty: "Your cart is empty 🛒",
    cart_subtotal: "Subtotal",
    cart_discount: "Discount",
    cart_total: "Total",
    cart_checkout: "Checkout",
    cart_continue: "Continue shopping",
    cart_remove: "Remove",
    cart_coupon: "Discount code",
    cart_coupon_placeholder: "Enter code",
    cart_coupon_apply: "Apply",
    cart_coupon_remove: "Remove",

    services_title: "Our services",
    services_subtitle: "We offer everything you need to achieve your goals",
    service_contact: "Contact now →",
    service_book: "Book now →",

    contact_title: "Contact",
    contact_address: "Carrer Esteve Dolsa 15, Andorra la Vella",
    contact_phone: "376 645 263",
    contact_email: "info@nlvipnutrition.com",

    footer_links: "Quick links",
    footer_products: "Products",
    footer_contact: "Contact",
    footer_legal: "Legal notice",
    footer_copyright: "©️ 2026 NL VIP Nutrition Andorra",

    loading: "Loading...",
    error: "Error",
    close: "Close",
    cancel: "Cancel",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",

    cat_all: "All products",
    cat_proteinas: "Proteins",
    cat_creatina: "Creatine",
    cat_preworkout: "Pre-Workout",
    cat_massgainer: "Mass Gainer",
    cat_vitaminas: "Vitamins",
    cat_alimentacion: "Food",
    cat_controlpeso: "Weight Control",
    cat_carbohydrates: "Carbohydrates",
    cat_prehormonal: "Pre-hormonal",

    checkout_title: "Checkout",
    checkout_redirecting: "Redirecting to checkout...",
    checkout_error: "Error creating checkout",

    top_strip_shipping: "Free shipping on orders over €70",
    top_strip_store: "Physical store: Carrer Esteve Dolsa 15, Andorra",
    hero_eyebrow: "New collection 2026",
    hero_title_1: "Exceed",
    hero_title_2: "your",
    hero_title_3: "limits",
    hero_desc: "The number 1 sports supplement store in Andorra. Proteins, creatine, pre-workout and much more from the best brands in the world.",
    hero_notice: "We have many more products than those shown on the web. Write to us on WhatsApp →",
    hero_cta_shop: "Explore products",
    hero_cta_wa: "Free consultation",
    stat_products: "Products",
    stat_clients: "Clients",
    stat_quality: "Quality",
    cats_tag: "Categories",
    cats_title: "Browse by",
    cats_highlight: "category",
    cats_sub: "Find exactly what you need for your sports goals",
    cat_products: "products",
    featured_tag: "Featured",
    featured_title: "Best",
    featured_title_2: "sellers",
    featured_see_all: "See all →",
    nxt_tag: "Premium Supplement",
    nxt_title: "The pure beef protein",
    nxt_desc: "NXT Beef Protein Isolate — 27g of protein per serving, lactose-free, fat-free.",
    nxt_feat1: "27g protein / serving",
    nxt_feat2: "Lactose-free · Low in fat",
    nxt_feat3: "Multiple flavors available",
    nxt_feat4: "Available in store now",
    nxt_cta1: "View product",
    nxt_cta2: "Check availability",
    why_tag: "Why us",
    why_title: "The NL VIP difference",
    why_sub: "More than a store. We are your training partner in Andorra.",
    why_1_title: "Guaranteed quality",
    why_1_desc: "We work exclusively with internationally trusted brands",
    why_2_title: "Expert advice",
    why_2_desc: "Our team helps you choose the perfect product for your goals",
    why_3_title: "Physical store in Andorra",
    why_3_desc: "Come visit us at Carrer Esteve Dolsa 15 and try it in person",
    why_4_title: "WhatsApp 24h",
    why_4_desc: "Write to us and we will personally respond with advice and availability",
    why_badge: "satisfied clients",
    wa_cta_title: "Can’t find what you’re looking for?",
    wa_cta_desc: "We have many more products than those on the web. Contact us on WhatsApp and we’ll advise you personally.",
    wa_cta_btn: "Write to us now",
    wa_cta_catalog: "View full catalogue",
    footer_desc: "Your trusted sports supplement store in Andorra.",
    footer_products_title: "Products",
    footer_company_title: "Company",
    footer_about: "About us",
    footer_rights: "All rights reserved",
    cart_total_label: "Total:",
    cart_checkout_btn: "Checkout on Shopify 🛒"
  }
};

// ===== CURRENT LANGUAGE =====
let currentLang = localStorage.getItem("nlvip_lang") || "ca";

function t(key) {
  return translations[currentLang]?.[key] || translations.ca?.[key] || key;
}

function changeLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem("nlvip_lang", lang);
    updatePageTranslations();
  }
}

function updatePageTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });

  const langSelect = document.getElementById("lang-select");
  if (langSelect) langSelect.value = currentLang;

  window.dispatchEvent(new CustomEvent("languageChanged"));
}

// ===== CART =====
let cart = JSON.parse(localStorage.getItem("nlvip_cart") || "[]");

// ===== DISCOUNT CODES =====
const DISCOUNT_CODES = {
  NLVIP10: { type: "percent", value: 10, label: "-10%" },
  NLVIP15: { type: "percent", value: 15, label: "-15%" },
  BENVINGUT: { type: "percent", value: 5, label: "-5%" },
  WELCOME5: { type: "fixed", value: 5, label: "-5,00 €" }
};

let activeDiscount = JSON.parse(localStorage.getItem("nlvip_discount") || "null");

function saveDiscount() {
  localStorage.setItem("nlvip_discount", JSON.stringify(activeDiscount));
}

function saveCart() {
  localStorage.setItem("nlvip_cart", JSON.stringify(cart));
}

function calcCartSubtotal() {
  return cart.reduce((s, i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return s + (p ? p.price * (i.qty || 1) : 0);
  }, 0);
}

function calcDiscount(subtotal) {
  if (!activeDiscount) return 0;
  const dc = DISCOUNT_CODES[activeDiscount];
  if (!dc) return 0;
  if (dc.type === "percent") return subtotal * (dc.value / 100);
  if (dc.type === "fixed") return Math.min(dc.value, subtotal);
  return 0;
}

function applyDiscount() {
  const input = document.getElementById("discount-input");
  const msgEl = document.getElementById("discount-msg");
  if (!input || !msgEl) return;

  const code = input.value.trim().toUpperCase();

  if (!code) {
    msgEl.textContent = "Introdueix un codi de descompte.";
    msgEl.className = "discount-msg error";
    return;
  }

  if (DISCOUNT_CODES[code]) {
    activeDiscount = code;
    saveDiscount();
    input.value = "";
    msgEl.textContent = `✓ Codi "${code}" aplicat! (${DISCOUNT_CODES[code].label})`;
    msgEl.className = "discount-msg success";
    updateCartBadge();
    renderCartItems();
  } else {
    msgEl.textContent = "Codi de descompte no vàlid.";
    msgEl.className = "discount-msg error";
  }
}

function removeDiscount() {
  activeDiscount = null;
  saveDiscount();

  const msgEl = document.getElementById("discount-msg");
  if (msgEl) {
    msgEl.textContent = "";
    msgEl.className = "discount-msg";
  }

  const input = document.getElementById("discount-input");
  if (input) input.value = "";

  updateCartBadge();
  renderCartItems();
}

// ===== HELPERS =====
function escHtml(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ===== RENDER PRODUCT CARD =====
function renderCard(p) {
  const statusClass = p.in_stock ? "status-in" : "status-out";
  const statusText = p.in_stock ? "En estoc" : "Esgotat";

  const qtyMatch = p.name.match(/(\d+[,.]?\d*\s*(g|gr|kg|ml|caps|càpsules|tablets|tabs|litres|l))/i);
  const quantity = qtyMatch
    ? `<div class="product-qty" style="color:var(--blue-light);font-size:0.85rem;margin-bottom:8px">Format: <strong>${qtyMatch[0].toLowerCase()}</strong></div>`
    : "";

  const priceStr = p.price != null ? `${p.price.toFixed(2).replace(".", ",")} €` : "";
  const hasFlavors = p.allFlavors && p.allFlavors.length > 0;

  const flavorText = hasFlavors
    ? `<div class="product-flavor" style="color:var(--text-2);font-size:0.85rem;">${p.allFlavors.length} sabors disponibles</div>`
    : p.flavor
      ? `<div class="product-flavor">Sabor: ${escHtml(p.flavor)}</div>`
      : "";

  const productName = hasFlavors
    ? escHtml(p.name)
    : `${escHtml(p.name)}${p.flavor ? " – " + escHtml(p.flavor) : ""}`;

  const packBadge = p.isPack ? `<span class="badge-pack">✨ Pack</span>` : '';
  const cardClass = p.isPack ? 'product-card is-pack' : 'product-card';
  const cardFooter = p.isPack
    ? `<a href="https://wa.me/376645263?text=${encodeURIComponent("Hola! M'interessa el " + p.name)}" class="btn-wa-full" target="_blank" onclick="event.stopPropagation()" aria-label="Demanar ${productName} per WhatsApp">💬 Demanar per WhatsApp</a>`
    : `<button class="btn-add-cart" onclick="addToCart(event,'${escHtml(p.id)}')" ${p.in_stock ? "" : "disabled"} aria-label="Afegir ${productName} al carret">
            ${p.in_stock ? "Afegir 🛒" : "Esgotat"}
          </button>
          <a href="https://wa.me/376645263?text=${encodeURIComponent("Hola! Estic interessat en: " + p.name)}" class="btn-ghost btn-wa-card" target="_blank" onclick="event.stopPropagation()" aria-label="Contactar per WhatsApp">💬</a>`;

  return `
    <article class="${cardClass}" onclick="openModal('${escHtml(p.id)}')" role="listitem" aria-label="${productName}" tabindex="0" onkeydown="if(event.key==='Enter')openModal('${escHtml(p.id)}')">
      ${packBadge}
      <span class="product-status ${statusClass}">${statusText}</span>
      <div class="product-img">
        <img src="${escHtml(p.image)}" alt="${escHtml(p.name)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70'" />
      </div>
      <div class="product-body">
        <div class="product-brand-tag">${escHtml(p.brand || "")}</div>
        <div class="product-name">${productName}</div>
        ${quantity}
        ${flavorText}
        ${priceStr ? `<div class="product-price">${priceStr}</div>` : ""}
        <div class="product-footer">
          ${cardFooter}
        </div>
      </div>
    </article>
  `;
}

// ===== CART =====
function addToCart(e, id) {
  if (e) e.stopPropagation();

  const p = PRODUCTS.find((x) => x.id === id);
  if (!p || !p.in_stock) return;

  const flavor = p.defaultFlavor || p.flavor || null;
  const cartKey = flavor ? `${id}-${flavor}` : id;

  const ex = cart.find((i) => (i.flavor ? `${i.id}-${i.flavor}` : i.id) === cartKey);

  if (ex) ex.qty = (ex.qty || 1) + 1;
  else cart.push({ id, qty: 1, flavor });

  saveCart();
  updateCartBadge();

  const btn = document.getElementById("cart-toggle");
  if (btn) {
    btn.style.transform = "scale(1.18)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 200);
  }
}

function removeFromCart(id, flavor) {
  if (flavor) {
    cart = cart.filter((i) => !(i.id === id && i.flavor === flavor));
  } else {
    cart = cart.filter((i) => i.id !== id);
  }

  saveCart();
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const count = cart.reduce((s, i) => s + (i.qty || 0), 0);
  document.querySelectorAll("#cart-count").forEach((el) => {
    el.textContent = count;
  });

  const subtotal = calcCartSubtotal();
  const discount = calcDiscount(subtotal);
  const total = subtotal - discount;

  const subtotalEl = document.getElementById("cart-subtotal");
  if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2).replace(".", ",")} €`;

  const discountRow = document.getElementById("cart-discount-row");
  const discountAmtEl = document.getElementById("cart-discount-amount");
  if (discountRow) discountRow.style.display = activeDiscount && discount > 0 ? "flex" : "none";

  if (discountAmtEl && activeDiscount) {
    const dc = DISCOUNT_CODES[activeDiscount];
    discountAmtEl.textContent = `-${discount.toFixed(2).replace(".", ",")} € (${dc ? dc.label : activeDiscount})`;
  }

  const codeBadge = document.getElementById("discount-applied-badge");
  if (codeBadge) {
    if (activeDiscount) {
      codeBadge.style.display = "flex";
      const codeText = codeBadge.querySelector(".badge-code");
      if (codeText) codeText.textContent = activeDiscount;
    } else {
      codeBadge.style.display = "none";
    }
  }

  const totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.textContent = `${total.toFixed(2).replace(".", ",")} €`;
}

function renderCartItems() {
  const el = document.getElementById("cart-items");
  if (!el) return;

  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty-msg">El teu carret és buit 🛒</div>`;
    return;
  }

  el.innerHTML = cart
    .map((item) => {
      const p = PRODUCTS.find((x) => x.id === item.id);
      if (!p) return "";

      const flavor = item.flavor || p.defaultFlavor || p.flavor;

      return `
        <div class="cart-item">
          <img class="cart-item-img" src="${escHtml(p.image)}" alt="${escHtml(p.name)}" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&q=60'" />
          <div class="cart-item-info">
            <div class="cart-item-name">${escHtml(p.name)}${flavor ? " – " + escHtml(flavor) : ""}</div>
            <div class="cart-item-price">${(p.price * (item.qty || 1)).toFixed(2).replace(".", ",")} € × ${item.qty || 1}</div>
          </div>
          <button class="btn-remove" onclick="removeFromCart('${escHtml(item.id)}', '${escHtml(item.flavor || "")}')" aria-label="Eliminar ${escHtml(p.name)}">🗑</button>
        </div>
      `;
    })
    .join("");
}

// ===== CHECKOUT =====
async function checkout() {
  if (!cart.length) return;
  await checkoutShopify();
}

async function checkoutShopify() {
  const checkoutBtn = document.querySelector(".btn-checkout");

  if (checkoutBtn) {
    checkoutBtn.disabled = true;
    checkoutBtn.textContent = t("checkout_redirecting") || "Redirigint...";
  }

  const lineItems = cart
    .map((item) => {
      const p = PRODUCTS.find((x) => x.id === item.id);
      if (!p) return null;

      let variantId = null;

      if (p.variants && p.variants.length > 0) {
        if (item.flavor) {
          const variant = p.variants.find((v) => v.flavor === item.flavor);
          if (variant) variantId = variant.id;
        }

        if (!variantId && p.defaultFlavor) {
          const variant = p.variants.find((v) => v.flavor === p.defaultFlavor);
          if (variant) variantId = variant.id;
        }

        if (!variantId) {
          variantId = p.variants[0].id;
        }
      }

      if (!variantId) variantId = p.shopifyId;

      return {
        id: variantId,
        quantity: item.qty || 1
      };
    })
    .filter(Boolean);

  console.log("Checkout lineItems:", lineItems);

  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          message
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch(query, {
      input: {
        lines: lineItems.map((item) => ({
          merchandiseId: item.id,
          quantity: item.quantity
        }))
      }
    });

    if (data?.cartCreate?.cart?.checkoutUrl) {
      window.location.href = data.cartCreate.cart.checkoutUrl;
      return;
    } else {
      console.error("Cart error:", data?.cartCreate?.userErrors);
      alert("Error al procesar el pago. Inténtalo de nuevo.");
    }
  } catch (e) {
    console.error("Cart error:", e);
    alert("Error al procesar el pago. Inténtalo de nuevo.");
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = false;
    checkoutBtn.textContent = t("cart_checkout") || "Finalitzar comanda";
  }
}

// ===== CHECKOUT via WhatsApp (backup) =====
function checkoutWhatsApp() {
  if (!cart.length) return;

  const subtotal = calcCartSubtotal();
  const discount = calcDiscount(subtotal);
  const total = subtotal - discount;

  const lines = cart
    .map((item) => {
      const p = PRODUCTS.find((x) => x.id === item.id);
      if (!p) return null;

      const flavor = item.flavor || p.defaultFlavor || p.flavor;
      const name = p.name + (flavor ? ` – ${flavor}` : "");
      const lineTotal = (p.price * (item.qty || 1)).toFixed(2).replace(".", ",");

      return `• ${name} ×${item.qty || 1} → ${lineTotal} €`;
    })
    .filter(Boolean)
    .join("\n");

  let msg = `Hola! Vull completar la meva comanda:\n\n${lines}\n\nSubtotal: ${subtotal.toFixed(2).replace(".", ",")} €`;

  if (activeDiscount && discount > 0) {
    msg += `\nDescompte (${activeDiscount}): -${discount.toFixed(2).replace(".", ",")} €`;
  }

  msg += `\nTOTAL: ${total.toFixed(2).replace(".", ",")} €`;

  window.open(`https://wa.me/376645263?text=${encodeURIComponent(msg)}`, "_blank");
}

// ===== MODAL =====
function openModal(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;

  const statusClass = p.in_stock ? "status-in" : "status-out";
  const overlay = document.getElementById("modal-overlay");
  const inner = document.getElementById("modal-inner");
  if (!overlay || !inner) return;

  const qtyMatch = p.name.match(/(\d+[,.]?\d*\s*(g|gr|kg|ml|caps|càpsules|tablets|tabs|litros|l))/i);
  const quantity = qtyMatch
    ? `<div class="modal-flavor" style="color:var(--blue-light); margin-top:4px;">Format: <strong>${qtyMatch[0].toLowerCase()}</strong></div>`
    : "";

  const hasFlavors = p.allFlavors && p.allFlavors.length > 0;

  const flavorSelector = hasFlavors
    ? `
      <div class="modal-flavor" style="margin-top:12px;">
        <label style="color:var(--text-2);font-size:0.85rem;display:block;margin-bottom:6px;">Sabor:</label>
        <select id="modal-flavor-select" onchange="updateModalFlavor(this)" style="width:100%;padding:10px 14px;background:var(--bg-2);color:var(--white);border:1px solid var(--border);border-radius:8px;font-size:0.9rem;cursor:pointer;">
          ${p.allFlavors
            .map((f, idx) => {
              const variant = p.variants?.[idx];
              const disabled = variant && !variant.in_stock ? "disabled" : "";
              const selected = p.defaultFlavor === f ? "selected" : "";
              return `<option value="${idx}" ${selected} ${disabled}>${escHtml(f)}${disabled ? " (Esgotat)" : ""}</option>`;
            })
            .join("")}
        </select>
      </div>
    `
    : p.flavor
      ? `<div class="modal-flavor">Sabor: <strong>${escHtml(p.flavor)}</strong></div>`
      : "";

  const currentFlavor = p.defaultFlavor || p.flavor;
  const displayFlavor = currentFlavor ? ` – ${currentFlavor}` : "";
  const defaultVariant = p.variants?.find(v => v.flavor === p.defaultFlavor);
  const initialImage = defaultVariant?.image || p.image;

  inner.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-box">
        <img id="modal-product-img" src="${escHtml(initialImage)}" alt="${escHtml(p.name)}" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70'" />
      </div>
      <div class="modal-info">
        ${p.isPack ? `<div class="modal-pack-badge">✨ Pack Recomanat</div>` : ''}
        <div class="modal-brand">${escHtml(p.brand || "")}</div>
        <div class="modal-name">${escHtml(p.name)}${escHtml(displayFlavor)}</div>
        ${quantity}
        ${flavorSelector}
        <span class="modal-status ${statusClass}">${p.in_stock ? "✓ En estoc" : "Esgotat"}</span>
        <div class="modal-desc" style="margin-top:10px;">${escHtml(p.description || "")}</div>
        ${p.price != null ? `<div class="modal-price">${p.price.toFixed(2).replace(".", ",")} €</div>` : ""}
        <div class="modal-actions" style="margin-top:20px;">
          ${p.isPack
            ? `<a href="https://wa.me/376645263?text=${encodeURIComponent(`Hola! M'interessa el ${p.name}`)}" target="_blank" rel="noopener" class="modal-btn-wa" style="font-size:1rem;padding:16px;">💬 Demanar per WhatsApp</a>`
            : `<button class="modal-btn-add" id="modal-add-btn" onclick="addToCart(event,'${escHtml(p.id)}')" ${p.in_stock ? "" : "disabled"} aria-label="Afegir al carret">
            ${p.in_stock ? "🛒 Afegir al carret" : "Esgotat"}
          </button>
          <a href="https://wa.me/376645263?text=${encodeURIComponent(`Hola! M'interessa: ${p.name}${displayFlavor}`)}" target="_blank" rel="noopener" class="modal-btn-wa">💬 Contactar per WhatsApp</a>`
          }
        </div>
      </div>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function updateModalFlavor(selectEl) {
  const modalAddBtn = document.getElementById("modal-add-btn");
  const modalImg = document.getElementById("modal-product-img");
  const modalName = document.querySelector(".modal-name");
  const modalStatus = document.querySelector(".modal-status");
  const inner = document.getElementById("modal-inner");

  const onclickAttr = inner?.querySelector(".modal-btn-add")?.getAttribute("onclick") || "";
  const idMatch = onclickAttr.match(/'([^']+)'/);
  if (!idMatch) return;

  const p = PRODUCTS.find((x) => x.id === idMatch[1]);
  if (!p || !p.variants) return;

  const idx = parseInt(selectEl.value, 10);
  const variant = p.variants[idx];
  if (!variant) return;

  p.defaultFlavor = variant.flavor;

  if (modalImg) modalImg.src = variant.image || p.image;
  if (modalName) modalName.textContent = `${p.name} – ${variant.flavor}`;

  if (variant.in_stock) {
    if (modalStatus) {
      modalStatus.textContent = "✓ En estoc";
      modalStatus.className = "modal-status status-in";
    }
    if (modalAddBtn) {
      modalAddBtn.disabled = false;
      modalAddBtn.textContent = "🛒 Afegir al carret";
    }
  } else {
    if (modalStatus) {
      modalStatus.textContent = "Esgotat";
      modalStatus.className = "modal-status status-out";
    }
    if (modalAddBtn) {
      modalAddBtn.disabled = true;
      modalAddBtn.textContent = "Esgotat";
    }
  }
}

function closeModal() {
  const o = document.getElementById("modal-overlay");
  if (o) o.classList.remove("open");
  document.body.style.overflow = "";
}

// ===== CART SIDEBAR =====
function openCart() {
  const panel = document.getElementById("cart-panel");
  const overlay = document.getElementById("cart-overlay");
  if (!panel || !overlay) return;

  renderCartItems();
  panel.classList.add("open");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-panel")?.classList.remove("open");
  document.getElementById("cart-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ===== INIT ALL =====
function initShared() {
  updatePageTranslations();
  updateCartBadge();
  initNavbarScroll();

  document.getElementById("cart-toggle")?.addEventListener("click", openCart);
  document.getElementById("cart-close")?.addEventListener("click", closeCart);
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);

  document.getElementById("modal-close")?.addEventListener("click", closeModal);
  document.getElementById("modal-overlay")?.addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCart();
    }
  });

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.innerHTML = navLinks.classList.contains("open") ? "&times;" : "&#9776;";
    });

    navLinks.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.innerHTML = "&#9776;";
      });
    });
  }

  const searchToggle = document.getElementById("search-toggle-mobile");
  const searchBar = document.getElementById("mobile-search-bar");
  const mobileInput = document.getElementById("mobile-search-input");

  if (searchToggle && searchBar) {
    searchToggle.addEventListener("click", () => {
      searchBar.classList.toggle("open");
      if (searchBar.classList.contains("open")) mobileInput?.focus();
    });

    mobileInput?.addEventListener("input", (e) => {
      const searchInput = document.getElementById("search-input");
      if (searchInput) {
        searchInput.value = e.target.value;
        searchInput.dispatchEvent(new Event("input"));
      }
    });
  }

  document.getElementById("discount-input")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") applyDiscount();
  });
}
