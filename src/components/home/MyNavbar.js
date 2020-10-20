import React from 'react'
import { Navbar } from 'react-bootstrap'
import { BsFillXDiamondFill, BsBriefcase, BsPhone } from "react-icons/bs";
import Logo from '../../assets/ABHISHEK-logo.png'

const MyNavbar = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#home">
                <img src={Logo} className="logo" alt="Abhishek Kumar Upadhyay"></img>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <div className="ml-auto pr-3 nav-links">
                    <a href="#workeperience"><BsBriefcase /> Work Experiences</a>
                    <a href="#skills"><BsFillXDiamondFill /> Skills</a>
                    <a href="#contact"><BsPhone /> Contact</a>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
