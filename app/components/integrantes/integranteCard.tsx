
const IntegranteCard = ({ nombre, puesto, fecha, position, image, linkedin }: { nombre: string, puesto: string, fecha?: string, position: string, image: string, linkedin?: string }) => {
    const styeRight = {
        borderTopLeftRadius: '80rem', 
        borderTopRightRadius: '9999px',
        borderBottomLeftRadius: '9999px', 
        borderBottomRightRadius: '9999px',
    };

    const styleLeft = {
        borderTopLeftRadius: '9999px',
        borderTopRightRadius: '80rem',
        borderBottomLeftRadius: '9999px',
        borderBottomRightRadius: '9999px',
    };
    
    const styleCenter = {
        borderTopLeftRadius: '80rem',
        borderTopRightRadius: '80rem',
        borderBottomLeftRadius: '9999px',
        borderBottomRightRadius: '9999px',
    };

    return (
        <div className="w-40">
            <a href={linkedin} target="_blank" rel="noreferrer">
            <div style={position === "left" ? styleLeft : position === "right" ? styeRight : styleCenter} className={`bg-violet-400 ` }>
                <img style={styleCenter} src={image}/>
            </div>
            <div className="font-montserrat text-center">
                <div className="font-bold text-lg py-0 leading-3 pt-2 text-secondary"> {nombre} </div>
                <div className="font-light text-sm py-0"> {puesto} </div>
                {fecha && (
                    <p className="font-light text-xs"> {fecha} </p>
                )}
            </div>
            </a>
        </div>
    )
}

export default IntegranteCard;