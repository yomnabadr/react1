import React from 'react'
import port from '../../assets/image/poert1.png'
import port2 from '../../assets/image/port2.png'
import port3 from '../../assets/image/port3.png'

export default function portfoilo() {
  return (
   <div className="container">
    <div className="portfoilo text-center">
    <div className="title  text-5xl font-bold ">
        <h1 className='m-5'>portfolio component</h1>
      </div>
     <div className="line-portfoilo flex justify-center items-center mt-5">
      <div className="line"></div>
      <i _ngcontent-kte-c6="" class="fa-solid fa-star text-black"></i>
      <div className="line"></div>
     </div>


     <div className="grid m-5 port-card gap-10 sm:grid-cols-1 lg:grid-cols-3 ">
      <div className="port-img">
        <img src={port} alt="port" />
        <div className="layer grid justify-center items-center">
        <i _ngcontent-lni-c19="" class="text-white fa-solid fa-plus fa-6x " ></i>
        </div>
      </div>
      <div className="port-img">
        <img src={port2} alt="port" />
        <div className="layer  grid justify-center items-center">
        <i _ngcontent-lni-c19="" class="text-white fa-solid fa-plus fa-6x " ></i>
        </div>
      </div>
      <div className="port-img">
        <img src={port3} alt="port" />
        <div className="layer  grid justify-center items-center">
        <i _ngcontent-lni-c19="" class="text-white fa-solid fa-plus fa-6x " ></i>
        </div>
      </div>
      <div className="port-img">
        <img src={port} alt="port" />
        <div className="layer  grid justify-center items-center">
        <i _ngcontent-lni-c19="" class="text-white fa-solid fa-plus fa-6x " ></i>
        </div>
      </div>
      <div className="port-img">
        <img src={port2} alt="port" />
        <div className="layer grid justify-center items-center">
        <i _ngcontent-lni-c19="" class="text-white fa-solid fa-plus fa-6x " ></i>
        </div>
      </div>
      <div className="port-img">
        <img src={port3} alt="port" />
        <div className="layer  grid justify-center items-center">
        <i _ngcontent-lni-c19="" class="text-white fa-solid fa-plus fa-6x " ></i>
        </div>
      </div>
     </div>

  

    </div>
   </div>

   
  )
}


