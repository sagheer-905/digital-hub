import React from 'react'
import img1 from '../../image/php.svg'
import img2 from '../../image/netcore.svg'
import img3 from '../../image/pythone.svg'
import img4 from '../../image/node.svg'
import img5 from '../../image/rust.svg'

function OurTech() {
    
  return (
    <div className='our_porfolio container'>
            <h3>Our Core Technologise</h3>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem<br /> Ipsum passages, and more recently with desktop</p>
            <div>
                {/* Tabs navs */}
                <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="ex1-tab-5" data-mdb-toggle="tab" href="#ex1-tabs-5" role="tab" aria-controls="ex1-tabs-5" aria-selected="true">Frontend</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="ex1-tab-6" data-mdb-toggle="tab" href="#ex1-tabs-6" role="tab" aria-controls="ex1-tabs-6" aria-selected="false">Backend</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="ex1-tab-7" data-mdb-toggle="tab" href="#ex1-tabs-7" role="tab" aria-controls="ex1-tabs-7" aria-selected="false">Cloude</a>
                    </li>
                </ul>
                {/* Tabs navs */}
                {/* Tabs content */}
                <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active" id="ex1-tabs-5" role="tabpanel" aria-labelledby="ex1-tab-1">
                        <div className='card_box'>
                        <img src={img2} alt=''/>
                        <img src={img1} alt=''/>
                        <img src={img3} alt=''/>
                        <img src={img4} alt=''/>
                        <img src={img5} alt=''/>


                        </div>
                        

                    </div>
                    <div className="tab-pane fade" id="ex1-tabs-6" role="tabpanel" aria-labelledby="ex1-tab-2">
                    <div className='card_box'>
                    <img src={img2} alt=''/>
                        <img src={img1} alt=''/>
                        <img src={img3} alt=''/>
                        <img src={img4} alt=''/>
                        <img src={img5} alt=''/>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="ex1-tabs-7" role="tabpanel" aria-labelledby="ex1-tab-3">
                    <div className='card_box'>
                    <img src={img2} alt=''/>
                        <img src={img1} alt=''/>
                        <img src={img3} alt=''/>
                        <img src={img4} alt=''/>
                        <img src={img5} alt=''/>
                        </div>
                    </div>
                </div>
                {/* Tabs content */}
            </div>

        </div>
  )
}

export default OurTech
