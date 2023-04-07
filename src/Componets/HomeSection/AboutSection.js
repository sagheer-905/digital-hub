import React from 'react'
import img1 from '../../image/aboutSection.svg'
import img from '../../image/vector.svg'

function AboutSection() {
  return (
    <div className='about'>
    <div className='container row'>
        <img className='img_vector' src={img} alt='...'/>
    <div className=' col-lg-6  col-md-12 '>
        <h1>About</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
    <div className=' col-lg-6 col-md-12'>
        <img src={img1} alt="..."/>
    </div>
</div>
    </div>
  )
}

export default AboutSection
