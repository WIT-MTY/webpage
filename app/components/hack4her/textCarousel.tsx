'use client'
import React, { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GoDotFill } from 'react-icons/go';
import SectionHack4Her from '@/app/components/hack4her/sectionHack4Her';

const slides = [
    { question: 'Is the event free to attend?', answer: 'Yes! Food will be provided for the duration of the event. We will also have swag and prizes!' },
    { question: 'Where is the event? Is it in person or virtual?', answer: 'The event is located in the XXXX Building at INSERT STREET ADDRESS' },
    { question: "Who can attend? What if I don't have any experience?", answer: "This event is open to any students. It is beginner friendly, with workshops to help you learn during the event." },
    { question: 'What is the team size limit?', answer: 'You can be on teams of up to 4. We will have a team building activity right after opening ceremony if you need to find team members!' },
    { question: 'Are there travel reimbursements?', answer: 'We are not able to provide travel reimbursements at this time.' },
    { question: 'What should I bring?', answer: 'Your laptop, charger, headphones, deodorant, pillow/blanket' },
    { question: 'When can we start working on our project? Can I work on a previous project?', answer: 'You cannot start until after opening ceremony. You may come up with ideas, but are not allowed to start coding. You cannot work on a previous project, but can use frameworks if you clearly credit them in your readme and differentiate what you made vs what you used.' },
    { question: 'How many challenges can I apply for?', answer: 'As many as you want!' },
    { question: 'Do I have to stay overnight?', answer: 'No, you can leave and come back if you would prefer to go to bed.' },
    { question: 'Will hardware be available?', answer: 'We do not have hardware available, but you are welcome to bring your own. Due to building fire codes, please do not bring soldering kits' }
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
        }, 4000);
        return () => clearInterval(interval);
    }, [cIndex]);

    return (
        <SectionHack4Her>
            <div className='relative h-full w-full flex justify-center items-center'>
                <div className='absolute top-8 h-auto w-auto bg-white shadow-lg rounded-full p-8 m-10'>
                    <h1 className='font-montserrat text-5xl font-extrabold text-hack4her-bg text-center'>FAQ's</h1>
                </div>
                <div className="absolute w-5/6 h-auto flex flex-col justify-center items-center text-center bg-white rounded-2xl shadow-lg p-24 m-10">
                    {/* Slide actual */}
                    <h2 className="text-xl font-semibold">{slides[cIndex].question}</h2>
                    <p className="mt-4 text-gray-600">{slides[cIndex].answer}</p>

                    {/* Botón Izquierdo */}
                    <button 
                        onClick={prevSlide} 
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                        <SlArrowLeft size={25} />
                    </button>

                    {/* Botón Derecho */}
                    <button 
                        onClick={nextSlide} 
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                        <SlArrowRight size={25} />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-5 flex space-x-2">
                        {slides.map((_, index) => (
                            <GoDotFill 
                                key={index} 
                                size={20} 
                                className={`${cIndex === index ? 'text-blue-500' : 'text-gray-400'}`} 
                                onClick={() => setCIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </SectionHack4Her>
    );
}
