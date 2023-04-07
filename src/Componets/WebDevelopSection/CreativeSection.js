import React from 'react'
import img from '../../image/creative.svg'
import img15 from '../../image/solution.svg'
import img1 from '../../image/front1.png'
import img2 from '../../image/front2.png'
import img3 from '../../image/front3.png'
import img4 from '../../image/front4.png'
import img5 from '../../image/front5.png'
import img6 from '../../image/front6.png'
import img7 from '../../image/front7.png'
import img8 from '../../image/back1.png'
import img9 from '../../image/back2.png'
import img10 from '../../image/back3.png'
import img11 from '../../image/back4.png'
import img12 from '../../image/back5.png'
import img13 from '../../image/back6.png'
import img14 from '../../image/back7.png'
import img16 from '../../image/vector2.svg'


function CreativeSection() {
    return (
        <div className='creative_section'>

            <div className='container row'>
                <img src={img16} className='vector_sltio' alt=''/>
                <img src={img16} className='vector_sltio1' alt=''/>

                <div className='col-lg-6 col-md-12'>
                    <h3>We Are Creative</h3>
                    <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "</p>


                </div>
                <div className='col-lg-6 col-md-12'>
                    <img src={img} alt='' />
                </div>

            </div>
            <div className=' web_over'>
                <div className='container row'>

                    <div className='col-lg-6 col-md-12'>
                        <h3>Static Website</h3>
                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries "</p>
                        <div className='lang'>
                            <div className='lang_img'>

                                <img src={img1} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img2} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img3} alt="..." />
                            </div> <div className='lang_img'>

                                <img src={img4} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img5} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img6} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img7} alt="..." />
                            </div>



                        </div>


                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <h3>Custom Website</h3>
                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries "</p>
                        <div className='lang'>
                            <div className='lang_img'>

                                <img src={img8} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img9} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img10} alt="..." />
                            </div> <div className='lang_img'>

                                <img src={img11} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img12} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img13} alt="..." />
                            </div>
                            <div className='lang_img'>

                                <img src={img14} alt="..." />
                            </div>



                        </div>
                    </div>

                </div>
            </div>

        <div className='development_solution'>
             <h4>Development Solution</h4>
            <p>Web Digital Hub provide  solution for such as consulting support,and<br/> maintenance of website at a reasonable price .</p>
           <div className='img_solution'>

          <img src={img15} alt="..."/>
            </div>
        </div>
        


        </div>
    )
}

export default CreativeSection
