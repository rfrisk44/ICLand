import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";
import { IoStarSharp } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
  const list = [
    {
      quote: "Iggy and his crew were amazing 🤩 They were very good at what they do…we had a lot of concrete work done and They were great!! Also helped us out with some drainage issues and we will be hiring them again for any future projects…check them out!! We couldn’t be happier.",
      author: "Amanda Stephens",
    },
    {
      quote: "Really satisfied with the landscaping and concrete work they did at my house. Will recommend them for any of your future products!",
      author: "Esmeralda Mendoza",
    },
    {
      quote: "I highly Recommend I.C. Landscaping! Trustworthy, respectful, and reliable!!",
      author: "Miranda Burke",
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
