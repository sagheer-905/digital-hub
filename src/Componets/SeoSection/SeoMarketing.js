import React from 'react'
import img1 from '../../image/seo/img.svg'
function SeoMarketing() {
  return (
    <div className='marketing_section'>
        <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-12'>
            <h4>SEO Marketing</h4>
            <ul>
                <li>Goals Defination</li>
                <li>Techical Site Audit</li>
                <li>Off-page Optimization</li>
                <li>On-page Optimization</li>
                <li>Content Analysis</li>
                <li>Keyword Strategy</li>
                <li>Reposrting</li>
                <li>Content Creation</li>
                <li>SEO Copywriting</li>
            </ul>
        </div>
        <div className='col-lg-6 col-md-12 col-12'>
            <img src={img1} alt='...'/>
        </div>
      </div>
        </div>
    </div>
  )
}
export default SeoMarketing
