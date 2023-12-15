'use client'
import { useRoutes } from "@/app/utils/hooks/useRoutes";
import Logo from "../general/Logo";
import NavButton from "./NavButton";
import NavElement from "./NavElement";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";



const NavMobile = () => {
    const [selected, setSelected] = useState(0);
    const [open, setOpen] = useState(false);
    const routes = useRoutes();
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }
    const handleContacto = () => {
        router.push("/contacto");
    }

    return (
        <div className="visible sm:invisible">
            <div className="w-full z-50 bg-custom-dark-gray fixed p-4 text-white bg-indigo-950 text-2xl" onClick={() => setOpen(!open)}>
                <FiMenu />
                {open && (
                    <div className="flex flex-col items-center py-4 px-5 bg-custom-dark-gray w-full">
                        {routes.map((route, key) => (
                            <NavElement key={key} label={route.label} href={route.href} mobile/>
                        ))}
                    </div>
                )}
            </div>
            <div className="fixed bg-custom-light-gray rounded-full z-50 text-2xl text-gray-200 p-2 bottom-4 right-4 drop-shadow-xl">
                <a href="#">
                    <IoIosArrowUp />
                </a>
            </div>
        </div>
        // <div className="flex flex-row justify-between py-3 px-7 items-center">
        //     <div onClick={handleClick}>
        //         <Logo />
        //     </div>
        //     <div className="flex flex-row gap-4">
        //         {routes.map((route) => (
        //             <NavElement label={route.label} href={route.href} />
        //         ))}
        //     </div>
        //     <NavButton label="CONTÁCTANOS" onClick={handleContacto} />
        // </div>
    )
}

export default NavMobile;