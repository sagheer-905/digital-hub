import React from 'react'
import img1 from '../../image/marketing.jpg'
import img2 from '../../image/branding.jpg'

function OurPortfolio() {
    return (
        <div className='our_porfolio container'>
            <h3>Our Portfolio</h3>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem<br /> Ipsum passages, and more recently with desktop</p>
            <div>
                {/* Tabs navs */}
                <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true">All</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab" aria-controls="ex1-tabs-2" aria-selected="false">Marketing</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab" aria-controls="ex1-tabs-3" aria-selected="false">Designing</a>
                    </li>
                </ul>
                {/* Tabs navs */}
                {/* Tabs content */}
                <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                        <div className='card_box'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={img1} alt="Cardcap" />
                            <div className="card-body">
                                <h5>Designing</h5>

                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={img2} alt="Cardcap" />
                            <div className="card-body">
                                <h5>Branding</h5>

                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={img1} alt="Cardcap" />
                            <div className="card-body">
                                <h5>Marketing</h5>

                            </div>
                        </div>
                        </div>
                        

                    </div>
                    <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                    <div className='card_box'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={img1} alt="Cardcap" />
                            <div className="card-body">
                                <h5>Designing</h5>

                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={img2} alt="Cardcap" />
                            <div className="card-body">
                                <h5>Branding</h5>

                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={img1} alt="Cardcap" />
                            <div className="card-body">
                                <h5>Marketing</h5>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                    <div className='card_box'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={img1} alt="Cardcap" />
                            <div className="card-body">
                                <h5>Designing</h5>

                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={img2} alt="Cardcap" />
                            <div className="card-body">
                                <h5>Branding</h5>

                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={img1} alt="Cardcap" />
                            <div className="card-body">
                                <h5>Marketing</h5>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Tabs content */}
            </div>

        </div>
    )
}

export default OurPortfolio
