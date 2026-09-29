// products.js — Products page logic

let activeMainCategory = 'all';
let activeSubCategory  = 'all';

// ─── SIDEBAR ───────────────────────────────────────────────

function buildSidebar() {
  const sidebar = document.querySelector('.products-sidebar');
  if (!sidebar) return;
  sidebar.innerHTML = `
    <div class="sidebar-title">Browse Categories</div>
    <div id="mainCatList">
      ${MAIN_CATEGORIES.map(mc => `
        <div class="main-cat-item" id="mcat-${mc.id}">
          <div class="main-cat-header ${activeMainCategory === mc.id ? 'open' : ''}"
               onclick="toggleMainCat('${mc.id}')">
            <span class="main-cat-icon">${mc.icon}</span>
            <span class="main-cat-label">${mc.label}</span>
            <span class="main-cat-arrow">${activeMainCategory === mc.id ? '▾' : '▸'}</span>
          </div>
          <div class="sub-cat-list" id="sublist-${mc.id}"
               style="display:${activeMainCategory === mc.id ? 'flex' : 'none'}">
            <div class="sub-cat-item ${activeMainCategory === mc.id && activeSubCategory === 'all' ? 'active' : ''}"
                 onclick="selectSubCategory('${mc.id}', 'all')">
              All ${mc.label}
            </div>
            ${mc.subcategories.map(sc => `
              <div class="sub-cat-item ${activeSubCategory === sc.id ? 'active' : ''}"
                   onclick="selectSubCategory('${mc.id}', '${sc.id}')">
                ${sc.label}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function toggleMainCat(mainCatId) {
  if (activeMainCategory === mainCatId) {
    activeMainCategory = 'all';
    activeSubCategory  = 'all';
    buildSidebar();
    renderProductsView('all', 'all');
    return;
  }
  activeMainCategory = mainCatId;
  activeSubCategory  = 'all';
  buildSidebar();
  renderProductsView(mainCatId, 'all');
}

function showSubcategories(mainCatId) {
  activeMainCategory = mainCatId;
  activeSubCategory  = 'all';
  buildSidebar();
  renderProductsView(mainCatId, 'all');
}

function selectSubCategory(mainCatId, subCatId) {
  activeMainCategory = mainCatId;
  activeSubCategory  = subCatId;
  buildSidebar();
  renderProductsView(mainCatId, subCatId);
}

// ─── TABS ──────────────────────────────────────────────────

function initCategoryTabs() {
  const tabsContainer = document.querySelector('.category-tabs');
  if (!tabsContainer) return;
  const tabs = [
    { id: 'all',                  label: 'All Products' },
    { id: 'wall-coverings',       label: 'Wall Coverings' },
    { id: 'flooring',             label: 'Flooring' },
    { id: 'landscaping',          label: 'Landscaping' },
    { id: 'stone-crafts',         label: 'Stone Crafts' },
    { id: 'waterfalls-fountains', label: 'Waterfalls & Fountains' },
    { id: 'cobblestones',         label: 'Cobblestones' },
    { id: 'stone-jali',           label: 'Stone Jali' },
    { id: 'stone-mandirs',        label: 'Stone Mandirs' },
  ];
  tabsContainer.innerHTML = tabs.map(t => `
    <div class="cat-tab ${t.id === 'all' ? 'active' : ''}"
         data-main="${t.id}"
         onclick="filterByCategory('${t.id}', this)">
      ${t.label}
    </div>
  `).join('');
}

function filterByCategory(cat, el) {
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  activeMainCategory = cat;
  activeSubCategory  = 'all';
  if (cat !== 'all') buildSidebar();
  renderProductsView(cat, 'all');
}

// ─── RENDER ────────────────────────────────────────────────

function renderProductsView(mainCat, subCat) {
  activeMainCategory = mainCat;
  activeSubCategory  = subCat;

  let filtered = PRODUCTS;
  if (mainCat !== 'all') filtered = filtered.filter(p => p.mainCategory === mainCat);
  if (subCat  !== 'all') filtered = filtered.filter(p => p.subCategory  === subCat);

  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.cat-tab[data-main="${mainCat}"]`);
  if (activeTab) activeTab.classList.add('active');
  else {
    const allTab = document.querySelector('.cat-tab[data-main="all"]');
    if (allTab) allTab.classList.add('active');
  }

  updateBreadcrumbInfo(mainCat, subCat, filtered.length);

  const grid = document.getElementById('productsGrid');
  document.getElementById('productCount').textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--mid);font-size:0.9rem">
      No products found in this category. Please try another selection.
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="location.href=productUrl(PRODUCTS.find(x => x.id === ${p.id}))">
      <div class="product-img-wrap">
        <div class="product-img" data-bg="${thumbOf(p.img)}"></div>
        ${p.badge ? `<div class="product-badge ${p.badge}">${p.badge}</div>` : ''}
        ${(p.imgs && p.imgs.length > 1) ? `<div class="photo-count">${p.imgs.length} photos</div>` : ''}
        <div class="product-actions">
          <button class="prod-action-btn" onclick="event.stopPropagation();openModal(${p.id})" title="Quick View">👁</button>
          <button class="prod-action-btn" onclick="event.stopPropagation();location.href=productUrl(PRODUCTS.find(x => x.id === ${p.id}))+'&quote=1'" title="Request Quote">✉</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${getCategoryLabel(p.mainCategory, p.subCategory)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-finish">
            ${(p.finishes || []).map(f => `<div class="finish-dot" style="background:${f}" title="${f}"></div>`).join('')}
          </div>
          <div class="product-price">From <span>${p.price || 'On Request'}</span></div>
        </div>
      </div>
    </div>
  `).join('');
}

function getCategoryLabel(mainCatId, subCatId) {
  const main = MAIN_CATEGORIES.find(m => m.id === mainCatId);
  if (!main) return (mainCatId || '').charAt(0).toUpperCase() + (mainCatId || '').slice(1);
  const sub  = main.subcategories.find(s => s.id === subCatId);
  return sub ? sub.label : main.label;
}

function updateBreadcrumbInfo(mainCat, subCat, count) {
  const main = MAIN_CATEGORIES.find(m => m.id === mainCat);
  const sub  = main ? main.subcategories.find(s => s.id === subCat) : null;
  const countEl = document.getElementById('productCount');
  if (countEl) countEl.textContent = count;
  const trailEl = document.getElementById('catBreadcrumb');
  if (!trailEl) return;
  if (mainCat === 'all')  trailEl.textContent = 'All Products';
  else if (sub)           trailEl.textContent = `${main.label} › ${sub.label}`;
  else                    trailEl.textContent = main ? main.label : 'All Products';
}

function sortProducts(val) {
  if (val === 'name-az')  PRODUCTS.sort((a,b) => a.name.localeCompare(b.name));
  else if (val === 'name-za') PRODUCTS.sort((a,b) => b.name.localeCompare(a.name));
  else if (val === 'popular') PRODUCTS.sort((a,b) => (b.badge==='popular'?1:0)-(a.badge==='popular'?1:0));
  renderProductsView(activeMainCategory, activeSubCategory);
}

function setView(mode, btn) {
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('productsGrid');
  if (mode === 'list') grid.classList.add('list-view');
  else grid.classList.remove('list-view');
}

// ─── MODAL ────────────────────────────────────────────────

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const imgs = (p.imgs && p.imgs.length) ? p.imgs : [p.img];
  setModalImage(imgs[0]);
  const thumbs = document.getElementById('modalThumbs');
  if (thumbs) {
    thumbs.innerHTML = imgs.length > 1 ? imgs.map((src, i) => `
      <button class="modal-thumb${i === 0 ? ' active' : ''}" style="background-image:url('${thumbOf(src)}')"
              onclick="setModalImage('${src}', this)" aria-label="Photo ${i + 1}"></button>`).join('') : '';
  }
  document.getElementById('modalCat').textContent  = getCategoryLabel(p.mainCategory, p.subCategory);
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalSpecs').innerHTML  = Object.entries(p.specs || {}).map(([k,v]) => `
    <div class="spec-item"><div class="spec-key">${k}</div><div class="spec-val">${v}</div></div>
  `).join('');
  const full = document.getElementById('modalFull');
  if (full) full.href = productUrl(p);
  const q = document.getElementById('modalQuote');
  if (q) q.onclick = () => { location.href = productUrl(p) + '&quote=1'; };
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function setModalImage(src, btn) {
  document.getElementById('modalImg').style.backgroundImage = `url('${src}')`;
  if (btn) {
    document.querySelectorAll('.modal-thumb').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function closeModal(e) {
  if (e.target === document.getElementById('productModal')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}
