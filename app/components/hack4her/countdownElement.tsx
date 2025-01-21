
const CountdownElement = ({ time, label }: { time: number, label: string }) => {
    return (
        <div className="text-white font-montserrat flex flex-col items-center">
            <div className="text-3xl font-light">
                {time}
            </div>
            <div className="font-light">
                {label}
            </div>
        </div>
    )
}

export default CountdownElement;