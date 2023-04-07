import React from 'react'
import img from '../../image/photoediting/arrow.png'
import img1 from '../../image/photoediting/1.png'
import img2 from '../../image/photoediting/2.png'
import img3 from '../../image/photoediting/3.png'
import img4 from '../../image/photoediting/4.png'

function Ourpoupolar() {
    return (
        <div className='Ourpoupolar'>
            <div className='background'>
                <div className='container'>
                    <h4>Our Most Popular<br />
                        Photo Editing Services
                    </h4>
                    <div className='arrow_back_blue'>
                        <img src={img} alt="..."/>
                    </div>
                    <div className='container'>

                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-12'>
                            <div className='row'>
                                <div className='col-6 mt-5'>
                                    <img src={img1} alt=''/>
                                </div>
                                <div className='col-6'>
                                <img src={img2} alt=''/>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12'>
                        <div className='row'>
                                <div className='col-6 mt-5'>
                                <img src={img3} alt=''/>

                                </div>
                                <div className='col-6'>
                                <img src={img4} alt=''/>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ourpoupolar
