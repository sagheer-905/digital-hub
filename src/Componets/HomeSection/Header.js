import React, { useState } from 'react'
import logo from '../../image/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { BsArrow90DegUp } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
function Header() {
  const [arraow, setarrow] = useState(false)
  const [side, setside] = useState(false)
  const [navside, setnavside] = useState(false)
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      setarrow(true)
    }
    else {
      setarrow(false)
    }
  })
  const top = () => {
    document.documentElement.scrollTop = 0
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div className={`side_bar ${side ? "active" : ""}`}>
          <div style={{ padding: "1rem" }} onClick={() => setside(false)}><GrClose style={{ fontSize: "30px" }} /></div>
          <div className='contact_form row'>
            <h4>Get in touch with us</h4>
            <input className='col-12' type={'text'} placeholder="Full Name" />
            <input className='col-12' type={'text'} placeholder="Email-Addres" />
            <input className='col-12' type={'text'} placeholder="Phone-NO" />
            <textarea className='col-12' placeholder="Message" />
            <button className='btn'>Submit Now</button>
          </div>
        </div>
        <div className={`side_bar_nav ${navside ? "active" : ""}`}>
          <div style={{ padding: "30px" }} onClick={() => setnavside(false)}><GrClose style={{ fontSize: "30px" }} /></div>
          <ul class="navbar-nav">
            <li>
              <Link className='link' aria-current="page" to={'/'}>Home</Link>
            </li>
            <li>
              <Link className='link' to={'/about'}>About</Link>
            </li>
            <li>
              <Link className='link' to={'/servise'} >Services</Link>
            </li>
            <li>
              <Link className='link' to="/porfolio">Portfolio</Link>
            </li>
            <li>
              <Link className='link' to="/blog">Blog</Link>
            </li>
            <li>
              <Link className='link' to={'/pricing'} >Pricing</Link>
            </li>
            <li>
              <Link className='link' to="/contact">Contactus</Link>
            </li>
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <CgMenuGridO onClick={() => setside(true)} />
            </li>
          </ul>
        </div>
        {arraow ? <div onClick={top} className='up_btn'><BsArrow90DegUp style={{ color: "black", marginLeft: "15px", marginTop: "12px", fontSize: "25px" }} /></div> : ""}
        <div class="container-fluid">
          <img class="navbar-brand" src={logo} alt='...' />
          <button class="navbar-toggler" type="button" onClick={() => setnavside(true)} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/about'}>About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/servise'} >Services</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/porfolio">Portfolio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog">Blog</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/pricing'} >Pricing</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contactus</Link>
              </li>
              <li class="nav-item">
                <AiOutlineSearch className="nav-icon" />
              </li>
              <li class="nav-item">
                <CgMenuGridO onClick={() => setside(true)} className="nav-icon" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header