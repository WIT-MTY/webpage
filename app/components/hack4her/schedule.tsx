import SectionHack4Her from "@/app/components/hack4her/sectionHack4Her";

const Schedule = () => {
    return(
        <SectionHack4Her>
            <div className="relative h-screen w-full px-10">
                <div className="relative mt-10 text-center">
                    <div className="inline-block bg-white rounded-full shadow-lg px-6 py-4">
                        <h1 className="text-hack4her-bg font-montserrat font-extrabold text-5xl"> Horario </h1> 
                    </div>    
                </div>
                <div className="mt-24 flex flex-wrap gap-28 justify-center">
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-128 h-auto">
                        <h3 className="text-xl text-center text-purple-800 font-semibold font-montserrat">Viernes 16</h3>
                        <div className="mt-4 space-y-2">
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Talleres de actualización
                            </div>
                            <p className="text-center italic">9:00 AM - 1:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Reunión de Wit & Industry
                            </div>
                            <p className="text-center italic">3:00 PM - 6:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Networking WIT & Industry
                            </div>
                            <p className="text-center italic">6:10 PM - 9:00 PM</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg w-128 h-auto">
                        <h3 className="text-xl text-center text-purple-800 font-semibold font-montserrat">Viernes 16</h3>
                        <div className="mt-4 space-y-2">
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Talleres de actualización
                            </div> 
                            <p className="text-center italic"> 9:00 AM - 1:00 PM</p> 
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold">
                                Reunión de Wit & Industry
                            </div> 
                            <p className="text-center italic"> 3:00 PM - 6:00 PM </p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center italic font-semibold"> 
                                Networking WIT & Industry 
                            </div>
                            <p className="text-center italic"> 6:10 PM - 9:00 PM </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg w-128 h-auto"> 
                        <h3 className="text-xl text-center text-purple-800 font-semibold font-montserrat">Viernes 16</h3>
                        <div className="mt-4 space-y-2">
                            <div className="bg-purple-700 text-white rounded-full px-6 py-2 text-center italic font-semibold">
                                Talleres de actualización 
                            </div>
                            <p className="text-center italic">9:00 AM - 1:00 PM</p>
                            <div className="bg-purple-700 text-white rounded-full px-6 py-2 text-center italic font-semibold">
                                Reunión de Wit & Industry
                            </div>
                            <p className="text-center italic">3:00 PM - 6:00 PM </p>
                            <div className="bg-purple-700 text-white rounded-full px-6 py-2 text-center italic font-semibold">
                                Networking WIT & Industry
                            </div>
                            <p className="text-center italic">6:10 PM - 9:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionHack4Her>
    )
}

export default Schedule