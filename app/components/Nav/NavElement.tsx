import clsx from "clsx";
import { useRouter, usePathname } from "next/navigation";

const NavElement = ({ label, href, mobile }: { label: string; href: string; mobile?: boolean }) => {
    const router = useRouter();
    const path = usePathname();

    const handleClick = () => {
        router.push(href);
    };

    return (
        <div
            className={clsx(
                "relative cursor-pointer font-light font-montserrat tracking-wider inline-block group",
                mobile
                    ? "text-neutral-300 py-1 text-sm"
                    : "text-neutral-500 hover:text-gray-800 text-xs lg:text-sm",
                mobile ? path === href && "text-white sm:text-purple-300 font-medium"
                : path === href && "text-gray-800 font-medium"
            )}
            onClick={handleClick}
        >
            {label}

            {/* Underline Effect - Stays if Active */}
            <span
                className={clsx(
                    "absolute left-0 bottom-[-2px] h-[2px] bg-gray-800 transition-all duration-300 ease-in-out",
                    path === href ? "w-full" : "w-0 group-hover:w-full"
                )}
            ></span>
        </div>
    );
};

export default NavElement;
