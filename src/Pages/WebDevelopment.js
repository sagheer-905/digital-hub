import React from 'react'
import Footer from '../Componets/HomeSection/Footer'
import PricingPlane from '../Componets/PricingSection/PricingPlane'
import Banner from '../Componets/WebDevelopSection/Banner'
import CreativeSection from '../Componets/WebDevelopSection/CreativeSection'

function WebDevelopment() {
  return (
    <div>
      <Banner/>
      <CreativeSection/>
      <PricingPlane/>
      <Footer/>
    </div>
  )
}

export default WebDevelopment
