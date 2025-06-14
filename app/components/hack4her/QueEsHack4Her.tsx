"use client";

import SectionHack4Her from "@/app/components/hack4her/sectionHack4Her";
import Image from "next/image";
import robot2 from "../../../public/images/hack4her/robot2.png"
import { useEffect, useState } from "react";


const QueEsHack4Her = () => {
    const [showArrow, setShowArrow] = useState(true);

    const scrollToNextSection = () => {
        const nextSection = document.getElementById("schedule-section");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
    };


    return (
        <SectionHack4Her>
            <div className="md:h-screen w-full relative md:px-10 flex items-center">
                <div className="bg-white rounded-lg p-8 flex-col items-center m-10 md:w-1/2 shadow-lg z-10">
                    <h1 className="text-hack4her-bg font-montserrat font-extrabold text-5xl mb-7">
                        ¿Qué es Hack4Her?
                    </h1>
                    <div>
                        <ul className="text-black md:text-xl leading-loose mt-4 list-disc pl-5 space-y-4">
                            <li>Es un evento nacional que conjunta 3 días de crecimiento profesional en ingeniería y negocios, con enfoque en el talento femenino, con apertura a todas las personas interesadas.</li>
                            <li>Talleres de actualización en tecnologías y negocios digitales.</li>
                            <li>Reunión Nacional de líderes WIT en donde se fortalecerán los lazos de WIT, de las empresas y de las líderes WIT universitarias, lideradas por WIT ITESM Escuela de Ingeniería.</li>
                            <li>Hackathon en colaboración con el área de Tecnología de Arca Continental - Digital Nest, que desafiará a los participantes con distintos retos tecnológicos y de negocio. </li>  
                        </ul>          
                    </div>
                    {/* Bouncing Arrow */}
                    <div
                        className="mt-8 flex flex-row items-center gap-2 cursor-pointer animate-bounce-horizontal transition-opacity duration-300"
                        onClick={scrollToNextSection}
                    >
                        <span className="text-hack4her-bg font-bold text-lg">Conoce el horario</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-hack4her-bg transform -rotate-90"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <div className="absolute top-28 right-20 w-2/5 h-auto z-0">
                    <Image src={robot2} alt="Robot 2" className="hidden md:block md:w-5/6 " />
                </div>
            </div>

            <style jsx global>{`
                @keyframes bounce-horizontal {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(10px);
                    }
                }

                .animate-bounce-horizontal {
                    animation: bounce-horizontal 1.5s infinite;
                }
            `}
            </style>
        </SectionHack4Her>
    )
}

export default QueEsHack4Her;