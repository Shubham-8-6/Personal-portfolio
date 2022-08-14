import React from 'react'
import './header.css'
import BTA from './BTA'
import ME  from '../../img/me.jpg'
import Hsocials from './Hsocials'

const header = () => {
  return (
   <header> 
    
    <div className="container header_container">
       <h5>Hello I'm</h5>
       <h1>Shubham Bisht</h1>
       <h5 className='text-light'>Frontend-Web-Developer</h5>
       <BTA/> 
       <Hsocials/>

       <div className="me">
        <img src={ME} alt="me" />
       </div>

       <a href="#Contact" className='scroll_down'>Scroll Down</a>
      </div>  
   
   
   </header>
  )
}

export default header
