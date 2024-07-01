import React from 'react'
import { Container } from 'react-bootstrap'
import pool from './images/pool.jpeg'
import house from './images/IMG_2041.jpg'
import rock from './images/rockWork.jpeg'
import { PiTreeFill } from "react-icons/pi";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <Container className='aboutUs'>
        <h1 className='text-center text-decoration-underline'>About Us</h1>

        <div className='text-center'>
            <div className='dream'>
                <h2>Let’s Create Your Dream Landscape <PiTreeFill/></h2>
                <p>At IC Landscaping Corp. we are more than just a landscaping company – we are your partners in creating a beautiful, functional, and sustainable outdoor environment. Experience the difference with our premium services and let us help you bring your vision to life. Ready to transform your landscape? Give us a <a href="tel:7206417228"><FaPhoneFlip/> Call Today</a> or <Link to="/contact"><FaMessage/> contact us for a free estimate and consultation</Link>. We look forward to working with you!</p>
            </div>
        </div>

        <div className='aboutContainer'>
            <div className='aboutLeft'>
                <h2>We Pride Ourselves on Quality</h2>
                <p>At IC Landscaping Corp. we believe that a beautiful, well-maintained landscape can transform your home and elevate your lifestyle. With over 6 years of experience in the industry, we specialize in creating stunning outdoor spaces that reflect your vision and enhance the natural beauty of your property.</p>
            </div>
            <div className='aboutPicWrapper'>
                <img 
                src={pool} 
                alt="Quality Landscaping" 
                className='aboutPic' />
            </div>
        </div>

        <div className='aboutContainer'>
            <div className='aboutPicWrapper'>
                <img 
                    src={house}
                    alt="House Landscaping" 
                    className='aboutPic'
                 />
            </div>
            <div className='aboutRight'>
                <h2>Our Commitment to Excellence</h2>
                <p>Quality is not just a promise but a way of life for us. From the initial consultation to the final touches, our team of dedicated professionals is committed to delivering exceptional service and meticulous attention to detail. Whether it’s designing a lush garden oasis, installing durable concrete structures, or building secure and stylish fencing, we bring passion and expertise to every project.</p>
            </div>
        </div>

        <div className='aboutContainer'>
            <ul className='aboutLeft'>
                <h2>Why Choose Us?</h2>
                <li>Personalized Service: We work closely with you to understand your needs and preferences, ensuring that every project is tailored to your specific requirements.</li>
                <li>Expert Craftsmanship: Our skilled landscapers, designers, and builders use only the highest quality materials and techniques to create landscapes that are not only beautiful but built to last.</li>
                <li>Comprehensive Solutions: From lawn care and plant management to concrete installations and fencing, we offer a full range of services to meet all your landscaping needs.</li>
            </ul>
            <div className='aboutPicWrapper'>
                <img 
                src={rock} 
                alt="Rock Landscaping" 
                className='aboutPic'
                />
            </div>
        </div>

    </Container>
  )
}

export default About
