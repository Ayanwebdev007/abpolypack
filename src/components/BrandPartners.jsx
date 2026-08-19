import React from 'react';

export default function BrandPartners() {
  const brands = [
    {
      id: 'coca-cola',
      name: 'Coca-Cola',
      logo: '/brands/coca-cola.png'
    },
    {
      id: 'pepsico',
      name: 'PepsiCo',
      logo: '/brands/pepsico.svg'
    },
    {
      id: 'hector-bev',
      name: 'Hector Bev',
      logo: '/brands/hector-bev.avif'
    },
    {
      id: 'itc',
      name: 'ITC',
      logo: '/brands/itc.png'
    },
    {
      id: 'emami',
      name: 'Emami',
      logo: '/brands/emami.webp'
    },
    {
      id: 'pidilite',
      name: 'Pidilite',
      logo: '/brands/pidilite.webp'
    },
    {
      id: 'anmol',
      name: 'Anmol',
      logo: '/brands/anmol.jpg'
    },
    {
      id: 'hul',
      name: 'HUL',
      logo: '/brands/hul.png'
    }
  ];

  // Triplicate for smooth, seamless infinite horizontal loop
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section id="our-brands" className="relative w-full bg-[#faf7f2] text-stone-900 pt-8 sm:pt-10 pb-12 sm:pb-16 overflow-hidden font-sans border-b border-stone-200">
      
      {/* SECTION HEADER (OPPENHEIM STYLE) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-8 sm:mb-10">
        <div className="flex items-end">
          <div className="relative inline-flex items-end">
            {/* Thin horizontal line extending to the left */}
            <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
            
            {/* First Part: TRUSTED BY THE WORLD'S */}
            <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-2 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
              TRUSTED BY THE WORLD'S
            </span>

            {/* Second Word: BEST COMPANIES */}
            <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-2 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1.5">
              BEST COMPANIE<span className="tracking-normal [letter-spacing:0]">S</span>
            </span>
          </div>
        </div>
      </div>

      {/* INFINITE HORIZONTAL MARQUEE CONTAINER WITH MATCHING BEIGE EDGE GRADIENT FADES */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left Fade Gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/90 to-transparent z-10" />
        
        {/* Right Fade Gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#faf7f2] via-[#faf7f2]/90 to-transparent z-10" />

        {/* Marquee Track */}
        <div className="animate-marquee-infinite flex items-center space-x-5 sm:space-x-7">
          {marqueeItems.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="group shrink-0 h-[85px] sm:h-[95px] min-w-[170px] sm:min-w-[200px] px-6 py-3.5 rounded-2xl bg-white border border-stone-200/90 hover:border-[#ed4d0d] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-11 sm:max-h-13 w-auto max-w-[130px] sm:max-w-[160px] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
