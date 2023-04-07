import React from 'react'
import img from '../../image/social/strategy.svg'
import img1 from '../../image/social/content.svg'
import img2 from '../../image/social/visual.svg'
import img3 from '../../image/social/socail.svg'
import img4 from '../../image/social/analytics.svg'
import img5 from '../../image/social/1.svg'
import vector from '../../image/vector2.svg'

function Stretage() {
  return (
    <div className='stretagy_section'>
      <img className='stretagy_img1' src={vector} alt="..." />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-12'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-12'>
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title"> <img src={img} alt='...' />Strategy Development</h5>
                    <p className="card-text">Idenetify the target audience
                      <br/>Study the target audience
                      <br/>Conduct customer niche analysis
                      <br/>Develop of a general strategy
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-12'>
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title"> <img src={img1} alt='...' />Content Management</h5>
                    <p className="card-text">Create content plan
                      <br/>Adapt content for various formats
                      <br/>Write texts for the social networks
                      <br/>Write texts in blog format
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-12'>
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title"> <img src={img2} alt='...' />Visualisation</h5>
                    <p className="card-text">Community branding
                      <br/>Integrate the site with social networks
                      <br />Integrate the online shop with social networks
                      <br />Create the landing pages
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-12'>
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title"> <img src={img3} alt='...' /> Social Media Advertising</h5>
                    <p className="card-text">Analysis
                      <br />Set up camaigns
                      <br />Creation ad content
                      <br />Monitor and support
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-12'>
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title"> <img src={img4} alt='...' />Analytics</h5>
                    <p className="card-text">Use of automated monitoring systems
                      <br />Monitor social networks
                      <br />Analysis of the campaign
                      <br />Research on social networks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-12'>
            <div className='strategy_img'>
              <img src={img5} alt='...' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Stretage
