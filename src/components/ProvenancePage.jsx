import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  FileCheck, 
  Scan, 
  Leaf, 
  Package, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Award,
  Layers
} from 'lucide-react';

export default function ProvenancePage({ onOpenQuoteModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 7 Core Pillars of AB POLYPACK Provenance & Quality Cycle:
  const pillars = [
    {
      id: 'safety-compliance',
      stepNum: 1,
      stepBadge: '01',
      title: 'SAFETY & COMPLIANCE',
      subtitle: 'Food & Hygiene Safe',
      description: 'US FDA & EU food-contact compliant raw materials. Certified for direct contact with food, beverages, and sensitive pharmaceutical products.',
      icon: FileCheck,
      color: '#ed4d0d', // Brand Primary Orange
      badgeBg: '#018ade', // Brand Blue Step Badge
      xDeg: 270 // 12 o'clock (Top)
    },
    {
      id: 'quality',
      stepNum: 2,
      stepBadge: '02',
      title: 'QUALITY',
      subtitle: 'Zero-Defect Standard',
      description: 'Multi-stage inline inspection, pinhole detection, and strict COA verification on every polymer lot entering our 1.5 Lakh Sq. Ft. manufacturing hub.',
      icon: ShieldCheck,
      color: '#ed4d0d',
      badgeBg: '#018ade',
      xDeg: 321.4 // ~1:30 o'clock
    },
    {
      id: 'sourcing',
      stepNum: 3,
      stepBadge: '03',
      title: 'SOURCING',
      subtitle: 'Responsible Sourcing',
      description: 'Global polymer partnerships with prime resin producers ensuring virgin-grade consistency, zero contamination, and full material batch origin.',
      icon: Globe,
      color: '#ed4d0d',
      badgeBg: '#018ade',
      xDeg: 12.8 // ~3:30 o'clock (Right)
    },
    {
      id: 'traceability',
      stepNum: 4,
      stepBadge: '04',
      title: 'TRACEABILITY',
      subtitle: 'End-to-End Batch QR',
      description: 'Granular batch tracking from raw resin lot to finished laminate roll. Complete digital chain of custody across every production phase.',
      icon: Scan,
      color: '#ed4d0d',
      badgeBg: '#018ade',
      xDeg: 64.2 // ~5 o'clock
    },
    {
      id: 'performance',
      stepNum: 5,
      stepBadge: '05',
      title: 'PERFORMANCE',
      subtitle: 'High Barrier Film',
      description: 'Engineered oxygen, moisture, and aroma barriers tailored for extended shelf life, seal integrity, and high-speed FFS machine runnability.',
      icon: Zap,
      color: '#ed4d0d',
      badgeBg: '#018ade',
      xDeg: 115.7 // ~7 o'clock
    },
    {
      id: 'application',
      stepNum: 6,
      stepBadge: '06',
      title: 'APPLICATION',
      subtitle: 'Tailored Packaging',
      description: 'Custom film structures optimized for snacks, liquids, personal care, agriculture, and industrial packaging requirements.',
      icon: Package,
      color: '#ed4d0d',
      badgeBg: '#018ade',
      xDeg: 167.1 // ~9 o'clock
    },
    {
      id: 'sustainability',
      stepNum: 7,
      stepBadge: '07',
      title: 'SUSTAINABILITY',
      subtitle: 'Recyclable Mono-Films',
      description: 'Pioneering circular economy solutions with 100% recyclable PE/PE and PP/PP mono-material laminates reducing carbon footprint.',
      icon: Leaf,
      color: '#ed4d0d',
      badgeBg: '#018ade',
      xDeg: 218.5 // ~10:30 o'clock
    }
  ];

  const totalSteps = pillars.length;

  // Auto-cycle through pillars every 3.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSteps]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  const current = pillars[activeStep];

  return (
    <div className="w-full min-h-screen bg-[#faf7f2] font-sans pb-16">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. FULL-BLEED HERO SECTION (MATCHES PRODUCT PAGE STYLE)      */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full h-screen min-h-[600px] relative overflow-hidden bg-black font-sans">
        
        {/* FULL-BLEED BACKGROUND MEDIA LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="AB POLYPACK Provenance & Material Manufacturing" 
            className="w-full h-full object-cover object-center scale-105 transition-all duration-700 brightness-90"
          />
          {/* Dark overlay (40%) + Bottom black gradient fade for high readability */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none z-10" />
        </div>

        {/* LEFT SIDE: VERTICAL CONTACT / SOCIAL SHORTCUTS */}
        <div className="absolute left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center space-y-4">
          <a
            href="tel:+913326778400"
            title="Call Sales Office"
            className="p-2 text-white/80 hover:text-[#ed4d0d] hover:scale-110 transition-all duration-200 bg-black/30 backdrop-blur-md rounded-full border border-white/10"
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:info@abpolypack.com"
            title="Email Compliance Team"
            className="p-2 text-white/80 hover:text-[#ed4d0d] hover:scale-110 transition-all duration-200 bg-black/30 backdrop-blur-md rounded-full border border-white/10"
          >
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* CENTER BOTTOM CONTENT */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end pb-8 sm:pb-12 pointer-events-none">
          <div className="max-w-5xl w-full px-4 space-y-2 text-center pointer-events-auto flex flex-col items-center justify-center">

            {/* Headline - Single Line, No Full Stop */}
            <h1 className="text-lg sm:text-2xl lg:text-[28px] xl:text-[30px] font-bold text-white tracking-tight uppercase drop-shadow-md text-center leading-tight">
              MATERIAL INTELLIGENCE PERFORMANCE BY DESIGN
            </h1>

            {/* Tagline */}
            <p className="text-sm sm:text-base lg:text-[17px] text-stone-200 font-light tracking-widest uppercase drop-shadow-sm text-center">
              TRUST YOU CAN TRACE
            </p>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. OPPENHEIM TRADITIONAL TITLE SECTION                       */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full bg-[#faf7f2] text-stone-900 pt-12 sm:pt-16 pb-8 px-4 sm:px-8 lg:px-12 font-sans">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Eyebrow Subtitle with Oppenheim Continuous Line & Orange Accent */}
          <div className="flex items-end mb-2">
            <div className="relative inline-flex items-end">
              <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none">
                PROVENANC<span className="tracking-normal [letter-spacing:0]">E</span>
              </span>
            </div>
          </div>

          {/* Headline (Single Line with Light + Heavy Orange Accent) */}
          <div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-light tracking-tight uppercase leading-tight max-w-5xl">
              <span className="font-extralight text-stone-900">EVERY FINISHED PACK </span>
              <span className="font-black text-[#ed4d0d]">HAS A BEGINNING</span>
            </h2>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. SOLID PRIMARY ORANGE NARRATIVE BANNER (NO LINE BREAKS)    */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#ed4d0d] text-white py-10 sm:py-14 px-4 sm:px-8 lg:px-12 font-sans shadow-inner">
        <div className="max-w-7xl mx-auto text-white text-sm sm:text-base lg:text-[16.5px] leading-relaxed font-normal">
          <p>
            At AB Polypacks, material selection is the first quality decision we make. Every raw material entering our manufacturing ecosystem is considered against its intended application, functional requirements, process compatibility and finished-pack performance. From polymer granules and film substrates to printing inks, adhesives and specialised materials, our approach is designed to ensure consistency from the first input to the final pack. Our integrated manufacturing process takes the material journey from granule to film, printing, lamination, slitting and conversion — with quality controls embedded throughout.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3D ISOMETRIC INFOGRAPHIC SECTION                             */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Section Sub-Title Header */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <span className="px-4 sm:px-6 py-2 rounded-full bg-[#ed4d0d]/10 text-[#ed4d0d] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] border border-[#ed4d0d]/25 shadow-sm text-center">
              THIS SETS UP YOUR SEVEN-PILLAR JOURNEY VERY NATURALLY
            </span>
          </div>

          {/* DESKTOP 3D ISOMETRIC ELLIPTICAL WHEEL (lg screens and above) */}
          <div className="hidden lg:flex relative w-full h-[680px] items-center justify-center select-none overflow-visible">
            
            {/* 3D ISOMETRIC TRACK LINE (Light Grey) */}
            <div 
              className="absolute rounded-[50%] border-2 border-stone-200/80 pointer-events-none"
              style={{
                width: '700px',
                height: '420px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />

            {/* ----------------------------------------------------------- */}
            {/* CLEAN & SIMPLE CENTER LOGO BADGE                            */}
            {/* ----------------------------------------------------------- */}
            <div 
              className="absolute z-20 pointer-events-none flex items-center justify-center"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="w-44 h-20 sm:w-48 sm:h-22 rounded-[50%] bg-white border border-stone-200 shadow-md flex items-center justify-center px-6 py-2 select-none">
                <img 
                  src="/logo.webp" 
                  alt="AB POLYPACK Logo" 
                  className="h-10 sm:h-12 max-w-[140px] object-contain"
                />
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* 7 ISOMETRIC 3D PEDESTAL NODES ON ELLIPTICAL RING            */}
            {/* ----------------------------------------------------------- */}
            <div className="absolute inset-0 pointer-events-auto">
              {pillars.map((item, index) => {
                const rad = (item.xDeg * Math.PI) / 180;
                const rx = 350; // Horizontal semi-axis
                const ry = 210; // Vertical semi-axis (Balanced Moderate Height)

                const posX = rx * Math.cos(rad);
                const posY = ry * Math.sin(rad);

                const isActive = activeStep === index;
                const IconComponent = item.icon;

                // All 7 Floating Pillar Titles Centered Directly Below Each Podium Node
                const calloutStyle = { top: '62px', left: '0px', transform: 'translateX(-50%)' };

                return (
                  <div 
                    key={item.id}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${posX}px), calc(-50% + ${posY}px))`,
                      zIndex: isActive ? 30 : 20
                    }}
                  >
                    {/* -------------------------------------------------------- */}
                    {/* 3D PEDESTAL STACK NODE (Centered on Ellipse Track)       */}
                    {/* -------------------------------------------------------- */}
                    <div 
                      onClick={() => handleStepClick(index)}
                      className={`relative group cursor-pointer transition-all duration-300 ease-out flex flex-col items-center justify-center ${
                        isActive ? '-translate-y-3 scale-110' : 'hover:-translate-y-1.5 hover:scale-105 opacity-90 hover:opacity-100'
                      }`}
                    >
                      {/* Unified 3D Stack Container (Centered with -ml-16 -mt-11) */}
                      <div className="relative w-32 h-22 -ml-16 -mt-11 select-none overflow-visible">
                        
                        {/* LAYER 1: BOTTOM COLORED BASE RIM (Solid Brand Orange Ellipse) */}
                        <div 
                          className="absolute bottom-0 left-0 w-32 h-10 rounded-[50%] transition-all duration-300 shadow-sm"
                          style={{
                            backgroundColor: item.color
                          }}
                        />

                        {/* LAYER 2: WHITE CYLINDER BODY WALL (Curved 3D body with tall 3D depth) */}
                        <div 
                          className="absolute bottom-2 left-0 w-32 h-15 rounded-b-[50%] bg-gradient-to-b from-white via-stone-100 to-stone-200 border-x border-b border-stone-300/80"
                        />

                        {/* LAYER 3: TOP PEDESTAL DISC (3D Surface) */}
                        <div 
                          className="absolute top-0 left-0 z-20 w-32 h-11 rounded-[50%] bg-white border-2 border-stone-200/90 flex items-center justify-center transition-all duration-300 overflow-visible"
                        >
                          {/* Inner Glowing Ellipse Ring - SOLID BRAND BLUE RIM LINE */}
                          <div 
                            className="w-22 h-7.5 rounded-[50%] flex items-center justify-center transition-all duration-300 relative overflow-visible"
                            style={{
                              backgroundColor: isActive ? 'rgba(1, 138, 222, 0.22)' : 'rgba(1, 138, 222, 0.10)',
                              border: '2px solid #018ade'
                            }}
                          >
                            {/* LARGE POP-OUT ICON - ALWAYS CRISP BLACK */}
                            <div className={`relative z-30 transition-all duration-300 transform ${
                              isActive 
                                ? '-translate-y-4 scale-115' 
                                : '-translate-y-2.5 group-hover:-translate-y-4 group-hover:scale-110'
                            }`}>
                              <IconComponent 
                                className="w-9 h-9 sm:w-10 sm:h-10 stroke-[1.5] text-[#0f172a]"
                                style={{ 
                                  color: '#0f172a'
                                }}
                              />
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* -------------------------------------------------------- */}
                    {/* CLEAN FLOATING PILLAR TEXT (TITLES ONLY, NO NUMBERS)    */}
                    {/* -------------------------------------------------------- */}
                    <div 
                      onClick={() => handleStepClick(index)}
                      className={`absolute cursor-pointer select-none transition-all duration-300 flex items-center whitespace-nowrap ${
                        isActive ? 'scale-110 z-40' : 'opacity-85 hover:opacity-100 hover:scale-105 z-20'
                      }`}
                      style={calloutStyle}
                    >
                      <span className={`font-semibold text-xs sm:text-sm lg:text-base uppercase tracking-wider transition-colors duration-200 ${
                        isActive ? 'text-[#018ade]' : 'text-stone-900 hover:text-[#018ade]'
                      }`}>
                        {item.title}
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* ------------------------------------------------------------- */}
          {/* MOBILE & TABLET INTERACTIVE 3D CAROUSEL LAYOUT (< lg screen) */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:hidden space-y-6">
            
            {/* Active Step Feature Box */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 relative overflow-hidden transition-all duration-300 shadow-sm">
              <div 
                className="absolute top-0 left-0 right-0 h-2 bg-[#018ade]"
              />

              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-18 shrink-0 select-none overflow-visible">
                  <div 
                    className="absolute bottom-0 left-0 w-24 h-7 rounded-[50%]"
                    style={{ backgroundColor: current.color }}
                  />
                  <div 
                    className="absolute bottom-1.5 left-0 w-24 h-12 rounded-b-[50%] bg-gradient-to-b from-white to-stone-200 border-x border-b border-stone-300"
                  />
                  <div 
                    className="absolute top-0 left-0 z-20 w-24 h-9 rounded-[50%] bg-white border border-stone-200 flex items-center justify-center overflow-visible"
                  >
                    <div 
                      className="w-16 h-6 rounded-[50%] flex items-center justify-center relative overflow-visible"
                      style={{
                        backgroundColor: 'rgba(1, 138, 222, 0.15)',
                        border: '1.5px solid #018ade'
                      }}
                    >
                      <div className="-translate-y-2.5 transform">
                        {React.createElement(current.icon, {
                          className: "w-7 h-7 stroke-[1.5] text-[#0f172a]",
                          style: {
                            color: '#0f172a'
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <span 
                      className="px-2.5 py-0.5 rounded-full text-xs font-black text-white bg-[#018ade]"
                    >
                      PROVENANCE PILLAR
                    </span>
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wide">
                      {current.subtitle}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-stone-900 uppercase tracking-tight mt-1">
                    {current.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Grid of Pillar Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {pillars.map((item, idx) => {
                const isTabActive = activeStep === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleStepClick(idx)}
                    className={`py-2.5 px-2 rounded-xl text-center transition-all flex items-center justify-center space-x-2 ${
                      isTabActive 
                        ? 'bg-[#018ade] text-white font-bold scale-102' 
                        : 'bg-white text-stone-600 border border-stone-200 font-medium'
                    }`}
                  >
                    <span className="text-[11px] font-black tracking-tight uppercase truncate">{item.title}</span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
