import React from 'react'
import {BsPhone} from 'react-icons/bs'
import {CiMail} from 'react-icons/ci'
import {GoLocation} from 'react-icons/go'
import img from '../../image/1.svg'

function WeHelp() {
  return (
    <div className='we_help'>
        <img src={img} alt='---'/>
      <h4>We help you stay Contact</h4>
      <div className='container'>
        <div className='child'>
            <BsPhone className='icons'/>
            <h5>Quick Contact</h5>
            <p>+44 20 3769 9863</p>
        </div>
        <div className='child'>
        <CiMail className='icons'/>
        <h5>General Inquiry</h5>
            <p>info@webdigitalhub.com</p>
        </div>
        <div className='child'>
        <GoLocation className='icons'/>
        <h5>Address</h5>
            <p>Birmingham B19 3JB , United Kingdom</p>
        </div>
      </div>
    </div>
  )
}

export default WeHelp
