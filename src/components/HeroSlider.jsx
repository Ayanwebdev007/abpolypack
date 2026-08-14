import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight,
  Globe,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Mail
} from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  // 2 available video clips from document
  const slides = [
    {
      id: 1,
      caption: 'We Engineer What Brands Trust',
      mediaUrl: '/3rd-clip.mp4',
      videoRef: videoRef1
    },
    {
      id: 2,
      caption: 'Innovation Built into Every Pack',
      mediaUrl: '/4th-clip.mp4',
      videoRef: videoRef2
    }
  ];

  // Auto-advance logic (6 seconds per slide)
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      const step = 100;
      const duration = 6000;
      const increment = (step / duration) * 100;

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentSlide((curr) => (curr + 1) % slides.length);
            return 0;
          }
          return prev + increment;
        });
      }, step);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide, slides.length]);

  // Sync video play states
  useEffect(() => {
    slides.forEach((slide, index) => {
      if (slide.videoRef?.current) {
        if (index === currentSlide && isPlaying) {
          slide.videoRef.current.play().catch(() => {});
        } else {
          slide.videoRef.current.pause();
        }
      }
    });
    setProgress(0);
  }, [currentSlide, isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const current = slides[currentSlide];

  // Social / Contact vertical icons matching Oppenheim Group reference style
  const socialIcons = [
    { icon: Globe, label: 'Website', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Contact Email', href: 'mailto:info@abpolypacks.com' }
  ];

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] max-h-[1080px] bg-black overflow-hidden flex flex-col justify-between font-sans">
      
      {/* Full-Bleed Video Media Layers */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="relative w-full h-full">
              <video
                ref={slide.videoRef}
                src={slide.mediaUrl}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Subtle Soft Black Gradient Transition from Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        ))}
      </div>

      {/* LEFT SIDE: VERTICAL SOCIAL / CONTACT ICONS (OPPENHEIM STYLE - TIGHT TO LEFT EDGE) */}
      <div className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center space-y-4">
        {socialIcons.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              title={item.label}
              className="p-1.5 text-white/70 hover:text-[#ed4d0d] hover:scale-110 transition-all duration-200"
              aria-label={item.label}
            >
              <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
            </a>
          );
        })}
      </div>

      {/* BOTTOM-RIGHT CORNER CAPTION & CONTROLS ONLY - FULL RIGHT ALIGNMENT */}
      <div className="relative z-20 h-full w-full px-4 sm:px-8 lg:px-10 flex flex-col items-end justify-end pb-8 sm:pb-12 pointer-events-none">
        <div className="max-w-none space-y-3 text-right pointer-events-auto flex flex-col items-end">
          
          {/* Slide Indicator Badge */}
          <div className="flex items-center space-x-3 text-xs font-semibold text-white/80 tracking-widest uppercase">
            <span>0{slides.length}</span>
            <span className="w-8 h-[1.5px] bg-white/40"></span>
            <span className="text-[#ed4d0d] font-bold text-sm">0{currentSlide + 1}</span>
          </div>

          {/* Caption Headline (Bottom Right Corner - Crisp White Text over Black Fade) */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight whitespace-nowrap drop-shadow-md">
            {current.caption}
          </h1>

          {/* Controls & Slide Indicators */}
          <div className="pt-2 flex items-center justify-end space-x-6 w-full">
            
            {/* Slide Progress Bar */}
            <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#ed4d0d] transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Prev / Next & Pause Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-black/40 border border-white/20 text-white hover:border-[#ed4d0d] hover:text-[#ed4d0d] transition-colors backdrop-blur-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-full bg-black/40 border border-white/20 text-[#ed4d0d] hover:border-[#ed4d0d] transition-colors backdrop-blur-md"
                aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-black/40 border border-white/20 text-white hover:border-[#ed4d0d] hover:text-[#ed4d0d] transition-colors backdrop-blur-md"
                aria-label="Next slide"
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
