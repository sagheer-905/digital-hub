import React from 'react'
import Appcart from '../Componets/AppSection/Appcart'
import Appsection from '../Componets/AppSection/Appsection'
import Banner from '../Componets/AppSection/Banner'
import CrossSection from '../Componets/AppSection/CrossSection'
import StepSection from '../Componets/AppSection/StepSection'
import Footer from '../Componets/HomeSection/Footer'
import PricingPlane from '../Componets/PricingSection/PricingPlane'

function AppPage() {
  return (
    <div>
      <Banner/>
      <Appsection/>
      <StepSection/>
      <CrossSection/>
      <Appcart/>
      <PricingPlane/>
      <Footer/>
    </div>
  )
}

export default AppPage
