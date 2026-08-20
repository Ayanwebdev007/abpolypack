import React from 'react';

export default function OperationalExcellence() {
  return (
    <section 
      id="operational-excellence" 
      className="relative w-full bg-white text-stone-900 py-10 sm:py-12 lg:py-14 overflow-hidden font-sans border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER (OPPENHEIM STYLE) */}
        <div className="mb-4 sm:mb-6 space-y-3">
          
          {/* Eyebrow Subtitle with Oppenheim Continuous Line & Orange Accent */}
          <div className="flex items-end mb-2">
            <div className="relative inline-flex items-end">
              <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
              
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
                OPERATIONAL
              </span>
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1">
                EXCELLENC<span className="tracking-normal [letter-spacing:0]">E</span>
              </span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 tracking-tight uppercase leading-[1.2] max-w-4xl space-y-1">
            <span className="font-extralight text-stone-900 block">PRECISION IN EVERY PROCESS</span>
            <span className="font-black text-[#ed4d0d] block">CONSISTENCY IN EVERY OUTCOME</span>
          </h2>
        </div>

        {/* NARRATIVE CONTENT */}
        <div className="w-full max-w-6xl lg:max-w-7xl space-y-3 sm:space-y-4">
          <p className="text-stone-800 text-[15px] sm:text-base lg:text-[17px] leading-relaxed font-normal text-left">
            At AB Polypacks, operational excellence means bringing people, processes, technology and quality together to deliver reliably at scale. From material handling and production control to precision conversion, testing and dispatch, every stage is designed for efficiency, traceability and consistent performance.
          </p>

          <p className="text-stone-700 text-[14.5px] sm:text-[15.5px] lg:text-[16.5px] leading-relaxed font-normal text-left">
            Our focus is simple: reduce variability, optimise resources, minimise waste and deliver right the first time — giving customers confidence in every order, every batch and every delivery.
          </p>
        </div>

        {/* IMAGE BENTO GRID GALLERY (OPPENHEIM STYLE) */}
        <div className="mt-8 sm:mt-10 lg:mt-12 space-y-3 sm:space-y-4">
          
          {/* Top Row: 3 Equal Size Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            <div className="h-[220px] sm:h-[280px] lg:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 group shadow-sm">
              <img 
                src="/gallery/gallery_1.jpg" 
                alt="Multi-layer Blown Film Extrusion Plant" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="h-[220px] sm:h-[280px] lg:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 group shadow-sm">
              <img 
                src="/gallery/gallery_2.jpg" 
                alt="High-Speed Rotogravure Printing Press" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="h-[220px] sm:h-[280px] lg:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 group shadow-sm">
              <img 
                src="/gallery/gallery_3.jpg" 
                alt="In-house Quality Control Testing Lab" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Bottom Row: 4 Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            <div className="h-[160px] sm:h-[200px] lg:h-[240px] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 group shadow-sm">
              <img 
                src="/gallery/gallery_4.jpg" 
                alt="Automated Pouch Making and Conversion" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="h-[160px] sm:h-[200px] lg:h-[240px] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 group shadow-sm">
              <img 
                src="/gallery/gallery_5.jpg" 
                alt="Packaging Engineering and Operations Team" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="h-[160px] sm:h-[200px] lg:h-[240px] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 group shadow-sm">
              <img 
                src="/gallery/gallery_6.jpg" 
                alt="Precision Slitting and Rewinding Machinery" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="h-[160px] sm:h-[200px] lg:h-[240px] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 group shadow-sm">
              <img 
                src="/gallery/gallery_7.jpg" 
                alt="Finished Goods Dispatch Logistics and Storage" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
