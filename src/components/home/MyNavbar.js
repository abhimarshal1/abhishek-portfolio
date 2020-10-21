import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BsFillXDiamondFill, BsBriefcase, BsPhone } from "react-icons/bs";

const MyNavbar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">
                <img src="https://drive.google.com/uc?id=18mfqWkOV2BvCil3qWlVXcsh0xlE6GQA-" className="logo" alt="Abhishek Kumar Upadhyay"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto pr-3 pt-3 nav-links">
                    <Nav.Link href="#workeperience" className="px-4" style={{ color:'#394867'}}><BsBriefcase /> Work Experiences</Nav.Link>
                    <Nav.Link href="#skills" className="px-4" style={{ color: '#394867' }}><BsFillXDiamondFill /> Skills</Nav.Link>
                    <Nav.Link href="#contact" className="px-4 mr-5" style={{ color: '#394867' }}><BsPhone /> Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
