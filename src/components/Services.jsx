import React from 'react'
import img1 from './images/unnamed (1).webp'
import img2 from './images/unnamed (2).webp'
import img3 from './images/unnamed.webp'

const Services = () => {

    const services = [
        {service:'Mulching', description:"Mulching involves spreading a protective layer of material over soil to retain moisture, suppress weeds, and regulate soil temperature", picture:img1, alt:'A1 septic truck'},
        {service:'Seeding', description:"Seeding refers to the process of planting seeds in soil to establish new grass or plants, promoting growth and enhancing the appearance of the landscape.", picture:img2, alt:'Corporate Septic Tank Pumping'},
        {service:'Sod installation',description:" Sod installation is the method of laying pre-grown grass turf onto prepared soil, providing an instant lawn solution for immediate results in landscaping projects.", picture:img3, alt:'Septic Inspection'},
    ]

  return (
    <div className='text-center containerServ'>
        <h2>Our <span className='highlight'>Services</span> </h2>
        <div className='servicesContainer'>
            {services.map((item,i)=>(
                <div key={i} className='services'>
                    <h3>{item.service}</h3>
                    <p>{item.description}</p>
                    <img src={item.picture} alt={item.alt} />
                </div>
            ))}
        </div>
        <a href="" className='btn'>Get Free Estimate!</a>
    </div>
  )
}

export default Services