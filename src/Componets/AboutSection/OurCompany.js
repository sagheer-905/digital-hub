import React from 'react'
import img from '../../image/company.svg'
function OurCompany() {
  return (
    <div className='our_company'>
        <div className='container row'>
            <div className='col-lg-6 col-md-12'>
                <img src={img} alt='' />
            </div>
            <div className='col-lg-6 col-md-12'>
                <h5>OUR COMPANY</h5>
                <h3>We Help IT Companies Scale Engineering Capacity</h3>
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "</p>
                <div className='counter'>
                <div className='count'>
                    <h3>380</h3>
                    <p>Satisfied Clients</p>
                    </div>
                    <hv/>
                    <div>
                    <h3>410</h3>
                    <p>Project Launches</p>
                </div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default OurCompany
