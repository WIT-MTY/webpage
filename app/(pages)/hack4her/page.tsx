import Counter from "@/app/components/hack4her/countdown";
import SectionHack4Her from "@/app/components/hack4her/sectionHack4Her";
import Sponsor from "@/app/components/hack4her/secSponsor";
import Definition from "@/app/components/hack4her/QueEsHack4Her"
import Scheme from "@/app/components/hack4her/schedule"
import FAQS from '@/app/components/hack4her/textCarousel'

const Hack4HerPage = () => {
    return (
        <>
            <div className="bg-hack4her-bg py-6">
                <Counter />
                <Definition />
                <Scheme />
                <FAQS />
                <Sponsor />
            </div>
        </>
    )
}

export default Hack4HerPage;