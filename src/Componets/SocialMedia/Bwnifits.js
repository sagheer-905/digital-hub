import React from 'react'
import img from '../../image/vector.svg'
function Bwnifits() {
  return (
    <div className='benifits'>
        <img className='benifits_img' src={img} alt='...'/>
        <div className='container'>
            <h1>Your Benefits Our Key Experties</h1>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-12'>
                    <p>Once you start posting and sharing on social media, it gives you a great opportunity to
redirect more traffic towards your brand website and lead to more awareness about
your products and services.<b>Increase Your Brand Awareness</b></p>
                    <p>Like we previously mentioned, social media marketing gives businesses an excellent
opportunity to increase brand awareness. There’s no better high than realising that
your audience is not only recognizing your brand, but also taking an active part in
learning more about it.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bwnifits
