'use client'
import { useRoutes } from "@/app/utils/hooks/useRoutes";
import Logo from "../general/Logo";
import NavButton from "./NavButton";
import NavElement from "./NavElement";
import { useState } from "react";
import { useRouter } from "next/navigation";



const NavDesktop = () => {
    const [selected, setSelected] = useState(0);
    const routes = useRoutes();
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }
    const handleContacto = () => {
        router.push("/contacto");
    }

    return (
        <>
        
            <div className="font-montserrat z-50 fixed w-full invisible h-0 sm:h-auto sm:visible flex flex-row justify-between py-2 px-7 items-center bg-white border-b-neutral-200 border">
                <div onClick={handleClick}>
                    <Logo />
                </div>
                <div className="flex flex-row gap-4">
                    {routes.map((route, key) => (
                        <NavElement key={key} label={route.label} href={route.href} />
                    ))}
                </div>
                <NavButton label="CONTÁCTANOS" onClick={handleContacto} />
            </div>

            
        </>
    )
}

export default NavDesktop;