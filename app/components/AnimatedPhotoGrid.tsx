"use client";

import { useState, useEffect } from 'react';

export default function AnimatedPhotoGrid() {
  const allPhotos: string[] = [
    '/images/wit25.JPG',
    '/images/proyectos/JTI24_3.JPG',
    '/images/reto1.jpeg',
    '/images/witcode1.JPG',
    '/images/witcode2.JPG',
    '/images/proyectos/Desayuno8_1.JPG',
    '/images/proyectos/Desayuno8_2.JPG',
    '/images/proyectos/JTI24_5.JPG',
    '/images/proyectos/JTI24_2.JPG',
    '/images/proyectos/proy1.jpg',
    '/images/proyectos/proy5.jpg',
    '/images/proyectos/proy7.jpg',
    '/images/proyectos/proy9.jpg',
    '/images/proyectos/proy10.jpg',
    '/images/_DSC0002.JPG',
    '/images/_DSC0015.JPG',
    '/images/_DSC0022.JPG',
    '/images/_DSC0024.JPG',
    '/images/H4HPREMIOS-20.jpg',
    '/images/H4HPREMIOS-33.jpg',
    '/images/IMG_9526.JPG',
    '/images/@andyegch-1234.jpg',
    '/images/@andyegch-1272.jpg',
    '/images/@andyegch-1295.jpg',
    '/images/IMG_3512.JPG',
    '/images/IMG_3499.JPG',
    '/images/IMG_0778.JPG',
    '/images/IMG_3478.JPG',
    '/images/IMG_0725.JPG',
    '/images/IMG_0662.JPG',
  ];

  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const shuffled: string[] = [...allPhotos].sort(() => Math.random() - 0.5);
    const selected: string[] = [];
    
    while (selected.length < 50) {
      selected.push(...shuffled);
    }
    
    setPhotos(selected.slice(0, 50));
  }, []);

  const positions = [
    // Fila 1 - arriba
    { top: '3%', left: '0%', rotate: -5, size: 'w-56 h-44', zIndex: 12 },
    { top: '6%', left: '10%', rotate: 3, size: 'w-60 h-48', zIndex: 15 },
    { top: '2%', left: '20%', rotate: -2, size: 'w-56 h-44', zIndex: 10 },
    { top: '5%', left: '30%', rotate: 4, size: 'w-64 h-52', zIndex: 14 },
    { top: '3%', left: '41%', rotate: -3, size: 'w-56 h-44', zIndex: 11 },
    { top: '6%', left: '51%', rotate: 5, size: 'w-60 h-48', zIndex: 13 },
    { top: '4%', left: '61%', rotate: -4, size: 'w-56 h-44', zIndex: 16 },
    { top: '2%', left: '71%', rotate: 3, size: 'w-60 h-48', zIndex: 9 },
    { top: '5%', left: '81%', rotate: -5, size: 'w-56 h-44', zIndex: 14 },
    { top: '3%', left: '91%', rotate: 4, size: 'w-60 h-48', zIndex: 12 },
    
    // Fila 2
    { top: '22%', left: '1%', rotate: 4, size: 'w-60 h-48', zIndex: 14 },
    { top: '19%', left: '11%', rotate: -3, size: 'w-56 h-44', zIndex: 12 },
    { top: '24%', left: '21%', rotate: 5, size: 'w-64 h-52', zIndex: 15 },
    { top: '20%', left: '32%', rotate: -2, size: 'w-56 h-44', zIndex: 10 },
    { top: '23%', left: '42%', rotate: 3, size: 'w-60 h-48', zIndex: 13 },
    { top: '21%', left: '52%', rotate: -4, size: 'w-56 h-44', zIndex: 16 },
    { top: '25%', left: '62%', rotate: 4, size: 'w-64 h-48', zIndex: 11 },
    { top: '22%', left: '73%', rotate: -5, size: 'w-56 h-44', zIndex: 14 },
    { top: '19%', left: '83%', rotate: 3, size: 'w-60 h-48', zIndex: 12 },
    { top: '23%', left: '93%', rotate: -3, size: 'w-56 h-44', zIndex: 15 },
    
    // Fila 3 - medio
    { top: '43%', left: '0%', rotate: -3, size: 'w-56 h-44', zIndex: 15 },
    { top: '40%', left: '10%', rotate: 5, size: 'w-60 h-48', zIndex: 12 },
    { top: '45%', left: '20%', rotate: -4, size: 'w-64 h-52', zIndex: 10 },
    { top: '41%', left: '31%', rotate: 3, size: 'w-56 h-44', zIndex: 14 },
    { top: '44%', left: '41%', rotate: -2, size: 'w-60 h-48', zIndex: 13 },
    { top: '42%', left: '51%', rotate: 4, size: 'w-56 h-44', zIndex: 16 },
    { top: '46%', left: '61%', rotate: -5, size: 'w-64 h-48', zIndex: 11 },
    { top: '43%', left: '72%', rotate: 3, size: 'w-56 h-44', zIndex: 15 },
    { top: '40%', left: '82%', rotate: -4, size: 'w-60 h-48', zIndex: 13 },
    { top: '44%', left: '92%', rotate: 5, size: 'w-56 h-44', zIndex: 10 },
    
    // Fila 4
    { top: '64%', left: '1%', rotate: 4, size: 'w-60 h-48', zIndex: 12 },
    { top: '61%', left: '11%', rotate: -3, size: 'w-56 h-44', zIndex: 14 },
    { top: '66%', left: '21%', rotate: 5, size: 'w-64 h-52', zIndex: 11 },
    { top: '62%', left: '32%', rotate: -2, size: 'w-56 h-44', zIndex: 15 },
    { top: '65%', left: '42%', rotate: 3, size: 'w-60 h-48', zIndex: 13 },
    { top: '63%', left: '52%', rotate: -4, size: 'w-56 h-44', zIndex: 16 },
    { top: '67%', left: '62%', rotate: 5, size: 'w-64 h-48', zIndex: 10 },
    { top: '64%', left: '73%', rotate: -3, size: 'w-56 h-44', zIndex: 14 },
    { top: '61%', left: '83%', rotate: 4, size: 'w-60 h-48', zIndex: 12 },
    { top: '65%', left: '93%', rotate: -5, size: 'w-56 h-44', zIndex: 15 },
    
    // Fila 5
    { top: '83%', left: '2%', rotate: -4, size: 'w-56 h-44', zIndex: 13 },
    { top: '80%', left: '12%', rotate: 3, size: 'w-60 h-48', zIndex: 11 },
    { top: '85%', left: '22%', rotate: -2, size: 'w-56 h-44', zIndex: 14 },
    { top: '81%', left: '32%', rotate: 5, size: 'w-64 h-52', zIndex: 16 },
    { top: '84%', left: '43%', rotate: -3, size: 'w-56 h-44', zIndex: 10 },
    { top: '82%', left: '53%', rotate: 4, size: 'w-60 h-48', zIndex: 15 },
    { top: '86%', left: '63%', rotate: -5, size: 'w-56 h-44', zIndex: 12 },
    { top: '83%', left: '73%', rotate: 3, size: 'w-64 h-48', zIndex: 14 },
    { top: '80%', left: '84%', rotate: -4, size: 'w-56 h-44', zIndex: 11 },
    { top: '84%', left: '94%', rotate: 5, size: 'w-60 h-48', zIndex: 13 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50 z-0">
      {photos.map((photo, index) => {
        const position = positions[index];
        if (!position) return null;
        
        return (
          <div
            key={index}
            className={`absolute ${position.size} shadow-2xl animate-fadeInRotate hover:scale-110 hover:z-50 transition-all duration-500 cursor-pointer`}
            style={{
              top: position.top,
              left: position.left,
              transform: `rotate(${position.rotate}deg)`,
              animationDelay: `${index * 60}ms`,
              zIndex: position.zIndex,
            }}
          >
            <div className="relative w-full h-full bg-white p-2 rounded-lg shadow-xl">
              <img
                src={photo}
                alt={`WIT ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 pointer-events-none z-5"></div>
      <style>{`
        @keyframes fadeInRotate {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.7) rotate(45deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeInRotate {
          animation: fadeInRotate 1s ease-out forwards;
          opacity: 0;
        }
        @media (max-width: 1024px) {
          .animate-fadeInRotate {
            width: 35vw !important;
            height: 28vw !important;
          }
        }
        @media (max-width: 768px) {
          .animate-fadeInRotate {
            width: 40vw !important;
            height: 32vw !important;
          }
        }
      `}</style>
    </div>
  );
}