import clsx from "clsx";
import { useRouter, usePathname } from "next/navigation";


const NavElement = ({ label, href, mobile }: { label: string, href: string, mobile?: boolean }) => {
    const router = useRouter();
    const path = usePathname();
    const handleClick = () => {
        router.push(href);
    }

    return (
        <div className={clsx(
            mobile ? "text-neutral-300 py-1 text-sm" : "text-neutral-500 hover:text-gray-800 text-xs lg:text-sm",
            "font-light font-montserrat tracking-wider ",
            path === href && "text-white sm:text-neutral-900 font-medium"
        )} onClick={handleClick}>
            {label}
        </div>
    )
}

export default NavElement;