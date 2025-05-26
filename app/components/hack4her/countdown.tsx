"use client";

import SectionHack4Her from "./sectionHack4Her";
import Image from "next/image";
import logo from "../../../public/images/hack4her/H4H-logo.svg";
import robot from "../../../public/images/hack4her/robot1.png";
import { useEffect, useState } from "react";
import CountdownElement from "./countdownElement";
import Button from "@/app/components/hack4her/registerButton";
import ExpLetrero from "./experiencia";

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
    const targetDate = new Date("2025-06-14T09:00:00Z");
    // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    // const [showArrow, setShowArrow] = useState(true);

    const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft> | null>(null);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // const scrollToNextSection = () => {
    //     const nextSection = document.getElementById("definition-section");
    //     if (nextSection) {
    //         nextSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    if (!timeLeft) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <SectionHack4Her>
            <div className="w-full flex flex-col items-center relative">
                <div className="w-full flex flex-col md:flex-row items-center relative">
                    <ExpLetrero/>                                    {/*w-1/2*/}
                    <div className="w-full flex flex-col items-center md:w-5/12 bg-white shadow-lg rounded-lg p-8 mt-16 z-10">
                        <Image src={logo} alt="Logo" className="w-full" />
                        <div className="bg-hack4her-bg px-4 md:px-8 py-3 flex flex-wrap rounded-full md:flex-row justify-between gap-2 md:gap-7 mt-3 mb-6">
                            {timeLeft.days > 0 && <CountdownElement time={timeLeft.days} label="Días" />}
                            {(timeLeft.hours > 0 || timeLeft.days > 0) && (
                                <CountdownElement time={timeLeft.hours} label="Horas" />
                            )}
                            {(timeLeft.hours > 0 || timeLeft.days > 0 || timeLeft.minutes > 0) && (
                                <CountdownElement time={timeLeft.minutes} label="Minutos" />
                            )}
                            {(timeLeft.hours > 0 ||
                                timeLeft.days > 0 ||
                                timeLeft.minutes > 0 ||
                                timeLeft.seconds > 0) && (
                                    <CountdownElement time={timeLeft.seconds} label="Segundos" />
                                )}
                        </div>
                        <div className="text-hack4her-font text-xl md:text-3xl mb-6">
                            JUNIO 14 - 15
                        </div>
                    </div>
                </div>

                {/* CTA Button*/}
                {/* <div className="pt-6 mb-3">
                    <Button label="🚀 ¡Regístrate!"/>
                </div> */}

            </div>

                {/* Robot Image */}
                <Image src={robot} alt="robot" className="hidden md:block md:absolute md:right-0 md:bottom-0 md:w-1/4 md:z-20" />

                {/* Bouncing Arrow - Only Visible if showArrow is true
                {showArrow && (
                    <div
                        className="flex flex-col bottom-12 items-center transform cursor-pointer animate-bounce transition-opacity duration-300"
                        onClick={scrollToNextSection}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                )} */}
        </SectionHack4Her>
    )
}

export default Countdown;