import React from 'react'
import img from '../../image/DigitalMarketing/agency.svg'
function AgencySection() {
  return (
    <div className='agency container'>
        <h4>A Full Services Digital  Marketing Agency</h4>
        <div className='row'>
            <div className='col-lg-5 col-md-12 col-12'>
                <img src={img} alt='...'/>     
            </div>
            <div className='col-lg-7 col-md-12 col-12'>
                    <p>Web Digital Hub, a full service Digital Marketing Agency, delivers you captivating result-oriented Internet Marketing Services. As a leading Digital Marketing Agency, we develop innovative ideas with vast experience in order to give our clients appropriate results. As experts, we make sure to build a good and meaningful relationship with clients with different social media channels. Our advertising experience of decades helps to deliver you excellent and measurable results to make your business more attractive, increase site traffic, enhances sales, an boost conversions. Because: <br/>
We know how to save your time and money!<br/>
We know how to bring new qualified leads and sales!<br/>
We, as digital marketing experts, understand your needs!</p>
            </div>
        </div>
      
    </div>
  )
}

export default AgencySection
