import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiWhatsapp, SiGmail } from "react-icons/si";

const Social = () => {
    const fbLink= 'https://www.facebook.com/abhi.marshal';
    const linkedinLink = 'https://www.linkedin.com/in/abhishek-k-upadhyay/';
    const githubLink = 'https://github.com/abhimarshal1';
    const email = 'abhi.marshal1@gmail.com';
    const whatsapp = '918290585670';
    return (
        <ul className="ct-socials">
            <li>
                <a href={fbLink} rel="noopener noreferrer" target="_blank"><FaFacebook /></a>
            </li>
            <li>
                <a href={linkedinLink} rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
            </li>
            <li>
                <a href={githubLink} rel="noopener noreferrer" target="_blank"><FaGithub /></a>
            </li>
            <li>
                <a href={`mailto:${email}`} rel="noopener noreferrer"><SiGmail /></a>
            </li>
            <li>
                <a href={`https://wa.me/${whatsapp}`} rel="noopener noreferrer" target="_blank"><SiWhatsapp /></a>
            </li>
        </ul>
    )
}

export default Social
