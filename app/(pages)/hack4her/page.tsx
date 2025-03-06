import Counter from "@/app/components/hack4her/countdown";
import SectionHack4Her from "@/app/components/hack4her/sectionHack4Her";
import Sponsor from "@/app/components/hack4her/secSponsor";
import Definition from "@/app/components/hack4her/QueEsHack4Her"
import Scheme from "@/app/components/hack4her/schedule"
import FAQS from '@/app/components/hack4her/textCarousel'
import Footer from "@/app/components/general/Footer";

const Hack4HerPage = () => {
    return (
        <>
            <div className="bg-hack4her-bg pb-20 pt-6">
                <Counter />
                <div id="definition-section">
                    <Definition />
                </div>
                <div className="visible md:h-0 h-32 bg-hack4her-bg"></div>
                <div id="schedule-section mt-80">
                    <Scheme />
                </div>
                <div className="visible md:h-0 h-80 bg-hack4her-bg"></div>
                <div className="visible md:h-0 h-80 bg-hack4her-bg"></div>
                <div className="visible md:h-0 h-80 bg-hack4her-bg"></div>
                <div className="visible md:h-0 h-20 bg-hack4her-bg"></div>
                <FAQS />
                <div className="visible md:h-0 h-12 bg-hack4her-bg"></div>
                <Sponsor />
            </div>
            <Footer />
        </>
    )
}

export default Hack4HerPage;