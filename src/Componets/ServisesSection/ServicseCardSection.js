import React from 'react'
import img from '../../image/vector2.svg'
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
import bar from '../../image/barBottom.jpg'
import { Link } from 'react-router-dom'
function ServicseCardSection() {
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
  return (
    <div className='service_Section'>
       <div className='container row'>
                <img src={img} className='img' alt="......"/>
                <img src={img} className='img1' alt="......"/>


                <div className='Service_text'>
                    <h5>Our Services</h5>
                    <p>Web Contrary to popular belief, Lorem Ipsum is not simply random text. <br/>It has roots in a piece of classical </p>

                </div>
              <div className='card_main_services'>
              {data.map((item)=>{
                    return(
                        <>
                        <Link style={{textDecoration:"none",color:"black"}} to={`/${item.link}`} >
                        <div className="card" >
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
              </div>
            
            </div>
            <div className='bar_botoom'>
                <img src={bar} alt=''/>
                <h3>Grow Your Business and Build<br/> Your Website or Software With Us.</h3>
                <button>Contact Us</button>
            </div>
    </div>
  )
}

export default ServicseCardSection
