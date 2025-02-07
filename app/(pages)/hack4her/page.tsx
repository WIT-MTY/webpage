import Counter from "@/app/components/hack4her/countdown";
import Definition from "@/app/components/hack4her/QueEsHack4Her"
import Scheme from "@/app/components/hack4her/schedule"
import FAQS from '@/app/components/hack4her/textCarousel'

const Hack4HerPage = () => {
    return (
        <>
            <div className="bg-hack4her-bg pt-6">
                <Counter />
            </div>
            <Definition />
            <Scheme />
            <FAQS />
        </>
    )
}

export default Hack4HerPage;