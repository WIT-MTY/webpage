'use client'
import React, { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";

export default function Carousel() {
    const slides = [
        { url: 'images/SS_4.jpg' },
        { url: 'images/SS_22.jpg' },
        { url: 'images/SS_32.jpg' },
        { url: 'images/SS_1.jpg' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right'); // 'right' or 'left' for animation direction

    const prevSlide = () => {
        setDirection('left');
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        setDirection('right');
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setDirection(slideIndex > currentIndex ? 'right' : 'left');
        setCurrentIndex(slideIndex);
    };
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className="h-[600px] w-full m-auto py-16 relative overflow-hidden">
            <div className="relative flex w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
                            currentIndex === index
                                ? 'translate-x-0'
                                : direction === 'right'
                                ? 'translate-x-full'
                                : '-translate-x-full'
                        }`}
                        style={{
                            backgroundImage: `url(${slide.url})`,
                            backgroundPosition:
                                // set image to be in center top 
                                slide.url === 'images/SS_22.jpg'
                                    ? 'center bottom'
                                    : 'center center',
                            backgroundSize: 'cover',
                        }}
                    ></div>
                ))}
            </div>

            {/* Left Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-none p-2 text-white cursor-pointer">
                <SlArrowLeft onClick={prevSlide} size={35}></SlArrowLeft>
            </div>

            {/* Right Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-none p-2 text-white cursor-pointer">
                <SlArrowRight onClick={nextSlide} size={35}></SlArrowRight>
            </div>

            {/* Dots */}
            <div className="absolute inset-x-0 bottom-[15%] flex items-center justify-center text-white cursor-pointer">
                {slides.map((_, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <GoDotFill
                            size={30}
                            className={`${
                                currentIndex === slideIndex ? 'text-blue-500' : ''
                            }`}
                        ></GoDotFill>
                    </div>
                ))}
            </div>
        </div>
    );
}
