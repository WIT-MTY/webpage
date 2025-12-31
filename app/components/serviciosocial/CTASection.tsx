'use client'
import React from 'react';

const CTASection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#47126b] via-[#6411AD] to-[#47126b] text-white text-center overflow-hidden">
      {/* Animated Background blobs */}
      <div className="absolute w-[500px] h-[500px] bg-radial-gradient from-[#B49CFF]/30 to-transparent -top-52 -right-52 animate-float" />
      <div className="absolute w-[400px] h-[400px] bg-radial-gradient from-[#ff5795]/20 to-transparent -bottom-32 -left-32 animate-float-delayed" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
          <span className="text-[#B49CFF] font-semibold text-sm tracking-wider uppercase">Únete al equipo</span>
        </div>

        <h2 className="font-montserrat text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          ¡Únete a la comunidad <span className="bg-gradient-to-r from-[#B49CFF] to-[#ff5795] bg-clip-text text-transparent">WitCode</span>!
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-[#c6c8ee] leading-relaxed">
          Ayúdanos a disminuir la brecha de género. Apoya e impulsa a las futuras mujeres de México en tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://instagram.com/witcode.mty"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#6411AD] rounded-full font-bold hover:bg-[#B49CFF] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Síguenos en Instagram
          </a>
        </div>

        <p className="text-[#c6c8ee]">
          ¿Tienes dudas? Escríbenos a <a href="https://instagram.com/witcode.mty" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#ff5795] transition-colors">@witcode.mty</a>
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

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, -50px);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .bg-radial-gradient {
          background: radial-gradient(circle, currentColor 0%, transparent 70%);
        }
      `}</style>
    </section>
  );
};

export default CTASection;