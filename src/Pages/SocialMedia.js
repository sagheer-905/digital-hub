import React from 'react'
import Footer from '../Componets/HomeSection/Footer'
import PricingPlane from '../Componets/PricingSection/PricingPlane'
import Banner from '../Componets/SocialMedia/Banner'
import Bwnifits from '../Componets/SocialMedia/Bwnifits'
import MaketingProcees from '../Componets/SocialMedia/MaketingProcees'
import Stretage from '../Componets/SocialMedia/Stretage'

function SocialMedia() {
  return (
    <div>
      <Banner/>
      <Stretage/>
      <MaketingProcees/>
      <Bwnifits/>
      <PricingPlane/>
      <Footer/>
    </div>
  )
}

export default SocialMedia
