import React from 'react';
import { Plus } from 'lucide-react';

export default function FeaturedProducts({ onOpenQuoteModal }) {
  const highlights = [
    {
      id: 'expertise',
      title: '15+ DECADES EXPERTISE',
      badge: 'SINCE 2006',
      image: '/corporate_facility_bg.png',
      colSpan: 'col-span-12 lg:col-span-7',
      height: 'h-[360px] sm:h-[400px]'
    },
    {
      id: 'capacity',
      title: '2000+ MT PER MONTH CAPACITY',
      badge: '24,000 MT / YEAR',
      image: '/product_food.png',
      colSpan: 'col-span-12 lg:col-span-5',
      height: 'h-[360px] sm:h-[400px]'
    },
    {
      id: 'network',
      title: 'GLOBAL SUPPLY NETWORK',
      badge: 'WORLDWIDE REACH',
      image: '/highlight_supply.png',
      colSpan: 'col-span-12 lg:col-span-5',
      height: 'h-[320px] sm:h-[350px]'
    },
    {
      id: 'manpower',
      title: 'MANPOWER 375+',
      badge: 'EXPERT TEAM',
      image: '/highlight_manpower.png',
      colSpan: 'col-span-12 lg:col-span-7',
      height: 'h-[320px] sm:h-[350px]'
    }
  ];

  return (
    <section id="products" className="relative w-full bg-[#faf7f2] text-stone-900 py-16 sm:py-24 overflow-hidden font-sans border-t border-stone-300">
      <div className="w-full pl-12 sm:pl-20 lg:pl-28 pr-8 sm:pr-12 lg:pr-16">
        
        {/* SECTION HEADER (LIGHT THEME - WHITE & BRAND ORANGE COMBINATION) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          
          <div className="space-y-3">
            {/* Eyebrow Subtitle with Brand Orange Accent Line */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#ed4d0d]">
                KEY HIGHLIGHTS
              </div>
              <div className="w-12 h-[3px] bg-[#ed4d0d]" />
            </div>

            {/* Headline with Thin Stone & Bold Brand Orange */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase flex flex-wrap items-center gap-x-4">
              <span className="font-extralight text-stone-800">PRODUCT</span>
              <span className="font-black text-[#ed4d0d]">EXCELLENCE</span>
            </h2>
          </div>

          {/* Top Right CTA Button */}
          <div>
            <button
              onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#ed4d0d] hover:bg-[#d4410a] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 shadow-lg space-x-3 group"
            >
              <span>EXPLORE MORE</span>
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

        </div>

        {/* 4-CARD BENTO GRID CONTAINER (LIGHT THEME MATCH) */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenQuoteModal && onOpenQuoteModal(item.title)}
              className={`${item.colSpan} ${item.height} relative rounded-3xl overflow-hidden group cursor-pointer border border-stone-300/80 bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1`}
            >
              {/* Card Background Image with Smooth Hover Zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Bottom Dark Gradient Overlay for Crisp White Title Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Badge Tag (White Background + Brand Orange Text) */}
              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-[10px] font-bold tracking-widest text-[#ed4d0d] uppercase shadow-md">
                  {item.badge}
                </span>
              </div>

              {/* Oppenheim Bottom-Left Content (Stat Title Only) */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 z-10 space-y-2">
                
                {/* Stat Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-none group-hover:text-[#ed4d0d] transition-colors">
                  {item.title}
                </h3>

                {/* Brand Orange Horizontal Line Accent */}
                <div className="w-8 h-[2px] bg-[#ed4d0d] transition-all duration-300 group-hover:w-16" />

              </div>

              {/* Hover Plus Icon Circle Accent */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 rounded-full bg-[#ed4d0d] text-white shadow-lg">
                  <Plus className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
