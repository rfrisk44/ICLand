import React from "react";
import land from "./images/IMG_0508.jpg";
import fence from './images/667F57E7-766D-4834-8EE1-334390FF2CB8.jpeg';
import concrete from './images/o (18).jpg';

const additionalServices = [
  "Appliance disposal",
  "Furniture disposal",
  "Exterior wall construction",
  "Retaining walls",
  "Walkway construction or installation",
  "Irrigation design services",
  "Junk pickup",
  "Landscape design",
  "Landscaping building construction",
  "Greenscape construction",
  "Outdoor kitchen construction",
  "Lawn care",
  "Construction or installation",
  "Mattress disposal",
  "Exterior wall repair",
  "Retaining wall repair",
  "Disease management - shrubs",
  "Shrub planting",
  "Shrub removal",
  "Trash disposal",
  "Tree planting",
  "Tree stump removal",
  "Earthmoving or regrading",
  "Driveway construction or installation",
  "Interior wall construction",
  "Patio, porch, or terrace construction …",
  "Irrigation construction",
  "Property cleanout",
  "Landscape construction or installation",
  "Landscape maintenance",
  "Landscaping building design",
  "Greenscape design",
  "Landscaping waste disposal",
  "Design services",
  "Masonry/concrete repair",
  "Recycling disposal",
  "Interior wall repair",
  "Shrub care",
  "Insect management - shrubs",
  "Shrub pruning or trimming",
  "Shrub transplanting",
  "Tree care services",
  "Tree removal",
];

const ServicesPage = () => {
  return (
    <div className="servPageCont">
      <h1 className="text-center text-decoration-underline">Popular Services</h1>

        <div className="cont">
            <div className="firstServCont">
                <div className="firstServ">
                    <div className="image-overlay">
                    <div className="image-container">
                        <img src={land} alt="Service" className="firstServImage" />
                    </div>
                    <div className="serviceOverlay">
                        <h1 className="text-decoration-underline">Landscaping</h1>
                        <p className="text-center">Transform outdoor spaces with professional design and maintenance services, including planting and lawn care.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="firstServCont">
            <div className="firstServ">
                <div className="image-overlay">
                    <div className="image-container">
                        <img src={fence} alt="Service" className="firstServImage" />
                    </div>
                    <div className="serviceOverlay">
                        <h1 className="text-decoration-underline">Fencing</h1>
                        <p className="text-center">Provide durable and aesthetically pleasing concrete solutions for driveways, patios, walkways, and other structures.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="firstServCont">
            <div className="firstServ">
                <div className="image-overlay">
                    <div className="image-container">
                        <img src={concrete} alt="Service" className="firstServImage" />
                    </div>
                    <div className="serviceOverlay">
                        <h1 className="text-decoration-underline">Concrete</h1>
                        <p className="text-center">We Proudly Install and repair a variety of fences to enhance property value, security, privacy, and aesthetic appeal.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="text-center text-decoration-underline">
        <h3>Additional Services</h3>
      </div>
      <div className="additionalServicesGrid">
        {additionalServices.map((service, index) => (
          <div key={index} className="serviceItem">
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
