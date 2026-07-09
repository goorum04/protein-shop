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
    home_title: "NL VIP Nutrition – Suplements Esportius a Andorra",
    products_title_seo: "Catàleg – NL VIP Nutrition Andorra",
    about_title_seo: "Nosaltres – NL VIP Nutrition",
    assessoria_title_seo: "Assessoria – NL VIP Nutrition",
    machines_title_seo: "Màquines – NL VIP Nutrition",
    search_placeholder: "Cerca productes...",
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
    cart_checkout_btn: "Finalizar compra",

    // About page
    about_hero_title_1: "La nostra",
    about_hero_title_2: "història",
    about_hero_sub: "Som especialistes en nutrició esportiva amb anys d'experiència a Andorra. La nostra missió: ajudar-te a assolir els teus objectius.",
    about_story_tag: "La nostra botiga",
    about_story_title_1: "La teva botiga de",
    about_story_title_2: "confiança",
    about_story_title_3: "a Andorra",
    about_story_sub: "Anys d'experiència en el sector de la nutrició esportiva ens avalen. Treballem amb les millors marques internacionals i t'oferim assessorament personalitzat per ajudar-te a aconseguir els teus objectius.",
    about_story_p1: "A NL VIP Nutrition trobaràs tot el que necessites per al teu entrenament: proteïnes, creatina, pre-workout, vitamines, alimentació esportiva i molt més. Amb més de <strong>500 productes</strong> disponibles i un equip humà especialitzat, som la referència en suplements esportius a Andorra.",
    about_story_p2: "Si no trobes el que busques a la web, escriu-nos per WhatsApp. Tenim molts més productes disponibles i t'assessorem personalment sense cap compromís.",
    about_stat_products: "Productes",
    about_stat_clients: "Clients",
    about_stat_quality: "Qualitat",
    about_media_subtitle: "NL VIP Nutrition · Andorra",
    about_values_tag: "Els nostres valors",
    about_values_title_1: "Per què",
    about_values_title_2: "NL VIP Nutrition",
    about_val1_title: "Qualitat garantida",
    about_val1_desc: "Només treballem amb marques premium de màxima confiança internacional",
    about_val2_title: "Assessorament expert",
    about_val2_desc: "El nostre equip especialitzat t'ajuda a triar el producte perfecte sense compromís",
    about_val3_title: "Millors preus",
    about_val3_desc: "Preus competitius gràcies a la fiscalitat d'Andorra i als nostres acords directes",
    about_val4_title: "Enviament ràpid",
    about_val4_desc: "Entrega en 24-48h a Andorra. Enviament gratuït per compres superiors a 70€",
    about_val5_title: "WhatsApp 24/7",
    about_val5_desc: "Escriu-nos en qualsevol moment i t'atendem personalment",
    about_val6_title: "Productes certificats",
    about_val6_desc: "Tots els nostres productes compleixen els estàndards de qualitat europeus",
    about_brands_tag: "Marques exclusives",
    about_brands_title_1: "Les millors",
    about_brands_title_2: "marques del món",
    about_brands_sub: "Treballem directament amb les marques més reconegudes del mercat internacional",
    about_contact_tag: "📍 Contacte",
    about_contact_title_1: "Vine a",
    about_contact_title_2: "visitar-nos",
    about_contact_sub: "Estem a Andorra esperant-te. Vine a la botiga o escriu-nos per WhatsApp.",
    about_addr_label: "Adreça",
    about_phone_label: "Telèfon",
    about_wa_label: "WhatsApp",
    about_wa_link: "Escriu-nos ara →",
    about_email_label: "Email",

    // Assessoria page
    assessoria_hero_title_1: "Assessorament",
    assessoria_hero_title_2: "personalitzat",
    assessoria_hero_sub: "T'oferim un assessorament integral per assolir els teus objectius fitness. Els nostres resultats parlen sols.",
    assessoria_services_tag: "💪 Els nostres serveis",
    assessoria_trainer_tag: "🏋️ Entrenador Personal Online",
    assessoria_trainer_name: "NACHO LOSTAO",
    assessoria_trainer_quote: '"Transforma el teu físic i la teva ment amb un entrenador real que t\'entén."',
    assessoria_before: "ABANS",
    assessoria_after: "DESPRÉS",
    assessoria_transf_title_1: "La transformació real",
    assessoria_transf_title_2: "de Nacho Lostao 💪",
    assessoria_transf_p1: "Sóc en <strong>Nacho</strong>, entrenador personal online especialitzat en <strong>transformació física i mental</strong>.",
    assessoria_transf_p2: "Jo també hi vaig ser, sense motivació i sense rumb. Fins que vaig entendre que el veritable canvi comença primer en la ment. Vaig transformar el meu cos, els meus hàbits i la meva forma de viure. I ara, em dedico a acompanyar els meus clients —i especialment a <strong>dones</strong>— a perdre greix, definir i tonificar el seu cos, de manera personalitzada, per aconseguir els seus objectius i sentir-se bé físicament i mentalment.",
    assessoria_transf_p3: "Només mètode, constància i resultats reals.",
    assessoria_online_tag: "Modalitat Online",
    assessoria_online_title: "SERVEI ONLINE — QUÈ INCLOU?",
    assessoria_inc1: '<strong style="color:var(--white);">Formulari previ</strong> a la trucada per conèixer-te millor, possibles al·lèrgies, intoleràncies i lesions.',
    assessoria_inc2: '<strong style="color:var(--white);">Entrenaments adaptats</strong> al teu nivell, temps i objectius.',
    assessoria_inc3: '<strong style="color:var(--white);">Pla nutricional flexible</strong> que encaixa amb la teva vida: receptes ràpides, fàcils i bones.',
    assessoria_inc4: '<strong style="color:var(--white);">Seguiment setmanal</strong> per WhatsApp i revisions 1:1.',
    assessoria_inc5: '<strong style="color:var(--white);">Ajustos constants</strong> segons els teus progressos i necessitats.',
    assessoria_inc6: '<strong style="color:var(--white);">Suport durant tot el procés.</strong> L\'acompanyament i la motivació són claus per aconseguir els teus objectius.',
    assessoria_cta_tag: "🚀 ¡Es tu momento!",
    assessoria_cta_title: "COMENÇA EL TEU CANVI ARA",
    assessoria_cta_desc: "Comença a sentir-te millor amb tu mateix, amb més energia i més fort física i mentalment. És el TEU moment.",
    assessoria_cta_btn: "RESERVA LA TEVA TRUCADA",
    assessoria_results_tag: "🏆 Resultats reals",
    assessoria_results_title_1: "Transforma el teu cos",
    assessoria_results_title_2: "amb professionals",
    assessoria_test1: '"En 3 mesos he canviat la meva forma de viure. Més energia, més confiança i un cos que mai hagués pensat."',
    assessoria_test1_author: "Blanca, sòcia de NLVIP CLUB",
    assessoria_test2: '"Mai havia fet esport i ara no puc viure\'n sense. Els resultats parlen sols."',
    assessoria_test2_author: "Maria, sòcia de NLVIP CLUB",
    assessoria_test3: '"Vaig començar sense saber res de fitness. Ara no puc imaginar la meva vida sense entrenar."',
    assessoria_test3_author: "Leticia, sòcia de NLVIP CLUB",
    assessoria_serv_tag: "✨ Els nostres serveis",
    assessoria_serv_title_1: "Tria el servei",
    assessoria_serv_title_2: "que necessites",
    assessoria_serv_sub: "T'oferim serveis integrals per assolir els teus objectius fitness. Tot el que necessites en un sol lloc.",
    assessoria_contact_btn: "Contactar ara →",
    assessoria_book_btn: "Reservar ara →",
    assessoria_serv1_title: "Entrenament Personalitzat + Assessoria Nutricional",
    assessoria_serv1_desc: "El servei complet per assolir els teus objectius fitness. Entrenament i nutrició personalitzats per obtenir els millors resultats.",
    assessoria_serv1_li1: "✓ Pla d'entrenament personalitzat",
    assessoria_serv1_li2: "✓ Pla de nutrició personalitzat",
    assessoria_serv1_li3: "✓ Seguiment setmanal",
    assessoria_serv1_li4: "✓ Missatgeria directa amb el teu coach",
    assessoria_serv1_li5: "✓ App d'entrenament",
    assessoria_serv1_li6: "✓ Avaluació i medicions corporals",
    assessoria_serv2_title: "Fisioteràpia i Massatges",
    assessoria_serv2_desc: "Recupera la teva mobilitat i oblida el dolor. Servei a domicili disponible.",
    assessoria_serv2_li1: "✓ Diagnòstic personalitzat",
    assessoria_serv2_li2: "✓ Tractament individualitzat",
    assessoria_serv2_li3: "✓ Exercicis de rehabilitació",
    assessoria_serv2_li4: "✓ Sessions de 60 minuts",
    assessoria_serv2_li5: "✓ Professionals altament qualificats",
    assessoria_serv2_li6: "✓ Flexibilitat d'horaris",
    assessoria_serv2_price_title: "💰 Tarifes a domicili",
    assessoria_serv3_title: "Chef a Domicili",
    assessoria_serv3_desc: "Menja saludable sense esforç.",
    assessoria_serv3_li1: "✓ Menú setmanal personalitzat",
    assessoria_serv3_li2: "✓ Compra inclosa",
    assessoria_serv3_li3: "✓ Cuinat a casa teva",
    assessoria_serv3_li4: "✓ Dietes per objectius específics",
    about_story_p1: 'A NL VIP Nutrition trobaràs tot el que necessites per al teu entrenament: proteïnes, creatina, pre-workout, vitamines, alimentació esportiva i molt més. Amb més de <strong style="color:var(--white)">500 productes</strong> disponibles i un equip humà especialitzat, som la referència en suplements esportius a Andorra.',
    about_story_p2: "Si no trobes el que busques a la web, escriu-nos per WhatsApp. Tenim molts més productes disponibles i t'assessorem personalment sense cap compromís.",

    // Machines page
    machines_hero_title_1: "Montem el teu",
    machines_hero_title_2: "gimnàs",
    machines_hero_title_3: "ideal",
    machines_hero_sub: "Particulars, empreses, hotels i comunitats. Cada projecte únic, adaptat a l'espai i als objectius del client.",
    machines_hero_cta1: "Sol·licitar pressupost",
    machines_hero_cta2: "Veure muntatges ↓",
    machines_stat1_label: "Gimnassos muntats",
    machines_stat2_label: "Dies de lliurament",
    machines_stat3_label: "A mida",
    machines_stat4_label: "Pressupost en 24h",
    machines_process_tag: "⚙️ Com treballem",
    machines_process_title_1: "El nostre",
    machines_process_title_2: "procés",
    machines_step1_title: "Ens escrius",
    machines_step1_desc: "Ens escrius, parlem amb tu i ens desplacem al lloc on es muntarà el gimnàs. Allà prenem mesures, analitzem l'espai i recollim la informació necessària per oferir-te la millor solució.",
    machines_step2_title: "T'enviem el pressupost",
    machines_step2_desc: "T'enviem un pressupost adaptat a les teves necessitats amb la distribució de l'equipament. No et preocupis si no saps quines màquines triar; t'assessorem i seleccionem les millors opcions.",
    machines_step3_title: "Muntatge en 10-12 dies",
    machines_step3_desc: "Un cop confirmat, en 10 a 12 dies hàbils tindràs les màquines instal·lades i llestes per usar. Ens ocupem de transport, duanes, muntatge i ajustos, deixant-ho tot preparat al teu espai.",
    machines_products_tag: "💪 Màquines i material",
    machines_products_title_1: "Què",
    machines_products_title_2: "venem",
    machines_gallery_tag: "📸 Galeria",
    machines_gallery_title_1: "Muntatges",
    machines_gallery_title_2: "reals",
    machines_gallery_sub: "Aquí tens una galeria d'imatges reals amb algunes de les màquines que oferim i diversos gimnassos que ja hem muntat.",
    machines_hero_tagline: "Més de 30 gimnassos muntats",
    machines_available: "Disponible ara",
    machines_cta: "Interessat en muntar el teu gimnàs?",
    machines_cta_desc: "Som especialistes en crear gimnassos a mida: des d'una petita sala d'entrenament a casa fins a grans espais d'entrenament professional.",
    machines_cta_btn: "Sol·licitar pressupost gratuït",
    assessoria_bottom_title: "Prepàra't per canviar",
    assessoria_bottom_desc: "Contacta'ns ara i comença la teva transformació. Els nostres professionals t'esperen.",

    // Products page
    products_wa_notice: "💬 Tenim molts més productes dels que apareixen a la web. Escriu-nos per WhatsApp →",
    products_hero_title_1: "Catàleg de",
    products_hero_title_2: "productes",
    products_hero_sub: "Més de 500 productes de les millors marques del mercat. Filtra per categoria i troba el que necessites.",

    // About meta
    about_meta_desc: "Coneix NL VIP Nutrition, la botiga de suplements esportius de referència a Andorra. Carrer Esteve Dolsa 15. Telèfon: 376 645 263. Assessorament personalitzat."
  },

  es: {
    nav_inici: "Inicio",
    nav_productes: "Productos",
    nav_nosaltres: "Nosotros",
    nav_assessoria: "Asesoría",
    nav_contacte: "Contacto",

    home_title: "NL VIP Nutrition – Suplementos Deportivos en Andorra",
    products_title_seo: "Catálogo – NL VIP Nutrition Andorra",
    about_title_seo: "Nosotros – NL VIP Nutrition",
    assessoria_title_seo: "Asesoría – NL VIP Nutrition",
    machines_title_seo: "Máquinas – NL VIP Nutrition",
    search_placeholder: "Buscar productos...",
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
    cart_checkout_btn: "Finalizar compra",

    // About page
    about_hero_title_1: "Nuestra",
    about_hero_title_2: "historia",
    about_hero_sub: "Somos especialistas en nutrición deportiva con años de experiencia en Andorra. Nuestra misión: ayudarte a alcanzar tus objetivos.",
    about_story_tag: "Nuestra tienda",
    about_story_title_1: "Tu tienda de",
    about_story_title_2: "confianza",
    about_story_title_3: "en Andorra",
    about_story_sub: "Años de experiencia en el sector de la nutrición deportiva nos avalan. Trabajamos con las mejores marcas internacionales y te ofrecemos asesoramiento personalizado.",
    about_story_p1: "En NL VIP Nutrition encontrarás todo lo que necesitas para tu entrenamiento: proteínas, creatina, pre-workout, vitaminas, alimentación deportiva y mucho más. Con más de <strong>500 productos</strong> disponibles y un equipo humano especializado, somos la referencia en suplementos deportivos en Andorra.",
    about_story_p2: "Si no encuentras lo que buscas en la web, escríbenos por WhatsApp. Tenemos muchos más productos disponibles y te asesoramos personalmente sin compromiso.",
    about_stat_products: "Productos",
    about_stat_clients: "Clientes",
    about_stat_quality: "Calidad",
    about_media_subtitle: "NL VIP Nutrition · Andorra",
    about_values_tag: "Nuestros valores",
    about_values_title_1: "¿Por qué",
    about_values_title_2: "NL VIP Nutrition",
    about_val1_title: "Calidad garantizada",
    about_val1_desc: "Solo trabajamos con marcas premium de máxima confianza internacional",
    about_val2_title: "Asesoramiento experto",
    about_val2_desc: "Nuestro equipo especializado te ayuda a elegir el producto perfecto sin compromiso",
    about_val3_title: "Mejores precios",
    about_val3_desc: "Precios competitivos gracias a la fiscalidad de Andorra y nuestros acuerdos directos",
    about_val4_title: "Envío rápido",
    about_val4_desc: "Entrega en 24-48h en Andorra. Envío gratuito para compras superiores a 70€",
    about_val5_title: "WhatsApp 24/7",
    about_val5_desc: "Escríbenos en cualquier momento y te atendemos personalmente",
    about_val6_title: "Productos certificados",
    about_val6_desc: "Todos nuestros productos cumplen los estándares de calidad europeos",
    about_brands_tag: "Marcas exclusivas",
    about_brands_title_1: "Las mejores",
    about_brands_title_2: "marcas del mundo",
    about_brands_sub: "Trabajamos directamente con las marcas más reconocidas del mercado internacional",
    about_contact_tag: "📍 Contacto",
    about_contact_title_1: "Ven a",
    about_contact_title_2: "visitarnos",
    about_contact_sub: "Estamos en Andorra esperándote. Ven a la tienda o escríbenos por WhatsApp.",
    about_addr_label: "Dirección",
    about_phone_label: "Teléfono",
    about_wa_label: "WhatsApp",
    about_wa_link: "Escríbenos ahora →",
    about_email_label: "Email",

    // Assessoria page
    assessoria_hero_title_1: "Asesoramiento",
    assessoria_hero_title_2: "personalizado",
    assessoria_hero_sub: "Te ofrecemos un asesoramiento integral para alcanzar tus objetivos fitness. Nuestros resultados hablan solos.",
    assessoria_services_tag: "💪 Nuestros servicios",
    assessoria_trainer_tag: "🏋️ Entrenador Personal Online",
    assessoria_trainer_name: "NACHO LOSTAO",
    assessoria_trainer_quote: '"Transforma tu físico y tu mente con un entrenador real que te entiende."',
    assessoria_before: "ANTES",
    assessoria_after: "DESPUÉS",
    assessoria_transf_title_1: "La transformación real",
    assessoria_transf_title_2: "de Nacho Lostao 💪",
    assessoria_transf_p1: "Soy <strong>Nacho</strong>, entrenador personal online especializado en <strong>transformación física y mental</strong>.",
    assessoria_transf_p2: "Yo también estuve ahí, sin motivación y sin rumbo. Hasta que entendí que el verdadero cambio empieza primero en la mente. Transformé mi cuerpo, mis hábitos y mi forma de vivir. Y ahora, me dedico a acompañar a mis clientes —y especialmente a <strong>mujeres</strong>— a perder grasa, definir y tonificar su cuerpo, de forma personalizada, para conseguir sus objetivos y sentirse bien física y mentalmente.",
    assessoria_transf_p3: "Solo método, constancia y resultados reales.",
    assessoria_online_tag: "Modalidad Online",
    assessoria_online_title: "SERVICIO ONLINE — ¿QUÉ INCLUYE?",
    assessoria_inc1: '<strong style="color:var(--white);">Formulario previo</strong> a la llamada para conocerte mejor, posibles alergias, intolerancias y lesiones.',
    assessoria_inc2: '<strong style="color:var(--white);">Entrenamientos adaptados</strong> a tu nivel, tiempo y objetivos.',
    assessoria_inc3: '<strong style="color:var(--white);">Plan nutricional flexible</strong> que encaja con tu vida: recetas rápidas, fáciles y buenas.',
    assessoria_inc4: '<strong style="color:var(--white);">Seguimiento semanal</strong> por WhatsApp y revisiones 1:1.',
    assessoria_inc5: '<strong style="color:var(--white);">Ajustes constantes</strong> según tus progresos y necesidades.',
    assessoria_inc6: '<strong style="color:var(--white);">Apoyo durante todo el proceso.</strong> El acompañamiento y la motivación son claves para conseguir tus objetivos.',
    assessoria_cta_tag: "🚀 ¡Es tu momento!",
    assessoria_cta_title: "EMPIEZA TU CAMBIO AHORA",
    assessoria_cta_desc: "Empieza a sentirte mejor contigo mismo, con más energía y más fuerte física y mentalmente. Es tu momento.",
    assessoria_cta_btn: "RESERVA TU LLAMADA",
    assessoria_results_tag: "🏆 Resultados reales",
    assessoria_results_title_1: "Transforma tu cuerpo",
    assessoria_results_title_2: "con profesionales",
    assessoria_test1: '"En 3 meses he cambiado mi forma de vivir. Más energía, más confianza y un cuerpo que nunca habría pensado."',
    assessoria_test1_author: "Blanca, socia de NLVIP CLUB",
    assessoria_test2: '"Nunca había hecho deporte y ahora no puedo vivir sin él. Los resultados hablan solos."',
    assessoria_test2_author: "Maria, socia de NLVIP CLUB",
    assessoria_test3: '"Empecé sin saber nada de fitness. Ahora no puedo imaginar mi vida sin entrenar."',
    assessoria_test3_author: "Leticia, socia de NLVIP CLUB",
    assessoria_serv_tag: "✨ Nuestros servicios",
    assessoria_serv_title_1: "Elige el servicio",
    assessoria_serv_title_2: "que necesitas",
    assessoria_serv_sub: "Te ofrecemos servicios integrales para alcanzar tus objetivos fitness. Todo lo que necesitas en un solo lugar.",
    assessoria_contact_btn: "Contactar ahora →",
    assessoria_book_btn: "Reservar ahora →",
    assessoria_serv1_title: "Entrenamiento Personalizado + Asesoría Nutricional",
    assessoria_serv1_desc: "El servicio completo para alcanzar tus objetivos fitness. Entrenamiento y nutrición personalizados para obtener los mejores resultados.",
    assessoria_serv1_li1: "✓ Plan de entrenamiento personalizado",
    assessoria_serv1_li2: "✓ Plan de nutrición personalizado",
    assessoria_serv1_li3: "✓ Seguimiento semanal",
    assessoria_serv1_li4: "✓ Mensajería directa con tu coach",
    assessoria_serv1_li5: "✓ App de entrenamiento",
    assessoria_serv1_li6: "✓ Evaluación y mediciones corporales",
    assessoria_serv2_title: "Fisioterapia y Masajes",
    assessoria_serv2_desc: "Recupera tu movilidad y olvida el dolor. Servicio a domicilio disponible.",
    assessoria_serv2_li1: "✓ Diagnóstico personalizado",
    assessoria_serv2_li2: "✓ Tratamiento individualizado",
    assessoria_serv2_li3: "✓ Ejercicios de rehabilitación",
    assessoria_serv2_li4: "✓ Sesiones de 60 minutos",
    assessoria_serv2_li5: "✓ Profesionales altamente cualificados",
    assessoria_serv2_li6: "✓ Flexibilidad de horarios",
    assessoria_serv2_price_title: "💰 Tarifas a domicilio",
    assessoria_serv3_title: "Chef a Domicilio",
    assessoria_serv3_desc: "Come saludable sin esfuerzo.",
    assessoria_serv3_li1: "✓ Menú semanal personalizado",
    assessoria_serv3_li2: "✓ Compra incluida",
    assessoria_serv3_li3: "✓ Cocinado en tu casa",
    assessoria_serv3_li4: "✓ Dietas para objetivos específicos",
    about_story_p1: 'En NL VIP Nutrition encontrarás todo lo que necesitas para tu entrenamiento: proteínas, creatina, pre-workout, vitaminas, alimentación deportiva y mucho más. Con más de <strong style="color:var(--white)">500 productos</strong> disponibles y un equipo especializado, somos la referencia en suplementos deportivos en Andorra.',
    about_story_p2: "Si no encuentras lo que buscas en la web, escríbenos por WhatsApp. Tenemos muchos más productos disponibles y te asesoramos personalmente sin ningún compromiso.",

    // Machines page
    machines_hero_title_1: "Montamos tu",
    machines_hero_title_2: "gimnasio",
    machines_hero_title_3: "ideal",
    machines_hero_sub: "Particulares, empresas, hoteles y comunidades. Cada proyecto único, adaptado al espacio y los objetivos del cliente.",
    machines_hero_cta1: "Solicitar presupuesto",
    machines_hero_cta2: "Ver montajes ↓",
    machines_stat1_label: "Gimnasios montados",
    machines_stat2_label: "Días de entrega",
    machines_stat3_label: "A medida",
    machines_stat4_label: "Presupuesto en 24h",
    machines_process_tag: "⚙️ Cómo trabajamos",
    machines_process_title_1: "Nuestro",
    machines_process_title_2: "proceso",
    machines_step1_title: "Nos escribes",
    machines_step1_desc: "Nos escribes, hablamos contigo y nos desplazamos al lugar donde se montará el gimnasio. Tomamos medidas, analizamos el espacio y recogemos la información necesaria para ofrecerte la mejor solución.",
    machines_step2_title: "Te enviamos el presupuesto",
    machines_step2_desc: "Te enviamos un presupuesto adaptado a tus necesidades con la distribución del equipamiento. No te preocupes si no sabes qué máquinas elegir; te asesoramos y seleccionamos las mejores opciones.",
    machines_step3_title: "Montaje en 10-12 días",
    machines_step3_desc: "Una vez confirmado, en 10 a 12 días hábiles tendrás las máquinas instaladas y listas para usar. Nos ocupamos del transporte, aduanas, montaje y ajustes, dejándolo todo preparado en tu espacio.",
    machines_products_tag: "💪 Máquinas y material",
    machines_products_title_1: "Qué",
    machines_products_title_2: "vendemos",
    machines_gallery_tag: "📸 Galería",
    machines_gallery_title_1: "Montajes",
    machines_gallery_title_2: "reales",
    machines_gallery_sub: "Aquí tienes una galería de imágenes reales con algunas de las máquinas que ofrecemos y varios gimnasios que ya hemos montado.",
    machines_hero_tagline: "Más de 30 gimnasios montados",
    machines_available: "Disponible ahora",
    machines_cta: "¿Interesado en montar tu gimnasio?",
    machines_cta_desc: "Somos especialistas en crear gimnasios a medida: desde una pequeña sala de entrenamiento en casa hasta grandes espacios de entrenamiento profesional.",
    machines_cta_btn: "Solicitar presupuesto gratuito",
    assessoria_bottom_title: "Prepárate para cambiar",
    assessoria_bottom_desc: "Contáctanos ahora y empieza tu transformación. Nuestros profesionales te esperan.",

    // Products page
    products_wa_notice: "💬 Tenemos muchos más productos de los que aparecen en la web. Escríbenos por WhatsApp →",
    products_hero_title_1: "Catálogo de",
    products_hero_title_2: "productos",
    products_hero_sub: "Más de 500 productos de las mejores marcas del mercado. Filtra por categoría y encuentra lo que necesitas.",

    about_meta_desc: "Conoce NL VIP Nutrition, la tienda de suplementos deportivos de referencia en Andorra. Calle Esteve Dolsa 15. Teléfono: 376 645 263. Asesoramiento personalizado."
  },

  fr: {
    nav_inici: "Accueil",
    nav_productes: "Produits",
    nav_nosaltres: "Nous",
    nav_assessoria: "Conseil",
    nav_contacte: "Contact",

    home_title: "NL VIP Nutrition – Suppléments Sportifs en Andorre",
    products_title_seo: "Catalogue – NL VIP Nutrition Andorre",
    about_title_seo: "À propos – NL VIP Nutrition",
    assessoria_title_seo: "Conseil – NL VIP Nutrition",
    machines_title_seo: "Machines – NL VIP Nutrition",
    search_placeholder: "Rechercher des produits...",
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
    cart_checkout_btn: "Finalizar compra",

    // About page
    about_hero_title_1: "Notre",
    about_hero_title_2: "histoire",
    about_hero_sub: "Nous sommes spécialistes en nutrition sportive avec des années d'expérience en Andorre. Notre mission : vous aider à atteindre vos objectifs.",
    about_story_tag: "Notre boutique",
    about_story_title_1: "Votre boutique de",
    about_story_title_2: "confiance",
    about_story_title_3: "en Andorre",
    about_story_sub: "Des années d'expérience dans le secteur de la nutrition sportive. Nous travaillons avec les meilleures marques internationales et offrons un conseil personnalisé.",
    about_story_p1: "Chez NL VIP Nutrition vous trouverez tout ce dont vous avez besoin : protéines, créatine, pré-entraînement, vitamines et plus encore. Avec plus de <strong>500 produits</strong> disponibles, nous sommes la référence en Andorre.",
    about_story_p2: "Si vous ne trouvez pas ce que vous cherchez sur le site, écrivez-nous sur WhatsApp. Nous avons beaucoup plus de produits disponibles et nous vous conseillons sans engagement.",
    about_stat_products: "Produits",
    about_stat_clients: "Clients",
    about_stat_quality: "Qualité",
    about_media_subtitle: "NL VIP Nutrition · Andorre",
    about_values_tag: "Nos valeurs",
    about_values_title_1: "Pourquoi",
    about_values_title_2: "NL VIP Nutrition",
    about_val1_title: "Qualité garantie",
    about_val1_desc: "Nous travaillons uniquement avec des marques premium de confiance internationale",
    about_val2_title: "Conseil expert",
    about_val2_desc: "Notre équipe spécialisé vous aide à choisir le produit parfait sans engagement",
    about_val3_title: "Meilleurs prix",
    about_val3_desc: "Prix compétitifs grâce à la fiscalité d'Andorre et nos accords directs",
    about_val4_title: "Livraison rapide",
    about_val4_desc: "Livraison en 24-48h en Andorre. Livraison gratuite pour les achats supérieurs à 70€",
    about_val5_title: "WhatsApp 24/7",
    about_val5_desc: "Écrivez-nous à tout moment et nous vous répondons personnellement",
    about_val6_title: "Produits certifiés",
    about_val6_desc: "Tous nos produits respectent les normes de qualité européennes",
    about_brands_tag: "Marques exclusives",
    about_brands_title_1: "Les meilleures",
    about_brands_title_2: "marques du monde",
    about_brands_sub: "Nous travaillons directement avec les marques les plus reconnues du marché international",
    about_contact_tag: "📍 Contact",
    about_contact_title_1: "Venez",
    about_contact_title_2: "nous rendre visite",
    about_contact_sub: "Nous sommes en Andorre et vous attendons. Venez à la boutique ou écrivez-nous sur WhatsApp.",
    about_addr_label: "Adresse",
    about_phone_label: "Téléphone",
    about_wa_label: "WhatsApp",
    about_wa_link: "Écrivez-nous maintenant →",
    about_email_label: "Email",

    // Assessoria page
    assessoria_hero_title_1: "Accompagnement",
    assessoria_hero_title_2: "personnalisé",
    assessoria_hero_sub: "Nous vous offrons un accompagnement complet pour atteindre vos objectifs fitness. Nos résultats parlent d'eux-mêmes.",
    assessoria_services_tag: "💪 Nos services",
    assessoria_trainer_tag: "🏋️ Coach Personnel en Ligne",
    assessoria_trainer_name: "NACHO LOSTAO",
    assessoria_trainer_quote: '"Transformez votre physique et votre esprit avec un vrai coach qui vous comprend."',
    assessoria_before: "AVANT",
    assessoria_after: "APRÈS",
    assessoria_transf_title_1: "La vraie transformation",
    assessoria_transf_title_2: "de Nacho Lostao 💪",
    assessoria_transf_p1: "Je suis <strong>Nacho</strong>, coach personnel en ligne spécialisé dans la <strong>transformation physique et mentale</strong>.",
    assessoria_transf_p2: "J'y étais aussi, sans motivation et sans direction. Jusqu'à ce que je comprenne que le vrai changement commence dans la tête. J'ai transformé mon corps, mes habitudes et ma façon de vivre. Maintenant je me consacre à accompagner mes clients — et surtout les <strong>femmes</strong> — à perdre de la graisse, définir et tonifier leur corps, de manière personnalisée.",
    assessoria_transf_p3: "Seulement méthode, constance et vrais résultats.",
    assessoria_online_tag: "Modalité En ligne",
    assessoria_online_title: "SERVICE EN LIGNE — QU'EST-CE QUI EST INCLUS ?",
    assessoria_inc1: '<strong style="color:var(--white);">Formulaire préalable</strong> à l\'appel pour mieux vous connaître, allergies, intolérances et blessures.',
    assessoria_inc2: '<strong style="color:var(--white);">Entraînements adaptés</strong> à votre niveau, temps et objectifs.',
    assessoria_inc3: '<strong style="color:var(--white);">Plan nutritionnel flexible</strong> qui s\'adapte à votre vie : recettes rapides, faciles et bonnes.',
    assessoria_inc4: '<strong style="color:var(--white);">Suivi hebdomadaire</strong> par WhatsApp et révisions 1:1.',
    assessoria_inc5: '<strong style="color:var(--white);">Ajustements constants</strong> selon vos progrès et besoins.',
    assessoria_inc6: '<strong style="color:var(--white);">Soutien tout au long du processus.</strong> L\'accompagnement et la motivation sont essentiels pour atteindre vos objectifs.',
    assessoria_cta_tag: "🚀 C'est votre moment !",
    assessoria_cta_title: "COMMENCEZ VOTRE CHANGEMENT MAINTENANT",
    assessoria_cta_desc: "Commencez à vous sentir mieux, avec plus d'énergie et plus fort physiquement et mentalement. C'est votre moment.",
    assessoria_cta_btn: "RÉSERVEZ VOTRE APPEL",
    assessoria_results_tag: "🏆 Vrais résultats",
    assessoria_results_title_1: "Transformez votre corps",
    assessoria_results_title_2: "avec des professionnels",
    assessoria_test1: '"En 3 mois j\'ai changé ma façon de vivre. Plus d\'énergie, plus de confiance et un corps que je n\'aurais jamais pensé possible."',
    assessoria_test1_author: "Blanca, membre du NLVIP CLUB",
    assessoria_test2: '"Je n\'avais jamais fait de sport et maintenant je ne peux plus m\'en passer. Les résultats parlent d\'eux-mêmes."',
    assessoria_test2_author: "Maria, membre du NLVIP CLUB",
    assessoria_test3: '"J\'ai commencé sans rien savoir du fitness. Maintenant je ne peux pas imaginer ma vie sans m\'entraîner."',
    assessoria_test3_author: "Leticia, membre du NLVIP CLUB",
    assessoria_serv_tag: "✨ Nos services",
    assessoria_serv_title_1: "Choisissez le service",
    assessoria_serv_title_2: "dont vous avez besoin",
    assessoria_serv_sub: "Nous offrons des services intégraux pour atteindre vos objectifs fitness. Tout ce dont vous avez besoin en un seul endroit.",
    assessoria_contact_btn: "Contacter maintenant →",
    assessoria_book_btn: "Réserver maintenant →",
    assessoria_serv1_title: "Entraînement Personnalisé + Conseil Nutritionnel",
    assessoria_serv1_desc: "Le service complet pour atteindre vos objectifs fitness. Entraînement et nutrition personnalisés pour les meilleurs résultats.",
    assessoria_serv1_li1: "✓ Plan d'entraînement personnalisé",
    assessoria_serv1_li2: "✓ Plan nutritionnel personnalisé",
    assessoria_serv1_li3: "✓ Suivi hebdomadaire",
    assessoria_serv1_li4: "✓ Messagerie directe avec votre coach",
    assessoria_serv1_li5: "✓ Application d'entraînement",
    assessoria_serv1_li6: "✓ Évaluation et mesures corporelles",
    assessoria_serv2_title: "Kinésithérapie et Massages",
    assessoria_serv2_desc: "Retrouvez votre mobilité et oubliez la douleur. Service à domicile disponible.",
    assessoria_serv2_li1: "✓ Diagnostic personnalisé",
    assessoria_serv2_li2: "✓ Traitement individualisé",
    assessoria_serv2_li3: "✓ Exercices de rééducation",
    assessoria_serv2_li4: "✓ Séances de 60 minutes",
    assessoria_serv2_li5: "✓ Professionnels hautement qualifiés",
    assessoria_serv2_li6: "✓ Flexibilité des horaires",
    assessoria_serv2_price_title: "💰 Tarifs à domicile",
    assessoria_serv3_title: "Chef à Domicile",
    assessoria_serv3_desc: "Mangez sainement sans effort.",
    assessoria_serv3_li1: "✓ Menu hebdomadaire personnalisé",
    assessoria_serv3_li2: "✓ Courses incluses",
    assessoria_serv3_li3: "✓ Cuisiné chez vous",
    assessoria_serv3_li4: "✓ Régimes pour objectifs spécifiques",
    about_story_p1: 'Chez NL VIP Nutrition vous trouverez tout ce dont vous avez besoin pour votre entraînement : protéines, créatine, pré-workout, vitamines, alimentation sportive et bien plus. Avec plus de <strong style="color:var(--white)">500 produits</strong> disponibles et une équipe spécialisée, nous sommes la référence en suppléments sportifs en Andorre.',
    about_story_p2: "Si vous ne trouvez pas ce que vous cherchez sur le site, écrivez-nous sur WhatsApp. Nous avons beaucoup plus de produits disponibles et nous vous conseillons personnellement sans engagement.",

    // Machines page
    machines_hero_title_1: "On monte votre",
    machines_hero_title_2: "salle de sport",
    machines_hero_title_3: "idéale",
    machines_hero_sub: "Particuliers, entreprises, hôtels et communautés. Chaque projet unique, adapté à l'espace et aux objectifs du client.",
    machines_hero_cta1: "Demander un devis",
    machines_hero_cta2: "Voir les montages ↓",
    machines_stat1_label: "Salles montées",
    machines_stat2_label: "Jours de livraison",
    machines_stat3_label: "Sur mesure",
    machines_stat4_label: "Devis en 24h",
    machines_process_tag: "⚙️ Comment on travaille",
    machines_process_title_1: "Notre",
    machines_process_title_2: "processus",
    machines_step1_title: "Vous nous écrivez",
    machines_step1_desc: "Vous nous écrivez, on discute avec vous et on se déplace à l'endroit où sera montée la salle. On prend les mesures, analyse l'espace et recueille les informations nécessaires.",
    machines_step2_title: "On vous envoie le devis",
    machines_step2_desc: "On vous envoie un devis adapté à vos besoins avec la disposition de l'équipement. Ne vous inquiétez pas si vous ne savez pas quelles machines choisir.",
    machines_step3_title: "Montage en 10-12 jours",
    machines_step3_desc: "Une fois confirmé, en 10 à 12 jours ouvrables vous aurez les machines installées et prêtes à utiliser. On s'occupe du transport, des douanes, du montage et des réglages.",
    machines_products_tag: "💪 Machines et matériel",
    machines_products_title_1: "Ce que",
    machines_products_title_2: "nous vendons",
    machines_gallery_tag: "📸 Galerie",
    machines_gallery_title_1: "Montages",
    machines_gallery_title_2: "réels",
    machines_gallery_sub: "Voici une galerie d'images réelles avec certaines des machines que nous proposons et plusieurs salles que nous avons déjà montées.",
    machines_hero_tagline: "Plus de 30 salles montées",
    machines_available: "Disponible maintenant",
    machines_cta: "Intéressé à monter votre salle de sport ?",
    machines_cta_desc: "Nous sommes spécialistes dans la création de salles sur mesure : d'une petite salle d'entraînement à domicile aux grands espaces professionnels.",
    machines_cta_btn: "Demander un devis gratuit",
    assessoria_bottom_title: "Préparez-vous à changer",
    assessoria_bottom_desc: "Contactez-nous maintenant et commencez votre transformation. Nos professionnels vous attendent.",

    // Products page
    products_wa_notice: "💬 Nous avons beaucoup plus de produits que ce qui apparaît sur le site. Écrivez-nous sur WhatsApp →",
    products_hero_title_1: "Catalogue de",
    products_hero_title_2: "produits",
    products_hero_sub: "Plus de 500 produits des meilleures marques du marché. Filtrez par catégorie et trouvez ce dont vous avez besoin.",

    about_meta_desc: "Découvrez NL VIP Nutrition, la boutique de suppléments sportifs de référence en Andorre. Rue Esteve Dolsa 15. Téléphone : 376 645 263. Conseil personnalisé."
  },

  en: {
    nav_inici: "Home",
    nav_productes: "Products",
    nav_nosaltres: "About us",
    nav_assessoria: "Coaching",
    nav_contacte: "Contact",

    home_title: "NL VIP Nutrition – Sports Supplements in Andorra",
    products_title_seo: "Catalogue – NL VIP Nutrition Andorra",
    about_title_seo: "About us – NL VIP Nutrition",
    assessoria_title_seo: "Coaching – NL VIP Nutrition",
    machines_title_seo: "Machines – NL VIP Nutrition",
    search_placeholder: "Search products...",
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
    cart_checkout_btn: "Finalizar compra",

    // About page
    about_hero_title_1: "Our",
    about_hero_title_2: "story",
    about_hero_sub: "We are specialists in sports nutrition with years of experience in Andorra. Our mission: to help you achieve your goals.",
    about_story_tag: "Our store",
    about_story_title_1: "Your trusted",
    about_story_title_2: "store",
    about_story_title_3: "in Andorra",
    about_story_sub: "Years of experience in sports nutrition. We work with the best international brands and offer personalised advice to help you reach your goals.",
    about_story_p1: "At NL VIP Nutrition you'll find everything you need: proteins, creatine, pre-workout, vitamins, sports food and more. With over <strong>500 products</strong> and a specialised team, we are the reference in Andorra.",
    about_story_p2: "If you can't find what you're looking for on the website, message us on WhatsApp. We have many more products available and advise you personally with no obligation.",
    about_stat_products: "Products",
    about_stat_clients: "Clients",
    about_stat_quality: "Quality",
    about_media_subtitle: "NL VIP Nutrition · Andorra",
    about_values_tag: "Our values",
    about_values_title_1: "Why",
    about_values_title_2: "NL VIP Nutrition",
    about_val1_title: "Guaranteed quality",
    about_val1_desc: "We only work with premium brands of the highest international trust",
    about_val2_title: "Expert advice",
    about_val2_desc: "Our specialised team helps you choose the perfect product with no commitment",
    about_val3_title: "Best prices",
    about_val3_desc: "Competitive prices thanks to Andorra's tax regime and our direct agreements",
    about_val4_title: "Fast shipping",
    about_val4_desc: "Delivery in 24-48h in Andorra. Free shipping for orders over €70",
    about_val5_title: "WhatsApp 24/7",
    about_val5_desc: "Message us at any time and we'll respond personally",
    about_val6_title: "Certified products",
    about_val6_desc: "All our products meet European quality standards",
    about_brands_tag: "Exclusive brands",
    about_brands_title_1: "The best",
    about_brands_title_2: "brands in the world",
    about_brands_sub: "We work directly with the most recognised brands on the international market",
    about_contact_tag: "📍 Contact",
    about_contact_title_1: "Come",
    about_contact_title_2: "visit us",
    about_contact_sub: "We are in Andorra waiting for you. Come to the store or message us on WhatsApp.",
    about_addr_label: "Address",
    about_phone_label: "Phone",
    about_wa_label: "WhatsApp",
    about_wa_link: "Message us now →",
    about_email_label: "Email",

    // Assessoria page
    assessoria_hero_title_1: "Personalised",
    assessoria_hero_title_2: "coaching",
    assessoria_hero_sub: "We offer comprehensive coaching to help you reach your fitness goals. Our results speak for themselves.",
    assessoria_services_tag: "💪 Our services",
    assessoria_trainer_tag: "🏋️ Online Personal Trainer",
    assessoria_trainer_name: "NACHO LOSTAO",
    assessoria_trainer_quote: '"Transform your body and mind with a real trainer who understands you."',
    assessoria_before: "BEFORE",
    assessoria_after: "AFTER",
    assessoria_transf_title_1: "The real transformation",
    assessoria_transf_title_2: "of Nacho Lostao 💪",
    assessoria_transf_p1: "I am <strong>Nacho</strong>, an online personal trainer specialised in <strong>physical and mental transformation</strong>.",
    assessoria_transf_p2: "I was there too, without motivation and without direction. Until I understood that real change starts in the mind. I transformed my body, habits and way of living. Now I dedicate myself to helping my clients — especially <strong>women</strong> — lose fat, define and tone their bodies, in a personalised way.",
    assessoria_transf_p3: "Just method, consistency and real results.",
    assessoria_online_tag: "Online Mode",
    assessoria_online_title: "ONLINE SERVICE — WHAT'S INCLUDED?",
    assessoria_inc1: '<strong style="color:var(--white);">Pre-call form</strong> to get to know you better, possible allergies, intolerances and injuries.',
    assessoria_inc2: '<strong style="color:var(--white);">Workouts adapted</strong> to your level, time and goals.',
    assessoria_inc3: '<strong style="color:var(--white);">Flexible nutrition plan</strong> that fits your life: quick, easy and good recipes.',
    assessoria_inc4: '<strong style="color:var(--white);">Weekly follow-up</strong> via WhatsApp and 1:1 reviews.',
    assessoria_inc5: '<strong style="color:var(--white);">Constant adjustments</strong> based on your progress and needs.',
    assessoria_inc6: '<strong style="color:var(--white);">Support throughout the whole process.</strong> Accompaniment and motivation are key to achieving your goals.',
    assessoria_cta_tag: "🚀 It's your moment!",
    assessoria_cta_title: "START YOUR CHANGE NOW",
    assessoria_cta_desc: "Start feeling better about yourself, with more energy and stronger physically and mentally. It's your moment.",
    assessoria_cta_btn: "BOOK YOUR CALL",
    assessoria_results_tag: "🏆 Real results",
    assessoria_results_title_1: "Transform your body",
    assessoria_results_title_2: "with professionals",
    assessoria_test1: '"In 3 months I changed my way of living. More energy, more confidence and a body I never thought possible."',
    assessoria_test1_author: "Blanca, NLVIP CLUB member",
    assessoria_test2: '"I had never done sports and now I can\'t live without it. The results speak for themselves."',
    assessoria_test2_author: "Maria, NLVIP CLUB member",
    assessoria_test3: '"I started knowing nothing about fitness. Now I can\'t imagine my life without training."',
    assessoria_test3_author: "Leticia, NLVIP CLUB member",
    assessoria_serv_tag: "✨ Our services",
    assessoria_serv_title_1: "Choose the service",
    assessoria_serv_title_2: "you need",
    assessoria_serv_sub: "We offer comprehensive services to achieve your fitness goals. Everything you need in one place.",
    assessoria_contact_btn: "Contact now →",
    assessoria_book_btn: "Book now →",
    assessoria_serv1_title: "Personalised Training + Nutritional Advice",
    assessoria_serv1_desc: "The complete service to achieve your fitness goals. Personalised training and nutrition for the best results.",
    assessoria_serv1_li1: "✓ Personalised training plan",
    assessoria_serv1_li2: "✓ Personalised nutrition plan",
    assessoria_serv1_li3: "✓ Weekly follow-up",
    assessoria_serv1_li4: "✓ Direct messaging with your coach",
    assessoria_serv1_li5: "✓ Training app",
    assessoria_serv1_li6: "✓ Body assessment and measurements",
    assessoria_serv2_title: "Physiotherapy & Massage",
    assessoria_serv2_desc: "Recover your mobility and forget the pain. Home visit service available.",
    assessoria_serv2_li1: "✓ Personalised diagnosis",
    assessoria_serv2_li2: "✓ Individualised treatment",
    assessoria_serv2_li3: "✓ Rehabilitation exercises",
    assessoria_serv2_li4: "✓ 60-minute sessions",
    assessoria_serv2_li5: "✓ Highly qualified professionals",
    assessoria_serv2_li6: "✓ Flexible scheduling",
    assessoria_serv2_price_title: "💰 Home visit rates",
    assessoria_serv3_title: "Home Chef",
    assessoria_serv3_desc: "Eat healthily without effort.",
    assessoria_serv3_li1: "✓ Personalised weekly menu",
    assessoria_serv3_li2: "✓ Shopping included",
    assessoria_serv3_li3: "✓ Cooked at your home",
    assessoria_serv3_li4: "✓ Diets for specific goals",
    about_story_p1: 'At NL VIP Nutrition you will find everything you need for your training: proteins, creatine, pre-workout, vitamins, sports nutrition and much more. With over <strong style="color:var(--white)">500 products</strong> available and a specialised team, we are the reference for sports supplements in Andorra.',
    about_story_p2: "If you can't find what you're looking for on the website, message us on WhatsApp. We have many more products available and we'll advise you personally with no commitment.",

    // Machines page
    machines_hero_title_1: "We build your",
    machines_hero_title_2: "gym",
    machines_hero_title_3: "ideal",
    machines_hero_sub: "Individuals, companies, hotels and communities. Every project is unique, tailored to the space and client's objectives.",
    machines_hero_cta1: "Request a quote",
    machines_hero_cta2: "See installations ↓",
    machines_stat1_label: "Gyms built",
    machines_stat2_label: "Delivery days",
    machines_stat3_label: "Custom made",
    machines_stat4_label: "Quote in 24h",
    machines_process_tag: "⚙️ How we work",
    machines_process_title_1: "Our",
    machines_process_title_2: "process",
    machines_step1_title: "You contact us",
    machines_step1_desc: "You write to us, we talk and we travel to the location where the gym will be built. We take measurements, analyse the space and gather the necessary information to offer you the best solution.",
    machines_step2_title: "We send you the quote",
    machines_step2_desc: "We send you a quote tailored to your needs with the equipment layout. Don't worry if you don't know which machines to choose — we advise and select the best options for you.",
    machines_step3_title: "Installation in 10-12 days",
    machines_step3_desc: "Once confirmed, in 10-12 working days your machines will be installed and ready to use. We handle transport, customs, installation and adjustments, leaving everything ready in your space.",
    machines_products_tag: "💪 Machines & equipment",
    machines_products_title_1: "What we",
    machines_products_title_2: "sell",
    machines_gallery_tag: "📸 Gallery",
    machines_gallery_title_1: "Real",
    machines_gallery_title_2: "installations",
    machines_gallery_sub: "Here is a gallery of real images with some of the machines we offer and various gyms we have already built.",
    machines_hero_tagline: "More than 30 gyms built",
    machines_available: "Available now",
    machines_cta: "Interested in building your own gym?",
    machines_cta_desc: "We specialise in creating custom-built gyms: from a small home training room to large professional training spaces.",
    machines_cta_btn: "Request a free quote",
    assessoria_bottom_title: "Get ready to change",
    assessoria_bottom_desc: "Contact us now and start your transformation. Our professionals are waiting for you.",

    // Products page
    products_wa_notice: "💬 We have many more products than what appears on the website. Message us on WhatsApp →",
    products_hero_title_1: "Product",
    products_hero_title_2: "catalogue",
    products_hero_sub: "Over 500 products from the best brands on the market. Filter by category and find what you need.",

    about_meta_desc: "Discover NL VIP Nutrition, the reference sports supplement store in Andorra. Esteve Dolsa Street 15. Phone: 376 645 263. Personalised advice."
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
    el.innerHTML = t(key);
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
// Placeholder neutre (SVG inline, sense petició extra). Evita que una imatge que falla
// arrossegui totes les altres a la mateixa foto genèrica.
const IMG_PLACEHOLDER = 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#0f1320"/><text x="50%" y="52%" fill="#3a4255" font-family="Arial, sans-serif" font-size="30" font-weight="700" text-anchor="middle">NL VIP</text></svg>');

function renderCard(p) {

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
      <div class="product-img">
        <img src="${escHtml(p.image)}" alt="${escHtml(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='${IMG_PLACEHOLDER}'" />
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

  const addBtn = e && e.target ? e.target.closest('.btn-add-cart') : null;
  if (addBtn) {
    const original = addBtn.innerHTML;
    addBtn.innerHTML = "✓ Afegit!";
    addBtn.style.background = "var(--green, #25D366)";
    addBtn.style.color = "#fff";
    addBtn.disabled = true;
    setTimeout(() => {
      addBtn.innerHTML = original;
      addBtn.style.background = "";
      addBtn.style.color = "";
      addBtn.disabled = false;
    }, 1500);
  }

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

// ===== GLOBAL SEARCH =====
function initGlobalSearch() {
  document.querySelectorAll('.global-search-input').forEach(input => {
    // products.html desktop search already has its own filter — skip it
    if (input.id === 'search-input') return;

    const dropdown = input.parentElement?.querySelector('.search-results-dropdown');
    if (!dropdown) return;

    let debounceTimer;

    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) {
        dropdown.innerHTML = '';
        dropdown.classList.remove('open');
        return;
      }
      debounceTimer = setTimeout(() => {
        const results = PRODUCTS.filter(p =>
          p.name?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q)
        ).slice(0, 7);

        if (results.length === 0) {
          dropdown.innerHTML = `<div style="padding:12px 16px;color:var(--text-3);font-size:0.9rem;">Cap resultat per "${escHtml(q)}"</div>`;
        } else {
          dropdown.innerHTML = results.map(p => {
            const price = p.price != null ? `${p.price.toFixed(2).replace('.', ',')} €` : '';
            const statusDot = p.in_stock
              ? `<span style="color:var(--green);font-size:0.75rem;">● En estoc</span>`
              : `<span style="color:var(--text-3);font-size:0.75rem;">● Esgotat</span>`;
            return `<div class="search-result-item" data-id="${escHtml(p.id)}" data-name="${escHtml(p.name)}">
              <img src="${escHtml(p.image)}" alt="" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=60&q=60'" />
              <div class="search-result-info">
                <div class="search-result-name">${escHtml(p.name)}</div>
                <div class="search-result-meta">${escHtml(p.brand || '')} ${price ? '· ' + price : ''} ${statusDot}</div>
              </div>
            </div>`;
          }).join('');
        }
        dropdown.classList.add('open');

        dropdown.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            const id = item.dataset.id;
            const name = item.dataset.name;
            dropdown.innerHTML = '';
            dropdown.classList.remove('open');
            input.value = '';
            // If openModal is available and product exists, open it directly
            if (typeof openModal === 'function' && PRODUCTS.find(p => p.id === id)) {
              openModal(id);
            } else {
              window.location.href = `products.html?q=${encodeURIComponent(name)}`;
            }
          });
        });
      }, 200);
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && input.value.trim()) {
        const q = input.value.trim();
        dropdown.innerHTML = '';
        dropdown.classList.remove('open');
        window.location.href = `products.html?q=${encodeURIComponent(q)}`;
      }
      if (e.key === 'Escape') {
        dropdown.innerHTML = '';
        dropdown.classList.remove('open');
      }
    });

    document.addEventListener('click', e => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.innerHTML = '';
        dropdown.classList.remove('open');
      }
    });
  });
}

// ===== INIT ALL =====
function initShared() {
  updatePageTranslations();
  updateCartBadge();
  initGlobalSearch();
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
      if (searchBar.classList.contains("open")) {
        if (mobileInput) mobileInput.value = '';
        mobileInput?.focus();
      }
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
