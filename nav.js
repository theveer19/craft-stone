// nav.js — Shared navigation injector (self-initializing)
// The navbar now builds itself on load. Pages can still call
// injectNav('home') etc. — that keeps working and is harmless.

const NAV_PAGES = [
  { id: 'home',     label: 'Home',        href: 'index.html' },
  { id: 'products', label: 'Products',    href: 'products.html' },
  { id: 'about',    label: 'About Us',    href: 'about.html' },
  { id: 'gallery',  label: 'Gallery',     href: 'gallery.html' },
  { id: 'blog',     label: 'Blog',        href: 'blog.html' },
  { id: 'contact',  label: 'Get a Quote', href: 'contact.html', isCta: true },
];

// Work out which page we're on from the filename in the URL
function getCurrentPageId() {
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const map = {
    '':              'home',
    'index.html':    'home',
    'products.html': 'products',
    'product.html':  'products',
    'about.html':    'about',
    'gallery.html':  'gallery',
    'blog.html':     'blog',
    'contact.html':  'contact',
  };
  return map[file] || 'home';
}

function injectNav(activePage) {
  const nav = document.getElementById('mainNav');
  if (!nav) return; // nothing to fill on this page

  if (!activePage) activePage = getCurrentPageId();

  nav.innerHTML = `
    <a class="logo" href="index.html">
      <div class="logo-icon"></div>
      Gwalior Stone Crafts
    </a>
    <ul class="nav-links">
      ${NAV_PAGES.map(p => `
        <li>
          <a href="${p.href}"
             id="nav-${p.id}"
             class="${p.isCta ? 'nav-cta' : ''}${activePage === p.id ? ' active' : ''}">
            ${p.label}
          </a>
        </li>
      `).join('')}
    </ul>
    <div class="hamburger" onclick="toggleMobileMenu()">
      <span></span><span></span><span></span>
    </div>
  `;
}

function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText =
      'display:flex;flex-direction:column;position:fixed;top:72px;left:0;right:0;background:var(--warm-white);padding:20px 8%;gap:20px;border-bottom:1px solid rgba(139,115,85,0.15);z-index:999';
  }
}

// ── Auto-build the navbar, no matter what the page does ──
function initNav() {
  injectNav(getCurrentPageId());
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav(); // script loaded after DOM was already ready
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Lazy background images ──
// Any element with data-bg="path.jpg" gets its background-image set only when
// it scrolls near the viewport. Works for content rendered later by JS too.
(function () {
  function load(el) {
    const src = el.getAttribute('data-bg');
    if (!src) return;
    el.style.backgroundImage = "url('" + src + "')";
    el.removeAttribute('data-bg');
  }
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); load(e.target); } });
      }, { rootMargin: '400px 0px' })
    : null;
  function scan(root) {
    if (!root || !root.querySelectorAll) return;
    if (root.hasAttribute && root.hasAttribute('data-bg')) (io ? io.observe(root) : load(root));
    root.querySelectorAll('[data-bg]').forEach(el => io ? io.observe(el) : load(el));
  }
  function start() {
    scan(document.body);
    new MutationObserver(muts => muts.forEach(m => m.addedNodes.forEach(scan)))
      .observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
