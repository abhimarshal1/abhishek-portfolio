import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Social = () => {
    return (
        <ul class="ct-socials">
            <li>
                <a href="https://www.facebook.com/abhi.marshal" target="_blank"><FaFacebook /></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/abhishek-k-upadhyay/" target="_blank"><FaLinkedin /></a>
            </li>
            <li>
                <a href="https://github.com/abhimarshal1" target="_blank"><FaGithub /></a>
            </li>
        </ul>
    )
}

export default Social
