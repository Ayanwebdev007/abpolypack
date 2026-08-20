import React from 'react';

export default function GlobalReach() {
  const exportStats = [
    {
      year: "2023-24",
      label: "3.00 Cr ( 1.87% of total turnover )",
      barHeight: "15%"
    },
    {
      year: "2024-25",
      label: "8 Cr ( 4.5% of total turnover )",
      barHeight: "38%"
    },
    {
      year: "2025-26",
      label: "23 Cr ( 12.10% of total turnover )",
      barHeight: "100%"
    }
  ];

  return (
    <section 
      id="global-reach" 
      className="relative w-full bg-[#faf7f2] text-stone-900 py-10 sm:py-14 lg:py-16 overflow-hidden font-sans border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER (OPPENHEIM STYLE) */}
        <div className="mb-6 sm:mb-8 space-y-3">
          <div className="flex items-end mb-2">
            <div className="relative inline-flex items-end">
              <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
              
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
                GLOBAL
              </span>
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1">
                REAC<span className="tracking-normal [letter-spacing:0]">H</span>
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 tracking-tight uppercase leading-[1.2] max-w-5xl">
            <span className="font-extralight text-stone-900">BEYOND BORDERS </span>
            <span className="font-black text-[#ed4d0d]">WITH PURPOSE</span>
          </h2>

          <p className="text-stone-800 text-base sm:text-lg max-w-4xl font-normal leading-relaxed pt-1">
            Export is made to entire African continent, Middle East, Europe.
          </p>
        </div>

        {/* MAP & TURNOVER BARS LAYOUT */}
        <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-8 my-4 sm:my-6">
          
          {/* Scaled Map Image */}
          <div className="flex-1 w-full flex items-center justify-center lg:justify-start overflow-hidden">
            <img 
              src="/global_map.png" 
              alt="Global Export Map" 
              className="w-full max-w-3xl lg:max-w-4xl h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[460px] object-contain select-none mix-blend-multiply"
            />
          </div>

          {/* Vertical Turnover Bars Aligned on Right */}
          <div className="shrink-0 flex items-end justify-center lg:justify-end pb-2 lg:pb-4">
            <div className="flex items-end gap-6 sm:gap-8 lg:gap-10">
              {exportStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  
                  {/* Top Stat: Fiscal Year */}
                  <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-stone-900 whitespace-nowrap mb-2.5">
                    {stat.year}
                  </span>

                  {/* Text & Bar Track Row (Tightly Coupled) */}
                  <div className="flex items-end gap-1">
                    
                    {/* Vertical Label on the Left Side */}
                    <span className="writing-mode-vertical text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-wider text-stone-800 select-none whitespace-nowrap pb-0.5">
                      {stat.label}
                    </span>

                    {/* Vertical Bar Track */}
                    <div className="w-3 sm:w-3.5 lg:w-4 h-64 sm:h-72 lg:h-80 xl:h-[340px] rounded-full bg-white shadow-sm border border-stone-300/90 relative flex flex-col justify-end overflow-hidden">
                      <div 
                        className="w-full bg-[#ed4d0d] rounded-full transition-all duration-1000"
                        style={{ height: stat.barHeight }}
                      />
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
