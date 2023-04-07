import React from 'react'
import img from '../../image/ecom/opencart-logo1.jpg'
import img1 from '../../image/ecom/1.svg'
import img2 from '../../image/ecom/2.svg'
import img3 from '../../image/ecom/3.svg'
import img4 from '../../image/ecom/4.svg'


function Opencart() {
    return (
        <div className='open_cart container'>
            <div className='row'>
                <div className='col-12'>
                    <img className='open_cart_img' src={img} alt='...' />
                    <h4 className='open_cart_h4'>Simple to start. Easy to run</h4>
                    <p className='open_cart_per'>Start your free OpenCart eCommerce store now!</p>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={img1} alt='' />

                            <h6 className="card-subtitle mt-3 mb-2  mt-3 ">Open-Source and Free</h6>
                            <p className="card-text">Open source means transparent.
                                OpenCart comes with free downloads
                                and updates. Zero monthly fees.</p>

                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={img2} alt='' />

                            <h6 className="card-subtitle mb-2  mt-3 ">Powerful Store Management</h6>
                            <p className="card-text">Benefit from our built-in SEO. Easy manage
                                products, customers, orders, taxes rules,
                                coupon codes and more.</p>

                        </div>
                    </div>
                </div>  <div className='col-lg-3 col-md-6 col-12'>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={img3} alt='...' />

                            <h6 className="card-subtitle mb-2  mt-3 ">Extensions and Themes</h6>
                            <p className="card-text">The biggest eCommerce selections of
                                modules and themes to expand your
                                store functionality.</p>

                        </div>
                    </div>
                </div>  <div className='col-lg-3 col-md-6 col-12'>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={img4} alt='' />

                            <h6 className="card-subtitle mb-2  mt-3 ">Support You Can Trust</h6>
                            <p className="card-text">We’ve got you covered. OpenCart
                                offers free community or dedicated
                                commercial support.</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Opencart
