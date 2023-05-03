import React from 'react'
import Navbar from '../components/Navbar'
import Work from '../components/Work'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer/>
    </div> 
  )
}

export default Home
