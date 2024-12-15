import IntegranteCard from "./integranteCard";

interface IntegrantesRowProps {
    nombre: string;
    puesto: string;
    fecha?: string;
    image: string;
    row: number;
    position: string;
    linkedin?: string;
}

const IntegrantesRow = ({ integrantes }: { integrantes: IntegrantesRowProps[] }) => {
    return (
        <div className="flex flex-wrap justify-center md:flex-row gap-4">
            {integrantes.map((integrante, key) => (
                <IntegranteCard key={key} nombre={integrante.nombre} puesto={integrante.puesto} fecha={integrante.fecha} image={integrante.image} position={integrante.position} linkedin={integrante.linkedin} />
            )
            )}
        </div>
    )
}

export default IntegrantesRow;