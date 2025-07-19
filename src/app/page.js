import AboutUs from '@/Components/AboutUs/AboutUs'
import HeroSection from '@/Components/HeroSection/HeroSection'
import Navbar from '@/Components/Navbar/Navbar'
import OurProducts from '@/Components/OurProducts/OurProducts'
import SpecialOffer from '@/Components/SpecialOffer/SpecialOffer'
import Testimonial from '@/Components/Testimonial/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurProducts />
      <AboutUs />
      <SpecialOffer />
      <Testimonial />
    </div>
  )
}

export default Home