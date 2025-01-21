import Counter from "@/app/components/hack4her/countdown";
import QueEsHack4Her from "@/app/components/hack4her/QueEsHack4Her";

const Hack4HerPage = () => {
    return (
        <>
            <div className="bg-hack4her-bg pt-6">
                <Counter />
            </div>
            <QueEsHack4Her />
        </>
    )
}

export default Hack4HerPage;