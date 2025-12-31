'use client'
import React from 'react';

const ObjectiveMission = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Objetivo Card */}
      <div className="group bg-white rounded-3xl p-10 border-2 border-[#c6c8ee]/40 hover:border-[#6411AD] transition-all duration-400 shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6411AD]/5 to-[#ff5795]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#B49CFF]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Icon Container */}
        <div className="relative z-10 mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#6411AD]/10 to-[#B49CFF]/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#47126b] group-hover:to-[#6411AD] transition-all duration-500 group-hover:rotate-[360deg] shadow-md">
          <div className="text-[#6411AD] group-hover:text-white transition-colors duration-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h4 className="relative z-10 font-montserrat text-2xl font-bold text-[#47126b] mb-4 group-hover:text-[#6411AD] transition-colors">
          Objetivo
        </h4>

        {/* Description */}
        <p className="relative z-10 text-[#2e2d2d] leading-relaxed text-left">
          Atender la brecha de género en la tecnología brindando herramientas educativas que nivelen
          las oportunidades de manera igualitaria en este ámbito.
        </p>
      </div>

      {/* Misión Card */}
      <div className="group bg-white rounded-3xl p-10 border-2 border-[#c6c8ee]/40 hover:border-[#6411AD] transition-all duration-400 shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6411AD]/5 to-[#ff5795]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#B49CFF]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Icon Container */}
        <div className="relative z-10 mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#6411AD]/10 to-[#B49CFF]/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#47126b] group-hover:to-[#6411AD] transition-all duration-500 group-hover:rotate-[360deg] shadow-md">
          <div className="text-[#6411AD] group-hover:text-white transition-colors duration-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h4 className="relative z-10 font-montserrat text-2xl font-bold text-[#47126b] mb-4 group-hover:text-[#6411AD] transition-colors">
          Misión
        </h4>

        {/* Description */}
        <p className="relative z-10 text-[#2e2d2d] leading-relaxed text-left">
          Promover e inspirar el uso de la tecnología mediante talleres prácticos y dinámicos
          dirigidos a alumnas de 1° a 3° de secundaria de la escuela Ciudad de los Niños.
        </p>
      </div>
    </div>
  );
};

export default ObjectiveMission;