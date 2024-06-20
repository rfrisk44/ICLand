import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="text-center myNav">
      <Navbar
        expand="xxl"
      >
        <a href="/" className="d-inline-block p-2">
          <h1>Logo</h1>
        </a>
        <Navbar.Toggle aria-controls="navbarNav" className="hamburger"/>
        <Navbar.Collapse id="navbarNav" className="justify-content-md-between">
          <Nav className="text-center">
            <Nav.Link className="link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="link" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="link" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="link" href="/services">
              Services
            </Nav.Link>
          </Nav>
          <div className="text-center">
            <a
              href="/appointment"
              className="btn appointmentBtn"
            >
              Contact Us
            </a>
            <a href="/" className="btn socials">
              <FaFacebook size={30}/>
            </a>
            <a href="/" className="btn socials">
              <FaXTwitter size={30} />
            </a>
            <a href="/" className="btn socials">
              <AiFillInstagram size={30} />
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
