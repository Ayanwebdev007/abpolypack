import React from 'react';
import { Plus } from 'lucide-react';

export default function MarketSegments({ onOpenQuoteModal }) {
  const segments = {
    tallLeft: {
      id: 'food-packaging',
      title: 'Food Packaging',
      image: '/product_food.png',
      fallbackImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281313?q=80&w=1000&auto=format&fit=crop'
    },
    middleCol1Top: {
      id: 'beverages',
      title: 'Beverages',
      image: '/product_beverage.png',
      fallbackImage: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop'
    },
    middleCol1Bottom: {
      id: 'liquid-packaging',
      title: 'Liquid Packaging',
      image: '/product_spout.png',
      fallbackImage: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop'
    },
    middleCol2Top: {
      id: 'spices',
      title: 'Spices',
      image: '/product_spices.png',
      fallbackImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop'
    },
    middleCol2Bottom: {
      id: 'personal-care-household',
      title: 'Personal Care & Household',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1608248597359-4672e6be67d3?q=80&w=800&auto=format&fit=crop'
    },
    tallRight: {
      id: 'collation-shrink-films',
      title: 'Collation Shrink Films',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
      fallbackImage: '/highlight_supply.png'
    }
  };

  const handleCardClick = (title) => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(title);
    }
  };

  return (
    <section id="industries" className="relative w-full bg-[#faf7f2] text-stone-900 pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 overflow-hidden font-sans border-t border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER (OPPENHEIM STYLE) */}
        <div className="mb-12 sm:mb-16 space-y-4">
          
          {/* Eyebrow Subtitle with Oppenheim Horizontal Line */}
          <div className="flex items-end mb-3">
            <div className="relative inline-flex items-end">
              {/* Thin horizontal line extending to the left */}
              <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
              
              {/* First Part: INDUSTRIES WE */}
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-2 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
                INDUSTRIES WE
              </span>

              {/* Second Word: SERVE */}
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-2 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1.5">
                SERV<span className="tracking-normal [letter-spacing:0]">E</span>
              </span>
            </div>
          </div>

          {/* Headline + Button Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.1] flex flex-wrap items-center gap-x-3.5 gap-y-1">
                <span className="font-extralight text-stone-900">MARKET SEGMENTS</span>
                <span className="font-black text-[#ed4d0d]">SERVED.</span>
              </h2>

              {/* Description Copy */}
              <p className="text-sm sm:text-base lg:text-[17px] text-stone-600 leading-relaxed font-normal pt-1 max-w-3xl">
                AB Polypacks combines integrated manufacturing, technical expertise and purposeful innovation to create flexible packaging that protects product integrity, strengthens brand presence and supports growth across consumer and global markets.
              </p>
            </div>

            {/* Top Right Single Action Button */}
            <div className="shrink-0 pt-1">
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('Market Segments')}
                className="inline-flex items-center px-7 py-3.5 rounded-lg bg-[#ed4d0d] hover:bg-[#d4410a] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg space-x-3 group whitespace-nowrap"
              >
                <span>EXPLORE SEGMENTS</span>
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>
          </div>

        </div>

        {/* 4-COLUMN OPPENHEIM STYLE BENTO GRID WITH CLEAN TITLES ONLY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          
          {/* COLUMN 1: TALL LEFT (FOOD PACKAGING) */}
          <div 
            onClick={() => handleCardClick(segments.tallLeft.title)}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-[340px] sm:h-[380px] lg:h-[400px] w-full overflow-hidden bg-stone-100">
              <img 
                src={segments.tallLeft.image} 
                alt={segments.tallLeft.title}
                onError={(e) => {
                  if (e.target.src !== segments.tallLeft.fallbackImage) {
                    e.target.src = segments.tallLeft.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-6 bg-white text-center flex items-center justify-center min-h-[90px]">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                {segments.tallLeft.title}
              </h3>
            </div>
          </div>

          {/* COLUMN 2: 2 STACKED CARDS (BEVERAGES & LIQUID PACKAGING) */}
          <div className="flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Top: Beverages */}
            <div 
              onClick={() => handleCardClick(segments.middleCol1Top.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[160px] sm:h-[175px] w-full overflow-hidden bg-stone-100">
                <img 
                  src={segments.middleCol1Top.image} 
                  alt={segments.middleCol1Top.title}
                  onError={(e) => {
                    if (e.target.src !== segments.middleCol1Top.fallbackImage) {
                      e.target.src = segments.middleCol1Top.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 bg-white text-center flex items-center justify-center flex-1 min-h-[64px]">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segments.middleCol1Top.title}
                </h3>
              </div>
            </div>

            {/* Bottom: Liquid Packaging */}
            <div 
              onClick={() => handleCardClick(segments.middleCol1Bottom.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[160px] sm:h-[175px] w-full overflow-hidden bg-stone-100">
                <img 
                  src={segments.middleCol1Bottom.image} 
                  alt={segments.middleCol1Bottom.title}
                  onError={(e) => {
                    if (e.target.src !== segments.middleCol1Bottom.fallbackImage) {
                      e.target.src = segments.middleCol1Bottom.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 bg-white text-center flex items-center justify-center flex-1 min-h-[64px]">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segments.middleCol1Bottom.title}
                </h3>
              </div>
            </div>
          </div>

          {/* COLUMN 3: 2 STACKED CARDS (SPICES & PERSONAL CARE & HOUSEHOLD) */}
          <div className="flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Top: Spices */}
            <div 
              onClick={() => handleCardClick(segments.middleCol2Top.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[160px] sm:h-[175px] w-full overflow-hidden bg-stone-100">
                <img 
                  src={segments.middleCol2Top.image} 
                  alt={segments.middleCol2Top.title}
                  onError={(e) => {
                    if (e.target.src !== segments.middleCol2Top.fallbackImage) {
                      e.target.src = segments.middleCol2Top.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 bg-white text-center flex items-center justify-center flex-1 min-h-[64px]">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segments.middleCol2Top.title}
                </h3>
              </div>
            </div>

            {/* Bottom: Personal Care & Household */}
            <div 
              onClick={() => handleCardClick(segments.middleCol2Bottom.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[160px] sm:h-[175px] w-full overflow-hidden bg-stone-100">
                <img 
                  src={segments.middleCol2Bottom.image} 
                  alt={segments.middleCol2Bottom.title}
                  onError={(e) => {
                    if (e.target.src !== segments.middleCol2Bottom.fallbackImage) {
                      e.target.src = segments.middleCol2Bottom.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 bg-white text-center flex items-center justify-center flex-1 min-h-[64px]">
                <h3 className="text-xs sm:text-[13px] lg:text-sm font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segments.middleCol2Bottom.title}
                </h3>
              </div>
            </div>
          </div>

          {/* COLUMN 4: TALL RIGHT (COLLATION SHRINK FILMS) */}
          <div 
            onClick={() => handleCardClick(segments.tallRight.title)}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-[340px] sm:h-[380px] lg:h-[400px] w-full overflow-hidden bg-stone-100">
              <img 
                src={segments.tallRight.image} 
                alt={segments.tallRight.title}
                onError={(e) => {
                  if (e.target.src !== segments.tallRight.fallbackImage) {
                    e.target.src = segments.tallRight.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-6 bg-white text-center flex items-center justify-center min-h-[90px]">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                {segments.tallRight.title}
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
