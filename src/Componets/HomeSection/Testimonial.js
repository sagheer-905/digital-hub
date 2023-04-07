import React from 'react'
import Carousel from 'react-elastic-carousel'
import img from '../../image/glob.svg'
function Testimonial() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1100, itemsToShow: 3 },



    ]
  return (
    <div className='testimonial'>

<div className="container mt-5 mb-5">

<h5>OUR CLIENT"S REVIEW</h5>
<h3>What Clinet Says About Us ...?</h3>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece <br/>of classical Latin literature from 45 BC,</p>
  <Carousel className='item-carosul' breakPoints={breakPoints} >

    <div className="col-md-4 testimonial_card">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="https://i.imgur.com/PKHvlRS.jpg"  alt='...' className="rounded-circle" width={80} />
        </div>
        <div className="user-content">
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 testimonial_card">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="https://i.imgur.com/w2CKRB9.jpg" alt='...' className="rounded-circle" width={80} />
        </div>
        <div className="user-content">
     
          <p><i class="fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<i class="fa-solid fa-quote-right"></i></p>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 testimonial_card">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="https://i.imgur.com/ACeArwY.jpg" alt='...' className="rounded-circle" width={80} />
        </div>
        <div className="user-content">
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 testimonial_card">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="https://i.imgur.com/PKHvlRS.jpg" alt='...' className="rounded-circle" width={80} />
        </div>
        <div className="user-content">
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 testimonial_card">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="https://i.imgur.com/w2CKRB9.jpg" alt='...' className="rounded-circle" width={80} />
        </div>
        <div className="user-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 testimonial_card">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="https://i.imgur.com/ACeArwY.jpg" alt='...' className="rounded-circle" width={80} />
        </div>
        <div className="user-content">
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 testimonial_card">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="https://i.imgur.com/PKHvlRS.jpg" alt='...' className="rounded-circle" width={80} />
        </div>
        <div className="user-content">
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 testimonial_card">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="https://i.imgur.com/w2CKRB9.jpg" alt='...' className="rounded-circle" width={80} />
        </div>
        <div className="user-content">
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 testimonial_card">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="https://i.imgur.com/ACeArwY.jpg" alt='...' className="rounded-circle" width={80} />
        </div>
        <div className="user-content">
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        </div>
      </div>

  </div>
  </Carousel>

</div> 
<img src={img} className='glob' alt='...'/>

</div>

  )
}

export default Testimonial
