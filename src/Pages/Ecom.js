import React from 'react'
import Banner from '../Componets/EcomSection/Banner'
import BusinessSection from '../Componets/EcomSection/BusinessSection'
import EcomBack from '../Componets/EcomSection/EcomBack'
import EcomOpen from '../Componets/EcomSection/EcomOpen'
import Opencart from '../Componets/EcomSection/Opencart'
import Footer from '../Componets/HomeSection/Footer'
import PricingPlane from '../Componets/PricingSection/PricingPlane'

function Ecom() {
  return (
    <div>
      <Banner/>
      <EcomOpen/>
      <EcomBack/>
      <BusinessSection/>
      <Opencart/>
      <PricingPlane/>
      <Footer/>
    </div>
  )
}

export default Ecom
