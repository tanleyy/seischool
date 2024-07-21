import React from 'react'
import './Hero.css'
import dark_arrow from '../../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id="hero">
        <div className="hero-text">
        <h1> We strive for educational excellence to create a better world.</h1>
        <p> Our progressive curriculum is designed to arm students with the 
            knowledge, skills, and experiences crucial for success in the rapidly 
            changing field of education.
        </p>
        <button className='btn'> Enroll now? <img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero
