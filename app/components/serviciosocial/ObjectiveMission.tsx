'use client'
import React from 'react';

const ObjectiveMission = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Objetivo Card */}
      <div className="group bg-white rounded-3xl p-12 border-2 border-[#e8e0f5] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#911876] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5a1a7a] via-[#7d2b9e] to-[#911876] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-[rgba(145,24,118,0.1)] to-transparent rounded-full scale-0 group-hover:scale-100 transition-transform duration-600" />
        
        <h3 className="relative z-10 font-montserrat text-3xl font-bold text-[#47126b] mb-4">
          Objetivo
        </h3>
        <p className="relative z-10 text-slate-600 text-base leading-relaxed">
          Atender la brecha de género en la tecnología brindando herramientas educativas que nivelen 
          las oportunidades de manera igualitaria en este ámbito.
        </p>
      </div>

      {/* Misión Card */}
      <div className="group bg-white rounded-3xl p-12 border-2 border-[#e8e0f5] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#911876] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5a1a7a] via-[#7d2b9e] to-[#911876] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-[rgba(145,24,118,0.1)] to-transparent rounded-full scale-0 group-hover:scale-100 transition-transform duration-600" />
        
        <h3 className="relative z-10 font-montserrat text-3xl font-bold text-[#47126b] mb-4">
          Misión
        </h3>
        <p className="relative z-10 text-slate-600 text-base leading-relaxed">
          Promover e inspirar el uso de la tecnología mediante talleres prácticos y dinámicos 
          dirigidos a alumnas de 1° a 3° de secundaria de la escuela Ciudad de los Niños.
        </p>
      </div>
    </div>
  );
};

export default ObjectiveMission;