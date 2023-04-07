import React from 'react'
import Header from '../HomeSection/Header'
import img from '../../image/amazon.svg'
function Banner() {
  return (
    <div className='amazon_Banner'>
    <Header/>
  <div className='container row'>
    <div className='col-lg-6 col-md-12 p-5'>
        <h1 className='mt-5'>Amazon Services</h1>
        <p>Web Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
    </div>
    <div className='col-lg-6 col-md-12 p-5'>
       <img src={img} alt='...'/>
    </div>
  </div>
</div>
  )
}

export default Banner
