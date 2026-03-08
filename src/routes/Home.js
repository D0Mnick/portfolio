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

// https://www.youtube.com/watch?v=lYiE5lBS13E&t=75s
export default Home
