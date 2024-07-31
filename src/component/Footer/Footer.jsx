
import React from 'react'

export default function Footer() {
  return (<>

 <div className="footer pt-8">
    <div className="cardf m-3 grid grid-cols-3">
        <div className="card text-center">
            <h3>LOCATION</h3>
            <p className='font-thin'>2215 John Daniel Drive</p>
            <p className='font-thin'>Clark, MO 65243</p>

        </div>
        <div className="card text-center">
            <h3 className='pt-3'>AROUND THE WEB</h3>
            <div className="icons p-4">
            <i class="fa-brands fa-facebook icon"></i>
             <i class="fa-brands fa-twitter icon"></i>
            <i class="fa-brands fa-linkedin icon"></i>
            <i class="fa-brands fa-dribbble icon"></i>

            </div>
        </div>
        <div className="card text-center">
        <h3>ABOUT FREELANCER</h3>
        <p className='font-thin'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
 </div>




  </>
    
  )
}

