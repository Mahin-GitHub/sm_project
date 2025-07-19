import AboutUs from '@/Components/AboutUs/AboutUs'
import FreshHarvestBlog from '@/Components/OurBlog/OurBlog'
import HeroSection from '@/Components/HeroSection/HeroSection'
import Navbar from '@/Components/Navbar/Navbar'
import OurProducts from '@/Components/OurProducts/OurProducts'
import SpecialOffer from '@/Components/SpecialOffer/SpecialOffer'
import Testimonial from '@/Components/Testimonial/Testimonial'
import React from 'react'
import OurBlog from '@/Components/OurBlog/OurBlog'
import Footer from '@/Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurProducts />
      <AboutUs />
      <SpecialOffer />
      <Testimonial />
      <OurBlog />
      <Footer />
    </div>
  )
}

export default Home