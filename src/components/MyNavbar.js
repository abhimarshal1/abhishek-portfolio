import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BsXDiamond, BsBriefcase, BsViewList, BsDownload, BsInfoCircle } from "react-icons/bs";
import { Link } from "react-scroll";

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false)

    const setNavExpanded = () => {
        setExpanded(!expanded);
    };
    const closeNav = () => {
        setExpanded(false);
    }

    return (
        <Navbar expand="lg" fixed="top" className="navbar-section" onToggle={setNavExpanded}
            expanded={expanded}>
            <Navbar.Brand>
                <Link to="home" spy={true} smooth={true} duration={500} offset={-60}>
                    <img src="https://drive.google.com/uc?id=18mfqWkOV2BvCil3qWlVXcsh0xlE6GQA-" className="logo" alt="Abhishek" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <BsViewList className="menu-icon" />
            </Navbar.Toggle>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto nav-links" onClick={closeNav}>
                    <Link to="about" onClick={closeNav} spy={true} smooth={true} duration={500} offset={-60}><BsInfoCircle /> About</Link>
                    <Link to="workexperience" onClick={closeNav} spy={true} smooth={true} duration={500} offset={-60}><BsBriefcase /> Experiences</Link>
                    <Link to="skills" onClick={closeNav} spy={true} smooth={true} duration={500} offset={-50}><BsXDiamond /> Skills</Link>
                    <a href="https://drive.google.com/uc?export=download&id=13QeYjwjoohqTza4QmpgD29Pcp3zJ97d6"><BsDownload /> Resume</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
