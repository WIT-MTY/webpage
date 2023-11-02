import Ejemplo from "../components/ejemplo"
import EjemploProps from "../components/ejemploProps"


const Page = () => {
    return (
        <div>
            Hola, esta es la pagina de ejemplo

            <div className="bg-purple-600 text-white p-2 w-40">
                :o
            </div>

            <Ejemplo />
            <EjemploProps nombre="Jimena" edad={19} />
            <EjemploProps nombre="Angela" edad={19} />
        </div>
    )
}

export default Page