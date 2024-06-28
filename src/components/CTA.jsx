import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    // Here you can handle the form data, e.g., send it to a server
    console.log(formData);

    // You can also reset the form after submission if needed
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      service: "",
      customer: "",
      comments: "",
    });
  };

  return (
    <div className="text-center CTA">
      <div className="about text-center">
        <div className="overlay">
          <h1>
            We Pride Ourselves on <span className="highlight">Quality</span>
          </h1>
          <p>
            Transform your lawn into a lush oasis with our premium lawn care
            service, where quality is not just a promise but a way of life.
            Experience the difference with our meticulous attention to detail
            and commitment to delivering the greenest, healthiest, envy-inducing
            lawn on the block.
          </p>
          <a className="callbutton" href="tel:7206417228">
            Give us a Call!
          </a>
        </div>
      </div>
      <div className="CTAForm">
        <h2>
          Get A <span className="highlight">FREE</span> Estimate
        </h2>
        <form onSubmit={submitForm}>
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="CTAInput"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              className="CTAInput"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone"
              className="CTAInput"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              className="CTAInput"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <select
              name="service"
              className="CTAInput"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Select Service
              </option>
              <option value="Disposal">Disposal and Cleanup</option>
              <option value="Construction">Construction and Installation</option>
              <option value="Design">Design Services</option>
              <option value="plantCare">Plant Care and Management</option>
            </select>
          </div>
          <div>
            <select
              name="customer"
              className="CTAInput"
              value={formData.customer}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Are You A New Customer?
              </option>
              <option value="Yes">Yes, I am a New Customer.</option>
              <option value="No">No, I am not a New Customer.</option>
            </select>
          </div>
          <input type="Submit" className="CTASubmit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default CTA;
