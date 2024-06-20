import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {

    const email = 'example@example.com';
    const subject = 'Inquiry';

    const emailClick = () => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    };

    const phoneNumber = '3036590610';

    const phoneClick = () => {
        console.log("click")
        window.location.href = `tel:${phoneNumber}`
    }

  return (
    <div className="text-center foot">
        <h1>Logo</h1>
        <p>Your Go-To Lawn Care Service</p>
        <p>Proudly Serving Colorado.</p>
        <p onClick={phoneClick}>(720) 650-1682</p>
        <p onClick={emailClick}>ExampleEmail@gmail.com</p>
        <div className="footSocials">
            <a href="/">
                <FaFacebook size={40}/>
            </a>
            <a href="/">
                <FaLinkedin size={40}/>
            </a>
            <a href="/">
                <FaXTwitter size={40}/>
            </a>
            <a href="/">
                <FaInstagram size={40}/>
            </a>
        </div>
        <div>
            <a href="https://melodious-unicorn-55b203.netlify.app/">
                <p>Website Designed By RFCoder</p>
            </a>
        </div>
      {/* <h4 className="text-decoration-underline">Contact and Hours</h4>
      <div className="d-md-flex justify-content-center grid gap-4">
        <div className="border rounded">
            <p>Email:</p>
            <button onClick={emailClick} style={{paddingBottom:'20px'}} className="btn btn-link">Exampleemail.com</button><br />
            <p>Phone:</p>
            <button onClick={phoneClick} style={{paddingBottom:'20px'}} className="btn btn-link">(303) 659-0610</button>
        </div>
        <p className="d-flex align-items-center justify-content-center border p-2 rounded">
            Weekdays Open Daily From 7:30am to 6pm <br />
            Saturday Open 8am to 2pm <br />
            Closed Sundays
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
