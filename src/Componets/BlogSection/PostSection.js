import React from 'react'
import img from '../../image/post.jpg'
import img1 from '../../image/post1.jpg'
import img2 from '../../image/blog-1.png'
import img3 from '../../image/blog-2.png'
import img4 from '../../image/blog-3.png'

function PostSection() {
    const post =[
        {
            img:img,
            heading:"Bring to table win survival strategies",
            pera:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"December 28th, 2022",
        },
        {
            img:img1,
            heading:"Interactively coordinate proactive e-commerce",
            pera:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"January 25th,2022",
        }
    ]
    const recpost =[
        {
            img:img4,
            heading:"Bring to table win survival strategies",
            pera:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"December 28th, 2022",
        },
        {
            img:img3,
            heading:"Quickly deploy strategise networks with compelling",
            pera:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"January 15th,2022",
        },
        {
            img:img2,
            heading:"Interactively coordinate proactive e-commerce",
            pera:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"January 25th,2022",
        }
    ]
  return (
    <div className='main_postSection'>
      <div className='container row'>
        <div className='col-12 col-lg-8 col-12-8 '>
            {post.map((item)=>{
                return (
                    <div className='post'>
                    <div className='post_img'>
                    <img src={item.img} alt='' />
                    </div>
                    <div className='post_content'>
                        <button>News</button>
                        <h1>{item.heading}</h1>
                        <p className='date'>{item.date}</p>
                        <p>{item.pera}</p>
                        <p className='readmore'>Read more</p>
                    </div>
                    
                </div>
                )
            })}
          
        </div>
        <div className='col-12 col-lg-4 col-12-8 '>
            <input type={'text'} placeholder="Search"/>
            <div className='recent'>
                <h4>Recent</h4>
                {recpost.map((item)=>{
                    return (
                        <div className='recent_post row'>
                        <div className='col-5 img'>
                            <img src={item.img} alt='..'/>
                        </div>
                        <div className='col-7'>
                            <h6>{item.heading}</h6>
                            <p className='date'>{item.date}</p>
                        </div>
                    </div>
                    )
                })}
              
            </div>
            <div className='tab_content'>
                <h5>Pouplar Tags</h5>
                <div className='tages'>
                    <p>Graphics</p>
                    <p>Develpment</p>
                    <p>App Design</p>
                    <p>Seo</p>
                    <p>Social Media</p>


                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostSection
