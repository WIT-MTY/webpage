import Counter from "@/app/components/hack4her/countdown";
import Definition from "@/app/components/hack4her/QueEsHack4Her"
import Scheme from "@/app/components/hack4her/schedule"

const Hack4HerPage = () => {
    return (
        <>
            <div className="bg-hack4her-bg pt-6">
                <Counter />
            </div>
            <Definition />
            <Scheme />
        </>
    )
}

export default Hack4HerPage;