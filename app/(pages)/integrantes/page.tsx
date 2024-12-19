import IntegrantesHeader from "@/app/components/integrantes/integrantesHeader"
import IntegrantesRow from "@/app/components/integrantes/integrantesRow"
import { useIntegrantes } from "@/app/utils/hooks/useIntegrantes";

interface Integrante {
    nombre: string;
    puesto: string;
    image: string;
    row: number;
    fecha?: string;
    position: string;
    linkedin?: string;
}

const Integrantes = () => {
    const allIntegrantes = useIntegrantes();

    function groupByRow(integrantes: Integrante[]): Integrante[][] {
        const grouped: Record<number, Integrante[]> = {};

        integrantes.forEach((member) => {
            const row = member.row;
            if (!grouped[row]) {
                grouped[row] = [];
            }
            grouped[row].push(member);
        });

        return Object.values(grouped);
    }


    return (
        <div className="h-full relative">
            <div className="absolute bg-purple-500 rounded-full w-40 md:w-72 aspect-square -z-10 blur-xl md:blur-3xl opacity-50 right-6 md:top-20" />
            <div className="absolute bg-purple-500 rounded-full w-40 md:w-80 aspect-square -z-10 blur-2xl md:blur-3xl opacity-50 left-20 top-1/3" />
            <div className="absolute bg-purple-500 rounded-full w-40 md:w-72 aspect-square -z-10 blur-2xl md:blur-3xl opacity-50 right-20 bottom-40" />

            <div className="p-10">
                {allIntegrantes.map((integrantes, key) => (
                    <div key={key}>
                        <IntegrantesHeader title={integrantes.subtitulo} subtitle={integrantes.subtitulo} key={key} />
                        <div className="flex flex-wrap md:flex-col items-center justify-center py-10 gap-4 px-10">
                            {
                                groupByRow(integrantes.integrantes).map((integrantes, key) => (
                                    <IntegrantesRow integrantes={integrantes} key={key} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="absolute bg-purple-500 rounded-full w-72 aspect-square -z-10 blur-3xl opacity-50 right-56 bottom-5" /> */}
        </div>
    )
}

export default Integrantes