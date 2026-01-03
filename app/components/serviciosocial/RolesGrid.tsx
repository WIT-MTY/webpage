'use client'
import React from 'react';

const RolesGrid = () => {
  const roles = [
    {
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" stroke="currentColor">
          {/* Grupo de personas/equipo para Coordinadores */}
          <circle cx="9" cy="7" r="3" strokeWidth="2"/>
          <circle cx="15" cy="7" r="3" strokeWidth="2"/>
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeWidth="2"/>
          <path d="M13 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" strokeWidth="2"/>
        </svg>
      ),
      title: "Coordinadores",
      description: "Organizan las sesiones, gestionan equipos y aseguran el correcto funcionamiento del programa."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" stroke="currentColor">
          {/* Persona presentando/enseñando para Instructores */}
          <circle cx="9" cy="7" r="4" strokeWidth="2"/>
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeWidth="2"/>
          <rect x="16" y="4" width="6" height="8" rx="1" strokeWidth="2"/>
          <path d="M16 16l3-2 3 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Instructores",
      description: "Preparan y presentan el módulo asignado, guían a las alumnas durante los retos prácticos."
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {roles.map((role, index) => (
        <div
          key={index}
          className="group bg-white rounded-3xl p-10 text-center border-2 border-[#c6c8ee]/40 hover:border-[#6411AD] transition-all duration-400 shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-105 relative overflow-hidden"
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6411AD]/5 to-[#ff5795]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#B49CFF]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Icon Container */}
          <div className="relative z-10 mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#6411AD]/10 to-[#B49CFF]/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#47126b] group-hover:to-[#6411AD] transition-all duration-500 group-hover:rotate-[360deg] shadow-md">
            <div className="text-[#6411AD] group-hover:text-white transition-colors duration-400">
              {role.icon}
            </div>
          </div>

          {/* Title */}
          <h4 className="relative z-10 font-montserrat text-2xl font-bold text-[#47126b] mb-4 group-hover:text-[#6411AD] transition-colors">
            {role.title}
          </h4>

          {/* Description */}
          <p className="relative z-10 text-[#2e2d2d] leading-relaxed">
            {role.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RolesGrid;