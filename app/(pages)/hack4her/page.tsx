import Counter from "@/app/components/hack4her/countdown";
import SectionHack4Her from "@/app/components/hack4her/sectionHack4Her";
import Sponsor from "@/app/components/hack4her/secSponsor";
import Definition from "@/app/components/hack4her/QueEsHack4Her"
import Scheme from "@/app/components/hack4her/schedule"

const Hack4HerPage = () => {
    return (
        <>
            <div className="bg-hack4her-bg pt-6">
                <Counter />
              <Sponsor />
            </div>
            <Definition />
            <Scheme />
        </>
    )
}

export default Hack4HerPage;