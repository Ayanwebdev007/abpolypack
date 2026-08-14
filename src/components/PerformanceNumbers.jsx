import React, { useEffect, useState, useRef } from 'react';

function AnimatedCounter({ end, duration = 1800, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    if (typeof end !== 'number') return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Elastic/Cubic Out Curve for punchy counter movement
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  if (typeof end !== 'number') {
    return <span>{prefix}{end}{suffix}</span>;
  }

  return (
    <span ref={domRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function PerformanceNumbers() {
  const stats = [
    {
      id: 'expertise',
      value: 15,
      suffix: '+',
      title: 'Years Expertise'
    },
    {
      id: 'capacity',
      value: 2000,
      suffix: '+',
      title: 'Mt per month Capacity'
    },
    {
      id: 'network',
      isText: true,
      displayValue: 'Global',
      title: 'Supply Network'
    },
    {
      id: 'manpower',
      value: 375,
      suffix: '',
      title: 'Manpower'
    }
  ];

  return (
    <section id="operational-excellence" className="relative w-full moving-orange-gradient text-white py-10 sm:py-12 lg:py-14 overflow-hidden font-sans shadow-2xl">
      
      {/* SUBTLE BRAND WATERMARK LOGO */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-[450px] select-none">
        <img 
          src="/logo.png" 
          alt="Watermark" 
          className="w-full h-auto object-contain filter brightness-0 invert" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* COMPACT CENTER ALIGNED HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase leading-tight font-light text-white/95">
            <span className="font-extralight text-white/80">THE NUMBERS BEHIND </span>
            <span className="font-black text-white drop-shadow-md">OUR PERFORMANCE</span>
          </h2>
          <div className="w-12 h-1 bg-white mx-auto mt-2.5 rounded-full opacity-90" />
        </div>

        {/* 4-COLUMN COMPACT STATS GRID - CLEAN NUMBERS DIRECTLY ON MOVING ORANGE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative flex flex-col items-center justify-center text-center p-4 sm:p-5 lg:p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 hover:scale-[1.05] cursor-pointer"
            >
              {/* Animated Stat Number */}
              <div className="relative text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-2.5 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                {stat.isText ? (
                  <span>{stat.displayValue}</span>
                ) : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                )}
              </div>

              {/* Minimal Accent Divider */}
              <div className="w-6 h-[2px] bg-white/40 group-hover:w-12 group-hover:bg-white transition-all duration-300 rounded-full mb-2" />

              {/* Title */}
              <h3 className="relative text-xs sm:text-sm lg:text-[15px] font-normal text-white/95 tracking-wide uppercase group-hover:text-white transition-colors duration-200">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
