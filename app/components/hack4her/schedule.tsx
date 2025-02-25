import SectionHack4Her from "@/app/components/hack4her/sectionHack4Her";

const Schedule = () => {
    return(
        <SectionHack4Her>
            <div className="relative w-full min-h-screen px-10 py-20">
                <div className="relative text-center">
                    <div className="inline-block bg-white rounded-full shadow-lg px-6 py-4">
                        <h1 className="text-hack4her-bg font-montserrat font-extrabold text-4xl md:text-5xl"> Horario </h1> 
                    </div>    
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm h-auto">
                        <h3 className="text-lg md:text-xl text-center text-purple-800 font-semibold font-montserrat">Viernes 16</h3>
                        <div className="mt-4 space-y-2">
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Talleres de actualización
                            </div>
                            <p className="text-center italic text-sm md:text-base">9:00 AM - 1:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Reunión de Wit & Industry
                            </div>
                            <p className="text-center italic text-sm md:text-base">3:00 PM - 6:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Networking WIT & Industry
                            </div>
                            <p className="text-center italic text-sm md:text-base">6:10 PM - 9:00 PM</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm h-auto">
                        <h3 className="text-lg md:text-xl text-center text-purple-800 font-semibold font-montserrat">Viernes 16</h3>
                        <div className="mt-4 space-y-2">
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Talleres de actualización
                            </div>
                            <p className="text-center italic text-sm md:text-base">9:00 AM - 1:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Reunión de Wit & Industry
                            </div>
                            <p className="text-center italic text-sm md:text-base">3:00 PM - 6:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Networking WIT & Industry
                            </div>
                            <p className="text-center italic text-sm md:text-base">6:10 PM - 9:00 PM</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm h-auto">
                        <h3 className="text-lg md:text-xl text-center text-purple-800 font-semibold font-montserrat">Viernes 16</h3>
                        <div className="mt-4 space-y-2">
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Talleres de actualización
                            </div>
                            <p className="text-center italic text-sm md:text-base">9:00 AM - 1:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Reunión de Wit & Industry
                            </div>
                            <p className="text-center italic text-sm md:text-base">3:00 PM - 6:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Networking WIT & Industry
                            </div>
                            <p className="text-center italic text-sm md:text-base">6:10 PM - 9:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionHack4Her>
    )
}

export default Schedule