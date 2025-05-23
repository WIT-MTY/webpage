import SectionHack4Her from "@/app/components/hack4her/sectionHack4Her";

const Schedule = () => {
    return(
        <SectionHack4Her>
            <div className="relative w-full md:min-h-screen px-10 py-20 flex flex-col items-center mb-40">
                <div className="relative text-center">
                    <div className="inline-block bg-white rounded-full shadow-lg px-6 py-4">
                        <h1 className="text-hack4her-bg font-montserrat font-extrabold text-4xl md:text-5xl"> Horario </h1> 
                    </div>    
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16 justify-center place-items-center mb-32">
                    
                    {/* Dia 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm self-start">
                        <h3 className="text-lg md:text-xl text-center font-semibold font-montserrat">Viernes 13 de junio</h3>
                        <div className="mt-4 space-y-2">
                            <div className=" text-white px-6 py-2 rounded-full text-center font-semibold" style={{ backgroundColor: "#f0044c" }}>
                                Reunión Internacional Wits & Industry
                            </div>
                            <p className="text-center text-sm md:text-base">8:00 AM - 3:00 PM</p>
                            <div className=" text-white px-6 py-2 rounded-full text-center font-semibold" style={{ backgroundColor: "#f0044c" }}>
                                Talleres de actualización
                            </div>
                            <p className="text-center text-sm md:text-base">3:00 PM - 6:30 PM</p>
                        </div>
                    </div>

                     {/* Dia 2 */}
                     <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm self-start">
                        <h3 className="text-lg md:text-xl text-center font-semibold font-montserrat">Sábado 14 de junio</h3>
                        <div className="mt-4 space-y-2">
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold" style={{ backgroundColor: "#f0044c" }}>
                                Registro
                            </div>
                            <p className="text-center text-sm md:text-base">7:00 AM - 9:00 AM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold" style={{ backgroundColor: "#f0044c" }}>
                                Inauguración
                            </div>
                            <p className="text-center text-sm md:text-base">9:00 AM - 10:00 AM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold"style={{ backgroundColor: "#f0044c" }}>
                                Presentación de retos
                            </div>
                            <p className="text-center text-sm md:text-base">10:00 AM - 11:00 AM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold" style={{ backgroundColor: "#f0044c" }}>
                                Inicia el reloj
                            </div>
                            <p className="text-center text-sm md:text-base">11:00 AM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold" style={{ backgroundColor: "#f0044c" }}>
                                Comida
                            </div>
                            <p className="text-center text-sm md:text-base">1:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold" style={{ backgroundColor: "#f0044c" }}>
                                Cena
                            </div>
                            <p className="text-center text-sm md:text-base">8:30 PM</p>
                        </div>
                    </div>

                     {/* Dia 3 */}
                     <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm self-start">
                        <h3 className="text-lg md:text-xl text-center font-semibold font-montserrat">Domingo 15 de junio</h3>
                        <div className="mt-4 space-y-2">
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold"style={{ backgroundColor: "#f0044c" }}>
                                Desayuno
                            </div>
                            <p className="text-center text-sm md:text-base">8:00 AM - 9:30 AM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold"style={{ backgroundColor: "#f0044c" }}>
                                Finaliza el reto
                            </div>
                            <p className="text-center text-sm md:text-base">11:00 AM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold"style={{ backgroundColor: "#f0044c" }}>
                                Evaluación
                            </div>
                            <p className="text-center text-sm md:text-base">11:30 AM - 1:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold"style={{ backgroundColor: "#f0044c" }}>
                                Networking
                            </div>
                            <p className="text-center text-sm md:text-base">12:30 PM - 2:00 PM</p>
                            <div className="bg-purple-700 text-white px-6 py-2 rounded-full text-center font-semibold"style={{ backgroundColor: "#f0044c" }}>
                                Premiación
                            </div>
                            <p className="text-center text-sm md:text-base">2:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionHack4Her>
    )
}

export default Schedule