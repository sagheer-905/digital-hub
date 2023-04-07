import React from 'react'
import img from '../../image/vector.svg'
import img1 from '../../image/photoediting/sec.jpg'

function ProfassionalSection() {
  return (
    <div className='profassional_section'>
           <img className='img_vector' src={img} alt='...'/>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-12'>
            <h4>Professional Photo Editing Service</h4>
            <p>Web Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
        </div>
        <div className='col-lg-6 col-md-12 col-12'>
            <img src={img1} alt=''/>
        </div>

      </div>
      </div>
    </div>
  )
}

export default ProfassionalSection
