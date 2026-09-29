// footer.js — Shared footer injector
function injectFooter() {
  const footer = document.getElementById('mainFooter');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="logo" href="index.html">
          <div class="logo-icon"></div>
          Gwalior Stone Crafts
        </a>
        <p>India's premier natural stone exporter since 1999. Supplying premium granite, marble, sandstone and more to architects, designers and builders worldwide.</p>
        <div class="social-links">
          <a class="social-btn" href="https://www.facebook.com/share/17yBgfU8c3/?mibextid=wwXIfr" title="Facebook">f</a>
          <a class="social-btn" href="https://www.instagram.com/thepashanamcrafts?igsh=d2hhdGk5NDkxZTNn" title="Instagram">in</a>
          <a class="social-btn" href="#" title="YouTube">▶</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="blog.html">Stone Journal</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Categories</h4>
        <ul class="footer-links">
          <li><a href="products.html?cat=wall-coverings">Wall Coverings</a></li>
          <li><a href="products.html?cat=flooring">Flooring</a></li>
          <li><a href="products.html?cat=landscaping">Landscaping</a></li>
          <li><a href="products.html?cat=stone-crafts">Stone Crafts</a></li>
          <li><a href="products.html?cat=stone-jali">Stone Jali</a></li>
          <li><a href="products.html?cat=stone-mandirs">Stone Mandirs</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Newsletter</h4>
        <p style="font-size:0.82rem;font-weight:300;line-height:1.7;margin-bottom:16px">Get the latest stone collections and project inspiration delivered to your inbox.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="your@email.com"/>
          <button>→</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Gwalior Stone Crafts. All rights reserved.</span>
      <div class="certifications">
        <div class="cert-badge">ISO 9001</div>
        <div class="cert-badge">ISO 14001</div>
        <div class="cert-badge">SA 8000</div>
      </div>
    </div>
  `;
}
