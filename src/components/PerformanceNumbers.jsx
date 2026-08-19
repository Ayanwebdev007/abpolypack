import React, { useEffect, useState, useRef } from 'react';

function AnimatedCounter({ end, duration = 1800, suffix = '', unit = '', prefix = '' }) {
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
    return (
      <span>
        {prefix}{end}{suffix}
        {unit && <span className="text-xl sm:text-2xl lg:text-3xl font-bold ml-1.5 opacity-90">{unit}</span>}
      </span>
    );
  }

  return (
    <span ref={domRef} className="inline-flex items-baseline">
      {prefix}{count.toLocaleString()}{suffix}
      {unit && <span className="text-xl sm:text-2xl lg:text-3xl font-bold ml-1.5 opacity-90">{unit}</span>}
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
      unit: 'MT',
      title: 'Per Month Capacity'
    },
    {
      id: 'network',
      isText: true,
      displayValue: 'Global',
      title: 'Supply Network'
    },
    {
      id: 'professionals',
      value: 375,
      suffix: '+',
      title: 'Professionals'
    }
  ];

  return (
    <section id="operational-excellence" className="relative w-full moving-orange-gradient text-white py-10 sm:py-12 lg:py-14 overflow-hidden font-sans shadow-2xl">
      

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
              <div className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none mb-3 drop-shadow-md group-hover:scale-105 transition-transform duration-300 flex items-baseline justify-center whitespace-nowrap">
                {stat.isText ? (
                  <span>{stat.displayValue}</span>
                ) : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} unit={stat.unit} />
                )}
              </div>

              {/* Minimal Accent Divider */}
              <div className="w-8 h-[2px] bg-white/40 group-hover:w-14 group-hover:bg-white transition-all duration-300 rounded-full mb-2.5" />

              {/* Title */}
              <h3 className="relative text-sm sm:text-base font-medium text-white/90 tracking-wider uppercase group-hover:text-white transition-colors duration-200">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
