import SectionHack4Her from "./sectionHack4Her";
import Image from "next/image";
import arcaLogo from "../../../public/images/AC Digital Nest logo color_sin fondo.png";

const conoceArca = () => {
    return (
        <SectionHack4Her>
            <div className="md: h-screen w-full relative px-10 flex flex-col items-center justify-center text-center">
                <div className="w-full max-w-md md:max-w-full md:w-3/4 bg-white p-12 rounded-3xl">
                    <h1 className="text-xl md:text-3xl font-bold mb-8"> ¡Conoce a nuestro colaborador! </h1>
                    <div className="mb-8">
                        <Image 
                            src={arcaLogo} 
                            alt="Logo de Arca Digital Nest"
                            className="w-full md:w-1/2 mx-auto max-w-xl h-auto"
                            width={550}
                        />

                    </div>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-sm md:text-lg mb-4">
                            Arca Continental, uno de los embotelladores de Coca-Cola más grandes del mundo con presencia en 5 países.
                            <br></br>
                            <br></br>
                            El AC Digital Nest, es el equipo del desarrollo digital de la fuerza de ventas de Arca Continental y mas de un millón 
                            de tiendas de abarrotes y pequeños comercios en Latinoamérica.
                        </p>
                        <br></br>
                        <a 
                            href="https://www.arcacontal.com/es/empleo/trabaja-en-arca-continental"
                            className="text-md md:text-lg font-montserrat font-semibold mb-4 underline text-hack4her-bg hover:text-purple-600"
                            target="blank"
                            rel="noopener nonreferrer"> 
                                ¡Te invitamos a trabajar con nosotros! ó Sé parte del equipo AC   
                        </a>
                    </div>
                </div>
            </div>
                
        </SectionHack4Her>    
    )
}

export default conoceArca;