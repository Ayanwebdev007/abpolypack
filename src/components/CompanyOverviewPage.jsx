import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Instagram, 
  Youtube, 
  Facebook, 
  Linkedin, 
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Award,
  TrendingUp,
  Factory,
  ShieldCheck,
  Plus
} from 'lucide-react';

export default function CompanyOverviewPage({ onOpenQuoteModal }) {
  const [activeValue, setActiveValue] = useState(0);
  // Initial angle 126deg puts the first active petal (DELIVER) at 90deg (pointing right towards detail card)
  const [rotationAngle, setRotationAngle] = useState(126);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalValues = 5;
  const anglePerStep = 360 / totalValues; // 72 degrees

  // Circular cycling: physically rotates the flower wheel clockwise, keeping active petal at the right
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveValue((prev) => {
        const next = (prev + 1) % totalValues;
        setRotationAngle((angle) => angle - anglePerStep);
        return next;
      });
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPlaying, totalValues, anglePerStep]);

  // Handle clicking a specific wedge with shortest angular path so it rotates to the right
  const goToValue = (targetIndex) => {
    let diff = targetIndex - activeValue;
    while (diff > totalValues / 2) diff -= totalValues;
    while (diff < -totalValues / 2) diff += totalValues;
    
    setRotationAngle((prevAngle) => prevAngle - diff * anglePerStep);
    setActiveValue(targetIndex);
  };

  const socialIcons = [
    { icon: Globe, label: 'Website', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Contact Email', href: 'mailto:info@abpolypacks.com' }
  ];

  const coreValues = [
    {
      id: 'deliver',
      title: 'DELIVER',
      tagline: 'Turn capability into results.',
      description: 'We focus on operational excellence, productivity and dependable outcomes that create sustainable value.',
      angle: -36, // Top-Left
      textX: 172,
      textY: 142,
      number: '01'
    },
    {
      id: 'invest',
      title: 'INVEST',
      tagline: 'Build capability that lasts.',
      description: 'We continuously strengthen our infrastructure, technology and processes to remain competitive and future-ready.',
      angle: 36, // Top-Right
      textX: 328,
      textY: 142,
      number: '02'
    },
    {
      id: 'partner',
      title: 'PARTNER',
      tagline: 'Win when our customers win.',
      description: 'We build relationships through responsiveness, transparency and a genuine understanding of our customers\' businesses.',
      angle: 108, // Bottom-Right
      textX: 376,
      textY: 291,
      number: '03'
    },
    {
      id: 'sustain',
      title: 'SUSTAIN',
      tagline: 'Grow without compromising tomorrow.',
      description: 'We make responsible choices around resources, materials, energy and waste while maintaining the performance our customers expect.',
      angle: 180, // Bottom-Center
      textX: 250,
      textY: 383,
      number: '04'
    },
    {
      id: 'empower',
      title: 'EMPOWER',
      tagline: 'Put people at the centre of progress.',
      description: 'We encourage ownership, expertise, curiosity and collaboration across every level of the organisation.',
      angle: 252, // Bottom-Left
      textX: 124,
      textY: 291,
      number: '05'
    }
  ];

  const philosophyItems = [
    {
      id: 'protect',
      question: 'WHAT IF IT COULD PROTECT MORE?',
      description: 'Keep products safer. Preserve their integrity. Extend their journey.'
    },
    {
      id: 'perform',
      question: 'WHAT IF IT COULD PERFORM MORE?',
      description: 'Withstand handling. Travel further. Deliver consistency where it matters.'
    },
    {
      id: 'say',
      question: 'WHAT IF IT COULD SAY MORE?',
      description: 'Carry a brand\'s identity before a single word is spoken.'
    },
    {
      id: 'waste',
      question: 'WHAT IF IT COULD WASTE LESS?',
      description: 'Use materials intelligently. Reduce avoidable loss. Improve efficiency.'
    },
    {
      id: 'think',
      question: 'WHAT IF IT COULD THINK AHEAD?',
      description: 'Anticipate changing markets, evolving technology and a more responsible future.'
    }
  ];

  const timelineScrollRef = useRef(null);
  const [isTimelineAutoPlaying, setIsTimelineAutoPlaying] = useState(true);

  // Auto-slide effect to the end, then loops back smoothly
  useEffect(() => {
    if (!isTimelineAutoPlaying) return;

    const timer = setInterval(() => {
      if (timelineScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = timelineScrollRef.current;
        const cardStep = 360;

        // If reached or near the end, loop smoothly back to start
        if (scrollLeft + clientWidth >= scrollWidth - 25) {
          timelineScrollRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          timelineScrollRef.current.scrollBy({
            left: cardStep,
            behavior: 'smooth'
          });
        }
      }
    }, 3200);

    return () => clearInterval(timer);
  }, [isTimelineAutoPlaying]);

  const scrollTimeline = (direction) => {
    if (timelineScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = timelineScrollRef.current;
      const cardStep = 360;

      if (direction === 'next') {
        if (scrollLeft + clientWidth >= scrollWidth - 25) {
          timelineScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          timelineScrollRef.current.scrollBy({ left: cardStep, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 25) {
          timelineScrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          timelineScrollRef.current.scrollBy({ left: -cardStep, behavior: 'smooth' });
        }
      }
    }
  };

  const milestones = [
    {
      id: '2006',
      year: '2006',
      title: 'The Journey Begins',
      description: 'Established in Howrah with specialized blown-film extrusion lines engineered for high-barrier packaging.',
      image: '/overview_hero.jpg'
    },
    {
      id: '2011',
      year: '2011',
      title: 'Rotogravure & Lamination Scale',
      description: 'Integrated high-speed multi-colour rotogravure printing presses and precision solventless lamination machinery.',
      image: '/gallery/gallery_2.jpg'
    },
    {
      id: '2016',
      year: '2016',
      title: '1.5 Lakh Sq. Ft. Facility',
      description: 'Consolidated full conversion operations under one flagship 1.5 Lakh Sq. Ft. integrated campus in Howrah.',
      image: '/corporate_facility_bg.png'
    },
    {
      id: '2019',
      year: '2019',
      title: 'Global Certifications',
      description: 'Achieved international food safety benchmarks including BRCGS Packaging, FSSC 22000, and ISO 9001:2015.',
      image: '/gallery/gallery_3.jpg'
    },
    {
      id: '2022',
      year: '2022',
      title: 'Recyclable Packaging',
      description: 'Developed recyclable mono-material barrier structures (PE/PE and PP/PP) and automated pouch-making lines.',
      image: '/gallery/gallery_4.jpg'
    },
    {
      id: '2024',
      year: '2024 - 2026',
      title: '24,000 MT & Global Exports',
      description: 'Scaled annual production to 24,000 MT, exporting flexible packaging across Africa, the Middle East, and Europe.',
      image: '/gallery/gallery_7.jpg'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#faf7f2] font-sans">
      
      {/* 1. FULL-BLEED HERO SECTION */}
      <section className="w-full h-screen min-h-[600px] relative overflow-hidden bg-black font-sans">
        
        {/* FULL-BLEED BACKGROUND MEDIA LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/company_overview_hero.jpg" 
            alt="AB Polypacks Factory Floor" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overall dark tint (15%) + Bottom black gradient fade for readability */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none z-10" />
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

        {/* CENTER BOTTOM CONTENT AND BADGE (HERO STYLE - COMPACTED HEIGHT - CENTERED AT BOTTOM) */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end pb-8 sm:pb-10 pointer-events-none">
          <div className="max-w-5xl w-full px-4 space-y-1.5 text-center pointer-events-auto flex flex-col items-center justify-center">
            
            {/* Slide Indicator Badge */}
            <div className="flex items-center space-x-3 text-xs font-semibold text-white/80 tracking-widest uppercase mb-0.5">
              <span>OUR STORY</span>
              <span className="w-8 h-[1.5px] bg-white/40"></span>
              <span className="text-[#ed4d0d] font-bold text-sm">OVERVIEW</span>
            </div>

            {/* Headline */}
            <h1 className="text-xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight uppercase drop-shadow-md text-center leading-tight">
              FROM THE FACTORY FLOOR TO THE FINAL HAND.
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-stone-200 font-light leading-relaxed max-w-2xl drop-shadow-sm text-center">
              One integrated journey. Fewer compromises. Better control.
            </p>

          </div>
        </div>

      </section>

      {/* 2. SECTION BELOW HERO: OPPENHEIM TITLE & SUBTITLE STYLE */}
      <section className="relative w-full bg-white text-stone-900 py-12 sm:py-16 lg:py-20 [overflow-x:clip] font-sans border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* SECTION HEADER (OPPENHEIM STYLE) */}
          <div className="space-y-4">
            
            {/* Eyebrow Subtitle with Oppenheim Continuous Line & Orange Accent */}
            <div className="flex items-end mb-3">
              <div className="relative inline-flex items-end">
                {/* Thin horizontal line coming from far left of the page */}
                <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
                
                {/* Eyebrow: COMPANY OVERVIEW */}
                <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
                  COMPANY
                </span>
                <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1">
                  OVERVIE<span className="tracking-normal [letter-spacing:0]">W</span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3 max-w-4xl">
              {/* Headline with Thin Stone & Heavy Brand Orange Weights */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.1] flex flex-wrap items-center gap-x-3.5 gap-y-1">
                <span className="font-extralight text-stone-900">AB POLYPACKS</span>
                <span className="font-black text-[#ed4d0d]">FROM FILM TO FINISH</span>
              </h2>
            </div>

          </div>

          {/* 2-COLUMN LAYOUT: CONTENT ON LEFT, IMAGE STICKY ON RIGHT */}
          <div className="mt-12 sm:mt-16 w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14 xl:gap-16">
            
            {/* LEFT COLUMN: EDITORIAL STORY CONTENT */}
            <div className="w-full lg:w-[54%] xl:w-[55%] space-y-5 text-stone-700 leading-relaxed text-[15px] sm:text-base lg:text-[16.5px] font-normal text-justify">
              
              {/* Accent Notch Bar */}
              <div className="w-14 h-1 bg-[#ed4d0d] rounded-full mb-6" />

              <p>
                A product can travel thousands of kilometres before it reaches the person it was made for.
                Through every mile, every movement and every moment, one thing stands between the product and the world: <span className="font-semibold text-stone-900">its pack.</span>
              </p>

              <p>
                Since 2006, <span className="font-semibold text-stone-900">AB Polypacks</span> has been engineering that critical interface with precision. Our 1.5 lakh sq. ft. Howrah facility, backed by 24,000 MT annual capacity, brings together extrusion, printing, lamination and conversion capabilities within an integrated production environment.
              </p>

              <p>
                Our technical expertise and stringent quality systems help create formats designed to protect contents, preserve integrity and carry brand identity from the production line to the point of consumption.
              </p>

              <p>
                Serving leading businesses across India and international markets, we combine scale with control, capability with consistency, and experience with an instinct for what comes next.
              </p>

              <div className="py-2.5 my-2 border-y border-stone-200">
                <p className="text-lg sm:text-xl font-bold text-stone-950 tracking-tight">
                  AB Polypacks — <span className="text-[#ed4d0d]">Built for the Journey.</span>
                </p>
              </div>

              <p>
                Our capabilities span advanced blown-film extrusion, high-speed multi-colour rotogravure printing, solvent-based, solventless and extrusion lamination, precision slitting, shrink-sleeve production and automated pouching — bringing control and consistency across the complete conversion cycle.
              </p>

              <p>
                Behind every stage is rigorous testing of raw materials, processes and finished products, reinforced by <span className="font-medium text-stone-900">ISO 9001:2015, BRC and FSSC 22000</span> certifications.
              </p>

              <p>
                From food and beverages to healthcare, agriculture, personal care, household products and spices, structures are developed around the demands of the application — whether that means barrier protection, shelf life, strength, visual impact or transport resilience.
              </p>

              <p>
                Meanwhile, we continue to pursue material efficiency, reduced waste, energy-conscious production and more responsible alternatives.
              </p>

            </div>

            {/* RIGHT COLUMN: STICKY MANUFACTURING FACILITY IMAGE */}
            <div className="w-full lg:w-[46%] xl:w-[45%] shrink-0 lg:sticky lg:top-24 xl:top-28">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[480px] xl:h-[520px] max-h-[calc(100vh-8.5rem)] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-xl bg-stone-100 group">
                <img 
                  src="/overview_hero.jpg" 
                  alt="AB Polypacks Advanced Extrusion Line Facility" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 bg-[#ed4d0d] text-white text-[11px] font-bold uppercase tracking-wider rounded-md mb-2">
                    Manufacturing Facility
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">1.5 Lakh Sq. Ft. Howrah Plant</h3>
                  <p className="text-stone-300 text-xs sm:text-sm mt-1">Advanced Blown-Film Extrusion Line 3</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SECTION: VISION & MISSION (ANGLED DIAGONAL BANNER - FULL BRAND ORANGE BG & WHITE TEXT) */}
      <section 
        id="vision-mission" 
        className="relative w-full min-h-[480px] lg:min-h-[540px] flex items-center overflow-hidden font-sans border-b border-stone-200"
      >
        {/* BACKGROUND: FULL-BLEED SUSTAINABLE INDUSTRIAL LANDSCAPE */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/vision_mission_bg.jpg" 
            alt="AB Polypacks Manufacturing Campus" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* DIAGONAL BRAND OVERLAY (FULLY ORANGE #ed4d0d) */}
        <div 
          className="absolute inset-0 bg-[#ed4d0d] z-10 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_0,48%_0,72%_100%,0_100%)] shadow-2xl" 
        />

        {/* CRISP WHITE ACCENT LINE TRACING THE DIAGONAL CUT */}
        <svg 
          className="hidden lg:block absolute inset-0 w-full h-full z-15 pointer-events-none" 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
        >
          <line 
            x1="48" 
            y1="0" 
            x2="72" 
            y2="100" 
            stroke="white" 
            strokeWidth="0.6" 
            strokeOpacity="0.85" 
          />
        </svg>

        {/* MAIN CONTENT LAYER (ALL TEXTS IN WHITE) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl space-y-8 sm:space-y-10">
            
            {/* 1. VISION BLOCK */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
                VISION
              </h3>
              <p className="text-white text-sm sm:text-base font-bold uppercase tracking-tight leading-snug">
                TO SHAPE A MORE INTELLIGENT, RESPONSIBLE FUTURE FOR FLEXIBLE PACKAGING.
              </p>
              <p className="text-white/90 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed">
                A future where every material, structure and process delivers greater purpose with greater efficiency.
              </p>
            </div>

            {/* 2. MISSION BLOCK */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
                MISSION
              </h3>
              <p className="text-white text-sm sm:text-base font-bold uppercase tracking-tight leading-snug">
                ENGINEER WHAT BRANDS NEED NEXT.
              </p>
              <p className="text-white/90 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed">
                We bring together materials, technology, manufacturing expertise and quality discipline to develop packaging that performs today, adapts to changing markets and creates enduring customer value.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION: CORE VALUES (5-PART FLOWER STYLE - LUPIN INSPIRED) */}
      <section 
        id="core-values" 
        className="relative w-full bg-[#faf7f2] text-stone-900 py-16 sm:py-20 lg:py-24 font-sans border-b border-stone-200 [overflow-x:clip]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* SECTION HEADER (OPPENHEIM STYLE) */}
          <div className="space-y-4 mb-12 sm:mb-16">
            
            {/* Eyebrow Subtitle with Oppenheim Line */}
            <div className="flex items-end mb-3">
              <div className="relative inline-flex items-end">
                <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
                <span className="inline-block text-xs sm:text-sm font-normal uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
                  OUR
                </span>
                <span className="inline-block text-xs sm:text-sm font-normal uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1">
                  VALUE<span className="tracking-normal [letter-spacing:0]">S</span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2 max-w-4xl">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.1] flex flex-wrap items-center gap-x-3.5 gap-y-1">
                <span className="font-extralight text-stone-900">OUR STRATEGIC</span>
                <span className="font-black text-[#ed4d0d]">PROMISE</span>
              </h2>
              <p className="text-stone-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed pt-1">
                Creating value. Growing responsibly. Building for the long term.
              </p>
            </div>

          </div>

          {/* 2-COLUMN SHOWCASE: 5-PART FLOWER GRAPHIC + ACTIVE VALUE DETAIL */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: 5-PART FLOWER DIAGRAM */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <div 
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="relative w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[580px] aspect-square flex items-center justify-center p-2 sm:p-4"
              >
                <svg viewBox="0 0 500 500" className="w-full h-full select-none">
                  {/* ROTATING FLOWER WHEEL (Physically rotates like Provenance) */}
                  <g 
                    transform={`rotate(${rotationAngle} 250 250)`}
                    style={{ transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)' }}
                  >
                    {/* 5 Wedges */}
                    {coreValues.map((val, idx) => {
                      const isSelected = activeValue === idx;
                      return (
                        <g 
                          key={val.id}
                          onClick={() => goToValue(idx)}
                          className="cursor-pointer group"
                        >
                          {/* Rounded Triangle Shape rotated around center (250, 250) */}
                          <g transform={`rotate(${val.angle} 250 250)`}>
                            <path 
                              d="M 236 36 C 243 20, 257 20, 264 36 L 312 136 C 318 152, 308 166, 290 166 L 210 166 C 192 166, 182 152, 188 136 Z"
                              fill={isSelected ? '#ed4d0d' : '#fcf8f5'}
                              stroke={isSelected ? '#ed4d0d' : '#ebdcd2'}
                              strokeWidth={isSelected ? '2.5' : '1.5'}
                              className={`transition-all duration-300 ${
                                isSelected ? 'scale-[1.02] origin-center' : 'hover:fill-[#fff0e6] hover:stroke-[#ed4d0d]/60'
                              }`}
                            />
                          </g>

                          {/* Wedge Title: counter-rotates around its centroid to stay perfectly upright */}
                          <g 
                            transform={`rotate(${-rotationAngle} ${val.textX} ${val.textY})`}
                            style={{ transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)' }}
                          >
                            <text
                              x={val.textX}
                              y={val.textY + 5}
                              textAnchor="middle"
                              fill={isSelected ? '#ffffff' : '#1c1917'}
                              className="text-[14px] sm:text-[15px] font-normal uppercase tracking-wider pointer-events-none select-none"
                            >
                              {val.title}
                            </text>
                          </g>
                        </g>
                      );
                    })}

                    {/* Circular Cycling Rotating Accent Ring */}
                    <circle 
                      cx="250" 
                      cy="250" 
                      r="58" 
                      fill="none" 
                      stroke="#ed4d0d" 
                      strokeWidth="1.5" 
                      strokeDasharray="5 7" 
                      strokeOpacity="0.45"
                    />
                  </g>

                  {/* Center Hub Circle with Company Logo (Fixed, static and upright) */}
                  <circle 
                    cx="250" 
                    cy="250" 
                    r="50" 
                    fill="#ffffff" 
                    stroke="#ed4d0d" 
                    strokeWidth="3.5" 
                  />
                  <image 
                    href="/logo.png" 
                    x="208" 
                    y="222" 
                    width="84" 
                    height="56" 
                    preserveAspectRatio="xMidYMid meet" 
                    className="pointer-events-none"
                  />
                </svg>
              </div>
            </div>

            {/* RIGHT COLUMN: ACTIVE VALUE SHOWCASE CARD */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-7 sm:p-9 lg:p-12 rounded-3xl border border-stone-200 transition-all duration-300">
                {/* Value Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-tight text-stone-950 mb-3">
                  {coreValues[activeValue].title}
                </h3>

                {/* Tagline */}
                <p className="text-lg sm:text-xl font-normal text-[#ed4d0d] mb-4 leading-snug">
                  {coreValues[activeValue].tagline}
                </p>

                {/* Description */}
                <p className="text-stone-700 text-sm sm:text-base lg:text-[16.5px] leading-relaxed font-normal text-justify">
                  {coreValues[activeValue].description}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECTION: OUR PHILOSOPHY HEADER (STYLED LIKE OTHER SECTIONS ON STANDARD BG) */}
      <section 
        id="philosophy" 
        className="relative w-full bg-[#faf7f2] text-stone-900 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 font-sans [overflow-x:clip]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* SECTION HEADER (OPPENHEIM STYLE LIKE OTHERS) */}
          <div className="space-y-4">
            
            {/* Eyebrow Subtitle with Oppenheim Line */}
            <div className="flex items-end mb-3">
              <div className="relative inline-flex items-end">
                <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
                <span className="inline-block text-xs sm:text-sm font-normal uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
                  OUR
                </span>
                <span className="inline-block text-xs sm:text-sm font-normal uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1">
                  PHILOSOPH<span className="tracking-normal [letter-spacing:0]">Y</span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2 max-w-4xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[40px] tracking-tight uppercase leading-tight sm:whitespace-nowrap">
                <span className="font-extralight text-stone-900">MAKE EVERY LAYER </span>
                <span className="font-black text-[#ed4d0d]">MATTER.</span>
              </h2>
              <p className="text-stone-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed pt-1">
                Because when every element has purpose, the whole performs better.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5B. ORANGE BANNER: "WHAT IF PACKAGING COULD DO MORE?" WITH VIDEO THROUGH LOGO */}
      <section className="relative w-full bg-[#ed4d0d] text-white py-16 sm:py-20 lg:py-24 font-sans overflow-hidden border-b border-stone-200">
        {/* Subtle Halftone Dot Pattern (like reference) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
            
            {/* LEFT COLUMN: WHAT IF PROPOSITIONS */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-8 sm:space-y-10">
              
              {/* Central Hook */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/80 font-normal">
                  We ask to answer
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase leading-tight text-white font-extralight">
                  WHAT IF PACKAGING COULD <span className="font-black">DO MORE?</span>
                </h3>
              </div>

              {/* The 5 Questions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
                {philosophyItems.map((item) => (
                  <div key={item.id} className="space-y-1.5">
                    <h4 className="text-base sm:text-lg font-normal uppercase tracking-tight text-white leading-snug">
                      {item.question}
                    </h4>
                    <p className="text-white/85 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Concluding Statement */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-lg sm:text-2xl lg:text-2xl font-light text-white tracking-tight uppercase leading-snug">
                  At AB Polypacks <span className="font-black">“THAT IS HOW WE SEE PACKAGING”.</span>
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: VIDEO PLAYING THROUGH TRANSPARENT LOGO MASK */}
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center p-2 sm:p-6 lg:p-8">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] aspect-square flex items-center justify-center">
                {/* Logo Masked Video Container */}
                <div 
                  className="w-full h-full flex items-center justify-center overflow-hidden"
                  style={{
                    WebkitMaskImage: 'url(/logo.png)',
                    maskImage: 'url(/logo.png)',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center'
                  }}
                >
                  <video 
                    src="/3rd-clip.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    poster="/overview_hero.jpg"
                    className="w-full h-full object-cover scale-110 select-none pointer-events-none"
                  >
                    <source src="/3rd-clip.mp4" type="video/mp4" />
                    <source src="/4th-clip.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION: OUR JOURNEY & MILESTONES (CLEAN HORIZONTAL SCROLL) */}
      <section 
        id="our-journey" 
        className="relative w-full bg-[#faf7f2] text-stone-900 py-16 sm:py-20 lg:py-24 font-sans border-b border-stone-200 [overflow-x:clip]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* SECTION HEADER (OPPENHEIM STYLE) */}
          <div className="space-y-4 mb-8 sm:mb-12">
            
            {/* Eyebrow Subtitle with Oppenheim Horizontal Line */}
            <div className="flex items-end mb-3">
              <div className="relative inline-flex items-end">
                <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
                <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
                  OUR
                </span>
                <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1">
                  JOURNE<span className="tracking-normal [letter-spacing:0]">Y</span>
                </span>
              </div>
            </div>

            {/* Headline + Scroll Buttons Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-4xl">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.1] flex flex-wrap items-center gap-x-3.5 gap-y-1">
                  <span className="font-extralight text-stone-900">FROM INCEPTION TO</span>
                  <span className="font-black text-[#ed4d0d]">GLOBAL EXCELLENCE</span>
                </h2>
                <p className="text-stone-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed pt-1">
                  Two decades of continuous investment in technology, infrastructure, and customer trust.
                </p>
              </div>

              {/* Prev / Next Scroll Buttons (Manual Slide) */}
              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => {
                    setIsTimelineAutoPlaying(false);
                    scrollTimeline('prev');
                    setTimeout(() => setIsTimelineAutoPlaying(true), 4000);
                  }}
                  aria-label="Scroll left"
                  className="p-3 rounded-xl bg-white border border-stone-300 hover:border-[#ed4d0d] text-stone-800 hover:text-[#ed4d0d] shadow-none transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setIsTimelineAutoPlaying(false);
                    scrollTimeline('next');
                    setTimeout(() => setIsTimelineAutoPlaying(true), 4000);
                  }}
                  aria-label="Scroll right"
                  className="p-3 rounded-xl bg-white border border-stone-300 hover:border-[#ed4d0d] text-stone-800 hover:text-[#ed4d0d] shadow-none transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* UNIQUE HORIZONTAL MILESTONE TIMELINE TRACK (AUTOSLIDE + MANUAL) */}
          <div className="relative">
            
            {/* Horizontal Timeline Spine Rail */}
            <div className="absolute top-[7px] left-0 right-0 h-[2px] bg-stone-300 z-0 pointer-events-none" />

            {/* Left-to-Right Scrollable Track - Shadow Free */}
            <div 
              ref={timelineScrollRef}
              onMouseEnter={() => setIsTimelineAutoPlaying(false)}
              onMouseLeave={() => setIsTimelineAutoPlaying(true)}
              onTouchStart={() => setIsTimelineAutoPlaying(false)}
              onTouchEnd={() => {
                setTimeout(() => setIsTimelineAutoPlaying(true), 3000);
              }}
              className="flex items-stretch space-x-6 sm:space-x-8 overflow-x-auto pb-6 pt-0 px-1 sm:px-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none"
            >
              {milestones.map((item) => (
                <div
                  key={item.id}
                  className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 flex flex-col items-center group cursor-pointer"
                >
                  {/* Timeline Milestone Center Node on the Rail (No ring/shadow) */}
                  <div className="flex items-center justify-center w-full relative z-10 mb-4">
                    <div className="w-4 h-4 rounded-full bg-[#ed4d0d] border-2 border-[#faf7f2] group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Clean Milestone Card: strictly Year, Image, Title, Description - Center Aligned, Completely Shadow-Free */}
                  <div className="w-full bg-white rounded-3xl border border-stone-200 group-hover:border-[#ed4d0d]/60 shadow-none transition-colors duration-300 overflow-hidden flex flex-col flex-1 p-5 sm:p-6 space-y-4 text-center items-center">
                    
                    {/* 1. Year (Center Aligned) */}
                    <div className="w-full text-center">
                      <span className="text-3xl sm:text-4xl font-black text-stone-900 group-hover:text-[#ed4d0d] transition-colors tracking-tight font-sans block leading-none">
                        {item.year}
                      </span>
                    </div>

                    {/* 2. Image */}
                    <div className="relative h-[190px] sm:h-[210px] w-full rounded-2xl overflow-hidden bg-stone-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* 3. Title & 4. Description (Center Aligned) */}
                    <div className="space-y-2 flex-1 flex flex-col justify-start items-center text-center w-full">
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight leading-snug group-hover:text-[#ed4d0d] transition-colors duration-200">
                        {item.title}
                      </h3>

                      <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed font-normal text-center max-w-xs">
                        {item.description}
                      </p>
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
