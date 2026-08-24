import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmployeeStories() {
  const testimonials = [
    {
      name: "Biswadip Basak",
      designation: "Senior Extrusion Engineer",
      image: "/employee_biswadip.jpg",
      quote: "Ensuring the precision of our multi-layer films is a daily challenge. Seeing raw polymer transition into high-integrity rolls that protect foods globally keeps my passion alive."
    },
    {
      name: "Amalin Chakraborty",
      designation: "Lead Packaging Designer",
      image: "/employee_amalin.jpg",
      quote: "We don't just design pouches; we design brand experiences. The raw flexibility of our materials allows us to push creative limits, tailoring solutions that pop on retail shelves."
    },
    {
      name: "Priyanka Ghosh",
      designation: "Quality Assurance Specialist",
      image: "/employee_priyanka.jpg",
      quote: "Quality is non-negotiable at AB Polypacks. Running continuous testing in our state-of-the-art lab gives us the data to back our integrity. The trust brands place in us is what drives me."
    },
    {
      name: "Navin Mondal",
      designation: "Operations & Plant Manager",
      image: "/employee_navin.jpg",
      quote: "Operating our 1.5 Lakh Sq. Ft. Howrah facility requires perfect coordination. Every process, from extrusion to final dispatch, is aligned for absolute efficiency and safety."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next (right-to-left), -1 = prev (left-to-right)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (idx) => {
    setIsAutoPlaying(false);
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

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

  return (
    <section 
      id="employee-stories" 
      className="relative w-full bg-white text-stone-900 py-12 sm:py-16 lg:py-20 overflow-hidden font-sans border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER (OPPENHEIM STYLE) */}
        <div className="mb-8 sm:mb-10 space-y-3">
          
          {/* Eyebrow Subtitle with Oppenheim Continuous Line & Orange Accent */}
          <div className="flex items-end mb-2">
            <div className="relative inline-flex items-end">
              <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
              
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none">
                EMPLOYEE STORIE<span className="tracking-normal [letter-spacing:0]">S</span>
              </span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 tracking-tight uppercase leading-[1.2] max-w-4xl flex flex-wrap items-center gap-x-2.5">
            <span className="font-extralight text-stone-900">PEOPLE BEHIND</span>
            <span className="font-black text-[#ed4d0d]">OUR PACKAGING</span>
          </h2>
        </div>

        {/* CAROUSEL SLIDE CONTAINER (FULL BLEED LEFT IMAGE) */}
        <div className="relative min-h-[580px] sm:min-h-[460px] lg:min-h-[400px] xl:min-h-[440px] w-full overflow-hidden bg-[#faf7f2] border border-stone-200/80 rounded-[2.5rem] shadow-sm">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 }
              }}
              className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-stretch"
            >
              {/* Left Side: Full-Bleed Large Employee Photo */}
              <div className="w-full lg:w-[50%] h-[280px] sm:h-[360px] lg:h-full shrink-0 overflow-hidden relative border-b lg:border-b-0 lg:border-r border-stone-200 bg-stone-100">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Right Side: Quote Narrative, Name & Designation */}
              <div className="w-full lg:w-[50%] p-6 sm:p-10 lg:p-12 xl:p-14 space-y-4 sm:space-y-6 flex flex-col justify-center relative bg-white">
                {/* Big Quote Watermark */}
                <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-[#ed4d0d]/10 absolute top-6 left-4 sm:top-10 sm:left-8 pointer-events-none" />
                
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-stone-900 font-medium leading-relaxed italic relative z-10 pl-2">
                  "{testimonials[currentSlide].quote}"
                </p>

                <div className="space-y-1.5 pt-4 border-t border-stone-200/60 pl-2">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-stone-950 uppercase tracking-tight leading-none">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ed4d0d]">
                    {testimonials[currentSlide].designation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS (DOTS PAGINATION + ARROWS ROW) */}
        <div className="mt-6 flex items-center justify-between px-2">
          {/* Dots Pagination */}
          <div className="flex items-center space-x-2">
            {testimonials.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-8 bg-[#ed4d0d]' 
                    : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next Arrow Controls */}
          <div className="flex items-center space-x-2.5">
            <button 
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white border border-stone-200 hover:border-[#ed4d0d] text-stone-700 hover:text-[#ed4d0d] shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Previous employee"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white border border-stone-200 hover:border-[#ed4d0d] text-stone-700 hover:text-[#ed4d0d] shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Next employee"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
