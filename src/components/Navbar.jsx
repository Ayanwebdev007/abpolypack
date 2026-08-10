import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation data with descriptions and featured imagery matching Pidilite dropdown style
  const navLinks = [
    { 
      id: 'our-story', 
      label: 'Our Story', 
      hasDropdown: true,
      heading: 'About AB Polypacks',
      description: 'Since 2006, AB Polypacks has been an integrated flexible packaging manufacturer bringing technology and technical expertise to leading global brands.',
      ctaText: 'Know Our Story',
      featuredImage: '/logo.png',
      items: [
        'Company Overview',
        'Vision & Mission',
        'Core Values',
        'Leadership',
        'Our Journey'
      ]
    },
    { 
      id: 'products', 
      label: 'Products', 
      hasDropdown: true,
      heading: 'Flexible Packaging Solutions',
      description: 'From blown-film extrusion and high-barrier laminates to 9-color rotogravure printing and custom spouted pouches under one roof in Howrah.',
      ctaText: 'Explore Products',
      featuredImage: '/logo.png',
      items: [
        'Food Packaging',
        'Beverages',
        'Liquid Packaging',
        'Spices',
        'Personal Care & Household',
        'Health Care & Agriculture',
        'Collation Shrink Films'
      ]
    },
    { 
      id: 'operational-excellence', 
      label: 'Operational Excellence', 
      hasDropdown: true,
      heading: 'Precision Manufacturing',
      description: 'State-of-the-art 1.5 Lakh Sq. Ft. Howrah facility with 24,000 MT annual production capacity and BRC, FSSC 22000, ISO certifications.',
      ctaText: 'Learn More',
      featuredImage: '/logo.png',
      items: [
        'Operational Excellence',
        'Quality Assurance',
        'Powered by Precision',
        'Innovation'
      ]
    },
    { 
      id: 'enriching-lives', 
      label: 'Enriching Lives', 
      hasDropdown: true,
      heading: 'Sustainability & Community',
      description: 'Committed to eco-conscious flexible films, material efficiency, energy-conscious processes, and community welfare.',
      ctaText: 'Explore Impact',
      featuredImage: '/logo.png',
      items: [
        'Environmental Impact',
        'Commitments',
        'Community Champions'
      ]
    },
    { id: 'media', label: 'Media', hasDropdown: false },
    { id: 'get-in-touch', label: 'Get in Touch', hasDropdown: false, isCta: true }
  ];

  const handleNavClick = (sectionId, subItem = null) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (sectionId === 'get-in-touch' || subItem === 'Get in Touch') {
      if (onOpenQuoteModal) onOpenQuoteModal();
      return;
    }

    let targetSection = 'hero';
    if (sectionId === 'our-story' || subItem === 'Company Overview' || subItem === 'Vision & Mission' || subItem === 'Core Values' || subItem === 'Leadership' || subItem === 'Our Journey') {
      targetSection = 'overview';
    } else if (sectionId === 'products' || subItem) {
      targetSection = 'products';
      if (subItem && window.setProductFilter) {
        window.setProductFilter(subItem);
      }
    }

    setActiveSection(targetSection);
    const el = document.getElementById(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeLinkObj = navLinks.find(l => l.id === activeDropdown);

  return (
    <header 
      className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 font-sans"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <nav 
        className={`transition-all duration-300 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200 ${
          isScrolled ? 'shadow-md py-2.5' : 'py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LEFT SIDE: LOGO ONLY */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="cursor-pointer group flex items-center shrink-0 mr-8"
          >
            <img 
              src="/logo.png" 
              alt="AB POLYPACKS" 
              className="h-9 sm:h-11 w-auto object-contain" 
            />
          </div>

          {/* CENTER: Inline Nav Links (Outfit Font, Normal & Medium Weight) */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-5 whitespace-nowrap">
            {navLinks.map((link) => (
              <div 
                key={link.id} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.hasDropdown ? link.id : null)}
              >
                {link.hasDropdown ? (
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-2 text-[15px] lg:text-base font-medium transition-colors flex items-center space-x-1.5 ${
                      activeDropdown === link.id
                        ? 'text-[#ed4d0d]'
                        : 'text-stone-700 hover:text-[#ed4d0d]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {activeDropdown === link.id ? (
                      <ChevronUp className="w-4 h-4 text-[#ed4d0d]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-500" />
                    )}
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-2 text-[15px] lg:text-base font-medium transition-all ${
                      link.isCta
                        ? 'bg-[#ed4d0d] hover:bg-[#d4410a] text-white rounded-lg px-6 py-2.5 font-medium shadow-sm ml-3'
                        : 'text-stone-700 hover:text-[#ed4d0d]'
                    }`}
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-stone-100 border border-stone-300 text-stone-800 ml-auto"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* PIDILITE EXACT MEGA-DROPDOWN MODAL CARD */}
        {activeDropdown && activeLinkObj && (
          <div 
            className="hidden md:flex justify-center absolute top-full left-0 right-0 pt-4 px-6 lg:px-12 z-50 animate-fadeIn"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="w-full max-w-5xl bg-white border border-stone-200 rounded-3xl p-10 lg:p-12 shadow-2xl grid grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading, Description & Button (col-span-4) */}
              <div className="col-span-4 space-y-4 pr-6 pl-4 border-r border-stone-100">
                <h3 className="text-xl lg:text-2xl font-medium text-stone-900 leading-tight">
                  {activeLinkObj.heading}
                </h3>
                <p className="text-[15px] font-normal text-stone-600 leading-relaxed">
                  {activeLinkObj.description}
                </p>
                <button
                  onClick={() => handleNavClick(activeLinkObj.id)}
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#ed4d0d] hover:bg-[#d4410a] text-white text-[15px] font-medium transition-all duration-200 shadow-sm whitespace-nowrap shrink-0"
                >
                  <span>{activeLinkObj.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                </button>
              </div>

              {/* Middle Column: Sub-menu items (col-span-4 - uniform text-[15px] size) */}
              <div className="col-span-4 px-4 space-y-0 font-normal">
                {activeLinkObj.items.map((subItem, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(activeLinkObj.id, subItem)}
                    className="w-full text-left py-2.5 text-stone-700 hover:text-[#ed4d0d] border-b border-stone-100 last:border-0 text-[15px] font-normal hover:font-medium transition-colors block truncate"
                  >
                    {subItem}
                  </button>
                ))}
              </div>

              {/* Right Column: Featured Image Card (col-span-4) */}
              <div className="col-span-4 pl-4">
                <div className="w-full h-48 lg:h-52 rounded-2xl bg-gradient-to-br from-[#faf7f2] to-[#f5f0eb] border border-stone-200 p-4 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden group">
                  <div className="w-20 h-20 rounded-xl bg-white border border-stone-200 p-2.5 shadow-md flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                    <img 
                      src="/logo.png" 
                      alt="AB POLYPACKS" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div className="text-[15px] font-medium text-stone-900">
                    AB POLYPACKS
                  </div>
                  <div className="text-[15px] text-stone-500 font-normal mt-0.5">
                    Howrah Plant Facility
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white border border-stone-200 rounded-2xl shadow-xl space-y-2">
            {navLinks.map((link) => (
              <div key={link.id} className="space-y-1">
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider ${
                    link.isCta ? 'bg-[#ed4d0d] text-white' : 'text-stone-800 hover:bg-[#faf7f2]'
                  }`}
                >
                  {link.label}
                </button>
                {link.hasDropdown && (
                  <div className="pl-4 space-y-1 border-l border-stone-200 ml-3 my-1">
                    {link.items.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick(link.id, sub)}
                        className="w-full text-left px-3 py-1.5 text-xs text-stone-600 hover:text-[#ed4d0d] block font-normal"
                      >
                        • {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
