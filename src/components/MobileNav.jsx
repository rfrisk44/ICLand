import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBars, FaFacebook, FaYelp, FaHammer } from 'react-icons/fa';
import { IoBook, IoCloseSharp, IoCallSharp } from "react-icons/io5";
import { SlPicture } from "react-icons/sl";
import { MdConnectWithoutContact } from "react-icons/md";
import { SiHomeadvisor } from "react-icons/si";

const MobileNav = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <div>
      <div className="hamburger-container">
        <div className={`icon-container ${expanded ? 'expanded' : ''}`}>
          <FaBars size={40} onClick={handleToggle} className="hamburger-icon" />
          <IoCloseSharp size={40} color='white' onClick={handleToggle} className="close-icon" />
        </div>
      </div>
      <div className={`side-nav-container ${expanded ? 'expanded' : ''}`}>
        <h2>IC Landscaping</h2>
        <nav className="side-nav-links">
          <Link className="side-nav-link" to="/" onClick={handleLinkClick}><FaHome /> Home</Link>
          <Link className="side-nav-link" to="/about" onClick={handleLinkClick}><IoBook />About</Link>
          <Link className="side-nav-link" to="/contact" onClick={handleLinkClick}><MdConnectWithoutContact />Contact</Link>
          <Link className="side-nav-link" to="/services" onClick={handleLinkClick}><FaHammer />Services</Link>
          <Link className="side-nav-link" to="/gallery" onClick={handleLinkClick}><SlPicture />Gallery</Link>
        </nav>
        <a href='tel:7206417228' id='mobileButton'><IoCallSharp size={30}/> Call Us Now</a>
        <div id='mobileSocial'>
            <a href="https://www.facebook.com/ICLandscape?mibextid=LQQJ4d" className="btn socials"><FaFacebook size={30} /></a>
            <a href="https://www.yelp.com/biz/ic-landscaping-and-concrete-brighton-2#location-and-hours" className="btn socials"><FaYelp size={30} /></a>
            <a href="/" className="btn socials"><SiHomeadvisor size={30} /></a>
        </div>
        <p id='note' className='text-center'>*Our HomeAdvisor is under our previous name Casillas Landscaping*</p>
      </div>
    </div>
  );
}

export default MobileNav;
