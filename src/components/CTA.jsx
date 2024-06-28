import { React, useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    service: "",
    customer: "",
    comments: "",
  });

  return (
    <div className="text-center CTA">
      <div className="about text-center">
        <div className="overlay">
        <h1>We Pride Ourselves on <span className="highlight">Quality</span></h1>
            <p>
            Transform your lawn into a lush oasis with our premium lawn care service, where quality is not just a promise but a way of life. Experience the difference with our meticulous attention to detail and commitment to delivering the greenest, healthiest, envy-inducing lawn on the block.
            </p>
            <a className="callbutton" href="tel:7203547497">Give us a Call!</a>
        </div>
      </div>
      <div className="CTAForm">
        <h2>Get A <span className="highlight">FREE</span> Estimate</h2>
        <form action="">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="CTAInput"
              required
            />
          </div>
          <div>
            <input type="text" name="email" className="CTAInput" placeholder="Email" required />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone"
              className="CTAInput"
            />
          </div>
          <div>
            <input type="text" name="address" className="CTAInput" placeholder="Address" required />
            <select name="" id="" className="CTAInput" required>
                <option value="Service" disabled selected hidden>
                    Select Service
                </option>
                <option value="Disposal">Disposal and Cleanup</option>
                <option value="Construction">Construction and Installation</option>
                <option value="Design">Design Services</option>
                <option value="plantCare">Plant Care and Management</option>
            </select>
          </div>
          <div>
            <select name="Customer" className="CTAInput" required>
              <option value="" disabled selected hidden>
                Are You A New Customer?
              </option>
              <option value="">Yes, I am a New Customer.</option>
              <option value="">No, I am not a New Customer.</option>
            </select>
          </div>
          <input type="Submit" className="CTASubmit" value={"Submit"} />
        </form>
      </div>
    </div>
  );
};

export default CTA;
