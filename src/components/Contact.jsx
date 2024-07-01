import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        comments: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            await emailjs.sendForm('service_bp1q448', 'template_f0csbra', e.target, 'mOHI7r4hSNJNi6RUx');
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            comments: '',
          });
    
          e.target.reset();
          navigate('/thankyou');
        } catch (error) {
          console.error('EmailJS Error:', error);
          alert('Failed To Send Email');
        }
    }
  return (
    <div className='contactCont text-center'>
        <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <div className='info'>
                <input type="text" name='name' placeholder='Name' value={formData.name} onChange={handleChange} required/>
                <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required/>
            </div>
            <input type="tel" name="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber} onChange={handleChange}/>
            <textarea name="comments" required rows={5} placeholder='Any Questions or Compliments' value={formData.comments} onChange={handleChange}></textarea>
            <input type="submit" value="Submit" id='submit'/>
        </form>
    </div>
  )
}

export default Contact