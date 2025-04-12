'use client'
import React, { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GoDotFill } from 'react-icons/go';
import SectionHack4Her from '@/app/components/hack4her/sectionHack4Her';

const slides = [
    { "question": "¿Es gratis asistir al evento?", "answer": "¡Sí! Es totalmente gratuito. Se proporcionará alimentos durante la duración del evento." },
    { "question": "¿Quién puede ir? ¿Y si no tengo experiencia?", "answer": "Este evento es hecho por y para mujeres en ámbitos interdisciplinarios. Además, buscamos ser una experiencia amigable para principiantes." },
    { "question": "¿Hay un máximo de integrantes por equipo?", "answer": "¡Sí! Deben ser equipos de máximo 4 personas." },
    { "question": "¿Hay reembolsos de viaje?", "answer": "Los viáticos deben ser cubiertos por las participantes." },
    { "question": "¿Qué debería llevar?", "answer": "Tu laptop, cargador, audífonos, artículos de higiene personal y una almohada/cobija." },
    { "question": "¿Cuándo puedo empezar el proyecto? ¿Puedo usar uno anterior?", "answer": "No puedes empezar antes de la ceremonia de inicio. Debes llegar con ideas, pero no puedes trabajar en el proyecto con anterioridad. Tampoco puedes continuar con proyectos previos." },
    {
        "question": "¿Cómo me puedo registrar?", "answer": (<>¡Con este
            <a
                href="http://tec.rs/registrohack4her"
                target="_blank"
                rel="noopener noreferrer"
                className='text-hack4her-bg hover:underline font-semibold'> enlace</a>!
        </>)
    },
    {
        "question": "¿Dónde será el evento?", "answer": (<>
            <span className='pb-5'>El evento se llevará a cabo en las instalaciones del Tecnológico de Monterrey.</span>
            {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.622613015572!2d-100.2760317458173!3d25.61745370847247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf6e6c1769f9%3A0xfa4d66770c9d82aa!2sPrepaTec%20Eugenio%20Garza%20Lag%C3%BCera!5e0!3m2!1ses-419!2smx!4v1739910269492!5m2!1ses-419!2smx"
                width="300"
                height="200"
                style={{ border: "4px solid rgb(153, 56, 166)", margin: "auto" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>*/}
        </>)
    },
    {
        "question": "¿Qué ganan los primeros lugares?", "answer": "¡Varios premios por anunciar!"
    },
    { "question": "¿Me tengo que quedar toda la noche?", "answer": "No. Si prefieres, puedes descansar fuera de las instalaciones." },
    { "question": "¿Habrá hardware disponible?", "answer": "No contamos con una zona de hardware, pero su uso no está prohibido. Sin embargo, por términos de seguridad, favor de no traer kits de soldadura." },
    { "question": "Código de conducta MLH", "answer": (<>Consulta el código de conducta
        <a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
        target="_blank"
        rel="noopener noreferrer"
        className='text-hack4her-bg hover:underline font-semibold'> aquí</a>.
        </>)}
];

export default function TextCarousel() {
    const [cIndex, setCIndex] = useState(0);

    const prevSlide = () => {
        setCIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(interval);
    }, [cIndex]);

    return (
        <SectionHack4Her>
            <div className='relative w-full flex flex-col items-center py-20 mt-40'>
                <div className='relative bg-white shadow-lg rounded-full px-8 py-4 mb-10'>
                    <h1 className='font-montserrat text-2xl md:text-5xl font-extrabold text-hack4her-bg text-center'>FAQ</h1>
                </div>
                <div className="relative w-5/6 max-w-3xl h-auto flex flex-col justify-center items-center text-center bg-white rounded-2xl shadow-lg p-12 md:p-24">
                    {/* Slide actual */}
                    <h2 className="text-xl font-semibold">{slides[cIndex].question}</h2>
                    <p className="mt-4 text-sm md:text-base text-gray-600">{slides[cIndex].answer}</p>

                    {/* Botón Izquierdo */}
                    <button
                        onClick={prevSlide}
                        className=" absolute left-5 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                        <SlArrowLeft size={25} />
                    </button>

                    {/* Botón Derecho */}
                    <button
                        onClick={nextSlide}
                        className=" absolute right-5 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                        <SlArrowRight size={25} />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-5 flex space-x-2">
                        {slides.map((_, index) => (
                            <GoDotFill
                                key={index}
                                size={20}
                                className={`${
                                    cIndex === index ? 'text-blue-500' : 'text-gray-400'

                                }`}
                                onClick={() => setCIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </SectionHack4Her>
    );
}
