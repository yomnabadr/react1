import React from 'react'

import logo from '../../assets/image/poert1.png'

export default function Home() {
  return (<>
  <div className="container text-white text-center">
 <div className="home ">
 <div className="home-img">
    <img src={logo} alt="" />
  </div>
  <div className="title ">
    <h1 className='font-bold text-4xl '>start Framework</h1>
  </div>
 <div className="home-line flex justify-center items-center ">
 <div className="line m-4"></div>
 <i _ngcontent-kte-c6="" class="fa-solid fa-star text-white"></i>
  <div className="line m-4"></div>
 </div>
 <div>Graphic Artist - Web Designer - Illustrator</div>

 </div>
 
  </div>
  
  </>
  
  

  
  )
}

