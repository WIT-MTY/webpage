import Image from "next/image";
import bg1 from "../../../public/images/hack4her/bg1.png";
import bg2 from "../../../public/images/hack4her/bg2.png";
import bg3 from "../../../public/images/hack4her/bg3.png";
import bg4 from "../../../public/images/hack4her/bg4.png";
import bg5 from "../../../public/images/hack4her/bg5.png";
import bg6 from "../../../public/images/hack4her/bg6.png";

const SectionHack4Her = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen w-full relative bg-hack4her-bg">
            <div className="h-full w-full absolute z-20">
                {children}
            </div>

            <Image src={bg1} alt={"bg_image"} className="absolute right-0 w-1/4 z-0" />
            <Image src={bg2} alt={"bg_image"} className="absolute left-1/3 w-1/2 z-0" />
            <Image src={bg3} alt={"bg_image"} className="absolute left-0 top-0 w-1/3 z-0" />
            <Image src={bg4} alt={"bg_image"} className="absolute right-1/3 bottom-0 w-1/2 z-0" />
            <Image src={bg5} alt={"bg_image"} className="absolute left-0 bottom-0 w-1/4 z-0" />
            <Image src={bg6} alt={"bg_image"} className="absolute right-0 bottom-0 w-1/3 z-0" />

        </div>
    )
}

export default SectionHack4Her;