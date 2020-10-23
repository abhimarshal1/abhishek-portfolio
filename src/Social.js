import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Social = () => {
    const fbLink= 'https://www.facebook.com/abhi.marshal';
    const linkedinLink = 'https://www.linkedin.com/in/abhishek-k-upadhyay/';
    const githubLink = 'https://github.com/abhimarshal1';
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
        </ul>
    )
}

export default Social
