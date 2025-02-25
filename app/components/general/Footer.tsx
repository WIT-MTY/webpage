'use client'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { SiTiktok } from 'react-icons/si'


const Footer = () => {

    return (
        <div className="w-full border-t flex flex-row items-center justify-center py-10 text-5xl gap-3">
            <a href="https://www.linkedin.com/company/82364150/" target="_blank">
                <FaLinkedin />
            </a>
            <a href="https://www.tiktok.com/@wit.mty?_t=ZM-8uBmSi130hZ&_r=1" target="_blank">
                <SiTiktok />
            </a>
            <a href="https://instagram.com/wit.mty?igshid=YmMyMTA2M2Y=" target="_blank">
                <RiInstagramFill />
            </a>

        </div>
    )
}

export default Footer;