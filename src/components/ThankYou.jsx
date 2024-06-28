import React from 'react';

const ThankYou = () => {
  return (
    <div className='thankYouCont'>
        <div className="thank-you-message">
        <h1>Thank You!</h1>
        <p>We appreciate you taking the time to fill out our form. Your feedback and inquiries are important to us, and we will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to explore more about our services or get in touch with us directly if you have any urgent questions.</p>
        <a href="/services" className="btn primary">Explore Services</a>
        <a href="/contact" className="btn secondary">Contact Us</a>
        </div>
    </div>
  );
}

export default ThankYou;
