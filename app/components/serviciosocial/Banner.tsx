'use client'
import React, { useEffect, useRef } from 'react';

const Banner = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Img de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/serviciosocial/abajo_de_que_es_witcode.JPG)' }}
      />

      {/* Overlay oscuro*/}
      <div className="absolute inset-0 bg-gradient-to-br from-[#47126b]/70 via-[#6411AD]/65 to-[#47126b]/70" />

      {/* Otro overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Gradiente radial anim */}
      <div className="absolute inset-0 bg-gradient-radial from-[#B49CFF]/20 via-transparent to-transparent opacity-80 animate-pulse-slow" />

      {/* Figs decorativas */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#ff5795]/10 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-[#B49CFF]/15 blur-3xl animate-float-delayed" />

      {/* Particulas */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-5 py-20 max-w-4xl animate-fade-in-up">
        <h1 className="font-montserrat text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl leading-tight">
          Un Servicio Social con <span className="bg-gradient-to-r from-[#B49CFF] to-[#ff5795] bg-clip-text text-transparent">Impacto</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-raleway animate-fade-in-up-delay-200 leading-relaxed">
          Inspirando futuras líderes tech con WitCode
        </p>
        <div className="flex gap-4 justify-center items-center animate-fade-in-up-delay-400">
          <div className="flex items-center gap-2 text-white/90">
            <svg className="w-5 h-5 text-[#ff5795]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
            </svg>
            <span className="text-sm">94 Alumnas</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50" />
          <div className="flex items-center gap-2 text-white/90">
            <svg className="w-5 h-5 text-[#B49CFF]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <span className="text-sm">76 Tutores</span>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-40px) translateX(20px);
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

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
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

export default Banner;
