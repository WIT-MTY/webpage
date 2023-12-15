import { ReactNode } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Nav = ({ children }: { children: ReactNode }) => {


    return (
        <div className="w-full fixed top-0 gap-0">
            <NavMobile />
            <NavDesktop />
            {children}
        </div>
    )
}

export default Nav;