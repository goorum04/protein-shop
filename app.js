// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('nlvip_cart') || '[]');
let currentCategory = 'all';
let currentSort = 'default';
let onlyInStock = false;
let currentSearch = '';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    renderProducts();
    updateCartUI();
    setupEventListeners();
    setupScrollHeader();
});

// ===== FEATURED PRODUCTS =====
function renderFeatured() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;
    const featured = FEATURED_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    grid.innerHTML = featured.map(p => productCard(p, true)).join('');
}

// ===== PRODUCTS RENDERING =====
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const titleEl = document.getElementById('products-title');
    if (!grid) return;

    let filtered = PRODUCTS.filter(p => {
        const matchCat = currentCategory === 'all' || p.category === currentCategory;
        const matchStock = !onlyInStock || p.in_stock;
        const matchSearch = !currentSearch ||
            p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            (p.brand || '').toLowerCase().includes(currentSearch.toLowerCase()) ||
            (p.flavor || '').toLowerCase().includes(currentSearch.toLowerCase());
        return matchCat && matchStock && matchSearch;
    });

    if (currentSort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));

    const catLabels = { all: 'Tots els Productes', proteinas: 'Proteïnes', creatina: 'Creatina', 'pre-workout': 'Pre-Workout', 'mass-gainer': 'Mass Gainer', vitaminas: 'Vitamines i Salut', alimentacion: 'Alimentació', 'control-peso': 'Control de Pes', carbohidratos: 'Carbohidrats', prehormonal: 'Prehormonal' };
    if (titleEl) titleEl.textContent = catLabels[currentCategory] || 'Tots els Productes';

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="loading"><p style="color:var(--text-secondary)">No s'han trobat productes.<br><a href="https://wa.me/376645263" target="_blank" style="color:var(--whatsapp)">Pregunta'ns per WhatsApp 💬</a></p></div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => productCard(p, false)).join('');
}

function productCard(p, small) {
    const price = p.price.toFixed(2).replace('.', ',');
    const flavor = p.flavor ? `<div class="product-flavor">Sabor: ${p.flavor}</div>` : '';
    const badge = p.in_stock
        ? `<span class="product-badge badge-in">En estoc</span>`
        : `<span class="product-badge badge-out">Esgotat</span>`;
    const addBtn = p.in_stock
        ? `<button class="add-to-cart-btn" onclick="addToCart(event,'${p.id}')" aria-label="Afegir al carret">+</button>`
        : `<button class="add-to-cart-btn" disabled title="No disponible">✕</button>`;

    return `
    <article class="product-card" onclick="openModal('${p.id}')" id="card-${p.id}">
      <div class="product-img-wrap">
        ${badge}
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70'" />
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand || ''}</div>
        <div class="product-name">${p.name}${p.flavor ? ' – ' + p.flavor : ''}</div>
        ${flavor}
        <div class="product-footer">
          <span class="product-price">${price} €</span>
          ${addBtn}
        </div>
      </div>
    </article>
  `;
}

// ===== MODAL =====
function openModal(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');
    const price = p.price.toFixed(2).replace('.', ',');
    const stockBadge = p.in_stock
        ? `<span class="modal-stock-badge" style="background:rgba(34,197,94,.15);color:#86efac;border:1px solid rgba(34,197,94,.3)">✓ En estoc</span>`
        : `<span class="modal-stock-badge" style="background:rgba(239,68,68,.15);color:#fca5a5;border:1px solid rgba(239,68,68,.3)">Esgotat</span>`;

    content.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrap">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70'" />
      </div>
      <div class="modal-details">
        <div class="modal-brand">${p.brand || ''}</div>
        <div class="modal-name">${p.name}</div>
        ${p.flavor ? `<div class="modal-flavor">Sabor: <strong>${p.flavor}</strong></div>` : ''}
        ${stockBadge}
        <div class="modal-price">${price} €</div>
        <div class="modal-desc">${p.description || ''}</div>
        ${p.in_stock
            ? `<button class="modal-add-btn" onclick="addToCart(event,'${p.id}');closeModal()">Afegir al carret 🛒</button>`
            : ''
        }
        <a href="https://wa.me/376645263?text=Hola! Estic interessat en: ${encodeURIComponent(p.name + (p.flavor ? ' – ' + p.flavor : ''))}" target="_blank" class="modal-wa-btn">💬 Preguntar per WhatsApp</a>
      </div>
    </div>
  `;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== CART =====
function addToCart(e, id) {
    e.stopPropagation();
    const p = PRODUCTS.find(x => x.id === id);
    if (!p || !p.in_stock) return;
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty = (existing.qty || 1) + 1;
    else cart.push({ id, qty: 1 });
    saveCart();
    updateCartUI();
    // Bounce animation on cart btn
    const btn = document.getElementById('cart-toggle');
    btn.style.transform = 'scale(1.15)';
    setTimeout(() => btn.style.transform = '', 200);
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    renderCartItems();
}

function saveCart() { localStorage.setItem('nlvip_cart', JSON.stringify(cart)); }

function updateCartUI() {
    const count = cart.reduce((sum, i) => sum + (i.qty || 1), 0);
    document.getElementById('cart-count').textContent = count;
    const total = cart.reduce((sum, i) => {
        const p = PRODUCTS.find(x => x.id === i.id);
        return sum + (p ? p.price * (i.qty || 1) : 0);
    }, 0);
    document.getElementById('cart-total').textContent = total.toFixed(2).replace('.', ',') + ' €';
}

function renderCartItems() {
    const el = document.getElementById('cart-items');
    if (!el) return;
    if (cart.length === 0) {
        el.innerHTML = '<div class="cart-empty">El teu carret és buit 🛒</div>';
        return;
    }
    el.innerHTML = cart.map(item => {
        const p = PRODUCTS.find(x => x.id === item.id);
        if (!p) return '';
        return `
      <div class="cart-item">
        <img class="cart-item-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&q=60'" />
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}${p.flavor ? ' – ' + p.flavor : ''}</div>
          <div class="cart-item-price">${(p.price * (item.qty || 1)).toFixed(2).replace('.', ',')} € × ${item.qty || 1}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Eliminar">🗑</button>
      </div>
    `;
    }).join('');
}

// ===== FILTER FUNCTION (global, called from HTML) =====
function filterByCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.cat === cat);
    });
    renderProducts();
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Cart toggle
    document.getElementById('cart-toggle').addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.add('open');
        document.getElementById('cart-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
        renderCartItems();
    });

    const closeCart = () => {
        document.getElementById('cart-sidebar').classList.remove('open');
        document.getElementById('cart-overlay').classList.remove('active');
        document.body.style.overflow = '';
    };
    document.getElementById('cart-close').addEventListener('click', closeCart);
    document.getElementById('cart-overlay').addEventListener('click', (e) => {
        if (!document.getElementById('cart-sidebar').contains(e.target)) closeCart();
    });

    // Modal close
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', e => {
        if (e.target === document.getElementById('modal-overlay')) closeModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeCart(); } });

    // Category nav
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => filterByCategory(btn.dataset.cat));
    });

    // Sort
    document.getElementById('sort-select').addEventListener('change', e => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Stock filter
    document.getElementById('in-stock-filter').addEventListener('change', e => {
        onlyInStock = e.target.checked;
        renderProducts();
    });

    // Search
    const searchInput = document.getElementById('search-input');
    const doSearch = () => {
        currentSearch = searchInput.value.trim();
        currentCategory = 'all';
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
        renderProducts();
        if (currentSearch) document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('search-btn').addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

    // Hero btn-secondary
    document.querySelectorAll('[data-cat]').forEach(el => {
        if (el.tagName === 'BUTTON' && !el.classList.contains('cat-btn')) {
            el.addEventListener('click', () => filterByCategory(el.dataset.cat));
        }
    });
}

// ===== SCROLL HEADER =====
function setupScrollHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none';
    }, { passive: true });
}
