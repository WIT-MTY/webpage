import { FaInstagram, FaLinkedin } from 'react-icons/fa';



const ContactInfo = () => {
    return (
        <div className="flex flex-col items-center text-center py-10">
            <h2 className="text-primary font-bold font-montserrat text-3xl mb-3">¡Conéctate con nosotros!</h2>
            <p className="text-gray-600 mb-6">Escríbenos o síguenos en redes sociales.</p>

            {/* Contact Icons */}
            <div className="flex justify-center gap-8">
                {/* Email */}
                <div className="flex flex-col items-center">
                    <a href="mailto:wit.mty@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/altSocials/email.png" alt="Email" className="w-16 h-16 hover:opacity-80 transition" />
                    </a>
                    <p className="mt-2 text-gray-700 text-sm">wit.mty@gmail.com</p>
                </div>

                {/* Instagram */}
                <div className="flex flex-col items-center">
                    <a href="https://www.instagram.com/wit.mty/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">
                        <img src="/images/altSocials/insta.png" alt="Instagram" className="w-16 h-16 hover:opacity-80 transition" />
                    </a>
                    <p className="mt-2 text-gray-700 text-sm">@wit.mty</p>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col items-center">
                    <a href="https://www.linkedin.com/company/wit-mty/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/altSocials/linkd.png" alt="LinkedIn" className="w-16 h-16 hover:opacity-80 transition" />
                    </a>
                    <p className="mt-2 text-gray-700 text-sm">/company/wit-mty</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
