import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/Navbar/Programs/Programs'
import Title from './Components/Navbar/Title/Title'
import About from './Components/Navbar/About/About'
import Campus from './Components/Navbar/Campus/Campus'
import Testimonials from './Components/Navbar/Testimonials/Testimonials'
import Contact from './Components/Navbar/Contact/Contact'
import Footer from './Components/Navbar/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our School' title='What School Has'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='School Photos'/>
        <Campus/>
        <Title subTitle='EXPERIENCES' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Feel Free to Contact Us' title="Log In your Account"/>
        <Contact/>
        <Footer/>
    </div>

    </div>
  )
}

export default App
