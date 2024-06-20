import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";
import { IoStarSharp } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
  const list = [
    {
      quote: "Wow, Quick on doing the Job that needed to be Done. Had a Tree fall into the Side yard from the Wind. Not only took that out but also Racked up the Whole Yard. GREAT JOB",
      author: "Bob Luethje",
    },
    {
      quote: "We had an incredible crew clean out our front and back yard. They worked all day and got the job done. It looks incredible and exceeded expectation. On time and commutative the entire day.",
      author: "Teale Stone",
    },
    {
      quote: "That was the best yard service crew ever they worth every penny, this guys are more expensive but it definitely worth, thank you VOX we will continue doing business forever.",
      author: "Johhny Chavez",
    },
  ];

  return (
    <div
      className="text-center testimonialContainer"
      style={{ marginBottom: "1%" }}
    >
      <h2>Customer Testimonial</h2>
      <Container>
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={true}
          swipeable={true}
        >
          {list.map((item, i) => (
            <div key={i} className="testimonial">
              <FaQuoteRight />
              <p className="fw-bold">{item.quote}</p>
              <IoStarSharp/>
              <IoStarSharp/>
              <IoStarSharp/>
              <IoStarSharp/>
              <IoStarSharp/>
              <p>-{item.author}</p>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonials;
