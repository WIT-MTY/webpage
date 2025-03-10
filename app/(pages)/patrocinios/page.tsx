import Section from "@/app/components/general/Section";
import Footer from "@/app/components/general/Footer";
import InfoHeader from "@/app/components/general/InfoHeader";
import Image from "next/image";
import Accenture from "../../../public/images/patrocinios/Accenture.png"
import Apex_systems from "../../../public/images/patrocinios/Apex-systems.png"
import CHUBB from "../../../public/images/patrocinios/CHUBB1.png"
import iconn from "../../../public/images/patrocinios/iconn.png"
import John_Deer from "../../../public/images/patrocinios/JD1.png"
import LEGO from "../../../public/images/patrocinios/LEGO.png"
import MongoDB from "../../../public/images/patrocinios/MongoDB.png"
import OXXO from "../../../public/images/patrocinios/OXXO.png"
import PepsiCo from "../../../public/images/patrocinios/PepsiCo.png"
import Softtek from "../../../public/images/patrocinios/Softtek.png"
import SteelCase from "../../../public/images/patrocinios/Steelcase.png"
import Ternium from "../../../public/images/patrocinios/Ternium.png"
import Toyota from "../../../public/images/patrocinios/Toyota.png"

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
                <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-9 mb-16">
                    <h1 className="text-center text-purple-700 text-xl font-bold sm:text-2xl md: text-3xl">Nuestros Aliados</h1>
                    <p className="text-center text-slate-600 text-lg mb-5 pb-4">
                        ¡Gracias a las empresas patrocinadoras por hacer posibles los eventos de la comunidad!
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                        <Image src={iconn} alt="iconn logo" className="h-16 w-auto mx-auto" />
                        <Image src={Apex_systems} alt="Apex Systems logo" className="h-14 w-auto mx-auto" />
                        <Image src={SteelCase} alt="Steelcase logo" className="h-28 w-auto mx-auto" />
                        <Image src={John_Deer} alt="John Deere logo" className="h-28 w-auto mx-auto" />
                        <Image src={CHUBB} alt="CHUBB logo" className="h-20 w-auto mx-auto" />
                        <Image src={Softtek} alt="Softtek logo" className="h-20 w-auto mx-auto" />
                        <Image src={MongoDB} alt="MongoDB logo" className="h-28 w-auto mx-auto" />
                        <Image src={Ternium} alt="Ternium logo" className="h-16 w-auto mx-auto" />
                        <Image src={Accenture} alt="Accenture logo" className="h-14 w-auto mx-auto" />
                        <Image src={PepsiCo} alt="PepsiCo logo" className="h-14 w-auto mx-auto" />
                        <Image src={OXXO} alt="OXXO logo" className="h-20 w-auto mx-auto" />
                        <Image src={Toyota} alt="Toyota logo" className="h-20 w-auto mx-auto" />
                    </div>
                </div>  
                </Section>
            </div>
                <Footer/>
        </main>
    )
}