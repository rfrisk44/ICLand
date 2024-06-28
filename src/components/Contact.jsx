import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

    const submitForm = () =>{
        navigate('/thankYou')
    }
  return (
    <div className='contactCont text-center'>
        <form onSubmit={submitForm}>
            <h1>Contact Us</h1>
            <div className='info'>
                <input type="text" placeholder='Name'/>
                <input type="email" name="" id="" placeholder='Email'/>
            </div>
            <input type="tel" name="" id="" placeholder='Phone Number'/>
            <textarea name="" id="" rows={5} placeholder='Any Questions or Compliments'></textarea>
            <input type="submit" value="Submit" id='submit'/>
        </form>
    </div>
  )
}

export default Contact