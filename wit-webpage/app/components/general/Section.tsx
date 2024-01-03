import { ReactNode } from "react"

const Section = ({children}: {children:ReactNode}) => {
    return (
        <div className="w-full flex flex-row justify-center">
            <div className="basis-2/3 xl:basis-1/2 2xl:basis-2/5">
                {children}
            </div>
        </div>
    )
}

export default Section;