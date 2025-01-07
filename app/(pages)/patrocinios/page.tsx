import Section from "@/app/components/general/Section";
import Footer from "@/app/components/general/Footer";
import InfoHeader from "@/app/components/general/InfoHeader";

export default function PageSponsoring() {
    return (
        <main className="pt-24">
            <div className="overflow-scroll">
                <Section>
                    <div className="mt-4 mb-8 pt-8">
                        <InfoHeader title="Patrocinios" description="El grupo estudiantil ha colaborado con diferentes empresas de alcance nacional e internacional para el patrocinio de nuestros proyectos, eventos y servicio social. \ Durante el semestre febrero a junio del 2025, tenemos la oportunidad de colaborar con las siguientes empresas para el patrocinio de Hack4Her."/>
                    </div>
                </Section>
                <Section>
                <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl px-4 pb-4 pt-6 mb-16">
                    <h1 className="text-center text-purple-700 text-xl font-bold sm:text-2xl md: text-3xl">Nuestros Aliados</h1>
                    <p className="text-center text-slate-600 text-lg mb-5 pb-4">
                        ¡Gracias a las empresas patrocinadoras por hacer posibles los eventos de la comunidad!
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                        <img src="images/iconn.png" alt="iconn logo" className="h-10 md:h-12"/>
                        <img src="images/Apex-systems.png" alt="Apex Systems logo" className="h-10 md:h-12"/>
                        <img src="images/LEGO.png" alt="LEGO logo" className="h-14 md:h-16"/>
                        <img src="images/Steelcase.png" alt="Steelcase logo" className="h-20 md:h-24"/>
                        <img src="images/JD1.png" alt="John Deere logo" className="h-20 md:h-24"/>
                        <img src="images/CHUBB1.png" alt="CHUBB logo" className="h-14 md:h-16"/>
                        <img src="images/Softtek.png" alt="Softtek logo" className="h-12 md:h-16"/>
                        <img src="images/MongoDB.png" alt="MongoDB logo" className="h-20 md:h-24"/>
                        <img src="images/Ternium.png" alt="Ternium logo" className="h-10 md:h-12"/>
                        <img src="images/Accenture.png" alt="accenture logo" className="h-9 md:h-10"/>
                        <img src="images/PepsiCo.png" alt="PepsiCo logo" className="h-10 md:h-12"/>
                        <img src="images/OXXO.png" alt="OXXO logo" className="h-12 md:h-16"/>
                        <img src="images/Toyota.png" alt="Toyota logo" className="h-12 md:h-16"/>
                    </div>
                </div>  
                </Section>
            </div>
                <Footer/>
        </main>
    )
}