import React from 'react'
import img from '../../image/designcreative.svg'
import img1 from '../../image/uiux.svg'
import img16 from '../../image/vector2.svg'
import OurPortfolio from '../HomeSection/OurPortfolio'
function GraphicSection() {
  return (
    <div>
         <div className='creative_section'>

<div className='container row'>
    <img src={img16} className='vector_sltio' alt=''/>
    <img src={img16} className='vector_sltio1' alt=''/>

    <div className='col-lg-6 col-md-12'>
        <h3>We Are Creative</h3>
        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "</p>


    </div>
    <div className='col-lg-6 col-md-12'>
        <img src={img} alt='' />
    </div>

</div>
<div className=' web_over'>
 <OurPortfolio/>
</div>

<div className='container row extra_graphic'>
    <img src={img16} className='vector_sltio' alt=''/>
    <img src={img16} className='vector_sltio1' alt=''/>

    <div className='col-lg-6 col-md-12'>
        <h3>Why is UI/UX design good for your business?</h3>
        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "</p>


    </div>
    <div className='col-lg-6 col-md-12'>
        <img src={img1} alt='' />
    </div>

</div>



</div>
    </div>
  )
}

export default GraphicSection
