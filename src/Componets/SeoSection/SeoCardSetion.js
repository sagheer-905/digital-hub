import React from 'react'
import img1 from '../../image/seo/1.svg'
import img2 from '../../image/seo/2.svg'
import img3 from '../../image/seo/3.svg'
import img4 from '../../image/seo/4.svg'
import img5 from '../../image/seo/5.svg'
import img6 from '../../image/seo/6.svg'
import img7 from '../../image/seo/7.svg'
import img8 from '../../image/seo/8.svg'
import img9 from '../../image/seo/9.svg'

function SeoCardSetion() {
    const data = [
        {
            head: "Detailed Competitor Analysis",
            img: img1,
        },
        {
            head: "Authentic Keyword Research",
            link: "graphicdesigin",
            img: img2,
        },
        {
            head: "Content Creation",
            link: "seoservices",
            img: img3,
        },
        {
            head: "Googlr My Business",
            img: img4,
        },
        {
            head: "On-page SEO",
            img: img5,
        },
        {
            head: "Off-Page SEO",
            img: img6,
        },
        {
            head: "Sound Link Building",
            img: img7,
        },
        {
            head: "Techical SEO",
            img: img8,
        },
        {
            head: "Shopify SEO",
            img: img9,
        },

    ]
    return (
        <div className='container seo_section'>
            <h3>What Dose Our SEO Company Offers?</h3>
            <div className='row'>
                {data.map((item)=>{
                    return(
                        <>
                        <div className='col-lg-4 col-md-6 col-12'>
                    <div class="card" style={{ width: "18rem" }}>
                        <div className='img_div'>
                            <img src={item.img} alt="..." />
                        </div>
                        <div class="card-body">

                            <h4 class="card-title">{item.head}</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div>
                        </>
                    )
                })}
            </div>

        </div>
    )
}

export default SeoCardSetion
