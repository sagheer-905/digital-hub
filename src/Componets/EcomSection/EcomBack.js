import React from 'react'
import img from '../../image/ecom/ecomback.svg'
function EcomBack() {
  return (
    <div className='ecomm_back container'>
        <div className='row'>
            <div className='col-12'>
                <h4>Ecommerce Back-End Development</h4>
                <p>We layout the business logic of your ecommerce app in the back end written in
<br/>PHP, Java, Python, C++, Node.js, Go, .NET.</p>
            </div>
            <div className='col-12'>
                <div className='img_ecomback'>
                    <img src={img} alt='...'/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default EcomBack
