import React, { useState } from 'react';
import { Plus, X, Factory, Award, ArrowRight } from 'lucide-react';

export default function CompanyOverview({ onOpenQuoteModal }) {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  return (
    <section id="overview" className="relative w-full h-screen min-h-[620px] max-h-[920px] bg-[#faf7f2] text-stone-900 overflow-hidden font-sans border-b border-stone-200">
      
      {/* Light Background Corporate Facility Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/corporate_facility_bg.png" 
          alt="AB POLYPACKS Howrah Plant Facility" 
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Right Side Gradient Only (Restored) */}
        <div className="absolute inset-y-0 right-0 w-[450px] bg-gradient-to-l from-[#faf7f2] via-[#faf7f2]/85 to-transparent pointer-events-none z-10" />
      </div>

      {/* MAIN CONTENT CONTAINER - ANCHORED AT BOTTOM LEFT */}
      <div className="relative z-20 h-full w-full pl-12 sm:pl-20 lg:pl-28 pr-8 flex flex-col justify-end pb-6 sm:pb-8 lg:pb-10">
        
        {/* LEFT COLUMN: STATEMENT & BUTTON IN BALANCED BRAND ORANGE RECTANGULAR BOX */}
        <div className="max-w-lg bg-[#ed4d0d] p-5 sm:p-6 rounded-xl shadow-xl space-y-3.5 z-20">
          
          {/* Main Statement Copy (Balanced Crisp White Text) */}
          <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-white font-sans tracking-tight">
            Since 2006, AB Polypacks has been building packaging solutions around a simple belief: <span className="font-semibold text-white">great packaging has to do more than look good. It has to perform.</span>
          </p>

          {/* Accent Line & Subtitle */}
          <div className="space-y-1 pt-1">
            <div className="w-9 h-[2px] bg-white/80" />
            <div className="text-xs font-semibold text-white/90 tracking-widest uppercase">
              AB POLYPACKS PHILOSOPHY
            </div>
          </div>

          {/* Oppenheim Rectangular Button: READ MORE + */}
          <div className="pt-1.5">
            <button
              onClick={() => setIsReadMoreOpen(true)}
              className="inline-flex items-center px-5 py-2 rounded-lg bg-white text-[#ed4d0d] hover:bg-stone-100 text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-md space-x-2.5 group"
            >
              <span>READ MORE</span>
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

        </div>

      </div>

      {/* FAR RIGHT GIANT 2-LINE VERTICAL TITLE (BRAND ORANGE TEXT OVER LIGHT BEIGE) */}
      <div className="absolute right-4 sm:right-8 lg:right-14 top-0 bottom-0 z-30 hidden sm:flex flex-col items-end justify-between py-10 pointer-events-none">
        
        {/* Top spacer */}
        <div className="h-10" />

        {/* Two Short Parallel Vertical Lines in HUGE Font Size (BRAND ORANGE) */}
        <div className="my-auto flex items-center space-x-2 lg:space-x-4">
          
          {/* Line 1: Ultra-Thin Font Weight (BRAND ORANGE) */}
          <div className="writing-mode-vertical uppercase text-[#ed4d0d] font-extralight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-widest whitespace-nowrap opacity-85 select-none leading-none">
            MORE THAN
          </div>

          {/* Line 2: Heavy Black Extra-Bold Font Weight (BRAND ORANGE) */}
          <div className="writing-mode-vertical uppercase text-[#ed4d0d] font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-widest whitespace-nowrap opacity-100 select-none leading-none">
            PACKAGING
          </div>

        </div>

        {/* Bottom Right Label & Accent Line */}
        <div className="flex flex-col items-end space-y-1.5 pt-4">
          <div className="w-10 h-[2px] bg-[#ed4d0d]" />
          <div className="text-xs font-semibold tracking-widest text-stone-600 uppercase">
            COMPANY OVERVIEW
          </div>
        </div>

      </div>

      {/* READ MORE MODAL POPUP */}
      {isReadMoreOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
          
          {/* Backdrop Click to Close */}
          <div 
            className="absolute inset-0"
            onClick={() => setIsReadMoreOpen(false)}
          />

          {/* Modal Content Card */}
          <div className="relative z-10 w-full max-w-2xl bg-white text-stone-900 border border-stone-300 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
            
            {/* Header with Title and Close Button */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#ed4d0d] uppercase block">
                  COMPANY OVERVIEW
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 mt-1">
                  About AB Polypacks
                </h3>
              </div>

              <button
                onClick={() => setIsReadMoreOpen(false)}
                className="p-2 rounded-full bg-stone-100 hover:bg-[#ed4d0d] hover:text-white transition-colors text-stone-700"
                aria-label="Close overview popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Copy */}
            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              <p>
                Today, AB Polypacks is an integrated flexible packaging manufacturer and a trusted partner to leading brands across India and global markets. From our 1.5 lakh sq. ft. manufacturing facility in Howrah, we bring technology, technical expertise and disciplined quality systems together to create packaging that protects products, preserves quality and strengthens brand presence. With an annual manufacturing capacity of 24,000 MT, we have built the scale and capability to respond to the evolving demands of modern businesses.
              </p>
              <p className="font-medium text-stone-900 pt-1">
                What makes us different is our end-to-end approach.
              </p>
            </div>

            {/* Key Facility Highlights Strip */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[#faf7f2] border border-stone-200 rounded-2xl p-4 flex items-center space-x-3">
                <Factory className="w-6 h-6 text-[#ed4d0d] shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-stone-900">1.5 Lakh Sq. Ft.</div>
                  <div className="text-xs text-stone-500">Howrah Plant Facility</div>
                </div>
              </div>

              <div className="bg-[#faf7f2] border border-stone-200 rounded-2xl p-4 flex items-center space-x-3">
                <Award className="w-6 h-6 text-[#ed4d0d] shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-stone-900">24,000 MT</div>
                  <div className="text-xs text-stone-500">Annual Capacity</div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  setIsReadMoreOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="inline-flex items-center px-6 py-2.5 rounded-lg bg-[#ed4d0d] hover:bg-[#d4410a] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md space-x-2"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsReadMoreOpen(false)}
                className="px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-semibold transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}
