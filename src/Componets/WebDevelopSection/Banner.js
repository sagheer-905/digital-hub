import React from 'react'
import Header from '../HomeSection/Header'
import img from '../../image/banner-img.svg'
function Banner() {
  return (
    <div className='web_Banner'>
        <Header/>
      <div className='container row'>
        <div className='col-lg-6 col-md-12 p-5'>
            <h1 className='mt-5'>Web Development</h1>
            <p>Build ypur business here. Take it anywhere</p>
        </div>
        <div className='col-lg-6 col-md-12 p-5'>
           <img src={img} alt='...'/>
        </div>
      </div>
    </div>
  )
}

export default Banner
