import Image from "next/image";
import robot1 from "../../../public/images/hack4her/robot1.png";
import SectionHack4Her from "./sectionHack4Her";

const Sponsor = () => {
    return (
        <SectionHack4Her>
        <div className="h-screen w-full flex flex-col items-center justify-center px-10 z-20">
            {/* Robot above the text box */}
            <div className="relative w-full flex justify-center">
                <Image src={robot1} alt="Robot 1" className="w-1/3 max-w-sm" />
            </div>

            {/* White box below the robot */}
            <div className="bg-white rounded-lg p-10 mt-[-60px] md:w-1/2 shadow-lg  flex">
                <div className="flex flex-col items-center justify-center w-full text-center">
                    <img 
                        src="images/hack4her/hack4her_logo.png" 
                        alt="Logo Hack4Her" 
                        className="w-3/4 max-w-sm" 
                    />

                    <h1 className="text-hack4her-bg font-montserrat font-extrabold text-5xl mb-8">
                        es patrocinado por:
                    </h1>
                    <img 
                        src="images/LOGO_ARCA.png" 
                        alt="Logo Arca Continental" 
                        className="w-3/4 max-w-sm mt-3" 
                    />
                </div>
            </div>
        </div>
        </SectionHack4Her>
    );
};

export default Sponsor;
