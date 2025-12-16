'use client'
import React from 'react';

const BenefitsList = () => {
  const benefits = [
    {
      title: "Horas oficiales de servicio social",
      description: "Cumple con tu servicio mientras generas impacto real"
    },
    {
      title: "Desarrollo de habilidades",
      description: "Liderazgo, comunicación, enseñanza y trabajo en equipo"
    },
    {
      title: "Impacto en la comunidad",
      description: "Contribuye a cerrar la brecha de género en tech"
    },
    {
      title: "Networking",
      description: "Conecta con mujeres apasionadas por la tecnología"
    },
    {
      title: "Refuerza tus conocimientos",
      description: "Repasa y profundiza temas técnicos al enseñarlos"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="group flex gap-5 p-6 bg-white rounded-2xl border-l-4 border-[#911876] shadow-lg hover:shadow-xl hover:translate-x-3 transition-all duration-400 relative overflow-hidden"
        >
          {/* Animated border effect */}
          <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-[#47126b] to-[#ff2871] group-hover:h-full transition-all duration-400" />

          {/* Check Icon */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#47126b] to-[#911876] flex items-center justify-center group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-400">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <strong className="block text-[#47126b] font-bold mb-1 group-hover:text-[#911876] transition-colors">
              {benefit.title}
            </strong>
            <p className="text-slate-600 text-sm">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;