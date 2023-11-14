import Ejemplo from "@/app/components/ejemplo"
import EjemploProps from "../../components/ejemploProps"


const Page = () => {
    return (
        <div>
            Hola, esta es la pagina de ejemplo

            <div className="bg-indigo-400 text-white p-2 w-40 font-bold-">
                :o
            </div>

            <Ejemplo />

            <EjemploProps nombre="Jimena" edad={19} />
            <EjemploProps nombre="Angela" edad={20} />
        </div>
    )
}

export default Page