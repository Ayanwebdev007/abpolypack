import React from 'react';
import { Plus } from 'lucide-react';

export default function CompanyOverview({ onOpenQuoteModal, onNavigate }) {
  return (
    <section id="overview" className="relative w-full bg-white text-stone-900 py-16 sm:py-24 lg:py-28 overflow-hidden font-sans border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER (OPPENHEIM STYLE - WHITE & ORANGE COMBINATION) */}
        <div className="mb-12 sm:mb-16 space-y-4">
          
          {/* Eyebrow Subtitle with Oppenheim Line & Exact Colored Accent Notch under STORY only */}
          <div className="flex items-end mb-3">
            <div className="relative inline-flex items-end">
              {/* Thin horizontal line coming from far left of the page */}
              <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
              
              {/* First Word: OUR (with thin gray line continuous underneath) */}
              <span className="inline-block text-sm sm:text-base lg:text-lg font-bold uppercase tracking-[0.2em] text-stone-900 pb-2 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
                OUR
              </span>

              {/* Second Word: STORY (with Brand Orange accent bar underneath) */}
              <span className="inline-block text-sm sm:text-base lg:text-lg font-bold uppercase tracking-[0.2em] text-stone-900 pb-2 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1.5">
                STOR<span className="tracking-normal [letter-spacing:0]">Y</span>
              </span>
            </div>
          </div>

          {/* Headline + Button Row (Top Aligned with Headline) */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            {/* Headline with Thin Stone & Heavy Brand Orange Weights */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.1] flex flex-wrap items-center gap-x-3.5 gap-y-1 max-w-4xl">
              <span className="font-extralight text-stone-900">FROM THE FACTORY FLOOR</span>
              <span className="font-black text-[#ed4d0d]">TO THE FINAL HAND.</span>
            </h2>

            {/* Top Right Single Action Button (Top-aligned with FROM THE FACTORY FLOOR) */}
            <div className="shrink-0 pt-1">
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('Our Story')}
                className="inline-flex items-center px-7 py-3.5 rounded-lg bg-[#ed4d0d] hover:bg-[#d4410a] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg space-x-3 group whitespace-nowrap"
              >
                <span>EXPLORE OUR STORY</span>
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2-COLUMN OPPENHEIM STYLE EDITORIAL SECTION WITH EXPANDED FULL-LEFT BLEED IMAGE */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-14">
        
        {/* LEFT COLUMN: Wider Left Screen Edge Image (58-60% Width) */}
        <div className="w-full lg:w-[58%] xl:w-[60%] shrink-0">
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] xl:h-[640px] overflow-hidden rounded-none rounded-tr-3xl sm:rounded-tr-[2.5rem] lg:rounded-tr-[3.5rem] bg-stone-100">
            {/* Clean Facility Image */}
            <img 
              src="/corporate_facility_bg.png" 
              alt="AB POLYPACKS Manufacturing Facility" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Compact Editorial Story Text Content (40-42% Width) */}
        <div className="w-full lg:w-[42%] xl:w-[40%] px-4 sm:px-8 lg:px-6 xl:px-10 lg:pr-8 xl:pr-16 space-y-5 max-w-xl">
          
          {/* Top Accent Bar */}
          <div className="w-14 h-1 bg-[#ed4d0d] rounded-full" />

          {/* Paragraph Content Blocks with Justified Text */}
          <div className="space-y-4 text-stone-700 leading-relaxed text-[15px] sm:text-base lg:text-[16.5px] font-normal text-justify">
            
            <p>
              A product can travel thousands of kilometres before it reaches the person it was made for. Through every mile, every movement and every moment, one thing stands between the product and the world: <span className="font-semibold text-stone-900">its pack.</span>
            </p>

            <p>
              Since 2006, AB Polypacks has been engineering that critical interface with precision. Our 1.5 lakh sq. ft. Howrah facility, backed by 24,000 MT annual capacity, brings together extrusion, printing, lamination and conversion capabilities within an integrated production environment.
            </p>

            <p>
              Our technical expertise and stringent quality systems help create formats designed to protect contents, preserve integrity and carry brand identity from the production line to the point of consumption.
            </p>

            <p>
              Serving leading businesses across India and international markets, we combine scale with control, capability with consistency, and experience with an instinct for what comes next.
            </p>

          </div>

          {/* Tagline / Closing Statement */}
          <div className="pt-3 border-t border-stone-200">
            <p className="text-lg sm:text-xl font-bold text-stone-950 tracking-tight">
              AB Polypacks — <span className="text-[#ed4d0d]">Built for the Journey.</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
