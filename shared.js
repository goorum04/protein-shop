// =============================================
// shared.js – Shared functionality across pages
// =============================================

let cart = JSON.parse(localStorage.getItem('nlvip_cart') || '[]');

// ===== RENDER PRODUCT CARD =====
function renderCard(p) {
  const price = p.price.toFixed(2).replace('.', ',');
  const statusClass = p.in_stock ? 'status-in' : 'status-out';
  const statusText = p.in_stock ? 'En estoc' : 'Esgotat';
  const flavor = p.flavor ? `<div class="product-flavor">Sabor: ${escHtml(p.flavor)}</div>` : '';

  return `
    <article class="product-card" onclick="openModal('${p.id}')" role="listitem" aria-label="${escHtml(p.name)}" tabindex="0" onkeydown="if(event.key==='Enter')openModal('${p.id}')">
      <div class="product-img">
        <span class="product-status ${statusClass}">${statusText}</span>
        <img src="${escHtml(p.image)}" alt="${escHtml(p.name)}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70'" />
      </div>
      <div class="product-body">
        <div class="product-brand-tag">${escHtml(p.brand || '')}</div>
        <div class="product-name">${escHtml(p.name)}${p.flavor ? ' – ' + escHtml(p.flavor) : ''}</div>
        ${flavor}
        <div class="product-footer">
          <span class="product-price">${price} €</span>
          <button class="btn-add" onclick="addToCart(event,'${p.id}')" aria-label="Afegir ${escHtml(p.name)} al carret"
            ${p.in_stock ? '' : 'disabled'}>
            ${p.in_stock ? '+' : '✕'}
          </button>
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
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty = (ex.qty || 1) + 1;
  else cart.push({ id, qty: 1 });
  saveCart();
  updateCartBadge();
  // Bounce
  const btn = document.getElementById('cart-toggle');
  if (btn) { btn.style.transform = 'scale(1.18)'; setTimeout(() => btn.style.transform = '', 200); }
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function saveCart() { localStorage.setItem('nlvip_cart', JSON.stringify(cart)); }

function updateCartBadge() {
  const count = cart.reduce((s, i) => s + (i.qty || 1), 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
  const total = cart.reduce((s, i) => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return s + (p ? p.price * (i.qty || 1) : 0);
  }, 0);
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = total.toFixed(2).replace('.', ',') + ' €';
}

function renderCartItems() {
  const el = document.getElementById('cart-items');
  if (!el) return;
  if (!cart.length) { el.innerHTML = '<div class="cart-empty-msg">El teu carret és buit 🛒</div>'; return; }
  el.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${escHtml(p.image)}" alt="${escHtml(p.name)}"
             onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&q=60'" />
        <div class="cart-item-info">
          <div class="cart-item-name">${escHtml(p.name)}${p.flavor ? ' – ' + escHtml(p.flavor) : ''}</div>
          <div class="cart-item-price">${(p.price * (item.qty || 1)).toFixed(2).replace('.', ',')} € × ${item.qty || 1}</div>
        </div>
        <button class="btn-remove" onclick="removeFromCart('${item.id}')" aria-label="Eliminar ${escHtml(p.name)}">🗑</button>
      </div>`;
  }).join('');
}

// ===== MODAL =====
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const price = p.price.toFixed(2).replace('.', ',');
  const statusClass = p.in_stock ? 'status-in' : 'status-out';
  const overlay = document.getElementById('modal-overlay');
  const inner = document.getElementById('modal-inner');
  if (!overlay || !inner) return;

  inner.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-box">
        <img src="${escHtml(p.image)}" alt="${escHtml(p.name)}"
             onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70'" />
      </div>
      <div class="modal-info">
        <div class="modal-brand">${escHtml(p.brand || '')}</div>
        <div class="modal-name">${escHtml(p.name)}</div>
        ${p.flavor ? `<div class="modal-flavor">Sabor: <strong>${escHtml(p.flavor)}</strong></div>` : ''}
        <span class="modal-status ${statusClass}">${p.in_stock ? '✓ En estoc' : 'Esgotat'}</span>
        <div class="modal-price">${price} €</div>
        <div class="modal-desc">${escHtml(p.description || '')}</div>
        <div class="modal-actions">
          ${p.in_stock ? `<button class="modal-btn-add" onclick="addToCart(event,'${p.id}');closeModal()">🛒 Afegir al carret</button>` : ''}
          <a href="https://wa.me/376645263?text=Hola!%20M%27interessa%3A%20${encodeURIComponent(p.name + (p.flavor ? ' – ' + p.flavor : ''))}" target="_blank" rel="noopener" class="modal-btn-wa">💬 Preguntar per WhatsApp</a>
        </div>
      </div>
    </div>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const o = document.getElementById('modal-overlay');
  if (o) o.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== CART SIDEBAR =====
function openCart() {
  const panel = document.getElementById('cart-panel');
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

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== INIT ALL =====
function initShared() {
  updateCartBadge();
  initNavbarScroll();

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
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.textContent = '☰';
      });
    });
  }
}
