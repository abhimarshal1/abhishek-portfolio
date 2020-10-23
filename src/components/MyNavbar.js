import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BsFillXDiamondFill, BsBriefcase, BsPhone, BsViewList, BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";

const MyNavbar = () => {
    return (
        <Navbar expand="lg" fixed="top" className="navbar-section">
            <Navbar.Brand>
                <Link to="home" spy={true} smooth={true} duration={500} offset={-60}>
                    <img src="https://drive.google.com/uc?id=18mfqWkOV2BvCil3qWlVXcsh0xlE6GQA-" className="logo" alt="Abhishek Kumar Upadhyay" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <BsViewList className="menu-icon" />
            </Navbar.Toggle>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto nav-links">
                    <Link to="workexperience" spy={true} smooth={true} duration={500} offset={-60}><BsBriefcase /> Experiences</Link>
                    <Link to="skills" spy={true} smooth={true} duration={500} offset={-60}><BsFillXDiamondFill /> Skills</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} offset={-60}><BsPhone /> Contact Me</Link>
                    <a href="https://drive.google.com/uc?export=download&id=13QeYjwjoohqTza4QmpgD29Pcp3zJ97d6"><BsDownload /> Resume</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
