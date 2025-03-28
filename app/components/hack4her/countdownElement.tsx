
const CountdownElement = ({ time, label }: { time: number, label: string }) => {
    return (
        <div className="text-white font-montserrat flex flex-col items-center">
            <div className="text-xl font-light md:text-3xl">
                {time}
            </div>
            <div className="font-light text-sm md:text-normal">
                {label}
            </div>
        </div>
    )
}

export default CountdownElement;