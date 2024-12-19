
const IntegrantesHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="bg-primary font-montserrat text-white p-6 rounded-xl md:w-2/3">
                <h1 className="italic font-semibold text-2xl"> {title} </h1>
                <p className="font-thin text-sm"> {subtitle} </p>
            </div>
        </div>
    )
}

export default IntegrantesHeader;