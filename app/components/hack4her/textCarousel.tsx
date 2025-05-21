'use client'
import React, { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { GoDotFill } from 'react-icons/go';
import SectionHack4Her from '@/app/components/hack4her/sectionHack4Her';

const slides = [
  {
    question: '¿Es gratis asistir al evento?',
    answer: '¡Sí! Es totalmente gratuito. Se proporcionará alimentos durante la duración del evento.'
  },
  {
    question: '¿Quién puede ir? ¿Y si no tengo experiencia?',
    answer: 'Este evento es hecho por y para mujeres en ámbitos interdisciplinarios. Además, buscamos ser una experiencia amigable para principiantes.'
  },
  {
    question: '¿Hay un máximo de integrantes por equipo?',
    answer: '¡Sí! Deben ser equipos de máximo 4 personas.'
  },
  {
    question: '¿Hay reembolsos de viaje?',
    answer: 'Los viáticos deben ser cubiertos por las participantes.'
  },
  {
    question: '¿Qué debería llevar?',
    answer: 'Tu laptop, cargador, audífonos, artículos de higiene personal y una almohada/cobija.'
  },
  {
    question: '¿Cuándo puedo empezar el proyecto? ¿Puedo usar uno anterior?',
    answer: 'No puedes empezar antes de la ceremonia de inicio. Debes llegar con ideas, pero no puedes trabajar en el proyecto con anterioridad. Tampoco puedes continuar con proyectos previos.'
  },
  {
    question: '¿Cómo me puedo registrar?',
    answer: (
      <>
        ¡Con este{' '}
        <a
          href="http://tec.rs/registrohack4her"
          target="_blank"
          rel="noopener noreferrer"
          className="text-hack4her-bg hover:underline font-semibold"
        >
          enlace
        </a>
        !
      </>
    ),
  },
  {
    question: '¿Dónde será el evento?',
    answer: (
      <span className="pb-5">
        El evento se llevará a cabo en las instalaciones del Tecnológico de Monterrey.
      </span>
    ),
  },
  {
    question: '¿Qué ganan los primeros lugares?',
    answer: '¡Varios premios por anunciar!'
  },
  {
    question: '¿Me tengo que quedar toda la noche?',
    answer: 'No. Si prefieres, puedes descansar fuera de las instalaciones.'
  },
  {
    question: '¿Habrá hardware disponible?',
    answer: 'No contamos con una zona de hardware, pero su uso no está prohibido. Sin embargo, por términos de seguridad, favor de no traer kits de soldadura.'
  },
  {
    question: 'Código de conducta MLH',
    answer: (
      <>
        Consulta el código de conducta{' '}
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-hack4her-bg hover:underline font-semibold"
        >
          aquí
        </a>
        .
      </>
    )
  }
];

export default function TextCarousel() {
  const [cIndex, setCIndex] = useState(0)
  const prevSlide = () =>
    setCIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  const nextSlide = () =>
    setCIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1))

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000)
    return () => clearInterval(interval)
  }, [cIndex])

  return (
    <SectionHack4Her>
      <div className="relative w-full flex flex-col items-center py-20">
        {/* Título */}
        <div className="relative bg-white shadow-lg rounded-full px-8 py-4 mb-10">
          <h1 className="font-montserrat text-2xl md:text-5xl font-extrabold text-hack4her-bg text-center">
            FAQ
          </h1>
        </div>

        {/* Carrusel */}
        <div className="relative w-full max-w-full flex justify-center">
          <div className="relative w-full px-12 md:px-20 min-h-[500px] flex flex-col justify-center items-center text-center bg-white shadow-lg p-12 md:p-24">
            {/* Flecha izquierda */}
            <button
              onClick={prevSlide}
              className={`absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 hover:bg-gray-300 z-10 rounded-full transition-transform duration-200 ease-in-out hover:scale-110 bounce-left`}
            >
              <SlArrowLeft size={30} />
            </button>

            {/* Flecha derecha */}
            <button
              onClick={nextSlide}
              className={`absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 hover:bg-gray-300 z-10 rounded-full transition-transform duration-200 ease-in-out hover:scale-110 bounce-right`}
            >
              <SlArrowRight size={30} />
            </button>

            {/* Slide */}
            <h2 className="text-2xl md:text-3xl font-semibold">
              {slides[cIndex].question}
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              {slides[cIndex].answer}
            </p>

            {/* Dots */}
            <div className="absolute bottom-5 flex space-x-2">
              {slides.map((_, idx) => (
                <GoDotFill
                  key={idx}
                  size={20}
                  className={cIndex === idx ? 'text-hack4her-bg' : 'text-gray-400'}
                  onClick={() => setCIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animaciones de rebote */}
      <style jsx>{`
        .bounce-left {
          animation: bounce-left 2s infinite ease-in-out;
        }
        .bounce-right {
          animation: bounce-right 2s infinite ease-in-out;
        }
        @keyframes bounce-left {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(-8px); }
        }
        @keyframes bounce-right {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(8px); }
        }
      `}</style>
    </SectionHack4Her>
  )
}