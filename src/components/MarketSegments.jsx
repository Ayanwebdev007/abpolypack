import React from 'react';
import { Plus } from 'lucide-react';

export default function MarketSegments({ onOpenQuoteModal }) {
  // First 6 Market Segments (Tall Left, 4 Middle Stacked, Tall Right)
  const segmentsRow1 = {
    tallLeft: {
      id: 'bakery-confectionery',
      title: 'Bakery & Confectionery',
      image: '/product_bakery.jpg',
      fallbackImage: '/product_food.png',
      requirements: 'Moisture barrier, aroma retention, oxygen control, grease resistance, seal integrity, high-speed machinability'
    },
    middleCol1Top: {
      id: 'snacks-savoury',
      title: 'Snacks & Savoury',
      image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281313?q=80&w=800&auto=format&fit=crop',
      fallbackImage: '/product_food.png',
      requirements: 'High moisture & oxygen barrier, oil/grease resistance, puncture resistance, seal integrity, aroma retention'
    },
    middleCol1Bottom: {
      id: 'condiments-processed-foods',
      title: 'Condiments & Processed Foods',
      image: '/product_spout.png',
      fallbackImage: '/product_food.png',
      requirements: 'Liquid/product compatibility, high seal integrity, barrier protection, puncture resistance, leak prevention'
    },
    middleCol2Top: {
      id: 'staple-dry-foods',
      title: 'Staple & Dry Foods',
      image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=800&auto=format&fit=crop',
      fallbackImage: '/highlight_supply.png',
      requirements: 'Moisture barrier, oxygen protection where required, powder containment, seal integrity, handling strength'
    },
    middleCol2Bottom: {
      id: 'spices-seasonings',
      title: 'Spices & Seasonings',
      image: '/product_spices.png',
      fallbackImage: '/product_food.png',
      requirements: 'Aroma retention, moisture protection, oxygen barrier, light protection where required, excellent printability'
    },
    tallRight: {
      id: 'tea-coffee',
      title: 'Tea & Coffee',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop',
      fallbackImage: '/product_beverage.png',
      requirements: 'High aroma barrier, oxygen/moisture protection, light protection where required, seal integrity, extended shelf-life support'
    }
  };

  // Next 6 Market Segments (Stacked 2 Left, 2 Tall Middle, Stacked 2 Right)
  const segmentsRow2 = {
    leftColTop: {
      id: 'beverages-liquid-foods',
      title: 'Beverages & Liquid Foods',
      image: '/product_beverage.png',
      fallbackImage: '/product_spout.png',
      requirements: 'High barrier performance, seal integrity, mechanical durability, product compatibility, transport resilience'
    },
    leftColBottom: {
      id: 'dairy-frozen-foods',
      title: 'Dairy & Frozen Foods',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=800&auto=format&fit=crop',
      fallbackImage: '/product_food.png',
      requirements: 'Moisture/vapour barrier, low-temperature performance, seal integrity, puncture resistance, product protection'
    },
    middleTall1: {
      id: 'protein-fresh-foods',
      title: 'Protein & Fresh Foods',
      image: '/product_food.png',
      fallbackImage: '/product_spices.png',
      requirements: 'High barrier structures, oxygen control, moisture resistance, puncture resistance, leak prevention, hygiene and food-safety considerations'
    },
    middleTall2: {
      id: 'seeds-agricultural-products',
      title: 'Seeds & Agricultural Products',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
      fallbackImage: '/product_spices.png',
      requirements: 'Moisture control, oxygen management where required, mechanical protection, extended storage performance, printability'
    },
    rightColTop: {
      id: 'personal-care-hygiene',
      title: 'Personal Care & Hygiene',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
      fallbackImage: '/product_spout.png',
      requirements: 'Moisture resistance, seal integrity, chemical/product compatibility, puncture resistance, dispensing functionality where applicable'
    },
    rightColBottom: {
      id: 'textiles-industrial-goods',
      title: 'Textiles & Industrial Consumer Goods',
      image: '/product_spout.png',
      fallbackImage: '/product_beverage.png',
      requirements: 'Abrasion resistance, moisture/dust protection, tensile strength, handling durability, visual presentation'
    }
  };

  const handleCardClick = (title) => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(title);
    }
  };

  return (
    <section id="industries" className="relative w-full bg-[#faf7f2] text-stone-900 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden font-sans border-t border-stone-300">
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
                <span className="font-extralight text-stone-900">ONE EXPERTISE</span>
                <span className="font-black text-[#ed4d0d]">MANY POSSIBILITIES</span>
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

        {/* ---------------------------------------------------- */}
        {/* ROW 1: BENTO GRID 1 (2 TALL AT SIDES, 4 SMALL IN MIDDLE) */}
        {/* ---------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch mb-6 sm:mb-8">
          
          {/* COLUMN 1: TALL LEFT (BAKERY & CONFECTIONERY) */}
          <div 
            onClick={() => handleCardClick(segmentsRow1.tallLeft.title)}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-[340px] sm:h-[380px] lg:h-[400px] w-full overflow-hidden bg-stone-100 shrink-0">
              <img 
                src={segmentsRow1.tallLeft.image} 
                alt={segmentsRow1.tallLeft.title}
                onError={(e) => {
                  if (e.target.src !== segmentsRow1.tallLeft.fallbackImage) {
                    e.target.src = segmentsRow1.tallLeft.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-5 sm:p-6 bg-white flex flex-col justify-start space-y-3 flex-1">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow1.tallLeft.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#ed4d0d] mt-1.5 group-hover:w-12 transition-all duration-300" />
              </div>
              <div className="pt-2 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-1">
                  Key Packaging Requirements
                </span>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {segmentsRow1.tallLeft.requirements}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: 2 STACKED CARDS (SNACKS & SAVOURY & CONDIMENTS & PROCESSED FOODS) */}
          <div className="flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Top: Snacks & Savoury */}
            <div 
              onClick={() => handleCardClick(segmentsRow1.middleCol1Top.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[135px] sm:h-[145px] w-full overflow-hidden bg-stone-100 shrink-0">
                <img 
                  src={segmentsRow1.middleCol1Top.image} 
                  alt={segmentsRow1.middleCol1Top.title}
                  onError={(e) => {
                    if (e.target.src !== segmentsRow1.middleCol1Top.fallbackImage) {
                      e.target.src = segmentsRow1.middleCol1Top.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex flex-col justify-start space-y-2 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow1.middleCol1Top.title}
                </h3>
                <div className="pt-1.5 border-t border-stone-100">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-0.5">
                    Key Packaging Requirements
                  </span>
                  <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {segmentsRow1.middleCol1Top.requirements}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: Condiments & Processed Foods */}
            <div 
              onClick={() => handleCardClick(segmentsRow1.middleCol1Bottom.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[135px] sm:h-[145px] w-full overflow-hidden bg-stone-100 shrink-0">
                <img 
                  src={segmentsRow1.middleCol1Bottom.image} 
                  alt={segmentsRow1.middleCol1Bottom.title}
                  onError={(e) => {
                    if (e.target.src !== segmentsRow1.middleCol1Bottom.fallbackImage) {
                      e.target.src = segmentsRow1.middleCol1Bottom.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex flex-col justify-start space-y-2 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow1.middleCol1Bottom.title}
                </h3>
                <div className="pt-1.5 border-t border-stone-100">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-0.5">
                    Key Packaging Requirements
                  </span>
                  <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {segmentsRow1.middleCol1Bottom.requirements}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: 2 STACKED CARDS (STAPLE & DRY FOODS & SPICES & SEASONINGS) */}
          <div className="flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Top: Staple & Dry Foods */}
            <div 
              onClick={() => handleCardClick(segmentsRow1.middleCol2Top.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[135px] sm:h-[145px] w-full overflow-hidden bg-stone-100 shrink-0">
                <img 
                  src={segmentsRow1.middleCol2Top.image} 
                  alt={segmentsRow1.middleCol2Top.title}
                  onError={(e) => {
                    if (e.target.src !== segmentsRow1.middleCol2Top.fallbackImage) {
                      e.target.src = segmentsRow1.middleCol2Top.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex flex-col justify-start space-y-2 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow1.middleCol2Top.title}
                </h3>
                <div className="pt-1.5 border-t border-stone-100">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-0.5">
                    Key Packaging Requirements
                  </span>
                  <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {segmentsRow1.middleCol2Top.requirements}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: Spices & Seasonings */}
            <div 
              onClick={() => handleCardClick(segmentsRow1.middleCol2Bottom.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[135px] sm:h-[145px] w-full overflow-hidden bg-stone-100 shrink-0">
                <img 
                  src={segmentsRow1.middleCol2Bottom.image} 
                  alt={segmentsRow1.middleCol2Bottom.title}
                  onError={(e) => {
                    if (e.target.src !== segmentsRow1.middleCol2Bottom.fallbackImage) {
                      e.target.src = segmentsRow1.middleCol2Bottom.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex flex-col justify-start space-y-2 flex-1">
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow1.middleCol2Bottom.title}
                </h3>
                <div className="pt-1.5 border-t border-stone-100">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-0.5">
                    Key Packaging Requirements
                  </span>
                  <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {segmentsRow1.middleCol2Bottom.requirements}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 4: TALL RIGHT (TEA & COFFEE) */}
          <div 
            onClick={() => handleCardClick(segmentsRow1.tallRight.title)}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-[340px] sm:h-[380px] lg:h-[400px] w-full overflow-hidden bg-stone-100 shrink-0">
              <img 
                src={segmentsRow1.tallRight.image} 
                alt={segmentsRow1.tallRight.title}
                onError={(e) => {
                  if (e.target.src !== segmentsRow1.tallRight.fallbackImage) {
                    e.target.src = segmentsRow1.tallRight.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-5 sm:p-6 bg-white flex flex-col justify-start space-y-3 flex-1">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow1.tallRight.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#ed4d0d] mt-1.5 group-hover:w-12 transition-all duration-300" />
              </div>
              <div className="pt-2 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-1">
                  Key Packaging Requirements
                </span>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {segmentsRow1.tallRight.requirements}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ---------------------------------------------------- */}
        {/* ROW 2: BENTO GRID 2 (4 SMALL AT SIDES, 2 TALL IN MIDDLE) */}
        {/* ---------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          
          {/* COLUMN 1: 2 STACKED CARDS (BEVERAGES & LIQUID FOODS & DAIRY & FROZEN FOODS) */}
          <div className="flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Top: Beverages & Liquid Foods */}
            <div 
              onClick={() => handleCardClick(segmentsRow2.leftColTop.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[135px] sm:h-[145px] w-full overflow-hidden bg-stone-100 shrink-0">
                <img 
                  src={segmentsRow2.leftColTop.image} 
                  alt={segmentsRow2.leftColTop.title}
                  onError={(e) => {
                    if (e.target.src !== segmentsRow2.leftColTop.fallbackImage) {
                      e.target.src = segmentsRow2.leftColTop.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex flex-col justify-start space-y-2 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow2.leftColTop.title}
                </h3>
                <div className="pt-1.5 border-t border-stone-100">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-0.5">
                    Key Packaging Requirements
                  </span>
                  <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {segmentsRow2.leftColTop.requirements}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: Dairy & Frozen Foods */}
            <div 
              onClick={() => handleCardClick(segmentsRow2.leftColBottom.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[135px] sm:h-[145px] w-full overflow-hidden bg-stone-100 shrink-0">
                <img 
                  src={segmentsRow2.leftColBottom.image} 
                  alt={segmentsRow2.leftColBottom.title}
                  onError={(e) => {
                    if (e.target.src !== segmentsRow2.leftColBottom.fallbackImage) {
                      e.target.src = segmentsRow2.leftColBottom.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex flex-col justify-start space-y-2 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow2.leftColBottom.title}
                </h3>
                <div className="pt-1.5 border-t border-stone-100">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-0.5">
                    Key Packaging Requirements
                  </span>
                  <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {segmentsRow2.leftColBottom.requirements}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: TALL MIDDLE 1 (PROTEIN & FRESH FOODS) */}
          <div 
            onClick={() => handleCardClick(segmentsRow2.middleTall1.title)}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-[340px] sm:h-[380px] lg:h-[400px] w-full overflow-hidden bg-stone-100 shrink-0">
              <img 
                src={segmentsRow2.middleTall1.image} 
                alt={segmentsRow2.middleTall1.title}
                onError={(e) => {
                  if (e.target.src !== segmentsRow2.middleTall1.fallbackImage) {
                    e.target.src = segmentsRow2.middleTall1.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-5 sm:p-6 bg-white flex flex-col justify-start space-y-3 flex-1">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow2.middleTall1.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#ed4d0d] mt-1.5 group-hover:w-12 transition-all duration-300" />
              </div>
              <div className="pt-2 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-1">
                  Key Packaging Requirements
                </span>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {segmentsRow2.middleTall1.requirements}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: TALL MIDDLE 2 (SEEDS & AGRICULTURAL PRODUCTS) */}
          <div 
            onClick={() => handleCardClick(segmentsRow2.middleTall2.title)}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-[340px] sm:h-[380px] lg:h-[400px] w-full overflow-hidden bg-stone-100 shrink-0">
              <img 
                src={segmentsRow2.middleTall2.image} 
                alt={segmentsRow2.middleTall2.title}
                onError={(e) => {
                  if (e.target.src !== segmentsRow2.middleTall2.fallbackImage) {
                    e.target.src = segmentsRow2.middleTall2.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-5 sm:p-6 bg-white flex flex-col justify-start space-y-3 flex-1">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow2.middleTall2.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#ed4d0d] mt-1.5 group-hover:w-12 transition-all duration-300" />
              </div>
              <div className="pt-2 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-1">
                  Key Packaging Requirements
                </span>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {segmentsRow2.middleTall2.requirements}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 4: 2 STACKED CARDS (PERSONAL CARE & HYGIENE & TEXTILES & INDUSTRIAL GOODS) */}
          <div className="flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Top: Personal Care & Hygiene */}
            <div 
              onClick={() => handleCardClick(segmentsRow2.rightColTop.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[135px] sm:h-[145px] w-full overflow-hidden bg-stone-100 shrink-0">
                <img 
                  src={segmentsRow2.rightColTop.image} 
                  alt={segmentsRow2.rightColTop.title}
                  onError={(e) => {
                    if (e.target.src !== segmentsRow2.rightColTop.fallbackImage) {
                      e.target.src = segmentsRow2.rightColTop.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex flex-col justify-start space-y-2 flex-1">
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow2.rightColTop.title}
                </h3>
                <div className="pt-1.5 border-t border-stone-100">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-0.5">
                    Key Packaging Requirements
                  </span>
                  <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {segmentsRow2.rightColTop.requirements}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: Textiles & Industrial Consumer Goods */}
            <div 
              onClick={() => handleCardClick(segmentsRow2.rightColBottom.title)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#ed4d0d]/30 transition-all duration-300 cursor-pointer flex flex-col flex-1"
            >
              <div className="relative h-[135px] sm:h-[145px] w-full overflow-hidden bg-stone-100 shrink-0">
                <img 
                  src={segmentsRow2.rightColBottom.image} 
                  alt={segmentsRow2.rightColBottom.title}
                  onError={(e) => {
                    if (e.target.src !== segmentsRow2.rightColBottom.fallbackImage) {
                      e.target.src = segmentsRow2.rightColBottom.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex flex-col justify-start space-y-2 flex-1">
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#ed4d0d] transition-colors duration-200">
                  {segmentsRow2.rightColBottom.title}
                </h3>
                <div className="pt-1.5 border-t border-stone-100">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#ed4d0d] block mb-0.5">
                    Key Packaging Requirements
                  </span>
                  <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {segmentsRow2.rightColBottom.requirements}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
