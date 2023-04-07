import React from 'react'
import Header from '../HomeSection/Header'
import img from '../../image/ecom/bannerpic.svg'

function Banner() {
  return (
    <div className='ecom_Banner'>
    <Header/>
  <div className='container row'>
    <div className='col-lg-6 col-md-12 p-5'>
        <h1 className='mt-5'>E-Commerce</h1>
        <p>We create modern digital storefronts by using tried-and-true HTML, CSS, and JavaScript programming languages and JavaScript frameworks:</p>
    </div>
    <div className='col-lg-6 col-md-12 p-5'>
       <img src={img} alt='...'/>
    </div>
  </div>
</div>
  )
}

export default Banner
