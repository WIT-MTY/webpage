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
    const targetDate = new Date("2025-05-16T15:00:00Z");
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <SectionHack4Her>
            <div className="w-full h-full md:relative px-10 md:px-0">
                <div className="md:absolute bg-white rounded-lg p-8 md:translate-x-1/2 md:w-1/2 translate-y-1/3">
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
                            MAYO 16,17 y 18
                        </div>
                        <div className="text-hack4her-bg text-lg md:text-xl font-light">
                            By Women in Tech
                        </div>
                    </div>
                </div>
                <Image src={robot} alt="robot" className="absolute left-10 bottom-0 w-1/3" />
            </div>
        </SectionHack4Her>
    )
}

export default Countdown;