"use client";

import SectionHack4Her from "./sectionHack4Her";
import Image from "next/image";
import logo from "../../../public/images/hack4her/hack4her_logo.png";
import robot from "../../../public/images/hack4her/robot1.png";
import { useEffect, useState } from "react";
import CountdownElement from "./countdownElement";

const calculateTimeLeft = (targetDate: Date) => {
    const difference = +targetDate - +new Date();
    const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
};


const Countdown = () => {
    const targetDate = new Date("2025-05-30T15:00:00Z");
    // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    const [showArrow, setShowArrow] = useState(true);

    const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft> | null>(null);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const scrollToNextSection = () => {
        const nextSection = document.getElementById("definition-section");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!timeLeft) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <SectionHack4Her>
            <div className="w-full h-full md:relative px-10 md:px-0">
                <div className="md:absolute bg-white rounded-lg p-8 md:translate-x-1/2 md:w-1/2 translate-y-1/2 pt-20 md:translate-y-1/3">
                    <div className="flex flex-col items-center font-montserrat">
                        <Image src={logo} alt="robot" className="pt-5" />
                        <div className="bg-hack4her-bg px-4 py-2 flex flex-wrap md:flex-row justify-between gap-2 md:gap-10 mt-8 mb-6">
                            {timeLeft.days > 0 && <CountdownElement time={timeLeft.days} label="Days" />}
                            {(timeLeft.hours > 0 || timeLeft.days > 0) && (
                                <CountdownElement time={timeLeft.hours} label="Hours" />
                            )}
                            {(timeLeft.hours > 0 || timeLeft.days > 0 || timeLeft.minutes > 0) && (
                                <CountdownElement time={timeLeft.minutes} label="Minutes" />
                            )}
                            {(timeLeft.hours > 0 ||
                                timeLeft.days > 0 ||
                                timeLeft.minutes > 0 ||
                                timeLeft.seconds > 0) && (
                                    <CountdownElement time={timeLeft.seconds} label="Seconds" />
                                )}
                        </div>
                        <div className="text-hack4her-font text-2xl md:text-3xl">
                            MAYO 30 - JUNIO 1
                        </div>
                        <div className="pt-4 inline-flex items-center text-lg md:text-2xl  gap-x-1">
                            By <img src="/images/logo-white.png" alt="logo WIT" className="w-20 invert" />
                        </div>



                    </div>
                </div>
                <Image src={robot} alt="robot" className="absolute left-10 bottom-0 w-1/3" />
                {/* Bouncing Arrow - Only Visible if showArrow is true */}
                {showArrow && (
                    <div
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce transition-opacity duration-300"
                        onClick={scrollToNextSection}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-hack4her-font"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                )}
            </div>
        </SectionHack4Her>
    )
}

export default Countdown;