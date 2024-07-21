import React from 'react'
import './Contact.css'
import msg_icon from '../../../assets/msg-icon.png'
import mail_icon from '../../../assets/mail-icon.png'
import phone_icon from '../../../assets/phone-icon.png'
import location_icon from '../../../assets/location-icon.png'
import white_arrow from '../../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact' id="contact">
        <div className='contact-col'>
            <h3>Send us a message<img src={msg_icon} alt='' /></h3>
            <p>Feel Free to reach out through contact form or find out contact
                information below, Your feedback, questions, and suggestions are
                importatnt to us as we strive to provide exceptional service to our
                SEI community.
            </p>
            <ul>
                <li><img src={mail_icon} alt='' /> samantabhadra.school@gmail.com</li>
                <li><img src={phone_icon} alt='' /> 8-253-0338</li>
                <li><img src={location_icon} alt='' /> 1141-45 Batangas Street, Tondo, Manila City</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form>
                <label>Your ID</label>
                <input tpye= "text" name='id' placeholder='Enter your ID' required/>
                <label>Your Password</label>
                <input tpye= "text" name='password' placeholder='Enter your Password' required/>
                <button type='Log In' className='btn dark-btn'> Log In <img src={white_arrow} alt="" /> </button>
            </form>

        </div>
      
    </div>
  )
}

export default Contact
