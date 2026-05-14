// ═══════════════════════════════════════════════════════════
// ─── CATEGORY / SUBCATEGORY STRUCTURE ──────────────────────
// ═══════════════════════════════════════════════════════════

const MAIN_CATEGORIES = [
  {
    id: 'wall-coverings',
    label: 'Wall Coverings',
    icon: '🧱',
    subcategories: [
      { id: 'classic-wall',    label: 'Classic Wall Coverings' },
      { id: 'exterior-wall',   label: 'Exterior / Facade Wall Coverings' },
      { id: 'wall-murals',     label: 'Wall Murals' },
      { id: 'luxury-wall',     label: 'Luxury Wall Coverings' },
      { id: 'marble-wall',     label: 'Marble Wall Coverings' },
      { id: 'stone-mosaic',    label: 'Stone Mosaic' },
      { id: '2d-3d-wall',      label: '2D & 3D Wall Coverings' },
    ]
  },
  {
    id: 'flooring',
    label: 'Flooring',
    icon: '⬜',
    subcategories: [
      { id: 'granite-flooring',    label: 'Granite Flooring' },
      { id: 'marble-flooring',     label: 'Marble Flooring' },
      { id: 'sandstone-flooring',  label: 'Sandstone Flooring' },
      { id: 'slate-flooring',      label: 'Slate Flooring' },
      { id: 'limestone-flooring',  label: 'Limestone Flooring' },
    ]
  },
  {
    id: 'landscaping',
    label: 'Landscaping',
    icon: '🌿',
    subcategories: [
      { id: 'limestone-landscaping',   label: 'Limestone Landscaping' },
      { id: 'sandstone-landscaping',   label: 'Sandstone Landscaping' },
      { id: 'slate-landscaping',       label: 'Slate Landscaping' },
      { id: 'granite-landscaping',     label: 'Granite & Italian Landscaping' },
    ]
  },
  {
    id: 'stone-crafts',
    label: 'Stone Crafts',
    icon: '🏺',
    subcategories: [
      { id: 'planters',          label: 'Planters' },
      { id: 'stone-seaters',     label: 'Stone Seaters' },
      { id: 'cornices-mouldings',label: 'Cornices & Mouldings' },
      { id: 'chhatri-pergola',   label: 'Chhatri & Pergola' },
    ]
  },
  {
    id: 'waterfalls-fountains',
    label: 'Waterfalls & Fountains',
    icon: '⛲',
    subcategories: [
      { id: 'wall-waterfalls',   label: 'Wall Waterfalls' },
      { id: 'garden-fountains',  label: 'Garden Fountains' },
      { id: 'floor-fountains',   label: 'Floor Fountains' },
    ]
  },
  {
    id: 'cobblestones',
    label: 'Cobblestones',
    icon: '🪨',
    subcategories: [
      { id: 'sandstone-cobbles',  label: 'Sandstone Cobbles' },
      { id: 'limestone-cobbles',  label: 'Limestone Cobbles' },
      { id: 'granite-cobbles',    label: 'Granite Cobbles' },
    ]
  },
  {
    id: 'stone-jali',
    label: 'Stone Jali',
    icon: '🔲',
    subcategories: [
      { id: '2d-jali', label: '2D Jali' },
      { id: '3d-jali', label: '3D Jali' },
    ]
  },
  {
    id: 'stone-mandirs',
    label: 'Stone Mandirs',
    icon: '🛕',
    subcategories: [
      { id: 'home-mandirs',    label: 'Home Mandirs' },
      { id: 'garden-mandirs',  label: 'Garden Mandirs' },
      { id: 'large-mandirs',   label: 'Large Temple Mandirs' },
    ]
  },
];

// ═══════════════════════════════════════════════════════════
// ─── PRODUCTS DATA ──────────────────────────────────────────
// ═══════════════════════════════════════════════════════════

const PRODUCTS = [
  // ── LEGACY products (kept for backward compatibility) ──
  { id:1,  name:'Kashmir White',    category:'granite',   mainCategory:'flooring',          subCategory:'granite-flooring',   badge:'popular', desc:'Milky white background with intricate dark speckling. A timeless classic for luxury interiors.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#f5f5f0','#e8e0d4','#c0b49a'], specs:{ Origin:'Jammu & Kashmir', Hardness:'7 Mohs', Finish:'Polished / Honed', Size:'Up to 300×160 cm', Thickness:'1–3 cm', Application:'Flooring, Countertops' }, price:'₹220/sq ft' },
  { id:2,  name:'Black Galaxy',     category:'granite',   mainCategory:'flooring',          subCategory:'granite-flooring',   badge:'', desc:'Deep black backdrop with brilliant gold flecks — a statement stone for accent walls and countertops.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#1a1a1a','#2c2416','#3a3020'], specs:{ Origin:'Andhra Pradesh', Hardness:'7 Mohs', Finish:'Polished', Size:'Up to 260×160 cm', Thickness:'1.8–3 cm', Application:'Feature Walls, Countertops' }, price:'₹290/sq ft' },
  { id:3,  name:'Rosy Pink',        category:'granite',   mainCategory:'flooring',          subCategory:'granite-flooring',   badge:'new', desc:'Warm rose tones with medium grain texture. Popular for residential flooring and exterior cladding.', img:'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80', finishes:['#e8c4b8','#d4a090','#c08070'], specs:{ Origin:'Tamil Nadu', Hardness:'6.5 Mohs', Finish:'Polished / Flamed', Size:'Up to 300×180 cm', Thickness:'2–3 cm', Application:'Flooring, Paving' }, price:'₹180/sq ft' },
  { id:4,  name:'Makrana White',    category:'marble',    mainCategory:'flooring',          subCategory:'marble-flooring',    badge:'popular', desc:'The marble of the Taj Mahal. Pure white with subtle veining, unmatched for prestige and beauty.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Rajasthan', Hardness:'3 Mohs', Finish:'Polished / Honed', Size:'Slabs & Custom', Thickness:'1.5–3 cm', Application:'Flooring, Monuments, Cladding' }, price:'₹420/sq ft' },
  { id:5,  name:'Green Marble',     category:'marble',    mainCategory:'wall-coverings',    subCategory:'marble-wall',        badge:'', desc:'Rich emerald greens with white veining. Dramatic and luxurious for statement surfaces.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#4a6a4a','#6a8a6a','#8aaa8a'], specs:{ Origin:'Rajasthan', Hardness:'3 Mohs', Finish:'Polished', Size:'Custom Slabs', Thickness:'1.8–2 cm', Application:'Wall Cladding, Tabletops' }, price:'₹380/sq ft' },
  { id:6,  name:'Rainforest Brown', category:'marble',    mainCategory:'wall-coverings',    subCategory:'marble-wall',        badge:'new', desc:'Organic earthy patterns resembling aerial rainforest views — truly a work of natural art.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#8b6040','#a07848','#b89060'], specs:{ Origin:'Madhya Pradesh', Hardness:'3.5 Mohs', Finish:'Polished / Honed', Size:'Up to 240×120 cm', Thickness:'1.5–2 cm', Application:'Feature Walls, Countertops' }, price:'₹350/sq ft' },
  { id:7,  name:'Dholpur Beige',    category:'sandstone', mainCategory:'landscaping',       subCategory:'sandstone-landscaping', badge:'', desc:'Warm beige sandstone with fine grain. Ideal for exterior paving, courtyard flooring and facades.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#e8d8b8','#d4c49a','#c0aa80'], specs:{ Origin:'Rajasthan', Hardness:'5 Mohs', Finish:'Natural / Sawn', Size:'Custom Flags', Thickness:'2–5 cm', Application:'Paving, Flooring, Facades' }, price:'₹95/sq ft' },
  { id:8,  name:'Agra Red',         category:'sandstone', mainCategory:'landscaping',       subCategory:'sandstone-landscaping', badge:'popular', desc:'Deep russet red tones — the sandstone of Mughal monuments. Exceptional for heritage and decorative work.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#c04030','#a03020','#803018'], specs:{ Origin:'Agra, UP', Hardness:'5.5 Mohs', Finish:'Natural / Sandblasted', Size:'Custom', Thickness:'2–6 cm', Application:'Facades, Landscaping' }, price:'₹110/sq ft' },
  { id:9,  name:'Autumn Brown',     category:'sandstone', mainCategory:'landscaping',       subCategory:'sandstone-landscaping', badge:'new', desc:'Warm blend of brown, beige and grey. Versatile for swimming pools, driveways and garden paving.', img:'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', finishes:['#b89060','#a07848','#c8a878'], specs:{ Origin:'Rajasthan', Hardness:'5 Mohs', Finish:'Natural / Riven', Size:'Flags & Setts', Thickness:'2–4 cm', Application:'Pool Decks, Garden Paving' }, price:'₹88/sq ft' },
  { id:10, name:'Black Slate',      category:'slate',     mainCategory:'flooring',          subCategory:'slate-flooring',     badge:'popular', desc:'Classic charcoal-black slate with natural split surface. Perfect for roofing, flooring and rustic walls.', img:'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80', finishes:['#1a1a1a','#2a2a2a','#3a3a3a'], specs:{ Origin:'Andhra Pradesh', Hardness:'4 Mohs', Finish:'Natural Split / Honed', Size:'30×30 to 60×60 cm', Thickness:'0.6–1.5 cm', Application:'Roofing, Flooring, Cladding' }, price:'₹65/sq ft' },
  { id:11, name:'Copper Quartzite', category:'slate',     mainCategory:'wall-coverings',    subCategory:'classic-wall',       badge:'', desc:'Shimmering copper and bronze hues with quartzite hardness. Stunning for feature walls and countertops.', img:'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80', finishes:['#b07040','#c08050','#a06030'], specs:{ Origin:'Rajasthan', Hardness:'7 Mohs', Finish:'Natural / Brushed', Size:'Custom Slabs', Thickness:'1.5–3 cm', Application:'Wall Panels, Countertops' }, price:'₹140/sq ft' },
  { id:12, name:'Yellow Slate',     category:'slate',     mainCategory:'landscaping',       subCategory:'slate-landscaping',  badge:'new', desc:'Golden yellow tones with natural texture — adds warmth to any exterior or interior application.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#d4b840','#c0a030','#b89020'], specs:{ Origin:'Bihar', Hardness:'4 Mohs', Finish:'Natural Split', Size:'Random / Custom', Thickness:'0.8–2 cm', Application:'Garden Walls, Flooring' }, price:'₹72/sq ft' },
  { id:13, name:'Kota Brown',       category:'limestone', mainCategory:'flooring',          subCategory:'limestone-flooring', badge:'popular', desc:'Dense, durable limestone from Kota. Naturally polished surface, widely used in public buildings across India.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#7a6a50','#8a7a60','#9a8a70'], specs:{ Origin:'Kota, Rajasthan', Hardness:'4 Mohs', Finish:'Honed / Polished', Size:'Standard 60×60 cm', Thickness:'1.8–2.5 cm', Application:'Flooring, Paving' }, price:'₹78/sq ft' },
  { id:14, name:'Fossil Limestone', category:'limestone', mainCategory:'wall-coverings',    subCategory:'classic-wall',       badge:'', desc:'Packed with ancient marine fossils — each slab is a unique geological treasure for bespoke interiors.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#e0d0b8','#c8b898','#b0a080'], specs:{ Origin:'Rajasthan', Hardness:'3.5 Mohs', Finish:'Honed', Size:'Custom Slabs', Thickness:'1.5–3 cm', Application:'Wall Cladding, Flooring' }, price:'₹165/sq ft' },
  { id:15, name:'Blue Limestone',   category:'limestone', mainCategory:'flooring',          subCategory:'limestone-flooring', badge:'new', desc:'Cool blue-grey hues with a refined honed finish. Popular for contemporary kitchens and bathrooms.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#7090a8','#8090a0','#6080a0'], specs:{ Origin:'Rajasthan', Hardness:'3.5 Mohs', Finish:'Honed / Polished', Size:'30×60 to 60×120 cm', Thickness:'1.5–2 cm', Application:'Bathrooms, Kitchen Floors' }, price:'₹195/sq ft' },
  { id:16, name:'Pietra Dura Panel',category:'pietra',    mainCategory:'stone-crafts',      subCategory:'cornices-mouldings', badge:'popular', desc:'Hand-crafted inlay panels with semi-precious stones set into white Makrana marble. Each piece is unique.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#f8f5f0','#f0e8e0','#e8e0d8'], specs:{ Origin:'Agra, India', Technique:'Hand Inlay', Material:'Semi-precious Stones', Size:'Custom Commissions', Lead:'8–12 weeks', Application:'Luxury Interiors, Gifts' }, price:'On Request' },
  { id:17, name:'Floral Tabletop',  category:'pietra',    mainCategory:'stone-crafts',      subCategory:'planters',           badge:'new', desc:'Traditional Mughal floral designs inlaid into marble for dining tables, coffee tables and decorative surfaces.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#faf0e8','#f0e0d0','#e8d0b8'], specs:{ Origin:'Agra', Technique:'Pietra Dura', Material:'Marble + Gemstones', Size:'Custom', Lead:'6–10 weeks', Application:'Tabletops, Decorative Art' }, price:'On Request' },
  { id:18, name:'Geometric Mosaic', category:'pietra',    mainCategory:'wall-coverings',    subCategory:'stone-mosaic',       badge:'', desc:'Bold geometric patterns in contrasting stone colours — ideal for hotel lobbies and prestige entrances.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#2c2416','#5c4a2a','#b8964a'], specs:{ Origin:'Rajasthan', Technique:'Stone Mosaic', Material:'Mixed Natural Stones', Size:'Custom Sheets', Lead:'4–8 weeks', Application:'Lobbies, Feature Floors' }, price:'₹850/sq ft' },

  // ══════════════════════════════════════════════════════════
  // ─── WALL COVERINGS ────────────────────────────────────────
  // ══════════════════════════════════════════════════════════

  // Classic Wall Coverings
  { id:101, name:'Rustic Limestone Cladding',  mainCategory:'wall-coverings', subCategory:'classic-wall', badge:'popular', desc:'Natural-finish limestone strips with a warm cream tone. Adds classic elegance to living rooms and corridors.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#e0d0b8','#c8b89a','#b0a080'], specs:{ Origin:'Rajasthan', Finish:'Natural / Honed', Size:'Custom Strips', Thickness:'2–3 cm', Application:'Interior Walls' }, price:'₹160/sq ft' },
  { id:102, name:'Sandstone Ledger Panel',      mainCategory:'wall-coverings', subCategory:'classic-wall', badge:'', desc:'Split-face sandstone panels with layered texture. Ideal for accent feature walls in homes and offices.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#d4c49a','#c0aa80','#e8d8b8'], specs:{ Origin:'Rajasthan', Finish:'Natural Split', Size:'30×10 cm Strips', Thickness:'3–4 cm', Application:'Feature Walls' }, price:'₹120/sq ft' },
  { id:103, name:'Kota Stone Wall Tile',         mainCategory:'wall-coverings', subCategory:'classic-wall', badge:'new', desc:'Smooth Kota stone tiles with subtle veining. Versatile for both interior and exterior wall applications.', img:'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80', finishes:['#7a6a50','#8a7a60','#9a8a70'], specs:{ Origin:'Kota, Rajasthan', Finish:'Honed', Size:'30×30 cm', Thickness:'1.5 cm', Application:'Walls, Wet Areas' }, price:'₹85/sq ft' },
  { id:104, name:'Quartzite Stack Stone',        mainCategory:'wall-coverings', subCategory:'classic-wall', badge:'', desc:'Stacked quartzite panels with natural metallic shimmer. Perfect for statement lobby and reception walls.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#b07040','#c08050','#a06030'], specs:{ Origin:'Rajasthan', Finish:'Natural / Brushed', Size:'60×15 cm', Thickness:'3–5 cm', Application:'Lobby, Commercial Walls' }, price:'₹175/sq ft' },

  // Exterior / Facade Wall Coverings
  { id:111, name:'Yellow Sandstone Facade',     mainCategory:'wall-coverings', subCategory:'exterior-wall', badge:'popular', desc:'Golden-yellow sandstone blocks for exterior facades. Weather-resistant and architecturally striking.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#d4b840','#c4a830','#e4c850'], specs:{ Origin:'Jaisalmer, Rajasthan', Finish:'Sandblasted / Natural', Size:'Custom', Thickness:'4–8 cm', Application:'Exterior Cladding, Facades' }, price:'₹130/sq ft' },
  { id:112, name:'Red Agra Stone Cladding',     mainCategory:'wall-coverings', subCategory:'exterior-wall', badge:'', desc:'The iconic red sandstone of Mughal architecture. Exceptional durability for heritage-style exteriors.', img:'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', finishes:['#c04030','#a03020','#803018'], specs:{ Origin:'Agra, UP', Finish:'Natural / Dressed', Size:'Custom Blocks', Thickness:'5–10 cm', Application:'Exterior Walls, Heritage Restoration' }, price:'₹145/sq ft' },
  { id:113, name:'Grey Granite Facade Panel',   mainCategory:'wall-coverings', subCategory:'exterior-wall', badge:'new', desc:'Precision-cut grey granite panels for modern building facades. Frost-resistant and low maintenance.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#808080','#909090','#707070'], specs:{ Origin:'Tamil Nadu', Finish:'Flamed / Brushed', Size:'60×30 cm', Thickness:'2–3 cm', Application:'Commercial Facades' }, price:'₹210/sq ft' },
  { id:114, name:'Basalt Lava Stone Panel',     mainCategory:'wall-coverings', subCategory:'exterior-wall', badge:'', desc:'Dense volcanic basalt with dramatic dark texture. Ideal for contemporary exterior feature walls.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#303030','#404040','#202020'], specs:{ Origin:'Rajasthan', Finish:'Flamed / Honed', Size:'60×30 cm', Thickness:'2–4 cm', Application:'Exterior Accent Walls' }, price:'₹260/sq ft' },

  // Wall Murals
  { id:121, name:'Floral Stone Mural Panel',    mainCategory:'wall-coverings', subCategory:'wall-murals', badge:'popular', desc:'Hand-carved floral motifs in white Makrana marble. Each panel is a unique artistic masterpiece.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Agra', Technique:'Hand Carving', Material:'Makrana Marble', Size:'Custom Panels', Lead:'6–10 weeks', Application:'Luxury Walls, Hotels' }, price:'On Request' },
  { id:122, name:'Landscape Stone Mural',       mainCategory:'wall-coverings', subCategory:'wall-murals', badge:'', desc:'Scenic landscape carved in multi-tone sandstone. Perfect for grand reception walls and hotel lobbies.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#d4c49a','#e8d8b8','#c0aa80'], specs:{ Origin:'Rajasthan', Technique:'Relief Carving', Material:'Sandstone', Size:'Custom', Lead:'8–14 weeks', Application:'Lobbies, Residences' }, price:'On Request' },
  { id:123, name:'Abstract Marble Mural',       mainCategory:'wall-coverings', subCategory:'wall-murals', badge:'new', desc:'Contemporary abstract design inlaid in contrasting marble colours. Art meets architecture.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#f8f5f0','#2c2416','#b8964a'], specs:{ Origin:'Rajasthan', Technique:'Stone Inlay', Material:'Mixed Marble', Size:'Custom Commissions', Lead:'10–16 weeks', Application:'Feature Walls, Art Installations' }, price:'On Request' },

  // Luxury Wall Coverings
  { id:131, name:'Italian Calacatta Slab',      mainCategory:'wall-coverings', subCategory:'luxury-wall', badge:'popular', desc:'Book-matched Calacatta marble with dramatic gold veining. The pinnacle of luxury wall cladding.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#faf8f5','#f5f0e8','#ede5d8'], specs:{ Origin:'Italy (Imported)', Finish:'Polished', Size:'Up to 320×160 cm', Thickness:'2–3 cm', Application:'Presidential Suites, Luxury Villas' }, price:'₹1200/sq ft' },
  { id:132, name:'Black Marquina Marble Wall',  mainCategory:'wall-coverings', subCategory:'luxury-wall', badge:'', desc:'Deep black Marquina marble with crisp white veining. Creates unmatched dramatic contrast in luxury spaces.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#1a1a1a','#2a2a2a','#0a0a0a'], specs:{ Origin:'Spain (Imported)', Finish:'Polished', Size:'Custom Slabs', Thickness:'2 cm', Application:'Luxury Bathrooms, Feature Walls' }, price:'₹950/sq ft' },
  { id:133, name:'Gold Travertine Wall Panel',  mainCategory:'wall-coverings', subCategory:'luxury-wall', badge:'new', desc:'Warm golden travertine with natural voids filled and polished. Evokes timeless Mediterranean luxury.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#d4b87a','#c4a860','#e4c890'], specs:{ Origin:'Turkey (Imported)', Finish:'Polished / Filled', Size:'60×30 cm to Custom', Thickness:'1.5–2 cm', Application:'Hotels, Luxury Homes' }, price:'₹780/sq ft' },

  // Marble Wall Coverings
  { id:141, name:'White Statuario Marble Wall', mainCategory:'wall-coverings', subCategory:'marble-wall', badge:'popular', desc:'Pure white Statuario marble with subtle grey veins. Brings refined elegance to any wall surface.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#fafafa','#f0f0ee','#e8e8e5'], specs:{ Origin:'Rajasthan', Finish:'Polished', Size:'60×30 cm to Slab', Thickness:'1.8–2.5 cm', Application:'Bathrooms, Living Rooms' }, price:'₹480/sq ft' },
  { id:142, name:'Pink Portuguese Marble',      mainCategory:'wall-coverings', subCategory:'marble-wall', badge:'', desc:'Delicate pink marble with flowing veins. A favourite for luxury bathroom walls and powder rooms.', img:'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80', finishes:['#e8c4b8','#d4a890','#f0d4c4'], specs:{ Origin:'Rajasthan', Finish:'Polished / Honed', Size:'Custom Slabs', Thickness:'1.5–2 cm', Application:'Bathrooms, Accent Walls' }, price:'₹420/sq ft' },
  { id:143, name:'Grey Marquino Marble Tile',   mainCategory:'wall-coverings', subCategory:'marble-wall', badge:'new', desc:'Cool grey marble with subtle movement. Timeless and versatile for contemporary interior walls.', img:'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80', finishes:['#909090','#808080','#a0a0a0'], specs:{ Origin:'Rajasthan', Finish:'Honed', Size:'60×60 cm', Thickness:'1.8 cm', Application:'Kitchens, Bathrooms, Offices' }, price:'₹360/sq ft' },
  { id:144, name:'Onyx Backlit Wall Panel',     mainCategory:'wall-coverings', subCategory:'marble-wall', badge:'popular', desc:'Translucent honey onyx panels ideal for backlit wall installations. Creates a dramatic glowing effect.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#d4b87a','#e4c890','#c4a860'], specs:{ Origin:'Pakistan (Imported)', Finish:'Polished', Size:'Custom Slabs', Thickness:'1.5–2 cm', Application:'Backlit Walls, Reception Desks' }, price:'₹1100/sq ft' },

  // Stone Mosaic
  { id:151, name:'Classic Hexagon Mosaic',      mainCategory:'wall-coverings', subCategory:'stone-mosaic', badge:'popular', desc:'Handcrafted hexagonal stone mosaic tiles in natural beige tones. Timeless for bathroom walls and backsplashes.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#e0d0b8','#d0c0a8','#f0e0c8'], specs:{ Origin:'Rajasthan', Material:'Limestone + Marble', Size:'30×30 cm Sheets', Thickness:'0.8 cm', Application:'Bathrooms, Backsplashes' }, price:'₹320/sq ft' },
  { id:152, name:'Arabesque Stone Mosaic',      mainCategory:'wall-coverings', subCategory:'stone-mosaic', badge:'', desc:'Intricate arabesque pattern in white and gold stone. Ideal for luxury bathroom floors and walls.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#faf8f5','#d4ae68','#e8e0d4'], specs:{ Origin:'Agra', Material:'Marble + Quartzite', Size:'30×30 cm Sheets', Thickness:'0.8–1 cm', Application:'Feature Walls, Floors' }, price:'₹480/sq ft' },
  { id:153, name:'Pebble Stone Mosaic',         mainCategory:'wall-coverings', subCategory:'stone-mosaic', badge:'new', desc:'Natural river pebbles set in mesh sheets. Creates a spa-like organic texture for wet rooms and walls.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#808060','#707050','#909070'], specs:{ Origin:'Rajasthan / Himachal', Material:'River Pebbles', Size:'30×30 cm Mesh', Thickness:'1.5–2 cm', Application:'Spa Walls, Shower Floors' }, price:'₹180/sq ft' },
  { id:154, name:'Chevron Marble Mosaic',       mainCategory:'wall-coverings', subCategory:'stone-mosaic', badge:'', desc:'Bold chevron pattern in contrasting light and dark marbles. A contemporary statement for kitchen splashbacks.', img:'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', finishes:['#fafafa','#2a2a2a','#d4ae68'], specs:{ Origin:'Rajasthan', Material:'Mixed Marble', Size:'30×30 cm Sheets', Thickness:'0.8 cm', Application:'Kitchen Splashbacks, Bathrooms' }, price:'₹420/sq ft' },

  // 2D & 3D Wall Coverings
  { id:161, name:'2D Geometric Wall Pattern',   mainCategory:'wall-coverings', subCategory:'2d-3d-wall', badge:'popular', desc:'Precision-cut flat geometric patterns in sandstone. Modern architectural texture for feature walls.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#d4c49a','#e8d8b8','#c0aa80'], specs:{ Origin:'Rajasthan', Finish:'Sandblasted / Honed', Size:'Custom Panels', Thickness:'2 cm', Application:'Feature Walls, Commercial Interiors' }, price:'₹240/sq ft' },
  { id:162, name:'3D Ripple Stone Wall Panel',  mainCategory:'wall-coverings', subCategory:'2d-3d-wall', badge:'', desc:'CNC-carved 3D wave relief panels in white limestone. Creates dramatic light and shadow effects on walls.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#e8e0d0','#f0e8d8','#d8d0c0'], specs:{ Origin:'Rajasthan', Technique:'CNC Carving', Material:'Limestone', Size:'60×30 cm', Thickness:'4–6 cm', Application:'Lobbies, Luxury Interiors' }, price:'₹380/sq ft' },
  { id:163, name:'3D Diamond Marble Panel',     mainCategory:'wall-coverings', subCategory:'2d-3d-wall', badge:'new', desc:'Three-dimensional diamond facet pattern carved from solid marble. Sculptural wall art with functional elegance.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#f0ece5','#faf8f5','#e0d8cc'], specs:{ Origin:'Rajasthan', Technique:'CNC + Hand Finish', Material:'White Marble', Size:'60×60 cm', Thickness:'5–8 cm', Application:'Presidential Suites, Showrooms' }, price:'₹650/sq ft' },
  { id:164, name:'2D Lattice Stone Cladding',   mainCategory:'wall-coverings', subCategory:'2d-3d-wall', badge:'', desc:'Flat lattice-pattern carved cladding panels inspired by Mughal jali work. Decorative interior feature.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#e0d4b8','#d0c4a8','#f0e4c8'], specs:{ Origin:'Agra, Rajasthan', Technique:'CNC Carving', Material:'Sandstone', Size:'60×30 cm', Thickness:'3–4 cm', Application:'Accent Walls, Partitions' }, price:'₹290/sq ft' },

  // ══════════════════════════════════════════════════════════
  // ─── FLOORING (additional) ────────────────────────────────
  // ══════════════════════════════════════════════════════════

  { id:201, name:'Ivory Marble Floor Tile',     mainCategory:'flooring', subCategory:'marble-flooring',   badge:'popular', desc:'Creamy ivory marble with light grey veining. Classic and timeless for large residential flooring projects.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#f5f0e8','#ede5d8','#fafaf5'], specs:{ Origin:'Rajasthan', Finish:'Polished', Size:'60×60 cm', Thickness:'1.8 cm', Application:'Living Rooms, Corridors' }, price:'₹390/sq ft' },
  { id:202, name:'Nero Black Granite Floor',    mainCategory:'flooring', subCategory:'granite-flooring',  badge:'', desc:'Jet-black granite with a mirror-polished finish. Dramatic and sophisticated for commercial flooring.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#0a0a0a','#1a1a1a','#2a2a2a'], specs:{ Origin:'Tamil Nadu', Finish:'Mirror Polished', Size:'60×60 cm', Thickness:'2 cm', Application:'Commercial Lobbies, Hotels' }, price:'₹280/sq ft' },
  { id:203, name:'Kandla Grey Sandstone Floor', mainCategory:'flooring', subCategory:'sandstone-flooring',badge:'new', desc:'Cool grey sandstone with uniform texture. Popular for contemporary minimalist interiors and terraces.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#909090','#808080','#a0a0a0'], specs:{ Origin:'Gujarat', Finish:'Sandblasted / Natural', Size:'60×30 cm', Thickness:'2.5 cm', Application:'Terraces, Minimalist Interiors' }, price:'₹105/sq ft' },
  { id:204, name:'Multi-Colour Slate Flooring', mainCategory:'flooring', subCategory:'slate-flooring',    badge:'', desc:'Natural multi-colour slate with riven surface. Earthy warmth for rustic and organic interior schemes.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#8a7050','#706040','#9a8060'], specs:{ Origin:'Madhya Pradesh', Finish:'Natural Riven', Size:'Random / 30×30 cm', Thickness:'1–1.5 cm', Application:'Rustic Interiors, Kitchens' }, price:'₹70/sq ft' },

  // ══════════════════════════════════════════════════════════
  // ─── LANDSCAPING ──────────────────────────────────────────
  // ══════════════════════════════════════════════════════════

  // Limestone Landscaping
  { id:301, name:'Mint Limestone Paving',       mainCategory:'landscaping', subCategory:'limestone-landscaping', badge:'popular', desc:'Cream-mint limestone flags for garden paving. Slip-resistant and UV-stable for outdoor use.', img:'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', finishes:['#e8dcc8','#d8ccb8','#f0e4d0'], specs:{ Origin:'Rajasthan', Finish:'Riven / Sawn', Size:'60×30 cm, 60×60 cm, Custom', Thickness:'2.5–3.5 cm', Application:'Garden Paths, Patios' }, price:'₹105/sq ft' },
  { id:302, name:'Grey Limestone Stepping Stone',mainCategory:'landscaping', subCategory:'limestone-landscaping', badge:'', desc:'Random irregular stepping stones in grey limestone. Natural look for organic garden landscaping.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#909090','#808080','#a0a0a0'], specs:{ Origin:'Rajasthan', Finish:'Natural Riven', Size:'Random 30–60 cm', Thickness:'3–5 cm', Application:'Garden Paths, Stepping Stones' }, price:'₹88/sq ft' },
  { id:303, name:'Fossil Limestone Garden Wall', mainCategory:'landscaping', subCategory:'limestone-landscaping', badge:'new', desc:'Fossilised limestone blocks for garden boundary walls. Unique geological character in every stone.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#d0c0a8','#c0b098','#e0d0b8'], specs:{ Origin:'Rajasthan', Finish:'Natural / Split', Size:'Custom Walling', Thickness:'5–15 cm', Application:'Garden Walls, Retaining Walls' }, price:'₹120/sq ft' },

  // Sandstone Landscaping
  { id:311, name:'Buff Sandstone Paving Flags',  mainCategory:'landscaping', subCategory:'sandstone-landscaping', badge:'popular', desc:'Warm buff-toned sandstone flags in calibrated sizes. The most popular choice for UK and European gardens.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#d4c49a','#e8d8b8','#c0aa80'], specs:{ Origin:'Rajasthan', Finish:'Riven / Sawn', Size:'60×30 cm, 60×60 cm, 90×60 cm', Thickness:'2.2 cm, 2.5 cm', Application:'Patios, Driveways, Pool Surrounds' }, price:'₹92/sq ft' },
  { id:312, name:'Teakwood Sandstone Paving',    mainCategory:'landscaping', subCategory:'sandstone-landscaping', badge:'', desc:'Wood-grain textured sandstone in warm brown tones. Gives the look of timber with the durability of stone.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#b89060','#a07848','#c8a878'], specs:{ Origin:'Rajasthan', Finish:'Sawn / Brushed', Size:'60×30 cm', Thickness:'2.5 cm', Application:'Decking Alternative, Paths' }, price:'₹98/sq ft' },
  { id:313, name:'Cathedral Sandstone Walling',  mainCategory:'landscaping', subCategory:'sandstone-landscaping', badge:'new', desc:'Multi-tone sandstone walling blocks with natural split faces. Creates stunning boundary and retaining walls.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#c0a880','#b09870','#d0b890'], specs:{ Origin:'Rajasthan', Finish:'Natural Split', Size:'Random Coursed', Thickness:'6–10 cm', Application:'Garden Walls, Retaining' }, price:'₹115/sq ft' },

  // Slate Landscaping
  { id:321, name:'Black Slate Garden Paving',    mainCategory:'landscaping', subCategory:'slate-landscaping', badge:'popular', desc:'Split-face black slate for dramatic garden paving. Non-slip and frost-resistant for all climates.', img:'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80', finishes:['#1a1a1a','#2a2a2a','#3a3a3a'], specs:{ Origin:'Andhra Pradesh', Finish:'Natural Split', Size:'Random / 60×30 cm', Thickness:'1–2 cm', Application:'Garden Paths, Patio' }, price:'₹72/sq ft' },
  { id:322, name:'Multicolour Slate Pathway',    mainCategory:'landscaping', subCategory:'slate-landscaping', badge:'', desc:'Riven multicolour slate flags in rustic orange, green and purple tones. Vibrant and organic garden aesthetic.', img:'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80', finishes:['#8a5a30','#5a7a40','#7a4a80'], specs:{ Origin:'Madhya Pradesh', Finish:'Natural Riven', Size:'Random Irregular', Thickness:'1.5–2.5 cm', Application:'Garden Pathways, Rockeries' }, price:'₹65/sq ft' },
  { id:323, name:'Grey Slate Stepping Rounds',   mainCategory:'landscaping', subCategory:'slate-landscaping', badge:'new', desc:'Circular disc-cut grey slate for stepping stone paths. Elegant and contemporary for formal gardens.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#606060','#707070','#505050'], specs:{ Origin:'Andhra Pradesh', Finish:'Natural / Honed', Size:'Ø 30 cm, Ø 45 cm, Ø 60 cm', Thickness:'3–5 cm', Application:'Garden Paths, Stepping Stones' }, price:'₹80/sq ft' },

  // Granite & Italian Landscaping
  { id:331, name:'Black Galaxy Paving Stone',    mainCategory:'landscaping', subCategory:'granite-landscaping', badge:'popular', desc:'Flamed Black Galaxy granite for durable outdoor paving. The gold flecks create a night-sky effect underfoot.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#1a1a1a','#2c2416','#0a0a0a'], specs:{ Origin:'Andhra Pradesh', Finish:'Flamed / Brushed', Size:'60×30 cm, 60×60 cm', Thickness:'2.5–3 cm', Application:'Outdoor Paving, Pool Surrounds' }, price:'₹220/sq ft' },
  { id:332, name:'Rosa Beta Granite Paving',     mainCategory:'landscaping', subCategory:'granite-landscaping', badge:'', desc:'Soft pink Italian granite for premium garden paving. Non-slip flamed finish suitable for all weather.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#e8c4b8','#d4a890','#f0d4c4'], specs:{ Origin:'Italy (Imported)', Finish:'Flamed', Size:'60×30 cm', Thickness:'3 cm', Application:'Luxury Garden Paving, Terraces' }, price:'₹350/sq ft' },
  { id:333, name:'Bianco Crystal Granite Path',  mainCategory:'landscaping', subCategory:'granite-landscaping', badge:'new', desc:'White crystal granite with silver sparkle for contemporary garden paths and driveways.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#f0f0ee','#e8e8e5','#f8f8f8'], specs:{ Origin:'Italy (Imported)', Finish:'Flamed / Bush-hammered', Size:'60×30 cm', Thickness:'3 cm', Application:'Driveways, Garden Paths' }, price:'₹380/sq ft' },

  // ══════════════════════════════════════════════════════════
  // ─── STONE CRAFTS ─────────────────────────────────────────
  // ══════════════════════════════════════════════════════════

  // Planters
  { id:401, name:'Round Sandstone Planter',      mainCategory:'stone-crafts', subCategory:'planters', badge:'popular', desc:'Hand-carved round planter in warm sandstone. Adds a natural, rustic charm to any garden or terrace.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#d4c49a','#c0aa80','#e8d8b8'], specs:{ Origin:'Rajasthan', Material:'Sandstone', Size:'Ø 30–60 cm, H 30–50 cm', Finish:'Natural / Textured', Application:'Garden, Terrace, Entrance' }, price:'₹3,500 – ₹9,000' },
  { id:402, name:'Square Marble Planter',        mainCategory:'stone-crafts', subCategory:'planters', badge:'', desc:'Elegant square marble planters with carved detailing. Perfect for luxury lobbies and formal gardens.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Rajasthan', Material:'White Marble', Size:'40×40×40 cm, Custom', Finish:'Polished / Honed', Application:'Lobbies, Formal Gardens' }, price:'₹8,000 – ₹25,000' },
  { id:403, name:'Long Trough Planter in Granite',mainCategory:'stone-crafts', subCategory:'planters', badge:'new', desc:'Rectangular granite trough planter for contemporary outdoor spaces. Frost-proof and ultra-durable.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#808080','#606060','#909090'], specs:{ Origin:'Tamil Nadu', Material:'Grey Granite', Size:'120×30×40 cm, Custom', Finish:'Flamed', Application:'Commercial Spaces, Modern Gardens' }, price:'₹15,000 – ₹40,000' },
  { id:404, name:'Decorative Urns & Pots',       mainCategory:'stone-crafts', subCategory:'planters', badge:'', desc:'Traditional hand-carved stone urns inspired by classical Indian architecture. Statement pieces for grand entrances.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#d4c49a','#b8964a','#e8d8b8'], specs:{ Origin:'Agra, Rajasthan', Material:'Sandstone / Marble', Size:'Custom Commissions', Finish:'Carved / Decorative', Application:'Entrance, Heritage Properties' }, price:'On Request' },

  // Stone Seaters
  { id:411, name:'Garden Bench in Sandstone',    mainCategory:'stone-crafts', subCategory:'stone-seaters', badge:'popular', desc:'Classic hand-carved garden bench in warm sandstone. Timeless design for parks, gardens and courtyards.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#d4c49a','#c0aa80','#e8d8b8'], specs:{ Origin:'Rajasthan', Material:'Sandstone', Size:'150×40×45 cm, Custom', Finish:'Natural / Carved', Application:'Gardens, Parks, Courtyards' }, price:'₹12,000 – ₹35,000' },
  { id:412, name:'Marble Throne Chair',          mainCategory:'stone-crafts', subCategory:'stone-seaters', badge:'', desc:'Ornate marble throne-style chair with carved armrests. A showpiece for luxury gardens and hotel lobbies.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Agra', Material:'Makrana Marble', Size:'Custom', Finish:'Polished + Carved', Application:'Luxury Hotels, Palaces' }, price:'On Request' },
  { id:413, name:'Stone Charpai Daybed',         mainCategory:'stone-crafts', subCategory:'stone-seaters', badge:'new', desc:'Traditional Indian charpai design recreated in stone with carved legs and slatted top. Unique and functional garden furniture.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#d4c49a','#b09878','#c0a880'], specs:{ Origin:'Rajasthan', Material:'Sandstone', Size:'200×90×45 cm', Finish:'Natural / Carved', Application:'Garden, Poolside' }, price:'₹28,000 – ₹55,000' },

  // Cornices & Mouldings
  { id:421, name:'Classic Cornice in Limestone', mainCategory:'stone-crafts', subCategory:'cornices-mouldings', badge:'popular', desc:'Traditional egg-and-dart cornice profile in hand-dressed limestone. Ideal for heritage and classical architecture.', img:'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80', finishes:['#e0d0b8','#d0c0a8','#f0e0c8'], specs:{ Origin:'Rajasthan', Material:'Limestone', Size:'Per running metre, Custom profiles', Finish:'Honed / Dressed', Application:'Heritage Restoration, Classical Buildings' }, price:'₹850/rft' },
  { id:422, name:'Marble Ogee Moulding',         mainCategory:'stone-crafts', subCategory:'cornices-mouldings', badge:'', desc:'Smooth marble ogee-profile moulding for interior wall and ceiling edges. Elegant finishing detail.', img:'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Rajasthan', Material:'White Marble', Size:'Per running metre, 5 profiles available', Finish:'Polished', Application:'Interior Edges, Fireplaces' }, price:'₹1,100/rft' },
  { id:423, name:'Sandstone Bracket & Corbel',   mainCategory:'stone-crafts', subCategory:'cornices-mouldings', badge:'new', desc:'Carved sandstone architectural corbels for shelf support or decorative effect. Hand-finished in Rajasthan.', img:'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80', finishes:['#d4c49a','#c0aa80','#e8d8b8'], specs:{ Origin:'Rajasthan', Material:'Sandstone', Size:'Custom profiles, 20–60 cm projection', Finish:'Carved / Dressed', Application:'Shelves, Eaves, Decorative Architecture' }, price:'₹1,800 – ₹8,000 each' },

  // Chhatri & Pergola
  { id:431, name:'Rajasthani Chhatri Pavilion',  mainCategory:'stone-crafts', subCategory:'chhatri-pergola', badge:'popular', desc:'Ornate dome-top chhatri pavilion in pink sandstone with carved columns. Iconic Rajasthani architectural feature.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#e8c4a0','#d4aa80','#f0d4b0'], specs:{ Origin:'Rajasthan', Material:'Pink Sandstone', Size:'Custom (min. 2×2 m base)', Finish:'Hand Carved', Application:'Garden Focal Points, Heritage Hotels' }, price:'On Request' },
  { id:432, name:'Stone Column Pergola',         mainCategory:'stone-crafts', subCategory:'chhatri-pergola', badge:'', desc:'Classical stone column pergola with flat-top beam structure. Defines outdoor living spaces with timeless elegance.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#d4c49a','#c0aa80','#b09878'], specs:{ Origin:'Rajasthan', Material:'Sandstone / Limestone', Size:'Custom designs', Finish:'Dressed / Rusticated', Application:'Gardens, Pool Areas, Terraces' }, price:'On Request' },
  { id:433, name:'Mughal Arched Gazebo',         mainCategory:'stone-crafts', subCategory:'chhatri-pergola', badge:'new', desc:'Three-arched Mughal-style stone gazebo in white marble. A breathtaking centrepiece for luxury gardens.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e8e0d8'], specs:{ Origin:'Agra', Material:'Makrana White Marble', Size:'3×3 m, Custom', Finish:'Hand Carved', Application:'Luxury Gardens, Heritage Estates' }, price:'On Request' },

  // ══════════════════════════════════════════════════════════
  // ─── WATERFALLS & FOUNTAINS ────────────────────────────────
  // ══════════════════════════════════════════════════════════

  { id:501, name:'Black Slate Waterfall Wall',   mainCategory:'waterfalls-fountains', subCategory:'wall-waterfalls', badge:'popular', desc:'Sleek black slate waterfall wall panel for indoor and outdoor feature walls. Calm water sheeting effect.', img:'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80', finishes:['#1a1a1a','#2a2a2a','#3a3a3a'], specs:{ Origin:'Andhra Pradesh', Material:'Black Slate + Pump System', Size:'100×200 cm to Custom', Finish:'Natural Split', Application:'Indoor / Outdoor Feature Walls' }, price:'On Request' },
  { id:502, name:'Marble Sheet Waterfall',       mainCategory:'waterfalls-fountains', subCategory:'wall-waterfalls', badge:'', desc:'White marble waterfall panel with seamless water film. Luxurious and tranquil for hotel lobbies and spas.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Rajasthan', Material:'White Marble + Pump System', Size:'Custom', Finish:'Honed', Application:'Hotel Lobbies, Spas' }, price:'On Request' },
  { id:503, name:'Tiered Garden Fountain',       mainCategory:'waterfalls-fountains', subCategory:'garden-fountains', badge:'popular', desc:'Three-tier carved sandstone fountain with central bowl and cascading basins. Classic centrepiece for formal gardens.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#d4c49a','#c0aa80','#e8d8b8'], specs:{ Origin:'Rajasthan', Material:'Sandstone', Size:'Ø 80 cm – Ø 200 cm', Finish:'Carved / Textured', Application:'Garden Centrepieces, Courtyards' }, price:'₹25,000 – ₹1,20,000' },
  { id:504, name:'Marble Lion Head Fountain',    mainCategory:'waterfalls-fountains', subCategory:'garden-fountains', badge:'', desc:'Hand-carved marble lion head wall fountain. Mounts to any wall and creates a dramatic water feature.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Agra', Material:'White Marble', Size:'30×40 cm head, Custom basin', Finish:'Hand Carved', Application:'Wall Mounting, Garden Feature' }, price:'₹18,000 – ₹45,000' },
  { id:505, name:'Granite Floor Fountain',       mainCategory:'waterfalls-fountains', subCategory:'floor-fountains', badge:'new', desc:'Contemporary round floor fountain in dark granite with upward jet and basin. Ideal for courtyards and plazas.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#1a1a1a','#2a2a2a','#3a3a3a'], specs:{ Origin:'Tamil Nadu', Material:'Black Granite', Size:'Ø 100–200 cm', Finish:'Polished', Application:'Courtyards, Commercial Plazas' }, price:'On Request' },
  { id:506, name:'Natural Rock Waterfall Feature',mainCategory:'waterfalls-fountains', subCategory:'floor-fountains', badge:'', desc:'Landscape water feature using natural boulders and slate with cascading water. Creates a wild, natural stream effect.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#6a5a40','#807060','#504030'], specs:{ Origin:'Custom Sourcing', Material:'Natural Boulders + Slate + Pump', Size:'Custom installation', Finish:'Natural', Application:'Garden Landscapes, Resorts' }, price:'On Request' },

  // ══════════════════════════════════════════════════════════
  // ─── COBBLESTONES ──────────────────────────────────────────
  // ══════════════════════════════════════════════════════════

  // Sandstone Cobbles
  { id:601, name:'Buff Sandstone Cobble Sets',   mainCategory:'cobblestones', subCategory:'sandstone-cobbles', badge:'popular', desc:'Traditional square-set buff sandstone cobbles. Classic street-paving look for driveways and garden paths.', img:'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', finishes:['#d4c49a','#e8d8b8','#c0aa80'], specs:{ Origin:'Rajasthan', Finish:'Natural Split Top', Size:'10×10×5 cm, 15×15×5 cm', Thickness:'5–8 cm', Application:'Driveways, Garden Paths' }, price:'₹55/sq ft' },
  { id:602, name:'Red Sandstone Cobbles',        mainCategory:'cobblestones', subCategory:'sandstone-cobbles', badge:'', desc:'Warm red sandstone cobbles that echo the historic streets of Agra. Durable and characterful for heritage projects.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#c04030','#a03020','#d05040'], specs:{ Origin:'Agra, UP', Finish:'Natural Split', Size:'10×10×7 cm, Custom', Thickness:'5–8 cm', Application:'Heritage Streets, Courtyards' }, price:'₹62/sq ft' },
  { id:603, name:'Natural Sandstone Fan Cobbles', mainCategory:'cobblestones', subCategory:'sandstone-cobbles', badge:'new', desc:'Fan-pattern sandstone setts for decorative driveway and courtyard paving. Elegant swept curves.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#d4c49a','#c0aa80','#b89878'], specs:{ Origin:'Rajasthan', Finish:'Natural Top', Size:'Fan pattern sets', Thickness:'6 cm', Application:'Decorative Driveways, Courtyards' }, price:'₹75/sq ft' },

  // Limestone Cobbles
  { id:611, name:'Grey Limestone Cobble Setts',  mainCategory:'cobblestones', subCategory:'limestone-cobbles', badge:'popular', desc:'Smooth grey limestone cobble setts with a contemporary feel. Popular for modern European-style driveways.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#909090','#808080','#a0a0a0'], specs:{ Origin:'Rajasthan', Finish:'Natural Sawn Top', Size:'10×10×5 cm, 15×15×5 cm', Thickness:'5 cm', Application:'Modern Driveways, Plaza Paving' }, price:'₹68/sq ft' },
  { id:612, name:'Cream Limestone Cobbles',      mainCategory:'cobblestones', subCategory:'limestone-cobbles', badge:'', desc:'Creamy warm limestone cobbles for light-toned driveway and path surfacing. Smooth and refined finish.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#e8dcc8','#d8ccb8','#f0e4d0'], specs:{ Origin:'Rajasthan', Finish:'Natural / Sawn', Size:'10×10×6 cm, 15×10×6 cm', Thickness:'5–6 cm', Application:'Paths, Light-Traffic Driveways' }, price:'₹60/sq ft' },
  { id:613, name:'Fossil Limestone Cobbles',     mainCategory:'cobblestones', subCategory:'limestone-cobbles', badge:'new', desc:'Cobbles cut from fossil-rich limestone. Each stone is unique with embedded marine fossil patterns.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#c8b898','#d8c8a8','#b8a888'], specs:{ Origin:'Rajasthan', Finish:'Natural Riven', Size:'10×10 cm, Random', Thickness:'5–7 cm', Application:'Feature Paths, Heritage Courtyards' }, price:'₹85/sq ft' },

  // Granite Cobbles
  { id:621, name:'Black Granite Cobble Setts',   mainCategory:'cobblestones', subCategory:'granite-cobbles', badge:'popular', desc:'Polished black granite cobbles for high-end driveway and plaza paving. Extremely durable and long-lasting.', img:'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80', finishes:['#1a1a1a','#0a0a0a','#2a2a2a'], specs:{ Origin:'Andhra Pradesh', Finish:'Bush Hammered', Size:'10×10×8 cm, Custom', Thickness:'8–10 cm', Application:'Premium Driveways, Commercial Plazas' }, price:'₹120/sq ft' },
  { id:622, name:'Grey Granite Cobble Mix',      mainCategory:'cobblestones', subCategory:'granite-cobbles', badge:'', desc:'Mixed grey granite cobbles in varied sizes for rustic and natural driveway paving. Long-lasting performance.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#909090','#808080','#707070'], specs:{ Origin:'Tamil Nadu', Finish:'Natural / Split', Size:'Random 5–15 cm', Thickness:'5–10 cm', Application:'Driveways, Garden Borders' }, price:'₹95/sq ft' },
  { id:623, name:'Pink Granite Decorative Cobbles',mainCategory:'cobblestones', subCategory:'granite-cobbles', badge:'new', desc:'Warm pink granite cobble setts for luxurious and distinctive driveway and pathway paving.', img:'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80', finishes:['#e8c4b8','#d4a890','#f0d4c4'], specs:{ Origin:'Rajasthan', Finish:'Flamed / Bush Hammered', Size:'10×10×6 cm', Thickness:'6 cm', Application:'Luxury Driveways, Garden Borders' }, price:'₹140/sq ft' },

  // ══════════════════════════════════════════════════════════
  // ─── STONE JALI ────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════

  // 2D Jali
  { id:701, name:'Geometric 2D Jali Screen',     mainCategory:'stone-jali', subCategory:'2d-jali', badge:'popular', desc:'Classic flat-cut geometric jali screen in sandstone. Precise CNC-carved lattice pattern with clean lines.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#d4c49a','#c0aa80','#e8d8b8'], specs:{ Origin:'Rajasthan', Material:'Sandstone', Size:'60×90 cm, 90×120 cm, Custom', Thickness:'3–5 cm', Technique:'CNC Carved', Application:'Partitions, Windows, Balconies' }, price:'₹280/sq ft' },
  { id:702, name:'Floral 2D Jali Panel',         mainCategory:'stone-jali', subCategory:'2d-jali', badge:'', desc:'Delicate floral jali pattern hand-carved in white marble. Timeless Mughal aesthetic for elegant interiors.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Agra', Material:'White Marble', Size:'60×90 cm, Custom', Thickness:'4–6 cm', Technique:'Hand Carved', Application:'Interior Screens, Windows' }, price:'₹650/sq ft' },
  { id:703, name:'Arabic 2D Jali Design',        mainCategory:'stone-jali', subCategory:'2d-jali', badge:'new', desc:'Intricate arabesque-pattern jali carved in pink sandstone. Popular for mosques, temples and heritage hotels.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', finishes:['#e8c4a0','#d4aa80','#f0d4b0'], specs:{ Origin:'Rajasthan', Material:'Pink Sandstone', Size:'60×90 cm, Custom', Thickness:'3–5 cm', Technique:'CNC + Hand Finish', Application:'Religious Buildings, Heritage Hotels' }, price:'₹380/sq ft' },
  { id:704, name:'Diamond Lattice 2D Jali',      mainCategory:'stone-jali', subCategory:'2d-jali', badge:'', desc:'Simple diamond-grid jali in grey limestone. Modern and minimalist perfect for contemporary screens and dividers.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#909090','#808080','#a0a0a0'], specs:{ Origin:'Rajasthan', Material:'Limestone', Size:'60×90 cm, Custom panels', Thickness:'3 cm', Technique:'CNC Carved', Application:'Modern Interiors, Garden Screens' }, price:'₹240/sq ft' },

  // 3D Jali
  { id:711, name:'3D Honeycomb Jali Panel',      mainCategory:'stone-jali', subCategory:'3d-jali', badge:'popular', desc:'Sculptural three-dimensional honeycomb jali in white limestone. Creates dramatic shadow play and visual depth.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#e8e0d0','#f0e8d8','#d8d0c0'], specs:{ Origin:'Rajasthan', Material:'Limestone', Size:'60×60 cm, 60×90 cm, Custom', Thickness:'8–12 cm', Technique:'CNC + Hand Finish', Application:'Luxury Interiors, Hotel Facades' }, price:'₹520/sq ft' },
  { id:712, name:'3D Star Burst Jali',           mainCategory:'stone-jali', subCategory:'3d-jali', badge:'', desc:'Multi-layered 3D star pattern jali carved in white marble. Each panel has depth that shifts with viewing angle.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Agra', Material:'White Marble', Size:'60×60 cm, Custom', Thickness:'10–15 cm', Technique:'Hand Carved', Application:'Lobby Feature Walls, Temples' }, price:'₹1,200/sq ft' },
  { id:713, name:'3D Flower Bloom Jali Screen',  mainCategory:'stone-jali', subCategory:'3d-jali', badge:'new', desc:'Blooming flower motif in 3D relief carved jali. The petals have depth that creates beautiful light shadows.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#faf8f5','#e8c4a0','#f0ece5'], specs:{ Origin:'Rajasthan / Agra', Material:'Marble / Sandstone', Size:'60×90 cm, Custom', Thickness:'8–12 cm', Technique:'CNC + Hand Carved', Application:'Luxury Residences, Boutique Hotels' }, price:'₹850/sq ft' },
  { id:714, name:'3D Wave Pattern Jali',         mainCategory:'stone-jali', subCategory:'3d-jali', badge:'', desc:'Contemporary wave-pattern three-dimensional jali in grey sandstone. Modern yet natural — ideal for corporate spaces.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#909090','#d4c49a','#808080'], specs:{ Origin:'Rajasthan', Material:'Sandstone', Size:'60×90 cm, Custom', Thickness:'8–10 cm', Technique:'CNC Carved', Application:'Corporate Offices, Modern Hotels' }, price:'₹620/sq ft' },

  // ══════════════════════════════════════════════════════════
  // ─── STONE MANDIRS ────────────────────────────────────────
  // ══════════════════════════════════════════════════════════

  { id:801, name:'White Marble Home Mandir',     mainCategory:'stone-mandirs', subCategory:'home-mandirs', badge:'popular', desc:'Elegantly carved white Makrana marble home mandir with dome, pillars and carved panels. Heirloom quality for pooja rooms.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Agra', Material:'Makrana Marble', Size:'2×1 m, 2.5×1.2 m, Custom', Finish:'Hand Carved + Polished', Application:'Pooja Rooms, Home Altars' }, price:'₹45,000 – ₹2,50,000' },
  { id:802, name:'Sandstone Pooja Mandir',       mainCategory:'stone-mandirs', subCategory:'home-mandirs', badge:'', desc:'Traditional Rajasthani-style sandstone home mandir with peacock and floral carvings. Rich heritage aesthetic.', img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', finishes:['#e8c4a0','#d4aa80','#f0d4b0'], specs:{ Origin:'Jaipur', Material:'Pink Sandstone', Size:'1.8×0.9 m, Custom', Finish:'Hand Carved', Application:'Home Pooja Rooms' }, price:'₹28,000 – ₹1,20,000' },
  { id:803, name:'Marble Inlay Mandir Cabinet',  mainCategory:'stone-mandirs', subCategory:'home-mandirs', badge:'new', desc:'Compact marble mandir cabinet with Pietra Dura floral inlay on doors. Masterpiece of craftsmanship for modern homes.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', finishes:['#faf8f5','#b8964a','#f0ece5'], specs:{ Origin:'Agra', Material:'Marble + Semi-precious Inlay', Size:'60×40×120 cm, Custom', Finish:'Polished + Inlay', Application:'Modern Homes, Apartments' }, price:'₹65,000 – ₹3,00,000' },
  { id:804, name:'Garden Stone Mandir',          mainCategory:'stone-mandirs', subCategory:'garden-mandirs', badge:'popular', desc:'Outdoor garden mandir in weather-resistant sandstone with arched canopy and carved pillars. Creates a sacred garden focal point.', img:'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', finishes:['#d4c49a','#c0aa80','#e8d8b8'], specs:{ Origin:'Rajasthan', Material:'Sandstone', Size:'1.5×1.5 m, Custom', Finish:'Natural / Hand Carved', Application:'Gardens, Courtyards, Ashrams' }, price:'₹55,000 – ₹2,00,000' },
  { id:805, name:'Granite Outdoor Temple Shrine', mainCategory:'stone-mandirs', subCategory:'garden-mandirs', badge:'', desc:'Durable black or grey granite outdoor shrine mandir. Designed to withstand all weather without maintenance.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', finishes:['#1a1a1a','#909090','#2a2a2a'], specs:{ Origin:'Tamil Nadu', Material:'Black / Grey Granite', Size:'Custom', Finish:'Polished', Application:'Outdoor Temples, Gardens' }, price:'₹80,000 – ₹3,50,000' },
  { id:806, name:'Large Temple Complex Mandir',  mainCategory:'stone-mandirs', subCategory:'large-mandirs', badge:'popular', desc:'Full temple mandir complex with shikhara spire, mandapa and garbhagriha. Crafted in traditional Rajasthani style using pink sandstone.', img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', finishes:['#e8c4a0','#d4aa80','#f0d4b0'], specs:{ Origin:'Jaipur, Rajasthan', Material:'Pink Sandstone', Size:'Custom (min. 5×5 m footprint)', Finish:'Hand Carved, Temple Grade', Application:'Institutional Temples, Ashrams, Societies' }, price:'On Request' },
  { id:807, name:'White Marble Temple Mandir',   mainCategory:'stone-mandirs', subCategory:'large-mandirs', badge:'new', desc:'Grand white marble temple mandir with intricate shikhar carvings, marble flooring and detailed porch. The pinnacle of stone craftsmanship.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', finishes:['#faf8f5','#f0ece5','#e0d8cc'], specs:{ Origin:'Agra', Material:'Makrana White Marble', Size:'Custom commissions', Finish:'Hand Carved + Polished', Application:'Religious Institutions, Trusts' }, price:'On Request' },
];

// ═══════════════════════════════════════════════════════════
// ─── GALLERY & BLOG DATA (unchanged) ───────────────────────
// ═══════════════════════════════════════════════════════════

const GALLERY_ITEMS = [
  { cat:'interior',   h:280, img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', title:'Marble Living Room' },
  { cat:'exterior',   h:360, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', title:'Sandstone Villa' },
  { cat:'luxury',     h:240, img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', title:'Granite Hotel Lobby' },
  { cat:'landscape',  h:320, img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', title:'Stone Garden Path' },
  { cat:'interior',   h:260, img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', title:'Marble Feature Wall' },
  { cat:'commercial', h:380, img:'https://images.unsplash.com/photo-1617957718614-8c23f060b78b?w=600&q=80', title:'Corporate HQ Facade' },
  { cat:'interior',   h:300, img:'https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=600&q=80', title:'Luxury Bathroom' },
  { cat:'landscape',  h:240, img:'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80', title:'Slate Garden Walls' },
  { cat:'exterior',   h:280, img:'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80', title:'Quartzite Facade' },
  { cat:'luxury',     h:340, img:'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', title:'Penthouse Kitchen' },
  { cat:'commercial', h:260, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', title:'Retail Stone Floor' },
  { cat:'interior',   h:300, img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80', title:'Marble Staircase' },
];

const BLOG_POSTS = [
  { tag:'Design Guide', date:'Mar 12, 2025', title:'Choosing the Right Stone for Your Kitchen Countertops', desc:'Granite, marble or quartzite? We break down the pros and cons of each stone for kitchen surfaces.', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
  { tag:'Industry News', date:'Feb 28, 2025', title:'India\'s Natural Stone Export Sector Surpasses $2 Billion', desc:'A record year for Indian stone exports, driven by demand from the Middle East and European luxury markets.', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80' },
  { tag:'Sustainability', date:'Feb 10, 2025', title:'Green Quarrying: How We\'re Reducing Our Carbon Footprint', desc:'Wind turbines, water recycling and ethical sourcing — our commitment to sustainable stone production.', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
  { tag:'Craftsmanship', date:'Jan 22, 2025', title:'The Art of Pietra Dura: India\'s Gem-Inlay Tradition', desc:'From the walls of the Taj Mahal to modern luxury interiors — the ancient art of stone inlay endures.', img:'https://images.unsplash.com/photo-1618090583870-3c06b7b21e8c?w=600&q=80' },
  { tag:'Project Story', date:'Jan 5, 2025', title:'Supplying Stone for a 5-Star Resort in the Maldives', desc:'How we coordinated 28 varieties of Indian stone for one of the most ambitious resort builds of 2024.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { tag:'Tips', date:'Dec 18, 2024', title:'How to Care for Natural Stone Floors', desc:'Expert advice on sealing, cleaning and maintaining marble, granite and sandstone in high-traffic areas.', img:'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80' },
];

// ═══════════════════════════════════════════════════════════
// ─── NAVIGATION STATE ──────────────────────────────────────
// ═══════════════════════════════════════════════════════════

let currentPage = 'home';
let activeMainCategory = 'all';   // NEW: tracks main category
let activeSubCategory  = 'all';   // NEW: tracks sub category
let activeLegacyCategory = 'all'; // backward-compat for old tab filter

function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'products') {
    buildSidebar();
    // Reset to "all" view when navigating fresh to products
    renderProductsView('all', 'all');
  }
  if (page === 'gallery') renderGallery('all');
  if (page === 'blog')    renderBlog();
}

// ─── navigateToCategory: from homepage cards → products page ──
// CHANGED: now maps old stone-type names to new mainCategory IDs
function navigateToCategory(cat) {
  // Map old category names to new mainCategory IDs where applicable
  const legacyMap = {
    granite:   'flooring',
    marble:    'flooring',
    sandstone: 'landscaping',
    slate:     'landscaping',
    limestone: 'flooring',
    pietra:    'stone-crafts',
  };
  const mainCat = legacyMap[cat] || cat;
  activeMainCategory = mainCat;
  activeSubCategory  = 'all';
  navigate('products');
  // After sidebar is built, highlight the correct main category
  setTimeout(() => showSubcategories(mainCat), 120);
}

// ═══════════════════════════════════════════════════════════
// ─── SIDEBAR: Category → Subcategory ──────────────────────
// ═══════════════════════════════════════════════════════════

// CHANGED: Completely rewrites the sidebar to use MAIN_CATEGORIES
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

  injectSidebarStyles();
}

// Expand a main category accordion
function toggleMainCat(mainCatId) {
  // If clicking the already-open category, close it and show "all"
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

// Show subcategories without toggling (used on navigation)
function showSubcategories(mainCatId) {
  activeMainCategory = mainCatId;
  activeSubCategory  = 'all';
  buildSidebar();
  renderProductsView(mainCatId, 'all');
}

// Select a sub-category from the sidebar
function selectSubCategory(mainCatId, subCatId) {
  activeMainCategory = mainCatId;
  activeSubCategory  = subCatId;
  buildSidebar();
  renderProductsView(mainCatId, subCatId);
}

// ═══════════════════════════════════════════════════════════
// ─── PRODUCT RENDERING ────────────────────────────────────
// ═══════════════════════════════════════════════════════════

// CHANGED: Central render function supporting main + sub category filters
function renderProductsView(mainCat, subCat) {
  activeMainCategory   = mainCat;
  activeSubCategory    = subCat;
  activeLegacyCategory = mainCat; // keep legacy state aligned

  let filtered = PRODUCTS;

  if (mainCat !== 'all') {
    filtered = filtered.filter(p => p.mainCategory === mainCat);
  }
  if (subCat !== 'all') {
    filtered = filtered.filter(p => p.subCategory === subCat);
  }

  // Update the category tabs to reflect active main category
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.cat-tab[data-main="${mainCat}"]`);
  if (activeTab) activeTab.classList.add('active');
  else {
    const allTab = document.querySelector('.cat-tab[data-main="all"]');
    if (allTab) allTab.classList.add('active');
  }

  // Update breadcrumb info inside the toolbar
  updateBreadcrumbInfo(mainCat, subCat, filtered.length);

  // Render product cards
  const grid = document.getElementById('productsGrid');
  document.getElementById('productCount').textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--mid);font-size:0.9rem">
      No products found in this category. Please try another selection.
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        <div class="product-img" style="background-image:url('${p.img}')"></div>
        ${p.badge ? `<div class="product-badge ${p.badge}">${p.badge}</div>` : ''}
        <div class="product-actions">
          <button class="prod-action-btn" onclick="event.stopPropagation();openModal(${p.id})" title="Quick View">👁</button>
          <button class="prod-action-btn" onclick="event.stopPropagation();navigate('contact')" title="Get Quote">✉</button>
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

// Helper: get human-readable label for the product category column
function getCategoryLabel(mainCatId, subCatId) {
  const main = MAIN_CATEGORIES.find(m => m.id === mainCatId);
  if (!main) return (mainCatId || '').charAt(0).toUpperCase() + (mainCatId || '').slice(1);
  const sub  = main.subcategories.find(s => s.id === subCatId);
  return sub ? sub.label : main.label;
}

// CHANGED: updateBreadcrumbInfo shows current navigation path below toolbar
function updateBreadcrumbInfo(mainCat, subCat, count) {
  const main = MAIN_CATEGORIES.find(m => m.id === mainCat);
  const sub  = main ? main.subcategories.find(s => s.id === subCat) : null;
  const countEl = document.getElementById('productCount');
  if (countEl) countEl.textContent = count;

  // Update any breadcrumb trail if element exists
  const trailEl = document.getElementById('catBreadcrumb');
  if (!trailEl) return;
  if (mainCat === 'all') {
    trailEl.textContent = 'All Products';
  } else if (sub) {
    trailEl.textContent = `${main.label} › ${sub.label}`;
  } else {
    trailEl.textContent = main ? main.label : 'All Products';
  }
}

// ─── Legacy filterByCategory: now delegates to renderProductsView ──
// CHANGED: maps top-level tab clicks to main category IDs
function filterByCategory(cat, el) {
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');

  // Map old tab values to new mainCategory IDs
  const tabMap = {
    all: 'all',
    'wall-coverings':      'wall-coverings',
    flooring:              'flooring',
    landscaping:           'landscaping',
    'stone-crafts':        'stone-crafts',
    'waterfalls-fountains':'waterfalls-fountains',
    cobblestones:          'cobblestones',
    'stone-jali':          'stone-jali',
    'stone-mandirs':       'stone-mandirs',
    // legacy stone-type tabs
    granite:   'flooring',
    marble:    'flooring',
    sandstone: 'landscaping',
    slate:     'landscaping',
    limestone: 'flooring',
    pietra:    'stone-crafts',
  };
  const mappedCat = tabMap[cat] || cat;
  activeMainCategory = mappedCat;
  activeSubCategory  = 'all';

  // If a main category was clicked, open its sidebar accordion
  if (mappedCat !== 'all') {
    buildSidebar();
  }
  renderProductsView(mappedCat, 'all');
}

// ─── Sort ──────────────────────────────────────────────────
function sortProducts(val) {
  if (val === 'name-az') PRODUCTS.sort((a,b) => a.name.localeCompare(b.name));
  else if (val === 'name-za') PRODUCTS.sort((a,b) => b.name.localeCompare(a.name));
  else if (val === 'popular') PRODUCTS.sort((a,b) => (b.badge==='popular'?1:0)-(a.badge==='popular'?1:0));
  renderProductsView(activeMainCategory, activeSubCategory);
}

// ─── View (grid / list) ────────────────────────────────────
function setView(mode, btn) {
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('productsGrid');
  if (mode === 'list') grid.classList.add('list-view');
  else grid.classList.remove('list-view');
}

function applyFilters() { renderProductsView(activeMainCategory, activeSubCategory); }

// ─── Legacy renderProducts (kept for safety) ────────────────
function renderProducts(category) {
  renderProductsView(category === 'all' ? 'all' : category, 'all');
}

// ═══════════════════════════════════════════════════════════
// ─── MODAL ────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalImg').style.backgroundImage = `url('${p.img}')`;
  document.getElementById('modalCat').textContent = getCategoryLabel(p.mainCategory, p.subCategory);
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalSpecs').innerHTML = Object.entries(p.specs || {}).map(([k,v]) => `
    <div class="spec-item"><div class="spec-key">${k}</div><div class="spec-val">${v}</div></div>
  `).join('');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (e.target === document.getElementById('productModal')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════════════════════
// ─── GALLERY ──────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════

function renderGallery(cat) {
  const grid = document.getElementById('galleryGrid');
  const items = cat === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === cat);
  grid.innerHTML = items.map(g => `
    <div class="gal-item" data-cat="${g.cat}">
      <div class="gal-img" style="height:${g.h}px;background-image:url('${g.img}');background-size:cover;background-position:center"></div>
      <div class="gal-overlay">
        <div class="gal-overlay-icon">⊕</div>
      </div>
    </div>
  `).join('');
}

function filterGallery(cat, btn) {
  document.querySelectorAll('.gal-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery(cat);
}

// ═══════════════════════════════════════════════════════════
// ─── BLOG ─────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════

function renderBlog() {
  document.getElementById('blogGrid').innerHTML = BLOG_POSTS.map(b => `
    <div class="blog-card">
      <div class="blog-img" style="background-image:url('${b.img}');background-size:cover;background-position:center"></div>
      <div class="blog-meta">
        <div class="blog-tag">${b.tag}</div>
        <div class="blog-date">${b.date}</div>
      </div>
      <div class="blog-info">
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
        <div class="blog-read">Read More →</div>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════
// ─── CONTACT ──────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════

function submitForm() {
  const firstName = document.querySelector('input[placeholder="John"]').value;
  const lastName  = document.querySelector('input[placeholder="Smith"]').value;
  const email     = document.querySelector('input[placeholder="john@example.com"]').value;
  const phone     = document.querySelector('input[placeholder="+1 234 567 890"]').value;
  const country   = document.querySelector('input[placeholder="United States"]').value;
  const product   = document.querySelector('select').value;
  const message   = document.querySelector('textarea').value;

  if (!firstName || !phone) {
    alert('Please enter at least your name and phone number.');
    return;
  }

  const whatsappNumber = '7000418227';
  const text =
    `*New Stone Enquiry*%0A` +
    `---------------------------%0A` +
    `*Name:* ${firstName} ${lastName}%0A` +
    `*Email:* ${email}%0A` +
    `*Phone:* ${phone}%0A` +
    `*Country:* ${country}%0A` +
    `*Interest:* ${product}%0A` +
    `*Message:* ${message}`;

  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  document.getElementById('formSuccess').style.display = 'block';
  setTimeout(() => (document.getElementById('formSuccess').style.display = 'none'), 5000);
}

// ═══════════════════════════════════════════════════════════
// ─── MISC ─────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════

function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText =
      'display:flex;flex-direction:column;position:fixed;top:72px;left:0;right:0;background:var(--warm-white);padding:20px 8%;gap:20px;border-bottom:1px solid rgba(139,115,85,0.15);z-index:999';
  }
}

window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
});

// ═══════════════════════════════════════════════════════════
// ─── SIDEBAR STYLES (injected once) ───────────────────────
// ═══════════════════════════════════════════════════════════

// CHANGED: Adds minimal sidebar styles for the new category accordion.
// Uses existing CSS variables — does NOT change any existing design.
function injectSidebarStyles() {
  if (document.getElementById('gcs-sidebar-styles')) return; // inject only once
  const style = document.createElement('style');
  style.id = 'gcs-sidebar-styles';
  style.textContent = `
    /* ── New Category Sidebar Styles ── */
    .main-cat-item { margin-bottom: 4px; }

    .main-cat-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 2px;
      cursor: pointer;
      font-size: 0.82rem;
      font-weight: 500;
      color: var(--stone-dark);
      transition: background 0.2s, color 0.2s;
      user-select: none;
    }
    .main-cat-header:hover {
      background: rgba(184,150,74,0.08);
      color: var(--gold);
    }
    .main-cat-header.open {
      background: rgba(184,150,74,0.12);
      color: var(--gold);
    }
    .main-cat-icon { font-size: 1rem; flex-shrink: 0; }
    .main-cat-label { flex: 1; }
    .main-cat-arrow { font-size: 0.7rem; flex-shrink: 0; color: var(--stone); }

    .sub-cat-list {
      flex-direction: column;
      gap: 2px;
      padding: 4px 0 8px 36px;
    }
    .sub-cat-item {
      padding: 7px 12px;
      font-size: 0.78rem;
      font-weight: 300;
      color: var(--mid);
      cursor: pointer;
      border-radius: 2px;
      border-left: 2px solid transparent;
      transition: all 0.18s;
    }
    .sub-cat-item:hover {
      color: var(--stone-dark);
      border-left-color: var(--stone-light);
      background: rgba(139,115,85,0.05);
    }
    .sub-cat-item.active {
      color: var(--gold);
      border-left-color: var(--gold);
      font-weight: 500;
      background: rgba(184,150,74,0.06);
    }

    /* Category breadcrumb trail (in toolbar) */
    #catBreadcrumb {
      font-size: 0.75rem;
      color: var(--stone);
      letter-spacing: 0.05em;
    }
  `;
  document.head.appendChild(style);
}

// ═══════════════════════════════════════════════════════════
// ─── CATEGORY TABS: update HTML data-attributes on load ───
// ═══════════════════════════════════════════════════════════

// CHANGED: Rewrites the top category tabs to use new main categories
function initCategoryTabs() {
  const tabsContainer = document.querySelector('.category-tabs');
  if (!tabsContainer) return;

  const tabs = [
    { id: 'all',                   label: 'All Products' },
    { id: 'wall-coverings',        label: 'Wall Coverings' },
    { id: 'flooring',              label: 'Flooring' },
    { id: 'landscaping',           label: 'Landscaping' },
    { id: 'stone-crafts',          label: 'Stone Crafts' },
    { id: 'waterfalls-fountains',  label: 'Waterfalls & Fountains' },
    { id: 'cobblestones',          label: 'Cobblestones' },
    { id: 'stone-jali',            label: 'Stone Jali' },
    { id: 'stone-mandirs',         label: 'Stone Mandirs' },
  ];

  tabsContainer.innerHTML = tabs.map(t => `
    <div class="cat-tab ${t.id === 'all' ? 'active' : ''}"
         data-main="${t.id}"
         onclick="filterByCategory('${t.id}', this)">
      ${t.label}
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════
// ─── INITIALISATION ───────────────────────────────────────
// ═══════════════════════════════════════════════════════════

// Run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initCategoryTabs();   // NEW: rewrite tabs to new categories
  buildSidebar();       // NEW: build category accordion sidebar
  renderProductsView('all', 'all');
  renderGallery('all');
  renderBlog();
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 4000);