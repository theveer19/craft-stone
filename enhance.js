// enhance.js — smooth scrolling, scroll reveals, counters, WhatsApp button,
// back-to-top and other shared polish. Load after nav.js / footer.js.
(function () {
  const WA_NUMBER = '919005533115';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const WA_SVG = '<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"><path d="M16 3C8.8 3 3 8.6 3 15.6c0 2.5.8 4.9 2.1 6.9L3.6 29l6.7-1.7c1.8 1 3.8 1.5 5.8 1.5 7.2 0 13-5.6 13-12.6S23.2 3 16 3zm0 23.3c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4 1 1-3.8-.2-.4c-1-1.6-1.6-3.5-1.6-5.4C5.7 10 10.3 5.5 16 5.5S26.3 10 26.3 15.6 21.7 26.3 16 26.3zm5.7-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z"/></svg>';
  window.WA_SVG = WA_SVG;
  window.WA_NUMBER = WA_NUMBER;

  // ── Smooth scrolling (Lenis) ──────────────────────────────
  let lenis = null;
  if (!reduceMotion && window.Lenis && window.matchMedia('(pointer: fine)').matches) {
    try {
      lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
      window.lenis = lenis;
      // Pause smooth scroll while a modal/lightbox locks the page
      new MutationObserver(() => {
        if (document.body.style.overflow === 'hidden') lenis.stop(); else lenis.start();
      }).observe(document.body, { attributes: true, attributeFilter: ['style'] });
    } catch (e) { lenis = null; }
  }
  function markScrollables() {
    document.querySelectorAll('.modal, .modal-body, .lightbox, .qm, .qm-box, .nav-links, .work-rail, .pd-thumbs, textarea')
      .forEach(el => el.setAttribute('data-lenis-prevent', ''));
  }

  // ── Scroll progress + nav state + back-to-top ─────────────
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  const toTop = document.createElement('button');
  toTop.className = 'to-top'; toTop.type = 'button'; toTop.setAttribute('aria-label', 'Back to top'); toTop.innerHTML = '↑';
  toTop.addEventListener('click', () => lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(toTop);

  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    const nav = document.getElementById('mainNav');
    if (nav) nav.classList.toggle('scrolled', y > 40);
    toTop.classList.toggle('show', y > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Mobile menu ───────────────────────────────────────────
  window.toggleMobileMenu = function () {
    const open = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', open);
    if (lenis) open ? lenis.stop() : lenis.start();
  };
  document.addEventListener('click', e => {
    if (e.target.closest('.nav-links a')) document.body.classList.remove('menu-open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) window.toggleMobileMenu();
  });

  // ── WhatsApp floating button ──────────────────────────────
  function upgradeWhatsApp() {
    document.querySelectorAll('a.whatsapp-float').forEach(a => {
      if (a.querySelector('.wa-ico')) return;
      a.innerHTML = '<span class="wa-ico">' + WA_SVG + '</span><span class="wa-label">Chat on WhatsApp</span>';
      a.setAttribute('aria-label', 'Chat with us on WhatsApp');
    });
    document.querySelectorAll('.btn-wa, .pd-btn-wa').forEach(a => {
      if (!a.querySelector('svg')) a.insertAdjacentHTML('afterbegin', WA_SVG);
    });
  }

  // ── Footer extras (social icons, contact column, year) ────
  function upgradeFooter() {
    const f = document.getElementById('mainFooter');
    if (!f || f.dataset.enhanced) return;
    f.dataset.enhanced = '1';
    const icons = {
      Facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z"/></svg>',
      Instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
      YouTube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9L15.6 12l-5.8 3.1z"/></svg>'
    };
    f.querySelectorAll('.social-btn').forEach(a => {
      const t = a.getAttribute('title');
      if (icons[t]) { a.innerHTML = icons[t]; a.setAttribute('aria-label', t); a.target = '_blank'; a.rel = 'noopener'; }
      if (t === 'YouTube' && a.getAttribute('href') === '#') a.remove();
    });
    // Replace the (non-working) newsletter box with direct contact details
    const cols = f.querySelectorAll('.footer-col');
    const last = cols[cols.length - 1];
    if (last && /Newsletter/i.test(last.textContent)) {
      last.innerHTML =
        '<h4>Get in Touch</h4>' +
        '<ul class="footer-contact">' +
        '<li><b>☎</b><span><a href="tel:+919005533115">+91 90055 33115</a><br><a href="tel:+917575950606">+91 75759 50606</a></span></li>' +
        '<li><b>✉</b><a href="mailto:gwaliorstonecrafts@gmail.com">gwaliorstonecrafts@gmail.com</a></li>' +
        '<li><b>⌖</b><span>Near Purani Chawani Police Station,<br>Gwalior, MP 474009</span></li>' +
        '</ul>' +
        '<a class="btn-wa" style="margin-top:20px;padding:12px 22px;font-size:0.72rem" target="_blank" rel="noopener" href="https://wa.me/' + WA_NUMBER + '?text=' +
        encodeURIComponent('Hi Gwalior Stone Crafts! I would like to know more about your stones.') + '">' + WA_SVG + 'WhatsApp Us</a>';
    }
    const copy = f.querySelector('.footer-bottom span');
    if (copy) copy.textContent = '© ' + new Date().getFullYear() + ' Gwalior Stone Crafts. All rights reserved.';
  }

  // ── Scroll reveal ─────────────────────────────────────────
  const REVEAL = [
    '.section-tag', '.section-title', '.section-subtitle', '.cat-card', '.feature-item', '.about-imgs', '.about-text > .btn-dark',
    '.testimonial-card', '.product-card', '.gal-item', '.blog-card', '.cert-card', '.timeline-item', '.contact-detail',
    '.contact-form', '.contact-info h2', '.contact-info > p', '.stat', '.work-item', '.cta-band', '.pd-info > *', '.pd-gallery',
    '.footer-grid > *', '.products-toolbar', '.category-tabs'
  ].join(',');
  let io = null;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  }
  function tagReveal(root) {
    if (!io) return;
    const els = (root || document).querySelectorAll(REVEAL);
    const groups = new Map();
    els.forEach(el => {
      if (el.dataset.rv) return;
      el.dataset.rv = '1';
      if (el.closest('.modal, .qm, .lightbox, .nav-links')) return;
      el.classList.add('rv');
      if (el.matches('.stat, .work-item')) el.classList.add('rv-zoom');
      // stagger siblings that appear together
      const p = el.parentElement;
      const i = groups.get(p) || 0;
      groups.set(p, i + 1);
      el.style.setProperty('--rv-d', Math.min(i, 8) * 0.07 + 's');
      io.observe(el);
    });
  }

  // ── Number counters ───────────────────────────────────────
  function runCounters() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;
    const animate = el => {
      const end = parseInt(el.dataset.count, 10) || 0, suffix = el.dataset.suffix || '';
      if (reduceMotion) { el.textContent = end + suffix; return; }
      const t0 = performance.now(), dur = 1600;
      const step = now => {
        const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(end * e) + suffix;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in window)) { els.forEach(animate); return; }
    const co = new IntersectionObserver(ents => ents.forEach(en => {
      if (en.isIntersecting) { animate(en.target); co.unobserve(en.target); }
    }), { threshold: 0.4 });
    els.forEach(el => co.observe(el));
  }

  function init() {
    upgradeWhatsApp();
    upgradeFooter();
    markScrollables();
    tagReveal();
    runCounters();
    onScroll();
    // Content that pages render later (product grid, gallery, footer) gets the same treatment
    new MutationObserver(muts => {
      let added = false;
      muts.forEach(m => { if (m.addedNodes.length) added = true; });
      if (added) { upgradeFooter(); upgradeWhatsApp(); markScrollables(); tagReveal(); }
    }).observe(document.body, { childList: true, subtree: true });
    // Safety net: never leave content hidden
    setTimeout(() => document.querySelectorAll('.rv:not(.in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
    }), 1500);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(init, 0));
  else setTimeout(init, 0);
})();
