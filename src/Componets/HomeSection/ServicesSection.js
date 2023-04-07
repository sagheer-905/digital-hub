import React from 'react'
import img from '../../image/vector.svg'
import img1 from '../../image/web.svg'
import img2 from '../../image/desigin.svg'
import img3 from '../../image/seo.svg'
import img4 from '../../image/digital.svg'
import img5 from '../../image/ecom.svg'
import img6 from '../../image/app.svg'
import img7 from '../../image/photo.svg'
import img8 from '../../image/social.svg'
import img9 from '../../image/it.svg'
import img10 from '../../image/infMarkitning.svg'
import img11 from '../../image/amazon.svg'
import img12 from '../../image/ebay.svg'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'

function ServicesSection() {
    const data=[
        {
            head:"Wev Development",
            link:"webdevelopment",
            img:img1,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"Design",
            link:"graphicdesigin",
            img:img2,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"Seo Services",
            link:"seoservices",
            img:img3,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"Digital Marketing",
            link:"digitalmarketing",
            img:img4,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"E-Commerce Services",
            link:"ecomserivce",
            img:img5,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"App Development",
            link:"apppage",
            img:img6,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"Photo Editing Service",
            link:"photoeditng",
            img:img7,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"Social Media Marketing",
            link:"socialmedia",
            img:img8,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"IT Networking Services",
            link:"itnetworking",
            img:img9,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"Influencer Marketing Services",
            link:"influencerservices",
            img:img10,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"Amazon Services",
            link:"amazonservices",
            img:img11,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
        {
            head:"Ebay Services",
            link:"ebayservices",
            img:img12,
            pera:"Loram are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold",
        },
    ]
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1100, itemsToShow: 3 },



    ]
    return (
        <div className='servise'>
            <div className='container row'>
                <img className='img_vector1' src={img} alt='...' />
                <div className='Service_text'>
                    <h5>Our Sercives</h5>
                    <h1>We Provide IT & Business <br /> Solutions</h1>
                </div>
                <div className='carosul_box'>
                    <Carousel className='item-carosul' breakPoints={breakPoints} >
                    {data.map((item)=>{
                    return(
                        <>
                        <Link style={{textDecoration:"none",color:"black"}} to={`/${item.link}`} >
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={item.img} alt="Card-cap"/>
                            <div className="card-body">
                                <h5>{item.head}</h5>
                                <p className="card-text">{item.pera}</p>
                            </div>
                        </div>
                        </Link>
                        </>
                    )
                })}
                    </Carousel>
                </div>

            </div>
        </div>
    )
}

export default ServicesSection
