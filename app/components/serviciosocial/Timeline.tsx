'use client'
import React from 'react';

const Timeline = () => {
  const timelineItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-white">
          <rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke="white" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2"/>
          <circle cx="8" cy="15" r="1" fill="white"/>
          <circle cx="12" cy="15" r="1" fill="white"/>
          <circle cx="16" cy="15" r="1" fill="white"/>
        </svg>
      ),
      title: "Sesiones Semanales",
      items: [
        "Sábados a las 10:00 AM",
        "Duración aproximada: 2.5 horas",
        "Formato híbrido: tutores presenciales, alumnas pueden estar en línea"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-white">
          <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="2"/>
          <polyline points="12 6 12 12 16 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Estructura de Sesión",
      items: [
        "10:00 AM - Inicio conjunto y presentación del módulo",
        "12:00 PM - Equipos pequeños para retos prácticos",
        "12:30 PM - Presentación de proyectos por equipos",
        "Sistema de gamificación: equipos acumulan puntos"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-white">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="2" cy="6" r="1" fill="white"/>
          <circle cx="2" cy="12" r="1" fill="white"/>
          <circle cx="2" cy="18" r="1" fill="white"/>
        </svg>
      ),
      title: "Dos Niveles",
      content: (
        <>
          <p className="mb-3">
            <strong>Principiantes:</strong> Para alumnas nuevas. Algoritmos y diagramas de flujo, Scratch, Java y Python básico.
          </p>
          <p>
            <strong>Avanzadas:</strong> Para alumnas con experiencia. Programación Orientada a Objetos en Python, Ciencia de Datos, HTML y CSS, Javascript, Introducción a APIs.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="relative py-10">
      {timelineItems.map((item, index) => (
        <div key={index} className="flex gap-8 mb-12 last:mb-0 relative group opacity-0 -translate-x-12 animate-slide-in" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}>
          {/* Vertical Line */}
          {index !== timelineItems.length - 1 && (
            <div className="absolute left-10 top-20 w-0.5 h-[calc(100%+3rem)] bg-gradient-to-b from-[#911876] to-[#c6c8ee]" />
          )}

          {/* Icon Circle */}
          <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#47126b] to-[#911876] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#911876] to-[#ff2871] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="relative z-10">{item.icon}</div>
          </div>

          {/* Content Card */}
          <div className="flex-1 bg-white rounded-2xl p-8 border-l-4 border-[#911876] shadow-lg group-hover:translate-x-3 group-hover:shadow-xl transition-all duration-400">
            <h3 className="font-montserrat text-2xl font-bold text-[#47126b] mb-4">
              {item.title}
            </h3>
            {item.items ? (
              <ul className="space-y-3">
                {item.items.map((listItem, idx) => (
                  <li key={idx} className="relative pl-6 text-slate-600 leading-relaxed group/item hover:pl-8 hover:text-[#911876] transition-all duration-300">
                    <span className="absolute left-0 text-[#911876] font-bold group-hover/item:translate-x-1 transition-transform">▸</span>
                    {listItem}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-slate-600 leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes slide-in {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Timeline;