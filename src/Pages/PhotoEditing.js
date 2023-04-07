import React from 'react'
import Footer from '../Componets/HomeSection/Footer'
import Banner from '../Componets/PhotoEditing/Banner'
import BforeAfter from '../Componets/PhotoEditing/BforeAfter'
import Ourpoupolar from '../Componets/PhotoEditing/Ourpoupolar'
import ProfassionalSection from '../Componets/PhotoEditing/ProfassionalSection'
import PricingPlane from '../Componets/PricingSection/PricingPlane'

function PhotoEditing() {
  return (
    <div>
      <Banner/>
      <ProfassionalSection/>
      <Ourpoupolar/>
      <BforeAfter/>
      <PricingPlane/>
      <Footer/>
    </div>
  )
}

export default PhotoEditing
