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
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
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
      <div 
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides Container */}
        <div className="relative h-[550px] md:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-600 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={slide.url}
                alt="WitCode carousel"
                className="w-full h-full object-cover"
              />

              {/* Purple Tint Overlay */}
              <div className="absolute inset-0 bg-[rgba(71,18,107,0.15)]" />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center hover:bg-[#47126b] hover:scale-110 transition-all duration-300 shadow-lg z-10 group"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#47126b] group-hover:text-white"/>
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center hover:bg-[#47126b] hover:scale-110 transition-all duration-300 shadow-lg z-10 group"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#47126b] group-hover:text-white"/>
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 1000);
            }}
            className={`relative transition-all duration-400 ${
              index === currentSlide ? 'w-3 h-3 scale-125' : 'w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-full h-full rounded-full transition-all duration-400 ${
              index === currentSlide ? 'bg-[#911876]' : 'bg-[rgba(145,24,118,0.3)]'
            }`} />
            {index === currentSlide && (
              <div className="absolute inset-0 -m-2 rounded-full bg-[rgba(145,24,118,0.2)] animate-ping" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselServicioSocial;