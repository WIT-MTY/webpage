import Section from "@/app/components/general/Section";
import Footer from "@/app/components/general/Footer";
import InfoHeader from "@/app/components/general/InfoHeader";

export default function PageSponsoring() {
    return (
        <main>
            <div className="overflow-scroll">
                <Section>
                    <div className="mt-4 aspect-video relative pt-8 -mb-12">
                        <InfoHeader title="Patrocinios" description="El grupo estudiantil ha colaborado con diferentes empresas de alcance nacional e internacional para el patrocinio de nuestros proyectos, eventos y servicio social. \ Durante el semestre agosto a diciembre del 2023, tuvimos la oportunidad de colaborar con las siguientes empresas para patrocinar Journey to Internship y WitCode."/>
                        {/* <h2 className="font-bold text-red-500"> *PONER PATROCINIOS ACTUALES* </h2> */}
                    </div>
                </Section>
                <Section>
                <div className="w-full border-2 border-neutral-200 max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-4 mb-16">
                    <h1 className="text-center text-purple-700 font-bold">Nuestros Aliados</h1>
                    <h2 className="text-center text-lg font-normal mb-5">
                        ¡Gracias a las empresas patrocinadoras por hacer posibles los eventos de la comunidad!
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                        <img src="images/Apex-systems.png" alt="Apex Systems logo" className="h-16 md:h-20"/>
                        <img src="images/atoms-studio.png" alt="Atoms Studio logo" className="h-16 md:h-20"/>
                        <img src="images/Dairy-Queen.png" alt="Dairy Queen logo" className="h-16 md:h-20"/>
                        <img src="images/Delicias-importadas.png" alt="Delicias importadas logo" className="h-16 md:h-20"/>
                        <img src="images/Sigma.png" alt="Sigma logo" className="h-16 md:h-20"/>
                    </div>
                </div>  
                </Section>
            </div>
                <Footer/>
        </main>
    )
}