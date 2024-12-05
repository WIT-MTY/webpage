'use client'

const Ejemplo = () => {
    const handleClick = () => {
        console.log("Hola")
    }

    return (
        <div className="flex flex-col w-1/2 bg-purple-300 text-white rounded-md m-10">
            <p className="py-10 ml-5">
                Componente de ejemplo
            </p>
            <button className="bg-blue-400 hover:bg-blue-300 self-center p-4 w-32 rounded-md mb-10" onClick={handleClick}>
                Boton
            </button>
        </div>
    )
}

export default Ejemplo