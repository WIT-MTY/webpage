interface EjemploProps {
    nombre: string;
    edad: number;

}

const EjemploProps: React.FC<EjemploProps> = ({ nombre, edad }) => {
    return (
        <div className="m-4 bg-slate-100 w-1/5 p-3">
            <h1>
                {nombre}
            </h1>
            <p>
                Edad: {edad}
            </p>
        </div>
    )
}

export default EjemploProps;