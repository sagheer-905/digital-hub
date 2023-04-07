import React from 'react'
import AgencySection from '../Componets/DigitalMarketing/AgencySection'
import Banner from '../Componets/DigitalMarketing/Banner'
import PeraSection from '../Componets/DigitalMarketing/PeraSection'
import Picsection from '../Componets/DigitalMarketing/Picsection'
import Footer from '../Componets/HomeSection/Footer'
import PricingPlane from '../Componets/PricingSection/PricingPlane'

function Digitalmarketing() {
  return (
    <div>
      <Banner/>
      <AgencySection/>
      <Picsection/>
      <PeraSection/>
      <PricingPlane/>
      <Footer/>
    </div>
  )
}

export default Digitalmarketing
