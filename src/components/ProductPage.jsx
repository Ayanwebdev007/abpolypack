import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Instagram, 
  Youtube, 
  Facebook, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Zap, 
  Package,
  Award,
  Hourglass,
  Droplet,
  Hexagon,
  Gauge,
  Recycle
} from 'lucide-react';

export default function ProductPage({ selectedProduct = 'laminates', setSelectedProduct, onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState(selectedProduct);
  const gridRef = useRef(null);
  const [isGridVisible, setIsGridVisible] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setActiveTab(selectedProduct);
    }
  }, [selectedProduct]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGridVisible(true);
        } else {
          setIsGridVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (setSelectedProduct) {
      setSelectedProduct(tabId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { icon: Globe, label: 'Website', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Contact Email', href: 'mailto:info@abpolypacks.com' }
  ];

  const productsData = {
    'laminates': {
      id: 'laminates',
      badge: 'LAMINATES',
      heroTitle: 'EXPLORE OUR PORTFOLIO',
      heroSubtitle: 'Every product has a better fit',
      heroImage: '/product_hero.webp',
      tagline: 'Precision engineered multi-layer barrier laminates for food, pharma, personal care & industrial products.',
      description: 'AB Polypacks manufactures state-of-the-art flexible laminates in 2-ply, 3-ply, and 4-ply combinations. Utilizing 10-color rotogravure printing and solvent-free lamination technology, our laminates safeguard product freshness, prevent light & gas transmission, and ensure structural stability.',
      structures: [
        { name: 'PET / PE', desc: 'Standard 2-ply high-clarity laminate for snacks, dry foods, and general packaging.' },
        { name: 'PET / MET PET / PE', desc: '3-ply metallic barrier structure with high moisture & oxygen protection.' },
        { name: 'PET / ALU / PE (Foil)', desc: 'Ultra-high barrier 3-ply foil laminate for maximum shelf life & zero light penetration.' },
        { name: 'BOPP / MET PET / PE', desc: 'Economical high-gloss laminate for confectionery, biscuits, and snack packaging.' },
        { name: 'Paper / PE / ALU', desc: 'Eco-aesthetic paper laminate for premium tea, coffee, and pharma sachets.' },
        { name: 'Mono-PE Recyclable', desc: '100% recyclable single-polymer laminate compliant with circular economy standards.' }
      ],
      features: [
        { title: 'Solvent-Free Lamination', desc: 'Zero odor retention and eco-conscious processing.' },
        { title: '10-Color Rotogravure', desc: 'HD print reproduction with pinpoint registration accuracy.' },
        { title: 'High Seal Strength', desc: 'Wide heat sealing window for high-speed VFFS & HFFS packaging machines.' },
        { title: 'Customized Barrier Levels', desc: 'Tailored MVTR & OTR properties for specific product shelf-life requirements.' }
      ],
      specifications: [
        { label: 'Thickness Range', value: '30 to 180 Microns' },
        { label: 'Max Reel Width', value: 'Up to 1300 mm' },
        { label: 'Printing Capability', value: 'Up to 10 Colors Rotogravure' },
        { label: 'Barrier Shielding', value: 'Moisture, Oxygen, UV Light, Aroma' },
        { label: 'Form Factor', value: 'Custom Slit Reels / Roll Stock' },
        { label: 'Certifications', value: 'BRCGS Packaging, FSSC 22000, ISO 9001' }
      ],
      applications: [
        'Snacks & Confectionery',
        'Spices, Condiments & Masalas',
        'Tea & Coffee Packaging',
        'Pharmaceutical Sachets & Strips',
        'Dairy & Frozen Foods',
        'Home Care & Detergent Powders'
      ]
    },
    'pouches': {
      id: 'pouches',
      badge: 'CUSTOM PRE-FORMED POUCHES',
      heroTitle: 'VERSATILE PRE-FORMED POUCHES FOR MODERN BRANDS',
      heroSubtitle: 'Stand-up pouches, zipper bags, spout pouches, and side-gusseted bags designed for maximum retail shelf presence, consumer convenience, and product freshness.',
      heroImage: '/product_pouches.webp',
      tagline: 'Ergonomic, high-barrier pouch solutions tailored for liquid, solid, and powder applications.',
      description: 'AB Polypacks supplies pre-formed pouches engineered to stand out on retail shelves. Featuring options like tear notches, press-to-close zippers, ergonomic handles, and recloseable spouts, our pouches deliver superior barrier protection and consumer ease.',
      structures: [
        { name: 'Stand-Up Zipper Pouch', desc: 'Self-standing pouch with reclosable zipper for snacks, dry fruits, and powders.' },
        { name: 'Spout Pouch for Liquids', desc: 'Leak-proof spouted pouch ideal for beverages, sauces, oils, and liquid detergents.' },
        { name: '3-Side Seal Sachet', desc: 'Flat compact pouch optimized for single-use pharmaceutical, coffee, and condiment sachets.' },
        { name: 'Side-Gusseted Box Pouch', desc: 'Flat bottom pouch maximizing filling volume and 5-panel branding space.' }
      ],
      features: [
        { title: 'Hermetic Leak-Proof Seals', desc: 'Rigorous pressure testing ensures zero leakage for liquid & vacuum packing.' },
        { title: 'Custom Re-closability', desc: 'High-grade zip locks and spout caps for user convenience.' },
        { title: 'Vibrant Shelf Appeal', desc: 'Gloss, matt, and metallic finishes with clear window options.' },
        { title: 'Puncture Resistant', desc: 'Multi-layer strength engineered for drop impact and heavy handling.' }
      ],
      specifications: [
        { label: 'Pouch Types', value: 'Stand-up, Zipper, Spout, 3-Side Seal, Quad Seal' },
        { label: 'Volume Capacity', value: '50g to 5kg / 50ml to 5 Litres' },
        { label: 'Finishes Available', value: 'Matt, Gloss, Selective UV, Foil Stamping' },
        { label: 'Accessories', value: 'Degassing Valves, Zipper, Spout, Hang Hole' },
        { label: 'Material Grade', value: 'Food-Grade FDA Compliant Barrier Films' },
        { label: 'Certifications', value: 'BRCGS Packaging, FSSC 22000' }
      ],
      applications: [
        'Edible Oils, Sauces & Dressings',
        'Dry Fruits, Nuts & Cereals',
        'Pet Food & Animal Feeds',
        'Beverages & Fruit Juices',
        'Hand Wash & Household Cleaners',
        'Personal Care Creams & Lotions'
      ]
    },
    'shrink-sleeves': {
      id: 'shrink-sleeves',
      badge: 'FULL BODY SHRINK SLEEVES',
      heroTitle: '360-DEGREE FULL BODY BRANDING & TAMPER EVIDENCE',
      heroSubtitle: 'High-shrink PETG and PVC sleeves offering full-coverage vibrant graphics, tamper-evident neck seals, and seamless contour fitting on complex container shapes.',
      heroImage: '/product_shrink_sleeves.webp',
      tagline: 'Transform any container with high-impact 360° graphics and built-in security features.',
      description: 'Our full-body shrink sleeves hug every curve of glass, plastic, or metal containers. Printed on high-clarity PETG and PVC shrink substrates, AB Polypacks delivers head-turning brand aesthetics paired with tamper-evident neck bands.',
      structures: [
        { name: 'PETG High-Shrink (70-78%)', desc: 'Eco-friendly sleeve film ideal for intricate bottle contours and high speed shrink tunnels.' },
        { name: 'PVC Shrink Sleeve (50-66%)', desc: 'Cost-effective sleeve film suitable for standard container shapes and neck bands.' },
        { name: 'Tamper-Evident Perforated Band', desc: 'Pre-cut neck sleeve with micro-perforations for safety and anti-counterfeiting.' }
      ],
      features: [
        { title: '360° Seamless Coverage', desc: 'Maximizes printable artwork area on complex curved bottles.' },
        { title: 'Reverse Printing', desc: 'Protects inks from scuffing, chemicals, and moisture during transport.' },
        { title: 'Micro-Perforations', desc: 'Enables easy consumer opening while maintaining tamper evidence.' },
        { title: 'High Thermal Shrinkage', desc: 'Conforms smoothly without wrinkling or graphic distortion.' }
      ],
      specifications: [
        { label: 'Substrates', value: 'PETG / PVC Shrink Film' },
        { label: 'Thickness Range', value: '30 to 50 Microns' },
        { label: 'Shrink Percentage', value: 'Up to 78% TD Shrinkage' },
        { label: 'Supply Form', value: 'Pre-cut Sleeves or Continuous Rolls' },
        { label: 'Special Inks', value: 'Metallic, Thermochromic, UV Fluorescent' },
        { label: 'Tunnel Compatibility', value: 'Steam Tunnel & Hot Air Tunnel Ready' }
      ],
      applications: [
        'Flavored Milk & Dairy Drinks',
        'Carbonated & Energy Drinks',
        'Pharmaceutical Bottle Sealing',
        'Cosmetic & Perfume Bottles',
        'Nutraceutical Supplements',
        'Household Chemical Bottles'
      ]
    },
    'wrap-around-labels': {
      id: 'wrap-around-labels',
      badge: 'WRAP-AROUND LABELS',
      heroTitle: 'PRECISION BOPP LABELS FOR HIGH-SPEED BOTTLING',
      heroSubtitle: 'Clear, metallic, and pearlized roll-fed wrap-around labels optimized for high-volume beverage, mineral water, and household container labeling machines.',
      heroImage: '/product_wrap_around_labels.webp',
      tagline: 'High-speed roll-fed labeling solution offering high tensile strength and vibrant graphics.',
      description: 'AB Polypacks produces premium BOPP wrap-around labels designed for continuous roll-fed labeling machinery operating at ultra-high speeds. Resistant to moisture, scuffing, and tears, these labels enhance bottle aesthetics while optimizing production throughput.',
      structures: [
        { name: 'White Opaque BOPP', desc: 'High-whiteness opaque film for brilliant color contrast and stiffness.' },
        { name: 'Clear Transparent BOPP', desc: 'Ultra-clear film providing an elegant "no-label" look on glass and PET bottles.' },
        { name: 'Metallized BOPP', desc: 'High-reflectivity metallic film creating premium shelf impact for energy and soft drinks.' }
      ],
      features: [
        { title: 'Ultra-High Speed Machine Compatibility', desc: 'Consistent tensile properties eliminate web breaks during fast application.' },
        { title: 'Water & Scuff Resistance', desc: 'Retains crisp look even in cold storage or condensation.' },
        { title: 'Static-Free Treatment', desc: 'Special anti-static coating ensures clean feeding on labeling lines.' },
        { title: 'HD Rotogravure Inks', desc: 'Bright, fade-resistant colors that stand out in retail displays.' }
      ],
      specifications: [
        { label: 'Base Material', value: 'BOPP (Opaque, Clear, Metallized)' },
        { label: 'Thickness Range', value: '30 to 45 Microns' },
        { label: 'Supply Format', value: 'Slit Reels / Roll-Fed Labels' },
        { label: 'Print Technique', value: 'Up to 10 Colors Gravure' },
        { label: 'Applicator Speed', value: 'Compatible with >600 BPM Labelers' },
        { label: 'Recyclability', value: 'Fully Compatible with PET Bottle Recycling' }
      ],
      applications: [
        'Packaged Drinking Water Bottles',
        'Carbonated Soft Drinks (CSD)',
        'Fruit Juices & Beverages',
        'Liquid Detergents & Cleaners',
        'Edible Oils & Cooking Sauces',
        'Personal Care Shampoos'
      ]
    },
    'collation-shrink-films': {
      id: 'collation-shrink-films',
      badge: 'COLLATION SHRINK FILMS',
      heroTitle: 'HEAVY-DUTY BUNDLING & TRANSIT SHRINK FILMS',
      heroSubtitle: 'High-strength LDPE collation shrink films engineered for secondary multi-pack bundling of bottles, cans, cartons, and industrial goods during transit.',
      heroImage: '/product_collation_shrink_film.webp',
      tagline: 'Tough, puncture-resistant bundling film replacing expensive corrugated boxes.',
      description: 'AB Polypacks manufactures heavy-duty LDPE collation shrink films designed to unitize products into tight, secure bundles. Offering high holding force, superior puncture resistance, and clear optics, our collation films cut packaging costs while protecting cargo during transport.',
      structures: [
        { name: '3-Layer Co-Extruded LDPE', desc: 'Multi-layer film blend engineered for maximum toughness and shrink memory.' },
        { name: 'High-Clarity Printed Collation Film', desc: 'Branded bundling film featuring printed logos and barcodes for multi-packs.' },
        { name: 'Heavy-Duty Industrial Shrink Film', desc: 'Extra-thick film for bundling heavy cans, jars, and bulk goods.' }
      ],
      features: [
        { title: 'Superior Tensile & Tear Strength', desc: 'Withstands rough transport without tearing or puncturing.' },
        { title: 'Balanced Shrinkage Ratio', desc: 'Ensures tight, rigid bundling around both rectangular and rounded packs.' },
        { title: 'Cost & Weight Reduction', desc: 'Replaces bulky cardboard boxes, reducing total shipping weight and carbon footprint.' },
        { title: 'All-Weather Protection', desc: 'Shields packages against dust, rain, and humidity in transit.' }
      ],
      specifications: [
        { label: 'Polymer Type', value: 'Co-Extruded LDPE / LLDPE' },
        { label: 'Thickness Range', value: '40 to 120 Microns' },
        { label: 'Shrink Temperature', value: '140°C to 180°C' },
        { label: 'Roll Width', value: 'Up to 1400 mm' },
        { label: 'Yield Strength', value: 'High Machine Direction (MD) & Transverse (TD) Strength' },
        { label: 'Eco Profile', value: '100% Recyclable LDPE Category 4' }
      ],
      applications: [
        'Beverage Bottle & Can Multi-Packs',
        'Canned Foods & Glass Jars',
        'Pharmaceutical Box Bundling',
        'Paper Rim & Stationery Bundling',
        'FMCG Bulk Transit Packs',
        'Construction & Hardware Supplies'
      ]
    }
  };

  const navProducts = [
    { id: 'laminates', name: 'Laminates' },
    { id: 'pouches', name: 'Pouches' },
    { id: 'shrink-sleeves', name: 'Shrink Sleeves' },
    { id: 'wrap-around-labels', name: 'Wrap-around Labels' },
    { id: 'collation-shrink-films', name: 'Collation Shrink Films' }
  ];

  const leftFeatures = [
    { icon: Hourglass, title: 'Shelf Life', subtitle: 'OTR, WVTR, structure integrity' },
    { icon: Droplet, title: 'Freshness', subtitle: 'Oxygen / moisture barrier, aroma retention' },
    { icon: Hexagon, title: 'Mechanical Strength', subtitle: 'Tensile, puncture, impact, tear' },
    { icon: Gauge, title: 'High-Speed Filling', subtitle: 'COF, web stability, sealing behaviour' }
  ];

  const rightFeatures = [
    { icon: ShieldCheck, title: 'Seal Integrity', subtitle: 'Seal strength, seal initiation, contamination tolerance' },
    { icon: Sparkles, title: 'Print Quality', subtitle: 'Surface energy, ink adhesion, registration' },
    { icon: Package, title: 'Distribution', subtitle: 'Flex-crack resistance, bond integrity, dimensional stability' },
    { icon: Recycle, title: 'Sustainability', subtitle: 'Material intensity, recyclability pathway, downgauging potential' }
  ];

  const currentData = productsData[activeTab] || productsData['laminates'];

  return (
    <div className="w-full min-h-screen bg-[#faf7f2] font-sans">
      
      {/* 1. FULL-BLEED HERO SECTION (EXACT MATCH TO OUR STORY HERO STYLE) */}
      <section className="w-full h-screen min-h-[600px] relative overflow-hidden bg-black font-sans">
        
        {/* FULL-BLEED BACKGROUND MEDIA LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src={currentData.heroImage} 
            alt={currentData.heroTitle} 
            className="w-full h-full object-cover object-center scale-105 transition-all duration-700"
          />
          {/* Dark overlay (25%) + Bottom black gradient fade for high readability */}
          <div className="absolute inset-0 bg-black/35 pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-56 sm:h-72 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none z-10" />
        </div>

        {/* LEFT SIDE: VERTICAL SOCIAL / CONTACT ICONS (HERO STYLE) */}
        <div className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center space-y-4">
          {socialIcons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                title={item.label}
                className="p-1.5 text-white/70 hover:text-[#ed4d0d] hover:scale-110 transition-all duration-200"
                aria-label={item.label}
              >
                <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
              </a>
            );
          })}
        </div>

        {/* CENTER BOTTOM CONTENT AND BADGE (EXACT OUR STORY HERO LAYOUT & METRICS) */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end pb-8 sm:pb-12 pointer-events-none">
          <div className="max-w-5xl w-full px-4 space-y-2 text-center pointer-events-auto flex flex-col items-center justify-center">
            
            {/* Slide Indicator Badge */}
            <div className="flex items-center space-x-3 text-xs font-semibold text-white/80 tracking-widest uppercase mb-0.5">
              <span>PRODUCTS</span>
              <span className="w-8 h-[1.5px] bg-white/40"></span>
              <span className="text-[#ed4d0d] font-bold text-sm">{currentData.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight uppercase drop-shadow-md text-center leading-tight">
              {currentData.heroTitle}
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-stone-200 font-light leading-relaxed max-w-2xl drop-shadow-sm text-center">
              {currentData.heroSubtitle}
            </p>

          </div>
        </div>
      </section>

      {/* 2. OVERVIEW INTRO SECTION */}
      <section className="w-full bg-[#ed4d0d] text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 font-sans shadow-inner">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Centered Title */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white uppercase tracking-tight leading-tight">
              ONE PORTFOLIO. MANY PRODUCT POSSIBILITIES
            </h2>
          </div>

          {/* Description Paragraph (Single continuous block, Justified Text) */}
          <div className="text-white/95 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal space-y-5 text-justify">
            <p>
              Packaging requirements change with the product. What protects a biscuit may not be what a liquid, frozen food or personal-care product needs. AB Polypacks brings together a versatile range of laminates, pouches, shrink sleeves, wrap-around labels and collation shrink films, giving customers the flexibility to select formats around their specific functional and commercial requirements. Our portfolio is designed to address critical needs such as barrier protection, seal integrity, strength, shelf-life support, visual appeal, convenience and efficient transportation. Whether the priority is preserving freshness, creating shelf impact or securing products through distribution, there is a format engineered around the job.
            </p>
            <p className="font-medium text-white pt-2 text-center text-sm sm:text-base tracking-wide">
              Explore by category. Discover what each format can deliver.
            </p>
          </div>

        </div>
      </section>

      {/* 3. LAMINATES: FROM PRODUCT REQUIREMENT TO LAMINATE SECTION */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-stone-200 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 text-center">
          
          {/* Eyebrow & Title (Matching Hero & Section 2 Sizes) */}
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <span className="inline-block px-6 py-2 rounded-xl bg-[#ed4d0d] text-white text-base sm:text-lg lg:text-xl font-medium uppercase tracking-[0.15em] shadow-sm">
              LAMINATES
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-stone-900 uppercase tracking-tight leading-tight">
              FROM PRODUCT REQUIREMENT TO LAMINATE
            </h2>
          </div>

          {/* Description Copy (Matching Section 2 Paragraph Size) */}
          <div className="text-stone-700 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-5xl mx-auto text-justify">
            <p>
              The right laminate starts with the product — not with a pre-selected film combination. At AB Polypacks, we look at what the pack needs to protect, withstand, seal, preserve and communicate, then engineer the structure around those requirements.
            </p>
          </div>

          {/* Sub-heading / Prompt (Pill Bar) */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-stone-100/90 border border-stone-200/80 text-stone-800 text-xs sm:text-sm md:text-base font-medium tracking-tight">
              <span>What matters most when matching laminate performance to your product requirements</span>
            </div>
          </div>

          {/* 4 - Image - 4 Grid Section */}
          <div 
            ref={gridRef}
            className="pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center max-w-7xl mx-auto overflow-hidden"
          >
            
            {/* Left 4 Features (Col-span-4) - Slides in from Left */}
            <div className="lg:col-span-4 space-y-8 sm:space-y-10">
              {leftFeatures.map((item, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    transitionDelay: `${idx * 180}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className={`flex flex-row lg:flex-row-reverse items-center gap-4 sm:gap-6 transition-all duration-[1200ms] transform ${
                    isGridVisible 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-28 sm:-translate-x-44 opacity-0'
                  }`}
                >
                  {/* Extra Large Brand Blue Triangle Arrow (pointing right toward center) */}
                  <svg 
                    className="w-16 h-16 sm:w-20 sm:h-20 text-[#018ade] shrink-0" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>

                  {/* Content */}
                  <div className="flex-1 text-left lg:text-right">
                    <h4 className="text-base sm:text-lg font-semibold text-stone-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-normal mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Floating PNG (Col-span-4) - Scales in */}
            <div 
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              className={`lg:col-span-4 flex items-center justify-center py-2 relative transition-all duration-[1200ms] delay-300 transform ${
                isGridVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] animate-float-pouch">
                <img
                  src="/product_lays_chips.webp"
                  alt="AB Polypacks High Barrier Packaging Pouch"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right 4 Features (Col-span-4) - Slides in from Right */}
            <div className="lg:col-span-4 space-y-8 sm:space-y-10">
              {rightFeatures.map((item, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    transitionDelay: `${idx * 180}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className={`flex flex-row items-center gap-4 sm:gap-6 text-left transition-all duration-[1200ms] transform ${
                    isGridVisible 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-28 sm:translate-x-44 opacity-0'
                  }`}
                >
                  {/* Extra Large Brand Blue Triangle Arrow (pointing left toward center) */}
                  <svg 
                    className="w-16 h-16 sm:w-20 sm:h-20 text-[#018ade] shrink-0" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M16 5v14l-11-7z" />
                  </svg>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h4 className="text-base sm:text-lg font-semibold text-stone-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-normal mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Concluding Narrative Section (Single Continuous Block, Justified Text) */}
          <div className="pt-10 sm:pt-14 max-w-5xl mx-auto text-stone-700 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal text-justify">
            <p>
              At AB Polypacks, we start with these requirements and engineer the structure around them. Each layer has a defined role — whether it is delivering oxygen or moisture barrier, mechanical strength, printability or heat-sealing performance — and the final construction is selected around the product, filling process, target shelf life and distribution conditions. With solvent-based, solventless and extrusion-coating lamination, we can develop multilayer structures tailored to specific applications. The result is not simply a combination of films; it is a purpose-built structure where every layer earns its place and every property works towards the same outcome.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
