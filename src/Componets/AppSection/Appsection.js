import React from 'react'
import img1 from '../../image/app/1.svg'
import img2 from '../../image/app/2.svg'
import img3 from '../../image/app/3.svg'
import img4 from '../../image/app/4.svg'
import img5 from '../../image/app/1w.svg'
import img6 from '../../image/app/c3w.svg'
import img7 from '../../image/app/3w.svg'
import img8 from '../../image/app/4w.svg'

function Appsection() {
  return (
    <div className='app_section'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-12'>
                <h4>Start-To-End App Development</h4>
                <p>Pellentesque posuere vestibulum lorem, ut efficitur erat
tristique sed. Ut vitae tincidunt ante. <br/>
<br/>
Donec vulputate urna sed rutrum venenatis. Cras consequat
magna quis arcu elementum, quis congue risus volutpat.
Praesent tortor nulla, ullamcorper.
</p>
            </div>
            <div className='col-lg-6 col-md-12 col-12'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                    <div className="card" >
                        <div className="card-body">
                            <img className='blue' src={img1} alt='' />
                            <img className='white' src={img5} alt='' />


                            <h6 className="card-subtitle mb-2  mt-3 ">Mobility Services Strategy</h6>
                            <p className="card-text">Morbi pharetra sapien ut mattis viverra.
Curabitur sit amet mattis.</p>

                        </div>
                    </div>
                    <div className="card" >
                        <div className="card-body">
                            <img className='blue' src={img2} alt='' />
                            <img className='white' src={img6} alt='' />

                            <h6 className="card-subtitle mb-2  mt-3 ">Native App Development</h6>
                            <p className="card-text">Proin arcu ligula, malesuada id tincidunt
laoreet, facilisis at justo.</p>

                        </div>
                    </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 top'>
                    <div className="card back" >
                        <div className="card-body">
                            <img className='blue' src={img3} alt='' />
                            <img className='white' src={img7} alt='' />

                            <h6 className="card-subtitle mb-2  mt-3 ">Design & User Experience</h6>
                            <p className="card-text">Donec pellentesque turpis utium lorem
imperdiet semper viverra</p>

                        </div>
                    </div>
                    <div className="card" >
                        <div className="card-body">
                            <img className='blue' src={img4} alt='' />
                            <img className='white' src={img8} alt='' />

                            <h6 className="card-subtitle mb-2  mt-3 ">Maintenance & Monitoring</h6>
                            <p className="card-text">Facilisis arcu ligula, malesuada id
tincidunt laoreet, facilisis at justo</p>

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

export default Appsection
