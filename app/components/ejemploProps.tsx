interface EjemploProps {
    nombre: string;
    edad: number;

}


const EjemploProps: React.FC<EjemploProps> = ({ nombre, edad }) => {
    return (
        <div className="m-4 bg-slate-100 w-1/5 p-3">
            <h1 className="text-teal-500 font-mono">
                {nombre}
            </h1>
            <p>
                Edad: {edad}
            </p>
            <Example />
            
        </div>
    )
}

export const Example = () => {
    return (
        <div>
            hola
        </div>
    )
}

export default EjemploProps;