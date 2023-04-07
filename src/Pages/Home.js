import React from 'react'
import AboutSection from '../Componets/HomeSection/AboutSection'
import Banner from '../Componets/HomeSection/Banner'
import Footer from '../Componets/HomeSection/Footer'
import OurMission from '../Componets/HomeSection/OurMission'
import OurPortfolio from '../Componets/HomeSection/OurPortfolio'
import OurTech from '../Componets/HomeSection/OurTech'
import ServicesSection from '../Componets/HomeSection/ServicesSection'
import Testimonial from '../Componets/HomeSection/Testimonial'

function Home() {
  return (
    <div>
      <Banner/>
      <AboutSection/>
      <ServicesSection/>
      <OurMission/>
      <OurPortfolio/>
      <OurTech/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default Home
