import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMove]);

  const handleClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <section 
      id="transformation" 
      className="relative w-full bg-[#faf7f2] text-stone-900 py-8 sm:py-12 lg:py-14 overflow-hidden font-sans border-b border-stone-200 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Mobile/Tablet Fallback Header */}
        <div className="lg:hidden mb-4 flex items-center space-x-2.5">
          <span className="w-1 h-7 bg-[#ed4d0d] rounded-full" />
          <h3 className="text-base sm:text-lg font-light uppercase tracking-wider text-stone-900">
            <span className="font-extralight text-stone-900">SMARTER EXECUTION. </span>
            <span className="font-black text-[#ed4d0d]">RELIABLE OUTCOMES.</span>
          </h3>
        </div>

        {/* 2-COLUMN LAYOUT: LEFT VERTICAL ACCENT TITLE, RIGHT BEFORE/AFTER SLIDER */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-4 xl:gap-5">
          
          {/* LEFT COLUMN: OPPENHEIM DUAL VERTICAL TYPOGRAPHY */}
          <div className="hidden lg:flex items-stretch gap-2.5 lg:gap-3.5 pr-2 shrink-0 relative">
            
            {/* Far Left Vertical Line */}
            <div className="w-[1.5px] bg-[#ed4d0d] self-stretch" />

            {/* Vertical Words Container */}
            <div className="flex items-end gap-2.5 xl:gap-3.5 h-full pl-1 sm:pl-1.5 pb-1">
              
              {/* 1st Word: SMARTER EXECUTION (Thin) */}
              <span className="writing-mode-vertical text-3xl lg:text-[44px] xl:text-[48px] 2xl:text-[52px] font-extralight uppercase tracking-tight text-[#ed4d0d] select-none whitespace-nowrap leading-none">
                SMARTER EXECUTION
              </span>

              {/* 2nd Word: RELIABLE OUTCOMES (Heavy) */}
              <span className="writing-mode-vertical text-3xl lg:text-[44px] xl:text-[48px] 2xl:text-[52px] font-black uppercase tracking-tight text-[#ed4d0d] select-none whitespace-nowrap leading-none">
                RELIABLE OUTCOMES
              </span>

            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE BEFORE / AFTER SLIDER WIDGET */}
          <div className="flex-1">
            <div 
              ref={containerRef}
              onClick={handleClick}
              className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-ew-resize bg-stone-900"
            >
              
              {/* Image 2 (AFTER) - Base Layer */}
              <img 
                src="/after_packaging.jpg" 
                alt="After: High-Performance Finished Flexible Packaging Pouch" 
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Image 1 (BEFORE) - Clipped Top Layer */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              >
                <img 
                  src="/before_packaging.jpg" 
                  alt="Before: Raw Extruded Film Rolls Substrate" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* "BEFORE" Badge (Top-Left) - High z-index so line passes behind */}
              <div className="absolute top-4 left-4 z-40 px-3.5 py-1.5 rounded-lg bg-white/95 text-stone-900 text-xs font-extrabold uppercase tracking-widest shadow-md backdrop-blur-sm pointer-events-none">
                BEFORE
              </div>

              {/* "AFTER" Badge (Top-Right) - High z-index so line passes behind */}
              <div className="absolute top-4 right-4 z-40 px-3.5 py-1.5 rounded-lg bg-[#ed4d0d] text-white text-xs font-extrabold uppercase tracking-widest shadow-md pointer-events-none">
                AFTER
              </div>

              {/* ROLLABLE DRAGGABLE DIVIDER BAR */}
              <div 
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={{
                  left: `${sliderPosition}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                {/* Thin White Vertical Line */}
                <div className="w-[3px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] mx-auto" />

                {/* Central Round Slider Handle with Logo */}
                <div 
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-[2.5px] border-[#ed4d0d] shadow-[0_4px_25px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-ew-resize pointer-events-auto transition-transform duration-150 active:scale-95 hover:scale-105 p-2 overflow-hidden group"
                >
                  <img 
                    src="/logo.png" 
                    alt="AB Polypacks Logo" 
                    className="w-full h-full object-contain select-none pointer-events-none group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
