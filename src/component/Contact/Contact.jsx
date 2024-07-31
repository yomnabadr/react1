import React from 'react'

export default function Contact() {
  return (<>
  <div className="container">
    <div className="contact text-center  ">
      <div className="title text-5xl font-bold ">
        <h1>conatct section</h1>
      </div>
     <div className="line-contact flex justify-center items-center">
      <div className="line"></div>
      <i _ngcontent-kte-c6="" class="fa-solid fa-star text-black"></i>
      <div className="line"></div>
     </div>

     <form className='mx-auto mt-5 '>

      <label htmlFor="userName" className='relative '></label>
      <input type="text" placeholder='userName' id='userName' name='userName' className='style-input'  />


      <label htmlFor="userAge"></label>
      <input type="text" placeholder='userAge' id='userAge' name='userAge' className='style-input' />

      <label htmlFor="userEmail"></label>
      <input type="Email" placeholder='userEmail' id='userEmail' className='style-input' />

      <label htmlFor="userPassword"></label>
      <input type="password" placeholder='userPassword' name="userPassword" id="userPassword" className='style-input' />

    
    <button className='btn '>Send Message </button>
    
     </form>
      
    </div>
  </div>
  </>
 
  )
}

