import React from 'react'
import img from '../../image/bannerimg.png'
import img1 from '../../image/Contact.svg'
import Header from '../HomeSection/Header'
function Banner() {
  return (
    <div className='contact_banner container-fuild'>
        <div className='banner_img'>
            <img src={img} alt=''/>
        </div>
            <Header/>
            <div className='container row'>
                <div className='col-12 col-lg-5 col-md-12 '>
                    <h4>Contact Us</h4>
                    <p>Get your ultimate IT-services and Support to develop<br/> and progress with latest software technologies</p>
                    <img src={img1} alt="..."/>
                </div>
                <div className='col-12 col-lg-7 col-md-12'>
                    <div className='contact_form row'>
                        <h4>Get in touch with us</h4>
                        <input className='col-12' type={'text'} placeholder="Full Name"/>
                        <input className='col-12' type={'text'} placeholder="Email-Addres"/>
                        <input className='col-12' type={'text'} placeholder="Phone-NO"/>
                        <input className='inp1' type={'text'} placeholder="Project Title"/>
                        <input className='inp' type={'text'} placeholder="Choose-Service"/>
                        <textarea className='col-12' placeholder="Message"/>
                        <button>Submit Now</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Banner
