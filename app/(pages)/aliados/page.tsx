import Section from "@/app/components/general/Section";
import Footer from "@/app/components/general/Footer";
import InfoHeader from "@/app/components/general/InfoHeader";
import Image from "next/image";
import Apex_systems from "../../../public/images/aliados/Apex-systems.png"
import LEGO from "../../../public/images/aliados/LEGO.png"
import MongoDB from "../../../public/images/aliados/MongoDB.png"
import SteelCase from "../../../public/images/aliados/Steelcase.png"
import Toyota from "../../../public/images/aliados/Toyota.png"

export default function PageSponsoring() {
    return (
        <main className="pt-24">
            <div className="overflow-scroll">
                <Section>
                    <div className="mt-4 mb-8 pt-8">
                        <InfoHeader title="Aliados" description="El grupo estudiantil ha colaborado con diferentes empresas de alcance nacional e internacional para la realización de nuestros proyectos, eventos y servicio social. \ Durante la gestión agosto a diciembre 2024 y febrero a junio 2025, las siguientes empresas han contribuido a los eventos de Women in Tech."/>
                    </div>
                </Section>
                <Section>
                <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-9 mb-16">
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                        <Image src={Apex_systems} alt="Apex Systems logo" className="h-14 w-auto mx-auto" />
                        <Image src={SteelCase} alt="Steelcase logo" className="h-28 w-auto mx-auto" />
                        <Image src={MongoDB} alt="MongoDB logo" className="h-28 w-auto mx-auto" />
                        <Image src={Toyota} alt="Toyota logo" className="h-20 w-auto mx-auto" />
                        <Image src={LEGO} alt="Lego logo" className="h-20 w-auto mx-auto" />
                    </div>
                </div>  
                </Section>
            </div>
                <Footer/>
        </main>
    )
}