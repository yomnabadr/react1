import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return ( <>

  <nav className='bg-sky-950 navbar fixed-top py-4'>
    <div className="container ">
        <div className='flex items-center justify-around'>
          <a className='text-white font-bold text-3xl' href="#/">START FRAMEWORK</a>
          <div className="links ">
        <ul className='flex  items-center space-x-8 text-white font-bold me-3 text-center'>
           <li><NavLink to= "about">About</NavLink></li>
           <li><NavLink to= "portfolio">Portfolio</NavLink></li>
           <li><NavLink to= "contact">Contact</NavLink></li>
           </ul>
      
        </div>
          
        </div>
    
    </div>
  
  </nav>
  </>
   
  )
}
