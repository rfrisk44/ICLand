import { React, useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
      <h1>We <span className="highlight">Pride</span> Ourselves on Quality.</h1>
        <p>
        Transform your lawn into a lush oasis with our premium lawn care service, where quality is not just a promise but a way of life. Experience the difference with our meticulous attention to detail and commitment to delivering the greenest, healthiest, envy-inducing lawn on the block.
        </p>
      </div>
      <div className="CTAForm">
        <h2>Get A <span className="highlight">FREE </span>Estimate</h2>
        <form action="">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="CTAInput"
              required
            />
            <input type="text" name="lastName" className="CTAInput" placeholder="Last Name" />
          </div>
          <div>
            <input type="text" name="email" className="CTAInput" placeholder="Email" required />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone"
              className="CTAInput"
              required
            />
          </div>
          <div>
            <input type="text" name="address" className="CTAInput" placeholder="Address" required />
            <select name="" id="" className="CTAInput" required>
                <option value="Service" disabled selected hidden>
                    Select Service
                </option>
                <option value="Residential">Residential Pumping</option>
                <option value="Residential">Commercial Pumping</option>
                <option value="Residential">Septic Inspection</option>
            </select>
          </div>
          <div>
            <select name="Customer" id="" className="CTAInput" required>
              <option value="" disabled selected hidden>
                Are You A New Customer?
              </option>
              <option value="">Yes, I am a New Customer.</option>
              <option value="">No, I am not a New Customer.</option>
            </select>
            <textarea
              name="comments"
              id="comments"
              cols="30"
              rows="2"
              placeholder="Comments"
              className="CTAInput"
            ></textarea>
          </div>
          <input type="Submit" className="CTASubmit" value={"Submit"} />
        </form>
      </div>
    </div>
  );
};

export default CTA;
