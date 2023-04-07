import React from 'react'
import img from '../../image/ecom/laptop.svg'
function EcomOpen() {
    return (
        <div className='ecom_open container'>
            <h4>Ecommerce Opensource Platform</h4>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-12'>
                    <h4>Ecommerce Front-End<br/> Development</h4>
                    <p> We create modern digital storefronts by using tried-and-true
                        HTML, CSS, and JavaScript programming languages and
                        JavaScript frameworks: AngularJS, ReactJS, Meteor, Vue.js,
                        Next.js, Ember.js.</p>
                </div>
                <div className='col-lg-6 col-md-12 col-12'>
                    <img src={img} alt='...' />
                </div>
            </div>
        </div>
    )
}
export default EcomOpen
