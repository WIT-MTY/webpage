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
                <Definition />
                <Scheme />
                <FAQS />
                <Sponsor />
            </div>
            <Footer />
        </>
    )
}

export default Hack4HerPage;