import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BeforeAfterComparison() {
  const sets = [
    {
      id: 0,
      title: "EXTRUDED SUBSTRATES TO POUCHES",
      before: "/before_packaging.webp",
      after: "/after_packaging.webp",
      label: "Substrate vs. Finished Pouch"
    },
    {
      id: 1,
      title: "PLAIN FOIL TO CUSTOM PRINTED POUCHES",
      before: "/before_foil_pouch.webp",
      after: "/after_foil_pouch.webp",
      label: "Plain vs. Printed Pouch"
    },
    {
      id: 2,
      title: "RAW POLYMER RESIN TO PRECISION FILM ROLLS",
      before: "/before_resin.webp",
      after: "/after_resin.webp",
      label: "Resin vs. Finished Film"
    }
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next (right-to-left), -1 = prev (left-to-right)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  // Autoplay effect to rotate sets
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSet((prev) => (prev + 1) % sets.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging, sets.length]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : dir < 0 ? "-100%" : 0,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? "100%" : dir > 0 ? "-100%" : 0,
      opacity: 0
    })
  };

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
          <div className="flex-1 relative group/slider">
            <div 
              ref={containerRef}
              onClick={handleClick}
              className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-ew-resize bg-stone-900"
            >
              
              {/* Animated Set Wrapper with Bidirectional Slide */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentSet}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.25 }
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  {/* Image 2 (AFTER) - Base Layer */}
                  <img 
                    src={sets[currentSet].after} 
                    alt={`After: ${sets[currentSet].title}`} 
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
                      src={sets[currentSet].before} 
                      alt={`Before: ${sets[currentSet].title}`} 
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* "BEFORE" Badge (Top-Left) */}
              <div className="absolute top-4 left-4 z-40 px-3.5 py-1.5 rounded-lg bg-white/95 text-stone-900 text-xs font-extrabold uppercase tracking-widest shadow-md backdrop-blur-sm pointer-events-none">
                BEFORE
              </div>



              {/* "AFTER" Badge (Top-Right) */}
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
                    src="/logo.webp" 
                    alt="AB Polypacks Logo" 
                    className="w-full h-full object-contain select-none pointer-events-none group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </div>

            </div>

            {/* Bottom Nav Row (Arrows + Dots) */}
            <div className="mt-5 flex items-center justify-center space-x-5">
              {/* Prev Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAutoPlaying(false);
                  setDirection(-1);
                  setCurrentSet((prev) => (prev - 1 + sets.length) % sets.length);
                }}
                className="p-2.5 rounded-lg bg-white border border-stone-200 hover:border-[#ed4d0d] text-stone-700 hover:text-[#ed4d0d] shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Previous image set"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots indicators */}
              <div className="flex items-center space-x-2">
                {sets.map((set, idx) => (
                  <button
                    key={set.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAutoPlaying(false);
                      setDirection(idx > currentSet ? 1 : -1);
                      setCurrentSet(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSet === idx 
                        ? 'w-7 bg-[#ed4d0d]' 
                        : 'w-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAutoPlaying(false);
                  setDirection(1);
                  setCurrentSet((prev) => (prev + 1) % sets.length);
                }}
                className="p-2.5 rounded-lg bg-white border border-stone-200 hover:border-[#ed4d0d] text-stone-700 hover:text-[#ed4d0d] shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Next image set"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
