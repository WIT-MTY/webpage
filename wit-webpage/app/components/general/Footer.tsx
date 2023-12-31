'use client'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {

    return (
        <div className="w-full border-t flex flex-row items-center justify-center py-10 text-5xl gap-3">
            <a href="https://www.linkedin.com/company/82364150/" target="_blank">
                <FaLinkedin />
            </a>
            <a href="" target="_blank">
                <FaFacebook />
            </a>
            <a href="https://instagram.com/wit.mty?igshid=YmMyMTA2M2Y=" target="_blank">
                <RiInstagramFill />
            </a>

        </div>
    )
}

export default Footer;