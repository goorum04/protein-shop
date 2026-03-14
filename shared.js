// =============================================
// shared.js – Shared functionality across pages
// =============================================

let cart = JSON.parse(localStorage.getItem('nlvip_cart') || '[]');

// ===== DISCOUNT CODES =====
// Format: 'CODE': { type: 'percent'|'fixed', value: <number>, label: <string> }
const DISCOUNT_CODES = {
  'NLVIP10':   { type: 'percent', value: 10, label: '-10%' },
  'NLVIP15':   { type: 'percent', value: 15, label: '-15%' },
  'BENVINGUT': { type: 'percent', value: 5,  label: '-5%' },
  'WELCOME5':  { type: 'fixed',   value: 5,  label: '-5,00 €' },
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
    msgEl.textContent = `✓ Codi "${code}" aplicat! (${DISCOUNT_CODES[code].label})`;
    msgEl.className = 'discount-msg success';
    updateCartBadge();
    renderCartItems();
  } else {
    msgEl.textContent = 'Codi de descompte no vàlid.';
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
  const flavor  = p.flavor ? `<div class="product-flavor">Sabor: ${escHtml(p.flavor)}</div>` : '';
  const qtyMatch = p.name.match(/(\d+[,.]?\d*\s*(g|gr|kg|ml|caps|càpsules|tablets|tabs|litres|l))/i);
  const quantity = qtyMatch ? `<div class="product-qty" style="color:var(--blue-light);font-size:0.85rem;margin-bottom:8px">Format: <strong>${qtyMatch[0].toLowerCase()}</strong></div>` : '';
  const priceStr = p.price != null ? p.price.toFixed(2).replace('.', ',') + ' €' : '';

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
        ${quantity}
        ${flavor}
        ${priceStr ? `<div class="product-price">${priceStr}</div>` : ''}
        <div class="product-footer">
          <button class="btn-add-cart" onclick="addToCart(event,'${p.id}')" ${p.in_stock ? '' : 'disabled'} aria-label="Afegir ${escHtml(p.name)} al carret">${p.in_stock ? 'Afegir 🛒' : 'Esgotat'}</button>
          <a href="https://wa.me/376645263?text=${encodeURIComponent('Hola! Estic interessat en: ' + p.name)}" class="btn-ghost btn-wa-card" target="_blank" onclick="event.stopPropagation()" aria-label="Contactar per WhatsApp">💬</a>
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
  // Bounce animation on cart button
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

  const subtotal = calcCartSubtotal();
  const discount = calcDiscount(subtotal);
  const total    = subtotal - discount;

  // Subtotal line
  const subtotalEl = document.getElementById('cart-subtotal');
  if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2).replace('.', ',') + ' €';

  // Discount row
  const discountRow   = document.getElementById('cart-discount-row');
  const discountAmtEl = document.getElementById('cart-discount-amount');
  if (discountRow) discountRow.style.display = (activeDiscount && discount > 0) ? 'flex' : 'none';
  if (discountAmtEl && activeDiscount) {
    const dc = DISCOUNT_CODES[activeDiscount];
    discountAmtEl.textContent = `-${discount.toFixed(2).replace('.', ',')} € (${dc ? dc.label : activeDiscount})`;
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

// ===== CHECKOUT via WhatsApp (full cart details) =====
function checkoutWhatsApp() {
  if (!cart.length) return;
  const subtotal = calcCartSubtotal();
  const discount = calcDiscount(subtotal);
  const total    = subtotal - discount;

  const lines = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return null;
    const name      = p.name + (p.flavor ? ` – ${p.flavor}` : '');
    const lineTotal = (p.price * (item.qty || 1)).toFixed(2).replace('.', ',');
    return `• ${name} ×${item.qty || 1} → ${lineTotal} €`;
  }).filter(Boolean).join('\n');

  let msg = `Hola! Vull completar la meva comanda:\n\n${lines}\n\nSubtotal: ${subtotal.toFixed(2).replace('.', ',')} €`;
  if (activeDiscount && discount > 0) {
    msg += `\nDescompte (${activeDiscount}): -${discount.toFixed(2).replace('.', ',')} €`;
  }
  msg += `\nTOTAL: ${total.toFixed(2).replace('.', ',')} €`;

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

  const qtyMatch = p.name.match(/(\d+[,.]?\d*\s*(g|gr|kg|ml|caps|càpsules|tablets|tabs|litros|l))/i);
  const quantity = qtyMatch ? `<div class="modal-flavor" style="color:var(--blue-light); margin-top:4px;">Format: <strong>${qtyMatch[0].toLowerCase()}</strong></div>` : '';

  inner.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-box">
        <img src="${escHtml(p.image)}" alt="${escHtml(p.name)}"
             onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70'" />
      </div>
      <div class="modal-info">
        <div class="modal-brand">${escHtml(p.brand || '')}</div>
        <div class="modal-name">${escHtml(p.name)}</div>
        ${quantity}
        ${p.flavor ? `<div class="modal-flavor">Sabor: <strong>${escHtml(p.flavor)}</strong></div>` : ''}
        <span class="modal-status ${statusClass}">${p.in_stock ? '✓ En estoc' : 'Esgotat'}</span>
        <div class="modal-desc" style="margin-top:10px;">${escHtml(p.description || '')}</div>
        ${p.price != null ? `<div class="modal-price">${p.price.toFixed(2).replace('.', ',')} €</div>` : ''}
        <div class="modal-actions" style="margin-top:20px;">
          <button class="modal-btn-add" onclick="addToCart(event,'${p.id}')" ${p.in_stock ? '' : 'disabled'} aria-label="Afegir al carret">${p.in_stock ? '🛒 Afegir al carret' : 'Esgotat'}</button>
          <a href="https://wa.me/376645263?text=Hola!%20M%27interessa%3A%20${encodeURIComponent(p.name + (p.flavor ? ' – ' + p.flavor : ''))}" target="_blank" rel="noopener" class="modal-btn-wa">💬 Contactar per WhatsApp</a>
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
  const navLinks  = document.querySelector('.nav-links');
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

  // Discount code – allow pressing Enter in the input
  document.getElementById('discount-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') applyDiscount();
  });
}
