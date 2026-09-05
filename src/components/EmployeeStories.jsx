import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmployeeStories() {
  const testimonials = [
    {
      name: "Priyanka Ghosh",
      designation: "Marketing Manager",
      image: "/employee_priyanka.jpg",
      quote: "“What makes AB Polypacks feel different is the sense that everyone is part of the journey.” You don’t feel like you are working on something separate from the bigger picture. Whether you are dealing with a customer, developing an idea or solving an everyday challenge, you can see how your work connects with what the organisation is trying to achieve. There is also a strong willingness to collaborate. People bring different strengths to the table, and that often leads to outcomes that are better than what any one person could have created alone. I’ve grown professionally through that experience, but I’ve also learned the value of listening, adapting and trusting the people around you. For me, that’s the real culture at AB Polypacks: We grow as individuals, and we move forward together."
    },
    {
      name: "Ranajit Dey",
      designation: "Production Planning Head",
      image: "/employee_biswadip.jpg",
      quote: "“The most satisfying part of my job is seeing a plan turn into something real.” You start with a requirement, a deadline and a set of constraints. Then the real work begins. You coordinate with different teams, make adjustments, solve bottlenecks and keep everyone aligned. Some days go exactly to plan. Others definitely don't. But that is where teamwork matters. At AB Polypacks, I’ve found that people are willing to communicate openly and take responsibility. That makes it much easier to respond when priorities shift or a challenge comes up unexpectedly. “For me, planning is ultimately about creating confidence — confidence that the right work will happen at the right time, and that the team is ready when it matters.”"
    },
    {
      name: "Nabin Mondal",
      designation: "Supply Chain Head",
      image: "/employee_amalin.jpg",
      quote: "“For us, a customer commitment starts much earlier than production.” It starts with knowing what we need, when we need it and where it needs to come from. My role is to make sure the supply chain is prepared—from sourcing and inventory to coordination with production and timely dispatch. What I value at AB Polypacks is the amount of collaboration involved. Supply chain cannot work in isolation. You have to understand what production needs, what customers expect and where potential challenges might arise. That means staying alert, communicating early and solving issues before they become problems. “The best supply chain is the one that makes everything feel effortless to the customer.”"
    },
    {
      name: "Dr Aroop Mondal",
      designation: "R&D Manager",
      image: "/employee_navin.jpg",
      quote: "“A difficult requirement is usually where the interesting work begins.” When a customer asks for something better — more protection, lower material use, improved efficiency or a different performance characteristic — our first response shouldn't be to say, “that's difficult”. It should be: “Let's understand why.” That is how I approach R&D at AB Polypacks. We study the requirement, explore materials and structures, test different approaches and work closely with production and quality teams to make sure the final solution is practical and repeatable. What I value most is seeing technical work create a real business outcome. “When an idea leaves the lab and starts making a difference for a customer, that's when research becomes meaningful.”"
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
    }, 6000);
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
        <div className="relative min-h-[580px] sm:min-h-[480px] lg:min-h-[420px] xl:min-h-[440px] w-full overflow-hidden bg-[#faf7f2] border border-stone-200/80 rounded-[2.5rem] shadow-sm">
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
              <div className="w-full lg:w-[50%] h-[260px] sm:h-[320px] lg:h-full shrink-0 overflow-hidden relative border-b lg:border-b-0 lg:border-r border-stone-200 bg-stone-100">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Right Side: Quote Narrative, Name & Designation */}
              <div className="w-full lg:w-[50%] p-6 sm:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-5 flex flex-col justify-center relative bg-white">
                {/* Big Quote Watermark */}
                <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-[#ed4d0d]/10 absolute top-6 left-4 sm:top-8 sm:left-8 pointer-events-none" />
                
                <p className="text-xs sm:text-sm lg:text-[14.5px] xl:text-[15.5px] text-stone-900 font-medium leading-relaxed italic relative z-10 pl-2">
                  "{testimonials[currentSlide].quote}"
                </p>

                <div className="space-y-1.5 pt-3 border-t border-stone-200/60 pl-2">
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
