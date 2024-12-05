'use client'
import React, { useState, useEffect } from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";

export default function Carousel() {
    const slides =  [
        {url: 'images/witcode3.png'},
        {url: 'images/witcode1.jpg'},
        {url: 'images/witcode2.jpg'},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: React.SetStateAction<number>) => {
        setCurrentIndex(slideIndex);
    }

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 4000); 

       
        return () => clearInterval(intervalId);
    }, [currentIndex]); 

    return (
        <div className='h-[600px] w-full m-auto py-16  relative '>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-none bg-center bg-cover duration-500'></div>

            {/* Left Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-none p-2 text-white cursor-pointer'>
                <SlArrowLeft onClick={prevSlide} size={35} > </SlArrowLeft>
            </div>

            {/* Right Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-none p-2 text-white cursor-pointer'>
                <SlArrowRight onClick={nextSlide}  size={35}> </SlArrowRight>
            </div>

            <div className='absolute inset-x-0 bottom-[15%] flex items-center justify-center text-white cursor-pointer'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)}> 
                        <GoDotFill size={30}> </GoDotFill>
                    </div>
                ))}
            </div>
        </div>
    )
}
