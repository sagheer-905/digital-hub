import React from 'react'
import img1 from '../../image/app/c1.svg'
import img2 from '../../image/app/c2.svg'
import img3 from '../../image/app/c3.svg'
import img4 from '../../image/app/c1w.svg'
import img5 from '../../image/app/c2w.svg'
import img6 from '../../image/app/2w.svg'
function Appcart() {
    return (
        <div className='app_cardSecion'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-12'>
                        <div className="card" >
                            <div className="card-body">
                            <img className='blue' src={img1} alt='' />
                            <img className='white' src={img4} alt='' />
                                <p className="card-text">Next-gen technologies intelligent algorithams and modern UI</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12'>
                    <div className="card back" >
                            <div className="card-body">
                            <img className='blue mobile' src={img2} alt='' />
                            <img className='white mobile' src={img5} alt='' />
                                <p className="card-text">Design and development of native Android and iOS mobile apps</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12'>
                    <div className="card" >
                            <div className="card-body">
                            <img className='blue' src={img3} alt='' />
                            <img className='white' src={img6} alt='' />
                                <p className="card-text">Mobile application development based on React Native and Flutter</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Appcart
