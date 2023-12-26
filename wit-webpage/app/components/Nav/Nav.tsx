import { ReactNode } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Nav = ({ children }: { children: ReactNode }) => {


    return (
        <div className="w-full top-0 gap-0 z-50">
            <NavMobile />
            <NavDesktop />

            <div className="pt-32">
            {children}
            </div>
        </div>
    )
}

export default Nav;