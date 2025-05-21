"use client";

import { decodeAction } from "next/dist/server/app-render/entry-base"
import { useEffect, useState } from "react";
import Button from "./registerButton";

const ExpLetrero = () => {
    const [showArrow, setShowArrow] = useState(true); 

    const scrollToNextSection = () => {
        const nextSection = document.getElementById("know-arca");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>        
            <div className=" sm:w-full flex flex-col md:w-1/2 items-center mt-24">
                <div className="w-full md:w-4/6 p-12 md:mt-32 bg-white m-8 rounded-xl ml-12">
                    <p className="text-xl md:text-xl text-justify">
                        El hackathon es una experiencia de innovación en la que estudiantes de últimos 
                        semestres resuelven retos reales de negocio propuestos por un área de tecnología 
                        de Arca Continental que desarrolla aplicaciones de talla mundial. 
                    </p>
                </div>
                <div className="pt-6 mb-10">
                    <Button label="🚀 ¡Regístrate!"/>
                </div>
                {/* Bouncing Arrow - Only Visible if showArrow is true */}
                {showArrow && (
                    <div
                        className="flex flex-col bottom-12 items-center transform cursor-pointer animate-bounce transition-opacity duration-300"
                        onClick={scrollToNextSection}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                )}
                {/* CTA Button*/}
            </div>
        </>
    )
}

export default ExpLetrero;