'use client'
import React, { useState, useEffect, useRef } from 'react';

const CarouselServicioSocial = () => {
  const slides = [
    {
      url: 'images/serviciosocial/servicio_social_carousel1.JPG'
    },
    {
      url: 'images/serviciosocial/servicio_social_carousel2.JPG'
    },
    {
      url: 'images/serviciosocial/servicio_social_carousel3.JPG'
    },
    {
      url: 'images/serviciosocial/servicio_social_carousel4.JPG'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide, isAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  const handlePrev = () => {
    prevSlide();
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 1000);
  };

  const handleNext = () => {
    nextSlide();
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 1000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Carousel Container with Gradient Border */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-br from-[#6411AD] via-[#B49CFF] to-[#ff5795] shadow-2xl">
        <div
          className="relative rounded-3xl overflow-hidden bg-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slides Container */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;
              const isNext = index === (currentSlide + 1) % slides.length;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isActive
                      ? 'opacity-100 translate-x-0 scale-100 z-10'
                      : direction === 'right'
                      ? isNext
                        ? 'opacity-0 translate-x-full scale-95'
                        : 'opacity-0 -translate-x-full scale-95'
                      : isPrev
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={`WitCode carousel ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle Purple Tint Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#47126b]/20 via-transparent to-transparent" />
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons - Enhanced */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#47126b] hover:to-[#6411AD] hover:scale-110 transition-all duration-300 shadow-xl z-20 group border-2 border-white/50"
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#6411AD] group-hover:text-white transition-colors"/>
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#47126b] hover:to-[#6411AD] hover:scale-110 transition-all duration-300 shadow-xl z-20 group border-2 border-white/50"
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#6411AD] group-hover:text-white transition-colors"/>
            </svg>
          </button>

          {/* Slide Counter */}
          <div className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 1000);
            }}
            className={`relative transition-all duration-400 rounded-full overflow-hidden ${
              index === currentSlide ? 'w-12 h-3' : 'w-3 h-3 hover:w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-full h-full transition-all duration-400 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-[#6411AD] to-[#ff5795]'
                : 'bg-[#c6c8ee] hover:bg-[#B49CFF]'
            }`} />
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#6411AD] to-[#ff5795] animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselServicioSocial;