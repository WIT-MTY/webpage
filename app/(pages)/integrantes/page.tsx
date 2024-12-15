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

    // const groupedIntegrantes = groupByRow(integrantes.integrantes);

    return (
        <>
            <div className="absolute bg-purple-500 rounded-full w-72 aspect-square -z-10 blur-3xl opacity-50 right-6 top-40" />
            <div className="p-10">

                <div>
                    {allIntegrantes.map((integrantes, key) => (
                        <div>
                            <IntegrantesHeader title={integrantes.subtitulo} subtitle={integrantes.subtitulo} key={key} />
                            <div className="flex flex-col items-center justify-center py-10 gap-4 px-10">
                                {
                                    groupByRow(integrantes.integrantes).map((integrantes, key) => (
                                        <IntegrantesRow integrantes={integrantes} key={key} />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Integrantes