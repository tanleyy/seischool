import React from 'react'
import './About.css'
import about_img from '../../../assets/about1.png'


const About = () => {
  return (
    <div className='about' id="about">
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />

      </div>
      <div className="about-right">
      <h3>ABOUT SCHOOL</h3>
      <h2>Samantabhadra Institute</h2>
      <p>Begin a life-changing educational journey with our school's extensive programs.
         Our innovative curriculum equips students with the knowledge, skills, and 
         experiences essential for success in the evolving world of education. </p>
      <p>With a focus on innovation, hands-on learning, and personalized mentorship,
        our programs prepare aspiring educatior to make a meaningful impact in classrooms,
        schools, abd communities. </p>
      <p>By focusing on innovation, hands-on experiences, and individualized mentorship,
         our programs train future educators to make a lasting difference in classrooms,
          schools, and communities. </p>
      </div>
    </div>
  )
}

export default About
