import React from 'react';
import { Navbar} from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { FaYelp } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { IoCallSharp } from "react-icons/io5";
import logo from './images/1.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar expand="xxl" className="text-center myNav">
        <img src={logo} alt="Logo" />
            <div className='linkContainer'>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About Us</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/gallery">Gallery</Link>
                <Link className="link" to="/services">Services</Link>
            </div>
            <div className="text-center socialsCont">
                <a href="tel:7206417228" className="btn appointmentBtn"><IoCallSharp size={25}/>Call Now</a>
                <a href="https://www.facebook.com/ICLandscape?mibextid=LQQJ4d" className="btn socials"><FaFacebook size={30} /></a>
                <a href="https://www.yelp.com/biz/ic-landscaping-and-concrete-brighton-2#location-and-hours" className="btn socials"><FaYelp size={30} /></a>
                <a href="https://www.homeadvisor.com/rated.CasillasLandscaping.22310695.html" className="btn socials"><SiHomeadvisor size={30} /></a>
            </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
