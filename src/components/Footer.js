import React from 'react'
import { SiWhatsapp, SiGmail } from "react-icons/si";

const Footer = () => {
    const email = 'abhi.marshal1@gmail.com';
    const whatsapp = '918290585670';
    return (
        <section className="footer-section intro-2">
            <div className="mail">
                <a href={`mailto:${email}`}><SiGmail /></a>
            </div>
            <div className="whatsapp">
                <a href={`https://wa.me/${whatsapp}`} rel="noopener noreferrer" target='_blank'><SiWhatsapp /></a>
            </div>
        </section>
    )
}

export default Footer
