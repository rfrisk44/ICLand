import React from 'react';
import {Link} from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className='thankYouCont'>
        <div className="thank-you-message">
        <h1>Thank You!</h1>
        <p>We appreciate you taking the time to fill out our form. Your feedback and inquiries are important to us, and we will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to explore more about our services.</p>
        <Link to="/gallery" className="btn primary">View Previous Work</Link>
        <Link to="/" className="btn secondary">Home</Link>
        </div>
    </div>
  );
}

export default ThankYou;
