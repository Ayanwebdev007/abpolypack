import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenQuoteModal }) {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = Math.min(1, Math.max(0, scrollY / 100));
  const isScrolled = scrollProgress > 0.4;

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
      description: 'High-barrier laminates, custom pouches, shrink sleeves, wrap-around labels, and collation shrink films engineered for global brands.',
      ctaText: 'Explore Products',
      featuredImage: '/logo.png',
      items: [
        'Laminates',
        'Pouches',
        'Shrink Sleeves',
        'Wrap-around Labels',
        'Collation Shrink Films'
      ]
    },
    { 
      id: 'provenance', 
      label: 'Provenance', 
      hasDropdown: false 
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
    { id: 'career', label: 'Career', hasDropdown: false },
    { id: 'get-in-touch', label: 'Get in Touch', hasDropdown: false, isCta: true }
  ];

  const handleNavClick = (sectionId, subItem = null) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (sectionId === 'get-in-touch' || subItem === 'Get in Touch' || sectionId === 'career') {
      if (onOpenQuoteModal) onOpenQuoteModal();
      return;
    }

    let targetSection = 'hero';
    if (sectionId === 'our-story' || sectionId === 'provenance' || subItem === 'Company Overview' || subItem === 'Vision & Mission' || subItem === 'Core Values' || subItem === 'Leadership' || subItem === 'Our Journey') {
      targetSection = 'overview';
    } else if (sectionId === 'products' || subItem) {
      targetSection = 'products';
      if (subItem && window.setProductFilter) {
        window.setProductFilter(subItem);
      }
    } else if (sectionId === 'operational-excellence' || sectionId === 'enriching-lives') {
      targetSection = 'overview';
    } else if (sectionId === 'media') {
      targetSection = 'products';
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* 1. White Solid + Glass Layer that gradually fades in on scroll */}
      <div 
        className="absolute inset-0 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-md transition-opacity duration-150 pointer-events-none"
        style={{ opacity: scrollProgress }}
      />
      {/* 2. Top Dark Gradient Layer that gradually fades out on scroll */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none transition-opacity duration-150"
        style={{ opacity: 1 - scrollProgress }}
      />

      <nav 
        className={`relative z-10 transition-all duration-300 px-4 sm:px-6 lg:px-8 xl:px-12 ${
          isScrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-3.5 lg:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LEFT SIDE: LOGO ONLY */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="cursor-pointer group flex items-center shrink-0 mr-4 xl:mr-8"
          >
            <img 
              src="/logo.png" 
              alt="AB POLYPACKS" 
              className={`h-8 sm:h-10 xl:h-11 w-auto object-contain transition-all duration-300 ${
                isScrolled ? '' : 'drop-shadow-md brightness-105'
              }`} 
            />
          </div>

          {/* CENTER: Inline Nav Links (Outfit Font, Normal & Medium Weight) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2.5 2xl:space-x-4 whitespace-nowrap">
            {navLinks.map((link) => (
              <div 
                key={link.id} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.hasDropdown ? link.id : null)}
              >
                {link.hasDropdown ? (
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`px-2 xl:px-2.5 py-2 text-[13.5px] xl:text-[14.5px] font-medium transition-colors duration-300 flex items-center space-x-1 ${
                      activeDropdown === link.id
                        ? 'text-[#ed4d0d]'
                        : isScrolled
                          ? 'text-stone-700 hover:text-[#ed4d0d]'
                          : 'text-white hover:text-[#ed4d0d] drop-shadow-sm'
                    }`}
                  >
                    <span>{link.label}</span>
                    {activeDropdown === link.id ? (
                      <ChevronUp className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#ed4d0d]" />
                    ) : (
                      <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-colors duration-300 ${
                        isScrolled ? 'text-stone-500' : 'text-white/80'
                      }`} />
                    )}
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`transition-all duration-300 ${
                      link.isCta
                        ? 'bg-[#ed4d0d] hover:bg-[#d4410a] text-white rounded-lg px-4 xl:px-5 py-2 text-[13.5px] xl:text-[14.5px] font-medium shadow-md hover:shadow-lg ml-1 xl:ml-2'
                        : `px-2 xl:px-2.5 py-2 text-[13.5px] xl:text-[14.5px] font-medium ${
                            isScrolled
                              ? 'text-stone-700 hover:text-[#ed4d0d]'
                              : 'text-white hover:text-[#ed4d0d] drop-shadow-sm'
                          }`
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
            className={`lg:hidden p-2.5 rounded-lg border transition-all duration-300 ml-auto ${
              isScrolled
                ? 'bg-stone-100 border-stone-300 text-stone-800 hover:bg-stone-200'
                : 'bg-black/40 backdrop-blur-md border-white/20 text-white hover:bg-black/60'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* PIDILITE EXACT MEGA-DROPDOWN MODAL CARD */}
        {activeDropdown && activeLinkObj && (
          <div 
            className="hidden lg:flex justify-center absolute top-full left-0 right-0 pt-2 px-6 lg:px-12 z-50 animate-fadeIn"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="w-full max-w-5xl bg-white/95 backdrop-blur-xl border border-stone-200 rounded-3xl p-10 lg:p-12 shadow-2xl grid grid-cols-12 gap-8 items-center text-stone-900">
              
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
          <div className={`lg:hidden mt-3 p-4 border rounded-2xl shadow-2xl space-y-2 transition-all ${
            isScrolled
              ? 'bg-white border-stone-200 text-stone-900'
              : 'bg-black/90 backdrop-blur-xl border-white/15 text-white'
          }`}>
            {navLinks.map((link) => (
              <div key={link.id} className="space-y-1">
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider ${
                    link.isCta 
                      ? 'bg-[#ed4d0d] text-white' 
                      : isScrolled 
                        ? 'text-stone-800 hover:bg-stone-50' 
                        : 'text-white hover:bg-white/10 hover:text-[#ed4d0d]'
                  }`}
                >
                  {link.label}
                </button>
                {link.hasDropdown && (
                  <div className={`pl-4 space-y-1 border-l ml-3 my-1 ${
                    isScrolled ? 'border-stone-200' : 'border-white/20'
                  }`}>
                    {link.items.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick(link.id, sub)}
                        className={`w-full text-left px-3 py-1.5 text-xs block font-normal ${
                          isScrolled
                            ? 'text-stone-600 hover:text-[#ed4d0d]'
                            : 'text-white/70 hover:text-[#ed4d0d]'
                        }`}
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
