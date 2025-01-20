import Counter from "@/app/components/hack4her/countdown";
import SectionHack4Her from "@/app/components/hack4her/sectionHack4Her";
import Image from "next/image";
import robot2 from "../../../public/images/hack4her/robot2.png"

const Hack4HerPage = () => {
    return (
        <>
            <div className="bg-hack4her-bg pt-6">
                <Counter />
            </div>
            <SectionHack4Her>
                <div className="h-screen w-full relative px-10 flex items-center">
                    <div className="bg-white rounded-lg p-8 m-10 md:w-1/2 shadow-lg z-10">
                        <h1 className="text-hack4her-bg font-montserrat font-extrabold text-5xl mb-5">
                        ¿Qué es Hack4Her?
                        </h1>
                        <p className="text-black text-xl leading-loose mt-4">
                        Es un evento nacional que conjunta 3 días de crecimiento profesional para mujeres en ámbitos interdisciplinarios con retos de ingeniería y negocios.
                        <br/>
                        Talleres de actualización en tecnologías y negocios digitales.
                        <br/>
                        Reunión Nacional de líderes WIT en donde se fortalecerán los lazos de WIT, de las empresas y de las líderes WIT universitarias, lideradas por WIT ITESM Escuela de Ingeniería.
                        <br/>
                        Hackathon con 3 empresas líderes que desafiarán a las participantes con distintas problemáticas tecnológicas.
                        </p>
                    </div>
                    <div className="absolute top-28 right-20 w-2/5 h-auto z-0">
                        <Image src={robot2} alt="Robot 2" className= "w-5/6 "/>   
                    </div> 
                </div>
            </SectionHack4Her>
        </>
    )
}

export default Hack4HerPage;