import { ContactIcon } from "@/app/components/general/ContactIcon";
import Footer from "@/app/components/general/Footer";
import { FaRegEnvelope } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";

const Contacto = () => {
    return (
        <div className="font-montserrat font-light">
            <div className="flex flex-row justify-center">

                <div className="text-center py-20 text-sm w-1/2">
                    <p>
                        ¡Escríbenos en cualquiera de las siguientes opciones!
                        <br />
                        Nos pondremos en contacto lo antes posible.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-between mt-5 px-24">
                        <ContactIcon Icon={FaRegEnvelope} title="Correo electrónico" media="wit.mty@gmail.com" url="wit.mty@gmail.com" mail />
                        <ContactIcon Icon={FiInbox} title="Redes Sociales" media="@wit.mty" url="https://www.instagram.com/wit.mty/" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contacto;