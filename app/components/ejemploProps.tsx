interface EjemploProps {
    nombre: string;
    edad: number;
}


const EjemploProps = ({ nombre, edad } : EjemploProps) => {
    return (
        <div className="m-4 bg-slate-100 w-1/5 p-3">
            <h1 className="text-teal-500 font-mono">
                {nombre}
            </h1>
            <p>
                Edad: {edad}
            </p>
        </div>
    )
}



export default EjemploProps;