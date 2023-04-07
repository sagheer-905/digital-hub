import React from 'react'
import './pricing.css'
import img from '../../image/basic.png'
import img1 from '../../image/stander.png'
import img2 from '../../image/pri.png'
import img4 from '../../image/vector2.svg'
import img5 from '../../image/1.svg'

function PricingPlane() {
  return (
    <div className='main_pricing'>
      <img className='vec' src={img4} alt='...' />
      <img className='wave' src={img5} alt='...' />

      <div className='container'>
        <h5>Our offer Price for you!</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s</p>

      </div>
      <div className='pricing_page'>
        {/* <!-- Tabs navs --> */}
        <ul class="nav nav-tabs mb-3 w-25 d-flex justify-content-center m-auto" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
            >Monthly</a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="ex1-tab-2"
              data-mdb-toggle="tab"
              href="#ex1-tabs-2"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
            >Yearly</a>
          </li>
        </ul>
        <div class="tab-content" id="ex1-content">
          <div
            class="tab-pane fade show active"
            id="ex1-tabs-1"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            <div className="container-fluid">
              <div className="container p-5">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div id='basic' >
                      <div className="card h-100 shadow-lg">
                        <div className='curve_img'>
                          <img src={img} alt='' />
                          <h2>Basic</h2>
                          <h1>$2.99<br /><span>per month</span></h1>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                        </ul>
                        <div className="card-body text-center">
                          <button id='basic_btn' style={{ borderRadius: '50px' }}>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div id='standard'>
                      <div className="card h-100 shadow-lg">
                        <div className='curve_img'>
                          <img src={img1} alt='' />
                          <h2>Standard</h2>
                          <h1>$5.99<br /><span>per month</span></h1>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>

                        </ul>
                        <div className="card-body text-center">
                          <button id='standard_btn' style={{ borderRadius: '50px' }}>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div id='premium'>
                      <div className="card h-100 shadow-lg">
                        <div className='curve_img'>
                          <img src={img2} alt='' />
                          <h2>Premium</h2>
                          <h1>$9.99<br /><span>per month</span></h1>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                        </ul>
                        <div className="card-body text-center">
                          <button id='premium_btn' style={{ borderRadius: '50px' }}>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
            <div className="container-fluid">
              <div className="container p-5">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div id='basic' >
                      <div className="card h-100 shadow-lg">
                        <div className='curve_img'>
                          <img src={img} alt='' />
                          <h2>Basic</h2>
                          <h1>$2.99<br /><span>per month</span></h1>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                        </ul>
                        <div className="card-body text-center">
                          <button id='basic_btn' style={{ borderRadius: '50px' }}>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div id='standard'>
                      <div className="card h-100 shadow-lg">
                        <div className='curve_img'>
                          <img src={img1} alt='' />
                          <h2>Standard</h2>
                          <h1>$5.99<br /><span>per month</span></h1>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                        </ul>
                        <div className="card-body text-center">
                          <button id='standard_btn' style={{ borderRadius: '50px' }}>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div id='premium'>
                      <div className="card h-100 shadow-lg">
                        <div className='curve_img'>
                          <img src={img2} alt='' />
                          <h2>Premium</h2>
                          <h1>$9.99<br /><span>per month</span></h1>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
                          <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
                        </ul>
                        <div className="card-body text-center">
                          <button id='premium_btn' style={{ borderRadius: '50px' }}>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Tabs content --> */}
      </div>
    </div>
  )
}
export default PricingPlane
