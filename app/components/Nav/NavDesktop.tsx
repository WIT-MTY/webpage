'use client'
import { useRoutes } from "@/app/utils/hooks/useRoutes";
import Logo from "../general/Logo";
import NavButton from "./NavButton";
import NavElement from "./NavElement";
import { useRouter } from "next/navigation";

const NavDesktop = () => {
    const routes = useRoutes();
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }

    const handleContacto = () => {
        router.push("/contacto");
    }

    return (
        <div className="invisible lg:visible font-montserrat z-50 fixed w-full md:h-auto flex items-center py-3 px-6 md:px-10 bg-white border-b border-neutral-200">
            {/* Left: Logo */}
            <div className="flex justify-start w-auto">
                <div onClick={handleClick} className="cursor-pointer">
                    <Logo />
                </div>
            </div>

            {/* Center: Navigation Links (Using Absolute Centering) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row gap-8">
                {routes.map((route, key) => (
                    <NavElement key={key} label={route.label} href={route.href} />
                ))}
            </div>

            {/* Right: Button */}
            <div className="flex justify-end w-auto ml-auto">
                <NavButton label="CONTÁCTANOS" onClick={handleContacto} />
            </div>
        </div>
    );
};

export default NavDesktop;
