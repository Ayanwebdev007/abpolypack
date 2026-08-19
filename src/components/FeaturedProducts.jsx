import React from 'react';
import { Plus } from 'lucide-react';

export default function FeaturedProducts({ onOpenQuoteModal }) {
  const highlights = [
    {
      id: 'laminates',
      title: 'Laminates',
      subtitle: 'Laminates for protection.',
      image: '/corporate_facility_bg.png',
      colSpan: 'col-span-12 lg:col-span-7',
      height: 'h-[360px] sm:h-[400px]'
    },
    {
      id: 'pouches',
      title: 'Pouches',
      subtitle: 'Pouches for versatility.',
      image: '/product_spout.png',
      colSpan: 'col-span-12 lg:col-span-5',
      height: 'h-[360px] sm:h-[400px]'
    },
    {
      id: 'shrink-sleeves',
      title: 'Shrink Sleeves',
      subtitle: 'Shrink Sleeves for standout branding.',
      image: '/product_beverage.png',
      colSpan: 'col-span-12',
      height: 'h-[340px] sm:h-[400px] lg:h-[450px]'
    },
    {
      id: 'wrap-around-labels',
      title: 'Wrap-around Labels',
      subtitle: 'Wrap-around Labels for efficient presentation.',
      image: '/product_spices.png',
      colSpan: 'col-span-12 lg:col-span-5',
      height: 'h-[320px] sm:h-[350px]'
    },
    {
      id: 'collation-shrink-films',
      title: 'Collation Shrink Films',
      subtitle: 'Collation Shrink Films for secure bundling.',
      image: '/highlight_supply.png',
      colSpan: 'col-span-12 lg:col-span-7',
      height: 'h-[320px] sm:h-[350px]'
    }
  ];

  return (
    <section id="products" className="relative w-full bg-[#faf7f2] text-stone-900 py-16 sm:py-24 lg:py-28 overflow-hidden font-sans border-t border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER (OPPENHEIM STYLE - PRODUCTS SECTION) */}
        <div className="mb-12 sm:mb-16 space-y-4">
          
          {/* Eyebrow Subtitle with Oppenheim Line & Exact Colored Accent Notch under PRODUCTS */}
          <div className="flex items-end mb-3">
            <div className="relative inline-flex items-end">
              {/* Thin horizontal line coming from far left of the page */}
              <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
              
              {/* Word: PRODUCTS (with Brand Orange accent bar underneath) */}
              <span className="inline-block text-sm sm:text-base lg:text-lg font-bold uppercase tracking-[0.2em] text-stone-900 pb-2 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none">
                PRODUCT<span className="tracking-normal [letter-spacing:0]">S</span>
              </span>
            </div>
          </div>

          {/* Headline + Button Row (Top Aligned with Headline) */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              {/* Headline with Thin Stone & Heavy Brand Orange Weights */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.1] flex flex-wrap items-center gap-x-3.5 gap-y-1">
                <span className="font-extralight text-stone-900">ONE PORTFOLIO.</span>
                <span className="font-black text-[#ed4d0d]">EVERY PACKAGING POSSIBILITY.</span>
              </h2>

              {/* Description Copy */}
              <p className="text-sm sm:text-base lg:text-[17px] text-stone-600 leading-relaxed font-normal pt-1 max-w-3xl">
                AB Polypacks brings them together in one comprehensive flexible packaging portfolio — engineered to combine performance, aesthetics and practicality.
              </p>
            </div>

            {/* Top Right Single Action Button (Top-aligned with Headline) */}
            <div className="shrink-0 pt-1">
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('Products Portfolio')}
                className="inline-flex items-center px-7 py-3.5 rounded-lg bg-[#ed4d0d] hover:bg-[#d4410a] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg space-x-3 group whitespace-nowrap"
              >
                <span>EXPLORE PRODUCTS</span>
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>
          </div>

        </div>

        {/* 5-CARD BENTO GRID CONTAINER (2 - 1 - 2 LAYOUT) */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenQuoteModal && onOpenQuoteModal(item.title)}
              className={`${item.colSpan} ${item.height} relative rounded-3xl overflow-hidden cursor-pointer border border-stone-200 bg-stone-100 shadow-md group`}
            >
              {/* 1. Base Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />

              {/* 2. Base Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500 z-[4]" />

              {/* 3. Brand Orange Gradient on Hover (Lower opacity on left to show image, Full opacity on right for logo) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ed4d0d]/45 via-[#ed4d0d]/80 to-[#ed4d0d] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-[5]" />

              {/* 4. White / Gray Watermark Logo Sliding in from Right on Hover with Subtle Opacity */}
              <div className="absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-10 transition-all duration-500 ease-out z-[6] pointer-events-none w-56 sm:w-72 lg:w-96 select-none">
                <img 
                  src="/logo.png" 
                  alt="AB Polypacks Watermark" 
                  className="w-full h-auto object-contain filter brightness-0 invert" 
                />
              </div>

              {/* 5. Bottom-Left Content (Default Large Title -> Hover Eyebrow + Large Subtitle) */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10">
                
                {/* Title: Non-bold by default, transitions to light uppercase eyebrow on hover */}
                <div className="flex items-center space-x-2.5 transition-all duration-300">
                  <span className="font-normal text-white tracking-wide transition-all duration-300 text-2xl sm:text-3xl lg:text-4xl group-hover:text-xs sm:group-hover:text-sm group-hover:uppercase group-hover:tracking-[0.2em] group-hover:font-normal group-hover:text-white/80">
                    {item.title}
                  </span>
                  <span className="w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 h-[1.5px] bg-white transition-all duration-300 shrink-0" />
                </div>

                {/* Subtitle: Clean non-bold elegant headline on hover */}
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 transition-all duration-400 ease-out pt-0 group-hover:pt-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-snug">
                    {item.subtitle}
                  </h3>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
