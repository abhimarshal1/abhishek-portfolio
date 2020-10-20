import React from 'react'
import { Navbar } from 'react-bootstrap'
import { BsFillXDiamondFill, BsBriefcase, BsPhone } from "react-icons/bs";

const MyNavbar = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#home">
                <img src="https://drive.google.com/uc?id=18mfqWkOV2BvCil3qWlVXcsh0xlE6GQA-" className="logo" alt="Abhishek Kumar Upadhyay"></img>
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
