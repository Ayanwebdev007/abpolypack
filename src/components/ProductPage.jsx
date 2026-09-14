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

  const requirementsData = {
    'laminates': {
      badge: 'LAMINATES',
      title: 'FROM PRODUCT REQUIREMENT TO LAMINATE',
      intro: 'The right laminate starts with the product — not with a pre-selected film combination. At AB Polypacks, we look at what the pack needs to protect, withstand, seal, preserve and communicate, then engineer the structure around those requirements.',
      prompt: 'What matters most when matching laminate performance to your product requirements',
      subPrompt: null,
      leftFeatures: [
        { icon: Hourglass, title: 'Shelf Life', subtitle: 'OTR, WVTR, structure integrity' },
        { icon: Droplet, title: 'Freshness', subtitle: 'Oxygen / moisture barrier, aroma retention' },
        { icon: Hexagon, title: 'Mechanical Strength', subtitle: 'Tensile, puncture, impact, tear' },
        { icon: Gauge, title: 'High-Speed Filling', subtitle: 'COF, web stability, sealing behaviour' }
      ],
      rightFeatures: [
        { icon: ShieldCheck, title: 'Seal Integrity', subtitle: 'Seal strength, seal initiation, contamination tolerance' },
        { icon: Sparkles, title: 'Print Quality', subtitle: 'Surface energy, ink adhesion, registration' },
        { icon: Package, title: 'Distribution', subtitle: 'Flex-crack resistance, bond integrity, dimensional stability' },
        { icon: Recycle, title: 'Sustainability', subtitle: 'Material intensity, recyclability pathway, downgauging potential' }
      ],
      centerImage: '/product_lays_chips.webp',
      concludingNarrative: [
        'At AB Polypacks, we start with these requirements and engineer the structure around them. Each layer has a defined role — whether it is delivering oxygen or moisture barrier, mechanical strength, printability or heat-sealing performance — and the final construction is selected around the product, filling process, target shelf life and distribution conditions. With solvent-based, solventless and extrusion-coating lamination, we can develop multilayer structures tailored to specific applications. The result is not simply a combination of films; it is a purpose-built structure where every layer earns its place and every property works towards the same outcome.'
      ]
    },
    'pouches': {
      badge: 'POUCHES',
      title: 'FROM PRODUCT REQUIREMENT TO POUCH',
      intro: 'The right pouch starts with the product — not with a pre-selected format. At AB Polypacks, we look at what the pouch needs to contain, protect, withstand, seal, dispense and deliver, then engineer the format around those requirements. What matters most when matching pouch performance to your product and process requirements.',
      prompt: 'The key performance criteria that define the right pouch for your product and process.',
      subPrompt: null,
      leftFeatures: [
        { icon: ShieldCheck, title: 'Product Protection', subtitle: 'Barrier performance, product compatibility, moisture / oxygen protection, aroma retention' },
        { icon: Hourglass, title: 'Shelf Life', subtitle: 'OTR, WVTR, structural integrity, seal performance' },
        { icon: Hexagon, title: 'Mechanical Strength', subtitle: 'Tensile strength, puncture resistance, tear resistance, impact / drop performance' },
        { icon: Gauge, title: 'High-Speed Filling', subtitle: 'COF, web stability, dimensional consistency, machineability' },
        { icon: Droplet, title: 'Leak Resistance', subtitle: 'Seal integrity, pouch geometry, spout / fitment performance where applicable' }
      ],
      rightFeatures: [
        { icon: Zap, title: 'Thermal Performance', subtitle: 'Heat resistance, hot-fill / pasteurisation / retort suitability where applicable' },
        { icon: Package, title: 'User Convenience', subtitle: 'Opening behaviour, dispensing, pouring, reclosure, handling' },
        { icon: Sparkles, title: 'Print Quality', subtitle: 'Surface characteristics, ink adhesion, registration, visual consistency' },
        { icon: Layers, title: 'Distribution', subtitle: 'Compression, flex-crack resistance, puncture / impact resistance, dimensional stability' },
        { icon: Recycle, title: 'Sustainability', subtitle: 'Material intensity, downgauging potential, recyclability pathway, resource efficiency' }
      ],
      centerImage: '/product_lays_chips.webp',
      concludingNarrative: [
        'At AB Polypacks, we start with these requirements and engineer the pouch structure and format around them. Each element has a defined role — from the film structure and barrier layer to the sealant, geometry, gusset, spout or functional feature — and the final construction is selected around the product, filling conditions, target shelf life, handling environment and intended user experience. Our pouching capabilities include three-side seal, centre-seal, stand-up, pillow, spout, shaped and customised pouches, allowing the finished format to be aligned with different product, process and market requirements. The result is not simply a bag made to a dimension; it is a purpose-built pouch where structure, format and function work together towards the same outcome. The right pouch does more than contain. It protects the product, performs on the line and works through the journey.'
      ]
    },
    'shrink-sleeves': {
      badge: 'SHRINK SLEEVES',
      title: 'FROM CONTAINER PROFILE TO SHRINK SLEEVE',
      intro: 'The right shrink sleeve starts with the container — not with a pre-selected film or artwork. At AB Polypacks, we look at the container geometry, required coverage, shrink behaviour, graphics, application conditions and end-use expectations, then engineer the sleeve around those requirements.',
      prompt: 'The key performance criteria that define the right shrink sleeve for your container, application and brand requirements.',
      subPrompt: null,
      leftFeatures: [
        { icon: Hourglass, title: 'Shrink Performance', subtitle: 'Shrink ratio, shrink uniformity, directional behaviour, dimensional stability' },
        { icon: ShieldCheck, title: 'Container Coverage', subtitle: 'Container height, circumference, taper, radii, shoulder and neck profile' },
        { icon: Sparkles, title: 'Artwork Accuracy', subtitle: 'Distortion compensation, registration, critical graphics, barcode orientation' },
        { icon: CheckCircle2, title: 'Seam Integrity', subtitle: 'Seam strength, seam position, consistency, visual appearance' },
        { icon: Layers, title: 'Film Performance', subtitle: 'Gauge, clarity / opacity, surface characteristics, mechanical properties' }
      ],
      rightFeatures: [
        { icon: Sparkles, title: 'Print Quality', subtitle: 'Colour consistency, ink adhesion, registration, graphic definition' },
        { icon: Gauge, title: 'Application Performance', subtitle: 'Shrink-tunnel compatibility, application speed, thermal profile, sleeve positioning' },
        { icon: Hexagon, title: 'Reel Quality', subtitle: 'Winding consistency, lay-flat dimensions, defect control, downstream machinability' },
        { icon: ShieldCheck, title: 'Finished Appearance', subtitle: 'Wrinkling, distortion, coverage, seam visibility, overall visual conformity' },
        { icon: Recycle, title: 'Sustainability', subtitle: 'Material efficiency, downgauging potential, material selection, recyclability considerations' }
      ],
      centerImage: '/product_lays_chips.webp',
      concludingNarrative: [
        'At AB Polypacks, we start with these requirements and engineer the sleeve structure and conversion process around them. Each element has a defined role — from the film substrate and artwork compensation to seaming, rewinding and final shrink application — and the finished construction is selected around the container profile, visual identity, application equipment and operating conditions. Our shrink-sleeve capability includes seamless full-body sleeves using PVC and PETG films, supported by automated Karlville equipment and high-speed production capability. The process incorporates precision seaming and controlled rewinding to support consistent downstream application. The result is not simply a printed film formed into a sleeve; it is a purpose-built structure where material behaviour, graphics, dimensions and application performance work together towards the same outcome. The right shrink sleeve does more than follow the shape. It brings the shape, the brand and the application together.'
      ]
    },
    'wrap-around-labels': {
      badge: 'WRAP-AROUND LABELS',
      title: 'FROM CONTAINER TO BRAND EXPRESSION',
      intro: 'The right wrap-around label starts with the container — not with a pre-selected substrate or artwork. At AB Polypacks, we consider the container geometry, label material, print requirements, application method, adhesive performance and end-use environment, then engineer the label around those requirements.',
      prompt: 'The key performance criteria that define the right wrap-around label for your container, application and brand requirements.',
      subPrompt: null,
      leftFeatures: [
        { icon: ShieldCheck, title: 'Container Compatibility', subtitle: 'Container material, shape, diameter, surface characteristics, taper and application area' },
        { icon: CheckCircle2, title: 'Adhesion', subtitle: 'Bond strength, substrate compatibility, adhesive performance, temperature and moisture resistance' },
        { icon: Gauge, title: 'Application Performance', subtitle: 'Application speed, label positioning, overlap consistency, machineability and web stability' },
        { icon: Sparkles, title: 'Print Quality', subtitle: 'Colour consistency, registration, ink adhesion, graphic definition and brand reproduction' },
        { icon: Layers, title: 'Dimensional Stability', subtitle: 'Gauge consistency, curl, shrinkage, web stability and resistance to deformation' }
      ],
      rightFeatures: [
        { icon: Hexagon, title: 'Mechanical Strength', subtitle: 'Tear resistance, abrasion resistance, handling durability and substrate integrity' },
        { icon: Droplet, title: 'Moisture / Environmental Resistance', subtitle: 'Water resistance, condensation tolerance, temperature exposure and storage conditions' },
        { icon: FileText, title: 'Barcode & Variable Data', subtitle: 'Print clarity, registration, contrast, readability and positioning' },
        { icon: ShieldCheck, title: 'Label Conformity', subtitle: 'Length, width, overlap, edge alignment, winding direction and roll consistency' },
        { icon: Recycle, title: 'Sustainability', subtitle: 'Material efficiency, downgauging potential, substrate selection and recyclability considerations' }
      ],
      centerImage: '/product_lays_chips.webp',
      concludingNarrative: [
        'At AB Polypacks, we start with these requirements and engineer the label structure and conversion process around them. Each element has a defined role — from the substrate and print surface to ink system, adhesive compatibility, dimensions and application characteristics — with the final construction selected around the container, filling and labelling process, operating environment and intended shelf presentation. Our wrap-around label capability is designed to support applications where high-quality graphics, efficient coverage and reliable high-speed application need to work together. The result is not simply a printed strip wrapped around a container; it is a purpose-built labelling format where substrate, graphics, adhesion and application performance come together to deliver a consistent finished pack. The right label does more than identify the product. It carries the brand from the production line to the shelf.'
      ]
    },
    'collation-shrink-films': {
      badge: 'COLLATION SHRINK FILMS',
      title: 'FROM PRODUCT GROUPING TO PACK STABILITY',
      intro: 'The right collation shrink wrap starts with the product group — not with a pre-selected film or shrink specification. At AB Polypacks, we consider pack configuration, product dimensions, film characteristics, shrink behaviour, bundling requirements, application speed and distribution conditions, then engineer the wrap around those requirements.',
      prompt: 'The key performance criteria that define the right collation shrink wrap for your products, pack configuration and distribution journey.',
      subPrompt: null,
      leftFeatures: [
        { icon: ShieldCheck, title: 'Load Stability', subtitle: 'Bundle integrity, product movement, shrink retention, pack configuration' },
        { icon: Hourglass, title: 'Shrink Performance', subtitle: 'Shrink ratio, uniformity, directional behaviour, temperature response' },
        { icon: Hexagon, title: 'Mechanical Strength', subtitle: 'Tensile strength, puncture resistance, tear propagation, impact performance' },
        { icon: Layers, title: 'Film Integrity', subtitle: 'Thickness consistency, gauge control, toughness, resistance to handling damage' },
        { icon: Gauge, title: 'Packaging Efficiency', subtitle: 'Material utilisation, pack density, film consumption, optimisation potential' }
      ],
      rightFeatures: [
        { icon: Zap, title: 'High-Speed Application', subtitle: 'Machineability, web stability, feeding behaviour, sealing / cutting consistency' },
        { icon: CheckCircle2, title: 'Product Protection', subtitle: 'Resistance to dust, moisture, abrasion and handling-related damage' },
        { icon: Package, title: 'Distribution Performance', subtitle: 'Compression, stacking, vibration, drop and transport resistance' },
        { icon: Sparkles, title: 'Visual Presentation', subtitle: 'Clarity, printability where applicable, shrink uniformity, finished-pack appearance' },
        { icon: Recycle, title: 'Sustainability', subtitle: 'Material efficiency, downgauging potential, waste reduction, responsible material selection' }
      ],
      centerImage: '/product_lays_chips.webp',
      concludingNarrative: [
        'At AB Polypacks, we start with these requirements and engineer the film specification and shrink behaviour around the product configuration and application process. Each element has a defined role — from film gauge and mechanical properties to shrink characteristics, pack configuration and application conditions — with the final construction selected around the number and geometry of products being collated, packaging equipment, distribution environment and required finished-pack integrity. Our collation shrink capability is designed for applications where multiple individual products need to be grouped, secured and protected as one stable transport or retail unit, with the film providing controlled shrink, mechanical strength and reliable retention throughout handling and distribution. The result is not simply a film wrapped around multiple products; it is a purpose-built bundling structure where film performance, shrink behaviour, pack configuration and application efficiency work together towards the same outcome. The right collation wrap does more than hold products together. It keeps the entire pack stable through the journey.'
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

  const heroData = productsData['laminates'];
  const currentData = productsData[activeTab] || productsData['laminates'];
  const currentRequirement = requirementsData[activeTab] || requirementsData['laminates'];

  return (
    <div className="w-full min-h-screen bg-[#faf7f2] font-sans">
      
      {/* 1. FULL-BLEED HERO SECTION */}
      <section className="w-full h-screen min-h-[600px] relative overflow-hidden bg-black font-sans">
        
        {/* FULL-BLEED BACKGROUND MEDIA LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroData.heroImage} 
            alt={heroData.heroTitle} 
            className="w-full h-full object-cover object-center scale-105 transition-all duration-700"
          />
          {/* Dark overlay (35%) + Bottom black gradient fade for high readability */}
          <div className="absolute inset-0 bg-black/35 pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-56 sm:h-72 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none z-10" />
        </div>

        {/* LEFT SIDE: VERTICAL SOCIAL / CONTACT ICONS */}
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

        {/* CENTER BOTTOM CONTENT AND BADGE */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end pb-8 sm:pb-12 pointer-events-none">
          <div className="max-w-5xl w-full px-4 space-y-2 text-center pointer-events-auto flex flex-col items-center justify-center">
            
            {/* Headline */}
            <h1 className="text-lg sm:text-2xl lg:text-[28px] xl:text-[30px] font-bold text-white tracking-tight uppercase drop-shadow-md text-center leading-tight">
              {heroData.heroTitle}
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-[18px] text-stone-200 font-light leading-relaxed max-w-2xl drop-shadow-sm text-center">
              {heroData.heroSubtitle}
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

      {/* PRODUCT CATEGORY NAV TABS */}
      <div className="sticky top-[72px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 py-3.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {navProducts.map((prod) => (
            <button
              key={prod.id}
              onClick={() => handleTabChange(prod.id)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 ${
                activeTab === prod.id
                  ? 'bg-[#ed4d0d] text-white shadow-md scale-105'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {prod.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. FROM PRODUCT REQUIREMENT TO [PRODUCT] SECTION */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-stone-200 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 text-center">
          
          {/* Eyebrow & Title */}
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <span className="inline-block px-6 py-2 rounded-xl bg-[#ed4d0d] text-white text-base sm:text-lg lg:text-xl font-medium uppercase tracking-[0.15em] shadow-sm">
              {currentRequirement.badge}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-stone-900 uppercase tracking-tight leading-tight">
              {currentRequirement.title}
            </h2>
          </div>

          {/* Description Copy */}
          <div className="text-stone-700 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-5xl mx-auto text-justify">
            <p>{currentRequirement.intro}</p>
          </div>

          {/* Sub-heading / Prompt (Pill Bar) */}
          <div className="pt-2 flex flex-col items-center justify-center space-y-2">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-stone-100/90 border border-stone-200/80 text-stone-800 text-xs sm:text-sm md:text-base font-medium tracking-tight text-center">
              <span>{currentRequirement.prompt}</span>
            </div>
            {currentRequirement.subPrompt && (
              <p className="text-xs sm:text-sm text-stone-500 font-medium tracking-wide">
                {currentRequirement.subPrompt}
              </p>
            )}
          </div>

          {/* 4/6 - Image - 4/5 Grid Section */}
          <div 
            ref={gridRef}
            className="pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center max-w-7xl mx-auto overflow-hidden"
          >
            
            {/* Left Features (Col-span-4) - Slides in from Left */}
            <div className={`lg:col-span-4 ${currentRequirement.leftFeatures.length > 4 ? 'space-y-5 sm:space-y-6' : 'space-y-8 sm:space-y-10'}`}>
              {currentRequirement.leftFeatures.map((item, idx) => {
                const IconComponent = item.icon || ShieldCheck;
                return (
                  <div 
                    key={idx}
                    style={{ 
                      transitionDelay: `${idx * 150}ms`,
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
                      className="w-14 h-14 sm:w-18 sm:h-18 text-[#018ade] shrink-0" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>

                    {/* Content */}
                    <div className="flex-1 text-left lg:text-right">
                      <h4 className="text-base sm:text-lg font-semibold text-stone-900 leading-snug flex items-center justify-start lg:justify-end gap-2">
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 font-normal mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
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
                  src={currentRequirement.centerImage}
                  alt="AB Polypacks High Barrier Packaging Pouch"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Features (Col-span-4) - Slides in from Right */}
            <div className={`lg:col-span-4 ${currentRequirement.rightFeatures.length > 4 ? 'space-y-5 sm:space-y-6' : 'space-y-8 sm:space-y-10'}`}>
              {currentRequirement.rightFeatures.map((item, idx) => {
                const IconComponent = item.icon || Sparkles;
                return (
                  <div 
                    key={idx}
                    style={{ 
                      transitionDelay: `${idx * 150}ms`,
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
                      className="w-14 h-14 sm:w-18 sm:h-18 text-[#018ade] shrink-0" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M16 5v14l-11-7z" />
                    </svg>

                    {/* Content */}
                    <div className="flex-1 text-left">
                      <h4 className="text-base sm:text-lg font-semibold text-stone-900 leading-snug flex items-center gap-2">
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 font-normal mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Concluding Narrative Section */}
          <div className="pt-10 sm:pt-14 max-w-5xl mx-auto text-stone-700 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal text-justify space-y-4">
            {currentRequirement.concludingNarrative.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

