import React from "react";
import { FaFacebook} from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { FaYelp } from "react-icons/fa";
import logo from './images/1.jpg'

const Footer = () => {

    const email = 'IClandscaping@gmail.com';
    const subject = 'Inquiry';

    const emailClick = () => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    };

  return (
    <div className="text-center foot">
        <img src={logo} alt="IC Landscaping" />
        <h4 className="text-decoration-underline">Contact and Hours</h4>
        <div className="d-md-flex justify-content-center grid gap-4">
            <p className="d-flex align-items-center justify-content-center">
                Weekdays Open Daily From 8am to 6pm <br />
                Closed Sundays
            </p>
        </div>
        <p>Your Go-To Lawn Care Service</p>
        <p>Proudly Serving Colorado.</p>
        <a href="tel:7206417228">(720) 641-7228</a>
        <p onClick={emailClick}>IClandscaping@gmail.com</p>
        <div className="footSocials">
            <a href="https://www.facebook.com/ICLandscape?mibextid=LQQJ4d">
                <FaFacebook size={40}/>
            </a>
            <a href="https://www.yelp.com/biz/ic-landscaping-and-concrete-brighton-2#location-and-hours">
                <FaYelp size={40}/>
            </a>
            <a href="/">
                <SiHomeadvisor size={40}/>
            </a>
        </div>
        <div>
            <a href="https://rfcoder.com/">
                <p className="rfCoder">Website Designed By RFCoder</p>
            </a>
        </div>
    </div>
  );
};

export default Footer;
