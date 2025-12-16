'use client'
import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ alumnas: 0, tutores: 0, permanencia: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: 'alumnas', target: 94, label: 'Alumnas participantes', suffix: '' },
    { key: 'tutores', target: 76, label: 'Tutores en servicio social', suffix: '' },
    { key: 'permanencia', target: 90, label: 'Tasa de permanencia', suffix: '%' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat) => {
      let currentCount = 0;
      const increment = stat.target / steps;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.target) {
          setCounts((prev) => ({ ...prev, [stat.key]: stat.target }));
          clearInterval(timers[stats.indexOf(stat)]);
        } else {
          setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(currentCount) }));
        }
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
    >
      <div className="container mx-auto px-5">
        <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-[#47126b] to-[#911876] bg-clip-text text-transparent">
          Nuestro Impacto
        </h2>
        <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
          En cifras totales del 2024
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-10 bg-gradient-to-br from-[#47126b] to-[#911876] rounded-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-400 shadow-lg hover:shadow-2xl relative overflow-hidden"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.2}s both` : 'none'
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />

              <div className="relative z-10">
                <div className="font-montserrat text-6xl md:text-7xl font-extrabold text-white mb-3">
                  {counts[stat.key as keyof typeof counts]}{stat.suffix}
                </div>
                <div className="text-white/90 text-lg font-semibold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;