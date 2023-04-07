import React from 'react'
import img from '../../image/mission.svg'
import img1 from '../../image/vision.svg'
import img2 from '../../image/men.jpg'
import img3 from '../../image/vector2.svg'


function OurMission() {
  return (
    <div className='our_mission'>
      <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-12'>
        <div className='mission'>
        <div className='d-flex flex-wrap align-content-center'>
            <img src={img} alt=''/>
            <h5>Our Mission</h5>
        </div>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>

      </div>
        </div>
        <div className='col-lg-4 col-md-4 col-12'>
        <div className='mission'>
        <div className='d-flex flex-wrap align-content-center'>
            <img src={img1} alt=''/>
            <h5>Our Vision</h5>
        </div>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>

      </div>
        </div>
        <div className='col-lg-4 col-md-4 col-12'>
        <div className='mission mission1'>
      <img src={img2} alt=''/>
      <div className='video'>
        <p>Watch video </p>
      </div>
      </div>
        <img className='vector3' src={img3} alt="..."/>
        </div>

      </div>
      </div>
     
        {/* <div className='container'>

      <div className='mission'>
        <div className='d-flex flex-wrap align-content-center'>
            <img src={img} alt=''/>
            <h5>Our Mission</h5>
        </div>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>

      </div>
    
      <div className='mission'>
        <div className='d-flex flex-wrap align-content-center'>
            <img src={img1} alt=''/>
            <h5>Our Vision</h5>
        </div>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>

      </div>
      <div className='mission1'>
      <img src={img2} alt=''/>
        <div className='video'>
            <p>Watch Our Story</p>
        </div>
      </div>
        <img className='vector3' src={img3} alt="..."/>
        </div> */}
    

    </div>
  )
}

export default OurMission
