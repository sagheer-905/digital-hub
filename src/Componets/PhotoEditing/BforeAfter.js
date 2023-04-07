import React from 'react'
import img from '../../image/photoediting/img1.jpg'
import img1 from '../../image/photoediting/img2.jpg'
import img2 from '../../image/photoediting/img4.jpg'
import img3 from '../../image/photoediting/img3.jpg'
import ImageSlider from "react-image-comparison-slider";
function BforeAfter() {
    return (
        <div className='before_after'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 col-12'>
                        <h4>Before & After</h4>
                        <p>Skin retouching & editing service
                            <br />
                            <br />
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                        </p>
                    </div>
                    <div className='col-lg-8 col-md-12 col-12'>
                        <div style={{ width: 600, height: 300, borderRadius: "20px", overflow: "hidden", boxShadow: " 0 0 10px lightgray" }}>
                            <ImageSlider
                                image1={img}
                                image2={img1}
                                onSlide={() => {
                                    console.log("sliding");
                                }}
                                sliderColor="lightgray"
                                showHandle="black"
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-8 col-md-12 col-12'>
                        <div style={{ width: 600, height: 300, borderRadius: "20px", overflow: "hidden", boxShadow: " 0 0 10px lightgray" }}>
                            <ImageSlider
                                image1={img2}
                                image2={img3}
                                onSlide={() => {
                                    console.log("sliding");
                                }}
                                sliderColor="lightgray"
                                showHandle="black"
                            />
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-12'>
                        <h4>Before & After</h4>
                        <p>Skin retouching & editing service <br />
                            <br/>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BforeAfter
