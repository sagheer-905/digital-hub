import React from 'react'
import logo from '../../image/footerlogo.png'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import img1 from '../../image/vector.svg'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
<img src={img1} className='vector4' alt='...'/>
      <div className='container row'>
        <div className='col-lg-4'>
            <img className='footerlogo' src={logo} alt=''/>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
            <div className='footer_icon'>
                <GrFacebookOption/>
                <AiOutlineInstagram/>
                <AiOutlineTwitter/>
                <FaPinterestP/>
                <BsYoutube/>
            </div>
        </div>
        <div className='col-lg-2 col-md-4 col-6'>
            <h5>Our Links </h5>
           <ul>
            <li><Link className='link' to={'/home'}>Home</Link></li>
            <li><Link className='link' to={'/about'}>About us</Link></li>
            <li><Link  className='link' to={'/servise'}>Sercives</Link></li>
            <li><Link className='link' to="/blog">Blog</Link></li>
            <li><Link className='link' to="/porfolio">Portfolio</Link></li>
         </ul> 
        </div>
        <div className='col-lg-3 col-md-4 col-6'>
        <h5>Solutions</h5>
        <ul>
        <li><Link className='link' to={'/webdevelopment'}>Web Development</Link></li>
            <li><Link className='link' to={'/apppage'}>App Development</Link></li>
            <li><Link  className='link' to={'/amazonservices'}>Amazon Services</Link></li>
            <li><Link className='link' to="/itneteork">IT Networking</Link></li>
            <li><Link className='link' to="/seoservices">Seo Mangment</Link></li>
            <li><Link className='link' to="/socialmedia">Social Media</Link></li>
            <li><Link className='link' to="/home">Help & Faqs</Link></li>
            </ul> 
        </div>
        <div className='col-lg-3 col-md-4 col-6'>
        <h5>Contact Info</h5>
        <ul>
            <li><Link className='link' to={'/contact'}>+44 20 3769 9863</Link></li>
            <li><Link className='link' to={'/contact'}>info@webdigitalhub.com</Link></li>
            <li><Link className='link' to={'/contact'}>Birmingham B19 3JB, united Kingdom.</Link></li>
        </ul> 
        </div>
      </div>
    </div>
  )
}

export default Footer
