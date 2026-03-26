// =============================================
// shared.js \u2013 Shared functionality across pages
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
    hero_subtitle: "Som el teu partner fitness a Andorra. Productes de qualitat, assessorament expert i resultats",
    hero_cta: "Veure productes",
    home_featured: "Productes destacats",
    home_mes: "m\u00e9s venuts",
    home_cat_title: "Categories",
    home_products_count: "productes",
    
    // Products
    products_title: "Botiga",
    products_subtitle: "M\u00e9s de 500 productes de les millors marques",
    products_search: "Cerca productes...",
    products_filter: "Filtrar",
    products_sort: "Ordenar per",
    products_sort_default: "Ordenar per",
    products_sort_price_asc: "Preu: menor a major",
    products_sort_price_desc: "Preu: major a menor",
    products_sort_name: "Nom A-Z",
    products_stock: "Nom\u00e9s en stock",
    products_no_results: "No s'han trobat productes",
    products_contact: "Contacta'ns per WhatsApp",
    products_count: "producte",
    products_count_plural: "productes",
    products_loading: "Carregant productes...",
    products_from_shopify: "Carregant productes de Shopify...",
    
    // Product Card
    product_in_stock: "En estoc",
    product_out_stock: "Esgotat",
    product_add: "Afegir \ud83d\uded2",
    product_format: "Format:",
    product_flavors: "sabors disponibles",
    
    // Modal
    modal_close: "Tancar",
    modal_add_cart: "Afegir al carret",
    modal_contact_wa: "Contactar per WhatsApp",
    
    // Cart
    cart_title: "El teu carret",
    cart_empty: "El teu carret \u00e9s buit \ud83d\uded2",
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
    
    // Services (Assessoria)
    services_title: "Els nostres serveis",
    services_subtitle: "T'oferim tot el que necessites per assolir els teus objectius",
    service_contact: "Contactar ara \u2192",
    service_book: "Reservar ara \u2192",
    
    // Contact
    contact_title: "Contacte",
    contact_address: "Carrer Esteve Dolsa 15, Andorra la Vella",
    contact_phone: "376 645 263",
    contact_email: "info@nlvipnutrition.com",
    
    // Footer
    footer_links: "Enlla\u00e7os r\u00e0pids",
    footer_products: "Productes",
    footer_contact: "Contacte",
    footer_legal: "Av\u00eds legal",
    footer_copyright: "\u00a9 2026 NL VIP Nutrition Andorra",
    
    // Misc
    loading: "Carregant...",
    error: "Error",
    close: "Tancar",
    cancel: "Cancel\u00b7lar",
    confirm: "Confirmar",
    yes: "S\u00ed",
    no: "No",
    
    // Categories
    cat_all: "Tots els productes",
    cat_proteinas: "Prote\u00efnes",
    cat_creatina: "Creatina",
    cat_preworkout: "Pre-Workout",
    cat_massgainer: "Mass Gainer",
    cat_vitaminas: "Vitamines",
    cat_alimentacion: "Alimentaci\u00f3",
    cat_controlpeso: "Control de Pes",
    cat_carbohidratos: "Carbohidrats",
    cat_prehormonal: "Prehormonal",
    
    // Checkout
    checkout_title: "Finalitzar comanda",
    checkout_redirecting: "Redirigint al checkout...",
    checkout_error: "Error al crear el checkout",
    
    // Search
    search_placeholder: "Cercar productes...",
    search_no_results: "No s'han trobat productes",
    search_view_all: "Veure tots els resultats",

    // Home page new keys
top_strip_shipping: "Enviament gratu\u00eft per compres superiors a 70\u20ac",
top_strip_store: "Botiga f\u00edsica: Carrer Esteve Dolsa 15, Andorra",
hero_eyebrow: "Nova col\u00b7lecci\u00f3 2026",
hero_title_1: "Supera",
hero_title_2: "els teus",
hero_title_3: "l\u00edmits",
hero_desc: "La botiga de suplements esportius n\u00famero 1 a Andorra. Prote\u00efnes, creatina, pre-workout i molt m\u00e9s de les millors marques del m\u00f3n.",
hero_notice: "Tenim molts m\u00e9s productes dels que apareixen a la web. Escriu-nos per WhatsApp \u2192",
hero_cta_shop: "Explorar productes",
hero_cta_wa: "Assessorament gratu\u00eft",
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
featured_title_2: "m\u00e9s venuts",
featured_see_all: "Veure tots \u2192",
nxt_tag: "Suplement Premium",
nxt_title: "La prote\u00efna de vedella pura",
nxt_desc: "NXT Beef Protein Isolate \u2014 27g de prote\u00efna per servei, sense lactosa, sense greix.",
nxt_feat1: "27g prote\u00efna / servei",
nxt_feat2: "Sense lactosa \u00b7 Baix en greix",
nxt_feat3: "Multiple sabors disponibles",
nxt_feat4: "Disponible a la botiga ara",
nxt_cta1: "Veure producte",
nxt_cta2: "Consulta disponibilitat",
why_tag: "Per qu\u00e8 nosaltres",
why_title: "La difer\u00e8ncia NL VIP",
why_sub: "M\u00e9s que una botiga. Som el teu company d'entrenament a Andorra.",
why_1_title: "Qualitat garantida",
why_1_desc: "Treballem \u00fanicament amb marques de confian\u00e7a internacional",
why_2_title: "Assessorament expert",
why_2_desc: "El nostre equip t'ajuda a triar el producte perfecte per als teus objectius",
why_3_title: "Botiga f\u00edsica a Andorra",
why_3_desc: "Vine a veure'ns al Carrer Esteve Dolsa 15 i prova-ho en persona",
why_4_title: "WhatsApp 24h",
why_4_desc: "Escriu-nos i et respondrem personalment amb consells i disponibilitat",
why_badge: "clients satisfets",
wa_cta_title: "No trobes el que busques?",
wa_cta_desc: "Tenim molts m\u00e9s productes dels que apareixen a la web. Contacta'ns per WhatsApp i t'assessorem personalment.",
wa_cta_btn: "Escriu-nos ara",
wa_cta_catalog: "Veure cat\u00e0leg complet",
footer_desc: "La teva botiga de suplements esportius de confian\u00e7a a Andorra.",
footer_products_title: "Productes",
footer_company_title: "Empresa",
footer_about: "Sobre nosaltres",
footer_rights: "Tots els drets reservats",
cart_total_label: "Total:",
cart_checkout_btn: "Finalitzar compra a Shopify \ud83d\uded2",
  
  },
  
  es: {
    // Navigation
    nav_inici: "Inicio",
    nav_productes: "Productos",
    nav_nosaltres: "Nosotros",
    nav_assessoria: "Asesor\u00eda",
    nav_contacte: "Contacto",
    
    // Home
    hero_title: "Alcanza tus objetivos",
    hero_subtitle: "Somos tu partner fitness en Andorra. Productos de calidad, asesoramiento experto y resultados garantizados",
    hero_cta: "Ver productos",
    home_featured: "Productos destacados",
    home_mes: "m\u00e1s vendidos",
    home_cat_title: "Categor\u00edas",
    home_products_count: "productos",
    
    // Products
    products_title: "Tienda",
    products_subtitle: "M\u00e1s de 500 productos de las mejores marcas",
    products_search: "Buscar productos...",
    products_filter: "Filtrar",
    products_sort: "Ordenar por",
    products_sort_default: "Ordenar por",
    products_sort_price_asc: "Precio: menor a mayor",
    products_sort_price_desc: "Precio: mayor a menor",
    products_sort_name: "Nombre A-Z",
    products_stock: "Solo en stock",
    products_no_results: "No se han encontrado productos",
    products_contact: "Cont\u00e1ctanos por WhatsApp",
    products_count: "producto",
    products_count_plural: "productos",
    products_loading: "Cargando productos...",
    products_from_shopify: "Cargando productos de Shopify...",
    
    // Product Card
    product_in_stock: "En stock",
    product_out_stock: "Agotado",
    product_add: "A\u00f1adir \ud83d\uded2",
    product_format: "Formato:",
    product_flavors: "sabores disponibles",
    
    // Modal
    modal_close: "Cerrar",
    modal_add_cart: "A\u00f1adir al carrito",
    modal_contact_wa: "Contactar por WhatsApp",
    
    // Cart
    cart_title: "Tu carrito",
    cart_empty: "Tu carrito est\u00e1 vac\u00edo \ud83d\uded2",
    cart_subtotal: "Subtotal",
    cart_discount: "Descuento",
    cart_total: "Total",
    cart_checkout: "Finalizar pedido",
    cart_continue: "Seguir comprando",
    cart_remove: "Eliminar",
    cart_coupon: "C\u00f3digo de descuento",
    cart_coupon_placeholder: "Introduce el c\u00f3digo",
    cart_coupon_apply: "Aplicar",
    cart_coupon_remove: "Quitar",
    
    // Services (Assessoria)
    services_title: "Nuestros servicios",
    services_subtitle: "Te oferecemos todo lo que necesitas para alcanzar tus objetivos",
    service_contact: "Contactar ahora \u2192",
    service_book: "Reservar ahora \u2192",
    
    // Contact
    contact_title: "Contacto",
    contact_address: "Carrer Esteve Dolsa 15, Andorra la Vella",
    contact_phone: "376 645 263",
    contact_email: "info@nlvipnutrition.com",
    
    // Footer
    footer_links: "Enlaces r\u00e1pidos",
    footer_products: "Productos",
    footer_contact: "Contacto",
    footer_legal: "Aviso legal",
    footer_copyright: "\u00a9 2026 NL VIP Nutrition Andorra",
    
    // Misc
    loading: "Cargando...",
    error: "Error",
    close: "Cerrar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    yes: "S\u00ed",
    no: "No",
    
    // Categories
    cat_all: "Todos los productos",
    cat_proteinas: "Prote\u00ednas",
    cat_creatina: "Creatina",
    cat_preworkout: "Pre-Workout",
    cat_massgainer: "Mass Gainer",
    cat_vitaminas: "Vitaminas",
    cat_alimentacion: "Alimentaci\u00f3n",
    cat_controlpeso: "Control de Peso",
    cat_carbohidratos: "Carbohidratos",
    cat_prehormonal: "Prehormonal",
    
    // Checkout
    checkout_title: "Finalizar pedido",
    checkout_redirecting: "Redirigiendo al checkout...",
    checkout_error: "Error al crear el pedido",

    // Search
    search_placeholder: "Buscar productos...",
    search_no_results: "No se encontraron productos",
    search_view_all: "Ver todos los resultados",

    // Home page new keys
top_strip_shipping: "Env\u00edo gratuito en compras superiores a 70\u20ac",
top_strip_store: "Tienda f\u00edsica: Carrer Esteve Dolsa 15, Andorra",
hero_eyebrow: "Nueva colecci\u00f3n 2026",
hero_title_1: "Supera",
hero_title_2: "tus",
hero_title_3: "l\u00edmites",
hero_desc: "La tienda de suplementos deportivos n\u00famero 1 en Andorra. Prote\u00ednas, creatina, pre-workout y mucho m\u00e1s de las mejores marcas del mundo.",
hero_notice: "Tenemos muchos m\u00e1s productos de los que aparecen en la web. Escr\u00edbenos por WhatsApp \u2192",
hero_cta_shop: "Explorar productos",
hero_cta_wa: "Asesoramiento gratuito",
stat_products: "Productos",
stat_clients: "Clientes",
stat_quality: "Calidad",
cats_tag: "Categor\u00edas",
cats_title: "Explora por",
cats_highlight: "categor\u00eda",
cats_sub: "Encuentra exactamente lo que necesitas para tus objetivos deportivos",
cat_products: "productos",
featured_tag: "Destacados",
featured_title: "Productos",
featured_title_2: "m\u00e1s vendidos",
featured_see_all: "Ver todos \u2192",
nxt_tag: "Suplemento Premium",
nxt_title: "La prote\u00edna de ternera pura",
nxt_desc: "NXT Beef Protein Isolate \u2014 27g de prote\u00edna por servicio, sin lactosa, sin grasa.",
nxt_feat1: "27g prote\u00edna / servicio",
nxt_feat2: "Sin lactosa \u00b7 Bajo en grasa",
nxt_feat3: "M\u00faltiples sabores disponibles",
nxt_feat4: "Disponible en la tienda ahora",
nxt_cta1: "Ver producto",
nxt_cta2: "Consultar disponibilidad",
why_tag: "Por qu\u00e9 nosotros",
why_title: "La diferencia NL VIP",
why_sub: "M\u00e1s que una tienda. Somos tu compa\u00f1ero de entrenamiento en Andorra.",
why_1_title: "Calidad garantizada",
why_1_desc: "Trabajamos \u00fanicamente con marcas de confianza internacional",
why_2_title: "Asesoramiento experto",
why_2_desc: "Nuestro equipo te ayuda a elegir el producto perfecto para tus objetivos",
why_3_title: "Tienda f\u00edsica en Andorra",
why_3_desc: "Vis\u00edtanos en Carrer Esteve Dolsa 15 y pru\u00e9balo en persona",
why_4_title: "WhatsApp 24h",
why_4_desc: "Escr\u00edbenos y te responderemos personalmente con consejos y disponibilidad",
why_badge: "clientes satisfechos",
wa_cta_title: "\u00bfNo encuentras lo que buscas?",
wa_cta_desc: "Tenemos muchos m\u00e1s productos de los que aparecen en la web. Cont\u00e1ctanos por WhatsApp y te asesoramos personalmente.",
wa_cta_btn: "Escr\u00edbenos ahora",
wa_cta_catalog: "Ver cat\u00e1logo completo",
footer_desc: "Tu tienda de suplementos deportivos de confianza en Andorra.",
footer_products_title: "Productos",
footer_company_title: "Empresa",
footer_about: "Sobre nosotros",
footer_rights: "Todos los derechos reservados",
cart_total_label: "Total:",
cart_checkout_btn: "Finalizar compra en Shopify \ud83d\uded2", 
},
  
  fr: {
    // Navigation
    nav_inici: "Accueil",
    nav_productes: "Produits",
    nav_nosaltres: "Nous",
    nav_assessoria: "Conseil",
    nav_contacte: "Contact",
    
    // Home
    hero_title: "Atteignez vos objectifs",
    hero_subtitle: "Nous sommes votre partenaire fitness en Andorre. Produits de qualit\u00e9, conseils experts et r\u00e9sultats garantis",
    hero_cta: "Voir les produits",
    home_featured: "Produits en vedette",
    home_mes: "les plus vendus",
    home_cat_title: "Cat\u00e9gories",
    home_products_count: "produits",
    
    // Products
    products_title: "Boutique",
    products_subtitle: "Plus de 500 produits des meilleures marques",
    products_search: "Rechercher des produits...",
    products_filter: "Filtrer",
    products_sort: "Trier par",
    products_sort_default: "Trier par",
    products_sort_price_asc: "Prix: croissant",
    products_sort_price_desc: "Prix: d\u00e9croissant",
    products_sort_name: "Nom A-Z",
    products_stock: "En stock uniquement",
    products_no_results: "Aucun produit trouv\u00e9",
    products_contact: "Contactez-nous par WhatsApp",
    products_count: "produit",
    products_count_plural: "produits",
    products_loading: "Chargement des produits...",
    products_from_shopify: "Chargement des produits depuis Shopify...",
    
    // Product Card
    product_in_stock: "En stock",
    product_out_stock: "\u00c9puis\u00e9",
    product_add: "Ajouter \ud83d\uded2",
    product_format: "Format:",
    product_flavors: "saveurs disponibles",
    
    // Modal
    modal_close: "Fermer",
    modal_add_cart: "Ajouter au panier",
    modal_contact_wa: "Contacter par WhatsApp",
    
    // Cart
    cart_title: "Votre panier",
    cart_empty: "Votre panier est vide \ud83d\uded2",
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
    
    // Services (Assessoria)
    services_title: "Nos services",
    services_subtitle: "Nous vous proposons tout ce dont vous avez besoin pour atteindre vos objectifs",
    service_contact: "Contacter maintenant \u2192",
    service_book: "R\u00e9server maintenant \u2192",
    
    // Contact
    contact_title: "Contact",
    contact_address: "Carrer Esteve Dolsa 15, Andorra la Vella",
    contact_phone: "376 645 263",
    contact_email: "info@nlvipnutrition.com",
    
    // Footer
    footer_links: "Liens rapides",
    footer_products: "Produits",
    footer_contact: "Contact",
    footer_legal: "Mentions l\u00e9gales",
    footer_copyright: "\u00a9 2026 NL VIP Nutrition Andorra",
    
    // Misc
    loading: "Chargement...",
    error: "Erreur",
    close: "Fermer",
    cancel: "Annuler",
    confirm: "Confirmer",
    yes: "Oui",
    no: "Non",
    
    // Categories
    cat_all: "Tous les produits",
    cat_proteinas: "Prot\u00e9ines",
    cat_creatina: "Cr\u00e9atine",
    cat_preworkout: "Pre-Workout",
    cat_massgainer: "Mass Gainer",
    cat_vitaminas: "Vitamines",
    cat_alimentacion: "Alimentation",
    cat_controlpeso: "Contr\u00f4le du poids",
    cat_carbohydrates: "Glucides",
    cat_prehormonal: "Pr\u00e9-hormonal",
    
    // Checkout
    checkout_title: "Finaliser la commande",
    checkout_redirecting: "Redirection vers le checkout...",
    checkout_error: "Erreur lors de la cr\u00e9ation du checkout",

    // Search
    search_placeholder: "Rechercher des produits...",
    search_no_results: "Aucun produit trouv\u00e9",
    search_view_all: "Voir tous les r\u00e9sultats",

    // Home page new keys
  top_strip_shipping: "Livraison gratuite pour les achats sup\u00e9rieurs \u00e0 70\u20ac",
top_strip_store: "Boutique physique: Carrer Esteve Dolsa 15, Andorre",
hero_eyebrow: "Nouvelle collection 2026",
hero_title_1: "D\u00e9passez",
hero_title_2: "vos",
hero_title_3: "limites",
hero_desc: "La boutique de suppl\u00e9ments sportifs num\u00e9ro 1 en Andorre. Prot\u00e9ines, cr\u00e9atine, pre-workout et bien plus des meilleures marques du monde.",
hero_notice: "Nous avons beaucoup plus de produits que ceux qui apparaissent sur le site. \u00c9crivez-nous sur WhatsApp \u2192",
hero_cta_shop: "Explorer les produits",
hero_cta_wa: "Conseil gratuit",
stat_products: "Produits",
stat_clients: "Clients",
stat_quality: "Qualit\u00e9",
cats_tag: "Cat\u00e9gories",
cats_title: "Explorez par",
cats_highlight: "cat\u00e9gorie",
cats_sub: "Trouvez exactement ce dont vous avez besoin pour vos objectifs sportifs",
cat_products: "produits",
featured_tag: "En vedette",
featured_title: "Produits",
featured_title_2: "les plus vendus",
featured_see_all: "Voir tout \u2192",
nxt_tag: "Suppl\u00e9ment Premium",
nxt_title: "La prot\u00e9ine de b\u0153uf pure",
nxt_desc: "NXT Beef Protein Isolate \u2014 27g de prot\u00e9ine par portion, sans lactose, sans graisse.",
nxt_feat1: "27g prot\u00e9ine / portion",
nxt_feat2: "Sans lactose \u00b7 Faible en gras",
nxt_feat3: "Plusieurs saveurs disponibles",
nxt_feat4: "Disponible en boutique maintenant",
nxt_cta1: "Voir le produit",
nxt_cta2: "Consulter la disponibilit\u00e9",
why_tag: "Pourquoi nous",
why_title: "La diff\u00e9rence NL VIP",
why_sub: "Plus qu'une boutique. Nous sommes votre partenaire d'entra\u00eenement en Andorre.",
why_1_title: "Qualit\u00e9 garantie",
why_1_desc: "Nous travaillons uniquement avec des marques de confiance internationale",
why_2_title: "Conseil expert",
why_2_desc: "Notre \u00e9quipe vous aide \u00e0 choisir le produit parfait pour vos objectifs",
why_3_title: "Boutique physique en Andorre",
why_3_desc: "Venez nous voir au Carrer Esteve Dolsa 15 et essayez en personne",
why_4_title: "WhatsApp 24h",
why_4_desc: "\u00c9crivez-nous et nous vous r\u00e9pondrons personnellement avec des conseils",
why_badge: "clients satisfaits",
wa_cta_title: "Vous ne trouvez pas ce que vous cherchez?",
wa_cta_desc: "Nous avons beaucoup plus de produits. Contactez-nous sur WhatsApp et nous vous conseillons personnellement.",
wa_cta_btn: "\u00c9crivez-nous maintenant",
wa_cta_catalog: "Voir le catalogue complet",
footer_desc: "Votre boutique de suppl\u00e9ments sportifs de confiance en Andorre.",
footer_products_title: "Produits",
footer_company_title: "Entreprise",
footer_about: "\u00c0 propos de nous",
footer_rights: "Tous droits r\u00e9serv\u00e9s",
cart_total_label: "Total:",
cart_checkout_btn: "Finaliser l'achat sur Shopify \ud83d\uded2",
  },
  
  en: {
    // Navigation
    nav_inici: "Home",
    nav_productes: "Products",
    nav_nosaltres: "About us",
    nav_assessoria: "Coaching",
    nav_contacte: "Contact",
    
    // Home
    hero_title: "Achieve your goals",
    hero_subtitle: "We are your fitness partner in Andorra. Quality products, expert advice and guaranteed results",
    hero_cta: "View products",
    home_featured: "Featured products",
    home_mes: "best sellers",
    home_cat_title: "Categories",
    home_products_count: "products",
    
    // Products
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
    
    // Product Card
    product_in_stock: "In stock",
    product_out_stock: "Out of stock",
    product_add: "Add \ud83d\uded2",
    product_format: "Format:",
    product_flavors: "flavors available",
    
    // Modal
    modal_close: "Close",
    modal_add_cart: "Add to cart",
    modal_contact_wa: "Contact on WhatsApp",
    
    // Cart
    cart_title: "Your cart",
    cart_empty: "Your cart is empty \ud83d\uded2",
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
    
    // Services (Assessoria)
    services_title: "Our services",
    services_subtitle: "We offer everything you need to achieve your goals",
    service_contact: "Contact now \u2192",
    service_book: "Book now \u2192",
    
    // Contact
    contact_title: "Contact",
    contact_address: "Carrer Esteve Dolsa 15, Andorra la Vella",
    contact_phone: "376 645 263",
    contact_email: "info@nlvipnutrition.com",
    
    // Footer
    footer_links: "Quick links",
    footer_products: "Products",
    footer_contact: "Contact",
    footer_legal: "Legal notice",
    footer_copyright: "\u00a9 2026 NL VIP Nutrition Andorra",
    
    // Misc
    loading: "Loading...",
    error: "Error",
    close: "Close",
    cancel: "Cancel",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",
    
    // Categories
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
    
    // Checkout
    checkout_title: "Checkout",
    checkout_redirecting: "Redirecting to checkout...",
    checkout_error: "Error creating checkout",

    // Search
    search_placeholder: "Search products...",
    search_no_results: "No products found",
    search_view_all: "View all results",

    // Home page new keys
 top_strip_shipping: "Free shipping on orders over \u20ac70",
top_strip_store: "Physical store: Carrer Esteve Dolsa 15, Andorra",
hero_eyebrow: "New collection 2026",
hero_title_1: "Exceed",
hero_title_2: "your",
hero_title_3: "limits",
hero_desc: "The number 1 sports supplement store in Andorra. Proteins, creatine, pre-workout and much more from the best brands in the world.",
hero_notice: "We have many more products than those shown on the web. Write to us on WhatsApp \u2192",
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
featured_see_all: "See all \u2192",
nxt_tag: "Premium Supplement",
nxt_title: "The pure beef protein",
nxt_desc: "NXT Beef Protein Isolate \u2014 27g of protein per serving, lactose-free, fat-free.",
nxt_feat1: "27g protein / serving",
nxt_feat2: "Lactose-free \u00b7 Low in fat",
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
wa_cta_title: "Can't find what you're looking for?",
wa_cta_desc: "We have many more products than those on the web. Contact us on WhatsApp and we'll advise you personally.",
wa_cta_btn: "Write to us now",
wa_cta_catalog: "View full catalogue",
footer_desc: "Your trusted sports supplement store in Andorra.",
footer_products_title: "Products",
footer_company_title: "Company",
footer_about: "About us",
footer_rights: "All rights reserved",
cart_total_label: "Total:",
cart_checkout_btn: "Checkout on Shopify \ud83d\uded2",
  }
};

// Current language
let currentLang = localStorage.getItem('nlvip_lang') || 'ca';

function t(key) {
  return translations[currentLang]?.[key] || translations['ca'][key] || key;
}

function changeLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('nlvip_lang', lang);
    updatePageTranslations();
  }
}

function updatePageTranslations() {
  const lang = localStorage.getItem('nlvip_lang') || 'ca';
  
  // Translate [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (translation && translation !== key) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Translate placeholders [data-i18n-placeholder]
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = t(key);
    if (translation && translation !== key) el.placeholder = translation;
  });

  // Update document title and meta description
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    const translation = t(key);
    if (translation && translation !== key) document.title = translation;
  }

  const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
  if (metaDesc) {
    const key = metaDesc.getAttribute('data-i18n');
    const translation = t(key);
    if (translation && translation !== key) metaDesc.setAttribute('content', translation);
  }

  // Update language selector
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = currentLang;
  
  // Dispatch custom event for page-specific translations
  window.dispatchEvent(new CustomEvent('languageChanged'));
}

let cart = JSON.parse(localStorage.getItem('nlvip_cart') || '[]');

// ===== DISCOUNT CODES =====
// Format: 'CODE': { type: 'percent'|'fixed', value: <number>, label: <string> }
const DISCOUNT_CODES = {
  'NLVIP10':   { type: 'percent', value: 10, label: '-10%' },
  'NLVIP15':   { type: 'percent', value: 15, label: '-15%' },
  'BENVINGUT': { type: 'percent', value: 5,  label: '-5%' },
  'WELCOME5':  { type: 'fixed',   value: 5,  label: '-5,00 \u20ac' },
};

let activeDiscount = JSON.parse(localStorage.getItem('nlvip_discount') || 'null');

function saveDiscount() {
  localStorage.setItem('nlvip_discount', JSON.stringify(activeDiscount));
}

function calcCartSubtotal() {
  return cart.reduce((s, i) => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return s + (p ? p.price * (i.qty || 1) : 0);
  }, 0);
}

function calcDiscount(subtotal) {
  if (!activeDiscount) return 0;
  const dc = DISCOUNT_CODES[activeDiscount];
  if (!dc) return 0;
  if (dc.type === 'percent') return subtotal * (dc.value / 100);
  if (dc.type === 'fixed')   return Math.min(dc.value, subtotal);
  return 0;
}

function applyDiscount() {
  const input = document.getElementById('discount-input');
  const msgEl = document.getElementById('discount-msg');
  if (!input || !msgEl) return;
  const code = input.value.trim().toUpperCase();
  if (!code) {
    msgEl.textContent = 'Introdueix un codi de descompte.';
    msgEl.className = 'discount-msg error';
    return;
  }
  if (DISCOUNT_CODES[code]) {
    activeDiscount = code;
    saveDiscount();
    input.value = '';
    msgEl.textContent = `\u2713 Codi "${code}" aplicat! (${DISCOUNT_CODES[code].label})`;
    msgEl.className = 'discount-msg success';
    updateCartBadge();
    renderCartItems();
  } else {
    msgEl.textContent = 'Codi de descompte no v\u00e0lid.';
    msgEl.className = 'discount-msg error';
  }
}

function removeDiscount() {
  activeDiscount = null;
  saveDiscount();
  const msgEl = document.getElementById('discount-msg');
  if (msgEl) { msgEl.textContent = ''; msgEl.className = 'discount-msg'; }
  const input = document.getElementById('discount-input');
  if (input) input.value = '';
  updateCartBadge();
  renderCartItems();
}

// ===== RENDER PRODUCT CARD =====
function renderCard(p) {
  const statusClass = p.in_stock ? 'status-in' : 'status-out';
  const statusText  = p.in_stock ? 'En estoc' : 'Esgotat';
  const qtyMatch = p.name.match(/(\d+[,.]?\d*\s*(g|gr|kg|ml|caps|c\u00e0psules|tablets|tabs|litres|l))/i);
  const quantity = qtyMatch ? `<div class="product-qty" style="color:var(--blue-light);font-size:0.85rem;margin-bottom:8px">Format: <strong>${qtyMatch[0].toLowerCase()}</strong></div>` : '';
  const priceStr = p.price != null ? p.price.toFixed(2).replace('.', ',') + ' \u20ac' : '';
  
  const hasFlavors = p.allFlavors && p.allFlavors.length > 0;
  const flavorText = hasFlavors ? `<div class="product-flavor" style="color:var(--text-2);font-size:0.85rem;">${p.allFlavors.length} sabors disponibles</div>` : (p.flavor ? `<div class="product-flavor">Sabor: ${escHtml(p.flavor)}</div>` : '');

  const productName = hasFlavors ? escHtml(p.name) : `${escHtml(p.name)}${p.flavor ? ' \u2013 ' + escHtml(p.flavor) : ''}`;

  return `
    <article class="product-card" onclick="openModal('${p.id}')" role="listitem" aria-label="${productName}" tabindex="0" onkeydown="if(event.key==='Enter')openModal('${p.id}')">
      <span class="product-status ${statusClass}">${statusText}</span>
      <div class="product-img">
        <img src="${escHtml(p.image)}" alt="${escHtml(p.name)}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70'" />
      </div>
      <div class="product-body">
        <div class="product-brand-tag">${escHtml(p.brand || '')}</div>
        <div class="product-name">${productName}</div>
        ${quantity}
        ${flavorText}
        ${priceStr ? `<div class="product-price">${priceStr}</div>` : ''}
        <div class="product-footer">
          <button class="btn-add-cart" onclick="addToCart(event,'${p.id}')" ${p.in_stock ? '' : 'disabled'} aria-label="Afegir ${productName} al carret">${p.in_stock ? 'Afegir \ud83d\uded2' : 'Esgotat'}</button>
          <a href="https://wa.me/376645263?text=${encodeURIComponent('Hola! Estic interessat en: ' + p.name)}" class="btn-ghost btn-wa-card" target="_blank" onclick="event.stopPropagation()" aria-label="Contactar per WhatsApp">\ud83d\udcac</a>
        </div>
      </div>
    </article>`;
}

function escHtml(s) {
  if (!s) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ===== CART =====
function addToCart(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || !p.in_stock) return;
  const flavor = p.defaultFlavor || p.flavor || null;
  const cartKey = flavor ? `${id}-${flavor}` : id;
  const ex = cart.find(i => (i.flavor ? `${i.id}-${i.flavor}` : i.id) === cartKey);
  if (ex) ex.qty = (ex.qty || 1) + 1;
  else cart.push({ id, qty: 1, flavor: flavor });
  saveCart();
  updateCartBadge();
  // Bounce animation on cart button
  const btn = document.getElementById('cart-toggle');
  if (btn) { btn.style.transform = 'scale(1.18)'; setTimeout(() => btn.style.transform = '', 200); }
}

function removeFromCart(id, flavor) {
  if (flavor) {
    cart = cart.filter(i => !(i.id === id && i.flavor === flavor));
  } else {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function saveCart() { localStorage.setItem('nlvip_cart', JSON.stringify(cart)); }

function updateCartBadge() {
  const count = cart.reduce((s, i) => s + (i.qty || 0), 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);

  const subtotal = calcCartSubtotal();
  const discount = calcDiscount(subtotal);
  const total    = subtotal - discount;

  // Subtotal line
  const subtotalEl = document.getElementById('cart-subtotal');
  if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2).replace('.', ',') + ' \u20ac';

  // Discount row
  const discountRow   = document.getElementById('cart-discount-row');
  const discountAmtEl = document.getElementById('cart-discount-amount');
  if (discountRow) discountRow.style.display = (activeDiscount && discount > 0) ? 'flex' : 'none';
  if (discountAmtEl && activeDiscount) {
    const dc = DISCOUNT_CODES[activeDiscount];
    discountAmtEl.textContent = `-${discount.toFixed(2).replace('.', ',')} \u20ac (${dc ? dc.label : activeDiscount})`;
  }

  // Applied code badge inside coupon section
  const codeBadge = document.getElementById('discount-applied-badge');
  if (codeBadge) {
    if (activeDiscount) {
      codeBadge.style.display = 'flex';
      const codeText = codeBadge.querySelector('.badge-code');
      if (codeText) codeText.textContent = activeDiscount;
    } else {
      codeBadge.style.display = 'none';
    }
  }

  // Final total
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = total.toFixed(2).replace('.', ',') + ' \u20ac';
}

function renderCartItems() {
  const el = document.getElementById('cart-items');
  if (!el) return;
  if (!cart.length) { el.innerHTML = '<div class="cart-empty-msg">El teu carret \u00e9s buit \ud83d\uded2</div>'; return; }
  el.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    const flavor = item.flavor || p.defaultFlavor || p.flavor;
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${escHtml(p.image)}" alt="${escHtml(p.name)}"
             onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&q=60'" />
        <div class="cart-item-info">
          <div class="cart-item-name">${escHtml(p.name)}${flavor ? ' \u2013 ' + escHtml(flavor) : ''}</div>
          <div class="cart-item-price">${(p.price * (item.qty || 1)).toFixed(2).replace('.', ',')} \u20ac \u00d7 ${item.qty || 1}</div>
        </div>
        <button class="btn-remove" onclick="removeFromCart('${item.id}', '${item.flavor || ''}')" aria-label="Eliminar ${escHtml(p.name)}">\ud83d\uddd1</button>
      </div>`;
  }).join('');
}

// ===== CHECKOUT =====
async function checkout() {
  if (!cart.length) return;
  
  // Use Shopify API to create checkout and redirect to payment
  await checkoutShopify();
}

async function checkoutShopify() {
  const checkoutBtn = document.querySelector('.btn-checkout');
  if (checkoutBtn) {
    checkoutBtn.disabled = true;
    checkoutBtn.textContent = t.checkout_redirecting || 'Redirigint...';
  }

  // Build checkout URL with line items
  const lineItems = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return null;
    
    let variantId = null;
    
    // Try to find the right variant
    if (p.variants && p.variants.length > 0) {
      if (item.flavor) {
        const variant = p.variants.find(v => v.flavor === item.flavor);
        if (variant) variantId = variant.id;
      }
      if (!variantId && p.defaultFlavor) {
        const variant = p.variants.find(v => v.flavor === p.defaultFlavor);
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
  }).filter(Boolean);

  console.log('Checkout lineItems:', lineItems);

  // Try API approach first
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
      lines: lineItems.map(item => ({
        merchandiseId: item.id,
        quantity: item.quantity
      }))
    }
  });
  
  if (data?.cartCreate?.cart?.checkoutUrl) {
    window.location.href = data.cartCreate.cart.checkoutUrl;
  } else {
    console.error('Cart error:', data?.cartCreate?.userErrors);
    alert('Error al procesar el pago. Int\u00e9ntalo de nuevo.');
    if (checkoutBtn) {
      checkoutBtn.disabled = false;
      checkoutBtn.textContent = 'Finalizar compra';
    }
  }
} catch(e) {
  console.error('Cart error:', e);
  alert('Error al procesar el pago. Int\u00e9ntalo de nuevo.');
}

  try {
    const data = await shopifyFetch(query, { input: { lineItems } });
    
    console.log('Checkout API response:', data);
    
    if (data?.checkoutCreate?.checkout?.webUrl) {
      window.location.href = data.checkoutCreate.checkout.webUrl;
      return;
    }
    
    // If API fails, show error
    const errors = data?.checkoutCreate?.checkoutUserErrors;
    console.error('Checkout errors:', errors);
    const errorMsg = errors && errors.length > 0 
      ? errors.map(e => e.message).join(', ') 
      : 'Error al crear el checkout';
    alert(errorMsg);
    
  } catch (e) {
    console.error('Checkout exception:', e);
    alert('Error al procesar el pago. Por favor, contacta con nosotros.');
  }
  
  // Reset button if failed
  if (checkoutBtn) {
    checkoutBtn.disabled = false;
    checkoutBtn.textContent = t.cart_checkout || 'Finalitzar comanda';
  }
}

// ===== CHECKOUT via WhatsApp (backup) =====
function checkoutWhatsApp() {
  if (!cart.length) return;
  const subtotal = calcCartSubtotal();
  const discount = calcDiscount(subtotal);
  const total    = subtotal - discount;

  const lines = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return null;
    const flavor = item.flavor || p.defaultFlavor || p.flavor;
    const name      = p.name + (flavor ? ` \u2013 ${flavor}` : '');
    const lineTotal = (p.price * (item.qty || 1)).toFixed(2).replace('.', ',');
    return `\u2022 ${name} \u00d7${item.qty || 1} \u2192 ${lineTotal} \u20ac`;
  }).filter(Boolean).join('\n');

  let msg = `Hola! Vull completar la meva comanda:\n\n${lines}\n\nSubtotal: ${subtotal.toFixed(2).replace('.', ',')} \u20ac`;
  if (activeDiscount && discount > 0) {
    msg += `\nDescompte (${activeDiscount}): -${discount.toFixed(2).replace('.', ',')} \u20ac`;
  }
  msg += `\nTOTAL: ${total.toFixed(2).replace('.', ',')} \u20ac`;

  window.open(`https://wa.me/376645263?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== MODAL =====
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const statusClass = p.in_stock ? 'status-in' : 'status-out';
  const overlay = document.getElementById('modal-overlay');
  const inner   = document.getElementById('modal-inner');
  if (!overlay || !inner) return;

  const qtyMatch = p.name.match(/(\d+[,.]?\d*\s*(g|gr|kg|ml|caps|c\u00e0psules|tablets|tabs|litros|l))/i);
  const quantity = qtyMatch ? `<div class="modal-flavor" style="color:var(--blue-light); margin-top:4px;">Format: <strong>${qtyMatch[0].toLowerCase()}</strong></div>` : '';

  const hasFlavors = p.allFlavors && p.allFlavors.length > 0;
  const flavorSelector = hasFlavors ? `
    <div class="modal-flavor" style="margin-top:12px;">
      <label style="color:var(--text-2);font-size:0.85rem;display:block;margin-bottom:6px;">Sabor:</label>
      <select id="modal-flavor-select" onchange="updateModalFlavor(this)" style="width:100%;padding:10px 14px;background:var(--bg-2);color:var(--white);border:1px solid var(--border);border-radius:8px;font-size:0.9rem;cursor:pointer;">
        ${p.allFlavors.map((f, idx) => {
          const variant = p.variants[idx];
          const disabled = variant && !variant.in_stock ? 'disabled' : '';
          const selected = p.defaultFlavor === f ? 'selected' : '';
          return `<option value="${idx}" ${selected} ${disabled}>${escHtml(f)}${disabled ? ' (Esgotat)' : ''}</option>`;
        }).join('')}
      </select>
    </div>
  ` : (p.flavor ? `<div class="modal-flavor">Sabor: <strong>${escHtml(p.flavor)}</strong></div>` : '');

  const currentFlavor = p.defaultFlavor || p.flavor;
  const displayFlavor = currentFlavor ? ` \u2013 ${currentFlavor}` : '';

  inner.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-box">
        <img id="modal-product-img" src="${escHtml(p.image)}" alt="${escHtml(p.name)}"
             onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70'" />
      </div>
      <div class="modal-info">
        <div class="modal-brand">${escHtml(p.brand || '')}</div>
        <div class="modal-name">${escHtml(p.name)}${displayFlavor}</div>
        ${quantity}
        ${flavorSelector}
        <span class="modal-status ${statusClass}">${p.in_stock ? '\u2713 En estoc' : 'Esgotat'}</span>
        <div class="modal-desc" style="margin-top:10px;">${escHtml(p.description || '')}</div>
        ${p.price != null ? `<div class="modal-price">${p.price.toFixed(2).replace('.', ',')} \u20ac</div>` : ''}
        <div class="modal-actions" style="margin-top:20px;">
          <button class="modal-btn-add" id="modal-add-btn" onclick="addToCart(event,'${p.id}')" ${p.in_stock ? '' : 'disabled'} aria-label="Afegir al carret">${p.in_stock ? '\ud83d\uded2 Afegir al carret' : 'Esgotat'}</button>
          <a href="https://wa.me/376645263?text=Hola!%20M%27interessa%3A%20${encodeURIComponent(p.name + displayFlavor)}" target="_blank" rel="noopener" class="modal-btn-wa">\ud83d\udcac Contactar per WhatsApp</a>
        </div>
      </div>
    </div>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateModalFlavor(selectEl) {
  const modalAddBtn = document.getElementById('modal-add-btn');
  const modalImg = document.getElementById('modal-product-img');
  const modalName = document.querySelector('.modal-name');
  const modalStatus = document.querySelector('.modal-status');
  
  const overlay = document.getElementById('modal-overlay');
  const inner = document.getElementById('modal-inner');
  const idMatch = inner.querySelector('.modal-btn-add')?.getAttribute('onclick')?.match(/'([^']+)'/);
  if (!idMatch) return;
  
  const p = PRODUCTS.find(x => x.id === idMatch[1]);
  if (!p || !p.variants) return;
  
  const idx = parseInt(selectEl.value);
  const variant = p.variants[idx];
  p.defaultFlavor = variant.flavor;
  
  if (modalImg) modalImg.src = variant.image;
  if (modalName) modalName.textContent = `${p.name} \u2013 ${variant.flavor}`;
  
  if (variant.in_stock) {
    if (modalStatus) {
      modalStatus.textContent = '\u2713 En estoc';
      modalStatus.className = 'modal-status status-in';
    }
    if (modalAddBtn) {
      modalAddBtn.disabled = false;
      modalAddBtn.textContent = '\ud83d\uded2 Afegir al carret';
    }
  } else {
    if (modalStatus) {
      modalStatus.textContent = 'Esgotat';
      modalStatus.className = 'modal-status status-out';
    }
    if (modalAddBtn) {
      modalAddBtn.disabled = true;
      modalAddBtn.textContent = 'Esgotat';
    }
  }
}

function closeModal() {
  const o = document.getElementById('modal-overlay');
  if (o) o.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== CART SIDEBAR =====
function openCart() {
  const panel   = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  if (!panel || !overlay) return;
  renderCartItems();
  panel.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-panel')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== GLOBAL SEARCH =====
let searchSelectedIndex = -1;

function initGlobalSearch() {
  const inputs = document.querySelectorAll('.global-search-input');
  
  inputs.forEach(input => {
    // Create results container if it doesn't exist
    let resultsContainer = input.parentElement.querySelector('.search-results-dropdown');
    if (!resultsContainer) {
      resultsContainer = document.createElement('div');
      resultsContainer.className = 'search-results-dropdown';
      input.parentElement.appendChild(resultsContainer);
    }

    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query.length < 2) {
        resultsContainer.classList.remove('open');
        return;
      }

      const matches = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) || 
        (p.brand && p.brand.toLowerCase().includes(query)) ||
        (p.category && p.category.toLowerCase().includes(query))
      ).slice(0, 6);

      renderSearchResults(matches, resultsContainer, query);
    });

    input.addEventListener('keydown', (e) => {
      const items = resultsContainer.querySelectorAll('.search-result-item');
      if (!resultsContainer.classList.contains('open') || items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        searchSelectedIndex = (searchSelectedIndex + 1) % items.length;
        updateSearchSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        searchSelectedIndex = (searchSelectedIndex - 1 + items.length) % items.length;
        updateSearchSelection(items);
      } else if (e.key === 'Enter' && searchSelectedIndex > -1) {
        e.preventDefault();
        items[searchSelectedIndex].click();
      } else if (e.key === 'Escape') {
        resultsContainer.classList.remove('open');
        input.blur();
      }
    });

    // Close on blur (delayed to allow clicks)
    input.addEventListener('blur', () => {
      setTimeout(() => {
        resultsContainer.classList.remove('open');
        searchSelectedIndex = -1;
      }, 200);
    });
    
    // Show results if input has value on focus
    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2) {
        input.dispatchEvent(new Event('input'));
      }
    });
  });
}

function renderSearchResults(results, container, query) {
  if (results.length === 0) {
    container.innerHTML = `<div class="search-no-results">${t('search_no_results')}</div>`;
  } else {
    container.innerHTML = results.map((p, idx) => `
      <div class="search-result-item" onclick="openModal('${p.id}')" data-index="${idx}">
        <img src="${escHtml(p.image)}" alt="${escHtml(p.name)}" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=50&q=60'">
        <div class="search-result-info">
          <div class="search-result-name">${highlightText(p.name, query)}</div>
          <div class="search-result-meta">${escHtml(p.brand || '')} \u2022 ${p.price.toFixed(2).replace('.', ',')} \u20ac</div>
        </div>
      </div>
    `).join('') + `
      <a href="products.html?search=${encodeURIComponent(query)}" class="search-view-all">${t('search_view_all')} \u2192</a>
    `;
  }
  container.classList.add('open');
  searchSelectedIndex = -1;
}

function updateSearchSelection(items) {
  items.forEach((item, idx) => {
    item.classList.toggle('selected', idx === searchSelectedIndex);
    if (idx === searchSelectedIndex) {
      item.scrollIntoView({ block: 'nearest' });
    }
  });
}

function highlightText(text, query) {
  if (!query) return escHtml(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return escHtml(text).replace(regex, '<mark>$1</mark>');
}

// ===== INIT ALL =====
function initShared() {
  updatePageTranslations();
  updateCartBadge();
  initNavbarScroll();
  initGlobalSearch();

  // Cart toggle
  document.getElementById('cart-toggle')?.addEventListener('click', openCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

  // Modal close
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeCart(); }
  });

  // Hamburger Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.textContent = navLinks.classList.contains('open') ? '\u2715' : '\u2630';
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.textContent = '\u2630';
      });
    });
  const searchToggle = document.getElementById('search-toggle-mobile');
const searchBar = document.getElementById('mobile-search-bar');
const mobileInput = document.getElementById('mobile-search-input');

if (searchToggle && searchBar) {
  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) mobileInput.focus();
  });
  
  mobileInput?.addEventListener('input', e => {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = e.target.value;
      searchInput.dispatchEvent(new Event('input'));
    }
  });
}
  }

  // Discount code \u2013 allow pressing Enter in the input
  document.getElementById('discount-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') applyDiscount();
  });
}
