'use client'
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particles
    if (particlesRef.current) {
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-white/30 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animation = 'floatParticle 15s infinite ease-in-out';
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#47126b] via-[#6b1a8d] to-[#8b2da8] overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(167,139,206,0.15)] via-transparent to-transparent opacity-80 animate-pulse-slow" />
      
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 py-20 max-w-4xl animate-fade-in-up">
        <h1 className="font-montserrat text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
          Un Servicio Social con Impacto
        </h1>
        <p className="text-xl md:text-2xl text-[#d4c5e8] mb-12 font-raleway animate-fade-in-up-delay-200">
          Inspirando futuras líderes tech con WitCode
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center z-10 animate-fade-in-up-delay-400">
        <svg
          onClick={scrollToAbout}
          className="w-12 h-12 text-white animate-bounce cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-up-delay-200 {
          animation: fade-in-up 1s ease-out 0.2s both;
        }

        .animate-fade-in-up-delay-400 {
          animation: fade-in-up 1s ease-out 0.4s both;
        }

        .animate-pulse-slow {
          animation: pulse 10s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;