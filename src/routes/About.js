import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import Technologies from '../components/Technologies'

const About = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading="ABOUT." text="im a friendly Front-end Developer"/>
     <Technologies />
     <AboutContent />
     <Footer/>
    </div>
  )
}

export default About
