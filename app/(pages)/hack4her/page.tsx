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
                <div className="visible md:h-0 h-24 bg-hack4her-bg"></div>
                <div id="definition-section">
                    <Definition />
                </div>
                <div className="visible md:h-0 h-32 bg-hack4her-bg"></div>
                <div className="visible md:h-0 h-32 bg-hack4her-bg"></div>
                <div id="schedule-section mt-80 mid:px-20 md:py-32">
                    <Scheme />
                </div>
                <div className="visible md:h-0 h-80 bg-hack4her-bg"></div>
                <div className="visible md:h-0 h-80 bg-hack4her-bg"></div>
                <div className="visible md:h-0 h-20 bg-hack4her-bg"></div>
                <div className="mid:px-20 md:py-32">
                    <div className="visible md:h-0 h-24 bg-hack4her-bg"></div>
                    <FAQS />
                </div>
                <div className="visible md:h-0 h-12 bg-hack4her-bg"></div>
                <Sponsor />
            </div>
            {/* Badge de MLH */}
            <a 
                id="mlh-trust-badge" 
                className="fixed top-0 left-[170px] md:right-[220px] max-w-[100px] min-w-[60px] w-[10%] z-50"
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" 
                target="_blank"
            >
                <img 
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" 
                    alt="Major League Hacking 2025 Hackathon Season" 
                    style={{width:"100%"}} />
            </a>
            <Footer />
        </>
    )
}

export default Hack4HerPage;