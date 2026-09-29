# Gwalior Stone Crafts — Website

Stone business ki multi-page website: products, gallery, product detail page, WhatsApp quote enquiry.
Plain HTML + CSS + JavaScript hai — koi build step nahi, koi framework nahi. Files kholo, edit karo, push karo.

- **Live:** https://gwaliorstonecrafts.com (Vercel par, `craft-stone.vercel.app` bhi)
- **GitHub:** https://github.com/theveer19/craft-stone
- **Local folder:** `D:\Dwld\stone-site-multipage\stone-site`

---

## 1. Ek nazar mein

| Cheez | Ginti |
|---|---|
| Products (products page par) | **103** (8 categories) |
| Product photos | 214 (ek product mein 1–7 photos) |
| Gallery photos | **477** |
| Kul alag photos site par | ~528 (client ki `updatedImg` ki lagbhag saari) |
| `images/` folder size | ~180 MB (web ke liye compress ki hui) |

> **103 products kyun, 500 photos kyun nahi?** Product = ek stone item (naam, price, specs), jaise "Kashmir White".
> Ek product mein kai photos hoti hain. Bina naam/price wali project photos **Gallery** mein hain.

---

## 2. Pages

| File | Page | Kya hai |
|---|---|---|
| `index.html` | Home | 5 photos ka carousel, stats, categories, Recent Projects, reviews, WhatsApp CTA |
| `products.html` | Products | 103 products, category filter, sort, grid/list view |
| `product.html` | Product detail | `product.html?p=<slug>` — saari photos, specs, **WhatsApp Enquiry** + **Request Quote** |
| `gallery.html` | Gallery | 477 photos, filters, "Load More" (36 ek baar mein), full-screen viewer |
| `about.html` | About | Timeline, certificates |
| `blog.html` | Blog | Articles ke cards |
| `contact.html` | Contact | Enquiry form (WhatsApp par jata hai), map |

---

## 3. Files ka kaam

```
stone-site/
├── index.html, products.html, product.html, gallery.html,
│   about.html, blog.html, contact.html     ← pages
├── data.js        ← SAARA DATA: products, gallery photos, blog, categories
├── products.js    ← products page ka logic (filter, sort, cards, quick-view popup)
├── nav.js         ← upar ka menu (har page par apne aap banta hai)
├── footer.js      ← neeche ka footer
├── style.css      ← original base design
├── page-fix.css   ← layout fixes, gallery viewer, product page ka layout
├── enhance.css    ← premium design: colors, buttons, animations, WhatsApp button, quote form
├── enhance.js     ← smooth scroll, scroll animations, counters, back-to-top, WhatsApp button, footer contact
├── vendor/lenis.min.js  ← smooth scroll library (MIT license)
├── images/
│   ├── <category>/        ← full-size photos (max 1600px)
│   ├── thumbs/<category>/ ← chhoti photos (max 720px) — cards/grid ke liye
│   └── hero/              ← home carousel ki 5 photos
└── .gitignore     ← assets/, updatedImg/, node_modules/ GitHub par NAHI jaate
```

**Photo categories (`images/` ke andar):** ballustrades, blogpost, cobbles, facade-wall-coverings, landscaping,
misc, mouldings-and-cornices, products, sandstone, stone-crafts, stone-jali, stone-mandirs, stone-pebbles,
stone-signage, terracotta, wall-coverings, waterfalls-fountains, hero

---

## 4. Roz ke kaam — kaise karein

> Har badlav ke baad: file **save** karo → browser mein refresh karke dekho → **push** karo (section 6).
> **Dhyan:** text mein `'` (apostrophe) likhna ho to `\'` likho, jaise `Veer\'s` — warna site toot jayegi.

### 4.1 Product ka naam / price / description badalna
`data.js` kholo → **Ctrl+F** se product ka naam dhundho → badlo:
```js
{ name:'Kashmir White', mainCategory:'flooring', subCategory:'granite-flooring', badge:'popular',
  desc:'Milky white background...', finishes:['#f5f5f0','#e8e0d4','#c0b49a'],
  specs:{ Origin:'Jammu & Kashmir', Hardness:'7 Mohs', Finish:'Polished / Honed' },
  price:'₹220/sq ft',
  img:'images/products/download.jpg',
  imgs:['images/products/download.jpg'] },
```
| Field | Matlab |
|---|---|
| `name` | Card aur product page par naam. **Naam badla to link bhi badal jata hai** (`?p=kashmir-white`) |
| `mainCategory` / `subCategory` | Section 5 wali list se ID |
| `badge` | `'popular'` (laal), `'new'` (dark), ya `''` (kuch nahi) |
| `desc` | Description |
| `finishes` | Shade ke gol rang (hex color codes) |
| `specs` | Specifications — koi bhi `Key:'Value'` jodo/hatao |
| `price` | Jaise `'₹95/sq ft'` ya `'On Request'` |
| `img` | Card ki main photo (hamesha `imgs` ki pehli photo) |
| `imgs` | Product page ki saari photos, kram se |

`id` aur `slug` (link) **apne aap** bante hain — mat likho.

### 4.2 Naya product jodna
1. Photo `images/<category>/` mein daalo (JPG, chhota naam, jaise `agra-red-2.jpg`).
2. **Wahi photo** `images/thumbs/<category>/` mein bhi copy karo (thumbnail zaroori hai, warna card khaali dikhega).
3. `data.js` mein `const PRODUCTS = [` ke andar kisi product ki line copy karke neeche paste karo, values badlo.
4. Naam **unique** rakho (do products ka same naam nahi).

### 4.3 Gallery photo ka naam / nayi photo
`data.js` mein `const GALLERY_ITEMS = [` ke andar:
```js
{ cat:'wall', h:300, img:'images/wall-coverings/img-2419.jpg', title:'Wall Cladding' },
```
- `title` = photo bada karne par neeche dikhne wala naam.
- `cat` = filter: `wall`, `jali`, `fountain`, `crafts`, `landscape`, `balustrade`, `mandir`, `signage`.
- `h` = grid mein uchai (225–400).
- Nayi photo: file `images/...` aur `images/thumbs/...` dono mein daalo, phir ek line jodo.
- **Kaunsi photo hai pata karna:** site par photo par right-click → "Open image in new tab" → address mein file ka naam.

### 4.4 Home carousel ki photos badalna
- Photos `images/hero/` mein hain (1920px wide, ~250 KB rakho).
- `index.html` mein `<div class="hero-slider">` ke andar har photo ki ek `slide` line hai.
- Photos jitni, utne hi `<span class="dot">` `slider-dots` mein hone chahiye.
- Pehli photo `<head>` ki `preload` line mein bhi hai — pehli photo badlo to wahan bhi naam badlo.

### 4.5 Photo ka file naam badalna — mat karo
File ka naam visitor ko dikhta nahi. Badalna hi ho to **3 jagah** ek saath: `images/<folder>/`, `images/thumbs/<folder>/`, aur `data.js`.

---

## 5. Categories (IDs)

| `mainCategory` | Naam | `subCategory` IDs |
|---|---|---|
| `wall-coverings` | Wall Coverings | classic-wall, exterior-wall, wall-murals, luxury-wall, marble-wall, stone-mosaic, 2d-3d-wall |
| `flooring` | Flooring | granite-flooring, marble-flooring, sandstone-flooring, slate-flooring, limestone-flooring |
| `landscaping` | Landscaping | limestone-landscaping, sandstone-landscaping, slate-landscaping, granite-landscaping |
| `stone-crafts` | Stone Crafts | planters, stone-seaters, cornices-mouldings, chhatri-pergola |
| `waterfalls-fountains` | Waterfalls & Fountains | wall-waterfalls, garden-fountains, floor-fountains |
| `cobblestones` | Cobblestones | sandstone-cobbles, limestone-cobbles, granite-cobbles |
| `stone-jali` | Stone Jali | 2d-jali, 3d-jali |
| `stone-mandirs` | Stone Mandirs | home-mandirs, garden-mandirs, large-mandirs |

Categories `data.js` ke `MAIN_CATEGORIES` mein hain.

---

## 6. Push / Deploy (Vercel)

VS Code terminal mein (`stone-site` folder ke andar):
```
git add -A
git commit -m "kya badla"
git push
```
- Push ke 1–2 minute baad Vercel apne aap naya version live kar deta hai.
- Live site par purana dikhe → **Ctrl + Shift + R** (hard refresh).
- Vercel dashboard mein latest deployment "Ready" hona chahiye.

**Galtiyan jo ho chuki hain:**
| Error | Fix |
|---|---|
| `has no upstream branch` | Ek baar `git push -u origin main` (ho chuka hai, ab sirf `git push`) |
| `nothing to commit` par site purani | Commit ho chuka hai, bas `git push` chalao |
| `Please tell me who you are` | `git config --global user.name "Veer"` aur `git config --global user.email "..."` |

---

## 7. WhatsApp & Enquiry kaise kaam karti hai

**Number:** `919005533115` (country code + number, bina `+`). Number badalna ho to in sab jagah badlo:
- `enhance.js` → `const WA_NUMBER` (floating button, footer button)
- `product.html` → `const WA_NUMBER` (product enquiry + quote)
- `contact.html` → `const whatsappNumber` (contact form)
- Har page ki `whatsapp-float` link (`wa.me/919005533115`) aur `index.html` ka `ctaWa`
- Phone numbers: `contact.html` aur `enhance.js` (footer)

Sab ek saath: VS Code mein **Ctrl+Shift+H** → `919005533115` → naya number → Replace All.

**Enquiry ka flow:**
1. **Product page → WhatsApp Enquiry:** seedha WhatsApp — product ka naam, category, link.
2. **Product page → Request Quote:** form khulta hai (naam*, phone*, city, quantity, requirement) → WhatsApp message:
   ```
   *Quote Request*
   *Product:* Dholpur Beige
   *Category:* Sandstone Landscaping
   *Listed price:* ₹95/sq ft
   *Link:* https://.../product.html?p=dholpur-beige
   *Name:* ...  *Phone:* ...  *Location:* ...  *Quantity:* ...
   ```
   Email ka option bhi hai (`gwaliorstonecrafts@gmail.com`).
3. **Products page ka ✉ button / popup ka "Request Quote"** → usi product ka quote form khulta hai (`&quote=1`).
4. **Contact page** `contact.html?p=<slug>` → form par product ka card dikhta hai, message mein product naam jata hai.

Koi server/database nahi — sab enquiry **WhatsApp** (ya email) par aati hai.

---

## 8. Design / Motion

- **Colors** `enhance.css` ke upar `:root` mein: `--gold`, `--ink`, `--ivory`, `--gold-grad`… yahan badlo to poori site badlegi.
- **Fonts:** Cormorant Garamond (headings) + Jost (text) — Google Fonts se.
- **Smooth scroll:** Lenis (sirf mouse wale computers par; phone par normal scroll).
- **Scroll animations:** `enhance.js` mein `REVEAL` list — jo elements scroll par upar aate hain.
- Jin logon ne phone/computer mein "reduce motion" on kiya hai, unke liye animations band ho jaate hain.
- Home: slider photo 6 second mein badalti hai (`index.html` → `setInterval(nextSlide, 6000)`).

---

## 9. Photos — kahan se aayi, kaise bani

- Client ki original photos `updatedImg/stone 11/` mein hain (~1.9 GB, videos milake). **Ye GitHub par nahi jaati** (`.gitignore`). Iska backup Google Drive par rakho.
- Site ke liye har photo ka: full size (max 1600px, JPEG ~78% quality) + thumbnail (max 720px).
- Grid/cards mein sirf thumbnail load hota hai; badi photo tab jab koi kholta hai → site fast rehti hai.
- Pehle photos Cloudinary se aati thi (401 error de raha tha) — ab sab `images/` folder se.
- 35 videos (~600 MB) abhi site par **nahi** hain. Lagane ho to YouTube par daal ke embed karna best hai.

---

## 10. Client se pending (zaroori)

- [ ] **17 products ki photos sirf ~225px ki hain** (`images/products/download*.jpg`) — dhundhli dikhti hain. Client se asli badi photos mangwao:
  Kashmir White, Black Galaxy, Rosy Pink, Makrana White, Green Marble, Rainforest Brown, Dholpur Beige, Agra Red,
  Autumn Brown, Black Slate, Copper Quartzite, Yellow Slate, Kota Brown, Fossil Limestone, Blue Limestone,
  Pietra Dura Panel, Floral Tabletop. (Rosa Beta Granite Paving bhi chhoti hai.)
- [ ] **`images/wall-coverings/image-copy-3.jpg`** (Multi-Colour Slate Flooring) par **Vecteezy watermark** hai — stock photo, copyright issue. Badlo.
- [ ] **Home page reviews** (Michael Hartmann, Sara Al-Moosa, James Thornton) sample lagte hain — asli reviews daalo ya hatao.
- [ ] **Claims check karo:** "since 1999", "25+ years", "ISO 9001/14001/SA 8000", "50+ countries export, 6000+ containers" — client confirm kare, warna hatao.
- [ ] Home carousel ki 5 photos AI-generated lagti hain — banner ke liye theek, par "Recent Projects"/Gallery mein asli kaam hi rakho.
- [ ] Footer mein YouTube link khaali tha (hata diya); Instagram handle `thepashanamcrafts` sahi hai confirm karo.

---

## 11. Local mein kaise dekhein

- Seedha `index.html` par double-click — chal jayegi.
- Ya VS Code "Live Server" extension → "Go Live".

---

## 12. Changelog

| Kab | Kya |
|---|---|
| Sep 2026 | Single page → multi-page site; saari photos local (`images/`), thumbnails, gallery 477 photos, products ki multiple photos |
| Sep 2026 | `updatedImg` ki 74 chhooti hui photos gallery mein jodi |
| Sep 2026 | Full product page (`product.html`), product ke naam se WhatsApp enquiry + quote form, contact form product-aware |
| Sep 2026 | Premium redesign (`enhance.css/js`): naya hero, stats, marquee, Recent Projects, CTA, smooth scroll, animations, WhatsApp button, mobile menu |
| Sep 2026 | Home carousel: 5 nayi photos (`images/hero/`) |
