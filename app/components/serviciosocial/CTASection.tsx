'use client'
import React from 'react';

const CTASection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#5a1a7a] via-[#7d2b9e] to-[#911876] text-white text-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute w-[500px] h-[500px] bg-radial-gradient from-[rgba(167,139,206,0.3)] to-transparent -top-52 -right-52 animate-float" />

      <div className="container mx-auto px-5 relative z-10">
        <h2 className="font-montserrat text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          ¡Únete a la comunidad WitCode!
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
          Ayúdanos a disminuir la brecha de género. Apoya e impulsa a las futuras mujeres de México en tech.
        </p>

        <p className="text-xl">
          ¿Tienes dudas? Escríbenos o síguenos en Instagram <a href="https://instagram.com/witcode.mty" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#d4c5e8] transition-colors">@witcode.mty</a>
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-50px, 50px);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .bg-radial-gradient {
          background: radial-gradient(circle, rgba(167, 139, 206, 0.3) 0%, transparent 70%);
        }
      `}</style>
    </section>
  );
};

export default CTASection;