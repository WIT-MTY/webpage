'use client'

import React, { useRef, useEffect, useState } from 'react';

export default function SponsorsCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {

        setIsPaused(true);

        if (scrollTimeout) {
        clearTimeout(scrollTimeout);
        }

        const timeout = setTimeout(() => {
        setIsPaused(false);
        }, 1000);

        setScrollTimeout(timeout);

      // Resetear scroll cuando llega al final
        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0;
        }
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        if (scrollTimeout) clearTimeout(scrollTimeout);
    };
    }, [scrollTimeout]);

    const logos: { src: string; alt: string }[] = [
        { src: "/images/LOGO_ARCA.png", alt: "Arca Continental" },
        { src: "/images/aliados/muchored_logo-removebg-preview.png", alt: "Mucho Red" },
        { src: "/images/aliados/LEGO.png", alt: "LEGO" },
        { src: "/images/aliados/Apex-systems.png", alt: "Apex Systems" },
        { src: "/images/aliados/Steelcase.png", alt: "Steelcase" },
        { src: "/images/aliados/interius_logo_azul.png", alt: "Interius" },
        { src: "/images/aliados/Carrier_logo.png", alt: "Carrier" },
        { src: "/images/aliados/Microplus_fondo-removebg-preview.png", alt: "Microplus" },
        { src: "/images/aliados/csoftmty_logo.png", alt: "CsoftMty" },
        { src: "/images/aliados/upnow_logo2.png", alt: "Upnow" },
        { src: "/images/aliados/clarios-logo2.png", alt: "Clarios" },
    ];

    return (
    <div className="w-full bg-white py-16 overflow-x-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Nuestros <span className="text-[#4703a6]">Patrocinadores</span>
        </h2>
      {/* Contenedor del carrusel infinito */}
        <div className="relative w-full">
        {/* Gradientes en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Carrusel - CON scroll manual */}
        <div 
            ref={scrollRef}
        className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing"
        >
            <div className={`flex ${!isPaused ? 'animate-scroll-infinite' : ''}`}>
            {/* Repetimos los logos 3 veces para el efecto infinito */}
            {[1, 2, 3].map((group) => (
                <div key={group} className="flex items-center gap-10 px-8 shrink-0">
                {logos.map((logo, idx) => (
                    <div 
                    key={`${group}-${idx}`}
                    className="w-32 md:w-40 h-20 md:h-28 flex items-center justify-center"
                    >
                    <img 
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full w-auto h-auto object-contain hover:scale-110 transition-transform duration-300 pointer-events-none select-none"
                        draggable="false"
                    />
                    </div>
                ))}
                </div>
            ))}
            </div>
        </div>
        </div>

        <style jsx>{`
        @keyframes scroll-infinite {
            0% {
            transform: translateX(0);
            }
            100% {
            transform: translateX(calc(-100% / 3));
            }
        }
        
        .animate-scroll-infinite {
            animation: scroll-infinite 50s linear infinite;
        }

        /* Ocultar scrollbar pero mantener funcionalidad */
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        `}</style>
    </div>
    );
}