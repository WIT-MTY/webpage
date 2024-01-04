import Section from "@/app/components/general/Section";
import InfoHeader from "@/app/components/general/InfoHeader";
//import CenteredRectangle from "@/app/components/general/CenteredRectangle";
import Footer from "@/app/components/general/Footer";

export default function PageSponsoring() {
    return (
        <main>
            <div className="overflow-scroll">
                <Section>
                    <div className="my-10 aspect-square relative">
                        <InfoHeader title="Patrocinios" description="El grupo estudiantil ha colaborado con diferentes empresas de alcance nacional e internacional para el patrocinio de nuestros proyectos, eventos y servicio social. \ Durante el semestre agosto a diciembre del 2023, tuvimos la oportunidad de colaborar con las siguientes empresas para patrocinar Journey to Internship y WitCode."/>
                    </div>
                </Section>
            </div>
        </main>
    )
}