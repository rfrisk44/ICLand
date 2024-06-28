import React from 'react'
import img1 from './images/IMG_0508.jpg'
import img2 from './images/7C387B01-5697-4EDF-8DAF-3FE757842D45.jpeg'
import img3 from './images/667F57E7-766D-4834-8EE1-334390FF2CB8.jpeg'
import { Link } from 'react-router-dom'

const Services = () => {

    const services = [
        {service:'Landscaping', description:"Transform outdoor spaces with professional design and maintenance services, including planting and lawn care.", picture:img1, alt:'A1 septic truck'},
        {service:'Concrete', description:" Provide durable and aesthetically pleasing concrete solutions for driveways, patios, walkways, and other structures.", picture:img2, alt:'Corporate Septic Tank Pumping'},
        {service:'Fencing',description:"We Proudly Install and repair a variety of fences to enhance property value, security, privacy, and aesthetic appeal. ", picture:img3, alt:'Septic Inspection'},
    ]

  return (
    <div className='text-center containerServ'>
        <h2><span className='highlight'>Services</span> </h2>
        <div className='servicesContainer'>
            {services.map((item,i)=>(
                <div key={i} className='services'>
                    <h3 className='text-decoration-underline'>{item.service}</h3>
                    <p>{item.description}</p>
                    <img src={item.picture} alt={item.alt} />
                </div>
            ))}
        </div>
        <Link to="/contact" className='estimate'>Get Free Estimate!</Link>
    </div>
  )
}

export default Services